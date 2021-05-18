<template lang="pug">
div
    .block-flex.mb-6
        base-button(
            classAttr='button-default button-blue button-big mr-4'
            label="Обратиться к врачу"
        )
        base-button(
            classAttr='button-default button-gray button-big'
            label="Внести данные"
        )

    v-row
        v-col(md="7")
            WidgetMedical
        v-col(md="5")



</template>

<script>
    import WidgetMedical from "@/components/widgets/WidgetMedical";
    export default {
        name: "Medical",
        components: {
            WidgetMedical
        }
    }
</script>

<style scoped>

</style>