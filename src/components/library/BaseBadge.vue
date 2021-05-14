<template lang="pug">
  v-chip(
    label
    :class='classAttr'
    :color='background'
    :text-color="textColor"
  )

    slot(name='icon-left')
    .chip-text(v-html='label')
    slot(name='icon-right')


</template>

<script>
export default {
  name: "BaseBadge",
  props:{
    background:{
      type:[String],
      default:'rgba(0, 0, 0, 0.1)'
    },
    textColor:{
      type:[String],
      default:'#666666'
    },
    label:{
      type:[String],
      default:''
    },
    classAttr:{
      type:[String],
      default:'chip-custom'
    }

  },
}
</script>

<style scoped lang="scss">

.chip-custom{
  //height: rem(18px);
  //line-height: rem(18px);
  height: rem(22px);
  line-height: rem(22px);
  padding: 0 rem(8px);
  font-size: rem(10px);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  ::v-deep .icon-badge{
    margin-bottom: rem(4px);
  }
  ::v-deep .chip-text{
    font-size: rem(10px);

  }
}



</style>
