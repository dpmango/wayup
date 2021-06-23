<template lang="pug">
  v-dialog(
    v-model='show'
    max-width='468px'
  )
    .v-application.v-application--is-ltr
      .modal-close( @click.stop="show=false")
      .modal-header
        .modal-title Новое упражнение
      v-form(@submit.prevent="submitForm" ref="createExerciseform")
        .modal-body
          base-input(
            label="Название упражнения"
            classAttr="input-default input-big mt-2 ml-1 mr-1 mb-6"
            v-model="title"
            :rules="rules.required"
          )
          base-textarea.mt-2.ml-1.mr-1.mb-6(
            label="Задачи упражнения"
            row="30"
            v-model="purpose"
            :rules="rules.required"
          )

          base-textarea.mt-2.ml-1.mr-1.mb-6(
            label="Описание и организация упражнения"
            row="30"
            v-model="description"
            :rules="rules.required"
          )
          base-textarea.mt-2.ml-1.mr-1.mb-6(
            label="Методические указания"
            row="30"
            v-model="guidelines"
            :rules="rules.required"
          )
          v-row
            v-col(md="5")
              base-input(
                label="Дозировка"
                classAttr="input-default input-big mt-2 ml-1 mr-1"
                v-model="duration"
                :rules="rules.required"
              )
            v-col(md="7")
              base-select(
                classAttr='select-default select-bg-white mt-2 ml-1 ml-1 mr-1'
                label="Единицы"
                :items="unitsList"
                v-model="units"
              )
          v-row
            v-col(md="5")
              base-input(
                label="Участников"
                classAttr="input-default input-big mt-2 ml-1 mr-1 mb-6"
                v-model="participantsNumber"
                :rules="rules.required"
              )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Вид спорта"
            :items="sportTypeList"
            v-model="sportType"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Этап спортивной подготовки / возраст"
            :items="ageList"
            v-model="age"
            :rules="rules.required"
          )
          .radio-block.mb-4
            .radio-block__title.text-small.text-gray Период подготовки
            v-radio-group(
              v-model="preparationPeriod"
            )
              base-radio-button(
                v-for='(preparationPeriodItem,i) in preparationPeriodList'
                :key='i'
                :label="preparationPeriodItem.text"
                :value="preparationPeriodItem.value"
              )
          .radio-block.mb-4
            .radio-block__title.text-small.text-gray Этап периода подготовки
            v-radio-group(
              v-model="preparationStagePeriod"
            )
              base-radio-button(
                v-for='(preparationStagePeriodItem,i) in preparationStagePeriodList'
                :key='i'
                :label="preparationStagePeriodItem.text"
                :value="preparationStagePeriodItem.value"

              )

          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Мезоцикл"
            :items="mesocycleList"
            v-model="mesocycle"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Микроцикл"
            :items="microcycleList"
            v-model="microcycle"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Вид подготовки"
            :items="typeOfPreparationList"
            v-model="typeOfPreparation"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Этап обучения"
            :items="educationStageList"
            v-model="educationStage"
            :rules="rules.required"

          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Основные методы тренировки"
            :items="trainingMethodsList"
            v-model="trainingMethods"
            :rules="rules.required"
          )

          .radio-block.mb-4
            .radio-block__title.text-small.text-gray Форма организации
            v-radio-group(
              v-model="organizationForm"
            )
              base-radio-button(
                v-for='(organizationFormItem,i) in organizationFormList'
                :key='i'
                :label="organizationFormItem.text"
                :value="organizationFormItem.value"
              )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Основные средства физического упражнения"
            :items="mainResourceList"
            v-model="mainResource"
            :rules="[requiredMultiple]"
          )
          .radio-block.mb-2
            .radio-block__title.text-small.text-gray Часть тренировки
            v-radio-group(
              v-model="eventPart"
            )
              base-radio-button(
                v-for='(eventPartListItem,i) in eventPartList'
                :key='i'
                :label="eventPartListItem.text"
                :value="eventPartListItem.value"
              )

          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Интенсивность упражнения"
            :items="loadIntensityList"
            v-model="loadIntensity"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Амплуа"
            :items="positionTypeList"
            v-model="positionType"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Основные навыки"
            :items="mainSkillsList"
            v-model="mainSkills"
            multiple=true
            :rules="[requiredMultiple]"
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Дополнительные навыки/Проявления"
            :items="extraSkillsList"
            v-model="extraSkills"
            multiple=true
          )
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Место проведения"
            :items="playgroundList"
            v-model="playground"

          )

          //DropzoneBlock.mb-6
          base-input(
            label="Ссылка на видео"
            classAttr="input-default input-big mt-2 ml-1 mr-1 mb-6"
            v-model="videoUrl"
            :rules="rules.required"
          )
          //.d-block.mb-6
          //  .video-links.d-flex.align-center
          //    .video-link.text-middle.text-blue https://www.youtube.com/watch?v=7IrugipPZRw&ab_channel=%D0%90%D0%B7%D0%B0%D0%BC%D0%B0
          //    a(href='#').video-link_del.text-right
          //      img(
          //        src="@/assets/images/svg/icon-close.svg"
          //      )
          //
          //  SelectMenu
          base-select(
            classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
            label="Инвентарь"
            :items="equipmentList"
            v-model="equipment"
            :rules="rules.required"

          )
          base-button(
            classAttr='button-default button-gray button-small mb-6'
            label="Добавить инвентарь"
          )
            template(#icon-left)
              svg.icon-16.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

        .modal-footer
          base-button(
            classAttr='button-default button-blue button-big w-100'
            label="Создать"
            type="submit"
          )


</template>

<script>

  import DropzoneBlock from "@/components/elements/DropzoneBlock";
  import axios from "axios";
  import {API_URL_GRAF} from "@/config/api";
  import SelectMenu from "@/components/elements/SelectMenu";
  import { ExerciseResource } from '@/store/api.js';

  export default {
    name: "ModalTrainerNewExercise",
    components: {
      SelectMenu,
      DropzoneBlock,
    },

    data: () => ({

      rules: {
        required: [value => !!value || "Поле обязательно"]
      },

      title: '',
      purpose: '',
      description: '',
      guidelines: '',
      duration: '',
      units: '',
      unitsList: ['Минуты', 'Круги', 'Повторения', 'Подходы'],
      participantsNumber: '',
      sportType: '',
      sportTypeList: [],
      age: '',
      ageList: [],
      preparationPeriod: 1,
      preparationPeriodList: [],
      preparationStagePeriod: 1,
      preparationStagePeriodList: [],
      mesocycle: '',
      mesocycleList: [],
      microcycle: '',
      microcycleList: [],
      typeOfPreparation: '',
      typeOfPreparationList: [],
      educationStage: '',
      educationStageList: [],
      trainingMethods: '',
      trainingMethodsList: [],
      organizationForm: 1,
      organizationFormList: [],
      mainResource: '',
      mainResourceList: [],
      eventPart: 1,
      eventPartList: [],
      loadIntensity: '',
      loadIntensityList: [{text: 'Малая', value:1}, {text:'Средняя', value:2}, {text: 'Большая', value: 3}, {text:'Субмаксимальная', value:4}, {text:'Максимальная', value:5}],
      positionType: '',
      positionTypeList: [],
      mainSkills: null,
      mainSkillsList: [],
      extraSkills: '',
      extraSkillsList: [],
      playground: '',
      playgroundList: [],
      videoUrl: '',
      equipment: '',
      equipmentList: [],

    }),
    props: ['visible'],
    methods: {
      requiredMultiple(value) {
        if (value instanceof Array && value.length == 0) {
          return 'Поле обязательно';
        }
        return !!value || 'Поле обязательно';
      },

      submitForm() {
        if (this.$refs.createExerciseform.validate()) {
          let requestData = {
            "title": this.title,
            "purpose": this.purpose,
            "description": this.description,
            "guidelines": this.guidelines,
            "duration": this.duration,
            "participantsNumber": this.participantsNumber,
            "age": [this.age.value],
            "preparationPeriod": [this.preparationPeriod],
            "macrocycle" : [this.preparationPeriod],
            "mesocycle": [this.mesocycle.value],
            "microcycle": [this.microcycle.value],
            "educationPeriod": [this.educationStage.value],
            "trainingMethods": [this.trainingMethods.value],
            "organizationForm": [this.organizationForm],
            "mainResource": [this.mainResource.value],
            "equipment": [this.equipment.value],
            "loadIntensity": [this.loadIntensity.value],
            "videoUrl": this.videoUrl,
            "playground": [this.playground.value],
            "typeOfPreparation": [this.typeOfPreparation.value],
            "sportType": [this.sportType.value],
            "eventPart": [this.eventPart],
            "positionType": [this.positionType.value],
            "mainSkills": Array.from(this.mainSkills, x => x.value),
            "extraSkills": Array.from(this.extraSkills, x => x.value)
          };

          // Отправляем форму
          ExerciseResource.create(requestData).then(() => {
            window.location.reload();
          }).catch(err => {
            console.log(err);
            throw err.response;
          });
        }

      },
      createList(list, name) {
        let listNormal = [];
        if (list) {
          list.map(item => {
            listNormal.push({text: item[name], value: item.id});
          });
        }

        return listNormal;
      },
    },
    mounted() {
      let self = this;

      axios.get(API_URL_GRAF + '/events/utils/', {
        headers: {
          'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
        .then(function (response) {
          self.mesocycleList = self.createList(response.data.mesocycles, 'name');
          self.sportTypeList = self.createList(response.data.sportTypes, 'title');
          self.ageList = self.createList(response.data.ageGroups, 'name');
          self.microcycleList = self.createList(response.data.microcycles, 'name');
          self.educationStageList = self.createList(response.data.educationPeriods, 'name');
          self.trainingMethodsList = self.createList(response.data.trainingMethods, 'name');
          self.mainResourceList = self.createList(response.data.mainResources, 'name');
          self.positionTypeList = self.createList(response.data.positionTypes, 'title');
          self.organizationFormList = self.createList(response.data.organizationForms, 'name');
          self.equipmentList = self.createList(response.data.equipments, 'name');
          self.playgroundList = self.createList(response.data.exercisePlaygrounds, 'name');
          self.preparationPeriodList = self.createList(response.data.preparationPeriods, 'name');
          self.preparationStagePeriodList = self.createList(response.data.macrocycles, 'name');
          self.eventPartList = self.createList(response.data.eventParts, 'name');
          self.typeOfPreparationList = self.createList(response.data.exerciseCategories, 'name');

          // console.log('response utils', response)

        })
        .catch(function (error) {
          console.log(error);
        })


      axios.get(API_URL_GRAF + '/skills/', {
        headers: {
          'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
        .then(function (response) {
          self.mainSkillsList = self.createList(response.data, 'name');
          self.extraSkillsList = self.createList(response.data, 'name');
        })
        .catch(function (error) {
          console.log(error);
        })

    },
    computed: {
      show: {
        get() {
          return this.visible
        },
        set(value) {
          if (!value) {
            this.$emit('close')
          }
        }
      },
    }

  }
</script>

<style scoped lang="scss">
  .modal-header {
    padding: 27px 100px 13px 24px;
  }

  .modal-body {
    padding: 24px 24px 40px 24px;
  }

  .modal-footer {
    padding: 16px 24px;
  }
</style>