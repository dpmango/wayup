<template lang="pug">
  .sidebar-widgets
    .sidebar-widgets__header
      .sidebar-widgets__close(@click="$emit('sidebarWidgetsClose', index)")
        svg.icon-24(width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M7 17L17 7M17 17L7 7' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')

      .sidebar-widgets__title Виджеты
      .sidebar-widgets__text.text-middle.mb-4 Выберите конфигурацию расположения и перетяните нужный виджет на рабочий стол
      base-select(
        classAttr='select-default select-bg-gray w-50'
        label="Все категории"
        :items="selectItems"
      )

    .sidebar-widgets__content
      vue-custom-scrollbar.scroll-area(
        :settings="settings"
      )
        .widgets-block
          .widgets-item(
            v-for='(element, index) in WidgetAll'
            :key='index'
          )
            component(
              :is="element.widgetComponent"
              :data="element.widgetData"
              :title="element.widgetTitle"
            )



</template>

<script>
	import vueCustomScrollbar from 'vue-custom-scrollbar'
	import "vue-custom-scrollbar/dist/vueScrollbar.css"
	import WidgetStatisticMatch from "@/components/widgets/WidgetStatisticMatch";
	import WidgetStatisticTotal from "@/components/widgets/WidgetStatisticTotal";
	import WidgetStatisticAnalytics from "@/components/widgets/WidgetStatisticAnalytics";
  import WidgetLevel from "@/components/widgets/WidgetLevel";
  import WidgetStatisticSeason from "@/components/widgets/WidgetStatisticSeason";
  import WidgetTeam from '@/components/widgets/WidgetTeam';


  import {mapActions, mapState} from "vuex";

	export default {
		name: "SidebarWidgets",
		components: {
			WidgetStatisticAnalytics,
			WidgetStatisticTotal,
			WidgetStatisticMatch,
      WidgetLevel,
			vueCustomScrollbar,
      WidgetStatisticSeason,
      WidgetTeam,
		},
		data: () => ({
			settings: {
				suppressScrollY: false,
				suppressScrollX: false,
				wheelPropagation: false,
			},
			selectItems: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
		}),
    computed: {
      ...mapState('widgets', ['WidgetAll'])
    },
    methods: {
      ...mapActions('widgets', ['loadWidgetsAll']),
    },
    created() {
      this.loadWidgetsAll();
    },
	}
</script>

<style scoped lang="scss">

  .sidebar-widgets {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 468px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    z-index: 1000;
  }

  .sidebar-widgets.m-show {
    right: 0;
    transition: 1s;
  }

  .sidebar-widgets.m-hide {
    right: -999px;
    transition: 2s;
  }

  .sidebar-widgets__header {
    padding: 40px 24px 24px;
    box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 4px;
    position: relative;
  }

  .sidebar-widgets__close {
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .scroll-area {
    height: calc(100vh - 192px);
  }

  .sidebar-widgets__title {
    font-size: 20px;
    font-family: $FiraSansMedium;
    margin-bottom: 8px;
  }

  .widgets-block{
    //overflow: hidden;
  }

  .widgets-item{
    //width: 1000px;
  }

</style>