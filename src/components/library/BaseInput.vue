<template lang="pug">
  v-text-field(
    :label='label'
    :class='classAttr'
    prepend-inner-icon='mdi-map-marker'
    hide-details
    outlined
  )
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ''
    },
    classAttr: {
      type: String,
      default: ''
    },
    // solo: {
    //   type: Boolean,
    //   default: false
    // }
  },
}
</script>

<style scoped>

</style>