<template lang="pug">
  .widget.widget-team
    .widget-header
      .widget-header__top
        .segments-block
          v-item-group.d-flex(mandatory)
            v-item(
              v-slot='{ active, toggle }'
              v-for='val in gamers'
              :key='val'

            )
              .segment-item
                base-segment(
                  classAttr='segment-default segment-small'
                  :label="val"
                  tag="div"
                  @click='toggle'
                  @select="changeGamer($event)"
                )
    .widget-content.widget-content_gray
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 300px;'
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )
        .d-block(v-if="isShowGroup")
          AccordionTrainerGroup(v-for='(item,i) in groups' :key='i' :item="item")
        .d-block(v-else)
          TrainerGroupItem(v-for='(item,i) in sportsmans' :key='i' :item="item")





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
import TrainerGroupItem from "@/components/TrainerGroupItem";
import AccordionTrainerGroup from "@/components/AccordionTrainerGroup";

export default {
  name: "WidgetTrainerGroup",

  props: {
    data: {
      type: Array,
    },
    title: {
      type: [String],
      default: ''
    },
    groups: Array,
    sportsmans: Array
  },
  components: {
    TrainerGroupItem,
    AccordionTrainerGroup,
    DotsMenu,
    vueCustomScrollbar
  },
  data: () => ({
    isShowList: false,
    isShowGroup: true,
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
    changeGamer(gamer) {
      if(gamer == 'Спортсмены') {
        this.isShowGroup = false;
      }
      if(gamer == 'Группы') {
        this.isShowGroup = true;
      }
    }
  },
  mounted() {
    // this.playerList = this.data.filter(item => item.position == "goalkeeper")
  }

}
</script>

<style scoped lang="scss">
//.player-block {
//  max-width: 30%;
//  margin-right: 57px;
//}
//
//.player-photo {
//  width: 42px;
//  height: 42px;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  border: 1px solid #FFFFFF;
//
//  img {
//
//    margin: 1px;
//    border-radius: 50%;
//    overflow: hidden;
//    width: calc(100% - 2px);
//    height: calc(100% - 2px);
//    //border: 1px solid #FFFFFF;
//  }
//}
//
//.num {
//  font-family: $FiraSansSemiBold;
//  margin-right: 8px;
//}
//
//.progress-quant {
//  font-size: 14px;
//}
//
//.progress-indication {
//  margin-bottom: 2px;
//}

</style>
