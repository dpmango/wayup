<template lang="pug">
    v-radio(
      :label='label'
      :value='value'
      v-bind="$attrs"
      v-model="radio"
    )

</template>

<script>
export default {
  name: "BaseRadioButton",
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
    },
  },
  computed: {
    radio: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    handleChange(val) {

      this.$emit('change', val);
    }
  }
}
</script>

<style scoped lang="scss">

.v-radio.v-item--active{
  background: #F1F3F9;
  border-radius: 8px;
  ::v-deep{
    .v-input--selection-controls__ripple{
      background-image:url('~@/assets/images/svg/radio_selected.svg');
    }
  }
}

.v-radio{
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 0 !important;
  ::v-deep{
    .v-input--selection-controls__ripple{
      position: static !important;
      background-image:url('~@/assets/images/svg/radio_empty.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      @include width-flex(20px)
      height: 20px;
      margin: 2px 0 0;
    }
  }

}




</style>