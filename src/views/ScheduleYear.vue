<template lang="pug">
  .div
    ScheduleHeader(text='Календарь 134')
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
            .show-more(@click="all") Раскрыть все

        AccordionCircle

      v-col(
        md='4'
      )
        .block-flex.mb-4.justify-space-between
          .block-flex__left
            .h6 Цель сезона
          .block-flex__right
            dots-menu.position-static
        CardIndications








</template>

<script>

import ScheduleHeader from "@/components/ScheduleHeader";
import DotsMenu from "@/components/DotsMenu";
import CardIndications from "@/components/CardIndications";
import AccordionCircle from "@/components/AccordionCircle";

export default {
  name: 'ScheduleYear',
  components: {AccordionCircle, CardIndications, DotsMenu, ScheduleHeader},
  data: () =>  ({
    panel: [],
    items: 5,
  }),
  methods: {
    // Create an array the length of our items
    // with all values as true
    all () {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    // Reset the panel
    none () {
      this.panel = []
    },
  },


}
</script>

<style lang="scss" scoped>


</style>