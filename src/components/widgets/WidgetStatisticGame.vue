<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Статистика сезона 2020-2021
        base-select(
          classAttr='select-default select-bg-gray ml-auto'
          label="Regular season (Complete Stats)"
          :items="selectItems"
          solo=true
        )
        dots-menu.mt-0.position-static
      .widget-header__bottom
        .statistic-season__head
          .statistic-td.text-left S
          .statistic-td.text-left(style="width:20%") Team
          .statistic-td.text-left League
          .statistic-td GP
          .statistic-td GAA
          .statistic-td SV%
          .statistic-td GA
          .statistic-td SV
          .statistic-td SO
          .statistic-td WLT
          .statistic-td TOI
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
            .statistic-td.text-left 2020-2021
            .statistic-td.text-left.text-blue(style="width:20%") 🇺🇸  Boston Hockey Academy 18U
            .statistic-td.text-left.text-blue BEAST 18U
            .statistic-td 2
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
  name: "WidgetStatisticGame",
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
  //@include width-flex(48%)
  text-align: left;
}
.statistic-td{
  @include width-flex(8%)
  text-align: center;
}

</style>