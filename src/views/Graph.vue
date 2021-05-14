<template lang="pug">
    v-row
        v-col(md='4')
            v-sparkline(
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
                width="100"
            )
                template( v-slot:label="item")
                    | {{ item.value }}
</template>

</template>

<script>
    export default {
        name: "Graph",
        data: () => ({
            width: 2,
            radius: 3,
            padding: 8,
            lineCap: 'round',
            //gradient: gradients[5],
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            gradientDirection: 'top',
            gradient: ['#FF2D2D', '#B57F2E', '#3DC50D', '#5FFF27'],
            fill: false,
            type: 'bar',
            autoLineWidth: false,
        }),
    }
</script>

<style scoped>

</style>