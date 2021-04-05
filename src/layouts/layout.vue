<template lang="pug">
  div.main-layout.v-application.v-application--is-ltr
    TheSidebar
    v-container(fluid)
      .page
        router-view

</template>

<script>
  import TheSidebar from "@/components/TheSidebar";
  export default {
    name: "main-layout",
    components: {TheSidebar}
  }
</script>

<style lang="scss">

.container{
  padding-top: 0;
  padding-bottom: 0;
}
.main-layout{
  padding-left: 120px;
  padding-right: 48px;
}

.page{
  padding-top: 32px;
  padding-bottom: 48px;
}

.sidebar{
  //height: 150px;
  //width: 150px;
  //background: #000;
}


</style>