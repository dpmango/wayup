<template lang="pug">
  div
    v-expansion-panels
      v-expansion-panel.mb-3
        v-expansion-panel-header.accordion-panel__header
          .h5.title-medium.mr-10 {{ item.name }}
          .d-block
            .text-small.text-gray.mb-4 Возраст
            .text 8-9 лет
          .d-block
            .text-small.text-gray.mb-4 Год подготовки
            .text 1
          .group-item__avatars-block
            .avatars-block-top
              .avatars-block
                a.avatar-group-link(
                  href='#'
                  v-for='(item,i) in item.sportsmans.length' :key='i'
                )
                  v-avatar.avatar-group(
                    size='24'
                  )
                    img(src="@/assets/images/avatar.png")
            .avatars-block-text {{ item.sportsmans.length }} спортсмена



        v-expansion-panel-content
          TrainerGroupItem(v-for='(item,i) in item.sportsmans' :key='i' :item="item")


</template>

<script>
import AccordionTabs from "@/components/AccordionTabs";
import DotsMenu from "@/components/DotsMenu";
import AddBlock from "@/components/elements/addBlock";
import AccordionItemEstimate from "@/components/AccordionItemEstimate";
import TrainerGroupItem from "@/components/TrainerGroupItem";

export default {

  props: {
    groupName: String,
    item: Object
  },
  data: () => ({}),
  components: {
    TrainerGroupItem,
    AccordionItemEstimate,
    AddBlock,
    DotsMenu,
    AccordionTabs,
  },

  name: "AccordionTrainerGroup",

  methods: {}


}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-expansion-panel-header>:not(.v-expansion-panel-header__icon){
    flex: 1 1 auto;
  }
  .v-expansion-panel {
    border-radius: 12px;
  }

  .v-expansion-panel-content__wrap {
    background: #F8F9FB;
  }
  .v-expansion-panel-header{
    min-height: 80px;
  }

  .v-expansion-panel-header.v-expansion-panel-header--active {
    background: #F8F9FB;

  }

  .v-expansion-panel:before {
    box-shadow: none;
  }

  .v-expansion-panel:not(:first-child):after {
    border: none;
  }
  .v-expansion-panel-header__icon{
    top: 20px;
  }
}


</style>
