<template lang="pug">
  v-expansion-panels
    draggable.accordion-group(
      :list='list1'
      group='power'
    )
      v-expansion-panel.accordion-panel(
        v-for='(element, index) in list1'
        :key='element.name'
      )
        dots-menu
        v-expansion-panel-header.accordion-panel__header
          .panel-num {{index + 1 }}
          img.icon-20.more-icon(
            src="@/assets/images/svg/more-icon.svg"
          )
          .img-wrap.mr-4
            img(
              src="@/assets/images/img-traning.png"
            )
          .accordion-panel__header-desc
            .accordion-panel__title
              | {{element.name}}
            .labels.mb-2
              base-label(
                label='10 мин'
                color='rgba(241, 243, 249, 1)'
                textColor="#000"
                )
              base-label(
                label='техника'
                color='rgba(241, 243, 249, 1)'
                textColor="#000"
                )
              base-label(
                label='умеренная'
                color='rgba(61, 197, 13, 0.2)'
                textColor="#1F7800"
                )
            .training-desc
              |Лежа на льду на животе; руки подняты, на клюшке; локти на льду
              |Лежа на льду на животе; руки подняты, на клюшке; локти на льду
        v-expansion-panel-content.accordion-panel__content
          AccordionTabs
    .add-training
      .add-training__block
        svg.plus-icon(width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M12 7V17M17 12L7 12' stroke='#798CBD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
      .add-training__block-text Добавить упражнение









</template>

<script>
import draggable from 'vuedraggable'
import BaseLabel from "@/components/baseLabel";
import AccordionTabs from "@/components/AccordionTabs";
import DotsMenu from "@/components/dotsMenu";

export default {

  props: {
    // list: {
    //   type: [String],
    //   default: ''
    // },
    // group: {
    //   type: [String],
    //   default: ''
    // },
    // name: {
    //   type: [String],
    //   default: ''
    // }

  },
  data: () => ({
    // options: {
    //   dropzoneSelector: ".dropzone",
    //   draggableSelector: ".dropzone-item"
    // },
    items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
    list1: [
      {name: "Баланс в основной стойке", id: 1},
      {name: "Подъем в основную стойку из положения лежа на животе", id: 2},
    ],
    list2: [
      {name: "5 х 4  Большинство", id: 5},
      {name: "3 х 5 Меньшинство", id: 6},
      {name: "Розыгрыш", id: 7}
    ],
    list3: [
      {name: "Свободная игра 1", id: 8},
      {name: "Свободная игра 2", id: 9},
      {name: "Свободная игра 3", id: 10}
    ],
    list4: [
      {name: "Свободная игра 123", id: 8},
      {name: "Свободная игра 2232", id: 9},
      {name: "Свободная игра 3323", id: 10}
    ],
  }),
  components: {
    DotsMenu,
    AccordionTabs,
    BaseLabel,
    draggable,
  },

  name: "Accordion"
}
</script>

<style lang="scss">
.accordion-group {
  width: 100%;
  min-height: 128px;

}

.v-item-group {
  margin-bottom: 25px;
}

.accordion-panel__header{
  padding-left: 36px;
  padding-right: 24px;
  position: relative;
  align-items: flex-start;
  .img-wrap{
    @include width-flex(100px)
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }

}

.accordion-panel__title{
  font-size: 16px;
  font-family: $FiraSansMedium;
  margin-bottom: 8px;
}

.v-expansion-panel-header__icon{
  @include background-contain('arrow-down_blue.svg')
  @include width-flex(20px)
  height: 20px;
  transition: 0.5s;


}

.v-expansion-panel-header{
  min-height: 128px;
}
.v-expansion-panel-content__wrap{
  padding: 10px 24px 24px 36px;
}
.v-expansion-panel--active>.v-expansion-panel-header{
  min-height: 128px;
}
.v-expansion-panel-header--active{
  .v-expansion-panel-header__icon{
    transform: rotate(180deg);
    transition: 0.5s;
  }

}

.accordion-group{
  padding: 2px 1px;
}

.accordion-panel{
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 20px;
}

.more-icon{
  position: absolute;
  left: 8px;
  top: 12px;
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
  font-size: 14px;
  color: rgba(0, 0, 0, .56);
}
.panel-num{
  position: absolute;
  left: -32px;
  top: 14px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.add-training{
  width: 100%;
  height: 104px;
  border: 1px solid rgba(121, 140, 189, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 22px;
  .plus-icon{
    margin-right: 8px;
    @include width-flex(24px)
    height: 24px;
  }
  &:hover{
    cursor: pointer;
  }
}

.add-training__block-text{
  color: #798CBD;
  font-size: 14px;
}
.v-expansion-panels>:last-child{
  border-radius: 12px;
}


</style>