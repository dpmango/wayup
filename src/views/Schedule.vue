<template lang="pug">
  .div
    ScheduleHeader(title='Календарь')
      template(v-slot:header-right)
        .text-block
          img.icon-20.icon-cup(
            src="@/assets/images/coffee-cup.svg"
          )
          .text-info Вы работаете непрерывно
            span 16 часов
        v-avatar(
          height='40px'
          width='40px'
        )
          img(
            src="@/assets/images/avatar.png"
          )

    Calendar(:period="$route.params.period")
</template>

<script>

  import ScheduleHeader from "@/components/ScheduleHeader";
  import Calendar from "@/components/Calendar/Calendar";

  export default {
    name: 'Schedule',
    components: {Calendar, ScheduleHeader}
  }
</script>

<style lang="scss" scoped>


</style>
