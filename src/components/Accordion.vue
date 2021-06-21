<template lang="pug">
  v-expansion-panels.accordion-training
    draggable.accordion-group(
      :list='groupt.exercices'
      :group={name: 'test', pull: 'clone'}
    )

      v-expansion-panel.accordion-panel(
        v-for='(element, index) in groupt.exercices'
        :key='element.id'
      )

        v-expansion-panel-header.accordion-panel__header(:class="!editExercise ? 'd-flex' : 'd-none'")
          DotsMenu
            template(#dots-menu-content)
              li.dots-menu__item( )
                a(href='#' @click='editExcercise').dots-menu__link
                  svg.dots-menu-icon(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(d='M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z'  stroke-opacity='0.8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                  | Редактировать
              li.dots-menu__item
                a(href='#').dots-menu__link
                  svg.dots-menu-icon(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(d='M12.6667 4.00016V13.3335C12.6667 13.6871 12.5262 14.0263 12.2762 14.2763C12.0261 14.5264 11.687 14.6668 11.3334 14.6668H4.66671C4.31309 14.6668 3.97395 14.5264 3.7239 14.2763C3.47385 14.0263 3.33337 13.6871 3.33337 13.3335V4.00016M12.6667 4.00016H3.33337M12.6667 4.00016H14M3.33337 4.00016H2M5.33337 4.00016V2.66683C5.33337 2.31321 5.47385 1.97407 5.7239 1.72402C5.97395 1.47397 6.31309 1.3335 6.66671 1.3335H9.33337C9.687 1.3335 10.0261 1.47397 10.2762 1.72402C10.5262 1.97407 10.6667 2.31321 10.6667 2.66683V4.00016'  stroke-opacity='0.8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                  | Удалить

          .panel-num {{index + 1 }}
          img.icon-20.more-icon(
            src="@/assets/images/svg/more-icon.svg"
          )
          .img-wrap.img-wrap_left.mr-4
            img(
              src="@/assets/images/img-traning.png"
            )
          .accordion-panel__header-desc
            .accordion-panel__title
              | {{ element.title }}
            .labels.mb-3
              base-badge.mr-2.mb-2(
                v-if="element.duration"
                :label="element.duration + ' мин'"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                v-if="groupt.name"
                :label="groupt.name"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                v-if="element.playground[0]"
                :label="element.playground[0].name"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                label="Средняя"
                background='rgba(235, 173, 16, .2)'
                textColor="rgba(158, 114, 0, 1)"
              )
              //- base-badge.mr-2.mb-2(
               //-  v-if="element.load_value"
              //-   :label="getLoadLabel(element.load_value)"
               //-  :background='getLoadBg(element.load_value)'
               //-  :textColor="getLoadText(element.load_value)"
            //-  )
            .training-desc {{  element.description }}
        v-expansion-panel-content.accordion-panel__content
          AccordionTabs(:elem="element.exercise" v-if="element.exercise")
        div(:class="!editExercise ? 'd-none' : 'd-block'")
          //TrainingEditBlock



</template>

<script>
  import draggable from 'vuedraggable'
  import AccordionTabs from "@/components/AccordionTabs";
  import DotsMenu from "@/components/DotsMenu";
  import AddBlock from "@/components/elements/addBlock";
  import TrainingEditBlock from "@/components/elements/TrainingEditBlock";

  export default {

    props: {
      groupt: Object,
      groupName: String
    },
    data: () => ({
      editExercise:false,
      items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
    }),
    components: {
      TrainingEditBlock,
      AddBlock,
      DotsMenu,
      AccordionTabs,
      draggable,
    },

    name: "Accordion",

    methods: {
      editExcercise: function () {
        this.editExercise = !this.editExercise;

      },
      getLoadLabel: function (load) {
        let loadLabel = {
          'minimal' : 'Умеренная',
          'normal' : 'Большая' ,
          'submax' : 'Субмаксимальная',
          'maximal' : 'Максимальная'
        };
        return loadLabel[load]
      },
      getLoadBg: function (load) {
        let loadLabel = {
          'minimal' : 'rgba(61, 197, 13, .2)',
          'normal' : 'rgba(235, 173, 16, .2)' ,
          'submax' : 'rgba(235, 173, 16, .2)',
          'maximal' : 'rgba(236, 72, 101, .2)'
        };
        return loadLabel[load]
      },
      getLoadText: function (load) {
        let loadLabel = {
          'minimal' : 'rgba(31, 120, 0, 1)',
          'normal' : 'rgba(158, 114, 0, 1)' ,
          'submax' : 'rgba(158, 114, 0, 1)',
          'maximal' : 'rgba(161, 34, 56, 1)'
        };
        return loadLabel[load]
      }
    },
  }
</script>

<style lang="scss">
  .accordion-group {
    width: 100%;
    min-height: rem(128px);

  }

  .v-item-group {
    margin-bottom: rem(25px);
  }

  .accordion-training{
    .accordion-panel__header {
      min-height: rem(128px);
      padding-left: rem(36px);
      padding-right: rem(24px);

    }
    .accordion-panel__header-desc{
      flex-direction: column;
    }
  }

  .accordion-panel{
    margin-left: rem(2px);
    margin-right: rem(2px);
  }

  .accordion-panel__header{

    position: relative;
    align-items: flex-start;
    .img-wrap{
      @include width-flex(rem(100px))
      height: rem(100px);
      border-radius: rem(4px);
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }

  }




  .accordion-panel__title{
    font-size: rem(16px);
    font-family: $FiraSansMedium;
    margin-bottom: rem(8px);
    padding-right: 50px;
  }



  .v-expansion-panel-header{

  }
  .v-expansion-panel-content__wrap{
    padding: rem(10px) rem(24px) rem(24px) rem(36px);
  }



  .more-icon{
    position: absolute;
    left: rem(8px);
    top: rem(12px);
  }

  .v-expansion-panel:before{
    box-shadow: none;
  }
  .v-expansion-panel:not(:first-child):after{
    border: none;
  }


  .v-expansion-panel-header>:not(.v-expansion-panel-header__icon) {
    flex: inherit;
  }

  .accordion-panel__header-desc{
    @include width-flex(70%)
  }


  .training-desc{
    font-size: rem(14px);
    color: rgba(0, 0, 0, .56);
  }
  .panel-num{
    position: absolute;
    left: rem(-32px);
    top: rem(14px);
    font-size: rem(12px);
    color: rgba(0, 0, 0, 0.5);
  }


  .v-expansion-panels>:last-child{
    border-radius: rem(12px);
  }


</style>
