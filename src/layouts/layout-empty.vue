<template lang="pug">
  div.empty-layout.v-application.v-application--is-ltr
    v-container(fluid)
      .page
        router-view

</template>

<script>
export default {
  name: "empty-layout",
}
</script>

<style lang="scss">

.container{
  padding-top: 0;
  padding-bottom: 0;
}


.empty-layout{
  background: #E5E5E5;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
}

.page{
  //padding-top: 32px;
  //padding-bottom: 48px;
}

.sidebar{
  //height: 150px;
  //width: 150px;
  //background: #000;
}


</style>