<template lang="pug">
    .widget.widget-form
        img.drag-icon(
            src="@/assets/images/svg/more-icon.svg"
        )
        .form-player__right
            img.form-player__img.mb-6(
                src="@/assets/images/form-img.jpeg"
            )
            base-button(
                classAttr='button-default button-gray button-small'
                label="Обновить форму"
            )
        .form-player__left
            .form-player__desc-block
                .title-small Фамилия для свитера
                .form-player__name Bryzgalov
            .form-player__desc-block
                .title-small Номер
                .form-player__num 89
            .form-player__desc-block.d-flex
                .form-player__desc-block_part.mr-4
                    .title-small Позиция на льду
                    .text-middle.mb-1 Вратарь
                    .form-player__desc-status Goaltender
                .form-player__desc-block_part
                    .title-small Хват
                    .text-middle Л
            .form-player__desc-block
                .title-small Клуб
                .text-middle Boston Hockey Academy (USA)


</template>

<script>
    export default {
        name: "WidgetFormPlayer"
    }
</script>

<style scoped lang="scss">

    .widget-form{
        padding: 24px 32px;
        position: relative;
        display: flex;
        .drag-icon{
            position: absolute;
            left: 12px;
            top: 18px;
        }
    }

    .form-player__right{
        @include width-flex(150px)
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-player__left{
        padding-left: 26px;
        @include width-flex(calc(100% - 150px))

    }

    .form-player__desc-block{
        margin-bottom: 16px;
    }
    .form-player__desc-status{
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #798CBD;
    }
    .title-small{
        margin-bottom: 6px;
    }
</style>
