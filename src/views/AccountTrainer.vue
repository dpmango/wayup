<template lang="pug">
    div
        v-row
            v-col(
                md='10'
            )
                v-tabs()
                    v-tab(to="/account-trainer/main")
                        | Общая информация
                    v-tab(to="/account-trainer/stat")
                        | Статистика
                v-tabs-items
                    router-view
</template>

<script>
    export default {
        name: "AccountTrainer"
    }
</script>

<style scoped>

</style>