<template lang="pug">
  .div
    ScheduleHeader(text='Календарь 134')
    Calendar

</template>

<script>

import ScheduleHeader from "@/components/ScheduleHeader";
import Calendar from "@/components/Calendar";

export default {
  name: 'Schedule',
  components: {Calendar, ScheduleHeader}
}
</script>

<style lang="scss" scoped>


</style>