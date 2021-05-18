<template lang="pug">
    .widget.widget-learn
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title.mr-2 Медицинское обследование
                DotsMenu.mt-0.position-static.ml-auto
        .widget-content.widget-content_gray
            vue-custom-scrollbar(
                :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                style='max-height: 266px;'
                :settings='settings'
                :swicher="!isShowList ? true : false"
            )

                .medical-item.mb-1(
                    v-for='(item,i) in 7' :key='i'
                )
                    AccordionMedical
        .widget-footer
            .widget-footer__text(
                @click='toggleList'
            )
                |Развернуть


</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import DotsMenu from "@/components/DotsMenu";
    import AccordionMedical from "@/components/AccordionMedical";

    export default {
        name: "WidgetMedical",
        components: {
            AccordionMedical,
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
