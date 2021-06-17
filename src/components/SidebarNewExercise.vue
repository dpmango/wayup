<template lang="pug">
  .sidebar-new-exercise
    .new-exercise__header
      .sidebar-widgets__close(@click="$emit('sidebarWidgetsClose', index)")
        svg.icon-24(width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M7 17L17 7M17 17L7 7' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')

      .sidebar-widgets__title Новое упражнение


    .new-exercise__content
      vue-custom-scrollbar.scroll-area(
        :settings="settings"
      )
        base-input(
          label="Название упражнения"
          classAttr="input-default input-big mt-2 ml-1 mr-1 mb-6"
        )
        base-textarea.mt-2.ml-1.mr-1.mb-6(
          label="Задачи упражнения"
          row="30"
        )
        base-textarea.mt-2.ml-1.mr-1.mb-6(
          label="Описание и организация упражнения"
          row="30"
        )
        base-textarea.mt-2.ml-1.mr-1.mb-6(
          label="Описание и организация упражнения"
          row="30"
        )
        base-textarea.mt-2.ml-1.mr-1.mb-6(
          label="Методические указания"
          row="30"
        )
        v-row
          v-col(md="5")
            base-input(
              label="Дозировка"
              classAttr="input-default input-big mt-2 ml-1 mr-1"
            )
          v-col(md="7")
            base-input(
              label="Единицы"
              classAttr="input-default input-big mt-2 ml-1 mr-1"
            )
        v-row
          v-col(md="5")
            base-input(
              label="Участников"
              classAttr="input-default input-big mt-2 ml-1 mr-1 mb-6"
            )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Вид спорта"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Этап подготовки/возраст"
          :items="selectItems"
        )
        .radio-block.mb-4
          .radio-block__title.text-small.text-gray Период подготовки
          v-radio-group( mandatory)
            base-radio-button(
              label="Подготовительный"
              value="Подготовительный"
            )
            base-radio-button(
              label="Соревновательный"
              value="Соревновательный"
            )
            base-radio-button(
              label="Переходный"
              value="Переходный"
            )
        .radio-block.mb-4
          .radio-block__title.text-small.text-gray Этап периода подготовки
          v-radio-group( mandatory)
            base-radio-button(
              label="Общеподготовительный"
              value="Общеподготовительный"
            )
            base-radio-button(
              label="Специально-подготовительный"
              value="Специально-подготовительный"
            )
            base-radio-button(
              label="Соревновательный"
              value="Соревновательный"
            )
            base-radio-button(
              label="Переходный"
              value="Переходный"
            )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Мезоцикл"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Мезоцикл"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Микроцикл"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Вид подготовки"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Этап подготовки"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Основные методы тренировки"
          :items="selectItems"
        )

        .radio-block.mb-4
          .radio-block__title.text-small.text-gray Форма организации
          v-radio-group( mandatory)
            base-radio-button(
              label="Индивидуальная"
              value="Индивидуальная"
            )
            base-radio-button(
              label="Групповая"
              value="Групповая"
            )
            base-radio-button(
              label="Командная"
              value="Командная"
            )
            base-radio-button(
              label="Домашнее задание"
              value="Домашнее задание"
            )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Основные средства физического упражнения"
          :items="selectItems"
        )
        .radio-block.mb-2
          .radio-block__title.text-small.text-gray Часть тренировки
          v-radio-group( mandatory)
            base-radio-button(
              label="Подготовительная"
              value="Подготовительная"
            )
            base-radio-button(
              label="Основная"
              value="Основная"
            )
            base-radio-button(
              label="Заключительная"
              value="Заключительная"
            )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Интенсивность упражнения"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Амплуа"
          :items="selectItems"
        )
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Место проведения"
          :items="selectItems"
        )

        DropzoneBlock.mb-6
        base-select(
          classAttr='select-default select-bg-white mt-2 ml-1 mr-1 mb-6'
          label="Инвентарь"
          :items="selectItems"
        )
        base-button(
          classAttr='button-default button-gray button-small mb-6'
          label="Добавить инвентарь"
        )
          template(#icon-left)
            svg.icon-16.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

    .new-exercise__footer
      base-button(
        classAttr='button-default button-blue button-big w-100'
        label="Создать"
      )










</template>

<script>
	import vueCustomScrollbar from 'vue-custom-scrollbar'
	import "vue-custom-scrollbar/dist/vueScrollbar.css"
  import DropzoneBlock from "@/components/elements/DropzoneBlock";



	export default {
		name: "SidebarNewExercise",
		components: {
      DropzoneBlock,
			vueCustomScrollbar,
		},
		data: () => ({
			settings: {
				suppressScrollY: false,
				suppressScrollX: true,
				wheelPropagation: false,
			},
			selectItems: ['Тест 1', 'Тест 2', 'Тест 3'],
		}),
	}
</script>

<style scoped lang="scss">

.sidebar-new-exercise {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 468px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    z-index: 1000;
  }

  .sidebar-new-exercise.m-show {
    right: 0;
    transition: 1s;
  }

  .sidebar-new-exercise.m-hide {
    right: -999px;
    transition: 2s;
  }

  .new-exercise__header {
    padding: 40px 24px 24px;
    box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 4px;
    position: relative;
  }

  .sidebar-widgets__close {
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .scroll-area {
    height: calc(100vh - 272px);
  }

  .sidebar-widgets__title {
    font-size: 20px;
    font-family: $FiraSansMedium;
    margin-bottom: 8px;
  }



.new-exercise__content{
  padding: 16px 20px 120px;
  overflow-y: hidden;
}

.new-exercise__footer{
  margin-top: -50px;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  padding: 16px 24px 24px;

}

</style>