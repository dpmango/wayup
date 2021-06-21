<template lang="pug">
  .page-training( ref="bounder")
    v-row
      v-col(
        md='10'
        offset-md='1'
      )
        .training-head
          TheBreadcrumbs(:micro="microcycle" :meso="mesocycle" :macro="macrocycle")
          .title-wrap
            .page-title {{ plan.title }},
            span.span-title {{ dayWeek }},
            span.span-title {{ monthDay }},
            span.span-title {{ timePeriod }}

          TagsTraining(
            :group="group"
            :location="plan.location",
             :utils="utils"
              :plan="plan"
          )

          .buttons-wrap(data-app)
            base-button(
              :label="!isActiveEdit ? 'Редактировать' :'Применить'"
              classAttr='button-default button-gray mr-4'
              @click="editTraining"
            )

            //base-select(label='Поделиться' classAttr='select-base custom-select mr-6')
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

                .summury-plan__block
                  .summury-plan__block
                    template(v-for="item in accordionBigItems")
                      .summury-plan__block-title {{ item.name }}
                      ul.summury-plan__list
                        li.summury-plan__item(v-for="(child, index) in item.children")
                          .summury-plan__num {{ index + 1 }}
                          .summury-plan__desc {{ child.title }}
                          .labels
                            base-label(
                              :label='getMinuteLabel(child.recommended_duration)'
                              color='#F1F3F9'
                              textColor="#000000"
                            )
                            base-label(
                              :label='getLoadShortLabel(child.load_value)'
                              color='rgba(61, 197, 13, 0.2)'
                              textColor="#1F7800"
                            )

        v-row
          v-col(
            :cols="!isActiveEdit ? '12' : '8'"
          )
            .trainings__block
              v-row
                v-col(
                  md='12'
                )
                  AccordionBig(
                    v-for="(accordionBigItem, i) in plan.eventParts"
                    :classAttr="accordionBigItem"
                    :index="i"
                    :key="i"
                    :open="accordionBigItem.exercisesEvent.length"
                    @toggleOpen="toggleOpen"
                  )
                    template(v-slot:accord-header)
                      .accordion-big__head
                        .accordion-subtitle {{ getLabelPart(accordionBigItem.exercisesEvent) }}
                        .accordion-big__header
                          .accordion-big__header-title {{ accordionBigItem.name }}
                    template(v-slot:accord-body)
                      Accordion(:groupt="accordionBigItem.exercisesEvent")
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
              TrainingAside(:exercises="dataExer" :cplan="plan")


</template>


<script>
import TheBreadcrumbs from "@/components/TheBreadcrumbs";
import TagsTraining from "@/components/Training/TagsTraining";
import CardIndications from "@/components/CardIndications";
import AccordionItem from "@/components/AccordionItem";
import Accordion from "@/components/Accordion";
import AccordionBig from "@/components/AccordionBig";
import TrainingAside from "@/components/Training/TrainingAside";
import ModalSummaryPlan from "@/components/ModalSummaryPlan";
import {Draggable} from 'draggable-vue-directive';
import moment from 'moment';
import axios from "axios";
import {mapActions, mapState} from 'vuex';
import 'moment/locale/ru'
import {API_URL_GRAF} from "../../config/api";
import CalendarPlanEdit from "@/components/Calendar/CalendarPlanEdit";
import CalendarPlanCompleted from "@/components/Calendar/CalendarPlanCompleted";
import TrainingAccardion from "@/components/Training/TrainingAccardion";

