<template lang="pug">
  v-dialog(
    v-model='show'
    max-width='468px'
    )
    .v-application.v-application--is-ltr
      .modal-close( @click.stop="show=false")
      .modal-header
        .modal-title Новое событие
      v-form(@submit.prevent="submitForm" ref="form")
        .modal-body
          base-input(
            label="Название/Тема"
            classAttr="input-default input-big w-100 mb-6"
            v-model="title"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Событие"
            :items="typePreparationList"
            :value="typeOfPreparation"
            v-model="typeOfPreparation"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Позиция"
            :items="positionList"
            v-model="positionType"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Выбрать спортсмена"
            :items="selectItems"
          )
          v-row.mb-6
            v-col(md="5")
              DataPicker(
                placeholder="Начало"
                v-model="dateStart"
              )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Место проведения"
            :items="locationList"
            v-model="location"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Площадка"
            :items="selectItems"
          )
          v-row.mb-1
            v-col(md="5")
              base-select(
                classAttr='select-default select-bg-white'
                label="Время с"
                :items="timeStartList"
                v-model="timeStart"
              )
            v-col(md="5")
              base-select(
                classAttr='select-default select-bg-white'
                label="Время по"
                :items="timeEndList"
                v-model="timeEnd"
              )
          .d-flex.align-center.mb-6
            svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V8.25C7.25 8.66421 7.58579 9 8 9C8.41421 9 8.75 8.66421 8.75 8.25V4.75ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z' fill='#808080')
            .text-gray.text-small.ml-2 Время тренировки 2 часа
          v-row
            v-col(md="7")
              base-select(
                classAttr='select-default select-bg-white'
                label="Напомнить"
                :items="reminderList"
                 v-model="reminder"
              )
        .modal-footer
          base-button(label='Сохранить' type="submit" classAttr='button-default button-blue button-big w-100')


</template>

<script>
import SportsmanSelect from "@/components/elements/SportsmanSelect";
import SelectUser from "@/components/elements/UserSelect";
import DataPicker from "@/components/elements/DataPicker";
//import moment from 'moment';

export default {
  name: "ModalTrainerNewEvent",
  components: {DataPicker, SelectUser, SportsmanSelect},

  data() {
    return {
      title: '',
      typeOfPreparation: '',
      positionType: '',
      sportsman: 0,
      dateStart: null,
      location: '',
      playground: '',
      timeStart: '',
      timeEnd: '',
      reminder: '',
      typePreparationList: [{text:'Индивидуальная тренировка', value: 1}, {text:'Групповая тренировка', value: 1}],
      positionList: [{text:'Нападающий', value: 1}, {text:'Вратарь', value: 1}],
      locationList: [{text:'Ледовый Дворец', value: 1}, {text:'Арена', value: 1}, {text:'Стадион', value: 1}],
      playgroundList: [{text:'Футбольное поле', value: 1}, {text:'Лед', value: 1}, {text:'Манеж', value: 1}],
      reminderList: ['Нет', 'За 10 минут', 'За 30 минут', 'За 1 час', 'За 2 часа', 'За 3 часа', 'За 1 день'],
      timeStartList: ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
      timeEndList: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'],

      selectItems: ['Тест 1', 'Тест 2', 'Тест 3'],
      selectTimeStart: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
      selectTimeEnd: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
      selectNotif: ['Нет', 'За 10 минут', 'За 30 минут', 'За 1 час', 'За 2 час', 'За 3 час', 'За 1 день'],
    }
  },
  props: ['visible'],
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  methods: {
    submitForm() {

      let requestData = {
        "title": this.title,
        "description": "-",
        "dateFrom": this.dateStart + 'T' + this.timeStart + ':00.144Z',
        "dateTo": this.dateStart + 'T' + this.timeEnd + ':00.144Z',
        "purposeLesson": "-",
        "typeOfPreparation": this.typeOfPreparation.value,
        "location": this.location.value,
        "playground": this.playground.value,
        "reminder": this.reminder.value,
        "typeLesson": 1,
        "positionType": this.positionType.value,
        "group": 1,
        "coach": 0,
        "attenders": [
          0
        ]
      };
      console.log(requestData);
    }
  }
}
</script>

<style scoped lang="scss">

.modal-header {
  padding: 27px 100px 13px 24px;
  //box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}

.modal-body {
  padding: 24px 24px 40px 24px;
  //display: flex;
  //align-items: center;
  //box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

}

.modal-footer {
  padding: 16px 24px;
}


</style>