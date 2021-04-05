<template lang="pug" >
  .buttons-wrap.justify-space-between.mb-8
    .buttons-left
      base-button(label='Добавить занятие' classAttr='custom-button mr-6')
      base-select(label='Выберите группу' classAttr='select-base custom-select')
    .buttons-right
      router-link(
        to='/test' active-class='button-active'
      )
        base-button(label='Год' classAttr='custom-button mr-1' tag='div')
      router-link(
        to='/' active-class='button-active'
      )
        v-btn.custom-button.mr-1(
          elevation='0'
          color="#F1F3F9"
          height='40px'
          tag="div"
        ) Месяц
      router-link(
        to='/test' active-class='button-active'
      )
        base-button(label='Неделя' classAttr='custom-button mr-1' tag='div')
      router-link(
        to='/test' active-class='button-active'
      )
        base-button(label='День' classAttr='custom-button mr-1' tag='div')

      .today-block.mr-6.ml-6
        base-button(classAttr='custom-button button-icon mr-1' tag='a')
          svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M9 4L5 8L9 12' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        base-button(label='Сегодня' classAttr='custom-button mr-1' tag='a')
        base-button(classAttr='custom-button button-icon mr-1' tag='a')
          svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M7 12L11 8L7 4' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
      .search-block
        base-button(classAttr='custom-button button-icon mr-1' tag='a')
          svg.icon-20(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            path(d='M17.5 17.5L13.875 13.875' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        base-button(classAttr='custom-button button-icon' tag='a')
          svg.icon-20(width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M2 6H18' stroke='black' stroke-width='1.5' stroke-linecap='round')
            path(d='M2 14H18' stroke='black' stroke-width='1.5' stroke-linecap='round')
            circle(cx='6' cy='6' r='2' fill='#F1F3F9' stroke='black' stroke-width='1.5' stroke-linecap='round')
            circle(cx='14' cy='14' r='2' fill='#F1F3F9' stroke='black' stroke-width='1.5' stroke-linecap='round')









</template>

<script>
import BaseSelect from "@/components/baseSelect";
import BaseButton from "@/components/baseButton";

export default {

  name: "CalendarButtons",
  components: {BaseButton, BaseSelect},
  data: () => ({
    // items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
  }),
}
</script>

<style lang="scss" scoped>

.buttons-left,
.buttons-right{
  display: flex;
  align-items: center;
}



</style>