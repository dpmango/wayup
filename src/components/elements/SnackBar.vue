<template lang="pug">
  v-snackbar(v-model='snackbar' :timeout='timeout')
    | {{ text }}
    template(v-slot:action='{ attrs }')
    v-btn(color='blue' text='' v-bind='attrs' @click='snackbar = false')
    | Close


</template>

<script>
export default {
  name: "SnackBar",
  data: () => ({
    snackbar: true,

    text: 'My timeout is set to 2000.',
    timeout: 2000,
  }),
}
</script>

<style scoped>

</style>