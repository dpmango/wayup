<template lang="pug">
    div
        v-item-group.d-flex.mb-6(mandatory)
            each val in [`В процессе <span class="segment-mun">2</span>`, 'Предстоящие <span class="segment-mun">4</span>', 'Закрытые <span class="segment-mun">4</span>']
                v-item(
                    v-slot='{ active, toggle }'
                )
                    base-segment(
                        classAttr='segment-default segment-big'
                        label=val
                        tag="div"
                        @click='toggle'
                    )
        AccordionHomework
</template>

<script>
    import AccordionHomework from "@/components/AccordionHomework.vue";

    export default {
        name: "Homework",
        components: {
            AccordionHomework
        },
    }
</script>

<style scoped>

</style>