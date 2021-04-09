<template lang="pug">
  v-combobox(
    outlined
    :class='classAttr'
    :items="items"
    :label='label'
    hide-details
    :solo=solo
  )

</template>

<script>
export default {
  name: "BaseSelect",
  props:{
    items:{
      type: [Array, Object],
    },
    label:{
      type:String,
      default:''
    },
    classAttr:{
      type:String,
      default:''
    },
    solo:{
      type: Boolean,
      default: false

    }
  },
  data: () => ({
    // items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
  }),
}
</script>

<style scoped>

</style>