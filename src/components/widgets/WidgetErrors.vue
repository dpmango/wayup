<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Ошибки по качествам и навыкам
        DotsMenu.mt-0.position-static.ml-auto
    .widget-content.widget-content_gray
      vue-custom-scrollbar.scroll-area(
        style='max-height: 206px;'
        :settings="settings"
      )
        .widget__items
          .widget__item.mb-2(
            v-for='(item,i) in 5' :key='i'
          )
            .errors-item
              .errors-item__left
                img.errors-img(
                  src="@/assets/images/img-traning.png"
                )
              .errors-item__right
                .errors-item__right-title Отжимания широкой постановкой
                base-badge(
                  label="Физическое"
                  background="#F1F3F9"
                  textColor="#000000"
                )
                  template(#icon-left)
                    .icon-badge.icon-16 💪

                .errors-item__right-text
                  | Не прижимай локти к корпусу. В нижней точке задерживайся на пару секунд



    .widget-footer
      a(href='#').widget-footer__text
        | Перейти к ошибкам

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetErrors",

  components: {
    DotsMenu,
    vueCustomScrollbar
  },
  data: () => ({
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
  }),
}
</script>

<style scoped lang="scss">
.errors-item {
  display: flex;
}

.errors-img {
  width: 100%;
  height: 100%;
}

.errors-item__left {
  @include width-flex(64px)
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 12px;
}

.errors-item__right-title {
  margin-bottom: 8px;
}

.errors-item__right-text {
  margin-top: 16px;
  line-height: 22px;
  font-size: 14px;
}

</style>
