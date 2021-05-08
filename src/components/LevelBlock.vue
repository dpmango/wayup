<template lang="pug">
  .lvl-block
    .lvl-block-text lvl
    .lvl-block-num 25
    .lvl-block-progress
      LevelProgress

</template>

<script>
import LevelProgress from "@/components/elements/LevelProgress";
export default {
name: "LevelBlock",
  components: {LevelProgress}
}
</script>

<style scoped lang="scss">

.lvl-block{
  display: flex;
  align-items: center;
}
.lvl-block-text{
  letter-spacing: 0.02em;
  margin-right: 8px;
  color: #798CBD;
}
.lvl-block-num{
  color: #000000;
  font-size: 14px;
  font-family: $FiraSansBold;
  margin-right: 8px;
}


</style>