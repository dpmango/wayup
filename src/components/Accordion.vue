<template lang="pug">
  v-expansion-panels
    draggable.accordion-group(:list=list group=group @change='log')
      v-expansion-panel(
        v-for='(element, index) in list'
        :key='element.name'
      )
        v-expansion-panel-header
          | {{ element.name}} {{ index }}
        v-expansion-panel-content
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


</template>

<script>
export default {
  props:{
    list:{
      type:[String],
      default:''
    },
    group:{
      type:[String],
      default:''
    },
    name:{
      type:[String],
      default:''
    }

  },


name: "Accordion"
}
</script>

<style scoped>

</style>