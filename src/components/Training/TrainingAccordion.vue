<template lang="pug">
  v-expansion-panels.accordion-training
    draggable.accordion-group(
      :list='filterGroupt'
      :group={name: 'test', pull: 'clone'}
    )

      v-expansion-panel.accordion-panel(
        v-for='(element, index) in filterGroupt'
        :key='index'
      )
        ExersiceBig(
          :item="element"
          :groupName="groupt.name"
          :index="index"
          :utils="utils"
          :exevent="getExEventId(element)"
          @delete="deleteItem"
          )
</template>

<script>
  import draggable from 'vuedraggable'
  import AccordionTabs from "@/components/AccordionTabs";
  import DotsMenu from "@/components/DotsMenu";
  import AddBlock from "@/components/elements/addBlock";
  import TrainingEditBlock from "@/components/elements/TrainingEditBlock";
  import ExersiceBig from "@/components/Training/ExersiceBig";

  export default {

    props: {
      groupt: Array,
      groupName: String,
      utils: [Object, Array],
      events: Array
    },
    data: () => ({
      editExercise:false,
      filterGroupt: []
    }),
    components: {
      TrainingEditBlock,
      AddBlock,
      DotsMenu,
      AccordionTabs,
      draggable,
      ExersiceBig
    },

    name: "TrainingAccordion",

    methods: {
      editExcercise: function () {
        this.editExercise = !this.editExercise;
      },
      deleteItem: function (item) {
        console.log('delere', item);

        this.filterGroupt = this.filterGroupt.splice(this.filterGroupt.indexOf(item), 1)
        //this.phones.splice(index, 1)
      },
      getExEventId: function (elem) {
        if(elem.id) {
          let ex = this.events.filter((item) => {
            return item.exercise.id == elem.id;
          })

          if(ex.length) {
            return ex[0].id;
          }
        }

        return 0;
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
    mounted() {
      this.filterGroupt = this.groupt;
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
