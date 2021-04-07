<template lang="pug">
  v-btn(
    :class='classAttr'
    elevation='0'
    color="#F1F3F9"
    height='40px'
    :tag="tag"
    @click="handleOnClick($event)"

  ) {{label}}
    slot

</template>

<script>
export default {
  props:{
    label:{
      type:String,
      default:''
    },
    tag:{
      type:String,
      default:'button'
    },
    classAttr:{
      type:String,
      default:''
    },
    // clickEvent:{
    //   type:String,
    //   default:''
    // }
  },
  name: "baseButton",
  methods:{
    handleOnClick:function (){
      this.$emit("click");

    }
  }
}
</script>

<style lang="scss" >
.custom-button {

  min-width: 0;

  font-family: $FiraSansMedium;
  height: 40px;
  text-transform: none;

.v-btn__content {
  font-size: 16px;
  letter-spacing: normal;
}
}

.button-icon {
  min-width: 40px !important;
  width: 40px !important;
}

.button-active {
.custom-button {
  background: transparent !important;

}

.v-btn__content {
  color: $blue;

}
}



</style>