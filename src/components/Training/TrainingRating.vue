<template lang="pug">
  div
    .exercises__block
      .exercises__block-left.mr-8
        .emoji-56.mt-n3 🚩
      .exercises__block-right
        .exercises__block-title.mb-12 {{ skill.name }}
        v-btn-toggle.exercises-estimate.mb-8(v-model='exercises_estimate' )
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-red(v-bind='attrs' v-on='on' )
                | 1
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-red(v-bind='attrs' v-on='on')
                | 2
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-red(v-bind='attrs' v-on='on')
                | 3

          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-gray(v-bind='attrs' v-on='on')
                | 4

          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-gray(v-bind='attrs' v-on='on')
                | 5
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-gray(v-bind='attrs' v-on='on')
                | 6
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-green(v-bind='attrs' v-on='on')
                | 7
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-green(v-bind='attrs' v-on='on')
                | 8
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-green(v-bind='attrs' v-on='on')
                | 9
          v-tooltip(bottom='')
            template(v-slot:activator='{ on, attrs }')
              v-btn.border-green(v-bind='attrs' v-on='on')
                | 10
    div(v-if="isShowAccordions")
      AccordionSkillsDemo
</template>

<script>
  import AccordionSkillsDemo from "@/components/AccordionSkillsDemo";
  export default {
    name: "TrainingRating",
    components: {AccordionSkillsDemo},
    props: ['skill'],

    data: () => ({
      isShowAccordions:false,
      exercises_estimate: 0
    }),
    mounted() {
      if(this.skill.mark) {
        this.exercises_estimate = parseInt((this.skill.mark / 10) - 1);
      }

    },
    methods:{
      // showAccordion(){
      //   console.log('exercises_estimate', this.exercises_estimate )
      //   if(this.exercises_estimate < 6) {
      //     this.isShowAccordions = true;
      //     console.log('true')
      //
      //     // console.log('test', this.exercises_estimate )
      //   }else{
      //     this.isShowAccordions = false;
      //     console.log('false')
      //   }
      // }
    },
    watch: {
      exercises_estimate: function (val) {
        console.log('watch', val);
        if(val < 6) {
          this.isShowAccordions = true;
          console.log('true')
        }else{
          this.isShowAccordions = false;
          console.log('false')
        }
      },

    },

  }
</script>

<style scoped lang="scss">
  .exercises__block {
    //padding-bottom: 50px;
  }
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