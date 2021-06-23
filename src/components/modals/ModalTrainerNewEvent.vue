<template lang="pug">
  v-dialog(
    v-model='show'
    max-width='468px'
    )
    .v-application.v-application--is-ltr
      .modal-close( @click.stop="show=false")
      .modal-header
        .modal-title Новое событие
      v-form(@submit.prevent="submitForm" ref="createEventform")
        .modal-body
          base-input(
            label="Название/Тема"
            classAttr="input-default input-big w-100 mb-6"
            v-model="title"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Событие"
            :items="typePreparationList"
            :value="typeOfPreparation"
            v-model="typeOfPreparation"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Позиция"
            :items="positionList"
            v-model="positionType"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Выбрать спортсмена"
            :items="sportsmanList"
            v-model="sportsman"
            :rules="rules.required"
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
            @change="clearPlayground"
            :rules="rules.required"
          )
          base-select(
            classAttr='select-default select-bg-white mb-6'
            label="Площадка"
            :items="playgroundList"
            v-model="playground"
            :rules="rules.required"
          )
          v-row.mb-1
            v-col(md="5")
              base-select(
                classAttr='select-default select-bg-white'
                label="Время с"
                :items="timeStartList"
                v-model="timeStart"
                @change="calcPeriod"
                :rules="rules.required"
              )
            v-col(md="5")
              base-select(
                classAttr='select-default select-bg-white'
                label="Время по"
                :items="timeEndList"
                v-model="timeEnd"
                @change="calcPeriod"
                :rules="rules.required"
              )
          .d-flex.align-center.mb-6(v-if="timePeriodLabel.length")
            svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V8.25C7.25 8.66421 7.58579 9 8 9C8.41421 9 8.75 8.66421 8.75 8.25V4.75ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z' fill='#808080')
            .text-gray.text-small.ml-2 {{ timePeriodLabel }}
          v-row
            v-col(md="7")
              base-select(
                classAttr='select-default select-bg-white'
                label="Напомнить"
                :items="reminderList"
                 v-model="reminder"
                :rules="rules.required"
              )
        .modal-footer
          base-button(label='Сохранить' type="submit" classAttr='button-default button-blue button-big w-100')


</template>

<script>
import SportsmanSelect from "@/components/elements/SportsmanSelect";
import SelectUser from "@/components/elements/UserSelect";
import DataPicker from "@/components/elements/DataPicker";
import { mapState } from 'vuex';
import axios from "axios";
import { API_URL_GRAF } from "@/config/api";
import moment from 'moment'

export default {
  name: "ModalTrainerNewEvent",
  components: {DataPicker, SelectUser, SportsmanSelect},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    inDate: {
      type: String,
      default: null
    },
    inTimeStart: {
      type: String,
      default: ''
    },
    inTimeEnd: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: '',
      typeOfPreparation: '',
      positionType: '',
      sportsman: '',
      dateStart: new Date(),
      location: '',
      playground: '',
      timeStart: '',
      timeEnd: '',
      reminder: '',
      typePreparationList: [],
      positionList: [],
      reminderList: ['Нет', 'За 10 минут', 'За 30 минут', 'За 1 час', 'За 2 часа', 'За 3 часа', 'За 1 день'],
      timeStartList: ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
      timeEndList: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'],

      locations: [],

      timePeriodLabel: '',
      rules: {
        required: [value => !!value || "Поле обязательно"]
      }
    }
  },

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
    },
    sportsmanList: function () {
        let list = [];
        if(this.profile.sportsmans) {
          this.profile.sportsmans.map(item => {
            list.push({text: item.user.firstName + ' ' + item.user.lastName, value: item.user.id});
          });
        }

        return list;
    },

    locationList: function () {
      let list = [];
      if(this.locations) {
        this.locations.map(item => {
          list.push({text: item.name, value: item.id});
        });
      }

      return list;
    },

    playgroundList: function () {
      let locs =  this.locations.filter(item => {
        return (item.id == this.location.value)
      });
      let loc = locs[0];
      let list = [];
      if(loc) {
        loc.playgrounds.map(item => {
          list.push({text: item.name, value: item.id});
        });
      }
      return list;
    },
    ...mapState('auth', ['profile']),
    ...mapState('events', ['event'])
  },
  methods: {
    calcPeriod() {
      this.timePeriodLabel = '';
      if(this.timeStart.length && this.timeEnd.length) {
          let start = moment().hours(this.timeStart.slice(0, 2));
          let end = moment().hours(this.timeEnd.slice(0, 2));
          let diff = end.diff(start, 'hours');
          if(diff > 0)  this.timePeriodLabel = 'Время тренировки '+ diff +' часа';
      }

    },
    createList(list, name) {
      let listNormal = [];
      if(list) {
        list.map(item => {
          listNormal.push({text: item[name], value: item.id});
        });
      }

      return listNormal;
    },
    clearPlayground() {
      this.playground = null;
    },
    submitForm() {

      if(this.$refs.createEventform.validate()) {
        let timestart = moment(this.dateStart).set('hour', parseInt(this.timeStart.slice(0, 2))).set('minute', 0).set('second', 0).toDate();
        let timeend = moment(this.dateStart).set('hour', parseInt(this.timeEnd.slice(0, 2))).set('minute', 0).set('second', 0).toDate();
        let requestData = {
          "title": this.title,
          "description": "-",
          "dateFrom": moment(timestart).utc(),
          "dateTo": moment(timeend).utc(),
          "purposeLesson": "-",
          "typeOfPreparation": this.typeOfPreparation.value,
          "location": this.location.value,
          "playground": this.playground.value,
          "reminder": this.reminder.value,
          "typeLesson": 1,
          "positionType": this.positionType.value,
          "group": 1,
          "coach": this.profile.id,
          "attenders": [
            this.sportsman.value
          ]
        };

        this.$store.dispatch('events/createEvent', requestData).then(() => {
          // Переходим на страницу события
          //this.$router.push({name: 'Plan', params: {id: this.event.id}});

          window.location.reload();
        });
      }

    }
  },
  mounted() {

    if(this.inTimeStart.length) {
      this.timeStart = [this.inTimeStart];
    }

    if(this.inTimeEnd.length) {
      this.timeEnd = [this.inTimeEnd];
    }

    if(this.inDate) {
      this.dateStart = new Date(moment(this.inDate, "DD-MM-YYYY").format('YYYY-MM-DD'));
    }

    let self = this;

    axios.get(API_URL_GRAF + '/events/utils/', {headers: {'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '' , 'Content-Type': 'application/json; charset=utf-8'}})
      .then(function ( response) {
        self.locations = response.data.locations;
        self.typePreparationList = self.createList(response.data.eventTypes, 'title');
        self.positionList =  self.createList(response.data.positionTypes, 'title');

      })
      .catch(function (error) {
        console.log(error);
      });

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