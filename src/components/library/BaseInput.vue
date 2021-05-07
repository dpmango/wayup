<template lang="pug">
  v-text-field(
    v-model='model'
    :label='label'
    :class='classAttr'
    :rules="rules"
    outlined
    clearable
    :readonly="readonly"
    :value='value'
    :error="error"
    :disabled='disabled'
  )
    template(slot='prepend-inner')
      slot(name="icon")


</template>

<script>
export default {
  name: "BaseInput",
  props: {
    model: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    },
    classAttr: {
      type: String,
      default: 'input-default'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    hideDetails: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped lang="scss">

.input-default {


  ::v-deep .v-input__slot {
    margin-bottom: 0;

    fieldset {
      border-color: #CCCCCC;
    }

    &:hover {
      fieldset {
        border-color: #1751E5;
      }
    }
  }


  ::v-deep .v-text-field__details {
    position: relative;
    display: none;
    padding-top: 10px;
    padding-left: 25px;
    margin-bottom: 0;
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

  ::v-deep .v-input__prepend-inner {
    margin-right: rem(5px);

    svg {
      fill: #000000;
    }

  }

  ::v-deep .v-input__append-inner {
    .v-icon {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: rem(16px);
      height: rem(16px);
    }

    .mdi-close {
      background-image: url('~@/assets/images/svg/icon-close.svg');

    }

    .mdi-eye-off, .mdi-eye {
      background-image: url('~@/assets/images/svg/icon-eye.svg');

    }

  }


}

.error--text {
  ::v-deep .v-text-field__details {
    display: block;
  }
}

.input-big {
  ::v-deep .v-input__slot {
    min-height: rem(40px);
    padding: 0 rem(16px) !important;
    border-radius: rem(8px);
  }

  ::v-deep .v-label {
    top: rem(10px);
    font-size: rem(16px);
  }

  ::v-deep .theme--light.v-label {
    color: #000;
  }

  ::v-deep .v-input__prepend-inner {
    margin-top: rem(12px);
  }

  ::v-deep .v-input__append-inner {
    margin-top: rem(8px);
    margin-right: rem(-7px);
  }
}

.v-input--is-label-active.input-big,
.v-input--is-focused.input-big {
  ::v-deep.v-input__prepend-inner ~ .v-text-field__slot .v-label {
    left: rem(-23px) !important;
  }

  ::v-deep fieldset {
    padding-left: rem(17px);
  }
}

.input-small {
  font-size: rem(12px);

  ::v-deep .v-input__slot {
    min-height: rem(24px);
    padding: 0 rem(9px) !important;
    border-radius: rem(4px);
  }

  ::v-deep .v-label {
    top: rem(5px);
    font-size: rem(12px);
  }

  ::v-deep .v-input__prepend-inner {
    margin-top: rem(7px);
  }

  ::v-deep .v-input__append-inner {
    margin-top: rem(5px);
    margin-right: rem(-2px);
  }
}


.v-input--is-label-active.input-small,
.v-input--is-focused.input-small {
  ::v-deep .v-label {
    top: rem(16px);
    font-size: rem(16px);
  }

  ::v-deep fieldset {
    padding-left: rem(4px);
  }

  ::v-deep.v-input__prepend-inner ~ .v-text-field__slot .v-label {
    left: rem(-23px) !important;
  }
}

.input-default.v-input--is-label-active {
  ::v-deep fieldset {
    border-color: #123FB2;
  }
}

.input-default.v-input--is-focused {
  ::v-deep fieldset {
    border-color: #1751E5;

  }
}

.input-default.v-input--is-label-active,
.input-default.v-input--is-focused {
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

.input-default.error--text {
  ::v-deep .v-label {
    color: #EC4865 !important;
    caret-color: #EC4865 !important;
  }


  ::v-deep .v-input__prepend-inner {
    svg {
      fill: #EC4865;
    }
  }

  ::v-deep .v-input__slot {
    fieldset {
      border-color: #EC4865;
    }

    &:hover {
      fieldset {
        border-color: #EC4865;
      }
    }
  }

}

.v-input--is-label-active.error--text,
.v-input--is-focused.error--text {

  ::v-deep fieldset {
    border-color: #EC4865;
  }
}


.v-input--is-disabled {
  background: #F9F9F9;

  ::v-deep .v-input__prepend-inner {
    svg {
      fill: rgba(0, 0, 0, 0.5);
    }
  }
}

</style>
