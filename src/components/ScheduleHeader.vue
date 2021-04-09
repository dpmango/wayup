<template lang="pug">
  .header
    v-row
      v-col(md='8')
        .header-left
          .title {{title}}
          slot(name="header-block")
      v-col(md='4')
        .header-right
          slot(name="header-right")

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },

  name: "ScheduleHeader"
}
</script>

<style lang="scss" scoped>
.header {
  padding:0 0 24px 0;
}
.header-right{
  display: flex;
  justify-content: flex-end;
}
.header-left{
  min-height: 40px;
}

.title{
  font-size: 24px;
  text-transform: uppercase;

}

.text-block{
  display: flex;
  align-items: center;
  margin-right: 24px;
}
.icon-cup{
  margin-right: 12px;
}

.text-info{
  padding-top: 3px;
  font-size: 12px;
  span{
    color: $red;
    margin-left: 3px;
  }
}

.header-left{
  display: flex;
  align-items: center;
}


</style>