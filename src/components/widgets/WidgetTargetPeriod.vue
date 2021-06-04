<template lang="pug">
  .widget.widget-team
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        DotsMenu.mt-0.position-static.ml-auto

    .widget-content.widget-content_gray
      .target-items
        .target-item
          .target-item__title-wrap
            .target-item__title Гибкость
            base-badge(
              label="физическая подготовка"
              background="rgba(50, 107, 255, 0.15)"
              textColor="#326BFF"
            )
              template(#icon-left)
                .icon-badge.icon-16 💪
          .progress-line__wrap
            .progress-line__full
              .target-marker(style="left:80%")
              .progress-line__before-wrap
                .progress-line__before(style="width:51%;")
                  .progress-line__before-num 51%
                  .progress-line__before-line
              .progress-line__after-wrap
                .progress-line__after(style="width:66%;")
                  .progress-line__after-num 66%
                  .progress-line__after-line
        .target-item
          .target-item__title-wrap
            .target-item__title Блокировка бросков
            base-badge(
              label="техника"
              background="rgba(50, 107, 255, 0.15)"
              textColor="#326BFF"
            )
              template(#icon-left)
                .icon-badge.icon-16 🏒
          .progress-line__wrap
            .progress-line__full
              .target-marker(style="left:80%")
              .progress-line__before-wrap
                .progress-line__before(style="width:51%;")
                  .progress-line__before-num 51%
                  .progress-line__before-line
              .progress-line__after-wrap
                .progress-line__after(style="width:72%;")
                  .progress-line__after-num 72%
                  .progress-line__after-line
        .target-item
          .target-item__title-wrap
            .target-item__title Отбор шайбы
            base-badge(
              label="техника"
              background="rgba(50, 107, 255, 0.15)"
              textColor="#326BFF"
            )
              template(#icon-left)
                .icon-badge.icon-16 🏒
          .progress-line__wrap
            .progress-line__full
              .target-marker(style="left:80%")
              .progress-line__before-wrap
                .progress-line__before(style="width:59%;")
                  .progress-line__before-num 59%
                  .progress-line__before-line
              .progress-line__after-wrap
                .progress-line__after(style="width:74%;")
                  .progress-line__after-num 74%
                  .progress-line__after-line
        .target-item
          .target-item__title-wrap
            .target-item__title Психологический комфорт
            base-badge(
              label="Психология"
              background="rgba(50, 107, 255, 0.15)"
              textColor="#326BFF"
            )
              template(#icon-left)
                .icon-badge.icon-16 🧸
          .progress-line__wrap
            .progress-line__full
              .target-marker(style="left:80%")
              .progress-line__before-wrap
                .progress-line__before(style="width:42%;")
                  .progress-line__before-num 42%
                  .progress-line__before-line
              .progress-line__after-wrap
                .progress-line__after(style="width:69%;")
                  .progress-line__after-num 69%
                  .progress-line__after-line
      .target-items__bottom
        .target-black Начало сезона
        .target-green Сейчас
        .target-red Цель


</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetTargetPeriod",

  props: {
    data: {
      type: Array,
    },
    title: {
      type: [String],
      default: ''
    },

  },
  components: {
    DotsMenu,
    vueCustomScrollbar
  },
  data: () => ({}),
  computed: {},


}
</script>

<style scoped lang="scss">

.target-item {
  padding: 16px 12px 28px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
}

.target-item__title-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.progress-line__full {
  background: #F1F3F9;
  height: 4px;
  border-radius: 2px;
  width: 100%;
  position: relative;

}

.progress-line__before-wrap,
.progress-line__after-wrap {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.progress-line__before,
.progress-line__after {
  position: relative;
}

.progress-line__before-num,
.progress-line__after-num {
  position: absolute;
  z-index: 10;
  top: -23px;
}

.progress-line__before-num {
  left: 0;
}

.progress-line__after-num {
  right: 0;
}


.progress-line__before-line,
.progress-line__after-line {
  height: 4px;
  border-radius: 2px;
}

.progress-line__before-line {
  background: #000;
  width: 100%;
  height: 4px;
  border-right: 3px solid #F1F3F9;
  position: relative;
  z-index: 10;
}

.progress-line__after-line {
  background: #3DC50D;

}

.progress-line__after-num {
  color: #3DC50D;
  font-family: $FiraSansMedium;
}

.target-marker {
  width: 2px;
  height: 8px;
  background: #EC4865;
  position: absolute;
  bottom: 0;

}

.target-items__bottom {
  display: flex;
  align-items: center;
  padding: 12px;
}

.target-black,
.target-green,
.target-red {
  display: flex;
  align-items: center;
  font-family: $FiraSansMedium;
  margin-right: 29px;

  &:before {
    content: '';
    margin-right: 9px;
  }
}

.target-black {
  color: #000;
  &:before {
    background: #000;
    @include width-flex(6px)
    height: 6px;
    border-radius: 50%;
  }
}
.target-green {
  color: #3DC50D;
  &:before {
    background: #3DC50D;
    @include width-flex(6px)
    height: 6px;
    border-radius: 50%;
  }
}
.target-red {
  color: #EC4865;
  &:before {
    background: #EC4865;
    @include width-flex(2px)
    height: 8px;
  }
}


</style>
