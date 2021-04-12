<template lang="pug">
  .sorting
    .sorting-title Сортировать по:
    .sorting__item
      each val in ['Название','возрасту','году подготовки']
        svg.icon-16.sorting-icon(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M3 6H13M3 9H10M3 12H7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        .sorting__item-title !{val}

</template>

<script>
export default {
  name: "SortingBlock",
  props:{
    items:{
      type: [Array, Object],
    },
  },

}
</script>

<style scoped lang="scss">
.sorting-icon{
  stroke: $blue;
}

.sorting-title{
  margin-bottom: 16px;
}


</style>