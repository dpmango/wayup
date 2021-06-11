<template lang="pug">
  div
    v-row
      v-col(md="12")
        .widget.widget-empty
          .widget-header
            .widget-header__top
              .icon-24.mb-1.mr-2 📊
              .widget-header__title ДИНАМИКА СПОРТСМЕНА
          .widget-content
            info-block.info-block_gray.d-inline-flex(text='Динамика появится после оценки игрока')
              slot
                template
                  .target-icon.icon-36.mr-3
                    div.d-block.emoji-36 💬

    v-row
      v-col(
        md='12'
      )
        AccordionBig(
          v-for="(accordionBigItem, i) in accordionBigItems"
          :classAttr="accordionBigItem"
          :index="i"
          :key="i"
          :open="accordionBigItem.open"
          @toggleOpen="toggleOpen"
        )
          template(v-slot:accord-header)
            .accordion-big__head
              .accordion-subtitle 2 упражнений, 17 мин
              .accordion-big__header
                .accordion-big__header-title Подготовительная часть
                .labels
                  base-label(
                    label='Нормально'
                    color='rgba(235, 173, 16, 0.2)'
                    textColor="#9E7200"
                  )
          template(v-slot:accord-body)
            AccordionTrainerLesson


</template>

<script>
import InfoBlock from "@/components/elements/InfoBlock";
import AccordionBig from "@/components/AccordionBig";
import AccordionTrainerLesson from "@/components/AccordionTrainerLesson";

export default {
  name: "Stat",
  components: {
    AccordionTrainerLesson,
    AccordionBig,
    InfoBlock
  },
  data: () => ({
    accordionBigItems: [
      {
        open: true,
        children: [
          {name: "Баланс в основной стойке", id: 1},
          {name: "Подъем в основную стойку из положения лежа на животе", id: 2},

        ]
      },
      {
        open: false,
        children: [
          {name: "5 х 4  Большинство", id: 5},
          {name: "3 х 5 Меньшинство", id: 6},
          {name: "Розыгрыш", id: 7}

        ]
      },
      {
        open: false,
        children: [
          {name: "Свободная игра 1", id: 8},
          {name: "Свободная игра 2", id: 9},
          {name: "Свободная игра 3", id: 10}

        ]
      },
      {
        open: false,
        children: [
          {name: "Свободная игра 123", id: 8},
          {name: "Свободная игра 2232", id: 9},
          {name: "Свободная игра 3323", id: 10}


        ]
      },

    ],
  }),
  methods: {
    toggleOpen: function (index) {
      this.accordionBigItems = this.accordionBigItems.map((accordionBigItem, i) => {
        if (index === i) {
          accordionBigItem.open = !accordionBigItem.open;
        } else {
          accordionBigItem.open = false;
        }
        return accordionBigItem;
      });
    },
  }
}
</script>

<style scoped lang="scss">
.widget-empty {
  .widget-content {
    height: 302px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}
</style>