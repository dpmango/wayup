<template lang="pug">
  #app(data-app)
    component(:is="layout")
      router-view

</template>

<script>
import MainLayout from '@/layouts/layout'
export default {
  computed:{
    layout(){
      return this.$route.meta.layout + '-layout'
    }
  },
  components:{
    MainLayout
  }
}
</script>
