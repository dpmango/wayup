<template lang="pug">
  mixin accord-block
    v-expansion-panel-header.accordion-panel__header.flex-column.align-start
      .block-flex.accordion-circle__header-top.mb-5
        .block-flex__left.d-flex.align-center
          base-label(
            label='МАКРОЦИКЛ'
            color='rgba(30, 147, 211, 0.15)'
            textColor="#337599"
          )
          .accordion-circle__title Общеподготовительный
        .accordion-circle__time 12 июл 2021 — 1 мая 2022
      .labels
        base-label(
          label='42 недели'
          color='#F1F3F9'
          textColor="rgba(0, 0, 0, 0.6)"
        )
        base-label(
          label='2 мезоцикла'
          color='#F1F3F9'
          textColor="rgba(0, 0, 0, 0.6)"
        )
        base-label(
          label='12 занятий'
          color='#F1F3F9'
          textColor="rgba(0, 0, 0, 0.6)"
        )
  //.div
    a(href='#').show-more(@click="all") Раскрыть все
  v-expansion-panels.accordion-circle.accord-macrocircle
    v-expansion-panel(v-for='(item,i) in 3' :key='i')
      dots-menu
      +accord-block
      v-expansion-panel-content
        v-expansion-panels.accord-mezoocircle
          v-expansion-panel(v-for='(item,i) in 3' :key='i')
            dots-menu
            +accord-block
            v-expansion-panel-content
              v-expansion-panels.accord-microcircle
                v-expansion-panel(v-for='(item,i) in 3' :key='i')
                  dots-menu
                  +accord-block


</template>

<script>
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "AccordionCircle",
  components: {DotsMenu},
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

<style lang="scss">

.accordion-circle {
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  .accordion-panel__header {
    min-height: 94px;
    border-radius: 12px 12px 0px 0px !important;
    padding-left: 16px;
    padding-right: 24px;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
  }

  .v-expansion-panel-header--active {
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.4);

  }

  .accordion-circle__title {
    font-size: 16px;
    font-family: $FiraSansMedium;
  }

  .accordion-circle__header-top {
    justify-content: space-between;
    @include width-flex(calc(100% - 75px))
  }

  .accordion-circle__time {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
  }

  .accord-mezoocircle {
    .accordion-panel__header {
      background: #F8F9FC;
      border-radius: 0px;
    }
  }

  .accord-microcircle {
    .accordion-panel__header {
      background: #F1F3F9;
      border-radius: 0px;
      pointer-events: none;
    }

    .v-expansion-panel-header__icon {
      display: none;
    }
  }

  .v-expansion-panel-content__wrap {
    padding: 0 !important;
  }

  .v-expansion-panel {
    margin-top: 0;
  }

  .v-expansion-panel:before {
    box-shadow: none;
  }


}

</style>