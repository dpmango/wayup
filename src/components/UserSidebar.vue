<template lang="pug">
  .user-sidebar
    .user-photo__wrap.mb-10
      img.user-photo(
        src="@/assets/images/user-photo.jpeg"
      )
      .user-photo__ratio 89
    .user-desc
      .user-desc__block.mb-4
        .title-small.mb-1 Имя и фамилия
        .user-name Даниил <br/>Брызгалов
      .user-desc__block.mb-4
        .title-small.mb-1 Дата рождения, возраст
        .user-desc__text 9 марта 2003, 18 лет
      .user-desc__block.mb-4
        .title-small.mb-1 Позиция
        .user-desc__text Вратарь
      .user-desc__block
        .title-small.mb-1 Группа крови
        .user-desc__text II (+)



</template>

<script>
export default {
  name: "UserSidebar"
}
</script>

<style scoped lang="scss">

.user-photo__wrap {
  position: relative;
  width: 100%;
  height: auto;
}

.user-photo {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
}

.user-photo__ratio{
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-family: $FiraSansBoldItalic;
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(50, 107, 255, 0.06);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -20px;
  left: 10px;
}
.user-name{
  font-size: 20px;
  font-family: $FiraSansBold;
}
.user-desc__text{
  font-size: 14px;
}

</style>