<template lang="pug">
  .user-sidebar
    .user-photo__wrap.mb-10
      .user-photo-bg(
        :style="{ 'background-image': 'url(' + profile.user.avatar + ')'}"
      )
      .user-photo__ratio {{ profile.teamNumber }}
    .user-desc
      .user-desc__block.mb-4
        .title-small.mb-1 Имя и Фамилия
        .user-name {{ profile.user.firstName }} {{ profile.user.lastName }}
      .user-desc__block.mb-4
        .title-small.mb-1 Дата рождения, возраст
        .user-desc__text {{ profile.user.dateBirth }}, {{ profile.user.age }} лет
      .user-desc__block.mb-4
        .title-small.mb-1 Позиция
        .user-desc__text {{ getPositionName(profile.positionName) }}
      .user-desc__block
        .title-small.mb-1 Группа крови
        .user-desc__text {{ profile.bloodType }}



</template>

<script>
  import { getPosition } from '@/mixins/getter'

export default {
  name: "UserSidebar",
  mixins: [getPosition],
  props: {
    profile: Object
  },
}
</script>

<style scoped lang="scss">
  .user-photo-bg {
    height: 180px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  }
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