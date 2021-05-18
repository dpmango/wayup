<template lang="pug">
    .widget
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title Общая статистика
                v-item-group.d-flex.ml-8.mb-0(mandatory)
                    each val in ['Сезон', 'Турнир', 'Стадия']
                        v-item(
                            v-slot='{ active, toggle }'
                        )
                            base-segment(
                                classAttr='segment-default segment-small'
                                label=val
                                tag="div"
                                @click='toggle'
                            )

                DotsMenu.mt-0.position-static.ml-auto
            .widget-header__bottom
                .statistic-season__head
                    .statistic-td.text-left(style="width:10%") Сезон
                    .statistic-td И
                    .statistic-td ИС
                    .statistic-td В
                    .statistic-td П
                    .statistic-td Н
                    .statistic-td ОТ
                    .statistic-td ОБ
                    .statistic-td ПГ
                    .statistic-td ПГ/И
                    .statistic-td %ОБ
                    .statistic-td И ”0”
                    .statistic-td МИН
        .widget-content.widget-content_gray



            vue-custom-scrollbar(
                :class="!isShowList ? 'scroll-area' : 'scroll-area show'"
                style='max-height: 84px;'
                :settings='settings'
                :swicher="!isShowList ? true : false"
            )
                .statistic-season__body
                    .widget__item.mb-1(
                        v-for='(item,i) in 7' :key='i'
                    )
                        .statistic-td.text-left(style="width:10%") 2020-2021
                        .statistic-td 4
                        .statistic-td 5
                        .statistic-td 2
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
                        .statistic-td 5
        .widget-footer
            .widget-footer__text(
                @click='toggleList'
            )
                | Развернуть

</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import DotsMenu from "@/components/DotsMenu";

    export default {
        name: "WidgetStatisticTotal",
        components: {
            DotsMenu,
            vueCustomScrollbar
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
            toggleList: function () {
                this.isShowList = !this.isShowList;
            },
        },
    }
</script>

<style scoped lang="scss">
    .statistic-td.first{
        text-align: left;
    }
    .statistic-td{
        @include width-flex(7.5%)
        text-align: center;
    }

</style>
