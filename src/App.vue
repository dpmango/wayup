<template lang="pug">
  #app
    component(:is="layout")
      router-view

</template>




<script>
import MainLayout from '@/layouts/layout'
export default {
  computed:{
    layout(){
      // console.log(this.$route.meta)
      // return 'main-layout'
      return this.$route.meta.layout + '-layout'
    }
  },
  components:{
    MainLayout
  }
}
</script>



<style lang="scss">

//@import "src/scss/app";


//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}

//.test{
//  padding: 30px;
//  display: flex;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
