<template lang="pug">
  v-text-field(
    :class=classAttr
    :label=label
    :placeholder=placeholderText
    :outlined=outline
    hide-details
  )

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholderText: {
      type: String,
      default: 'button'
    },
    classAttr: {
      type: String,
      default: ''
    },
    outline: {
      type: Boolean,
    }

  },
  name: "baseInput"
}
</script>

<style scoped>

</style>