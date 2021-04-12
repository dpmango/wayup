<template lang="pug">
  .add-training
    .add-training__block
      svg.plus-icon(width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M12 7V17M17 12L7 12' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
    .add-training__block-text {{text}}

</template>

<script>
export default {
  name: "addBlock",
  props: {
    text: {
      type: [String],
      default: ''
    },
  }
}

</script>

<style scoped lang="scss">

.add-training{
  width: 100%;
  height: 80px;
  border: 1px dashed rgba(50, 107, 255, 0.6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 22px;

  &:hover{
    cursor: pointer;
  }
}
.plus-icon{
  margin-right: 8px;
  @include width-flex(24px)
  height: 24px;
  margin-top: 2px;
}

.add-training__block-text{
  color: $blue;
  font-size: 14px;
}

</style>