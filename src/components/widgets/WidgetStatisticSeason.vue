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
            .statistic-td {{ summa.sumGames }}
            .statistic-td {{ summa.sumGoals }}
            .statistic-td {{ summa.sumSkipped }}
            .statistic-td {{ summa.sumRepulsed }}
    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        span.list-more(v-if='!isShowList') Показать всю статистику
        span.list-small(v-if='isShowList') Скрыть

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
      type: Array,
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
  computed: {
    summa() {
      let data = this.data
      let total = {
        sumGames: function () {
          let sum = 0;
          data.forEach(function(item) {
            sum += parseFloat(item.games);
          });
          return sum;
        }(),
        sumGoals: function () {
          let sum = 0;
          data.forEach(function(item) {
            sum += parseFloat(item.goals);
          });
          return sum;
        }(),
        sumSkipped: function () {
          let sum = 0;
          data.forEach(function(item) {
            sum += parseFloat(item.skipped);
          });
          return sum;
        }(),
        sumRepulsed: function () {
          let sum = 0;
          data.forEach(function(item) {
            sum += parseFloat(item.repulsed);
          });
          return sum;
        }()
      };
      return total

    }
  }
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
