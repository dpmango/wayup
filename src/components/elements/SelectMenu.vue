<template lang="pug">
  v-menu(
    bottom
    :nudge-width='100'
    :close-on-content-click="closeOnContentClick"
  )
    template(v-slot:activator='{ on, attrs }')
      .select-menu.mt-4(v-bind='attrs' v-on='on') Заменить видео
    .select-menu__content.v-application
      ul.select-menu__list
        li.select-menu__item
          a(href="#").select-menu__link С компьютера
        li.select-menu__item
          a(href="#").select-menu__link Google Disk
        li.select-menu__item
          a(href="#").select-menu__link Dropbox
      .select-menu__content-bottom
        base-input(
          label="Ссылка на видео"
          classAttr="input-default input-big w-100"
        )
        base-button(
          classAttr='button-default button-gray button-big mt-3 w-100'
          label="Заменить"
          @click='menu = false'
        )


</template>

<script>
export default {
  name: "SelectMenu",
  data: () => ({
    closeOnContentClick: false,
    // fav: true,
    // menu: false,
    // message: false,
    // hints: true,
  })

}
</script>

<style scoped lang="scss">

.select-menu {
  font-family: $FiraSansMedium;
  display: inline-flex;
  align-items: center;
  padding: 12px 12px 12px 20px;
  background: #F1F3F9;
  border-radius: 8px;
  width: auto;

  &:after {
    content: '';
    @include background-contain('arrow-down.svg')
    @include width-flex(16px)
    height: 16px;
    margin-left: 12px;
  }
}

.select-menu__content {
  background: #FFFFFF;
}
.select-menu__content-bottom{
  padding: 16px;
}

.select-menu__list {
  border-bottom: 1px solid #C4C4C4;
}


.select-menu__item {
  padding: 16px;
}

</style>