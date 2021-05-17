<template lang="pug">
  v-checkbox(
    v-model="checkbox"
    :color='color'
    :value='value'
    hide-details
  )
    template(v-slot:label)
      slot(name='label-custom')



</template>

<script>
export default {
  name: "BaseCheckbox",
  data () {
    return {
      checkbox: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
    }
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },

    value: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped lang="scss">

.v-input--checkbox{
  ::v-deep{
    .v-input__slot{
      align-items: flex-start;
    }
    .v-label{
      color: #000000;
      line-height: 22px;
      display: inline;
    }
    .mdi{
      border-radius: 4px;
      width: 20px;
      height: 20px;
    }
    .mdi-checkbox-blank-outline{
      border: 1px solid #CCCCCC;
    }
    .mdi-checkbox-marked{
      background-color: #326BFF;
      background-image:url('~@/assets/images/svg/Icon-check.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 10px 11px;
    }
    .v-input--selection-controls__ripple{
      height: 30px;
      width: 30px;
    }
    .v-icon.v-icon{
      transition: none;
    }
  }
}

</style>