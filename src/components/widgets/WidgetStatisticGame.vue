<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        base-select(
          classAttr='select-default select-small select-bg-gray ml-auto mr-4'
          label="Regular season (Complete Stats)"
          :items="selectItems"
          solo=true
        )
        DotsMenu.mt-0.position-static
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
        style='max-height: 150px;'
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .statistic-season__body
          .widget__item.mb-1(
            v-for='(item,i) in data' :key='i'
          )
            .statistic-td.text-left {{ item.season }}
            .statistic-td.text-left.text-blue(style="width:20%") {{ item.team }}
            .statistic-td.text-left.text-blue {{ item.league }}
            .statistic-td {{ item.gp }}
            .statistic-td {{ item.gaa }}
            .statistic-td {{ item.svPercent }}
            .statistic-td {{ item.ga }}
            .statistic-td {{ item.sv }}
            .statistic-td {{ item.so }}
            .statistic-td {{ item.wlt }}
            .statistic-td {{ item.toi }}
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
		name: "WidgetStatisticGame",
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
			selectItems: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
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
    //@include width-flex(48%)
    text-align: left;
  }

  .statistic-td {
    @include width-flex(8%)
    text-align: center;
  }

</style>
