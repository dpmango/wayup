<template lang="pug">
  .div(data-app)
    v-select(
      :class='classAttr'
      :items="cirles"
      :label="label"
      solo
      background-color="transparent"
      item-color='#000'
      hide-details
    )
</template>

<script>
export default {
  props:{
    label:{
      type:String,
      default:''
    },
    classAttr:{
      type:String,
      default:''
    }
  },
  data: () => ({
    cirles: ['Базовый 1', 'Базовый 2', 'Базовый 3', 'Базовый 4', 'Базовый 5', 'Базовый 6'],
    defaultSelected: {
      label:''
    }
  }),
  name: "baseSelectMini"
}
</script>

<style lang="scss">

.custom-select_mini {
  width: 184px;

  .v-icon.v-icon {
    @include background-contain('arrow-down.svg')
    opacity: 0.56;
    width: 14px;
    height: 14px;
  }

  .v-input__icon {
    width: 24px;
    height: 24px;
    background: $pink;
    border-radius: 4px;
  }

  .v-label,
  .v-select__selection {
    color: $blue;
    font-size: 14px;
  }

}



</style>