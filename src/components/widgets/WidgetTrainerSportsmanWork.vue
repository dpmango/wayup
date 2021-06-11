<template lang="pug">
  .widget.widget-award
    .widget-header
      .widget-header__top
        .widget-header__title Спортсмены, с которыми сейчас работаю
    .widget-content
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 206px;'
        :settings='settings'
        :swicher="!isShowList ? true : false"

      )
        .award-items(v-for='(item,i) in 7' :key='i')
          .award-item
            table
              tbody
                td
                  .d-flex.align-center
                    v-avatar.avatar-player.mr-3(
                      size='32'
                    )
                      img(src="@/assets/images/avatar.png")
                    .d-block
                      .name.mb-2 Емельянов Никита
                      .status.text-small.text-gray Защитник
                td
                  .d-block.pl-16.pr-4
                    .text-small.text-gray.mb-1 Дата рождения, возраст
                    .text-middle 24 сентября 2013, 8 лет
                td
                  .d-block.pl-10.pr-4
                    .text-small.text-gray.mb-1 Рост
                    .text-middle 180 см
                td
                  .d-block.pl-10.pr-4
                    .text-small.text-gray.mb-1 Вес
                    .text-middle 60 кг
                td
                  .d-block.pl-10.pr-4
                    .text-small.text-gray.mb-1 Хват клюшки
                    .text-middle Правый
                td
                  .d-block.pl-10.pr-4
                    .text-small.text-gray.mb-1 Кровь
                    .text-middle IV (-)


    .widget-footer
      .widget-footer__text(
        @click="handleOnClick($event)"
      )
        span.list-more(v-if='!isShowList') Все
        span.list-small(v-if='isShowList') Скрыть
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: "WidgetTrainerSportsmanWork",
  components: {
    vueCustomScrollbar
  },
  props: {
    data: {
      type: Array,
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
