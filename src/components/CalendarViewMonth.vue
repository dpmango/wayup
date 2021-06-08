<template lang="pug">
  .calendar-wrap
    .head-calendar
      .calendar-title
        .month-title {{ thisMonth }}
        .year-title {{ thisYear }}
      //.circle-block
        .circle-item
          .circle-title Макроцикл
          base-select-mini(label='Выбрать цикл' classAttr='select-base custom-select_mini')
        .circle-item
          .circle-title Мезоцикл
          base-select-mini(label='Выбрать цикл' classAttr='select-base custom-select_mini')
        .circle-item
          .circle-title Макроцикл
          base-select-mini(label='Выбрать цикл' classAttr='select-base custom-select_mini')
    .calendar
      .weeks
        .week-day(v-for='weekDay in weekDays' :key='weekDay')
          | {{ weekDay }}
      .days
        calendar-day(
            v-for="n in periodLength"
            :key="n"
            :day="getDay(n)"
            :series="series"
        )
        .base-line(:style="baseLineStyle" v-if="isShowBaseline")
            .base-line-label(@mouseover="hoverChildren" @mouseleave="leaveChildren") Базовый 8 15 фев - 13 марта, 2021
            .base-line-label-big Базовый 8 15 фев - 13 марта, 2021
</template>

<script>
import moment from 'moment'
import 'moment/locale/ru'
import CalendarDay from "@/components/CalendarDay";

export default {
  name: "CalendarViewMonth",
  components: { CalendarDay},
    props: {
        initDay: {
          type: Date
      }
    },
  data: function () {
    return {
    dataInitDay: this.initDay,
    weekDays: moment.weekdaysShort(true),
    series: ['29 03 2021','30 03 2021', '31 03 2021', '01 04 2021', '02 04 2021', '03 04 2021', '04 04 2021'
          , '05 04 2021', '06 04 2021', '07 04 2021', '08 04 2021', '09 04 2021', '10 04 2021']
  }},
  methods: {
      getDay: function (n) {
          return moment(this.startWeek.toDate()).add(n-1, 'd');
      },
      hoverChildren: function () {
          this.$children.forEach(child => {
              if(child.$options.name === "CalendarDay") {
                  child.backlightDay();
              }
          });
      },
      leaveChildren: function () {
          this.$children.forEach(child => {
              if(child.$options.name === "CalendarDay") {
                  child.notBacklightDay();
              }
          });
      }
  },
    computed: {
        thisMonth: function () {
            return moment(this.initDay).format("MMMM");
        },
        thisYear: function () {
            return moment(this.initDay).format("YYYY");
        },
        startDay: function () {
            return moment(this.initDay).startOf('month');
        },
        endDay: function () {
            return moment(this.initDay).endOf('month');
        },
        startWeek: function () {
            return this.startDay.startOf('week');
        },
        endWeek: function () {
            return this.endDay.endOf('week');
        },
        periodLength: function () {
            return this.endWeek.diff(this.startWeek, 'days') + 1;
        },
        baseLineStyle: function () {
            let periodOfStart = moment().diff(this.startWeek, 'days') + 1;
            return {
                top: (Math.ceil(periodOfStart/7) * 170) + 'px'
            }
        },
        isShowBaseline: function () {
            return moment(this.initDay).format('DD-MM-YYYY') == moment().format('DD-MM-YYYY')
        }
    },
    created: function () {
        moment.locale('ru');
    },
}
</script>

<style lang="scss" scoped>
    .month-title{
      font-size: 24px;
      font-family: $FiraSansMedium;
      margin-right: 10px;
        text-transform: capitalize;
    }
    .year-title{
      font-size: 24px;
    }

    .head-calendar{
      padding-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;

    }
    .circle-item{
      display: flex;
      align-items: center;
      margin-right: 20px;
      &:after{
        content: '';
        @include background-contain('arrow-down.svg')
        opacity: 0.56;
        width: 14px;
        height: 14px;
        transform: rotate(-90deg);
        margin-left: 4px;
      }
      &:last-child{
        margin-right: 0;
        &:after {
          display: none;
        }
      }
    }

    .circle-block{
      display: flex;
      align-items: center;
      margin-right: -12px;
    }
    .circle-title {
      margin-right: 4px;
      font-size: 14px;
      color: $gray;
    }
    .calendar-title{
      display: flex;
      align-items: center;

    }
    .head-calendar{
      border-bottom: 2px solid rgba(34, 34, 34, 0.16);
      margin-bottom: 22px;
    }

    .calendar {
      width: 100%;
    }

    .month {
      padding: 20px;
      text-align: center;
      font-size: 1.5rem;
    }

    .weeks {
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      flex-wrap: wrap;
    }

    .week-day {
        width: 100px;
        flex-grow: 1;
        padding: 10px;
        text-align: left;
        font-size: 14px;
    }

    .days {
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        position: relative;
    }
    .base-line {
        position: absolute;
        top: 340px;
        width: 100%;
        display: flex;
        justify-content: center;
        transform: translateY(-50%);
        &-label {
            padding: 6px 8px 5px;
            background: linear-gradient(0deg, rgba(236, 72, 101, 0.2), rgba(236, 72, 101, 0.2)), #FFFFFF;
            border: 1px solid #EC4865;
            box-sizing: border-box;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #A12238;
            font-size: 10px;
            position: relative;
            z-index: 1;
            cursor: pointer;
            &:hover + .base-line-label-big {
                display: flex;
            }
        }
        &:after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(255, 20, 20, 0.6);
            top: 50%;
        }
        &-label-big {
            position: absolute;
            top: -6px;
            background: #FFFFFF;
            border: 1px solid #EC4865;
            box-sizing: border-box;
            border-radius: 4px;
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #A12238;
            padding: 0 8px;
            height: 29px;
            line-height: 1;
            align-items: center;
            cursor: default;
            user-select: none;
            transform: translateY(-100%);
            display: none;
        }
    }

</style>