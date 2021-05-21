<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        dotsMenu.mt-0.position-static.ml-auto
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
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .statistic-season__body
          .widget__item.mb-1(
            v-for='(item,i) in data' :key='i'
          )
            .statistic-td.first {{ item.season }}
            .statistic-td {{ item.games }}
            .statistic-td {{ item.goals }}
            .statistic-td {{ item.skipped }}
            .statistic-td {{ item.repulsed }}
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
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetStatisticSeason",
  components: {
    DotsMenu,
    vueCustomScrollbar
  },
  props: {
    data: {
      type: Object,
    },
    title: {
      type: [String],
      default: ''
    },
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


.statistic-td.first {
  @include width-flex(40%)
}

.statistic-td {
  @include width-flex(15%)
  font-size: 14px;

}

</style>
