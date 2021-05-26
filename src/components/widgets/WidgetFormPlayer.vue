<template lang="pug">
  .widget.widget-form
    img.drag-icon(
      src="@/assets/images/svg/more-icon.svg"
    )
    .form-player__left
      img.form-player__img.mb-6(
        src="@/assets/images/form-img.jpeg"
      )
      base-button(
        classAttr='button-default button-gray button-small'
        label="Обновить форму"
      )
    .form-player__right
      .form-player__desc-block
        .title-small Фамилия для свитера
        .form-player__name {{ data.name }}
      .form-player__desc-block
        .title-small Номер
        .form-player__num {{ data.num }}
      .form-player__desc-block.d-flex
        .form-player__desc-block_part.mr-4
          .title-small Позиция на льду
          .text-middle.mb-1 {{ data.position }}
          .form-player__desc-status {{ data.status }}
        .form-player__desc-block_part
          .title-small Хват
          .text-middle {{ data.grip }}
      .form-player__desc-block
        .title-small Клуб
        .text-middle {{ data.club }}


</template>

<script>
export default {
  name: "WidgetFormPlayer",
  props: {
    data: {
      type: Object,
    },
    title: {
      type: [String],
      default: ''
    },

  },
}

</script>

<style scoped lang="scss">

.widget-form {
  padding: 24px 32px;
  position: relative;
  display: flex;

  .drag-icon {
    position: absolute;
    left: 12px;
    top: 18px;
  }
}

.form-player__left{
  @include width-flex(150px)
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-player__right {
  padding-left: 26px;
  @include width-flex(calc(100% - 150px))

}

.form-player__desc-block {
  margin-bottom: 16px;
}

.form-player__desc-status {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #798CBD;
}

.title-small {
  margin-bottom: 6px;
}

.form-player__name,
.form-player__num{
  font-size: 20px;
  font-family: $FiraSansBold;
}

</style>
