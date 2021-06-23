<template lang="pug">
  div
    template(v-for="(item,index) in items")
      template(v-if="item.mark")
        .item-estimate
          .panel-num 1
          .block-white.block-flex.mb-6.pl-3
            .block-flex__left
              .item-estimate__title.title-medium {{item.exercise.title}}
            .block-flex__right.d-flex.align-center.ml-auto
              .estimate-num.mr-6.text-red {{ countRating(item) }}
              base-button(
                classAttr='button-default button-gray button-big'
                label="Изменить"
                @click="openRating(item)"
              )

      template(v-else)
        v-expansion-panels.accordion-training
          .accordion-group
            v-expansion-panel.accordion-panel
              v-expansion-panel-header.accordion-panel__header
                .panel-num 2
                .img-wrap.img-wrap_left.mr-4
                  img(
                    src="@/assets/images/img-traning.png"
                  )
                .accordion-panel__header-desc
                  .accordion-panel__header-desc_left
                    .accordion-panel__title
                      | {{item.exercise.title}}
                    .labels.mb-3
                      base-badge.mr-2.mb-2(
                        v-if="item.exercise.duration"
                        :label="item.exercise.duration + ' мин'"
                        background='rgba(241, 243, 249, 1)'
                        textColor="#000"
                      )
                      base-badge.mr-2.mb-2(
                        v-if="groupName"
                        :label="groupName"
                        background='rgba(241, 243, 249, 1)'
                        textColor="#000"
                      )
                      base-badge.mr-2.mb-2(
                        v-if="item.exercise.playground[0]"
                        :label="item.exercise.playground[0].name"
                        background='rgba(241, 243, 249, 1)'
                        textColor="#000"
                      )
                      base-badge.mr-2.mb-2(
                        :label="item.exercise.loadIntensity[0].name"
                        :background='getLoadBg(item.exercise.loadIntensity[0].id)'
                        :textColor="getLoadText(item.exercise.loadIntensity[0].id)"
                      )

                    .training-desc {{ item.exercise.description }}
                  .accordion-panel__header-desc_right.pr-10
                    div
                      base-button(
                        classAttr='button-default button-blue button-big ml-auto'
                        label="Оценить"
                        @click="openRating(item)"
                      )

              v-expansion-panel-content.accordion-panel__content
                AccordionTabs(:elem="item.exercise")

</template>

<script>
  import AccordionTabs from "@/components/AccordionTabs";
  import DotsMenu from "@/components/DotsMenu";
  import AddBlock from "@/components/elements/addBlock";

  export default {

    props: {
      groupName: String,
      items: Array
    },
    components: {
      AddBlock,
      DotsMenu,
      AccordionTabs
    },

    name: "AccordionTrainerLesson",

    methods: {
      openRating: function (item) {

        this.$emit('rating', item)
      },

      countRating: function(item) {
        let ms = item.exercise.mainSkills.filter(item => {
          return item.mark > 0
        });

        let es = item.exercise.extraSkills.filter(item => {
          return item.mark > 0
        })

        return ms.length + es.length;
      },
      getLoadLabel: function (load) {
        let loadLabel = {
          'minimal': 'Умеренная',
          'normal': 'Большая',
          'submax': 'Субмаксимальная',
          'maximal': 'Максимальная'
        };
        return loadLabel[load]
      },
      getLoadBg: function (load) {
        let loadLabel = {
          1: 'rgba(61, 197, 13, .2)',
          2: 'rgba(235, 173, 16, .2)',
          3: 'rgba(236, 72, 101, .2)',
          4: 'rgba(112, 42, 142, .2)',
          5: 'rgba(112, 72, 136, .2)'
        };
        return loadLabel[load]
      },
      getLoadText: function (load) {
        let loadLabel = {
          1: 'rgba(31, 120, 0, 1)',
          2: 'rgba(158, 114, 0, 1)',
          3: 'rgba(161, 34, 56, 1)',
          4: 'rgba(161, 34, 56, 1)',
          5: 'rgba(161, 34, 56, 1)'
        };
        return loadLabel[load]
      },
      noClickPanel() {
        /*this will toggle only by icon click. at the same time, will prevent toggle
        by clicking on header. */
        const curr = this.panel
        this.panel = curr === undefined ? 0 : undefined
      }
    }


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

  .accordion-training {
    .accordion-panel__header {
      min-height: rem(128px);
      padding-left: rem(12px);
      padding-right: rem(24px);

    }
  }

  .accordion-panel {
    margin-left: rem(2px);
    margin-right: rem(2px);
  }

  .accordion-panel__header {

    position: relative;
    align-items: flex-start;

    .img-wrap {
      @include width-flex(rem(100px))
      height: rem(100px);
      border-radius: rem(4px);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

  }


  .accordion-panel__title {
    font-size: rem(16px);
    font-family: $FiraSansMedium;
    margin-bottom: rem(8px);
    padding-right: 50px;
  }


  .v-expansion-panel-header {

  }

  .v-expansion-panel-content__wrap {
    padding: rem(10px) rem(24px) rem(24px) rem(36px);
  }

  .v-expansion-panel--active > .v-expansion-panel-header {
    //min-height: 128px;
  }


  //.accordion-panel{
  //  background: #FFFFFF;
  //  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  //  border-radius: 12px;
  //  margin-bottom: 20px;
  //}

  .more-icon {
    position: absolute;
    left: rem(8px);
    top: rem(12px);
  }

  .v-expansion-panel:before {
    box-shadow: none;
  }

  .v-expansion-panel:not(:first-child):after {
    border: none;
  }


  .v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
    flex: inherit;
  }

  .accordion-panel__header-desc {
    @include width-flex(85%)
    display: flex;
    justify-content: space-between;
  }


  .training-desc {
    font-size: rem(14px);
    color: rgba(0, 0, 0, .56);
  }

  .panel-num {
    position: absolute;
    left: rem(-32px);
    top: rem(14px);
    font-size: rem(12px);
    color: rgba(0, 0, 0, 0.5);
  }


  .v-expansion-panels > :last-child {
    border-radius: rem(12px);
  }


</style>
