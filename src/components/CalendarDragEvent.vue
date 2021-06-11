<template lang="pug">
    .drag-event(:style="eventStyle")
        .drag-event-shadow
            .drag-event-time {{ time }}
            .drag-event-title {{ event.title }}
            .drag-event-desc {{ event.desc }}
            .drag-event-rating {{ event.rating }}
</template>

<script>
    import moment from 'moment'

    export default {
        name: "CalendarDragEvent",
        props: {
            event: {
                type: Object
            },
            base: {
                type: Number,
                default: 1
            },
            width: {
                type: Number
            },

        },
        data: function () {
            return {
                //
            }
        },
        computed: {
            eventStyle: function () {
                return {
                    //height: (this.base * this.event.duration) +'px',
                    top: this.convertTimeToOffset(this.event.start_time) + 'px',
                    left: ((this.width * (this.day - 1)) + 35) + 'px'
                };
            },

            time: function () {
                return moment(this.event.start_time).format('HH:mm');
            },
            day: function () {
                return moment(this.event.start_time).isoWeekday();
            },

        },
        methods: {
            convertTimeToOffset(time) {
                let momentJs = moment(time);
                let hour = momentJs.hour();
                let minute = momentJs.minute();
                return ((hour - 7) + minute/60) * this.base;
            },
        },
        mounted() {
            //console.log(this.$el.getBoundingClientRect().left)
        },
    }
</script>

<style lang="scss" scoped>
    .drag-event {
        background: #FFF5DD;
        position: absolute;
        overflow: hidden;
        cursor: pointer;
        width: calc((100% - 2.188rem) / 7);
        user-select: none;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.16);
        transition: all .1s;
        &-shadow {
            box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.16), inset 2px 0px 0px #FFBF26, inset 0px -1px 0px rgba(0, 0, 0, 0.16);
            padding: rem(8px) rem(10px);
        }
        &-flex {
            display: flex;
        }
        &-time {
            font-size: rem(12px);
            padding-bottom: rem(6px);
        }
        &-title {
            font-size: rem(12px);
            font-family: "Fira Sans Medium";
            &.ellipsis {
                text-overflow: ellipsis;
                width: calc(100% - 3.75rem);
                white-space: nowrap;
                overflow: hidden;
                padding-left: rem(5px);
                padding-right: rem(5px);
            }
        }
        &-rating {
            background: rgba(235, 173, 16, 0.2);
            border-radius: rem(4px);
            color: #9E7200;
            font-size: rem(10px);
            padding: rem(4px) rem(8px);
            display: inline-block;
            letter-spacing: 1px;
            text-transform: uppercase;
            &.fixed {
                position: absolute;
                right: rem(3px);
                top: rem(5px);
            }
        }
        &-desc {
            font-size: rem(12px);
            padding-top: rem(5px);
            padding-bottom: rem(10px);
        }
    }
</style>