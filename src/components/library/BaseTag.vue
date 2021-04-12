<template lang="pug">
  v-item-group(multiple='')
    v-item(v-for='n in 8' :key='n' v-slot='{ active, toggle }')
      v-chip(active-class='purple--text' :input-value='active' @click='toggle')
        | Tag {{ n }}

  //v-item-group(multiple='')
  //v-item(v-slot='{ active, toggle }')
  //  v-chip(
  //    active-class='purple--text'
  //    :input-value='active'
  //    @click='toggle'
  //  )
  //    | Tag

</template>

<script>
export default {
  name: "BaseTag"
}
</script>

<style scoped>

</style>