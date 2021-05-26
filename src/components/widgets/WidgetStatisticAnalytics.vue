<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
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
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .statistic-season__body
          .widget__item.mb-1(
            v-for='(item,i) in data' :key='i'
          )
            .statistic-td.text-left(style="width:17.5%") {{ item.season }}
            .statistic-td {{ item.i }}
            .statistic-td {{ item.g }}
            .statistic-td {{ item.p }}
            .statistic-td {{ item.o }}
            .statistic-td {{ item.plus }}
            .statistic-td {{ item.sm }}
            .statistic-td {{ item.gb }}
            .statistic-td {{ item.ob }}
            .statistic-td {{ item.gm }}
            .statistic-td {{ item.om }}
            .statistic-td {{ item.pg }}
    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        span.list-more(v-if='!isShowList') Развернуть
        span.list-small(v-if='isShowList') Свернуть


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
	}
</script>

<style scoped lang="scss">
  .statistic-td.first {
    text-align: left;
  }

  .statistic-td {
    @include width-flex(7.5%)
    text-align: center;
  }

</style>
