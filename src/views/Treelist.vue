<template lang="pug">
  mixin circle-week__desc
    .circle-week__desc
      .circle-week__desc-time 16.00—18.00
      .circle-week__desc-title Практическое занятие, ССМ-2, №12
      .circle-week__desc-text Аэробная выносливость
        span.num-indication 5/10

  .div
    ScheduleHeader(title='Расписание')
      template(v-slot:header-block)
        base-select(label='Выберите группу' classAttr='select-base custom-select ml-5')
        base-button(classAttr='custom-button button-icon button-blue ml-5' tag='a' color="#326BFF")
          svg(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M10 4.16669V15.8334' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M4.1665 10H15.8332' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        base-button(classAttr='custom-button button-icon  ml-auto' tag='a' color="transparent")
          svg(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M6.66675 5H17.5001' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M6.66675 10H17.5001' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M6.66675 15H17.5001' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M2.5 5H2.50833' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M2.5 10H2.50833' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M2.5 15H2.50833' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')

        base-button(classAttr='custom-button button-icon ml-5' tag='a' color="#F1F3F9")
          svg(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M13.3333 1.66669V5.00002' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M6.66675 1.66669V5.00002' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M2.5 8.33331H17.5' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
      template(v-slot:header-right)
        .text-block
          img.icon-20.icon-cup(
            src="@/assets/images/coffee-cup.svg"
          )
          .text-info Вы работаете непрерывно
            span 16 часов
        v-avatar(
          height='40px'
          width='40px'
        )
          img(
            src="@/assets/images/avatar.png"
          )


    v-row
      v-col(
        md='8'
      )
        .block-flex.mb-5.justify-space-between
          .block-flex__left.d-inline-flex.align-center
            .h6 Периоды
            .labels
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  .d-inline-flex(v-bind='attrs' v-on='on')
                    base-button(classAttr='button-middle button-blue ml-5 br-50' heightButton='24px' tag='button' color="#326BFF" label="Макроциклы")
                span Скрыть макроциклы
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  .d-inline-flex(v-bind='attrs' v-on='on')
                    base-button(classAttr='button-middle button-blue ml-1 br-50' heightButton='24px' tag='button' color="#326BFF" label="Мезоциклы")
                span Скрыть мезоциклы
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  .d-inline-flex(v-bind='attrs' v-on='on')
                    base-button(classAttr='button-middle button-blue ml-1 br-50' heightButton='24px' tag='button' color="#326BFF" label="Микроциклы")
                span Скрыть микроциклы
          .block-flex__right
            .show-more Раскрыть все
        AccordionCircle
        draggable(
          :list='trainings'
          group='test'
        )
          .div(
            v-for='(element, index) in trainings'
            :key='element.name'
          )
            v-card.card.mt-5(
              elevation="2"
            )
              .block-flex.mb-5.justify-space-between
                .h6 {{element.name}}
                base-label(
                  label='базовый 9, 27 сен — 3 окт'
                  color='#F1F3F9'
                  textColor="rgba(0, 0, 0, 0.6)"
                )
              .circle-week__block
                .circle-week__item.active
                  .circle-week__title ПН
                  +circle-week__desc
                .circle-week__item
                  .circle-week__title ВТ
                .circle-week__item.active
                  .circle-week__title СР
                  +circle-week__desc
                .circle-week__item
                  .circle-week__title ЧТ
                .circle-week__item
                  .circle-week__title ПТ
                .circle-week__item
                  .circle-week__title СБ
                .circle-week__item
                  .circle-week__title ВС





      v-col(
        md='4'
      )
        .block-flex.mb-4.justify-space-between
          .block-flex__left
            .h6 Цель сезона
          .block-flex__right
            dots-menu.position-static
        .target-block
          CardIndications(vertical-orientation='true')

</template>

<script>

import ScheduleHeader from "@/components/ScheduleHeader";
import DotsMenu from "@/components/DotsMenu";
import CardIndications from "@/components/CardIndications";
import AccordionCircle from "@/components/AccordionCircle";
// import {Draggable} from 'draggable-vue-directive';
import draggable from "vuedraggable";
import Accordion from "@/components/Accordion";


export default {
  name: 'Treelist',
  components: {
    Accordion,
    AccordionCircle,
    CardIndications,
    DotsMenu,
    ScheduleHeader,
    draggable,
  },

  data: () => ({
    panel: [],
    items: 5,
    trainings: [
      {name: "Текущий микроцикл", id: 1},
    ],
  }),
  methods: {
    // Create an array the length of our items
    // with all values as true
    // all () {
    //   this.panel = [...Array(this.items).keys()].map((k, i) => i)
    // },
    // // Reset the panel
    // none () {
    //   this.panel = []
    // },

    // setPosition: function () {
    //   this.tagFilters.isActive = !this.tagFilters.isActive;
    //   console.log('клик')
    // }
  },


}
</script>

<style lang="scss" scoped>

.circle-week__item {
  position: relative;
  padding: 8px 16px 8px 53px;

  box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.1), inset -1px 0px 0px rgba(0, 0, 0, 0.1), inset 0px -1px 0px rgba(0, 0, 0, 0.1);

  min-height: 64px;

  &:first-child {
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1), inset 1px 0px 0px rgba(0, 0, 0, 0.1), inset 0px 1px 0px rgba(0, 0, 0, 0.1), inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  }
}

.circle-week__item.active {
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.16), inset 2px 0px 0px #FFBF26, inset 0px 1px 0px rgba(0, 0, 0, 0.16), inset 0px -1px 0px rgba(0, 0, 0, 0.16);
  background: #FFF5DD;

  .circle-week__title {
    color: #000000;
  }
}

.circle-week__title {
  position: absolute;
  left: 16px;
  top: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, .6);
}

.circle-week__desc-time {
  font-size: 12px;
  margin-bottom: 6px;

}

.circle-week__desc-title {
  font-size: 12px;
  font-family: $FiraSansMedium;
  margin-bottom: 6px;
}

.circle-week__desc-text {
  font-size: 12px;
}

.num-indication {
  font-size: 10px;
  letter-spacing: 1px;
  color: #9E7200;
  margin-left: 5px;
}


</style>