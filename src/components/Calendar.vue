<template lang="pug">
  .div
    CalendarNav(
      @next="next($event)"
      @prev="prev($event)"
      :labelNav="todayLabel"
    )
    router-view(:initDay="initDay" :events="events")
</template>

<script>
import moment from 'moment'
import CalendarNav from "@/components/CalendarNav";
import CalendarViewMonth from "@/components/CalendarViewMonth";
import CalendarViewWeek from "@/components/CalendarViewMonth";

export default {
  name: "Calendar",
  components: {CalendarViewMonth, CalendarNav, CalendarViewWeek},
  data: () => ({
    initDay: moment().toDate(),
    events: [
      {
        id: 21,
        start_time: "2021-06-08T13:05:00.000Z",
        duration: 1,
        name: "Индивидуальное занятие",
        type_of_preparation: "Лед",
        rating: '5 / 10',
      },
      {
        id: 21,
        start_time: "2021-06-07T12:05:00.000Z",
        duration: .6,
        name: "Индивидуальное занятие",
        type_of_preparation: "Лед",
        rating: '5 / 10',
      },
      {
        id: 21,
        start_time: "2021-06-10T12:05:00.000Z",
        duration: 2,
        name: "Индивидуальное занятие",
        type_of_preparation: "Лед",
        rating: '5 / 10',
      }
    ]
  }),
  computed: {
    todayLabel: function () {
      if (this.$route.name == 'CalendarMonth') {
        return moment(this.initDay).format('MMMM');
      }
      return 'Сегодня';
    }
  },
  methods: {
    next: function () {
      if (this.$route.name == 'CalendarMonth') {
        this.initDay = moment(this.initDay).add(1, 'months').toDate()
      }

      if (this.$route.name == 'CalendarWeek') {
        this.initDay = moment(this.initDay).add(1, 'weeks').toDate()
      }
    },
    prev: function () {
      if (this.$route.name == 'CalendarMonth') {
        this.initDay = moment(this.initDay).subtract(1, 'months').toDate()
      }
      if (this.$route.name == 'CalendarWeek') {
        this.initDay = moment(this.initDay).subtract(1, 'weeks').toDate()
      }
    },
    today: function () {
      if (this.$route.name == 'CalendarWeek') {
        this.initDay = moment().toDate()
      }
    }
  },
}
</script>
