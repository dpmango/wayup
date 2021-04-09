<template lang="pug">
  v-card(:class="!verticalOrientation ? 'card' : 'card vertical'"
    elevation="2"
  )
    .card-title Прогноз роста показателей
    info-block(text="Не меняя план тренировки, достигнете цели в нужный срок")
      slot
        template
          .target-icon
            div 🎯
    .progress__wrap
      .progress
        each val in ['Скорость', 'Выносливость', 'Точность', 'Сила']
          progressbar-item(title=val position-left='left:85%')
      <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
      .summary-indication.green-result(:class="!verticalOrientation ? 'd-flex' : 'd-none'")
        svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M4 0L8 5H0L4 0Z' )
        .progress-quant 34
    .progress__bottom-wrap
      .progress__bottom
        .progress-info__item.black-circle Текущее состояние
        .progress-info__item.green-circle Прогноз по результатам занятия
        .progress-info__item.blue-circle Цель сезона
      .summary-indication.green-result(:class="!verticalOrientation ? 'd-none' : 'd-flex'")
        svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M4 0L8 5H0L4 0Z' )
        .progress-quant 34






</template>

<script>
import ProgressbarItem from "@/components/ProgressbarItem";
import InfoBlock from "@/components/elements/InfoBlock";
export default {
  name: "CardIndications",
  components: {InfoBlock, ProgressbarItem},
  props:{
    verticalOrientation:{
      type:Boolean,
      default:false
    },
  },

}
</script>

<style lang="scss" scoped>

.progress__wrap{
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.progress{
  @include width-flex(85%)
}
.summary-indication{
  @include width-flex(15%)
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .progress-quant{
    font-size: 32px;
    font-family: $FiraSansSemiBold;
    margin-left: 6px;
  }
}
.progress__bottom{
  display: flex;
  align-items: center;

}

.progress-info__item{
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-right: 20px;
  @include last-mr-0
  &:before{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
}


.black-circle{
  &:before{
    background: #000;
  }
}
.green-circle{
  &:before{
    background: $green;
  }
}
.blue-circle{
  &:before{
    background: $blue;
  }
}

.card.vertical{

  .progress{
    @include width-flex(100%)
  }
  .progress__bottom{
    flex-direction: column;
    align-items: flex-start;
  }
  .progress__bottom-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .progress-info__item{
    margin-bottom: 10px;
    &:last-child{
      @include last-mb-0
    }
  }
}


</style>