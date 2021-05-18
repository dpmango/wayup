<template lang="pug">
    .widget
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title Сообщения из чата
                DotsMenu.mt-0.position-static.ml-auto
        .widget-content.widget-content_gray
            vue-custom-scrollbar.scroll-area(
                style='max-height: 206px;'
                :settings="settings"
            )
                .message-item.mb-4(
                    v-for='(item,i) in 5' :key='i'
                )
                    v-badge(bordered='' dot bottom='' color='#3DC50D'  offset-x='10' offset-y='10')
                        v-avatar.avatar-player(
                            size='48'
                        )
                            img(src="@/assets/images/avatar.png")
                    .message-item__right
                        .message-item__right-name Артём Молотовилов
                        .message-item__right-mess
                            .message-item__right-nick Вы:
                            .message-item__right-text Вот не уверен, что такая история Вот не уверен, что такая история Вот не уверен, что такая история
                            .message-item__right-time 1ч



        .widget-footer
            a(href='#').widget-footer__text
                |Открыть чат

</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import DotsMenu from "@/components/DotsMenu";
    export default {
        name: "WidgetChatMessage",

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


    .message-item{
        display: flex;
        align-items: center;
    }

    .message-item__right{
        margin-left: 16px;
        @include width-flex(calc(100% - 64px))
    }

    .message-item__right-name{
        font-family: $FiraSansMedium;
        margin-bottom: 8px;
    }

    .message-item__right-mess{
        display: flex;
        align-items: center;
    }

    .message-item__right-nick{
        @include width-flex(30px)
        font-size: 14px;
        color: rgba(0, 0, 0, .6);

    }

    .message-item__right-text{
        //@include width-flex(80%)
        max-width: calc(90% - 30px);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;


    }

    .message-item__right-time{
        @include width-flex(10%)
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 14px;
        color: rgba(0, 0, 0, .6);

        &:before{
            content: '';
            background: #000;
            @include width-flex(5px)
            height: 5px;
            border-radius: 50%;
            margin-right: 12px;
        }

    }

</style>
