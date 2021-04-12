<template lang="pug">
  .info-block
    .target-icon
      slot
    .info-text {{text}}
</template>

<script>
export default {
  name: "InfoBlock",
  props: {
    text: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="scss">
.target-icon {
  @include width-flex(20px)
  height: 20px;
  margin-right: 8px;
  margin-top: -3px;

}

.info-block {
  display: flex;
  align-items: center;
  background: rgba(61, 197, 13, 0.1);
  border-radius: 4px;
  padding: 12px 20px;

  margin-bottom: 20px;
}

.info-text {
  font-size: 14px;
}

</style>