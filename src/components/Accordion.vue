<template lang="pug">
  v-expansion-panels.accordion-training
    draggable.accordion-group(
      :list='groupt'
      :group={name: 'test', pull: 'clone'}
    )
      v-expansion-panel.accordion-panel(
        v-for='(element, index) in groupt'
        :key='element.id'
      )

        v-expansion-panel-header.accordion-panel__header
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
              | {{element.title}}
            .labels.mb-3
              base-badge.mr-2.mb-2(
                v-if="element.recommended_duration"
                :label="element.recommended_duration"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                v-if="element.type_of_exercise"
                :label="element.type_of_exercise"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                v-if="element.location"
                :label="element.location"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                v-if="element.load_value"
                :label="getLoadLabel(element.load_value)"
                :background='getLoadBg(element.load_value)'
                :textColor="getLoadText(element.load_value)"
              )
            .training-desc {{ element.purpose }}
        v-expansion-panel-content.accordion-panel__content
          AccordionTabs(:elem="element")

</template>

<script>
  import draggable from 'vuedraggable'
  import AccordionTabs from "@/components/AccordionTabs";
  import DotsMenu from "@/components/DotsMenu";
  import AddBlock from "@/components/elements/addBlock";

  export default {

    props: {
      groupt: Array,
      groupName: String
    },
    data: () => ({

      items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
    }),
    components: {
      AddBlock,
      DotsMenu,
      AccordionTabs,
      draggable,
    },

    name: "Accordion",

    methods: {
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
  .v-expansion-panel--active>.v-expansion-panel-header{
    //min-height: 128px;
  }


  //.accordion-panel{
  //  background: #FFFFFF;
  //  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  //  border-radius: 12px;
  //  margin-bottom: 20px;
  //}

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
