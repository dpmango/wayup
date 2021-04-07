<template lang="pug">
  v-chip(
    :class='classAttr'
    :color='color'
    label
    :text-color="textColor"

  ) {{label}}

</template>

<script>
export default {
name: "baseLabel",
  props:{
    color:{
      type:[String],
      default:''
    },
    textColor:{
      type:[String],
      default:''
    },
    label:{
      type:[String],
      default:''
    },
    classAttr:{
      type:[String],
      default:''
    }

  },
}
</script>

<style  lang="scss">
.v-chip__content{
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 10px;
}
.v-chip--label{
  margin-right: 8px;
}
</style>