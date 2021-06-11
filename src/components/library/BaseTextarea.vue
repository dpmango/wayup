<template lang="pug">
  //v-textarea(
  //  :height='height'
  //  solo='solo'
  //  name='nameText'
  //  :label='label'
  //  hide-details
  //  auto-grow
  //)
  v-textarea(

    :label='label'
    auto-grow=''
    outlined=''
    :row='row'
    row-height='15'
    hide-details
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
  },
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

</style>