<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Броски в створ по зонам
        v-item-group.d-flex.ml-auto.mb-0(mandatory)
          each val in ['Все', 'Голы', 'Броски']
            v-item(
              v-slot='{ active, toggle }'
            )
              base-segment(
                classAttr='segment-default segment-small'
                label=val
                tag="div"
                @click='toggle'
              )
    .widget-content
      .maps-goal__wrap
        img.maps-goal(
          src="@/assets/images/maps-goal-zone.png"
        )
        .point-goal(style="left: 250px; top:50px")
        .point-goal.red(style="left: 150px; top:190px")
        .point-goal(style="left: 150px; top:150px")
        .point-goal(style="left: 250px; top:150px")
        .point-goal(style="left: 150px; top:250px")
      //.widget-bottom.d-flex
        .goal-statistic.goal-complete Отбитых <span>19</span>
        .goal-statistic.goal-fail Пропущенных <span>2</span>


</template>

<script>


export default {
  name: "WidgetMapsGoalZone",

}
</script>

<style scoped lang="scss">

.maps-goal{
  max-width: 100%;
  height: 413px;

}
.maps-goal__wrap{
  position: relative;
  margin-top: 85px;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
}
.point-goal{
  position: absolute;
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
}

.point-goal.red{
  background: #DC1E34;

}
.goal-statistic{
  font-size: 12px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  span{
    font-family: $FiraSansMedium;
    margin-left: 10px;
  }
  &:before{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
}

.goal-complete{
  &:before {
    background: #000;
  }
}

.goal-fail{
  &:before {
    background: #DC1E34;
  }
}

.widget-team{
  .statistic-td.first{
    @include width-flex(30%)
    text-align: left;
  }
  .statistic-td{
    @include width-flex(14%)
    font-size: 14px;
    text-align: center;

  }

}

</style>