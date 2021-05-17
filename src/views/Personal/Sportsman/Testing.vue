<template lang="pug">
    v-row
        v-col(
            md="8"
        )
            .exercises__block.mb-8
                .h5.mb-4 Упражнения из Федерального стандарта
                AccordionExercises
            .exercises__block.mb-8
                .h5.mb-4 Дополнительные упражнения
                AccordionExercises

        v-col(
            md="4"
        )
            info-block.align-start(
                text=`Вы хорошо поработали после предыдущей оценки. Обязательно проведите работу над ошибками, чтобы улучшить показатели к следующей оценке.
                  <span class="d-block mt-5">Не забудьте отметить самочувствие.</span>`)
                slot
                    template
                        .target-icon
                            div 💬

</template>

<script>
    import AccordionExercises from "@/components/AccordionExercises";
    export default {
        name: "Testing",
        components: {
            AccordionExercises
        },
    }
</script>

<style scoped lang="scss">

</style>