<template lang="pug">
  v-progress-circular(:rotate='360' :size='30' :width='3' :value='value' color='#000')
    | {{ value }}

</template>

<script>

export default {
  name: "LevelProgress",

  data () {
    return {
      // interval: {},
      value: 26,
    }
  },
  // beforeDestroy () {
  //   clearInterval(this.interval)
  // },
  // mounted () {
  //   this.interval = setInterval(() => {
  //     if (this.value === 100) {
  //       return (this.value = 0)
  //     }
  //     this.value += 10
  //   }, 1000)
  // },
}



</script>

<style scoped lang="scss">



::v-deep .v-progress-circular__info{
  font-size: 12px;
  letter-spacing: 0.02em;
}


</style>