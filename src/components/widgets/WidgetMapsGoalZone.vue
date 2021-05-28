<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        v-item-group.d-flex.ml-auto.mb-0(mandatory)
          each val in ['Все', 'Голы', 'Броски']
            v-item(
              v-slot='{ active, toggle }'
            )
              div
                base-segment(
                  classAttr='segment-default segment-small'
                  label=val
                  tag="div"
                  @click='toggle'
                )
    .widget-content
      .maps-goal__wrap
        .maps-goal__block
          .maps-goal__left
            .maps-goal-img__wrap
              img.maps-goal-img(
                src="@/assets/images/maps-goal-zone.png"
              )
            .point-goal(style="left: 250px; top:50px;")
            .point-goal.red(style="left: 150px; top:190px;")
            .point-goal(style="left: 150px; top:150px;")
            .point-goal(style="left: 250px; top:150px;")
            .point-goal(style="left: 150px; top:250px;")
          .maps-goal__right(v-if='widgetBig')
            .goal-statistic__panel
              .goal-statistic Остановка клюшкой <span>2</span>
              .goal-statistic Игра ловушкой <span>2</span>
              .goal-statistic Игра клюшкой <span>2</span>
              .goal-statistic Игра блином <span>2</span>
              .goal-statistic Корпус <span>2</span>
              .goal-statistic__panel-bottom
                .goal-statistic.goal-label.goal-complete Отбитых <span>19</span>
                .goal-statistic.goal-label.goal-fail Пропущенных <span>2</span>


</template>

<script>


export default {
  name: "WidgetMapsGoalZone",
  data: () => ({
    widgetBig: true
  }),
  props: {
    data: {
      type: Array,
    },
    title: {
      type: [String],
      default: ''
    },

  },
}
</script>

<style scoped lang="scss">

.maps-goal-img__wrap {
  max-width: 100%;
  //height: 413px;
  min-height: 250px;
}


.maps-goal-img {
  max-width: 100%;

}

.maps-goal__wrap {
  position: relative;
  //margin-top: 85px;
  //margin-bottom: 90px;
  display: flex;
  flex-direction: column;
}

.maps-goal__block {
  display: flex;
  align-items: flex-start;

}


.maps-goal__left {
  @include width-flex(60%)
}

.maps-goal__right {
  @include width-flex(40%)
  padding-left: 24px;
}


.goal-statistic__panel {
  background: #F9F9F9;
  border-radius: 8px;
  width: 100%;
  padding: 16px;

  .goal-statistic {
    margin-bottom: 8px;
  }
}

.goal-statistic__panel-bottom {
  margin-top: 26px;
}


.point-goal {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
}

.point-goal.red {
  background: #DC1E34;

}

.goal-statistic {
  font-size: 12px;
  margin-right: 32px;
  display: flex;
  align-items: center;

  span {
    font-family: $FiraSansMedium;
    margin-left: 10px;
  }

}

.goal-label {
  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
}

.goal-complete {
  &:before {
    background: #000;
  }
}

.goal-fail {
  &:before {
    background: #DC1E34;
  }
}

.widget-team {
  .statistic-td.first {
    @include width-flex(30%)
    text-align: left;
  }

  .statistic-td {
    @include width-flex(14%)
    font-size: 14px;
    text-align: center;

  }

}

</style>
