<template lang="pug">
  div
    v-row
        v-col(
          v-for="element in WidgetList"
          :key='element.widgetPosition'
          :md='element.widgetCol'
        )
          component(
            :is="element.widgetComponent"
            :data="element.widgetData"
            :title="element.widgetTitle"
          )

</template>

<script>
	import IndicationStatistic from "@/components/elements/IndicationStatistic";
	import WidgetStatisticGame from "@/components/widgets/WidgetStatisticGame";
	import WidgetStatisticTotal from "@/components/widgets/WidgetStatisticTotal";
	import WidgetStatisticMatch from "@/components/widgets/WidgetStatisticMatch";
	import WidgetStatisticAnalytics from "@/components/widgets/WidgetStatisticAnalytics";
	import WidgetMapsGoalZone from "@/components/widgets/WidgetMapsGoalZone";
	import WidgetMapsGoal from "@/components/widgets/WidgetMapsGoal";
	import {mapActions, mapState} from 'vuex';

	export default {
		name: "Stat",
		components: {
			WidgetMapsGoalZone,
			WidgetStatisticAnalytics,
			WidgetStatisticMatch,
			WidgetStatisticTotal,
			WidgetStatisticGame,
			IndicationStatistic,
			WidgetMapsGoal
		},
		computed: {
			...mapState('widgets', ['WidgetList'])
		},
		methods: {
			...mapActions('widgets', ['loadWidgetsListStat']),
		},
		mounted() {
			this.loadWidgetsListStat();
		},

	}
</script>

<style scoped>

</style>