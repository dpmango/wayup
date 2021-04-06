<template lang="pug">
    .day
        div(:class="classObject")
            | {{ day.format('D') }}
        .event(v-if="isToday")
            .event-name Индивидуальное занятие длинное
            .event-time 16:00
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            day: {
                type: [Object, Array, Number]
            }
        },
        name: "CalendarDay",
        data: () => ({
            todayDay: moment().format("D"),
        }),
        computed: {
            isToday: function() {
                return (this.todayDay == this.day.format('D'));
            },
            classObject: function () {
                return {
                    'day-today': this.isToday,
                    'day-number': true
                };
            },
        },
    }
</script>

<style scoped lang="scss">
    .day {
        width: calc(100% / 7);
        position: relative;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 45px 12px 30px;
        height: 170px;
    }
    .day-number {
        position: absolute;
        right: 16px;
        top: 12px;
        &.day-today {
            width: 32px;
            height: 32px;
            display: flex;
            color: #ffffff;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: $red;
            top: 4px;
            right: 7px;
        }
    }
    .event{
        display: flex;
        align-items: center;
        margin-bottom: 15px;

    }
    .event-name{
        max-width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        overflow: hidden;
    }

    .event-time{
        width: 20%;
        font-size: 12px;
        color: rgba(0, 0, 0, .4);
        margin-left: auto;
    }

</style>