<template lang="pug">
  v-switch.switch-default.switch-big(
    v-model='switch2'
    inset=''
    :label='label'
    :disabled="disabled"
  )

</template>

<script>
export default {
  name: "BaseSwitch",
  data() {
    return {
      switch1: true,
      switch2: false,
    }
  },
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
      default: 'segment-default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped lang="scss">

.switch-default {
  ::v-deep {
    .v-input--switch__track {
      background: #C0C2C7;
      opacity: 1;

      &:hover {
        background: #9A9DA5;

      }
    }

    .v-input__slot {
      margin-bottom: 0;
    }

    .v-input--selection-controls__ripple {
      display: none;
    }

    .v-input--selection-controls__input {
      &:hover {
        .v-input--switch__track {
          background: #9A9DA5;
        }
      }
    }
    .v-label {
      color: #000;
    }

  }


}

.v-input--is-disabled {
  ::v-deep {
    .v-input--switch__thumb {
      background: rgba(255, 255, 255, 0.6);
    }
  }
}

.switch-default.v-input--is-dirty {
  ::v-deep {
    .v-input--switch__track {
      background: #326BFF;
    }

    .v-input--switch__thumb {
      background: #FFFFFF;
    }
    .v-label {
      color: #326BFF;
    }
    .v-input--switch__thumb {
      transform: translate(1px) !important;
    }

    .v-input--selection-controls__ripple,
    .v-input--switch__thumb {
      transform: translate(14px) !important;
    }
  }
}

.switch-default.v-input--is-focused {
  ::v-deep {
    .v-input--selection-controls__input {
      box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4);
      border-radius: 14px;

    }
  }
}

.switch-big {
  ::v-deep {
    .v-input--selection-controls__input,
    .v-input--switch__track {
      width: 32px;
      height: 18px;
    }

    .v-input--switch__thumb {
      width: 16px;
      height: 16px;
      top: calc(50% - 8px);
    }

    .v-input--switch__track {
      top: calc(50% - 9px);
      left: 0;

    }




  }
}




.switch-small {
  ::v-deep {
    .v-input--selection-controls__input,
    .v-input--switch__track {
      width: 30px;
      height: 16px;
    }

    .v-input--switch__thumb {
      width: 14px;
      height: 14px;
      top: calc(50% - 7px);
    }

    .v-input--switch__track {
      top: calc(50% - 8px);
      left: 0;

    }

    .v-label {
      font-size: 12px;
    }

  }
}
.switch-small.v-input--is-dirty {
  ::v-deep {

  }

}



</style>