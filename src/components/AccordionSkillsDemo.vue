<template lang="pug">
  v-expansion-panels.acc-exercises__panels(v-model="panel" multiple)
    v-expansion-panel.acc-exercises__panel
      v-expansion-panel-header.acc-exercises__header.flex-column.align-start
        .block-flex.w-100
          .block-flex__left.d-flex.align-center
            .icon-16.mr-3 ⛔
            .acc-exercises__title.mr-4 Ошибки
              span.text-small.text-gray.ml-2 1
          .block-flex__right.ml-auto.mr-10
            .link.text-blue открыть ошибки
        .text-small.ml-7.mt-3 При оценке от 1 до 6 необходимо указать ошибки, которые допускает спортсмен

      v-expansion-panel-content.acc-exercises__content
        .mistake__block.mb-3(v-for="homemistake in homemistakes")
          .mistake__block-left
          .mistake__block-right
            .mistake__row.mb-4
              base-select(
                classAttr='select-default select-bg-white'
                label="Выберите"
                :items="mistakes"
                v-model="homemistake.mistakes"
              )
              div.ml-10.mistake-delete(@click="deleteMistake(homemistake)")
                svg( width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path( d="M3.33325 4.00065V2.66732C3.33325 2.3137 3.47373 1.97456 3.72378 1.72451C3.97383 1.47446 4.31296 1.33398 4.66659 1.33398H7.33325C7.68687 1.33398 8.02601 1.47446 8.27606 1.72451C8.52611 1.97456 8.66659 2.3137 8.66659 2.66732V4.00065M10.6666 4.00065V13.334C10.6666 13.6876 10.5261 14.0267 10.2761 14.2768C10.026 14.5268 9.68687 14.6673 9.33325 14.6673H2.66659C2.31296 14.6673 1.97382 14.5268 1.72378 14.2768C1.47373 14.0267 1.33325 13.6876 1.33325 13.334V4.00065H10.6666Z" stroke="#326BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round")


            .mistake__title Факторы
            .mistake__row.mb-3
              base-select(
                classAttr='select-default select-bg-white'
                label="Выберите"
                :items="factors"
                v-model="homemistake.factors"
                :multiple="true"
              )

        .d-flex.align-center.mt-4
          base-button(
            classAttr='button-default button-gray button-small'
            label="Добавить ошибку"
            @click="addMistake"
          )

    v-expansion-panel.acc-exercises__panel
      v-expansion-panel-header.acc-exercises__header.flex-column.align-start
        .block-flex.w-100
          .block-flex__left.d-flex.align-center
            .icon-16.mr-3 📚
            .acc-exercises__title.mr-4 Домашнее задание
              span.text-small.text-gray.ml-2 1
          .block-flex__right.ml-auto.mr-10
            .link.text-blue открыть задания
        .text-small.ml-7.mt-3.mb-5 Задайте домашнее заданее спортмену, чтобы подтянуть результаты
        //info-block.info-block_blue.w-100(
          text="Данный набор предложила система. Вы можете его изменить"
        //)
          slot
            template
              .target-icon
                div.icon-16.mt-1 💡
      v-expansion-panel-content.acc-exercises__content
        .mistake__block
          .mistake__block-left
            //.mistake__num 1
          .mistake__block-right
            .mistake__row.mb-4
              base-input(
                label="Введите домашнее задание"
                classAttr="input-default input-big w-100"
                :rules="[rules.required, rules.counter]"
                maxlength="200"
                counter
                v-model="homework"

              )

              //base-input(
              //  label="Введите название ошибки"
              //  classAttr="input-default input-big w-100"
              //  :rules="[rules.required, rules.counter]"
              //  maxlength="200"
              //  counter
              //
              //)
            .mistake__title Выполнить до
            .mistake__row.mb-5
              v-row
                v-col(md="4")
                  DataPicker(
                    v-model="dateStart"
                  )
            //a(href="#").add-link
            //  svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            //    path(d='M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            //  .add-link__text Добавить комментарий
        //.d-flex.align-center.mt-4
        //  base-button(
        //    classAttr='button-default button-gray button-small'
        //    label="Добавить ошибку"
        //  )
        //    template(#icon-left)
        //      svg.icon-12.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
        //        path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')
        //
        //  base-button(
        //    classAttr='button-default button-gray button-small ml-3'
        //    label="Создать свою"
        //  )



</template>

<script>

import DataPicker from "@/components/elements/DataPicker";
import InfoBlock from "@/components/elements/InfoBlock";
export default {
  name: "AccordionSkillsDemo",
  components: {InfoBlock, DataPicker},
  props: ['mistakelist', 'mistakeFactorList'],
  data: () => ({
    panel: [0],
    disabled: false,
    readonly: false,
    selectItems:['Тест 1', 'Тест 2', 'Тест 3', 'Тест 4'],
    rules: {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 200 || 'Максимальное кол-во символов 200',
    },
    homemistakes: [
      {
        mistakes: '',
        factors: ''
      }
    ],
    homework: '',
    dateStart: new Date(),

  }),
  computed: {
    mistakes: function() {
      let listNormal = [];
      if(this.mistakelist) {
        this.mistakelist.map(item => {
          listNormal.push({text: item.body, value: item.id});
        });
      }

      return listNormal;
    },
    factors: function() {
      let listNormal = [];
      if(this.mistakeFactorList) {
        this.mistakeFactorList.map(item => {
          listNormal.push({text: item.name, value: item.id});
        });
      }

      return listNormal;
    }
  },
  methods: {
    addMistake() {
      this.homemistakes.push( {
        mistakes: '',
        factors: ''
      });
    },
    deleteMistake(item) {
      this.homemistakes.splice(this.homemistakes.indexOf(item), 1);
    }
  }

}




</script>

<style scoped lang="scss">

  .mistake-delete {
    cursor: pointer;
  }
.acc-exercises__header {
  min-height: 56px;

}

.acc-exercises__panel{
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  &:after{
    border-top: none;
  }
}

.acc-exercises__panels.acc-exercises__panels_inner {
  border-radius: 0px 0px 12px 12px;

}

.acc-exercises__panels {
  ::v-deep {
    .v-expansion-panel-content__wrap {
      padding: 0;
      box-shadow: none;

    }

    .v-expansion-panel:before {
      box-shadow: none;
    }

    .v-expansion-panel--active {
      margin-top: 0;

      .acc-exercises__header {
        box-shadow: none;
      }

      .v-expansion-panel-content__wrap {
        box-shadow: none;
      }
    }

    .v-expansion-panel.acc-exercises__panel {
      border-radius: 12px !important;
      margin-bottom: 0px;
      margin-top: 16px;
    }

    .v-expansion-panel.acc-exercises__panel_inner {
      border-radius: 0px !important;
      margin-bottom: 0px;
      margin-top: 0;
      background: #F8F9FC;

    }

  }

  .acc-exercises__panels_inner {
    ::v-deep {
      .v-expansion-panel_inner:before {
        border-radius: 0px 0px 12px 12px;

      }

      .acc-exercises__header_inner {
        border-top: 1px solid rgba(0, 0, 0, 0.1);

      }
    }
  }
  .acc-exercises__content{
    padding: 0px 24px 16px 24px;
  }
  .acc-exercises__content_inner {
    padding: 0 24px 24px 24px;
  }

  .acc-exercises__title {
    font-size: 16px;
    font-family: $FiraSansMedium;
  }

  .acc-exercises__num {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    font-family: $FiraSansMedium;

  }

  .acc-exercises__item {
    padding: 16px 30px 20px 24px;
    display: flex;
    align-items: center;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);

    &:last-child {
      box-shadow: none;
    }
  }

  .acc-exercises__item-num {
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @include width-flex(20px)
    height: 20px;
    font-size: 12px;
    margin-right: 12px;
  }

  .acc-exercises__item-text {
    font-size: 16px;
    font-family: $FiraSansMedium;
  }

  .color-red {
    color: #FFFFFF;
    background: #EC4865;
    @include width-flex(22px)
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-ay {
    color: rgba(0, 0, 0, 0.4);
  }

  .color-een {
    color: #3DC50D;
  }


}

.iframe {
  width: 100%;
  height: 350px;
}

.iframe__wrap {
  border-radius: 12px;
  overflow: hidden;
}

.estimation__block-title {
  span {
    color: rgba(0, 0, 0, 0.5);

  }
}

.estimation__block-title {
  margin-bottom: 8px;
}

.estimation__right {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.mistake__block{
  background: #F1F3F9;
  border-radius: 8px;
  padding: 20px 24px 20px 12px;
  width: 100%;
}
.mistake__block-right{
  width: 100%;
}
.mistake__row{
  display: flex;
  align-items: center;
  @include width-flex(100%)
  .select-default{
    @include width-flex(93%)
  }
}
.mistake__num{
  background: rgba(0, 0, 0, 0.05);
  @include width-flex(20px)
  height: 20px;
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
}

.mistake__block{
  display: flex;
}

.mistake__title{
  font-size: 14px;
  font-family: $FiraSansMedium;
  margin-bottom: 8px;
}
.mistake__block-left{
  padding-top: 10px;
}



</style>