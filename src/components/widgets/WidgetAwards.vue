<template lang="pug">
  .widget.widget-award
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
    .widget-content
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 206px;'
        :settings='settings'
        :swicher="!isShowList ? true : false"

      )
        .award-items(v-for='(item,i) in data' :key='i')
          .award-item
            .award-item__img {{ item.img }}
            .award-item__desc
              .award-item-text {{ item.description }}
              .award-item-date сезон {{ item.season  }}
    .widget-footer
      .widget-footer__text(
        @click="handleOnClick($event)"
      )
        span.list-more(v-if='!isShowList') Все награды
        span.list-small(v-if='isShowList') Скрыть

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: "WidgetAwards",
  components: {
    vueCustomScrollbar
  },
  props: {
    data: {
      type: Object,
    },
    title: {
      type: [String],
      default: ''
    },
  },
  data: () => ({
    isShowList: false,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
  }),
  methods: {
    handleOnClick: function () {
      this.isShowList = !this.isShowList;
      this.$emit("toggle");
    }


  },
}
</script>

<style scoped lang="scss">

.widget-award {
  .widget-header {
    box-shadow: none;
  }
}

.award-item__img {
  font-size: 36px;
  @include width-flex(40px)
  margin-right: 8px;
}

.award-item {
  display: flex;
  margin-bottom: 20px;
}

.award-item__desc {
  margin-top: 5px;
}

.award-item-text {
  font-size: 14px;
  margin-bottom: 6px;
}

.award-item-date {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;

}


</style>
