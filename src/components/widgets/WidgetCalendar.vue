<template lang="pug">
  .widget
    
    // calendar widget header
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title
            .calendar-title
                .month-title {{ month }}
                .year-title {{ yearNumber }}
                .weeks-title неделя {{ weekNumber }}

        .buttons-wrap
            .segments-block
                v-item-group.d-flex(mandatory).mb-0
                    v-item(v-slot='{ active, toggle }')
                        .segment-item
                            base-segment(
                                classAttr='segment-default segment-big'
                                label="Месяц"
                                tag="div"
                                @click='toggle'
                            )

                    v-item(v-slot='{ active, toggle }')
                        .segment-item
                            base-segment(
                                classAttr='segment-default segment-big'
                                label="Неделя"
                                tag="div"
                                @click='toggle'
                            )

            .today-block.ml-6
                base-button(classAttr='button-default button-gray button-big-icon mr-1' tag='a' @click="prev($event)")
                    template(#icon-left)
                        svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M9.53033 3.46967C9.82322 3.76256 9.82322 4.23744 9.53033 4.53033L6.06066 8L9.53033 11.4697C9.82322 11.7626 9.82322 12.2374 9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303L4.46967 8.53033C4.32902 8.38968 4.25 8.19891 4.25 8C4.25 7.80109 4.32902 7.61032 4.46967 7.46967L8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967Z')
                base-button(:label='todayLabel' classAttr='button-default button-gray button-big mr-1' tag='a'  @click="today($event)")
                base-button(classAttr='button-default button-gray button-big-icon mr-1' tag='a' @click="next($event)")
                    template(#icon-left)
                        svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6.46967 12.5303C6.17678 12.2374 6.17678 11.7626 6.46967 11.4697L9.93934 8L6.46967 4.53033C6.17678 4.23744 6.17678 3.76256 6.46967 3.46967C6.76256 3.17678 7.23744 3.17678 7.53033 3.46967L11.5303 7.46967C11.8232 7.76256 11.8232 8.23744 11.5303 8.53033L7.53033 12.5303C7.23744 12.8232 6.76256 12.8232 6.46967 12.5303Z')

    // widget
    .widget-content
        // span.dev-log {{events}}
        // span.dev-log {{groupScheduleGetter}}
        template(v-if="view === 'week'")
            .calendar
                .hours-wrap
                    .base-linetime(:style="baseLineStyle")
                        .base-linetime-label {{ currentTime }}
                        .base-linetime-round(:style="baseLineRoundStyle")
                    .hours(ref="hours")
                        .hours-time
                            .hours-time-item(v-for="m in 2") {{ 10 * m }}.00
                        .hours-col(v-for="n in 7" :class="{ hoursDisable: (n == 6 || n == 7) }")

                            template(v-for="event in groupScheduleGetter[n]")
                                CalendarEvent(:event="event" :base="heightHourCeil")
                .weeks
                    .hours-time
                    .weeks-day(v-for='(weekDay, index) in weekDays' :key='weekDay')
                        span(:class="{ weeksActive: isCurrentDay(index) }")
                            | {{ weekDay }} {{ getDayNumber(index) }}

</template>

<script>
import moment from 'moment-timezone'
import CalendarEvent from '@/components/Calendar/CalendarEvent'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'WidgetCalendar',
  components: { CalendarEvent },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Календарь',
    },
  },
  data() {
    return {
      initDay: moment().toDate(),
      view: 'week',
      weekDays: moment.weekdaysShort(true),
      heightHourCeil: 16,
    }
  },
  computed: {
    todayLabel() {
      // if(this.view == 'month') {
      //     return moment(this.initDay).format('MMMM');
      // }
      return 'Сегодня'
    },
    initDayMomentConstructor() {
      return moment(this.initDay)
    },
    startWeek() {
      return this.initDayMomentConstructor.startOf('week')
    },
    endWeek() {
      return this.initDayMomentConstructor.endOf('week')
    },
    weekNumber() {
      return this.initDayMomentConstructor.week()
    },
    yearNumber() {
      return this.initDayMomentConstructor.year()
    },
    month() {
      return this.initDayMomentConstructor.format('MMMM')
    },
    currentTime() {
      return this.initDayMomentConstructor.format('H:mm')
    },
    baseLineStyle() {
      let currentHour = this.initDayMomentConstructor.hour()
      let currentMinute = this.initDayMomentConstructor.minute()
      let heightHour = (currentMinute / 60) * 20

      return {
        top: `${(currentHour - 7) * this.heightHourCeil + heightHour}px`,
        display: currentHour >= 19 || currentHour < 7 ? 'none' : 'block',
      }
    },
    baseLineRoundStyle() {
      let dayCol = moment().day() - 1
      return {
        left: `calc(((100% - 35px) / 7) * ${dayCol} + 35px)`,
      }
    },

    groupScheduleGetter() {
      return this.groupSchedule(this.initDayMomentConstructor)
    },

    ...mapGetters('events', ['events', 'groupSchedule']),
  },
  methods: {
    next() {
      if (this.view == 'week') {
        this.initDay = this.initDayMomentConstructor.add(1, 'weeks').toDate()
      }
    },
    prev() {
      if (this.view == 'week') {
        this.initDay = this.initDayMomentConstructor.subtract(1, 'weeks').toDate()
      }
    },
    today() {
      if (this.view == 'week') {
        this.initDay = moment().toDate()
      }
    },
    getDayNumber(n) {
      let start = this.startWeek.toDate()
      return moment(start).add(n, 'd').format('D')
    },

    isCurrentDay(n) {
      if (moment(this.initDay).format('M') == moment().format('M')) {
        return this.getDayNumber(n) == moment().format('D')
      }
      return false
    },

    setinitDay() {
      setInterval(
        function () {
          this.initDay = moment().toDate()
        }.bind(this),
        60000
      )
    },

    ...mapActions('events', ['loadEvents']),
  },
  watch: {},
  mounted() {
    this.setinitDay()
    this.loadEvents()
  },
}
</script>

