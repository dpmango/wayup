<template lang="pug">
  .progress__block
    .progress__block-title {{title}}
    .progress__item
      .progress-line
        v-progress-linear(
          buffer-value='65'
          value='60'
          color=''
          height='2'
        )
        .progress-target(:style="positionLeft")
        <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
      .progress-quant__block.green-result
        svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M4 0L8 5H0L4 0Z' )
        .progress-quant 15


</template>

<script>

export default {
  props: {
    title: {
      type: [String],
      default: ''
    },
    positionLeft: {
      type: [String],
      default: ''
    },
  },
  name: "ProgressbarItem"
}
</script>

<style lang="scss">

.progress__block,
.progress__item {
  display: flex;
  align-items: center;
}
.progress__block{
  margin-bottom: 8px;
  @include last-mb-0
}
.progress__block-title {
  @include width-flex(25%)
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
}

.progress__item {
  @include width-flex(75%)
}

.progress-line {
  position: relative;
  @include width-flex(calc(100% - 30px))

}

.v-progress-linear {
  @include width-flex(calc(100%))
  position: absolute;

}

.progress-target {
  position: absolute;
  //left: 80%;
  top: -3px;
  z-index: 100;
}

.progress__block {
  .v-progress-linear {
    background: #E4E8F2;
  }
}

.v-progress-linear__buffer {
  background: $green;
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

.progress-quant {
  font-size: 11px;
  margin-left: 3px;
}

.green-result {
  .progress-quant {
    color: $green;
  }
  .progress-indication{
    fill: $green;
  }

}


.red-result {
  .progress-quant {
    color: $red;
  }
  .progress-indication{
    fill: $red;
    transform: rotate(180deg);
  }
}

.progress-quant__block {
  @include width-flex(30px)
  display: flex;
  align-items: center;
  justify-content: flex-end;
}



</style>