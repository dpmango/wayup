<template lang="pug">
  v-textarea(
    :label='label'
    auto-grow=''
    outlined=''
    :row='row'
    row-height='15'
    :solo="solo"
    v-model="inputVal"
    :error-messages="errors"
    :rules="rules"
  )
</template>

<script>
export default {
  name: "BaseTextarea",
  props: {
    label: {
      type: String,
      default: ''
    },
    nameText: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '92'
    },
    solo: {
      type: Boolean,
      default: false
    },
    row: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    rules: [String, Array, Object],
    errors: {
      type: Array
    },
    value: {
      type: String,
      default: ''
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style scoped lang="scss">

.v-textarea {
  //width: 100%;
  max-width: 100%;

  ::v-deep {
    textarea {
      resize: none;
    }
  }
}

::v-deep {
  .v-text-field__slot {
    box-shadow: none !important;

  }
  .v-input__slot{
    margin-bottom: 0;
  }
  fieldset {
    border: 1px solid #CCCCCC;
    background: #FFFFFF;

  }

  .v-label {
    color: #999999;
  }

  .v-input__control {
    border-radius: 8px;
  }

  &:hover {
    fieldset {
      border-color: #1751E5;
    }
  }


  }
.v-input--is-label-active,
.v-input--is-focused {
  ::v-deep fieldset {
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4);
    padding-left: rem(17px);
  }
  ::v-deep .v-label {
    background: #FFFFFF;
    padding: 0 rem(2px);
    color: #123FB2;
    top: rem(16px);
  }
}

::v-deep .v-text-field__details {
  position: relative;
  display: none;
  padding-top: 10px !important;
  padding-left: 25px !important;
  margin-bottom: 0 !important;

  &:before {
    position: absolute;
    left: 0;
    top: 7px;
    display: block;
    content: '';
    background-image: url('~@/assets/images/svg/Icon-Error.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @include width-flex(16px)
    height: 16px;
  }
}

.error--text {
  ::v-deep .v-text-field__details {
    display: block;
  }
}

</style>