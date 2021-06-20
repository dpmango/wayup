<template lang="pug">

  v-tabs.accordion-tabs(
    background-color='transparent'
    height='30'
    active-class='accordion-tab-active'
    slider-color='#326BFF'
    color='#000'
  )
    v-tab Видео и описание
    v-tab Методические указания
    v-tab Инвентарь

    v-tab-item
      img.img-trainig_big(
        src="@/assets/images/img-traning-big.png"
      )
      .training-desc--inner
        | {{ elem.guidelines }}


    v-tab-item

      .training-desc--inner
        p И.п. — лежа на льду на животе; руки подняты, на клюшке; локти на льду.
        p 1. Подтягиваясь с помощью локтей, встать на колени
        p 2. Встать в основную стойку

    v-tab-item

      .training-desc--inner
        p И.п. — лежа на льду на животе; руки подняты, на клюшке; локти на льду.
        p 1. Подтягиваясь с помощью локтей, встать на колени
        p 2. Встать в основную стойку


</template>

<script>
export default {
  name: "AccordionTabs",
  props: {
    elem: Object
  }
}
</script>

<style lang="scss">
.accordion-tabs {
  .v-item-group {
    margin-bottom: 12px;
  }

  .v-tab {
    font-size: 14px;
    text-transform: none;
    letter-spacing: normal;
    padding-left: 0;
    padding-right: 0;
    min-width: 60px;
    margin-right: 30px;
  }

  .accordion-tab-active,
  .v-tabs-bar .v-tab:not(.v-tab--active) {
    color: #000 !important;
  }

  .img-trainig_big {
    max-width: 100%;
    width: 512px;
    height: 186px;
    margin-bottom: 20px;
  }

  .training-desc--inner {
    font-size: 14px;

    p {
      margin-bottom: 0;
      line-height: 20px;
    }
  }

}


</style>