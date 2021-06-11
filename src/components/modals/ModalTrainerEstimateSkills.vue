<template lang="pug">
  v-dialog(v-model='dialog' max-width='900px')
    .v-application.v-application--is-ltr
      .modal-close(@click='dialog = false')
      .modal-header
        .d-flex.align-center
          v-avatar.avatar-player(
            size='28'
          )
            img(src="@/assets/images/avatar.png")
          .name.ml-2 Даниил Брызгалов
      .modal-body

      .modal-footer
        base-button(label='Сохранить'  classAttr='button-default button-blue button-big w-100')






</template>

<script>
export default {
  name: "ModalTrainerEstimateSkills",
  data() {
    return {
      dialog: true,
    }
  },
}
</script>

<style scoped lang="scss">

.modal-header{
  padding: 27px 100px 13px 24px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}

.modal-body{
  padding: 24px 100px 40px 24px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

}

.modal-footer{
  padding: 16px 24px;
}



</style>