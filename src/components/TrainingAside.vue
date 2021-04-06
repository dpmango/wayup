<template lang="pug">
  .training-aside
    -for (var i = 0; i < 3; i++)
        .training-aside__head
          .training-aside__title Физические
          .training-aside__subtitle 12 мин
        Accordion

</template>

<script>
import Accordion from "@/components/Accordion";

export default {
  name: "TrainingAside",
  components: {Accordion}
}
</script>

<style lang="scss" >


  .training-aside {
    .v-expansion-panels{
      margin-bottom: 32px;
    }
    .panel-num,
    .add-training{
      display: none;
    }
  }
  .training-aside__head {
    margin-bottom: 16px;
  }

  .training-aside__title {
    font-size: 16px;
    font-family: $FiraSansSemiBold;
    margin-bottom: 8px;
  }
  .training-aside__subtitle{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.32);
  }

</style>