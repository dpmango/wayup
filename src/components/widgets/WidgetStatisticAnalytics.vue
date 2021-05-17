<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Аналитика
        dots-menu.mt-0.position-static.ml-auto
      .widget-header__bottom
        .statistic-season__head
          .statistic-td.text-left(style="width:17.5%") Сезон
          .statistic-td И
          .statistic-td Г
          .statistic-td П
          .statistic-td О
          .statistic-td +/-
          .statistic-td ШМ
          .statistic-td ГБ
          .statistic-td ОБ
          .statistic-td ГМ
          .statistic-td ОМ
          .statistic-td ПГ
    .widget-content.widget-content_gray



      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 200px;'
        @ps-scroll-y="scrollHanle"
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .statistic-season__body
          .widget__item.mb-1(
            v-for='(item,i) in 7' :key='i'
          )
            .statistic-td.text-left(style="width:17.5%") Дома
            .statistic-td 5
            .statistic-td 2
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
            .statistic-td 5
    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        | Развернуть

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetStatisticAnalytics",
  components: {
    DotsMenu,
    vueCustomScrollbar
  },
  data: () => ({
    isShowList: false,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
  }),
  methods: {
    toggleList: function () {
      this.isShowList = !this.isShowList;
    },
  },
}
</script>

<style scoped lang="scss">
.statistic-td.first{
  text-align: left;
}
.statistic-td{
  @include width-flex(7.5%)
  text-align: center;
}

</style>