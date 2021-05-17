<template lang="pug">
    div
        WidgetStatisticGame
        IndicationStatistic

        v-row
            v-col(
                md='6'
            )
                WidgetMapsGoal
            v-col(
                md='6'
            )
                WidgetMapsGoalZone

        WidgetStatisticMatch
        WidgetStatisticTotal
        WidgetStatisticAnalytics


</template>

<script>
    import IndicationStatistic from "@/components/elements/IndicationStatistic";
    import WidgetStatisticGame from "@/components/widgets/WidgetStatisticGame";
    import WidgetStatisticTotal from "@/components/widgets/WidgetStatisticTotal";
    import WidgetStatisticMatch from "@/components/widgets/WidgetStatisticMatch";
    import WidgetStatisticAnalytics from "@/components/widgets/WidgetStatisticAnalytics";
    import WidgetMapsGoalZone from "@/components/widgets/WidgetMapsGoalZone";
    import WidgetMapsGoal from "@/components/widgets/WidgetMapsGoal";

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

    }
</script>

<style scoped>

</style>