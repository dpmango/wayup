<template lang="pug">
    .widget
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title Уровень нагрузки
                v-item-group.d-flex.ml-auto.mb-0(mandatory)
                    each val in ['Ч', 'Д', 'Н', 'М']
                        v-item(
                            v-slot='{ active, toggle }'
                        )
                            base-segment(
                                classAttr='segment-default segment-small'
                                label=val
                                tag="div"
                                @click='toggle'
                            )
        .widget-content
            .maps-goal__wrap
                Graph
</template>

<script>
export default {
name: "WidgetLevel"
}
</script>

<style scoped>

</style>