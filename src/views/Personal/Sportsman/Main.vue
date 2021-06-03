<template lang="pug">
  v-row
    v-col(
      md="12"
      sm="12"
    )
      general-progress
    v-col(
      md="7"
    )

      draggable(
        class='widgets-wrapper'
        :list='widgetsListOne'
        group='widgets'
      )
        .widgets-block(
          v-for='(element, index) in widgetsListOne'
          :key='element.widgetPosition'
        )
          component(
            :is="element.widgetComponent"
            :data="element.widgetData"
            :title="element.widgetTitle"
          )

    v-col(
      md="5"
    )
      draggable(
        class='widgets-wrapper'
        :list='widgetsListTwo'
        group='widgets'
      )
        .widgets-block(
          v-for='(element, index) in widgetsListTwo'
          :key='element.widgetPosition'
        )
          component(
            :is="element.widgetComponent"
            :data="element.widgetData"
            :title="element.widgetTitle"
          )


</template>

<script>
import ScheduleHeader from "@/components/ScheduleHeader";
import LevelBlock from "@/components/LevelBlock";
import UserSidebar from "@/components/UserSidebar";
import SnackBar from "@/components/elements/SnackBar";
import draggable from "vuedraggable";
import DotsMenu from "@/components/DotsMenu";
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import HmProgress from "@/components/elements/HmProgress";
import WidgetHomework from "@/components/widgets/WidgetHomework";
import WidgetEvents from "@/components/widgets/WidgetEvents";
import WidgetFormPlayer from "@/components/widgets/WidgetFormPlayer";
import WidgetFriends from "@/components/widgets/WidgetFriends";
import WidgetAwards from "@/components/widgets/WidgetAwards";
import WidgetStatisticSeason from "@/components/widgets/WidgetStatisticSeason";
import WidgetMapsGoal from "@/components/widgets/WidgetMapsGoal";
import WidgetTeam from "@/components/widgets/WidgetTeam";
import WidgetLearn from "@/components/widgets/WidgetLearn";
import WidgetChartPolar from "@/components/widgets/WidgetChartPolar";
import MusicPlayer from "@/components/elements/MusicPlayer";
import AccordionExercises from "@/components/AccordionExercises";
import InfoBlock from "@/components/elements/InfoBlock";
import AccordionEstimation from "@/components/AccordionEstimation";
import MarksBlock from "@/components/elements/MarksBlock";
import AccordionHomework from "@/components/AccordionHomework";
import WidgetChatMessage from "@/components/widgets/WidgetChatMessage";
import WidgetErrors from "@/components/widgets/WidgetErrors";
import WidgetStatisticAnalytics from "@/components/widgets/WidgetStatisticAnalytics";
import WidgetMapsGoalZone from "@/components/widgets/WidgetMapsGoalZone";
import WidgetStatisticMatch from "@/components/widgets/WidgetStatisticMatch";
import GeneralProgress from "@/components/personal/GeneralProgress";
import {mapActions, mapState} from 'vuex';

export default {
  name: "AccountSportsman",
  components: {
    AccordionHomework,
    MarksBlock,
    AccordionEstimation,
    InfoBlock,
    AccordionExercises,
    MusicPlayer,
    WidgetLearn,
    WidgetTeam,
    WidgetMapsGoal,
    WidgetStatisticSeason,
    WidgetAwards,
    WidgetFriends,
    WidgetFormPlayer,
    WidgetEvents,
    WidgetHomework,
    WidgetChartPolar,
    HmProgress,
    DotsMenu,
    SnackBar,
    UserSidebar,
    LevelBlock,
    ScheduleHeader,
    draggable,
    vueCustomScrollbar,
    WidgetChatMessage,
    WidgetErrors,
    WidgetMapsGoalZone,
    WidgetStatisticAnalytics,
    WidgetStatisticMatch,
    GeneralProgress
  },

  data: () => ({
    isShowList: false,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
    interval: {},
    value: 100,
    snackbar: false,
    snackbarSettings: false,
    text: 'Выставлены оценки. Можно ознакомиться в разделе с оценками',
    timeout: 10000,
    timeoutSettings: -1,
  }),

  beforeDestroy() {
    clearInterval(this.interval)
  },
  computed: {
    widgetsListOne() {
      return this.WidgetList.filter(item => item.widgetPosition % 2 == 0)
    },
    widgetsListTwo() {
      return this.WidgetList.filter(item => item.widgetPosition % 2 != 0)
    },
    ...mapState('widgets', ['WidgetList'])
  },
  methods: {
    toggleList: function () {
      this.isShowList = !this.isShowList;
    },
    ...mapActions('widgets', ['loadWidgetsListMain']),
  },
  created() {
    this.loadWidgetsListMain();
  },
}
</script>

<style scoped lang="scss">

.v-tab {
  text-transform: none;
  font-family: $FiraSansRegular;
  letter-spacing: normal;
  min-width: 0;
  max-width: none;
  padding: 0;
  margin: 0 16px;
}

::v-deep {
  .v-tabs-bar {
    height: 36px;
  }

  .v-badge__wrapper {
    left: 6px;
    top: 9px;
  }

  .v-tab--active {
    color: #000;
  }

  .v-tabs-items {
    padding: 30px 3px 60px;
  }

  .v-snack__content {
    color: #000;
    padding: 0 20px 0 0;
  }

  .v-snack__wrapper {
    max-width: 400px;
    padding: 16px 24px;
    border-radius: 12px;
    min-height: 92px;
    display: flex;
    align-items: flex-start;
  }

  .snackbar-text {
    //max-width: 60%;
  }

  .snackbar-right {
    display: flex;
    height: 100%;

  }

  .v-snack__action {
    height: 100%;
    margin-right: 0;
    align-items: flex-start;
  }

  .snackbar-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 10px;
  }

  .snackbar-button {
    color: #326BFF;
    font-family: $FiraSansMedium;

    &:hover {
      cursor: pointer;
    }

  }


}

.menu-settings {
  width: 271px;

  .v-list-item {
    padding: 10px 20px;
    min-height: 0px;
  }

  .v-list-item__title {
    font-size: 16px;
  }
}

.snackbar-settings {
  height: 56px;
}

.snackbar-settings {
  ::v-deep {
    .v-snack__wrapper {
      max-width: 100%;
      margin: 0;
      background: #292C33;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.16);
      border-radius: 0px 0px 12px 12px;
      min-height: 0;
      display: flex;
      align-items: center;
    }

    .button-black {
      background: #383F4C;
    }

    .v-snack__content {
      color: #FFFFFF;
    }
  }
}


</style>