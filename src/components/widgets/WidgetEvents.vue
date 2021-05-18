<template lang="pug">
    .widget
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title Предстоящие события
                DotsMenu.mt-0.position-static.ml-auto
        .widget-content.widget-content_gray
            vue-custom-scrollbar.scroll-area(
                style='max-height: 206px;'
                :settings="settings"
            )
                .widget__items
                    .widget__item.mb-1(
                        v-for='(item,i) in 5' :key='i'
                    )
                        .event-item.pr-6
                            .event-item__left
                                .event-item__date 14 мар 2021
                            .event-item__right
                                .event-item__title Лёд, Одинцово
                                .event-item__desc Собираемся размяться, забронировали лёд. Берите снарягу, горячий чай и друзей.
                                .avatars-block-top
                                    .avatars-block
                                        a.avatar-group-link(
                                            href='#'
                                            v-for='(item,i) in 5' :key='i'
                                        )
                                            v-avatar.avatar-group(
                                                size='24'
                                            )
                                                img(src="@/assets/images/avatar.png")
                                    .avatars-block-quant.ml-1 +19
                                    a(href='#').avatars-block-text.ml-1 все участники



        .widget-footer
            a(href='#').widget-footer__text
                |Открыть календарь

</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import DotsMenu from "@/components/DotsMenu";
    export default {
        name: "WidgetEvents",

        components: {
            DotsMenu,
            vueCustomScrollbar
        },
        data: () => ({
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false
            },
        }),
    }
</script>

<style scoped lang="scss">
    .event-item{
        display: flex;
        .avatars-block-text{
            font-size: 12px;
        }
        .avatars-block-quant{
            font-size: 12px;
            color: #000;
        }
    }

    .event-item__left{
        @include width-flex(20%)
    }

    .event-item__title{
        font-family: $FiraSansMedium;
        margin-bottom: 6px;
    }

    .event-item__desc{
        font-size: 12px;
        margin-bottom: 6px;
    }

    .event-item__date{
        font-size: 12px;
    }

</style>
