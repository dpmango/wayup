<template lang="pug">
  v-expansion-panels.acc-exercises__panels
    v-expansion-panel(v-for='(item,i) in 3' :key='i')
      v-expansion-panel-header.acc-exercises__header
        .block-flex
          .block-flex__left.d-flex.align-center
            .acc-exercises__title.mr-4 Земля
            base-badge(
              label="ЗАВЕРШЕНО"
              background="rgba(61, 197, 13, 0.15)"
              textColor="#1F7800"
            )
          .block-flex__right.ml-auto.pr-12
            .acc-exercises__num 5,75

      v-expansion-panel-content.acc-exercises__content
        .acc-exercises__items
          .acc-exercises__item(v-for='(item,i) in 3' :key='i')
            .acc-exercises__item-num {{i + 1}}
            .acc-exercises__item-text Без 30 метров с высокого старта
            .acc-exercises__item-estimation.ml-auto 5





</template>

<script>
export default {
  name: "AccordionExercises"
}
</script>

<style scoped lang="scss">


.acc-exercises__header {
  min-height: 75px;
  //border-radius: 12px 12px 0px 0px;
}

.acc-exercises__panels {
  ::v-deep {
    .v-expansion-panel-content__wrap {
      padding: 0;
      background: #F8F9FC;
      box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);

    }
    .v-expansion-panel:before{
      box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
    }

    .v-expansion-panel--active {
      margin-top: 0;
      .acc-exercises__header {
        box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.4);
      }

      .v-expansion-panel-content__wrap {
        box-shadow: none;
      }
    }

    .v-expansion-panel {
      border-radius: 12px !important;
      margin-bottom: 15px;

    }

  }

  .acc-exercises__title {
    font-size: 20px;
    font-family: $FiraSansMedium;
  }

  .acc-exercises__num {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    font-family: $FiraSansMedium;

  }

  .acc-exercises__item{
    padding: 16px 30px 20px 24px;
    display: flex;
    align-items: center;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
    &:last-child{
      box-shadow: none;
    }
  }
  .acc-exercises__item-num{
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @include width-flex(20px)
    height: 20px;
    font-size: 12px;
    margin-right: 12px;
  }
  .acc-exercises__item-text{
    font-size: 16px;
    font-family: $FiraSansMedium;
  }

  .color-red{
    color: #EC4865;
  }

  .color-gray{
    color: rgba(0, 0, 0, 0.4);
  }

  .color-green{
    color: #3DC50D;
  }

}

</style>