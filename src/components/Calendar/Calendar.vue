<template lang="pug">
  .div
    CalendarNav(
        @next="next($event)"
        @prev="prev($event)"
        :labelNav="todayLabel"
        @today="today($event)"
    )
    
    router-view(:initDay="initDay" :events="events")
</template>

<script>
import moment from 'moment-timezone'
import CalendarNav from '@/components/Calendar/CalendarNav'
import CalendarViewMonth from '@/components/Calendar/CalendarViewMonth'
import CalendarViewWeek from '@/components/Calendar/CalendarViewMonth'
import { mapActions, mapGetters } from 'vuex'
import ModalTrainerNewEvent from '@/components/modals/ModalTrainerNewEvent'
import { TRAINER_ROLE, SPORTSMAN_ROLE } from '@/config/api'

export default {
  name: 'Calendar',
  components: { CalendarViewMonth, CalendarNav, CalendarViewWeek, ModalTrainerNewEvent },
  data: () => ({
    initDay: moment().toDate(),
    dialogEvent: false,
  }),
  computed: {
    todayLabel: function () {
      if (this.$route.name == 'CalendarMonth') {
        return moment(this.initDay).format('MMMM')
      }
      return 'Сегодня'
    },
    ...mapGetters('events', ['events']),
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
    },
    ...mapActions('events', ['loadEvents', 'loadEventsSportsman']),
    ...mapActions('auth', ['loadProfile']),
  },
  created() {
    const role = localStorage.getItem('role');

    if(role == TRAINER_ROLE) {
      this.loadEvents();
        this.loadProfile();
    }

    if(role == SPORTSMAN_ROLE) {
      this.loadEventsSportsman();

    }

  },
}
</script>
