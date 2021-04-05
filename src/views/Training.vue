<template lang="pug">
  mixin Accordion(data)
    v-expansion-panels
      draggable.accordion-group(:list=`${data.list}` group=`${data.group}` @change='log')
        v-expansion-panel(
          v-for=`(element, index) in ${data.list}`
          :key='element.name'
        )
          v-expansion-panel-header
            | {{ element.name}}
          v-expansion-panel-content
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.



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
            v-btn.custom-button.mr-6(
              elevation='0'
              color="#F1F3F9"
              height='40px'
            ) Редактировать
            v-select(
              class='select-base custom-select mr-6'
              :items="items"
              label='Выберите группу'
              solo
              background-color="#F1F3F9"
              color='#000'
              hide-details
            )
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
                  //Accordion(list='list1' group='training')
                        v-expansion-panels

                  +Accordion({
                    list:'list1',
                    group:'training'
                  })
                  +Accordion({
                    list:'list4',
                    group:'power'
                  })
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
            //Accordion(list='list2' group='training')
            +Accordion({
                  list:'list2',
                  group:'training'
                })
            +Accordion({
                  list:'list3',
                  group:'power'
                })



</template>


<script>


import TheBreadcrumbs from "@/components/TheBreadcrumbs";
import TagsTraining from "@/components/TagsTraining";
import CardIndications from "@/components/CardIndications";
import AccordionItem from "@/components/AccordionItem";
import draggable from 'vuedraggable'
import Accordion from "@/components/Accordion";
export default {
  name: 'Training',
  components: {
    Accordion,
    AccordionItem,
    CardIndications,
    TagsTraining,
    TheBreadcrumbs,
    draggable
  },
  data: () => ({
    // options: {
    //   dropzoneSelector: ".dropzone",
    //   draggableSelector: ".dropzone-item"
    // },
    items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
    list1: [
      { name: "Баланс в основной стойке", id: 1 },
      { name: "Подъем в основную стойку из положения лежа на животе", id: 2 },
      // { name: "Jean", id: 3 },
      // { name: "Gerard", id: 4 }
    ],
    list2: [
      { name: "5 х 4  Большинство", id: 5 },
      { name: "3 х 5 Меньшинство", id: 6 },
      { name: "Розыгрыш", id: 7 }
    ],
    list3: [
      { name: "Свободная игра 1", id: 8 },
      { name: "Свободная игра 2", id: 9 },
      { name: "Свободная игра 3", id: 10 }
    ],
    list4: [
      { name: "Свободная игра 123", id: 8 },
      { name: "Свободная игра 2232", id: 9 },
      { name: "Свободная игра 3323", id: 10 }
    ]

  }),

  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }




}
</script>

<style lang="scss">

.training-head {
  margin-bottom: 64px;
}

.accordion-group{
  width: 100%;
  min-height: 128px;

}

.v-item-group{
  margin-bottom: 25px;
}

</style>