<template lang="pug">
  div
    SidebarNewExercise(
      @sidebarWidgetsClose="sidebarWidgetsClose"
      :class="isShowSidebarWidgets ? 'm-show' : 'm-hide'"
    )
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
            base-button(label='Заполнить'  classAttr='button-default button-blue button-big mb-16')

        WidgetTrainerSportsmanWork
    ModalTrainerSportsmanWork
    ModalTrainerEstimateSkills
    ModalTrainerNewEvent


</template>

<script>
import TrainerSidebar from "@/components/TrainerSidebar";
import ModalTrainerSportsmanWork from "@/components/modals/ModalTrainerSportsmanWork";
import WidgetTrainerSportsmanWork from "@/components/widgets/WidgetTrainerSportsmanWork";
import SidebarNewExercise from "@/components/SidebarNewExercise";
import ModalTrainerEstimateSkills from "@/components/modals/ModalTrainerEstimateSkills";
import ModalTrainerNewEvent from "@/components/modals/ModalTrainerNewEvent";

export default {
  name: "ProfileComplete",
  data: () => ({
    isShowSidebarWidgets: true,
  }),
  components: {
    ModalTrainerNewEvent,
    ModalTrainerEstimateSkills,
    SidebarNewExercise,
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

  },
}
</script>

<style scoped lang="scss">

</style>