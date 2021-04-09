<template lang="pug">
  mixin accord-block
    v-expansion-panel-header.accordion-panel__header.flex-column.align-start(

    )
      //dots-menu
      .block-flex.accordion-circle__header-top.mb-5
        .block-flex__left.d-flex.align-center
          base-label(
            label='МАКРОЦИКЛ'
            color='rgba(30, 147, 211, 0.15)'
            textColor="#337599"
          )
          .accordion-circle__title Общеподготовительный
        .accordion-circle__time 12 июл 2021 — 1 мая 2022
      .labels
        base-label(
          label='42 недели'
          color='#F1F3F9'
          textColor="rgba(0, 0, 0, 0.6)"
        )
        base-label(
          label='2 мезоцикла'
          color='#F1F3F9'
          textColor="rgba(0, 0, 0, 0.6)"
        )
        base-label(
          label='12 занятий'
          color='#F1F3F9'
          textColor="rgba(0, 0, 0, 0.6)"
        )
  v-expansion-panels.accordion-circle.test-panels(
    active-class='test-panel-active'
    popout
  )
    v-expansion-panel.test-panel(v-for='(item,i) in 4' :key='i')
      +accord-block
      v-expansion-panel-content
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi esse quod repellat voluptas. Aliquam at cumque debitis eaque excepturi facilis id maiores non perferendis reiciendis, saepe ullam voluptate voluptates!



</template>

<script>
export default {
  name: "TrainingEventItem"
}
</script>

<style scoped lang="scss">
.test-panels{
  justify-content: space-between;
}
.test-panel{
  width: calc(50% - 12px);
  max-width: calc(50% - 12px);
  margin-bottom: 30px;
  transition: 1s;

}
.test-panel-active{
  @include width-flex(100%)
  transition: 1s;
}

</style>