<template lang="pug">
  .widget.widget-team
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title Команда
        v-item-group.d-flex.ml-4(mandatory)
          v-item(
            v-slot='{ active, toggle }'
            v-for='val in gamers'
            :key='val'

          )
            div
              base-segment(
                classAttr='segment-default segment-small'
                :label="val"
                tag="div"
                @click='toggle'
                @select="changeGamer($event)"
              )
        DotsMenu.mt-0.position-static.ml-auto
      .widget-header__bottom
        .statistic-season__head
          .statistic-td.first Игрок
          .statistic-td GP↑
          .statistic-td GAA
          .statistic-td SV%
          .statistic-td


    .widget-content.widget-content_gray
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 150px;'
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .statistic-season__body
          .widget__item.mb-1(
            v-for='(item,i) in playerList' :key='i'
          )
            .statistic-td.first.d-flex.align-center
              v-avatar.avatar-player(
                size='32'
              )
                img(:src='item.avatar')
              .team-player__name {{ item.name }}


              base-badge.ml-4(
                :label='item.hash'
                background="#F1F3F9"
                textColor="#000000"
              )
            .statistic-td {{ item.gp }}
            .statistic-td {{ item.gaa }}
            .statistic-td {{ item.sv }}
            .statistic-td
              dots-menu.dots-black.mt-0.position-static
    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        span.list-more(v-if='!isShowList') Развернуть
        span.list-small(v-if='isShowList') Свернуть


</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetTeam",

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
  data: () => ({
    isShowList: false,
    gamers: ['Вратари', 'Защитники', 'Нападающие', 'Друзья'],
    playerList: null,
    settings: {
      suppressScrollY: false,
      suppressScrollX: false,
      wheelPropagation: false
    },
  }),
  computed: {


  },
  methods: {
    toggleList: function () {
      this.isShowList = !this.isShowList;
    },
    changeGamer(gamer) {
      this.currentGamer = gamer;
      switch (gamer) {
        case 'Вратари':
          this.playerList = this.data.filter(item => item.position == "goalkeeper");
          break;
        case 'Защитники':
          this.playerList = this.data.filter(item => item.position == "defender");
          break;
        case 'Нападающие':
          this.playerList = this.data.filter(item => item.position == "forward");
          break;
        case 'Друзья':
          this.playerList = this.data.filter(item => item.position == "friend");
          break;
      }
    }
  },
  mounted() {
    this.playerList = this.data.filter(item => item.position == "goalkeeper")
  }

}
</script>

<style scoped lang="scss">

.team-player__name {
  font-size: 12px;
  color: $blue;
}

.avatar-player {
  margin-right: 16px;
}

.statistic-td.first {
  @include width-flex(48%)
  text-align: left;
}

.statistic-td {
  @include width-flex(13%)
  text-align: center;
}

</style>
