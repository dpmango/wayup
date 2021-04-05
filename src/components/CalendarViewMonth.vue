<template lang="pug">
  .calendar-wrap
    .head-calendar
      .calendar-title
        .month-title {{ thisMonth }}
        .year-title {{ thisYear }}
      .circle-block
        .circle-item
          .circle-title Макроцикл
          base-select-mini(label='Выбрать цикл')
        .circle-item
          .circle-title Мезоцикл
          base-select-mini(label='Выбрать цикл')
        .circle-item
          .circle-title Макроцикл
          base-select-mini(label='Выбрать цикл')


    .calendar
      //.month
        //a(href='#' @click='previousMonth') Пред
        //  | {{ thisMonth }} , {{ thisYear }}
        //a(href='#' @click='nextMonth') След
      .weeks
        .week-day(v-for='weekDay in weekDays' :key='weekDay')
          | {{ weekDay }}
      .days(v-if="firstWeekDay == 'Sunday'")
        .day(v-for='n in lastDay') {{ n }}
        .day(v-if='lastDay==31' v-for='a in 4' :key='a')
        .day(v-if='lastDay==30' v-for='a in 5' :key='a')
        .day(v-if='lastDay==29' v-for='a in 6' :key='a')
        .day(v-if='lastDay==28' v-for='a in 7' :key='a')
      .days(v-if="firstWeekDay == 'Monday' && firstWeekDay != 'Sunday'")
        dv.day
        .day(v-for='n in lastDay') {{ n }}
        .day(v-if='lastDay==31' v-for='a in 3' :key='a')
        .day(v-if='lastDay==30' v-for='a in 4' :key='a')
        .day(v-if='lastDay==29' v-for='a in 5' :key='a')
        .day(v-if='lastDay==28' v-for='a in 6' :key='a')
      .days(v-if="firstWeekDay == 'Tuesday'  && firstWeekDay != 'Sunday' && firstWeekDay != 'Monday'")
        .day(v-for='a in 2' :key='a')
        .day(v-for='n in lastDay') {{ n }}
        .day(v-if='lastDay==31' v-for='a in 2' :key='a')
        .day(v-if='lastDay==30' v-for='a in 3' :key='a')
        .day(v-if='lastDay==29' v-for='a in 6' :key='a')
        .day(v-if='lastDay==28' v-for='a in 5' :key='a')
      .days(v-if="firstWeekDay == 'Wednesday' && firstWeekDay != 'Sunday' && firstWeekDay != 'Monday' && firstWeekDay != 'Tuesday'")
        .day(v-for='a in 3' :key='a')
        .day(v-for='n in lastDay') {{ n }}
        dv.day(v-if='lastDay==31')
        .day(v-if='lastDay==30' v-for='a in 2' :key='a')
        .day(v-if='lastDay==29' v-for='a in 3' :key='a')
        .day(v-if='lastDay==28' v-for='a in 4' :key='a')
      .days(v-if="firstWeekDay == 'Thursday'  && firstWeekDay != 'Sunday' && firstWeekDay != 'Monday' && firstWeekDay != 'Tuesday' && firstWeekDay != 'Wednssday'")
        .day(v-for='a in 4' :key='a')
        .day(v-for='n in lastDay' :key='n')
          span.day-today(v-if='n==today') {{ n }}
          .event(v-if='n==today')
            .event-name Индивидуальное занятие длинное
            .event-time 16:00
          .event(v-if='n==today')
            .event-name Индивидуальное занятие длинное
            .event-time 16:00

          span(v-if='n!=today') {{ n }}

        .day(v-if='lastDay==30')
        .day(v-if='lastDay==29' v-for='a in 2' :key='a')
        .day(v-if='lastDay==28' v-for='a in 3' :key='a')
      .days(v-if="firstWeekDay == 'Friday' && firstWeekDay != 'Sunday' && firstWeekDay != 'Monday' && firstWeekDay != 'Tuesday' && firstWeekDay != 'Wednssday' && firstWeekDay != 'Thursday'")
        .day(v-for='a in 5' :key='a')
        .day(v-for='n in lastDay' :key="n") {{ n }}
        .day(v-if='lastDay==31' v-for='a in 6' :key='a')
        .day(v-if='lastDay==29' v-for='a in 1' :key='a')
        .day(v-if='lastDay==28' v-for='a in 2' :key='a')
      .days(v-if="firstWeekDay == 'Saturday' && firstWeekDay != 'Sunday' && firstWeekDay != 'Monday' && firstWeekDay != 'Tuesday' && firstWeekDay != 'Wednssday' && firstWeekDay != 'Thursday' && firstWeekDay != 'Friday'")
        .day(v-for='a in 6' :key='a')
        .day(v-for='n in lastDay') {{ n }}
        .day(v-if='lastDay==31' v-for='a in 5' :key='a')
        .day(v-if='lastDay==30' v-for='a in 6' :key='a')
        .day(v-if='lastDay==28' v-for='a in 1' :key='a')

</template>

<script>
import moment from 'moment'
import BaseSelectMini from "@/components/baseSelectMini";


export default {
  name: "CalendarViewMonth",
  components: {BaseSelectMini},
  data: () => ({
    months: moment().month(),
    today: moment().format("D"),
    thisMonth: moment().format("MMMM"),
    //thisYear:moment().format("YYYY"),
    thisYear: moment().format("YYYY"),
    weekDays: moment.weekdays(),
    firstDay: parseInt(moment().startOf('month').format('D')),
    lastDay: parseInt(moment().endOf('month').format('D')),
    firstWeekDay: moment().startOf('month').format("dddd"),
    friday: 'Friday',
    thursday: 'Thursday',
    counter: 0,
  }),
  methods: {
    previousMonth: function () {
      this.counter--
      this.thisMonth = moment().add(this.counter, 'months').format('MMMM');
      this.lastDay = parseInt(moment().add(this.counter, 'months').endOf('month').format('D'));
      this.thisYear = moment().add(this.counter, 'months').format("YYYY");
      this.firstWeekDay = moment().add(this.counter, 'months').startOf('month').format("dddd");
      console.log(this.thisMonth)
    },
    nextMonth: function () {
      this.counter++
      this.thisMonth = moment().add(this.counter, 'months').format('MMMM');
      this.lastDay = parseInt(moment().add(this.counter, 'months').endOf('month').format('D'));
      this.thisYear = moment().add(this.counter, 'months').format("YYYY");
      this.firstWeekDay = moment().add(this.counter, 'months').startOf('month').format("dddd");
      console.log(this.thisMonth)
    }
  },
}
</script>





<style lang="scss" scoped>


.month-title{
  font-size: 24px;
  font-family: $FiraSansMedium;
  margin-right: 10px;
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

}

.day {
  width: calc(100% / 7);
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 45px 12px 30px;
  height: 170px;
  span{
    position: absolute;
    right: 16px;
    top: 12px;
  }
  span.day-today{
    width: 32px;
    height: 32px;
    display: flex;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $red;
    top: 4px;
    right: 7px;
  }
}

.event{
  display: flex;
  align-items: center;
  margin-bottom: 15px;

}
.event-name{
  max-width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  overflow: hidden;
}

.event-time{
  width: 20%;
  font-size: 12px;
  color: rgba(0, 0, 0, .4);
  margin-left: auto;

}









</style>