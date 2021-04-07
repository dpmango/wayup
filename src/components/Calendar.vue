<template lang="pug">
  .div
    CalendarNav
    router-view
</template>

<script>
import CalendarNav from "@/components/CalendarNav";
import CalendarViewMonth from "@/components/CalendarViewMonth";
import CalendarViewWeek from "@/components/CalendarViewMonth";
export default {
    props: {
        period: {
            type: String,
            default: 'year'
        },
    },
    name: "Calendar",
    components: { CalendarViewMonth, CalendarNav, CalendarViewWeek},
}
</script>