export default {
  name: 'Training',
  // draggableWithBoundries: DraggableValue = {},

  directives: {
    Draggable,
  },
  components: {
    ModalSummaryPlan,
    TrainingAside,
    AccordionBig,
    Accordion,
    AccordionItem,
    CardIndications,
    TagsTraining,
    TheBreadcrumbs,
    CalendarPlanEdit,
    CalendarPlanCompleted,
    TrainingAccardion
    // draggable
  },
  data: () => ({
    isActiveEdit: true,
    isActiveModal: false,
    dialog: false,
    accordionBigItems: [],
    plan: {},
    dataExer: [],
    parts: [],
    microcycle: '',
    mesocycle: '',
    macrocycle: '',
    group: '',

    componentCalendar: ''
  }),
  computed: {
    dayWeek: function () {
      return moment(this.plan.dateFrom).format('dddd');
    },
    monthDay: function () {
      return moment(this.plan.dateFrom).format('DD MMMM');
    },
    timePeriod: function () {
      return moment(this.plan.dateFrom).format('HH:mm') + ' — ' + moment(this.plan.dateTo).format('HH:mm');
    },
    ...mapState('events', ['utils'])
  },
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

    getExBigItem(item) {
      let ex = [];
      item.map(item => {
        ex.push(item.exercise)
      });
      return ex;
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
      if (this.isActiveEdit) {
        // Созадем часть плана
        /*axios.post('https://way-up.herokuapp.com/plan_parts.json', {
            "exercise_id": 12,
            "plan_id": 17,
            "plan_part_type": "Основная часть",
            "created_at": "2021-03-26T21:32:17.417Z",
            "updated_at": "2021-03-26T21:32:17.417Z",
            "url": "https://way-up.herokuapp.com/plan_parts/27.json"
        })
        .then(function (response) {
            console.log(response);
        })*/

        // Удаляем тренировку
        /*axios.delete('https://way-up.herokuapp.com/plan_parts/31.json').then(function (response) {
            console.log(response);
        })*/

        // Редактируем тренировку
        /*axios.put('https://way-up.herokuapp.com/plan_parts/34.json', {
            "exercise_id": null,
            "plan_id": 17,
            "plan_part_type": "Заключительная часть",
            "created_at": "2021-04-29T06:11:20.896Z",
            "updated_at": "2021-04-29T06:11:20.896Z",
            "url": "https://way-up.herokuapp.com/plan_parts/34.json",
            "exercise_name": [
                "Квадрат из приставных шагов",
                "Квадрат из T-образных и приставных шагов",
            ]
        }).then(function (response) {
            console.log(response);
        })*/
      }
      this.isActiveEdit = !this.isActiveEdit;
    },

    toggleModalPlan: function () {
      this.isActiveModal = !this.isActiveModal;
    },

    getAccardionBigItem(part) {
      let parts1 = {
        name: part,
        open: true
      };
      let part1Children = [];
      if (this.parts[parts1.name]) {
        for (let i = 0; i < this.parts[parts1.name].length; i++) {
          let part = this.parts[parts1.name][i];

          for (let j = 0; j < part['exercise_name'].length; j++) {

            let ex = this.dataExer.filter(item => item.title == part['exercise_name'][j])[0];

            if (ex) {
              let pt = ex;
              pt.plan_part_id = part.id;
              part1Children.push(pt);
            }
          }


        }
      }

      parts1.children = part1Children;
      return parts1;
    },

    getLabelPart(children) {

      return children.length + ' упражнений';
    },

    getMinuteLabel(duration) {
      return duration.replace('минуты', 'мин').replace('минута', 'мин').replace('минут', 'мин')
    },

    getLoadShortLabel(load) {
      let loadLabel = {
        'minimal': 'Y',
        'normal': 'Б',
        'submax': 'С',
        'maximal': 'М'
      };
      return loadLabel[load]
    },

    ...mapActions('schedule', ['loadPlan', 'loadExer', 'loadParts']),
    ...mapActions('events', ['loadUtils', 'loadExercise']),
  },

  created() {
    if (this.$route.params.id) {
      // Событие
      var self = this;

      axios.get(API_URL_GRAF + '/events/coach/' + this.$route.params.id, {headers: {'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '' , 'Content-Type': 'application/json; charset=utf-8'}}).then(function (response) {
        self.plan = response.data;
        axios.get(API_URL_GRAF + '/groups/', {headers: {'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '' , 'Content-Type': 'application/json; charset=utf-8'}}).then(function (response) {
          self.group = response.data.filter((item) => {
            return item.id == self.plan.group
          })[0];
        });
        self.loadUtils();
      });
    }


    this.loadExercise().then(() => {
      this.dataExer = this.$store.state.events.exersiceList;
    });

    /*this.loadExer().then(() => {
      this.dataExer = this.$store.state.schedule.exer;
      this.loadParts().then(() => {
        let groupParts = {};
        let curParts = this.$store.state.schedule.plan_parts.filter(item => item.plan_id == this.$route.params.id);

        curParts.map(item => {
          if (!groupParts[item.plan_part_type]) groupParts[item.plan_part_type] = [];
          groupParts[item.plan_part_type].push(item);
        });

        this.parts = groupParts;

        this.accordionBigItems.push(this.getAccardionBigItem('Подготовительная часть'));
        this.accordionBigItems.push(this.getAccardionBigItem('Основная часть'));
        this.accordionBigItems.push(this.getAccardionBigItem('Заключительная часть'));
      })
    })*/
  },

  mounted() {

    //this.$store.dispatch('plans', this.$store.state.token)

  }


}
</script>

<style lang="scss">

.training-head {
  margin-bottom: rem(64px);
}

/* summury-plan */

.summury-plan__modal {
  background: #F1F3F9;
  box-shadow: 0px 4px 12px rgba(165, 169, 180, 0.2), 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(50, 107, 255, 0.06);
  border-radius: rem(12px);
  padding: rem(25px);
  width: rem(410px);
  position: absolute;
  //top: 50%;
  //left: 50%;
  z-index: 10000;
  //margin-left: -450px;
}

.summury-plan__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: rem(17px);
}

.summury-plan__head__right {
  display: flex;
  align-items: center;
}

.summary-button {
  &:hover {
    cursor: pointer;
  }
}

.m-show {
  opacity: 1;
}

.m-hide {
  opacity: 0;
  //transition: .3s;
  pointer-events: none;
}

.summury-plan__list {
  background: #FFFFFF;
  border-radius: rem(8px);
  padding-left: 0 !important;
  margin-bottom: rem(16px);

}

.summury-plan__item {
  display: flex;
  align-items: center;
  padding: rem(6px) rem(8px);
  border-bottom: 1px solid #F1F3F9;

  &:last-child {
    border-bottom: none;
  }

  .labels {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include width-flex(30%)
    justify-content: flex-end;

    .v-chip--label {
      @include last-mr-0
    }

  }
}

.summury-plan__num {
  @include width-flex(10%)
  font-size: rem(12px);
  padding-left: rem(5px);
  display: flex;
  color: rgba(0, 0, 0, .4);
}

.summury-plan__desc {
  @include width-flex(60%)
  font-size: rem(14px);

}

.summury-plan__block-title {
  font-size: rem(10px);
  letter-spacing: 1px;
  color: rgba(0, 0, 0, .4);
  text-transform: uppercase;
  margin-bottom: rem(6px);

}

.training-aside {
  .img-wrap_left {
    display: none;
  }

  .accordion-tabs .img-trainig_big {
    height: 114px;
  }

  .accordion-panel__header-desc {
    @include width-flex(100%)
  }

  .accordion-panel__title {
    padding-right: 40%;
  }
}


/**/

</style>