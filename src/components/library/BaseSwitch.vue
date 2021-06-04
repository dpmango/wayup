<template lang="pug">
  v-switch(
    v-model='switch2'
    inset=''
    :label='label'
    :disabled="disabled"
  )

</template>

<script>
export default {
name: "BaseSwitch",
  data () {
    return {
      switch1: true,
      switch2: false,
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'button'
    },
    classAttr: {
      type: String,
      default: 'segment-default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>