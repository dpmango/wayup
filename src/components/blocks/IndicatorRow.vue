<template lang="pug">
    v-layout(class="justify-space-between flex-wrap")
        .indicator(v-for="item in items")
            .indicator-value {{ item.value }}
            .indicator-title {{ item.title }}
</template>

<script>
    export default {
        name: "IndicatorRow",
        data: () => ({
            items: [
                {
                    title: 'Количество игр',
                    value: '10'
                },
                {
                    title: 'Время на площадке',
                    value: '367'
                },
                {
                    title: 'Надежность',
                    value: '1.66'
                },
                {
                    title: 'Отраженных бросков',
                    value: '89%'
                },
                {
                    title: 'Бросков в створ',
                    value: '351'
                }
            ]
        }),
    }
</script>

<style scoped lang="scss">
    .indicator {
        padding-left: 20px;
        position: relative;
        margin: 10px 0;
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            background: $blue;
        }
        &-value {
            font-size: rem(40px);
            font-weight: 600;
        }
    }
</style>