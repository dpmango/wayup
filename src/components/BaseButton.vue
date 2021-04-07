<template lang="pug">
  v-btn(
    :class='classAttr'
    elevation='0'
    :height='heightButton'
    :tag="tag"
    @click="handleOnClick($event)"


  ) {{label}}
    slot

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'button'
    },
    classAttr: {
      type: String,
      default: ''
    },
    heightButton: {
      type: String,
      default: "40px"
    }
  },
  name: "BaseButton",
  methods: {
    handleOnClick: function () {
      this.$emit("click");
    }
  }
}
</script>

<style lang="scss">


.custom-button {
  min-width: 0;
  font-family: $FiraSansMedium;
  height: 40px;
  text-transform: none;
  border-radius: 8px;
  background: #F1F3F9;
  .v-btn__content {
    font-size: 16px;
    letter-spacing: normal;
    color: #000;
  }
}




.button-middle{
  border-radius: 50px;
  text-transform: none;
  font-family: $FiraSansMedium;

  .v-btn__content {
    font-size: 12px;
    letter-spacing: normal;
  }

}
.button-blue{
  background: #326BFF !important;
  .v-btn__content {
    color: #FFFFFF;
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