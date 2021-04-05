<template lang="pug">
  .div
    CalendarButtons
    CalendarViewMonth

</template>

<script>
import CalendarButtons from "@/components/CalendarButtons";
import CalendarViewMonth from "@/components/CalendarViewMonth";
export default {
name: "Calendar",
  components: { CalendarViewMonth, CalendarButtons}
}
</script>

<style scoped>

</style>