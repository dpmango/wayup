<template lang="pug">
  v-dialog(v-model='dialog' persistent='' max-width='290')
    template(v-slot:activator='{ on, attrs }')
      v-btn(color='primary' dark='' v-bind='attrs' v-on='on')
        | Open Dialog
    v-card
      v-card-title.headline
        | Use Google's location service?
      v-card-text
        | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      v-card-actions
        v-spacer
        v-btn(color='green darken-1' text='' @click='dialog = false')
          | Disagree
        v-btn(color='green darken-1' text='' @click='dialog = false')
          | Agree

</template>

<script>
export default {
name: "ModalSummaryPlan"
}
</script>

<style scoped>

</style>