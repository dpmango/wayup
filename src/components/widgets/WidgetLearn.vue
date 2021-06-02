<template lang="pug">
  .widget.widget-learn
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title.mr-2 {{ title }}
        .widget-header__text средний балл  <span class='ml-1'>3,5</span>
        .nav-slider.ml-auto
          .nav-arrow(@click='prev')
            svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M9 4L5 8L9 12' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
          .nav-slider__text(
            v-text='currentLabel'
          )
          .nav-arrow(@click='next')
            svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M7 4L11 8L7 12' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        DotsMenu.mt-0.position-static.ml-5
    .widget-content.widget-content_gray
      vue-custom-scrollbar(
        :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
        style='max-height: 266px;'
        :settings='settings'
        :swicher="!isShowList ? true : false"
      )

        .widget__item.mb-1(
          v-for='(item,i) in filterLearnList' :key='i'
        )
          .text-small {{ item.object }}
          .widget__item-right.d-flex.align-center.ml-auto
            .discipline-num {{ item.ratio }}
              <!-- при отрицательном результате 'green-result' заменить на 'red-result' -->
            .progress-quant__block.green-result
              svg.progress-indication(width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M4 0L8 5H0L4 0Z' )
              .progress-quant 15
            dots-menu.dots-black.mt-0.position-static.d-flex.align-center.ml-2

    .widget-footer
      .widget-footer__text(
        @click='toggleList'
      )
        span.list-more(v-if='!isShowList') Развернуть список
        span.list-small(v-if='isShowList') Свернуть


</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import DotsMenu from "@/components/DotsMenu";

export default {
  name: "WidgetLearn",
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
    vueCustomScrollbar,
    DotsMenu
  },
  data: () => ({
    isShowList: false,
    learnList: null,
    semesters: ['1 семестр', '2 семестр', '3 семестр', '4 семестр'],
    currentIndex: 0,
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

    prev: function (){
      if(this.currentIndex < 1 ){
        return false
      }
      else{
        this.currentIndex --
      }
    },
    next: function (){
      if(this.currentIndex < (this.semesters.length - 1) ){
        this.currentIndex ++
      }
      else{
        return false
      }
    }
  },
  mounted() {
    this.learnList = this.data.filter(item => item.semester == "1")
  },
  computed:{
    currentLabel: function (){
      return this.semesters[this.currentIndex]
    },
    filterLearnList: function (){
      return this.data.filter(item => item.semester == this.currentIndex + 1);
    }
  }
}
</script>

<style scoped lang="scss">

.discipline-num {
  font-size: 12px;
  font-family: $FiraSansBold;
}

</style>
