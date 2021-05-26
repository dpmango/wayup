<template lang="pug">
  v-combobox(
    outlined
    :class='classAttr'
    :items="items"
    :label='label'
    hide-details
    :solo="solo"
    :error="error"
    :disabled='disabled'

  )
    template(slot='item' slot-scope='data')
      slot(name="item-inner")


</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    items: {
      type: [Array, Object],
    },
    label: {
      type: String,
      default: ''
    },
    classAttr: {
      type: String,
      default: 'select-default'
    },
    solo: {
      type: Boolean,
      default: false

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

.select-default {
  ::v-deep .v-select__slot {
    input {
      font-size: rem(16px);
    }
  }

  ::v-deep .v-input__slot {
    min-height: rem(40px) !important;
    padding: 0 rem(16px) !important;
    border-radius: rem(8px);
  }

  ::v-deep .v-label {
    top: rem(10px);
    font-size: rem(16px);
  }


  ::v-deep .v-input__slot {
    box-shadow: none !important;

    fieldset {
      border-color: #CCCCCC;
    }

    &:hover {
      fieldset {
        border-color: #1751E5;
      }
    }
  }


  ::v-deep .v-input__prepend-inner {
    margin-right: rem(5px);

    svg {
      fill: #000000;
    }

  }

  ::v-deep .v-input__append-inner {
    margin-top: rem(8px);
    margin-right: rem(-10px);

    .v-icon {
      background-image: url('~@/assets/images/arrow-down_blue.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: rem(16px);
      height: rem(16px);
    }

  }

}

.select-default.v-input--is-label-active,
.select-default.v-input--is-focused {
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

.select-default.v-input--is-label-active {
  ::v-deep fieldset {
    border-color: #123FB2;
  }
}

.select-default.v-input--is-focused {
  ::v-deep fieldset {
    border-color: #1751E5;

  }
}

.select-default.v-text-field--solo.error--text,
.select-default.error--text {
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
      box-shadow: none;
    }

    &:hover {
      fieldset {
        border-color: #EC4865;
      }
    }
  }


}

::v-deep .v-list-item {
  padding: 0 rem(16px);

  &:hover {
    &:before {
      opacity: 1;
      background: rgba(50, 107, 255, 0.4);
    }
  }
}

::v-deep .v-list-item__title {
  font-size: rem(16px);
  position: relative;

}

::v-deep .v-list-item__content {
  padding: rem(8px) 0;
}

::v-deep .icon-select {
  margin-right: rem(6px);
}

.v-input--is-disabled {
  background: #F9F9F9;

  ::v-deep .v-input__prepend-inner {
    svg {
      fill: rgba(0, 0, 0, 0.5);
    }
  }
}


.select-bg-gray {
  ::v-deep .v-input__slot {
    background: #F1F3F9;

    fieldset {
      border-color: transparent;
    }

    &:hover {
      fieldset {
        border-color: transparent;
      }
    }

  }
}

.select-bg-gray.v-input--is-focused {
  ::v-deep fieldset {
    background: #F1F3F9;

  }
}

.select-bg-gray.v-input--is-label-active {
  ::v-deep fieldset {
    background: #D9DBE0;

  }
}


.select-default.v-text-field--solo {
  ::v-deep fieldset {
    background: #F1F3F9;

  }

  ::v-deep .v-input__control {
    min-height: rem(40px);
  }

  ::v-deep .v-input__append-inner {
    margin-top: 0px;
  }

  &:hover {
    ::v-deep fieldset {

      background: #D9DBE0;
    }
  }
}


.select-default.select-small {
  ::v-deep {

    .v-input__slot {
      min-height: rem(24px) !important;
    }

    .v-label {
      top: 5px;
    }
    .v-input__append-inner{
      margin-top: 5px;
    }
  }
}

.select-default.v-input--is-label-active,
.select-default.v-input--is-focused{
  ::v-deep {
    .v-label {
      top: 17px;
    }
  }
}

</style>
