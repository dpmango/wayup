<template lang="pug">
    div(:class="classObjectDay")
        div(:class="classObject")
               template(v-if="day.format('D') == 1")
                |  {{ day.format('D MMMM') }}
               template(v-else)
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
            },
            series: {
                type: Array
            }
        },
        name: "CalendarDay",
        data: () => ({
            todayDay: moment().format("D"),
            todayMonth: moment().format("M"),
            isHover: false
        }),
        computed: {
            isToday: function() {
                return (moment().format("DD-MM-YYYY") == this.day.format('DD-MM-YYYY') && this.day.format('D') !== 1);
            },
            isCurrentMonth: function() {
                return (this.todayMonth == this.day.format('M'));
            },
            isWeekend: function() {
                return (this.day.day() == 0 || this.day.day() == 6)
            },
            classObject: function () {
                return {
                    'day-today' : this.isToday,
                    'day-number': true,
                };
            },
            classObjectDay: function() {
               return {
                   'day' : true,
                   'gray': this.isWeekend,
                   'disable' : !this.isCurrentMonth,
                   'dark'    : this.isHover
               }
            }
        },
        methods: {
            backlightDay: function() {
                if(this.series.includes(this.day.format('DD MM YYYY'))) {
                    this.isHover = true;
                }
            },
            notBacklightDay: function() {
                this.isHover = false;
            }
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
        transition: all .4s;
        &.gray {
         background: rgba(121, 140, 189, 0.05);
        }
        &.disable {
            color: rgba(0,0,0, .5);
        }
        &.dark {
            background: rgba(50, 107, 255, 0.1)
        }
    }
    .day-number {
        position: absolute;
        right: 16px;
        top: 16px;
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