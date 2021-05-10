<template lang="pug">
  v-card.card.card-group.mb-5(
    elevation="2"
  )
    .group-item
      .group-item__title НП-1
      .group-item__blocks
        .group-item__block
          .group-item__subtitle Возраст
          .group-item__text 8-9 лет
        .group-item__block
          .group-item__subtitle Год подготовки
          .group-item__text 1
      .group-item__avatars-block
        .avatars-block-top
          .avatars-block
            a.avatar-group-link(
              href='#'
              v-for='(item,i) in 5' :key='i'
              )
              v-avatar.avatar-group(
                size='24'
                )
                img(src="@/assets/images/avatar.png")
          .avatars-block-quant +19
        a(href='#').avatars-block-text 24 спортсмена
      base-button(
        classAttr="custom-button ml-auto"
        tag="a"
      )
        |Выбрать










</template>

<script>
export default {
name: "TrainingGroupItem"
}
</script>

<style scoped lang="scss">
//.avatar-group{
//  border: 1px solid #FFFFFF;
//
//  &:hover{
//    transform: scale(1.5);
//  }
//}
//.avatar-group-link{
//  margin-left: -10px;
//  &:first-child{
//    margin-left: 0;
//  }
//}


.group-item{
  display: flex;
  //justify-content: space-between;
}

.group-item__title{
  @include width-flex(20%)
  font-size: 20px;
  font-family: $FiraSansMedium;
}

.group-item__blocks{
  display: flex;
  //@include width-flex(40%)

}

.group-item__subtitle{
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-bottom: 12px;
  white-space: nowrap;
}
.group-item__text{
  font-size: 14px;
}

.group-item__block{
  margin-right: 40px;
}

.group-item__avatars-block{
  min-width: 150px;
}



.tiles{
  .v-btn{
    position: absolute;
    right: 20px;
    top: 16px;
  }
  &_.card-group{
    height: 155px;
  }
  .group-item{

    flex-direction: column;
  }
  .group-item__blocks{
    margin-bottom: 20px;
  }
  .group-item__title{
    margin-bottom: 15px;
  }
  .group-item__avatars-block{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}


</style>