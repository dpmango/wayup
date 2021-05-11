<template lang="pug">
  .widget.widget-award
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Мои награды
    .widget-content
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 206px;'
        @ps-scroll-y="scrollHanle"
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .award-item
          .award-item__img 🏆
          .award-item__desc
            .award-item-text Первенство области на приз губернатора
            .award-item-date сезон 2019-2020
        .award-item
          .award-item__img 🥇
          .award-item__desc
            .award-item-text Первенство области на приз губернатора
            .award-item-date сезон 2019-2020
        .award-item
          .award-item__img 🥇
          .award-item__desc
            .award-item-text Первенство области на приз губернатора
            .award-item-date сезон 2019-2020
        .award-item
          .award-item__img 🥇
          .award-item__desc
            .award-item-text Первенство области на приз губернатора
            .award-item-date сезон 2019-2020
    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        | Все награды

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
export default {
  name: "WidgetAwards",
  components: {
    vueCustomScrollbar
  },
  data: () => ({
    isShowList:false,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
  }),
  methods: {
    toggleList: function () {
      this.isShowList = !this.isShowList;
    },
  },
}
</script>

<style scoped lang="scss">

.widget-award{
  .widget-header{
    box-shadow: none;
  }
}

.award-item__img{
  font-size: 36px;
  @include width-flex(40px)
  margin-right: 8px;
}

.award-item{
  display: flex;
  margin-bottom: 20px;
}
.award-item__desc{
  margin-top: 5px;
}

.award-item-text{
  font-size: 14px;
  margin-bottom: 6px;
}

.award-item-date{
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;

}


</style>