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
                src="@/assets/images/maps-goal-zone.png"
              )
            .point-goal(style="left: 250px; top:50px;")
            .point-goal.red(style="left: 150px; top:190px;")
            .point-goal(style="left: 150px; top:150px;")
            .point-goal(style="left: 250px; top:150px;")
            .point-goal(style="left: 150px; top:250px;")

          .maps-goal__right(v-if='widgetBig')
            .maps-goal__indication.mb-6.mt-7
              .maps-goal__indication-item(v-for='(item,i) in 3' :key='i')
                .maps-goal__indication-key КН
                .maps-goal__indication-value 1.22

            .goal-statistic__panel
              .goal-statistic-title.mb-3 Игры: 5
              .goal-statistic Steam-factor <span>4 : 3</span>
              .goal-statistic Весёлые дьяволы <span>0 : 1</span>
              .goal-statistic Трактор <span>0 : 7</span>
              .goal-statistic ХК «Бурундуки» <span>4 : 3</span>
              .goal-statistic ХК «Олимпик» <span>4 : 3</span>


</template>

<script>


export default {
  name: "WidgetMapsGoalZone",
  data: () => ({
    resultButtons: ['Все', '<span class="circle red-circle">Голы</span>', '<span class="circle black-circle">Броски</span>'],
    widgetBig: true,
    resultList: null
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
    white-space: nowrap;

  }

}

.goal-statistic-title {
  font-family: $FiraSansMedium;
  font-size: 14px;
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

.maps-goal__indication{
  display: flex;
}

.maps-goal__indication-item{
  @include width-flex(33.3%)
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  padding: 3px 10px 5px 10px;
}
.maps-goal__indication-key{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
}
.maps-goal__indication-value{
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
