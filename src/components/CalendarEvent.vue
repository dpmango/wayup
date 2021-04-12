<template lang="pug">
.event-wrap(:style="wrapStyle")
    .event(:style="eventStyle")
        template(v-if="event.length==1")
            .event-time {{ event.time }}
            .event-title {{ event.title }}
            .event-rating.fixed {{ event.rating }}
        template(v-else-if="event.length==0.5")
            .event-flex
                .event-time {{ event.time }}
                .event-title.ellipsis {{ event.title }}
                .event-rating.fixed {{ event.rating }}
        template(v-else-if="event.length==2")
            .event-time {{ event.time }}
            .event-title {{ event.title }}
            .event-desc {{ event.desc }}
            .event-rating {{ event.rating }}


</template>

<script>
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
        computed: {
            eventStyle: function () {
                return {
                    height: (this.base * this.event.length) +'px'
                }
            },
            wrapStyle: function () {
                return {
                    height: (this.event.length < 1) ? this.base +'px' : this.base * this.event.length +'px'
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .event {
        background: #FFF5DD;
        box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.16), inset 2px 0px 0px #FFBF26, inset 0px -1px 0px rgba(0, 0, 0, 0.16);
        padding: 8px 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        &-wrap {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        &-flex {
            display: flex;
        }
        &-time {
            font-size: 12px;
            padding-bottom: 6px;
         }
        &-title {
            font-size: 12px;
            font-family: "Fira Sans Medium";
            &.ellipsis {
                text-overflow: ellipsis;
                width: calc(100% - 60px);
                white-space: nowrap;
                overflow: hidden;
                padding-left: 5px;
                padding-right: 5px;
            }
        }
        &-rating {
            background: rgba(235, 173, 16, 0.2);
            border-radius: 4px;
            color: #9E7200;
            font-size: 10px;
            padding: 4px 8px;
            display: inline-block;
            letter-spacing: 1px;
            text-transform: uppercase;
            &.fixed {
                position: absolute;
                right: 3px;
                top: 5px;
            }
        }
        &-desc {
            font-size: 12px;
            padding-top: 5px;
            padding-bottom: 10px;
        }
    }
</style>