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
            base-button(
              :label="!isActiveEdit ? 'Редактировать' :'Применить'"
              classAttr='custom-button mr-6'
              @click='editTraining'

            )
            base-select(label='Поделиться' classAttr='select-base custom-select mr-6')
            .summary-button.title-blue(
              @click='toggleModalPlan'

            ) Итоговый план
            .summury-plan__modal-wrap(:class="isActiveModal ? 'm-show' : 'm-hide'")
              .summury-plan__modal(v-draggable)
                .summury-plan__head
                  .summury-plan__title Итоговый план
                  .summury-plan__head__right
                    .drag-button
                      img.drag-icon.mt-n1.mr-5(
                        src="@/assets/images/svg/drag-icon.svg"
                      )
                    .close-button(
                      @click='toggleModalPlan'
                    )
                      img.drag-icon(
                        src="@/assets/images/svg/icon-close.svg"
                      )

                v-card
                  v-card-title.headline
                    | Use Google's location service?
                  v-card-text
                    | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                  v-card-actions
                    v-spacer
                    v-btn(color='green darken-1' text='' @click='dialog = false')
                      | Disagree
                    v-btn(color='green darken-1' text='' @click='dialog = false')
                      | Agree

        v-row
          v-col(
            :cols="!isActiveEdit ? '12' : '8'"
          )
            .indications-blocks.mb-12
              v-row
                v-col(
                  :cols="!isActiveEdit ? '6' : '12'"
                )
                  v-card.card(
                    elevation="2"
                  )
                    .card-title Интенсивность занятия
                v-col(
                  :cols="!isActiveEdit ? '6' : '12'"
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
            .div(:class="!isActiveEdit ? 'd-none' : 'd-block'")
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
import ModalSummaryPlan from "@/components/ModalSummaryPlan";
import {Draggable} from 'draggable-vue-directive';


export default {
  name: 'Training',
  directives: {
    Draggable,
  },
  components: {
    ModalSummaryPlan,
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
    isActiveEdit: false,
    isActiveModal: false,
    dialog: false,
    handleId: "handle-id",
    draggableValue: {
      handle: undefined
    },
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
        children: [
          {name: "Баланс в основной стойке", id: 1},
          {name: "Подъем в основную стойку из положения лежа на животе", id: 2},

        ]
      },
      {
        open: false,
        children: [
          {name: "5 х 4  Большинство", id: 5},
          {name: "3 х 5 Меньшинство", id: 6},
          {name: "Розыгрыш", id: 7}

        ]
      },
      {
        open: false,
        children: [
          {name: "Свободная игра 1", id: 8},
          {name: "Свободная игра 2", id: 9},
          {name: "Свободная игра 3", id: 10}

        ]
      },
      {
        open: false,
        children: [
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
    },
    editTraining: function () {
      this.isActiveEdit = !this.isActiveEdit;

    },

    toggleModalPlan: function () {
      this.isActiveModal = !this.isActiveModal;
      console.log(this.isActiveModal)

    },

  }


}
</script>

<style lang="scss">

.training-head {
  margin-bottom: 64px;
}

.summury-plan__modal {
  background: #F1F3F9;
  box-shadow: 0px 4px 12px rgba(165, 169, 180, 0.2), 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(50, 107, 255, 0.06);
  border-radius: 12px;
  padding: 25px;
  width: 410px;
  position: absolute;
  //top: 50%;
  //left: 50%;
  z-index: 10000;
  //margin-left: -450px;
}

.summury-plan__head{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}

.summury-plan__head__right{
  display: flex;
  align-items: center;
}
.summary-button{
  &:hover{
    cursor: pointer;
  }
}

.m-show{
  opacity: 1;

}
.m-hide{
  opacity: 0;
  pointer-events: none;
}




/**/

</style>