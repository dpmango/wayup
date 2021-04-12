<template lang="pug">
  div
    .library-block.mb-6
      .library-title.mb-5 Badges
      .library-row
        .library-item.mr-4
          base-badge(
            label="Текст"
          )
        .library-item.mr-4
          base-badge(
            label="Текст"
            background="rgba(50, 107, 255, 0.15)"
            textColor="#326BFF"
          )
            template(#icon-left)
              .icon-16 🔥
        .library-item.mr-4
          base-badge(
            label="Текст"
            background="rgba(61, 197, 13, 0.15)"
            textColor="#1F7800"
          )
            template(#icon-right)
              .icon-16 🔥
    .library-block.mb-6
      .library-title.mb-5 Buttons

    .library-block.mb-6
      .library-title.mb-5 Chips
      .library-row
        .library-item.mr-4
          base-tag(
            label="Текст"
          )
    .library-block.mb-6
      .library-title.mb-5 Cards
    .library-block.mb-6
      .library-title.mb-5 Error & Description
    .library-block.mb-6
      .library-title.mb-5 Informer
    .library-block.mb-6
      .library-title.mb-5 Input
    .library-block.mb-6
      .library-title.mb-5 Labels
    .library-block.mb-6
      .library-title.mb-5 Navigation
    .library-block.mb-6
      .library-title.mb-5 Segment
    .library-block.mb-6
      .library-title.mb-5 Select
    .library-block.mb-6
      .library-title.mb-5 Snackbar
    .library-block.mb-6
      .library-title.mb-5 Switch
    .library-block.mb-6
      .library-title.mb-5 Tags


</template>

<script>
export default {
  name: "Components"
}
</script>

<style scoped lang="scss">

.library-title{
  font-size: 20px;
  font-family: $FiraSansMedium;
}

.library-row{
  display: flex;
  align-items: center;
}
</style>