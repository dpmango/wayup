<template lang="pug">
  .div
    CalendarNav(
        @next="next($event)"
        @prev="prev($event)"
        :labelNav="todayLabel"
    )
    router-view(:initDay="initDay")
</template>

<script>
import moment from 'moment'
import CalendarNav from "@/components/CalendarNav";
import CalendarViewMonth from "@/components/CalendarViewMonth";
import CalendarViewWeek from "@/components/CalendarViewMonth";

export default {
    name: "Calendar",
    components: { CalendarViewMonth, CalendarNav, CalendarViewWeek},
    data: () => ({
        initDay: moment().toDate(),
    }),
    computed: {
        todayLabel: function () {
            if(this.$route.name == 'CalendarMonth') {
                return moment(this.initDay).format('MMMM');
            }
            return 'Сегодня';
        }
    },
    methods: {
        next: function () {
            if(this.$route.name == 'CalendarMonth') {
                this.initDay = moment(this.initDay).add(1, 'months').toDate()
            }
        },
        prev: function () {
            if(this.$route.name == 'CalendarMonth') {
                this.initDay = moment(this.initDay).subtract(1, 'months').toDate()
            }
        }
    },
}
</script>
