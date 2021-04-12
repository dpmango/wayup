<template lang="pug">
  v-chip(
    label
    :class='classAttr'
    :color='background'
    :text-color="textColor"
  )

    slot(name='icon-left')
    .chip-text {{label}}
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
  height: 18px;
  line-height: 18px;
  padding: 0 8px ;
  font-size: 10px;
  text-transform: uppercase;
}



</style>