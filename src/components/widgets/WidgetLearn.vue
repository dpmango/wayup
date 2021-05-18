<template lang="pug">
    .widget.widget-learn
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title.mr-2 Учёба
                .widget-header__text средний балл  <span class='ml-1'>3,5</span>
                .nav-slider.ml-auto
                    svg.nav-arrow(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                        path(d='M9 4L5 8L9 12' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                    .nav-slider__text 2 семестр
                    svg.nav-arrow(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                        path(d='M7 4L11 8L7 12' stroke='#326BFF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
                DotsMenu.mt-0.position-static.ml-5
        .widget-content.widget-content_gray
            vue-custom-scrollbar(
                :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                style='max-height: 266px;'
                :settings='settings'
                :swicher="!isShowList ? true : false"
            )

                .widget__item.mb-1(
                    v-for='(item,i) in 7' :key='i'
                )
                    .text-small Основы специальной педагогики и психологии
                    .widget__item-right.d-flex.align-center.ml-auto
                        .discipline-num 4,2
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
                |Развернуть список


</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import DotsMenu from "@/components/DotsMenu";

    export default {
        name: "WidgetLearn",
        components: {
            vueCustomScrollbar,
            DotsMenu
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

    .discipline-num{
        font-size: 12px;
        font-family: $FiraSansBold;
    }

</style>
