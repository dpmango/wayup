<template lang="pug">
  div
    HeaderTrainerAccount
    v-row
      v-col(
        md='12'
      )
        .link-profile__block
          router-link.link-profile(to="/account-trainer/information") Общая информация
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
            
            // timeline widget
            WidgetTrainerTimeline(:workplaces="profile.workplaces" :educations="profile.educations")

            WidgetTrainerSportsmanWork(:items="profile.sportsmans")
        
        ModalTrainerSportsmanWork

</template>

<script>
import TrainerSidebar from "@/components/TrainerSidebar";
import ModalTrainerSportsmanWork from "@/components/modals/ModalTrainerSportsmanWork";
import WidgetTrainerSportsmanWork from "@/components/widgets/WidgetTrainerSportsmanWork";
import WidgetTrainerTimeline from "@/components/widgets/WidgetTrainerTimeline";
import ScheduleHeader from "@/components/ScheduleHeader";
import HeaderTrainerAccount from "@/components/elements/HeaderTrainerAccount";

export default {
  name: "ProfileComplete",
  data: () => ({
    isShowSidebarWidgets: false,
  }),
  props: ['profile'],
  components: {
    HeaderTrainerAccount,
    ScheduleHeader,
    WidgetTrainerSportsmanWork,
    WidgetTrainerTimeline,
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

  },

}
</script>

<style scoped lang="scss">

</style>