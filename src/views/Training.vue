<template lang="pug">
  .page-training
    v-row
      v-col(
        md='10'
        offset-md='1'
      )
        .training-head
          TheBreadcrumbs
          .title-wrap
            .page-title Индивидуальное занятие,
            span.span-title среда,
            span.span-title 10 февраля,
            span.span-title 16:00 — 18:00
          TagsTraining

          .buttons-wrap(data-app)
            base-button(label='Редактировать' classAttr='custom-button mr-6')
            base-select(label='Поделиться' classAttr='select-base custom-select mr-6')
            .title-blue Итоговый план
        v-row
          v-col(
            md='8'
          )
            .indications-blocks.mb-12
              v-row
                v-col(
                  md='12'
                )
                  v-card.card(
                    elevation="2"
                  )
                    .card-title Интенсивность занятия
                v-col(
                  md='12'
                )
                  CardIndications
            .trainings__block
              v-row
                v-col(
                  md='12'
                )
                  AccordionBig(
                    v-for="(accordionBigItem, i) in accordionBigItems"
                    :classAttr="accordionBigItem"
                    :index="i"
                    :key="i"
                    :open="accordionBigItem.open"
                    @toggleOpen="toggleOpen"
                  )
                    template(v-slot:accord-header)
                      .accordion-big__head
                        .accordion-subtitle 2 упражнений, 17 мин
                        .accordion-big__header
                          .accordion-big__header-title Подготовительная часть
                          .labels
                            base-label(
                              label='Нормально'
                              color='rgba(235, 173, 16, 0.2)'
                              textColor="#9E7200"
                              )
                    template(v-slot:accord-body)
                      Accordion

                      //+Accordion({
                      //  list: 'list1',
                      //  group: 'training'
                      //})
                        //template(v-slot:accord-mini-header)

                        //template(v-slot:accord-mini-body)

                      //+Accordion({
                      //  list: 'list4',
                      //  group: 'power'
                      //})
              v-row
                v-col(
                  md='6'
                )
                v-col(
                  md='6'
                )
          v-col(
            md='4'
          )
            TrainingAside


</template>


<script>


import TheBreadcrumbs from "@/components/TheBreadcrumbs";
import TagsTraining from "@/components/TagsTraining";
import CardIndications from "@/components/CardIndications";
import AccordionItem from "@/components/AccordionItem";
// import draggable from 'vuedraggable'
import Accordion from "@/components/Accordion";
import BaseSelect from "@/components/baseSelect";
import BaseButton from "@/components/baseButton";
import AccordionBig from "@/components/AccordionBig";
import BaseLabel from "@/components/baseLabel";
import TrainingAside from "@/components/TrainingAside";

export default {
  name: 'Training',
  components: {
    TrainingAside,
    BaseLabel,
    AccordionBig,
    BaseButton,
    BaseSelect,
    Accordion,
    AccordionItem,
    CardIndications,
    TagsTraining,
    TheBreadcrumbs,
    // draggable
  },
  data: () => ({
    // options: {
    //   dropzoneSelector: ".dropzone",
    //   draggableSelector: ".dropzone-item"
    // },
    items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
    list1: [
      {name: "Баланс в основной стойке", id: 1},
      {name: "Подъем в основную стойку из положения лежа на животе", id: 2},
    ],
    list2: [
      {name: "5 х 4  Большинство", id: 5},
      {name: "3 х 5 Меньшинство", id: 6},
      {name: "Розыгрыш", id: 7}
    ],
    list3: [
      {name: "Свободная игра 1", id: 8},
      {name: "Свободная игра 2", id: 9},
      {name: "Свободная игра 3", id: 10}
    ],
    list4: [
      {name: "Свободная игра 123", id: 8},
      {name: "Свободная игра 2232", id: 9},
      {name: "Свободная игра 3323", id: 10}
    ],
    accordionBigItems: [
      {
        open: true,
        children:[
          {name: "Баланс в основной стойке", id: 1},
          {name: "Подъем в основную стойку из положения лежа на животе", id: 2},

        ]
      },
      {
        open: false,
        children:[
          {name: "5 х 4  Большинство", id: 5},
          {name: "3 х 5 Меньшинство", id: 6},
          {name: "Розыгрыш", id: 7}

        ]
      },
      {
        open: false,
        children:[
          {name: "Свободная игра 1", id: 8},
          {name: "Свободная игра 2", id: 9},
          {name: "Свободная игра 3", id: 10}

        ]
      },
      {
        open: false,
        children:[
          {name: "Свободная игра 123", id: 8},
          {name: "Свободная игра 2232", id: 9},
          {name: "Свободная игра 3323", id: 10}


        ]
      },

    ]

  }),

  methods: {
    add: function () {
      this.list.push({name: "Juan"});
    },
    replace: function () {
      this.list = [{name: "Edgard"}];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function (evt) {
      window.console.log(evt);
    },
    toggleOpen: function (index) {
      this.accordionBigItems = this.accordionBigItems.map((accordionBigItem, i) => {
        if (index === i) {
          accordionBigItem.open = !accordionBigItem.open;
        } else {
          accordionBigItem.open = false;
        }
        return accordionBigItem;
      });
    }
  }


}
</script>

<style lang="scss">

.training-head {
  margin-bottom: 64px;
}

/* accordion */
//.accordion-big__header{
//
//}
//
//.accordion-subtitle{
//  color: rgba(0, 0, 0, 0.5);
//  font-size: 12px;
//  margin-bottom: 8px;
//}
//
//
//.accordion-big {
//  display: block;
//  width: 100%;
//  //max-width: 768px;
//  //margin: 15px auto;
//  //padding: 15px;
//  //border-radius: 8px;
//  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
//  //background-color: #FFF;
//}
//
//.accordion-big__header {
//  position: relative;
//  color: #3c3c3c;
//  font-size: 20px;
//  transition: all 0.4s linear;
//}
//.accordion-big__header-title{
//  font-size: 20px;
//  font-family: $FiraSansMedium;
//  margin-right: 8px;
//
//}
//.accordion-big__header{
//  padding-left: 30px;
//
//  display: flex;
//  align-items: center;
//  &:after {
//    content: '';
//    position: absolute;
//    top: 50%;
//    left: 0px;
//    transform: translateY(-50%) rotate(0deg);
//    @include width-flex(18px)
//    height: 18px;
//    @include background-contain('arrow-down.svg')
//
//    transition: all 0.2s linear;
//  }
//}
//
//.accordion-big.open .accordion-big__header {
//  margin-bottom: 15px;
//}
//
//.accordion-big.open .accordion-big__header::after {
//  transform: translateY(-50%) rotate(180deg);
//}
//
//.accordion-big .accordion-big__body {
//  color: #3c3c3c;
//  font-size: 18px;
//  opacity: 0;
//  max-height: 0px;
//  overflow-y: hidden;
//  transition: all 0.4s ease-out;
//}
//
//.accordion-big.open .accordion-big__body {
//  opacity: 1;
//  max-height: 1000px;
//}


/**/



/**/

</style>