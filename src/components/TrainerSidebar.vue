<template lang="pug">
  .user-sidebar(v-if="profile.user")
    .user-photo__wrap.mb-6
      img.user-photo(
        :src="profile.user.avatar"
      )
    .user-desc
      .user-desc__block.mb-4
        .title-small.mb-1 Имя и фамилия
        .user-name {{ profile.user.firstName }} {{ profile.user.patronymic }} {{ profile.user.lastName }}
      .user-desc__block.mb-4
        .title-small.mb-1 Личные данные
        router-link(to="/account-trainer/profile")
          router-link(to='/account-trainer/profile').text-small.text-blue Редактировать




</template>

<script>
export default {
  name: "TrainerSidebar",
  props: ['profile']
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