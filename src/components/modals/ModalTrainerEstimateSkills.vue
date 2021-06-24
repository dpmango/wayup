<template lang="pug">
  v-dialog(v-model='showSkills' max-width='900px')
    .v-application.v-application--is-ltr
      .modal-close( @click.stop="showSkills=false")
      .modal-body
        .d-flex.align-center.mb-8
          v-avatar.avatar-player(
            size='28'
          )
            img(src="@/assets/images/avatar.png")
          .name.ml-2 {{ sportsman.firstName }} {{ sportsman.lastName }}
        .d-flex.align-center.mb-5
          .modal-title Оценка навыка
           // base-badge.ml-16(
           //   label="не завершено"
           //   background="rgba(0, 0, 0, 0.1)"
           //   textColor="#666666"
           // )

        .mainSkills(v-if="exer.exercise.mainSkills.length") Основные навыки
        TrainingRating(
          v-for="skill in exer.exercise.mainSkills"
          :key="skill.id"
          :skill="skill"
          :mistakelist="mistakelist"
          :mistakeFactorList="mistakeFactorList"
          ref="tr"
          )
        .mainSkills(v-if="exer.exercise.extraSkills.length") Дополнительные навыки
        TrainingRating(
          v-for="skill in exer.exercise.extraSkills"
          :key="skill.id"
          :skill="skill"
          :mistakelist="mistakelist"
          :mistakeFactorList="mistakeFactorList"
          ref="tr"
        )

      .modal-footer
        .d-flex.align-center.justify-end
          //base-button(
          //  classAttr='button-default button-nav-left mr-4'
          //  label="Назад"
          // )
          //  template(#icon-left)
           //   svg.arrow-buttom(width='16' height='40' viewBox='0 0 16 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            //    path(d='M16 40H13.8799C10.6851 40 7.79656 38.0992 6.53261 35.165L1.36338 23.165C0.493114 21.1447 0.493115 18.8553 1.36338 16.835L6.53261 4.835C7.79657 1.90083 10.6851 0 13.8799 0H16V40Z')
          base-button(
            classAttr='button-default button-nav-right'
            label="Сохранить"
            @click="estimate"
          )
            template(#icon-left)
              svg.arrow-buttom(width='16' height='40' viewBox='0 0 16 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M16 40H13.8799C10.6851 40 7.79656 38.0992 6.53261 35.165L1.36338 23.165C0.493114 21.1447 0.493115 18.8553 1.36338 16.835L6.53261 4.835C7.79657 1.90083 10.6851 0 13.8799 0H16V40Z')


</template>

<script>
  import AccordionEstimation from "@/components/AccordionEstimation";
  import TrainingRating from "@/components/Training/TrainingRating";
  import moment from 'moment'
  import axios from "axios";
  import {API_URL_GRAF} from "../../config/api";

  export default {
    name: "ModalTrainerEstimateSkills",
    components: {AccordionEstimation, TrainingRating},
    props: ['visible', 'sportsman', 'exer', 'plan', 'mistakelist', 'mistakeFactorList'],
    computed: {
      showSkills: {
        get() {
          return this.visible
        },
        set(value) {
          if (!value) {
            this.$emit('close')
          }
        }
      }
    },
    methods: {
      estimate() {
        // Отправить на сервер
        let estimateList = [];
        let homeWorkList = [];
        let homeMistakeList = [];
        let elems = this.$refs.tr;

        elems.map((item) => {
          //console.log('exercises_estimate', item.exercises_estimate);
          if(item.exercises_estimate !== null) {
            let estimate = {
              mark: item.exercises_estimate + 1,
              comment: "",
              sportsman: this.plan.attenders[0].id,
              skill: item.skill.id,
              exerciseEvent: this.exer.id
            };

            estimateList.push(estimate);
          }


          if(item.$refs.home) {
            item.$refs.home.homemistakes.map(ms => {
              console.log(Object.keys(ms.mistakes).length);
              //console.log(ms.mistakes.value);
              if(Object.keys(ms.mistakes).length) {

                let mistake =  {
                  reference: ms.mistakes.value,
                  skill: item.skill.id,
                  factors: Array.from(ms.factors, x => x.value),
                  sportsman:  this.plan.attenders[0].id
                };
                homeMistakeList.push(mistake)
              }

            });

            if(item.$refs.home.homework.length) {
              let task = {
                title: item.$refs.home.homework,
                dateToDo: moment(item.$refs.home.dateStart).utc().format('YYYY-MM-DD'),
                sportsman: this.plan.attenders[0].id,
                skill: item.skill.id,
              };

              homeWorkList.push(task);
            }

          }

        });


        // Отправляем оценки
        if(estimateList.length > 0) {
          axios({
          method: 'post',
          url: API_URL_GRAF + '/skills/marks/',
          data: estimateList,
          headers: {
            'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(function () {
            // Отправляем ошибки
            if(homeMistakeList.length > 0) {
              axios({
                method: 'post',
                url: API_URL_GRAF + '/homework/mistakes/',
                data: homeMistakeList,
                headers: {
                  'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
                  'Content-Type': 'application/json; charset=utf-8'
                }
              }).then(function () {
                // Отправляем ДЗ
                if(homeWorkList.length > 0) {
                  axios({
                    method: 'post',
                    url: API_URL_GRAF + '/homework/hometasks/',
                    data: homeWorkList,
                    headers: {
                      'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  }).then(function () {
                    window.location.reload();
                  });
                } else {
                  window.location.reload();
                }
              });
            } else {
              window.location.reload();
            }
        });
        }


      }
    }
  }
</script>

<style scoped lang="scss">
  .mainSkills {
    padding-bottom: 20px;
    opacity: .6;
  }

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

      .v-btn.border-red {
        &:after {
          background: rgba(236, 72, 101, 0.4);
        }
      }

      .v-btn.border-gray {
        &:after {
          background: #C4C4C4;
        }
      }

      .v-btn.border-green {
        &:after {
          background: rgba(61, 197, 13, 0.5);
        }
      }

      .v-btn.v-btn:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      .v-btn.v-btn:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      .v-btn.v-btn--active {
        background: #FFFFFF;
        color: $blue;

        &:before {
          background: #FFFFFF;

        }
      }
    }


  }

  .estimate-tooltip {
    width: 437px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(218, 224, 232, 0.6);
    border-radius: 8px;

  }


  .v-tooltip__content {
    background: none;
    padding: 0;

  }

  .estimate-tooltip-text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
  }

  .estimate-tooltip {
    padding: 20px;
    display: flex;
    align-items: center;
    position: relative;

    &:after {
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

  .estimate-tooltip-num {
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

  .selected-estimate {
    display: flex;
    align-items: center;
  }

  .selected-estimate__num {
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

  .selected-estimate__text {
    color: rgba(0, 0, 0, 0.6);
  }


</style>