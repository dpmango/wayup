<template lang="pug">
  .calendar-wrap
    .head-calendar
      .calendar-title
        .month-title {{ month }}
        .year-title {{ yearNumber }}
        .weeks-title неделя {{ weekNumber }}
    .calendar
      .weeks
        .hours-time
        .weeks-day(v-for='(weekDay, index) in weekDays' :key='weekDay')
          span(:class="{ weeksActive: isCurrentDay(index) }")
            | {{ weekDay }} {{ getDayNumber(index) }}
      .hours-wrap
        .base-linetime(:style="baseLineStyle")
          .base-linetime-label {{ currentTime }}
          .base-linetime-round(:style="baseLineRoundStyle")
        .hours(ref="hours")
          .hours-time
            .hours-time-item(v-for="m in 12") {{ 7 + m }}.00
          .hours-col(v-for="n in 7" :class="{ hoursDisable: (n == 6 || n == 7) }")

            .hours-item(v-for="m in 12" @mouseover="showAddBtn" @mouseleave="hideAddBtn")
              base-button(label='' classAttr='button-default button-big-icon add-event'
                @click='dialogEvent = true'
              )
                template(#icon-left)
                  svg.icon-16(width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(d='M7 1V13M1 7H13' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')


            template(v-for="event in groupSchedule[n]")
              CalendarEvent(:event="event" :base="heightHourCeil")
          CalendarDragEvent(
            v-if="dragEvent"
            :event="dragEvent"
            :base="heightHourCeil"
            :width="dragEventWidth"
          )
          ModalTrainerNewEvent(:visible='dialogEvent' @close="dialogEvent=false")
          ModalTrainerEstimateSkills(:visible='dialogEventSkills' @close="dialogEventSkills=false")

</template>

<script>
  import moment from 'moment'
  import CalendarEvent from "@/components/Calendar/CalendarEvent"
  import CalendarDragEvent from "@/components/Calendar/CalendarDragEvent"
  import axios from "axios"
  import ModalTrainerNewEvent from "@/components/modals/ModalTrainerNewEvent";
  import ModalTrainerEstimateSkills from "../modals/ModalTrainerEstimateSkills";

  export default {
    name: "CalendarViewWeek",
    props: {
      initDay: {
        type: Date
      },
      events: {
        type: [Array, Object]
      }
    },
    components: {ModalTrainerEstimateSkills, ModalTrainerNewEvent, CalendarEvent, CalendarDragEvent},
    data: function () {

      return {
        weekDays: moment.weekdaysShort(true),
        heightHourCeil: 64,
        currentMoment: moment().toDate(),
        schedule: this.events,
        dragEvent: null,
        dragEventWidth: null,
        dragDiff: 0,
        dragEl: null,
        offsetMinuteMin: 15, // Минимальное смещение в минутах при drag-and-drop
        dialogEvent:false,
        dialogEventSkills: false,
      }
    },
    watch: {
      events: function (val) {
        this.schedule = val
      },
    },
    computed: {
      startWeek: function () {
        return moment(this.initDay).startOf('week');
      },
      endWeek: function () {
        return moment(this.initDay).endOf('week');
      },
      weekNumber: function () {
        return moment(this.initDay).week();
      },
      yearNumber: function () {
        return moment(this.initDay).year();
      },
      month: function () {
        return moment(this.initDay).format('MMMM');
      },
      currentTime: function () {
        return moment(this.currentMoment).format('H:mm');
      },
      baseLineStyle: function () {
        let currentHour = moment(this.currentMoment).hour();
        let currentMinute = moment(this.currentMoment).minute();
        let heughtHour = ((currentMinute / 60) * 64);
        return {
          top: `${(currentHour - 7) * this.heightHourCeil + heughtHour}px`,
          display: (currentHour >= 19 || currentHour < 7) ? 'none' : 'block'
        }
      },
      baseLineRoundStyle: function () {
        let dayCol = moment().day() - 1;
        return {
          left: `calc(((100% - 35px) / 7) * ${dayCol} + 35px)`
        }
      },
      convertMinOffset: function () {
        // Преобразуем смещение в минутах в смещение в пикселях
        return this.heightHourCeil * this.offsetMinuteMin / 60;
      },
      dragDay: function () {
        if (this.dragEvent) {
          return moment(this.dragEvent.start_time).isoWeekday();
        }
        return null;
      },
      groupSchedule: function () {
        let groupSchedule = [];
        for (let i = 1; i <= 7; i++) {
          groupSchedule[i] = [];
        }

        this.schedule.map(item => {
          if (moment(item.start_time)
            .isBetween(this.startWeek.toDate(), this.endWeek.toDate(), undefined, '[]')) {
            let day = moment(item.start_time).isoWeekday();
            groupSchedule[day].push(item);
          }

        });
        return groupSchedule;
      }
    },
    methods: {
      showAddBtn(event) {
        if (!this.dragEvent) {
          if (event.target.firstChild.tagName == 'BUTTON') {
            event.target.firstChild.style.display = 'block';
          }
        }

      },
      hideAddBtn(event) {
        event.target.firstChild.style.display = 'none';
      },
      getDayNumber(n) {
        let start = this.startWeek.toDate();
        return moment(start).add(n, 'd').format('D');
      },

      getDate(n) {
        let start = this.startWeek.toDate();
        return moment(start).add((n - 1), 'd').format('DD-MM-YYYY');
      },

      isCurrentDay(n) {
        if (moment(this.initDay).format('M') == moment().format('M')) {
          return (this.getDayNumber(n) == moment().format('D'))
        }
        return false;
      },

      setCurrentMoment() {
        setInterval(function () {
          this.currentMoment = moment().toDate();
        }.bind(this), 60000);

      },

      groupEvent() {
        let groupSchedule = [];
        for (let i = 1; i <= 7; i++) {
          groupSchedule[i] = [];
        }

        this.schedule.map(item => {
          let day = moment(item.start_time).isoWeekday();
          groupSchedule[day].push(item);
        });
        return groupSchedule;
      },

      handleDown(event) {
        setTimeout(function () {
          for (let child in this.$children) {
            if (this.$children[child].$el.contains(event.target)) {
              let eventTarget = this.$children[child];
              if (eventTarget.event) {
                eventTarget.isDraggable = true;
                this.isDraggable = true;
                this.dragEventWidth = eventTarget.$el.parentElement.getBoundingClientRect().width;
                this.dragEl = eventTarget;
                this.dragEvent = {
                  id: eventTarget.event.id,
                  start_time: eventTarget.event.start_time,
                  duration: eventTarget.event.duration,
                  title: eventTarget.event.name,
                  desc: eventTarget.event.type_of_preparation,
                  rating: eventTarget.event.rating
                }
              }

            }
          }

        }.bind(this), 200);

      },

      handleClick(event) {
        for (let child in this.$children) {
          if (this.$children[child].$el.contains(event.target)) {
            let eventTarget = this.$children[child];

            if (eventTarget.event) {

              if(moment(moment()).isAfter(moment( eventTarget.event.start_time))) {
                // Если событие уже прошло
                // Показываем модалку оценки
                this.dialogEventSkills = true;

              } else {

                // Если событие не неступило
                // Переходим в редактирование

                this.$router.push({name: 'Plan', params: {id: eventTarget.event.id}});

              }


            }

          }
        }
      },

      handleUp() {
        if (this.dragEvent) {

          this.$set(this.dragEl.$options.propsData.event, 'start_time', this.dragEvent.start_time);
          // Редактируем занятие
          axios.put('https://way-up.herokuapp.com/plans/' + this.dragEvent.id + '.json', {
            "start_time": moment.utc(this.dragEvent.start_time).format("YYYY-MM-DDTHH:mm:ss") + '.000Z',
            "end_time": moment.utc(this.dragEvent.start_time).add(this.dragEvent.duration, 'hours').format("YYYY-MM-DDTHH:mm:ss") + '.000Z',
          });

          this.groupEvent();
          this.dragEl.isDraggable = false;
          this.dragEvent = null;
          this.dragEl = null;

        }

      },

      handleMove(event) {

        if (!this.dragEvent) return;

        let offsetY = event.clientY;
        let offsetX = event.pageX;
        let boundingEl = this.$refs.hours.getBoundingClientRect();
        let startCol = (this.dragDay - 1) * this.dragEventWidth + 35 + boundingEl.left;


        if (this.dragDiff == 0) {
          this.dragDiff = offsetY;
        }

        let moveUp = ((this.dragDiff - offsetY) > 0);
        let moveDown = ((this.dragDiff - offsetY) < 0);
        // Переносим в предыдущий день
        if (offsetX < startCol && this.dragDay >= 2) {
          this.dragEvent.start_time = this.crossEvent(moment(this.dragEvent.start_time).subtract(1, 'days').toDate(), moveUp, moveDown);
          return;
        }

        // Переносим в следующий день
        if (offsetX > (startCol + this.dragEventWidth) && this.dragDay <= 6) {
          this.dragEvent.start_time = this.crossEvent(moment(this.dragEvent.start_time).add(1, 'days').toDate(), moveUp, moveDown);
          return;
        }

        // Переносим часы в рамках одного дня
        if (Math.abs(this.dragDiff - offsetY) >= this.convertMinOffset) {
          let topOffset = offsetY - this.$refs.hours.getBoundingClientRect().top;
          let topIndex = Math.trunc(topOffset / this.offsetMinuteMin) - 1;
          let startDay = moment(this.dragEvent.start_time).hours(7).minutes(0);
          let newTime = startDay.add(this.offsetMinuteMin * topIndex, 'minutes').toDate();

          if (moment(newTime).hour() < 7 || moment(newTime).hour() > 18) return;

          this.dragEvent.start_time = this.crossEvent(newTime, moveUp, moveDown);

          //newTime = this.crossEvent(newTime, moveUp, moveDown);
          // if(moment(newTime).hour() < 7 || moment(newTime).hour() > 18) return;
          this.dragEvent.start_time = this.crossEvent(newTime, moveUp, moveDown);
          this.dragDiff = 0;
        }

      },

      isCompare(event1, event2) {
        return (moment(event1.start_time).isBetween(moment(event2.start_time).toDate(), moment(event2.end_time), undefined, '[)') ||
          moment(event1.end_time).isBetween(moment(event2.start_time).toDate(), moment(event2.end_time)) ||
          moment(event2.start_time).isBetween(moment(event1.start_time).toDate(), moment(event1.end_time), undefined, '[)') ||
          moment(event2.end_time).isBetween(moment(event1.start_time).toDate(), moment(event1.end_time))
        );
      },

      crossEvent(newTime, moveUp, moveDown) {
        let calcTime = newTime;
        for (let key in this.schedule) {
          let event = this.schedule[key];

          if (!moment(this.dragEl.event.start_time).isSame(event.start_time)) {
            let ev1 = {
              start_time: moment(calcTime),
              end_time: moment(calcTime).add(this.dragEl.event.duration, 'hours')
            };
            let ev2 = {
              start_time: moment(event.start_time),
              end_time: moment(event.start_time).add(event.duration, 'hours')
            };

            // Считает пересечение интервалов
            if (this.isCompare(ev1, ev2)) {
              if (moveUp) {
                calcTime = moment(event.start_time).subtract(this.dragEl.event.duration, 'hours').toDate();
                if (moment(calcTime).hour() < 7) calcTime = moment(event.start_time).add(event.duration, 'hours').toDate();
              }
              if (moveDown) {
                calcTime = moment(event.start_time).add(event.duration, 'hours').toDate();
              }

              break;
            }

          }

        }

        if (!moment(calcTime).isSame(newTime)) {
          calcTime = this.crossEvent(calcTime, moveUp, moveDown);
        }

        return calcTime;
      },

      createEvent(date, time) {
        let start = moment(date + ' ' + time, 'DD-MM-YYYY HH:mm');

        let plan = {
          "name": "Индивидуальное занятие",
          "start_time": start.toDate(),
          "end_time": start.add(1, 'hours').toDate(),
          "microcycle_id": 850,
          "purpose_lesson": "Улучшение игры ловушкой",
          "type_lesson": "Индивидуальное",
          "type_of_preparation": "Лед",
          "qualities": [],
          "location": "Одинцово",
          "created_at": "2021-03-03T14:53:10.397Z",
          "updated_at": "2021-04-21T11:17:40.172Z",
          "start": start.toDate(),
          "end": start.add(1, 'hours').toDate(),
          "className": "bg-primary",
          "url": "https://way-up.herokuapp.com/plans/10.html"
        }

        let self = this;
        axios.post('https://way-up.herokuapp.com/plans.json', plan)
          .then(function (response) {
            if (response.data.id) {
              self.$router.push({path: '/plan/' + response.data.id})
            }


          })
      }

    },
    mounted() {

      this.setCurrentMoment();

      document.documentElement.addEventListener(
        "mousemove",
        this.handleMove,
        true
      );
      document.documentElement.addEventListener(
        "click",
        this.handleClick,
        true
      );
      document.documentElement.addEventListener(
        "mousedown",
        this.handleDown,
        true
      );
      document.documentElement.addEventListener("mouseup", this.handleUp, true);
      document.documentElement.addEventListener(
        "touchmove",
        this.handleMove,
        true
      );
      document.documentElement.addEventListener(
        "touchstart",
        this.handleDown,
        true
      );
      document.documentElement.addEventListener("touchend", this.handleUp, true);
    },
    beforeUnmount() {
      document.documentElement.removeEventListener(
        "mousemove",
        this.handleMove,
        true
      );
      document.documentElement.removeEventListener(
        "click",
        this.handleClick,
        true
      );
      document.documentElement.removeEventListener(
        "mousedown",
        this.handleDown,
        true
      );
      document.documentElement.removeEventListener(
        "mouseup",
        this.handleUp,
        true
      );
      document.documentElement.removeEventListener(
        "touchmove",
        this.handleMove,
        true
      );
      document.documentElement.removeEventListener(
        "touchstart",
        this.handleDown,
        true
      );
      document.documentElement.removeEventListener(
        "touchend",
        this.handleUp,
        true
      );
    },
  }
</script>

<style lang="scss" scoped>
  .add-event {
    display: none;
    position: absolute;
    top: rem(4px);
    left: rem(4px);
  }

  .base-linetime {
    position: absolute;
    top: rem(340px);
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(-50%);
    height: 1px;
    transition: all .4s;
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
      color: #A12238;
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
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
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
      opacity: .4;
      padding-left: rem(8px);
    }
  }

  .weeksActive {
    background: #EC4865;
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

  .circle-item {
    display: flex;
    align-items: center;
    margin-right: rem(20px);

    &:after {
      content: '';
      @include background-contain('arrow-down.svg')
      opacity: 0.56;
      width: rem(14px);
      height: rem(14px);
      transform: rotate(-90deg);
      margin-left: rem(4px);
    }

    &:last-child {
      margin-right: 0;

      &:after {
        display: none;
      }
    }
  }

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

</style>