<template lang="pug">
  .indication-statistic__block
    .is__items
      .is__item.is__item_quant
        .is__item-num 10
        .is__item-desc Количество игр
      .is__item.is__item_time
        .is__item-num 367
        .is__item-desc Время на площадке
      .is__item.is__item_reliability
        .is__item-num 1.66
        .is__item-desc Надёжность
      .is__item.is__item_reflected
        .is__item-num 89%
        .is__item-desc Отражённых бросков
      .is__item.is__item_goal
        .is__item-num 351
        .is__item-desc Бросков в створ



</template>

<script>
export default {
  name: "IndicationStatistic"
}
</script>

<style scoped lang="scss">

.is__items{
  display: flex;

}

.is__item{
  height: 77px;
  border-left: 4px solid #326BFF;
  padding: 10px 16px  0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.is__item_quant{
  @include width-flex(16%)
}

.is__item_time{
  @include width-flex(25%)
}

.is__item_reliability{
  @include width-flex(20%)
}
.is__item_reflected{
  @include width-flex(25%)
}
.is__item_goal{
  @include width-flex(14%)
}

.is__item-num{
  font-size: 40px;
  line-height: 46px;
  font-family: $FiraSansSemiBold;
  margin-bottom: 5px;
}

.is__item-desc{
  font-size: 14px;
}








</style>