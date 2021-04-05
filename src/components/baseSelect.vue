<template lang="pug">
    v-select(
      :class='classAttr'
      :items="items"
      :label='label'
      solo
      background-color="#F1F3F9"
      color='#000'
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
    items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
  }),
  name: "baseSelect"
}
</script>

<style lang="scss">

.custom-select {
  width: 184px;

  .v-icon.v-icon {
    @include background-contain('arrow-down.svg')
    width: 16px;
    height: 16px;
  }

  .v-input__icon {
    width: 16px;
    height: 16px;
  }


  &.v-text-field.v-text-field--solo .v-input__control {
    min-height: 40px ;
  }

  .v-label{
    color: #000;
  }





}

.v-application .v-list-item.primary--text {
  color: #000000 !important;

}

.v-list-item__title {
  font-size: 14px;
  position: relative;

}

.v-list-item--active {
  &:after {
    content: '';
    @include background-contain('check-icon.svg')
    width: 16px;
    height: 16px;
    position: absolute;
    left: 10px;
    top: 0;
  }
}


.v-list-item--link:before {
  background: rgba(228, 232, 242, .5);
}


.theme--light.v-list-item--active:before,
.theme--light.v-list-item--active:hover:before,
.theme--light.v-list-item:focus:before {
  opacity: 1;
}



</style>