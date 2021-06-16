<template lang="pug">
  ScheduleHeader.mb-0(title='Личный кабинет тренера')
    template(v-slot:header-block)
      //LevelBlock.ml-10

    template(v-slot:header-right)
      HeaderRightTrainerAccount


</template>

<script>
import ScheduleHeader from "@/components/ScheduleHeader";
import MusicPlayer from "@/components/elements/MusicPlayer";
import HeaderRightTrainerAccount from "@/components/elements/HeaderRightTrainerAccount";

export default {
  name: "HeaderTrainerAccount",
  components: {HeaderRightTrainerAccount, MusicPlayer, ScheduleHeader}
}
</script>

<style scoped>

</style>