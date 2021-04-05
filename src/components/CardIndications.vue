<template lang="pug">
  v-card.card(
    elevation="2"
  )
    .card-title Прогноз роста показателей
    .info-block
      img.target-icon(
        src='@/assets/images/svg/icon-target.svg'
      )
      .info-text Не меняя план тренировки, достигнете цели в нужный срок
    .progress__wrap
      .progress
        each val in ['Скорость', 'Выносливость', 'Точность', 'Сила']
          progressbar-item(title=val position-left='left:85%')
      <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
      .summary-indication.green-result
        svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M4 0L8 5H0L4 0Z' )
        .progress-quant 34
    .progress__bottom
      .progress-info__item.black-circle Текущее состояние
      .progress-info__item.green-circle Прогноз по результатам занятия
      .progress-info__item.blue-circle Цель сезона





</template>

<script>
import ProgressbarItem from "@/components/ProgressbarItem";
export default {
  name: "CardIndications",
  components: {ProgressbarItem}
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


</style>