<template lang="pug">
  .timeline
    <!-- пройденный этап - добавляем '.complete' -->
    .sidebar-link.timeline__item
      img.timeline__icon(
        src=`@/assets/images/svg/clock-icon.svg`
      )
      .timeline__block
        .timeline__block-title Группа
        .timeline__block-select Не выбрана
    .timeline__item.active
      img.timeline__icon(
        src=`@/assets/images/svg/clock-icon.svg`
      )
      .timeline__block
        .timeline__block-title Мероприятия
        .timeline__block-select Не добавлены
    .timeline__item
      img.timeline__icon(
        src=`@/assets/images/svg/clock-icon.svg`
      )
      .timeline__block
        .timeline__block-title Цели
        .timeline__block-select Не выбраны
    .timeline__item
      img.timeline__icon(
        src=`@/assets/images/svg/clock-icon.svg`
      )
      .timeline__block
        .timeline__block-title Период
        .timeline__block-select Не задан
    .timeline__item
      .timeline__icon.mt-n1.mr-1 ✅
      .timeline__block
        .timeline__block-title Готово
        .timeline__block-select
</template>

<script>
export default {
name: "BaseTimeline"
}
</script>

<style scoped lang="scss">

.timeline {
  display: inline-flex;
  margin-bottom: 24px;
}

.timeline__item {
  display: flex;
  align-items: flex-start;
  margin-right: 15px;

  &:after {
    content: '';
    @include background-contain('arrow-big.svg')
    @include width-flex(15px)
    height: 20px;
    margin-left: 15px;
    margin-top: 3px;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
}

.timeline__block {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.timeline__block-title {
  font-family: $FiraSansMedium;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: #666666;

}

.timeline__block-select {
  color: #666666;
  font-size: 14px;
}

.timeline__icon {
  opacity: 0.4;
}

.timeline {
  background: #F8F9FB;
  border-radius: 4px;
  padding: 14px 21px;
}

.timeline__item.active {
  .timeline__block-title {
    color: #000000;
  }
}
.timeline__item.complete {
  .timeline__block-title {
    color: #000000;
  }

  .timeline__block-select {
    color: $green;
  }
}

</style>