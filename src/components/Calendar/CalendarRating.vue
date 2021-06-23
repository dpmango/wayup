<template lang="pug">
  div
    .d-flex.align-center.justify-space-between.mb-12
      .title-wrap.mb-0
        .page-title {{ plan.title }}
      HeaderRightTrainerAccount
    v-row
      v-col(md="12")
        .widget.widget-empty
          .widget-header
            .widget-header__top
              .icon-24.mb-1.mr-2 📊
              .widget-header__title ДИНАМИКА СПОРТСМЕНА
          .widget-content
            info-block.info-block_gray.d-inline-flex(text='Динамика появится после оценки игрока')
              slot
                template
                  .target-icon.icon-36.mr-3
                    div.d-block.emoji-36 💬

    v-row
      v-col(
        md='9'
      )

        AccordionBig.ml-12(
          v-for="(eventPart, i) in plan.eventParts"
          :index="i"
          :key="i"
          :open="eventPart.exercisesEvent.length > 0"
        )
          template(v-slot:accord-header)
            .accordion-big__head
              .accordion-subtitle {{ eventPart.exercisesEvent.length}} упражнений
              .accordion-big__header
                .accordion-big__header-title {{ eventPart.name }}
                //- .labels
                  //-  base-badge(
                  //-    label='Нормально'
                  //-     color='rgba(235, 173, 16, 0.2)'
                  //-    textColor="#9E7200"
                  //-  )
          template(v-slot:accord-body)
            AccordionTrainerLesson(
              :items="eventPart.exercisesEvent"
              v-if="eventPart.exercisesEvent.length"
              :utils="utils"
              @rating="openRating"
            )
      v-col(
        md='1'
      )
      v-col(
        md='2'
      )
        .about-lesson(v-if="plan.attenders")
          .h5.title-medium О занятии
          base-badge.mt-3.mb-8(
            label="проведение оценки"
            background="#F1F3F9"
            textColor="#000000"
          )
            template(#icon-left)
              .icon-badge.icon-16 💪
          .d-flex.align-center.mb-9
            v-avatar.avatar-player.mr-4(
              size='44'
            )
              img(:src="plan.attenders[0].user.avatar")
            .d-block
              .name.mb-2.title-medium {{ plan.attenders[0].user.firstName }} {{ plan.attenders[0].user.lastName }}
              base-badge(
                :label="changeGamer(plan.attenders[0].positionName)"
                background="#F1F3F9"
                textColor="#000000"
              )
          .about-lesson__desc
            .d-block.mb-6
              .text-small.text-gray.mb-1 Тип занятия
              .text {{ organizationForm }}
            .d-block.mb-6
              .text-small.text-gray.mb-1 Дата проведения
              .d-flex.align-center.justify-space-between
                .d-block
                  .text {{ datePlan }}
                  .text {{ timePlan }}
                svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                  g(clip-path='url(#clip0)')
                    rect(width='40' height='40' rx='20' fill='#F1F3F9')
                    path(d='M24.6667 14.668H15.3333C14.597 14.668 14 15.2649 14 16.0013V25.3346C14 26.071 14.597 26.668 15.3333 26.668H24.6667C25.403 26.668 26 26.071 26 25.3346V16.0013C26 15.2649 25.403 14.668 24.6667 14.668Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    path(d='M22.6665 13.332V15.9987' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    path(d='M17.3335 13.332V15.9987' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    path(d='M14 18.668H26' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                  defs
                    clippath#clip0
                      rect(width='40' height='40' rx='20' fill='white')
            .d-block
              .text-small.text-gray.mb-1 Место проведения
              .d-flex.align-center.justify-space-between
                .d-block
                  .text {{ playground }}
                svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                  g(clip-path='url(#clip0)')
                    rect(width='40' height='40' rx='20' fill='#F1F3F9')
                    g(clip-path='url(#clip1)')
                      path(d='M26 18.668C26 23.3346 20 27.3346 20 27.3346C20 27.3346 14 23.3346 14 18.668C14 17.0767 14.6321 15.5505 15.7574 14.4253C16.8826 13.3001 18.4087 12.668 20 12.668C21.5913 12.668 23.1174 13.3001 24.2426 14.4253C25.3679 15.5505 26 17.0767 26 18.668Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                      path(d='M20 20.668C21.1046 20.668 22 19.7725 22 18.668C22 17.5634 21.1046 16.668 20 16.668C18.8954 16.668 18 17.5634 18 18.668C18 19.7725 18.8954 20.668 20 20.668Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                  defs
                    clippath#clip0
                      rect(width='40' height='40' rx='20' fill='white')
                    clippath#clip1
                      rect(width='16' height='16' fill='white' transform='translate(12 12)')

    ModalTrainerEstimateSkills(
      :visible='dialogEventSkills'
      @close="dialogEventSkills=false"
      :sportsman="plan.attenders[0].user"
      :exer="ratingEvent"
        v-if="dialogEventSkills"
      )

</template>

<script>
  import InfoBlock from "@/components/elements/InfoBlock";
  import AccordionBig from "@/components/AccordionBig";
  import AccordionTrainerLesson from "@/components/AccordionTrainerLesson";
  import HeaderTrainerAccount from "@/components/elements/HeaderTrainerAccount";
  import HeaderRightTrainerAccount from "@/components/elements/HeaderRightTrainerAccount";
  import {API_URL_GRAF} from "../../config/api";
  import {mapActions, mapState} from 'vuex';
  import axios from "axios";
  import ModalTrainerEstimateSkills from '../modals/ModalTrainerEstimateSkills';
  import moment from 'moment';
  import 'moment/locale/ru';

  export default {
    name: "CalendarRating",
    components: {
      HeaderRightTrainerAccount,
      HeaderTrainerAccount,
      AccordionTrainerLesson,
      AccordionBig,
      InfoBlock,
      ModalTrainerEstimateSkills
    },
    data: () => ({
      plan: {},
      dialogEventSkills: false,
      ratingEvent: {}
    }),
    computed: {
      datePlan: function() {
        return moment(this.plan.dateFrom).format('DD MMMM') + ', ' + moment(this.plan.dateFrom).format('dddd')
      },
      timePlan: function () {
        return moment(this.plan.dateFrom).format('HH:mm') + ' — ' + moment(this.plan.dateTo).format('HH:mm')
      },
      playground: function() {
        return this.plan.location.name + ' ' + this.plan.playground.name;
      },
      organizationForm: function() {
        if(this.utils.organizationForms) {
          return this.utils.organizationForms.filter(item => {
            return item.id == this.plan.typeLesson;
          })[0].name
        }
        return false;
      },
      ...mapState('events', ['utils']),
      ...mapState('auth', ['profile']),
    },
    methods: {
      openRating(exersice) {
        this.ratingEvent = exersice;
        this.dialogEventSkills = true;
      },
      changeGamer(gamer) {
        let g = {
          defender: 'Защитник',
          goalkeeper: 'Вратари',
          forward: 'Нападающие',
        };

        if(g[gamer]) return g[gamer];
        return '';
      },
      ...mapActions('events', ['loadUtils']),
      ...mapActions('auth', ['loadProfile']),
    },

    created() {
      if (this.$route.params.id) {
        // Событие
        let self = this;
        this.loadProfile().then(() => {
          axios.get(API_URL_GRAF + '/events/coach/' + this.$route.params.id + '/sportsman/'+ this.profile.sportsmans[0].user.id +'/', {
            headers: {
              'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
              'Content-Type': 'application/json; charset=utf-8'
            }
          }).then(function (response) {
            if (moment().isBefore(moment.utc(response.data.dateTo))) {
              self.$router.push({ name: 'Plan', params: { id: response.data.id } })
            }
            self.plan = response.data;

            self.loadUtils();
          });
        });


      }
    }
  }
</script>

<style scoped lang="scss">
  .widget-empty {
    .widget-content {
      height: 302px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }
</style>