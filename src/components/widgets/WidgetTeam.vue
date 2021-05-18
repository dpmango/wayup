<template lang="pug">
    .widget.widget-team
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title Команда
                v-item-group.d-flex.ml-4(mandatory)
                    each val in ['Вратари', 'Защитники', 'Нападающие']
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
                    .statistic-td.first Игрок
                    .statistic-td GP↑
                    .statistic-td GAA
                    .statistic-td SV%
                    .statistic-td


        .widget-content.widget-content_gray
            vue-custom-scrollbar(
                style='max-height: 208px;'
                :settings='settings'
            )
                .statistic-season__body
                    .widget__item.mb-1(
                        v-for='(item,i) in 7' :key='i'
                    )
                        .statistic-td.first.d-flex.align-center
                            v-avatar.avatar-player(
                                size='32'
                            )
                                img(src="@/assets/images/avatar.png")
                            .team-player__name Даниил Брызгалов


                            base-badge.ml-4(
                                label="#89"
                                background="#F1F3F9"
                                textColor="#000000"
                            )
                        .statistic-td 30
                        .statistic-td 2.43
                        .statistic-td -
                        .statistic-td
                            dots-menu.dots-black.mt-0.position-static

</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import DotsMenu from "@/components/DotsMenu";
    export default {
        name: "WidgetTeam",
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

    .team-player__name{
        font-size: 12px;
        color: $blue;
    }

    .avatar-player{
        margin-right: 16px;
    }

    .statistic-td.first{
        @include width-flex(48%)
        text-align: left;
    }
    .statistic-td{
        @include width-flex(13%)
        text-align: center;
    }

</style>
