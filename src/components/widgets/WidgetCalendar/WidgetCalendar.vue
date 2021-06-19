<template lang="pug">
  .div
    CalendarNav(
        @next="next($event)"
        @prev="prev($event)"
        :labelNav="todayLabel"
        @today="today($event)"
    )
    span.dev-console {{JSON.stringify(events)}}
    span.dev-console {{initDay}}
</template>

<script>
import moment from 'moment-timezone'
import CalendarNav from "@/components/Calendar/CalendarNav";
// import CalendarViewMonth from "@/components/Calendar/CalendarViewMonth";
// import CalendarViewWeek from "@/components/Calendar/CalendarViewMonth";
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "Calendar",
    components: { CalendarNav},
    data: () => ({
        initDay: moment().toDate(),

    }),
    computed: {
        todayLabel: function () {
            if(this.$route.name == 'CalendarMonth') {
                return moment(this.initDay).format('MMMM');
            }
            return 'Сегодня';
        },
      //...mapGetters('schedule', ['events']),
      ...mapGetters('events', ['events']),
    },
    methods: {
        next: function () {
            if(this.$route.name == 'CalendarMonth') {
                this.initDay = moment(this.initDay).add(1, 'months').toDate()
            }

            if(this.$route.name == 'CalendarWeek') {
                this.initDay = moment(this.initDay).add(1, 'weeks').toDate()
            }
        },
        prev: function () {
            if(this.$route.name == 'CalendarMonth') {
                this.initDay = moment(this.initDay).subtract(1, 'months').toDate()
            }
            if(this.$route.name == 'CalendarWeek') {
                this.initDay = moment(this.initDay).subtract(1, 'weeks').toDate()
            }
        },
        today: function () {
            if(this.$route.name == 'CalendarWeek') {
                this.initDay = moment().toDate()
            }
        },
      ...mapActions('schedule', ['loadPlans']),
      ...mapActions('events', ['loadEvents']),
    },
  created() {
    console.log('created widget calendar')
    this.loadPlans();
    this.loadEvents();
  }

}
</script>
