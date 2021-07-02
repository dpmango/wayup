<template lang="pug">
  div
    router-view(:profile="profile")
</template>

<script>
import ScheduleHeader from "@/components/ScheduleHeader";
import {mapActions, mapState} from 'vuex';

export default {
  name: "AccountTrainer",
  components: {ScheduleHeader},
  methods: {
    ...mapActions('auth', ['loadProfile']),
  },
  computed: {
    ...mapState('auth', ['profile']),
  },
  async created() {
    await this.loadProfile();
  }
}
</script>

<style scoped>

</style>