<style lang="scss" scoped>
.base-linetime {
  position: absolute;
  top: rem(340px);
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  height: 1px;
  transition: all 0.4s;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255, 20, 20, 0.6);
    top: 50%;
  }

  &-label {
    position: absolute;
    left: rem(-4px);
    color: #a12238;
    font-size: rem(10px);
    background: #fff;
    border: 1px solid rgba(255, 20, 20, 0.9);
    border-radius: rem(4px);
    padding: rem(3px) rem(4px) rem(2px);
    transform: translateY(-50%);
    z-index: 1;
  }

  &-round {
    width: rem(8px);
    height: rem(8px);
    background: rgba(255, 20, 20, 0.9);
    border-radius: 100%;
    position: absolute;
    top: rem(-3px);
    transform: translateX(-5px);
  }
}

.hours {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;

  &-wrap {
    position: relative;
  }

  &-time {
    width: rem(35px);

    &-item {
      font-weight: 400;
      font-size: rem(12px);
      height: 64px;
      display: flex;
      align-items: flex-end;

      &:after {
        content: '';
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        position: absolute;
        width: calc(100% - 2.188rem);
        right: 0;
      }
    }
  }

  &-col {
    width: calc((100% - 2.188rem) / 7);
    position: relative;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  &-item {
    height: 64px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;

    /* &:hover .add-event {
           display: block;
       }*/
  }
}

.hoursDisable {
  background: rgba(121, 140, 189, 0.05);
}

.weeks {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  &-day {
    width: calc((100% - 2.188rem) / 7);
    flex-grow: 1;
    padding: rem(10px);
    text-align: left;
    font-size: rem(14px);
  }

  &-title {
    font-size: rem(18px);
    color: #000;
    opacity: 0.4;
    padding-left: rem(8px);
  }
}

.weeksActive {
  background: #ec4865;
  color: #fff;
  border-radius: rem(4px);
  padding: rem(2px) rem(6px);
}

.month-title {
  font-size: rem(24px);
  font-family: $FiraSansMedium;
  margin-right: rem(10px);
  text-transform: capitalize;
}

.year-title {
  font-size: rem(24px);
}

.head-calendar {
  padding-bottom: rem(5px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// .circle-item {
//   display: flex;
//   align-items: center;
//   margin-right: rem(20px);

//   &:after {
//     content: '';
//     @include background-contain('arrow-down.svg');
//     opacity: 0.56;
//     width: rem(14px);
//     height: rem(14px);
//     transform: rotate(-90deg);
//     margin-left: rem(4px);
//   }

//   &:last-child {
//     margin-right: 0;

//     &:after {
//       display: none;
//     }
//   }
// }

.circle-block {
  display: flex;
  align-items: center;
  margin-right: rem(-12px);
}

.circle-title {
  margin-right: rem(4px);
  font-size: rem(14px);
  color: $gray;
}

.calendar-title {
  display: flex;
  align-items: flex-end;
}

.head-calendar {
  border-bottom: 2px solid rgba(34, 34, 34, 0.16);
  margin-bottom: rem(22px);
}

.calendar {
  width: 100%;
}

.month {
  padding: rem(20px);
  text-align: center;
  font-size: 1.5rem;
}

.buttons-wrap {
  display: flex;
  margin-left: auto;
}

.widget {
  .calendar {
    margin: 0 8px;
    width: auto;
  }
  .widget-content {
    background: #f8f9fb;
  }

  .hours-col {
    background: white;
    &.hoursDisable {
      background: #f8f9fb;
    }
  }
  .hours-time-item {
    height: 82px;
    &:first-child {
      align-items: flex-start;
    }
  }

  .weeks {
    border-bottom: 0;
  }
  .weeks-day {
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  ::v-deep {
    .event {
      padding: 2px 4px;
    }
    .event-rating {
      top: 50%;
      transform: translateY(-50%);
      font-size: 10px;
      padding: 4px 6px;
    }
    .event-time,
    .event-rating,
    .event-desc {
      display: none;
    }
    .event-title {
      font-size: 12px;
      line-height: 1;
      font-family: $FiraSansRegular;
    }
  }
}
</style>
