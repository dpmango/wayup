<template lang="pug">
    div(:class="classObjectDay")
        div(:class="classObject")
               template(v-if="day.format('D') == 1")
                |  {{ day.format('D MMMM') }}
               template(v-else)
                | {{ day.format('D') }}
        .events-wrap
            .events
                .event(v-for="event in sortEvents" @click="$router.push({ name: 'Plan', params: { id: event.id } })")
                    .event-name {{ event.name }}
                    .event-time {{ getTimeFormat(event.start_time) }}
</template>

<script>
import moment from 'moment'

export default {
  props: {
    day: {
      type: [Object, Array, Number],
    },
    series: {
      type: Array,
    },
    events: {
      type: Array,
    },
  },
  name: 'CalendarDay',
  data: () => ({
    todayDay: moment().format('D'),
    todayMonth: moment().format('M'),
    isHover: false,
  }),
  computed: {
    sortEvents: function () {
      return this.events.slice().sort((a, b) => {
        if (moment(a.start_time).isBefore(b.start_time)) {
          return -1
        } else {
          return 1
        }
      })
    },
    isToday: function () {
      return moment().format('DD-MM-YYYY') == this.day.format('DD-MM-YYYY') && this.day.format('D') !== 1
    },
    isCurrentMonth: function () {
      return this.todayMonth == this.day.format('M')
    },
    isWeekend: function () {
      return this.day.day() == 0 || this.day.day() == 6
    },
    classObject: function () {
      return {
        'day-today': this.isToday,
        'day-number': true,
      }
    },
    classObjectDay: function () {
      return {
        day: true,
        gray: this.isWeekend,
        disable: !this.isCurrentMonth,
        dark: this.isHover,
      }
    },
  },
  methods: {
    getTimeFormat(time) {
      return moment(time).format('HH:mm')
    },
    backlightDay: function () {
      if (this.series.includes(this.day.format('DD MM YYYY'))) {
        this.isHover = true
      }
    },
    notBacklightDay: function () {
      this.isHover = false
    },
  },
  mounted() {
    if (this.events.length > 0) {
      let test = this.events.sort((a, b) => {
        if (moment(a.start_time).isBefore(b.start_time)) {
          return -1
        } else {
          return 1
        }
      })
      console.log(test)
    }
  },
}
</script>

<style scoped lang="scss">
.events {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -17px;
  padding-right: 5px;
  &-wrap {
    height: 100%;
    overflow: hidden;
  }
}
events::-webkit-scrollbar {
  width: 5px;
}
.day {
  width: calc(100% / 7);
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 45px rem(12px) rem(30px);
  padding-bottom: 0;
  height: 170px;
  transition: all 0.4s;
  &.gray {
    background: rgba(121, 140, 189, 0.05);
  }
  &.disable {
    color: rgba(0, 0, 0, 0.5);
  }
  &.dark {
    background: rgba(50, 107, 255, 0.1);
  }
}
.day-number {
  position: absolute;
  right: rem(16px);
  top: rem(16px);
  &.day-today {
    width: rem(32px);
    height: rem(32px);
    display: flex;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $red;
    top: rem(4px);
    right: rem(7px);
  }
}
.event {
  display: flex;
  align-items: center;
  margin-bottom: rem(15px);
  cursor: pointer;
}
.event-name {
  max-width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: rem(12px);
  overflow: hidden;
}

.event-time {
  width: 20%;
  font-size: rem(12px);
  color: rgba(0, 0, 0, 0.4);
  margin-left: auto;
}
</style>
