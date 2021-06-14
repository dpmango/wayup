<template lang="pug">
  .item-estimate
    .panel-num 1
    .block-white.block-flex.mb-6.pl-3
      .block-flex__left
        .item-estimate__title.title-medium 5 х 4  Большинство
      .block-flex__right.d-flex.align-center.ml-auto
        .estimate-num.mr-6.text-red 3
        //.estimate-num.text-green 3
        base-button(
          classAttr='button-default button-gray button-big'
          label="Изменить"
        )



</template>

<script>
export default {
name: "AccordionItemEstimate"
}
</script>

<style scoped lang="scss">

.accordion-item-estimate{
  position: relative;
}
.item-estimate{
  position: relative;

}
.estimate-num{
  font-family: $FiraSansMedium;
}

</style>