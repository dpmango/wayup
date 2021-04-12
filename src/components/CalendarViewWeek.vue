<template lang="pug">
    .calendar-wrap
        .head-calendar
            .calendar-title
                .month-title {{ month }}
                .year-title {{ yearNumber }}
                .weeks-title неделя {{ weekNumber }}
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
                .hours-time
                .weeks-day(v-for='(weekDay, index) in weekDays' :key='weekDay')
                    span(:class="{ weeksActive: isCurrentDay(index) }")
                        | {{ weekDay }} {{ getDayNumber(index) }}
            .hours
                .hours-time
                    .hours-time-item(v-for="m in 12") {{ 7 + m }}.00
                .hours-col(v-for="n in 7" :class="{ hoursDisable: (n == 6 || n == 7) }")
                        template(v-for="day in dayItems(n)")
                            .hours-item(v-if="!day.isEvent")
                                base-button(label='+' classAttr='custom-button button-icon add-event')
                            CalendarEvent(v-else :event="day" :base="heightHourCeil")
                .base-linetime(:style="baseLineStyle")
                    .base-linetime-label {{ currentTime }}
                    .base-linetime-round(:style="baseLineRoundStyle")
</template>

<script>
    import moment from 'moment'
    import CalendarEvent from "@/components/CalendarEvent";

    export default {
        name: "CalendarViewWeek",
        props: {
            initDay: {
                type: Date
            }
        },
        components: { CalendarEvent },
        data: function () {
            return {
                weekDays: moment.weekdaysShort(true),
                heightHourCeil: 64,
                currentMoment: moment().toDate(),
                schedule: {
                    1: {
                        13: {
                            time: '13:00',
                            title: 'Индивидуальное занятия, ССМ-2, План 2',
                            length: 0.5,
                            desc: 'Аэробная выносливость',
                            rating: '5 / 10',
                            isEvent: true
                        }
                    },
                    3: {
                        9: {
                            time: '09:00',
                            title: 'Индивидуальное занятия, ССМ-2, План 2',
                            length: 2,
                            desc: 'Аэробная выносливость',
                            rating: 'Нормально 5 / 10',
                            isEvent: true
                        }
                    },
                    4: {
                        12: {
                            time: '12:00',
                            title: 'Индивидуальное занятия, ССМ-2, План 2',
                            length: 1,
                            desc: 'Аэробная выносливость',
                            rating: '5 / 10',
                            isEvent: true
                        }
                    },
                }
            }
        },
        computed: {
            startWeek: function () {
                return moment(this.initDay).startOf('week');
            },
            endWeek: function () {
                return moment(this.initDay).endOf('week');
            },
            weekNumber: function () {
                return moment(this.initDay).week();
            },
            yearNumber: function () {
                return moment(this.initDay).year();
            },
            month: function () {
                return moment(this.initDay).format('MMMM');
            },
            currentTime: function () {
                return moment(this.currentMoment).format('H:mm:ss');
            },
            baseLineStyle: function () {
                let currentHour = moment(this.currentMoment).hour();
                let currentMinute = moment(this.currentMoment).minute();
                let heughtHour = ((currentMinute / 60) * 64);
                return {
                    top: `${(currentHour - 7) * this.heightHourCeil + heughtHour}px`,
                    display: (currentHour >= 19 || currentHour < 7) ? 'none' : 'block'
                }
            },
            baseLineRoundStyle: function () {
                let dayCol = moment().day() - 1;
                return {
                    left: `calc(((100% - 35px) / 7) * ${dayCol} + 35px)`
                }
            }
        },
        methods: {
            getDayNumber(n) {
                let start = this.startWeek.toDate();
                return moment(start).add(n, 'd').format('D');
            },
            isCurrentDay(n) {
                if (moment(this.initDay).format('M') == moment().format('M')) {
                    return (this.getDayNumber(n) == moment().format('D'))
                }
                return false;
            },
            setCurrentMoment() {
                setInterval(function () {
                    this.currentMoment = moment().toDate();
                }.bind(this), 60000);

            },
            getEvent(n, m) {
                if(this.schedule[n] && this.schedule[n][m]) {
                    return this.schedule[n][m];
                }
                return false
            },
            dayItems(n) {
                let out = [];
                for(let m = 1; m <= 12; m++) {
                    let event = this.getEvent(n, 7 + m);
                    if(event) {
                        out.push(event);
                        if(event.length > 1) m = m + (event.length -1);
                    } else {
                        out.push({isEvent: false})
                    }
                }

                return out;

            }

        },
        mounted() {
            this.setCurrentMoment();
        }
    }
</script>

<style lang="scss" scoped>
    .add-event {
        display: none;
        position: absolute;
        top: 4px;
        left: 4px;
    }

    .base-linetime {
        position: absolute;
        top: 340px;
        width: 100%;
        display: flex;
        justify-content: center;
        transform: translateY(-50%);
        height: 1px;
        transition: all .4s;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(255, 20, 20, 0.6);
            top: 50%;
        }

        &-label {
            position: absolute;
            left: -4px;
            color: #A12238;
            font-size: 10px;
            background: #fff;
            border: 1px solid rgba(255, 20, 20, 0.9);
            border-radius: 4px;
            padding: 3px 4px 2px;
            transform: translateY(-50%);
            z-index: 1;
        }

        &-round {
            width: 8px;
            height: 8px;
            background: rgba(255, 20, 20, 0.9);
            border-radius: 100%;
            position: absolute;
            top: -3px;
            transform: translateX(-5px);
        }
    }

    .hours {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        position: relative;

        &-time {
            width: 35px;

            &-item {
                font-weight: 400;
                font-size: 12px;
                height: 64px;
                display: flex;
                align-items: flex-end;
            }
        }

        &-col {
            width: calc((100% - 35px) / 7);
            position: relative;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
        }

        &-item {
            height: 64px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            position: relative;
            cursor: pointer;

            &:hover .add-event {
                display: block;
            }
        }
    }

    .hoursDisable {
        background: rgba(121, 140, 189, 0.05);
    }

    .weeks {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        flex-wrap: wrap;

        &-day {
            width: calc((100% - 35px) / 7);
            flex-grow: 1;
            padding: 10px;
            text-align: left;
            font-size: 14px;
        }

        &-title {
            font-size: 18px;
            color: #000;
            opacity: .4;
            padding-left: 8px;
        }
    }

    .weeksActive {
        background: #EC4865;
        color: #fff;
        border-radius: 4px;
        padding: 2px 6px;
    }

    .month-title {
        font-size: 24px;
        font-family: $FiraSansMedium;
        margin-right: 10px;
        text-transform: capitalize;
    }

    .year-title {
        font-size: 24px;
    }

    .head-calendar {
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .circle-item {
        display: flex;
        align-items: center;
        margin-right: 20px;

        &:after {
            content: '';
            @include background-contain('arrow-down.svg')
            opacity: 0.56;
            width: 14px;
            height: 14px;
            transform: rotate(-90deg);
            margin-left: 4px;
        }

        &:last-child {
            margin-right: 0;

            &:after {
                display: none;
            }
        }
    }

    .circle-block {
        display: flex;
        align-items: center;
        margin-right: -12px;
    }

    .circle-title {
        margin-right: 4px;
        font-size: 14px;
        color: $gray;
    }

    .calendar-title {
        display: flex;
        align-items: flex-end;

    }

    .head-calendar {
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

</style>