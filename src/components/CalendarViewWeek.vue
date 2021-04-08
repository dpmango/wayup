<template lang="pug">
    .calendar-wrap
        .head-calendar
            .calendar-title
                .month-title Февраль
                .year-title 2021
                .week-title неделя 31
            .circle-block
                .circle-item
                    .circle-title Макроцикл
                    base-select-mini(label='Выбрать цикл' classAttr='select-base custom-select_mini')
                .circle-item
                    .circle-title Мезоцикл
                    base-select-mini(label='Выбрать цикл' classAttr='select-base custom-select_mini')
                .circle-item
                    .circle-title Макроцикл
                    base-select-mini(label='Выбрать цикл' classAttr='select-base custom-select_mini')
        .calendar
            .weeks
                .week-day(v-for='weekDay in weekDays' :key='weekDay')
                    | {{ weekDay }}

</template>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "CalendarViewWeek",
        data: function () {
            return {
                weekDays: moment.weekdaysShort(true),
            }},
    }
</script>

<style lang="scss" scoped>
    .month-title{
        font-size: 24px;
        font-family: $FiraSansMedium;
        margin-right: 10px;
        text-transform: capitalize;
    }
    .year-title{
        font-size: 24px;
    }

    .head-calendar{
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .circle-item{
        display: flex;
        align-items: center;
        margin-right: 20px;
        &:after{
            content: '';
            @include background-contain('arrow-down.svg')
            opacity: 0.56;
            width: 14px;
            height: 14px;
            transform: rotate(-90deg);
            margin-left: 4px;
        }
        &:last-child{
            margin-right: 0;
            &:after {
                display: none;
            }
        }
    }

    .circle-block{
        display: flex;
        align-items: center;
        margin-right: -12px;
    }
    .circle-title {
        margin-right: 4px;
        font-size: 14px;
        color: $gray;
    }
    .calendar-title{
        display: flex;
        align-items: flex-end;

    }
    .head-calendar{
        border-bottom: 2px solid rgba(34, 34, 34, 0.16);
        margin-bottom: 22px;
    }

    .calendar {
        width: 100%;
    }

    .month {
        padding: 20px;
        text-align: center;
        font-size: 1.5rem;
    }

    .week-title {
        font-size: 18px;
        color: #000;
        opacity: .4;
        padding-left: 8px;
    }

    .weeks {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        flex-wrap: wrap;
    }

    .week-day {
        width: 100px;
        flex-grow: 1;
        padding: 10px;
        text-align: left;
        font-size: 14px;
    }

</style>