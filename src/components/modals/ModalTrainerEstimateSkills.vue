<template lang="pug">
  v-dialog(v-model='dialog' max-width='900px')
    .v-application.v-application--is-ltr
      .modal-close(@click='dialog = false')
      .modal-body
        .d-flex.align-center.mb-8
          v-avatar.avatar-player(
            size='28'
          )
            img(src="@/assets/images/avatar.png")
          .name.ml-2 Даниил Брызгалов
        .d-flex.align-center.mb-5
          .modal-title Оценка навыка
          base-badge.ml-16(
            label="не завершено"
            background="rgba(0, 0, 0, 0.1)"
            textColor="#666666"
          )
        v-btn-toggle.exercises-numbers.mb-12(v-model='exercises_numbers' mandatory='')
          v-btn.v-btn--complete
            | 1
          v-btn
            | 2
          v-btn
            | 3
          v-btn
            | 4
          v-btn
            | 5
          v-btn
            | 6
        .exercises__block
          .exercises__block-left.mr-8
            .emoji-56.mt-n3 🚩
          .exercises__block-right
            .exercises__block-title.mb-12 Высокая стойка
            v-btn-toggle.exercises-estimate.mb-8(v-model='exercises_estimate' mandatory='')
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-red(v-bind='attrs' v-on='on')
                    | 1
                .estimate-tooltip
                  .estimate-tooltip-num 1
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-red(v-bind='attrs' v-on='on')
                    | 2
                .estimate-tooltip
                  .estimate-tooltip-num 2
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил

              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-red(v-bind='attrs' v-on='on')
                    | 3
                .estimate-tooltip
                  .estimate-tooltip-num 3
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил

              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-gray(v-bind='attrs' v-on='on')
                    | 4
                .estimate-tooltip
                  .estimate-tooltip-num 4
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил

              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-gray(v-bind='attrs' v-on='on')
                    | 5
                .estimate-tooltip
                  .estimate-tooltip-num 5
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-gray(v-bind='attrs' v-on='on')
                    | 6
                .estimate-tooltip
                  .estimate-tooltip-num 6
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-green(v-bind='attrs' v-on='on')
                    | 7
                .estimate-tooltip
                  .estimate-tooltip-num 7
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-green(v-bind='attrs' v-on='on')
                    | 8
                .estimate-tooltip
                  .estimate-tooltip-num 8
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-green(v-bind='attrs' v-on='on')
                    | 9
                .estimate-tooltip
                  .estimate-tooltip-num 9
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
              v-tooltip(bottom='')
                template(v-slot:activator='{ on, attrs }')
                  v-btn.border-green(v-bind='attrs' v-on='on')
                    | 10
                .estimate-tooltip
                  .estimate-tooltip-num 10
                  .estimate-tooltip-text
                    |Выполнение академическое, даётся легко.
                    | Быстрее средних показателей, есть запас сил
            .selected-estimate
              .selected-estimate__num 3
              .selected-estimate__text — упражнение выполняется не полностью. Отсутствует мотивация



      .modal-footer
        .d-flex.align-center.justify-end
          base-button(
            classAttr='button-default button-nav-left mr-4'
            label="Назад"
          )
            template(#icon-left)
              svg.arrow-buttom(width='16' height='40' viewBox='0 0 16 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M16 40H13.8799C10.6851 40 7.79656 38.0992 6.53261 35.165L1.36338 23.165C0.493114 21.1447 0.493115 18.8553 1.36338 16.835L6.53261 4.835C7.79657 1.90083 10.6851 0 13.8799 0H16V40Z')
          base-button(
            classAttr='button-default button-nav-right'
            label="Далее"
            disabled=true
          )
            template(#icon-left)
              svg.arrow-buttom(width='16' height='40' viewBox='0 0 16 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M16 40H13.8799C10.6851 40 7.79656 38.0992 6.53261 35.165L1.36338 23.165C0.493114 21.1447 0.493115 18.8553 1.36338 16.835L6.53261 4.835C7.79657 1.90083 10.6851 0 13.8799 0H16V40Z')



</template>

<script>
export default {
  name: "ModalTrainerEstimateSkills",
  data() {
    return {
      dialog: true,
      exercises_numbers: undefined,
      exercises_estimate: undefined,
      show:true
    }
  },
}
</script>

<style scoped lang="scss">

.name {
  font-family: $FiraSansMedium;
}

.modal-header {
  padding: 27px 100px 13px 24px;

}

.modal-body {
  padding: 20px 80px 90px 50px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

}

.modal-title {
  font-size: 32px;
  font-family: $FiraSansMedium;
}

.exercises-numbers {
  ::v-deep {
    .v-btn {
      min-width: 32px !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 50% !important;
      margin-right: 8px;
      border: none;
      background: rgba(0, 0, 0, 0.05);

      span {
        color: #000000;
        font-family: $FiraSansRegular;
      }
    }

    .v-btn--active {
      background: #326BFF;

      span {
        color: #FFFFFF;
      }
    }

    .v-btn--complete {
      background: rgba(61, 197, 13, 0.2);

      span {
        color: #1C5F05;
      }
    }
  }


}

.exercises__block {
  display: flex;

}

.exercises__block-title {
  font-size: 20px;
  font-family: $FiraSansMedium;
}

.exercises-estimate {
  ::v-deep {
    .v-btn {
      position: relative;
      border: none;
      margin-right: 8px;
      @include width-flex(60px)
      height: 40px !important;
      font-family: $FiraSansMedium;
      font-size: 16px;
      background: #F1F3F9;
      border-radius: 2px;
      &:after {
        display: block;
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
      }
    }
    .v-btn.border-red{
      &:after {
        background: rgba(236, 72, 101, 0.4);
      }
    }

    .v-btn.border-gray{
      &:after {
        background: #C4C4C4;
      }
    }
    .v-btn.border-green{
      &:after {
        background: rgba(61, 197, 13, 0.5);
      }
    }
    .v-btn.v-btn:first-child{
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    .v-btn.v-btn:last-child{
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .v-btn.v-btn--active{
      background: #FFFFFF;
      color: $blue;
      &:before{
        background: #FFFFFF;

      }
    }
  }



}

.estimate-tooltip{
  width: 437px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(218, 224, 232, 0.6);
  border-radius: 8px;

}



.v-tooltip__content{
  background: none;
  padding: 0;

}

.estimate-tooltip-text{
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
}

.estimate-tooltip{
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  &:after{
    content: '';
    width: 25px;
    height: 25px;
    background: #FFFFFF;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    top: -5px;
    transform: rotate(45deg);
  }

}
.estimate-tooltip-num{
  color: #326BFF;
  font-family: $FiraSansBold;
  @include width-flex(36px)
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #326BFF;
  border-radius: 50%;
  margin-right: 12px;
}

.modal-footer {
  padding: 20px 32px;
}

.selected-estimate{
  display: flex;
  align-items: center;
}
.selected-estimate__num{
  color: #326BFF;
  font-family: $FiraSansBold;
  @include width-flex(24px)
  height: 24px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  border: 1px solid #326BFF;
  border-radius: 50%;
  margin-right: 8px;
}

.selected-estimate__text{
  color: rgba(0, 0, 0, 0.6);
}


</style>