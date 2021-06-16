<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(
        md='12'
      )
        .h1.mb-10.mt-16 Общая информация
        v-row
          v-col(md="12")
            GeneralProgress
          v-col(md="7")
            WidgetTrainerGroup


</template>

<script>


import WidgetTrainerGroup from "@/components/widgets/WidgetTrainerGroup";
import HeaderTrainerAccount from "@/components/elements/HeaderTrainerAccount";
import GeneralProgress from "@/components/personal/GeneralProgress";

export default {
  name: "Information",
  components: {GeneralProgress, HeaderTrainerAccount, WidgetTrainerGroup},
}

</script>

<style scoped lang="scss">


</style>