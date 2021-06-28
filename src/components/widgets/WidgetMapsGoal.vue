<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        v-item-group.d-flex.ml-auto.mb-0(mandatory)
          v-item(
            v-slot='{ active, toggle }'
            v-for='val in resultButtons'
            :key='val'
          )
            div
              base-segment(
                classAttr='segment-default segment-small'
                :label='val'
                tag="div"
                @click='toggle'
                @select="changeResult($event)"
              )
    .widget-content
      .maps-goal__wrap
        .maps-goal__block
          .maps-goal__left
            .maps-goal-img__wrap
              img.maps-goal-img(
                src="@/assets/images/maps-goal.svg"
              )
            .point-goal(style="left: 250px; top:50px;")
            .point-goal.red(style="left: 150px; top:190px;")
            .point-goal(style="left: 150px; top:150px;")
            .point-goal(style="left: 250px; top:150px;")
            .point-goal(style="left: 150px; top:250px;")
          .maps-goal__right(v-if='widgetBig')
            .goal-statistic__panel.mb-6
              .goal-statistic-title Голы: 2
            .goal-statistic__panel
              .goal-statistic-title.mb-3 Отбитые броски: 19
              .goal-statistic Остановка клюшкой <span>2</span>
              .goal-statistic Игра ловушкой <span>2</span>
              .goal-statistic Игра клюшкой <span>2</span>
              .goal-statistic Игра блином <span>2</span>
              .goal-statistic Корпус <span>2</span>

</template>

<script>


export default {
  name: "WidgetMapsGoal",
  data: () => ({
    resultButtons: ['Все', '<span class="circle red-circle">Голы</span>', '<span class="circle black-circle">Броски</span>'],
    widgetBig: true,
    resultList:null
  }),
  props: {
    data: {
      type: [Array, Object],
    },
    title: {
      type: [String],
      default: ''
    },

  },
  methods: {
    changeResult(result) {
      this.currentResult = result;
      switch (result) {
        case 'Все':
          this.resultList = this.data.filter(item => item.position == "goalkeeper");
          break;
        case 'Голы':
          this.resultList = this.data.filter(item => item.position == "defender");
          break;
        case 'Броски':
          this.resultList = this.data.filter(item => item.position == "forward");
          break;
      }
    }
  },

}
</script>

<style scoped lang="scss">

.maps-goal-img__wrap {
  max-width: 100%;
  //height: 400px;
  min-height: 250px;
}

.maps-goal-img {
  max-width: 100%;

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


.maps-goal__wrap {
  position: relative;
  //margin-top: 85px;
  //margin-bottom: 90px;
  display: flex;
  //justify-content: center;
  flex-direction: column;

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
    white-space: nowrap;
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

.goal-statistic-title{
  font-family: $FiraSansMedium;
  font-size: 14px;
}


::v-deep {
  .circle {
    display: flex;
    align-items: center;
    &:before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 5px;

    }
  }
  .red-circle {
    &:before {
      background: #EC4865;
    }
  }
  .black-circle {
    &:before {
      background: #000000;
    }
  }

}



</style>
