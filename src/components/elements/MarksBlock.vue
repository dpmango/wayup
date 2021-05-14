<template lang="pug">
  .marks
    .marks-title Отметки
    .marks-row
      .marks-left
        base-badge.mr-4(
          label="На исправление"
          background="rgba(247, 239, 176, 0.5)"
          textColor="#676300"
        )
      .marks-num 4
    .marks-row
      .marks-left
        base-badge.mr-4(
          label="в работе"
          background="rgba(247, 239, 176, 0.5)"
          textColor="#676300"
        )
      .marks-num 1
    .marks-row
      .marks-left
        base-badge.mr-4(
          label="для сведения"
          background="rgba(30, 147, 211, 0.15)"
          textColor="#337599"
        )
      .marks-num 11
    .marks-row
      .marks-left
        base-badge.mr-4(
          label="ознакомлен"
          background="rgba(30, 147, 211, 0.15)"
          textColor="#337599"
        )
      .marks-num 11


</template>

<script>
export default {
  name: "MarksBlock"
}
</script>

<style scoped lang="scss">
.marks {
  background: #F8F9FB;
  border-radius: 8px;
  padding: 16px;
}

.marks-title{
  margin-bottom: 16px;
}

.marks-row{
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>