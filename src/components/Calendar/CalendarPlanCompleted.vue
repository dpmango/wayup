<template lang="pug">
  div
    .d-flex.align-center.justify-space-between.mb-12
      .title-wrap.mb-0
        .page-title Индивидуальное занятие, ССМ-2, план 12
      HeaderRightTrainerAccount
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
        md='9'
      )

        AccordionBig.ml-12(
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
                  base-badge(
                    label='Нормально'
                    color='rgba(235, 173, 16, 0.2)'
                    textColor="#9E7200"
                  )
          template(v-slot:accord-body)
            AccordionTrainerLesson
      v-col(
        md='1'
      )
      v-col(
        md='2'
      )
        .about-lesson
          .h5.title-medium О занятии
          base-badge.mt-3.mb-8(
            label="проведение оценки"
            background="#F1F3F9"
            textColor="#000000"
          )
            template(#icon-left)
              .icon-badge.icon-16 💪
          .d-flex.align-center.mb-9
            v-avatar.avatar-player.mr-4(
              size='44'
            )
              img(src="@/assets/images/avatar.png")
            .d-block
              .name.mb-2.title-medium Емельянов Никита
              base-badge(
                label="вратарь"
                background="#F1F3F9"
                textColor="#000000"
              )
          .about-lesson__desc
            .d-block.mb-6
              .text-small.text-gray.mb-1 Тип занятия
              .text Индивидуальное
            .d-block.mb-6
              .text-small.text-gray.mb-1 Дата проведения
              .d-flex.align-center.justify-space-between
                .d-block
                  .text 10 февраля, среда
                  .text 16:00 — 18:00
                svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                  g(clip-path='url(#clip0)')
                    rect(width='40' height='40' rx='20' fill='#F1F3F9')
                    path(d='M24.6667 14.668H15.3333C14.597 14.668 14 15.2649 14 16.0013V25.3346C14 26.071 14.597 26.668 15.3333 26.668H24.6667C25.403 26.668 26 26.071 26 25.3346V16.0013C26 15.2649 25.403 14.668 24.6667 14.668Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    path(d='M22.6665 13.332V15.9987' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    path(d='M17.3335 13.332V15.9987' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    path(d='M14 18.668H26' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                  defs
                    clippath#clip0
                      rect(width='40' height='40' rx='20' fill='white')
            .d-block
              .text-small.text-gray.mb-1 Место проведения
              .d-flex.align-center.justify-space-between
                .d-block
                  .text Ледовый Дворец Спорта ЦСКА
                svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
                  g(clip-path='url(#clip0)')
                    rect(width='40' height='40' rx='20' fill='#F1F3F9')
                    g(clip-path='url(#clip1)')
                      path(d='M26 18.668C26 23.3346 20 27.3346 20 27.3346C20 27.3346 14 23.3346 14 18.668C14 17.0767 14.6321 15.5505 15.7574 14.4253C16.8826 13.3001 18.4087 12.668 20 12.668C21.5913 12.668 23.1174 13.3001 24.2426 14.4253C25.3679 15.5505 26 17.0767 26 18.668Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                      path(d='M20 20.668C21.1046 20.668 22 19.7725 22 18.668C22 17.5634 21.1046 16.668 20 16.668C18.8954 16.668 18 17.5634 18 18.668C18 19.7725 18.8954 20.668 20 20.668Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                  defs
                    clippath#clip0
                      rect(width='40' height='40' rx='20' fill='white')
                    clippath#clip1
                      rect(width='16' height='16' fill='white' transform='translate(12 12)')







</template>

<script>
  import InfoBlock from "@/components/elements/InfoBlock";
  import AccordionBig from "@/components/AccordionBig";
  import AccordionTrainerLesson from "@/components/AccordionTrainerLesson";
  import HeaderTrainerAccount from "@/components/elements/HeaderTrainerAccount";
  import HeaderRightTrainerAccount from "@/components/elements/HeaderRightTrainerAccount";

  export default {
    name: "IndividualLesson",
    components: {
      HeaderRightTrainerAccount,
      HeaderTrainerAccount,
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