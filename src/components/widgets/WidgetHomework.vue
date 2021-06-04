<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        DotsMenu.mt-0.position-static.ml-auto
    .widget-content.widget-content_gray
      vue-custom-scrollbar.scroll-area(
        style='max-height: 206px;'
        :settings="settings"
      )
        //.hm-progress__wrap
        //    HmProgress(
        //        title='Теория'
        //        quantity='62%'
        //        position-left='left:85%'
        //    )
        //    HmProgress(
        //        title='Рефлексия'
        //        quantity='71%'
        //        position-left='left:85%'
        //    )
        //    HmProgress(
        //        title='❗️ОФП'
        //        quantity='62%'
        //        position-left='left:85%'
        //    )
        .widget__items
          .widget__item.mb-1(
            v-for='(item,i) in data' :key='i'
          )
            .hm-item-title {{ item.task }}
            .hm-item-right.ml-auto.d-flex.align-center
              base-badge(
                :label="item.labelText"
                :background="item.labelBg"
                :textColor=" item.labelColor"
              )
              dots-menu.mt-0.ml-2.position-static
    .widget-footer
      a(href='#').widget-footer__text
        | Перейти к домашним заданиям

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import HmProgress from "@/components/elements/HmProgress";
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetHomework",
  components: {
    DotsMenu,
    HmProgress,
    vueCustomScrollbar
  },
  props: {
    data: {
      type: Array,
    },
    title: {
      type: [String],
      default: ''
    },

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

.hm-item-title {
  font-size: 14px;
}


</style>
