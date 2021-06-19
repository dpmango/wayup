<template lang="pug">
  .training-edit
    .training-edit__row.mb-4.align-start
      .training-edit__left
        .img-wrap.img-wrap_left
          img(
            src="@/assets/images/img-traning.png"
          )
      .training-edit__right
        base-input(
          label="Название упражнения"
          classAttr="input-default input-big w-100"
        )
    .training-edit__row.mb-4
      .training-edit__left
        .text-middle Дозировка
      .training-edit__right
        .d-flex.align-center
          base-input(
            style='width:80px;'
            label=""
            classAttr="input-default input-big mr-3"
          )
          base-select(
            style='width:119px;'
            classAttr='select-default select-bg-gray'
            label="Минуты"
            :items="selectItems"
          )
    .training-edit__row.mb-4
      .training-edit__left
        .text-middle Тип упражнения
      .training-edit__right
        v-row
          v-col(md="5")
            base-select(
              classAttr='select-default select-bg-gray'
              label="Техника"
              :items="selectItems"
            )
    .training-edit__row.mb-4
      .training-edit__left
        .text-middle Нагрузка
      .training-edit__right
        v-row
          v-col(md="5")
            base-select(
              classAttr='select-default select-bg-gray'
              label="Умеренная"
              :items="selectItems"
            )
    .training-edit__row.mb-4.align-start
      .training-edit__left
        .text-middle Описание
      .training-edit__right
        base-textarea(:solo="true" name="test" label="" )
    .training-edit__row.mb-4.align-start
      .training-edit__left
        .text-middle Видео
      .training-edit__right
        .video-links.d-flex.align-center
          .video-link.text-middle.text-blue https://www.youtube.com/watch?v=7IrugipPZRw&ab_channel=%D0%90%D0%B7%D0%B0%D0%BC%D0%B0
          a(href='#').video-link_del.text-right
            img(
              src="@/assets/images/svg/icon-close.svg"
            )
        SelectMenu



    .training-edit__row.mb-4.align-start
      .training-edit__left
        .text-middle Методические указания
      .training-edit__right
        base-textarea(:solo="true" name="test" label="" )

    .training-edit__row.mb-4
      .training-edit__left
        .text-middle Инвентарь
      .training-edit__right
        v-row
          v-col(md="5")
            base-select(
              classAttr='select-default select-bg-gray'
              label="Умеренная"
              :items="selectItems"
            )
    .training-edit__row.mb-12
      .training-edit__left
      .training-edit__right
        base-button(
          classAttr='button-default button-gray button-small'
          label="Добавить инвентарь"
        )
          template(#icon-left)
            svg.icon-12.mr-2(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M8.74049 2.24051C8.74049 1.83154 8.40895 1.5 7.99998 1.5C7.59101 1.5 7.25947 1.83154 7.25947 2.24051V7.25947H2.24051C1.83154 7.25947 1.5 7.59101 1.5 7.99998C1.5 8.40895 1.83154 8.74049 2.24051 8.74049H7.25947V13.7595C7.25947 14.1685 7.59101 14.5 7.99998 14.5C8.40895 14.5 8.74049 14.1685 8.74049 13.7595V8.74049H13.7595C14.1685 8.74049 14.5 8.40895 14.5 7.99998C14.5 7.59101 14.1685 7.25947 13.7595 7.25947H8.74049V2.24051Z' fill='black')

    .training-edit__row
      .training-edit__left
      .training-edit__right
        .d-flex
          v-menu(
            v-model='menu'
            :close-on-content-click='false'
            :nudge-width='385'
            :top='true'
            :open-on-click="true"
            nudge-top="70"
            content-class="menu-tooltip-estimate"
          )
            template(v-slot:activator='{ on, attrs }')
              .d-block( v-bind='attrs'
                v-on='on')
                base-button(
                  classAttr='button-default button-blue button-big mr-4'
                  label="Сохранить"
                )
            .block-white.popup-block.v-application
              .close-button(@click='menu = false')
                svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                  path(d='M3 13L13 3M13 13L3 3' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
              .title-medium.mb-2 Перезаписать или создать новое?
              .text-middle.mb-5 Вы можете заменить упражнение в занятии или создать новое для справочника, чтобы использовать его в дальнейшем.
              base-button(
                classAttr='button-default button-gray button-big mr-4'
                label="Перезаписать"
              )
              base-button(
                classAttr='button-default button-gray button-big'
                label="Создать новое"
              )
          base-button(
            classAttr='button-default button-gray button-big'
            label="Отменить изменения"
          )

    .training-edit__row
      .training-edit__left
      .training-edit__right
    .training-edit__row
      .training-edit__left
      .training-edit__right
    .training-edit__row
      .training-edit__left
      .training-edit__right


</template>

<script>
import SelectMenu from "@/components/elements/SelectMenu";
export default {
  name: "TrainingEditBlock",
  components: {SelectMenu},
  data: () => ({
    selectItems: ['Тест 1', 'Тест 2', 'Тест 3'],
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
}
</script>

<style scoped lang="scss">


.training-edit {
  padding: 16px 24px 24px 36px;
}

.training-edit__row {
  display: flex;
  align-items: center;

}

.img-wrap_left {
  justify-content: flex-start;

}

.training-edit__left {
  @include width-flex(15%)
}

.training-edit__right {
  @include width-flex(85%)

}

.video-link{
  @include width-flex(90%)
}

.video-link_del{
  @include width-flex(10%)
}
.block-white.popup-block{
  padding: 30px 60px 20px 20px;
  height: 172px;

}








</style>