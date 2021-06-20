<template lang="pug">
  .buttons-wrap.justify-space-between.mb-8
    .buttons-left
      base-button(
        label='Добавить занятие'
        classAttr='button-default button-gray button-big mr-6'
        @click="dialogEvent = true"
        )
      base-select(
        classAttr='select-default select-big select-bg-gray'
        label="Выберите группу"
        :items="groupList"
      )
    .buttons-right
      .segments-block
        v-item-group.d-flex(mandatory).mb-0
          v-item(
            v-slot='{ active, toggle }'
          )
            router-link(
              to="/schedule/month"
            )
              .segment-item
                base-segment(
                  classAttr='segment-default segment-big'
                  label="Месяц"
                  tag="div"
                  @click='toggle'
                )

          v-item(
            v-slot='{ active, toggle }'
          )
            router-link(
              to="/schedule/week"
            )
              .segment-item
                base-segment(
                  classAttr='segment-default segment-big'
                  label="Неделя"
                  tag="div"
                  @click='toggle'
                )


      //base-link(
      //  link="/test"
      //  label="Год"
      //)
      //base-link(
      //  link="/schedule/month"
      //  label="Месяц"
      //)
      //base-link(
      //  link="/schedule/week"
      //  label="Неделя"
      //)
      //base-link(
      //  link="/schedule/day"
      //  label="День"
      //)
      .today-block.ml-6
        base-button(classAttr='button-default button-gray button-big-icon mr-1' tag='a' @click="handlePrev($event)")
          template(#icon-left)
            svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M9.53033 3.46967C9.82322 3.76256 9.82322 4.23744 9.53033 4.53033L6.06066 8L9.53033 11.4697C9.82322 11.7626 9.82322 12.2374 9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303L4.46967 8.53033C4.32902 8.38968 4.25 8.19891 4.25 8C4.25 7.80109 4.32902 7.61032 4.46967 7.46967L8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967Z')
        base-button(:label='labelNav' classAttr='button-default button-gray button-big mr-1' tag='a'  @click="handleToday($event)")
        base-button(classAttr='button-default button-gray button-big-icon mr-1' tag='a' @click="handleNext($event)")
          template(#icon-left)
            svg(xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M6.46967 12.5303C6.17678 12.2374 6.17678 11.7626 6.46967 11.4697L9.93934 8L6.46967 4.53033C6.17678 4.23744 6.17678 3.76256 6.46967 3.46967C6.76256 3.17678 7.23744 3.17678 7.53033 3.46967L11.5303 7.46967C11.8232 7.76256 11.8232 8.23744 11.5303 8.53033L7.53033 12.5303C7.23744 12.8232 6.76256 12.8232 6.46967 12.5303Z')

      //.search-block
      //  base-button(classAttr='custom-button button-icon mr-1' tag='a')
      //    svg.icon-20(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
      //      path(d='M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
      //      path(d='M17.5 17.5L13.875 13.875' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
      //  base-button(classAttr='custom-button button-icon' tag='a')
      //    svg.icon-20(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
      //      path(d='M2 6H18' stroke='black' stroke-width='1.5' stroke-linecap='round')
      //      path(d='M2 14H18' stroke='black' stroke-width='1.5' stroke-linecap='round')
      //      circle(cx='6' cy='6' r='2' fill='#F1F3F9' stroke='black' stroke-width='1.5' stroke-linecap='round')
      //      circle(cx='14' cy='14' r='2' fill='#F1F3F9' stroke='black' stroke-width='1.5' stroke-linecap='round')

      ModalTrainerNewEvent(:visible='dialogEvent' @close="dialogEvent=false")
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import ModalTrainerNewEvent from '@/components/modals/ModalTrainerNewEvent'

export default {
  name: 'CalendarNav',
  components: { ModalTrainerNewEvent },
  props: {
    labelNav: {
      type: String,
      default: 'Сегодня',
    },
  },
  data: () => ({
    selectItems: [
      {
        id: 0,
        name: 'ССМ-5',
      },
    ],
    dialogEvent: false,
    //groupList: []
  }),
  methods: {
    handleNext: function () {
      this.$emit('next')
    },
    handlePrev: function () {
      this.$emit('prev')
    },
    handleToday: function () {
      this.$emit('today')
    },
    createEvent(date, time) {
      let start = moment(date + ' ' + time, 'DD-MM-YYYY HH:mm')

      let plan = {
        name: 'Индивидуальное занятие',
        start_time: start.toDate(),
        end_time: start.add(1, 'hours').toDate(),
        microcycle_id: 850,
        purpose_lesson: 'Улучшение игры ловушкой',
        type_lesson: 'Индивидуальное',
        type_of_preparation: 'Лед',
        qualities: [],
        location: 'Одинцово',
        created_at: '2021-03-03T14:53:10.397Z',
        updated_at: '2021-04-21T11:17:40.172Z',
        start: start.toDate(),
        end: start.add(1, 'hours').toDate(),
        className: 'bg-primary',
        url: 'https://way-up.herokuapp.com/plans/10.html',
      }

      let self = this
      axios.post('https://way-up.herokuapp.com/plans.json', plan).then(function (response) {
        console.log(response)

        if (response.data.id) {
          self.$router.push({ path: '/plan/' + response.data.id })
        }
      })
    },
    ...mapActions('schedule', ['loadGroups']),
  },
  computed: {
    curDate: function () {
      return moment().format('DD-MM-YYYY')
    },
    ...mapGetters('schedule', ['groupList']),
  },
  created() {
    this.loadGroups()
  },
}
</script>

<style lang="scss" scoped>
.buttons-left,
.buttons-right {
  display: flex;
  align-items: center;
}

.cpt-button {
  text-transform: capitalize;
}
</style>
