<template lang="pug">
  mixin accord-block
    v-expansion-panel-header.accordion-panel__header.flex-column.align-start(

    )

      img.cart-icon.icon-16(
        @click.stop='onClick()'
        src="@/assets/images/svg/icon-cart.svg"
      )
      .group-item
        .title-wrap
          .group-item__title
            | 👹
            .ml-2 Кемеровские дьяволы
            img.info-icon.icon-16.ml-2(
              @click.stop='onClick()'
              src="@/assets/images/svg/icon-info.svg"
            )
          base-label(
            label='Игра'
            color='rgba(30, 147, 211, 0.15);\n'
            textColor="#337599"
          )
        .group-item__blocks
          .group-item__block
            .group-item__subtitle Дата и время
            .group-item__text 15 окт. 18:00
          .group-item__block
            .group-item__subtitle Место
            .group-item__text Кемерово, Молодёжный проспект, 7/2


  v-expansion-panels.accordion-panels.tiles-panels(
    active-class='tiles-panel-active'
  )
    v-expansion-panel.accordion-panel.tiles-panel(v-for='(item,i) in 10' :key='i')
      +accord-block
      v-expansion-panel-content.accordion-content
        .accordion-content__inner
          .placement-block
            .placement-top
              .placement-title.event-title
                |📍
                .ml-2 Размещение
              .placement-text-block
                base-label(
                  label='Не забронировано'
                  color='rgba(216, 52, 81, 0.1)'
                  textColor="#D83451"
                )
                dots-menu.position-static

            .placement-buttom
              .placement-text.placement-text-title Гостиница «Электрон»
              .placement-text.placement-text-address 2-й Краснодонский переулок, 3
              a(href='#').placement-text.placement-text-link электрон-отель.рф
              .placement-text-block
                base-label(
                  label='Забронировано'
                  color='rgba(61, 197, 13, 0.2)'
                  textColor="#1F7800"
                )
                dots-menu.position-static
          .meet-block
            .event-title.mb-4
              |Предыдущие встречи
            .meet-list
              .meet-item
                .meet-date 31 января 2021
                .meet-city Челябинск
                .meet-name Кубок Урала
                .meet-cont 4:3
            .meet-list
              .meet-item
                .meet-date 31 января 2021
                .meet-city Челябинск
                .meet-name Кубок Урала
                .meet-cont 4:3












</template>

<script>
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "TrainingEventItem",
  components: {DotsMenu}
}
</script>

<style scoped lang="scss">


.group-item,
.tiles .tiles-panel-active .group-item {
  display: flex;
  width: 100%;
  flex-direction: row;
}

.group-item__blocks,
.tiles .tiles-panel-active .group-item__blocks {
  @include width-flex(70%)
  display: block;

}

.cart-icon {
  position: absolute;
  right: 54px;
  top: 14px;
  z-index: 100;

}

.group-item__title,
.tiles .tiles-panel-active .group-item__title {
  @include width-flex(100%)

  font-size: 16px;
  display: flex;
  align-items: flex-start;
  padding-right: 30px;
  margin-bottom: 15px;
  font-family: $FiraSansMedium;
}

.title-wrap,
.tiles .tiles-panel-active .title-wrap {
  @include width-flex(23%)
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 0;

}

.group-item__subtitle,
.tiles .tiles-panel-active .group-item__subtitle {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  white-space: nowrap;
  @include width-flex(23%)
  margin-bottom: 0;

}

.group-item__text {
  font-size: 14px;
  color: #000000;
}

.group-item__block,
.tiles .tiles-panel-active .group-item__block {
  margin-bottom: 12px;
  flex-direction: row;
  display: flex;
  align-items: center;
}

.accordion-panel__header,
.tiles .tiles-panel-active .accordion-panel__header {
  height: 80px !important;
  overflow: hidden;
}

.tiles-panels {
  justify-content: space-between;
  align-items: flex-start;
}

.tiles-panel {
  width: calc(100%);
  margin-top: 0 !important;

  &:after {
    border-top: none !important;
  }

  &:before {
    box-shadow: none;
  }
}

.accordion-content {
  .v-expansion-panel-content__wrap {

  }
}
.accordion-content__inner{
  padding-top: 15px;
  border-top: 1px solid #CCCCCC;
}

.accordion-content {
  margin-top: 15px;
}

.tiles-panel-active{
  z-index: 10000;
}


.tiles {
  .tiles-panel {
    width: calc(50% - 12px);
    max-width: calc(50% - 12px);
    //margin-bottom: 30px;
    order: -1;
    -webkit-animation: fadeAnimation 1s;
    transition: 0.5s left ease-in;

    &:first-child {
      //background: red;
    }

    &:nth-child(3) {
      //background: blue;

    }
  }

  .tiles-panel-active {
    @include width-flex(100%)
    -webkit-animation: fadeAnimation 1s;
    //order: inherit;
    transition: 0.5s left ease-in;
    //order: -1;


  }

  .v-expansion-panel--next-active {
    &:nth-child(odd) {
      order: 1;
      -webkit-animation: fadeAnimation 1s;
      transition: 0.5s left ease-in;
    }

    &:nth-child(even) {
      //transition: 0.5s left ease-in;
    }
  }

  .tiles-panel-active ~ .tiles-panel {
    order: 3 !important;
  }

  .group-item {
    flex-direction: column;
  }

  .group-item__blocks {
    @include width-flex(100%)
    display: flex;


  }

  .group-item__block {
    flex-direction: column;
    align-items: flex-start;

    &:first-child {
      margin-right: 20px;
    }
  }

  .title-wrap {
    @include width-flex(80%)
    margin-bottom: 25px;

  }

  .accordion-panel__header {
    height: 176px;
  }

  .group-item__subtitle {
    min-width: 0;
    width: auto;
    margin-bottom: 15px;
  }


}


@-webkit-keyframes fadeAnimation {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.placement-block {
  background: #F8F9FB;
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 15px;
}
.event-title{
  font-size: 14px;
  font-family: $FiraSansMedium;
  margin-bottom: 10px;
}

.placement-title{
  display: flex;
  align-items: center;

}
.placement-buttom{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.placement-top{
  display: flex;
}


.placement-text{
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 10px;
}

.placement-text-title{
  @include width-flex(20%)
}

.placement-text-address{
  @include width-flex(25%)
}

.placement-text-link{
  @include width-flex(25%)
  color: $blue !important;
}

.placement-text-block{
  @include width-flex(30%)
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: flex-end;

}

.meet-item{
  display: flex;
  align-items: center;
  font-size: 14px;
}
.meet-list{
  margin-bottom: 15px;
}
.meet-date{
  @include width-flex(17%)

}
.meet-city{
  @include width-flex(14%)

}
.meet-name{
  @include width-flex(20%)
  color: $blue;

}
.meet-cont{
  @include width-flex(10%)

}



</style>