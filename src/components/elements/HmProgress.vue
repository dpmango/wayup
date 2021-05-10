<template lang="pug">
  .hm-progress__block
    .hm-progress__top
      .hm-progress__title {{title}}
      .hm-progress__quant {{quantity}}

    .hm-progress__line
      v-progress-linear(
        value='60'
        color=''
        height='2'
      )
      .progress-target(:style="positionLeft")


</template>

<script>
export default {
  name: "HmProgress",
  props: {
    title: {
      type: [String],
      default: ''
    },
    quantity: {
      type: [String],
      default: ''
    },
    positionLeft: {
      type: [String],
      default: ''
    },
  },
}
</script>

<style scoped lang="scss">

.hm-progress__block {
  margin-bottom: 16px;
}

::v-deep {
  .v-progress-linear {
    background: #F1F3F9;
  }

  .hm-progress__line {
    position: relative;
  }
  .v-progress-linear__determinate {
    background: #000;
  }
  .progress-target {
    background: $blue;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .progress-target {
    position: absolute;
    //left: 80%;
    top: -3px;
    //z-index: 100;
  }
  .hm-progress__title,
  .hm-progress__quant{
    font-size: 12px;
  }

  .hm-progress__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }


}


</style>