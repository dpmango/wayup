<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(
        md='12'
      )
        .link-profile__block
          router-link.link-profile(to="/information") Общая информация
        h1.title-big.mb-5 Мой профиль
        //SidebarNewExercise(
        //  @sidebarWidgetsClose="sidebarWidgetsClose"
        //  :class="isShowSidebarWidgets ? 'm-show' : 'm-hide'"
        //)
        v-row
          v-col(
            md='2'
          )
            TrainerSidebar

          v-col(
            md='10'
          )
            base-button(label='Скачать резюме'  classAttr='button-default button-blue button-big mb-6')
            .widget
              .widget-header
                .widget-header__top
                  .widget-header__title Спортсмены, с которыми сейчас работаю
              .widget-content.pb-16
                .text-small.mt-5.mb-10 Расскажите о своем опыте
                base-button(label='Заполнить'  classAttr='button-default button-blue button-big mb-16' @click="$router.push({ name: 'Profile'})")
            WidgetTrainerSportsmanWork(:items="profile.sportsmans")
        ModalTrainerSportsmanWork

</template>

<script>
import TrainerSidebar from "@/components/TrainerSidebar";
import ModalTrainerSportsmanWork from "@/components/modals/ModalTrainerSportsmanWork";
import WidgetTrainerSportsmanWork from "@/components/widgets/WidgetTrainerSportsmanWork";
import ScheduleHeader from "@/components/ScheduleHeader";
import HeaderTrainerAccount from "@/components/elements/HeaderTrainerAccount";
import {mapActions, mapState} from 'vuex';

export default {
  name: "ProfileComplete",
  data: () => ({
    isShowSidebarWidgets: false,
  }),
  components: {
    HeaderTrainerAccount,
    ScheduleHeader,
    WidgetTrainerSportsmanWork,
    ModalTrainerSportsmanWork,
    TrainerSidebar
  },
  methods: {
    sidebarWidgetsClose: function () {
      this.isShowSidebarWidgets = false;
    },
    sidebarWidgetsOpen: function () {
      this.isShowSidebarWidgets = true;

    },

    ...mapActions('auth', ['loadProfile']),

  },
  computed: {
    ...mapState('auth', ['profile']),
  },
  created() {
    this.loadProfile();
  }
}
</script>

<style scoped lang="scss">

</style>