<template lang="pug">
    v-row
        v-col(
            md="10"
        )
            .exercises__block.mb-8
                AccordionEstimation

        v-col(
            md="2"
        )
            MarksBlock
</template>

<script>
    import MarksBlock from "@/components/elements/MarksBlock";
    import AccordionEstimation from "@/components/AccordionEstimation";

    export default {
        name: "Rating",
        components: {
            MarksBlock,
            AccordionEstimation
        },
    }
</script>

<style scoped lang="scss">

</style>