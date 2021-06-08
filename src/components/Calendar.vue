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
        "id": 31,
        "name": "Индивидуальное занятие",
        "start_time": "2021-04-29T15:00:00.000+03:00",
        "end_time": "2021-04-29T16:00:00.000+03:00",
        "microcycle_id": 850,
        "purpose_lesson": "Улучшение игры ловушкой",
        "type_lesson": "Индивидуальное",
        "type_of_preparation": "Лед",
        "qualities": [],
        "location": "Одинцово",
        "created_at": "2021-04-30T09:44:17.640+03:00",
        "updated_at": "2021-04-30T09:44:17.640+03:00",
        "start": "2021-04-29T15:00:00.000+03:00",
        "end": "2021-04-29T16:00:00.000+03:00",
        "className": "bg-primary",
        "url": "https://way-up.herokuapp.com/plans/31.html"
      },
      {
        "id": 32,
        "name": "Индивидуальное занятие",
        "start_time": "2021-04-27T13:00:00.000+03:00",
        "end_time": "2021-04-27T14:00:00.000+03:00",
        "microcycle_id": 850,
        "purpose_lesson": "Улучшение игры ловушкой",
        "type_lesson": "Индивидуальное",
        "type_of_preparation": "Лед",
        "qualities": [],
        "location": "Одинцово",
        "created_at": "2021-04-30T09:50:37.169+03:00",
        "updated_at": "2021-04-30T09:50:37.169+03:00",
        "start": "2021-04-27T13:00:00.000+03:00",
        "end": "2021-04-27T14:00:00.000+03:00",
        "className": "bg-danger",
        "url": "https://way-up.herokuapp.com/plans/32.html"
      },
      {
        "id": 10,
        "name": "лет",
        "start_time": "2021-04-23T11:00:00.000+03:00",
        "end_time": "2021-04-23T12:00:00.000+03:00",
        "microcycle_id": 850,
        "purpose_lesson": "Улучшение игры ловушкой",
        "type_lesson": "Индивидуальное",
        "type_of_preparation": "Лед",
        "qualities": [],
        "location": "Одинцово",
        "created_at": "2021-03-03T14:53:10.397+03:00",
        "updated_at": "2021-04-23T06:17:23.714+03:00",
        "start": "2021-04-23T11:00:00.000+03:00",
        "end": "2021-04-23T12:00:00.000+03:00",
        "className": "bg-danger",
        "url": "https://way-up.herokuapp.com/plans/10.html"
      },
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
