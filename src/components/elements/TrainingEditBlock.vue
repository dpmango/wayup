<template lang="pug">
  v-form(@submit.prevent="submitForm" ref="createExerciseEditForm")
    .training-edit
      .training-edit__row.mb-4.align-start
        .training-edit__left
          .img-wrap.img-wrap_left
            img(
              src="@/assets/images/img-traning.png"
            )
        .training-edit__right
          base-input(
            label="Название упражнения"
            classAttr="input-default input-big w-100"
            v-model="title"
            :rules="rules.required"
          )
      .training-edit__row.mb-4
        .training-edit__left
          .text-middle Дозировка
        .training-edit__right
          .d-flex.align-strat
            base-input(
              style='width:80px;'
              label=""
              classAttr="input-default input-big mr-3"
              v-model="duration"
              :rules="rules.required"
            )
            //- base-select-primary(
            //-  style='width:119px;'
            //-  classAttr='select-default select-bg-gray'
            //-  label=""
            //-  :items="unitsList"
            //-  v-model="units"
            //-)

            v-combobox(
              style='width:119px;'
              outlined
              class='select-default select-bg-gray'
              :items="unitsList"
              label=''
              v-model="units"
            )

      .training-edit__row.mb-4
        .training-edit__left
          .text-middle Тип упражнения
        .training-edit__right
          v-row
            v-col(md="5")
              base-select(
                classAttr='select-default select-bg-gray'
                label=""
                v-model="typeOfPreparation"
                :items="typeOfPreparationList"
                :rules="rules.required"
              )
      .training-edit__row.mb-4
        .training-edit__left
          .text-middle Нагрузка
        .training-edit__right
          v-row
            v-col(md="5")
              base-select(
                classAttr='select-default select-bg-gray'
                label=""
                v-model="loadIntensity"
                :items="loadIntensityList"
                :rules="rules.required"
              )
      .training-edit__row.mb-4.align-start
        .training-edit__left
          .text-middle Описание
        .training-edit__right
          base-textarea(
            row="30"
            label=""
            v-model="description"
            :rules="rules.required"
          )
      .training-edit__row.mb-4.align-start
        .training-edit__left
          .text-middle Видео
        .training-edit__right
          base-input(
            label="Ссылка на видео"
            classAttr="input-default input-big mt-2 ml-1 mr-1 mb-6"
            v-model="videoUrl"
            :rules="rules.required"
          )
          //.video-links.d-flex.align-center
          //  .video-link.text-middle.text-blue https://www.youtube.com/watch?v=7IrugipPZRw&ab_channel=%D0%90%D0%B7%D0%B0%D0%BC%D0%B0
          //  a(href='#').video-link_del.text-right
          //    img(
          //      src="@/assets/images/svg/icon-close.svg"
          //    )
          //SelectMenu



      .training-edit__row.mb-4.align-start
        .training-edit__left
          .text-middle Методические указания
        .training-edit__right
          base-textarea(
            label=""
            :rules="rules.required"
            v-model="guidelines"
          )

      .training-edit__row.mb-4
        .training-edit__left
          .text-middle Инвентарь
        .training-edit__right
          v-row
            v-col(md="5")
              v-combobox(
                class='select-default select-bg-gray'
                label=""
                v-model="equipment"
                :items="equipmentList"
                :rules="rules.required"
                multiple
              )

      //.training-edit__row.mb-12
        .training-edit__left
        .training-edit__right
          base-button(
            classAttr='button-default button-gray button-small'
            label="Добавить инвентарь"
          )
            template(#icon-left)
              svg.icon-12.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

      .training-edit__row
        .training-edit__left
        .training-edit__right
          .d-flex
            v-menu(
              v-model='menu'
              :close-on-content-click='false'
              :nudge-width='385'
              top=true
              open-on-click=true
              nudge-top="70"
              content-class="menu-tooltip-estimate"
            )
              template(v-slot:activator='{ on, attrs }')
                .d-block( v-bind='attrs'
                  v-on='on')
                  base-button(
                    classAttr='button-default button-blue button-big mr-4'
                    label="Сохранить"
                    type="submit"
                  )
              //.block-white.popup-block.v-application
                .close-button(@click='menu = false')
                  svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(d='M3 13L13 3M13 13L3 3' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                .title-medium.mb-2 Перезаписать или создать новое?
                .text-middle.mb-5 Вы можете заменить упражнение в занятии или создать новое для справочника, чтобы использовать его в дальнейшем.
                base-button(
                  classAttr='button-default button-gray button-big mr-4'
                  label="Перезаписать"
                )
                base-button(
                  classAttr='button-default button-gray button-big'
                  label="Создать новое"
                )
            base-button(
              classAttr='button-default button-gray button-big'
              label="Отменить изменения"
              @click="$emit('close')"
            )

      .training-edit__row
        .training-edit__left
        .training-edit__right
      .training-edit__row
        .training-edit__left
        .training-edit__right
      .training-edit__row
        .training-edit__left
        .training-edit__right


</template>

<script>
import SelectMenu from "@/components/elements/SelectMenu";
import { ExerciseResource } from '@/store/api.js';

export default {
  name: "TrainingEditBlock",
  components: {SelectMenu},
  props: {
    utils: [Object, Array],
    ex: [Object, Array],
  },
  data: () => ({
    rules: {
      required: [value => !!value || "Поле обязательно"]
    },
    selectItems: ['Тест 1', 'Тест 2', 'Тест 3'],

    fav: true,
    menu: false,
    message: false,
    hints: true,

    title: '',
    description: '',
    guidelines: '',
    duration: '',
    units: ['Минуты'],
    unitsList: ['Минуты', 'Часы'],
    typeOfPreparation: {},
    typeOfPreparationList: [],
    loadIntensity: '',
    loadIntensityList: [
      {text: 'Малая', value: 1},
      {text: 'Средняя', value: 2},
      {text: 'Большая', value: 3},
      {text: 'Субмаксимальная', value: 4},
      {text: 'Максимальная', value: 5},
    ],
    videoUrl: '',
    equipment: [],
    equipmentList: [],

  }),
  methods: {
    submitForm() {
      if (this.$refs.createExerciseEditForm.validate()) {
        let requestData = {
          title: this.title,
          duration: this.duration,
          typeOfPreparation: [this.typeOfPreparation.value],
          loadIntensity: [this.loadIntensity.value],
          description: this.description,
          videoUrl: this.videoUrl,
          guidelines: this.guidelines,
          equipment: Array.from(this.equipment, x => x.value),
        };

        // Отправляем форму
        ExerciseResource.update(this.ex.id, requestData).then(() => {
          window.location.reload();

        }).catch(err => {
          console.log(err);
          throw err.response;
        });
      }
      // this.$store.dispatch('events/createEvent', requestData);
    },
    createList(list, name) {
      let listNormal = [];
      if (list) {
        list.map(item => {
          listNormal.push({text: item[name], value: item.id});
        });
      }

      return listNormal;
    },
  },

  mounted() {

    this.equipmentList = this.createList(this.utils.equipments, 'name');
    this.typeOfPreparationList = this.createList(this.utils.exerciseCategories, 'name');

    this.title = this.ex.title;
    this.duration = this.ex.duration;
    this.typeOfPreparation = {text: this.ex.typeOfPreparation[0].name, value: this.ex.typeOfPreparation[0].id};

    let textLoad = this.loadIntensityList.filter(item => {
      return item.id == this.ex.loadIntensity[0].value;
    });
    this.loadIntensity = {value: this.ex.loadIntensity[0].id, text: textLoad[0].text}
    this.description = this.ex.description;
    this.videoUrl = this.ex.videoUrl;
    this.guidelines = this.ex.guidelines;

    this.ex.equipment.map(item => {
      this.equipment.push({value: item.id, text: item.name})
    })


  },

}
</script>

<style scoped lang="scss">


.training-edit {
  padding: 16px 24px 24px 36px;
}

.training-edit__row {
  display: flex;
  align-items: center;

}

.img-wrap_left {
  justify-content: flex-start;

}

.training-edit__left {
  @include width-flex(15%)
}

.training-edit__right {
  @include width-flex(85%)
  padding: 0 rem(20px);

}


.block-white.popup-block {
  padding: 30px 60px 20px 20px;
  height: 172px;

}

//@import "./scss/combox.scss";
@import "src/scss/combox";
</style>