<template lang="pug">
  .breadcrumbs
    .breadcrumbs__item
      .breadcrumbs-title Макроцикл
      router-link.breadcrumbs-link(to='/') Соревновательный 2
    .breadcrumbs__item
      .breadcrumbs-title Мезоцикл
      router-link.breadcrumbs-link(to='/') Соревновательный 5
    .breadcrumbs__item
      .breadcrumbs-title Микроцикл
      router-link.breadcrumbs-link(to='/') Соревновательный 19


</template>

<script>
export default {
  name: "TheBreadcrumbs"
}
</script>

<style lang="scss" scoped>

.breadcrumbs{
  display: flex;
  align-items: center;
  margin-bottom: 26px;
}

.breadcrumbs__item{
  display: flex;
  align-items: center;
  margin-right: 13px;
  &:after{
    content: '';
    @include background-contain('arrow-down.svg')
    opacity: 0.56;
    width: 14px;
    height: 14px;
    transform: rotate(-90deg);
    margin-left: 13px;
  }
  &:last-child{
    margin-right: 0;
    &:after {
      display: none;
    }
  }
}


.breadcrumbs-title{
  font-size: 14px;
  color: #666666;
  margin-right: 8px;
}
.breadcrumbs-link{
  font-size: 14px;
  color: #326BFF;
}

</style>