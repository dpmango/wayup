<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Статистика сезона 2020-2021
        dots-menu.mt-0.position-static.ml-auto
      .widget-header__bottom
        .statistic-season__head
          .statistic-td.first Сезон
          .statistic-td И
          .statistic-td Г
          .statistic-td П
          .statistic-td О
    .widget-content.widget-content_gray
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 84px;'
        @ps-scroll-y="scrollHanle"
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .statistic-season__body
          .widget__item.mb-1(
            v-for='(item,i) in 7' :key='i'
          )
            .statistic-td.first 2020-2021
            .statistic-td 4
            .statistic-td 3
            .statistic-td 2
            .statistic-td 5
          .widget__item.mb-1
            .statistic-td.first.total Всего
            .statistic-td 4
            .statistic-td 3
            .statistic-td 2
            .statistic-td 5
    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        | Показать всю статистику

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: "WidgetStatistic",
  components: {
    vueCustomScrollbar
  },
  data: () => ({
    isShowList:false,
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



</style>