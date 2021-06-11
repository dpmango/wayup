<template lang="pug">
.event(:style="eventStyle")
    template(v-if="event.duration < 1")
        .event-flex
            .event-time {{ time }}
            .event-title.ellipsis {{ event.name }}
    template(v-else-if="event.duration >= 1 && event.duration < 2")
        .event-time {{ time }}
        .event-title {{ event.name }}
        .event-rating.fixed {{ event.rating }}
    template(v-else-if="event.duration >= 2")
        .event-time {{ time }}
        .event-title {{ event.name }}
        .event-desc {{ event.type_of_preparation }}
        .event-rating {{ event.rating }}
</template>

<script>
    import moment from 'moment'

    export default {
        name: "CalendarEvent",
        props: {
            event: {
                type: Object
            },
            base: {
                type: Number,
                default: 1
            }
        },
        data: function () {
            return {
                isDraggable: false,
            }
        },
        computed: {
            eventStyle: function () {
                return {
                    height: (this.base * this.event.duration) +'px',
                    top: this.convertTimeToOffset(this.event.start_time) + 'px',
                    opacity: (this.isDraggable) ? 0.5 : 1
                }
            },
            time: function () {
                return moment(this.event.start_time).format('HH:mm');
            }
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

        },
    }
</script>

<style lang="scss" scoped>
    .event {
        background: #FFF5DD;
        box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.16), inset 2px 0px 0px #FFBF26, inset 0px -1px 0px rgba(0, 0, 0, 0.16);
        padding: rem(8px) rem(10px);
        position: absolute;
        overflow: hidden;
        cursor: pointer;
        width: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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