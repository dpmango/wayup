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
import CalendarNav from "@/components/Calendar/CalendarNav";
import CalendarViewMonth from "@/components/Calendar/CalendarViewMonth";
import CalendarViewWeek from "@/components/Calendar/CalendarViewMonth";
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "Calendar",
    components: { CalendarViewMonth, CalendarNav, CalendarViewWeek},
    data: () => ({
        initDay: moment().toDate(),
        //events: []
    }),
    computed: {
        todayLabel: function () {
            if(this.$route.name == 'CalendarMonth') {
                return moment(this.initDay).format('MMMM');
            }
            return 'Сегодня';
        },
      ...mapGetters('schedule', ['events'])
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
    },
  created() {
    this.loadPlans();
  },
    mounted() {

        /*this.$store.dispatch('schedule/loadPlans').then(() => {
            let plans = this.$store.state.plans;

            plans.map(item => {
                let diffMin = moment(item.end_time).diff(moment(item.start_time), 'minutes');
                let dataEvent = {
                    id: item.id,
                    start_time: item.start_time,
                    duration: parseFloat((diffMin/60).toFixed(1)),
                    name: item.name,
                    type_of_preparation: item.type_of_preparation,
                    rating: '5 / 10',
                }
                this.events.push(dataEvent);
            });
        });*/

    }
}
</script>
