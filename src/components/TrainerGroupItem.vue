<template lang="pug">
  .widget__item.mb-3.w-100
    .player-block.d-flex.align-center
      .player-photo__wrap.mr-4
        v-progress-circular(
          :value="80"
          color="#326BFF"
          size='48'
          width='2'
        )
          img.player-photo(
            src="@/assets/images/avatar.png"
          )
      .player-block__right
        .player-block__name.title-medium.mb-1 Василевский Антон
        .player-block__labels
          .labels
            base-badge.mr-2.mb-1(
              label='99'
              color='#F1F3F9'
              textColor="#000000"
            )
            base-badge.mr-2.mb-1(
              label='П. Нападающий'
              color='#F1F3F9'
              textColor="#000000"
            )
            base-badge.mr-2.mb-1(
              label='Запас'
              color='#F1F3F9'
              textColor="#000000"
            )
    .d-block.mr-10
      .text-middle.text-gray.mb-2 ОФП, СФП
      .d-flex.align-end
        .num 8,1
        <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
        .summary-indication.green-result.d-flex.align-center
          svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M4 0L8 5H0L4 0Z' )
          .progress-quant 0.5
    .d-block.mr-10
      .text-middle.text-gray.mb-2 Техника
      .d-flex.align-end
        .num 8,1
        <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
        .summary-indication.green-result.d-flex.align-center
          svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M4 0L8 5H0L4 0Z' )
          .progress-quant 0.5
    .d-block.mr-10
      .text-middle.text-gray.mb-2 Тактика
      .d-flex.align-end
        .num 8,1
        <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
        .summary-indication.green-result.d-flex.align-center
          svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M4 0L8 5H0L4 0Z' )
          .progress-quant 0.5
    .d-block.ml-auto
      v-menu(
        v-model='menu'
        :close-on-content-click='false'
        :nudge-width='385'
        top='true'
        open-on-click="true"
        nudge-top="60"
        content-class="menu-tooltip-estimate"
      )
        template(v-slot:activator='{ on, attrs }')
          .d-block( v-bind='attrs'
            v-on='on')
            base-button(
              classAttr='button-default button-blue button-small ml-auto'
              label="Оценить"
              disabled=true
            )
        .block-white.popup-block.v-application
          .close-button(@click='menu = false')
            svg.icon-16(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M3 13L13 3M13 13L3 3' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
          .title-medium.mb-2 Невозможно оценить спортсмена
          .text-middle.mb-5 Создайте в календаре тренировку для оценки спортсмена
          base-button(
            classAttr='button-default button-blue button-big'
            label="Перейти в календарь"
          )


</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: "TrainerGroupItem",

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
    vueCustomScrollbar
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    isShowList: false,
    gamers: ['Группы', 'Спортсмены'],
    // playerList: null,
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
    // changeGamer(gamer) {
    //   this.currentGamer = gamer;
    //   switch (gamer) {
    //     case 'Вратари':
    //       this.playerList = this.data.filter(item => item.position == "goalkeeper");
    //       break;
    //     case 'Защитники':
    //       this.playerList = this.data.filter(item => item.position == "defender");
    //       break;
    //     case 'Нападающие':
    //       this.playerList = this.data.filter(item => item.position == "forward");
    //       break;
    //     case 'Друзья':
    //       this.playerList = this.data.filter(item => item.position == "friend");
    //       break;
    //   }
    // }
  },
  mounted() {
    // this.playerList = this.data.filter(item => item.position == "goalkeeper")
  }

}
</script>

<style scoped lang="scss">
.player-block {
  max-width: 30%;
  margin-right: 57px;
}

.player-photo {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #FFFFFF;

  img {

    margin: 1px;
    border-radius: 50%;
    overflow: hidden;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    //border: 1px solid #FFFFFF;
  }
}

.num {
  font-family: $FiraSansSemiBold;
  margin-right: 8px;
}

.progress-quant {
  font-size: 14px;
}

.progress-indication {
  margin-bottom: 2px;
}

.widget__item {
  border-radius: 12px !important;
}

.block-white.popup-block {
  padding: 30px 60px 58px 20px;
  height: 206px;


}

//.block-white{
//  box-shadow: 0px 4px 24px rgba(218, 224, 232, 0.6);
//  padding: 30px 60px 58px 20px;
//  height: 206px;
//  overflow: visible;
//  &:after{
//    content: '';
//    width: 35px;
//    height: 35px;
//    transform: rotate(45deg);
//    left: 25px;
//    bottom: -20px;
//    z-index: -1;
//    position: absolute;
//    background: #FFFFFF;
//    box-shadow: 0px 4px 24px rgba(218, 224, 232, 0.6);
//  }
//}


</style>
