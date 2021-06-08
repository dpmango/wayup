<template lang="pug">
    div
      h1.title-big Мой профиль
      v-row
        v-col(
          md='3'
        )
          .trainer-photo
            img.trainer-photo__img(
              src="@/assets/images/svg/drag-icon.svg"
            )

        v-col(
          md='9'
        )

</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped lang="scss">
.trainer-photo{
  width: 100%;
}

.trainer-photo__img{

}

</style>