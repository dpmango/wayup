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
            base-button(label='Редактировать' classAttr='custom-button mr-6')
            base-select(label='Выберите группу' classAttr='select-base custom-select mr-6')
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
                  AccordionTest(
                    v-for="(faq, i) in faqs"
                    :faq="faq"
                    :index="i"
                    :key="i"
                    :open="faq.open"
                    @toggleOpen="toggleOpen"
                  )
                    +Accordion({
                      list: 'list1',
                      group: 'training'
                    })
                  +Accordion({
                    list: 'list4',
                    group: 'power'
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
              list: 'list2',
              group: 'training'
            })
            +Accordion({
              list: 'list3',
              group: 'power'
            })


</template>


<script>


import TheBreadcrumbs from "@/components/TheBreadcrumbs";
import TagsTraining from "@/components/TagsTraining";
import CardIndications from "@/components/CardIndications";
import AccordionItem from "@/components/AccordionItem";
import draggable from 'vuedraggable'
import Accordion from "@/components/Accordion";
import AccordionTest from "@/components/AccordionTest";
import BaseSelect from "@/components/baseSelect";
import BaseButton from "@/components/baseButton";

export default {
  name: 'Training',
  components: {
    BaseButton,
    BaseSelect,
    AccordionTest,
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
      {name: "Баланс в основной стойке", id: 1},
      {name: "Подъем в основную стойку из положения лежа на животе", id: 2},
      // { name: "Jean", id: 3 },
      // { name: "Gerard", id: 4 }
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
    faqs: [
      {
        question: "Who is the best Superhero?",
        // answer: "I'm not sure but we love him 3000",
        open: false
      },
      {
        question: "What is Goku's form called with White Hair?",
        // answer: "Mastered Ultra Instinct",
        open: false
      },
      {
        question: "Have you liked & subscried yet?",
        // answer: "YES",
        open: false
      }
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
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    }
  }


}
</script>

<style lang="scss">

.training-head {
  margin-bottom: 64px;
}

.accordion-group {
  width: 100%;
  min-height: 128px;

}

.v-item-group {
  margin-bottom: 25px;
}


/* accordion-big */
.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.faq .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  //background-image: url('./arrow-down-mint.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}

.faq.open .question {
  margin-bottom: 15px;
}

.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}

.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}

.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}

/**/

</style>