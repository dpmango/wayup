<template lang="pug">
  v-dialog(v-model='dialog' max-width='468px')
    .v-application.v-application--is-ltr
      .modal-close(@click='dialog = false')
      .modal-header
        .modal-title Спортсмены, с которыми сейчас работаю
      .modal-body

        SportsmanSelect(
          classAttr='select-default select-bg-white w-100'
          label="Выберите спортсмена"
          :items="selectItems"
          solo=true
        )
      .modal-footer
        base-button(label='Сохранить'  classAttr='button-default button-blue button-big w-100')






</template>

<script>
import SportsmanSelect from "@/components/elements/SportsmanSelect";
import SelectUser from "@/components/elements/UserSelect";
export default {
  name: "ModalTrainerSportsmanWork",
  components: {SelectUser, SportsmanSelect},
  data() {
    return {
      dialog: false,
      selectItems: [
        {
          name: 'Даниил Брызгалов 1',
          image: 'https://cdn.vuetifyjs.com/images/john.jpg',
          id: 1
        },
        // {
        //   name: 'Даниил Брызгалов 2',
        //   image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        //   id: 2
        // },
        // {
        //   name: 'Даниил Брызгалов 3',
        //   image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        //   id: 3
        // },
        // {
        //   name: 'Даниил Брызгалов 4',
        //   image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        //   id: 4
        // },
      ]

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