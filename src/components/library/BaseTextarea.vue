<template lang="pug">
  v-textarea(
    :height='height'
    solo='solo'
    name='nameText'
    :label='label'
    hide-details=''
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
      default: true
    }
  },
}
</script>

<style scoped lang="scss">

.v-textarea{
  width: 100%;
  ::v-deep{
    textarea{
      resize: none;

    }
  }
}

.v-text-field--solo{
  ::v-deep{
    .v-input__slot{
      box-shadow: none !important;
    }
    .v-input__control{
      border: 1px solid #CCCCCC;
      border-radius: 8px;
    }

  }

}


</style>