<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        .widget-header__title 📊 Таймлайн, отображающий стаж и события
    .widget-content
      // timeline component
      //- .dev-log {{workplaces}} {{educations}}

      .timeline
        .timeline__events
          .timeline__events-row(v-for="ev in events" :key="ev.id")
            .timeline__event(v-for="event in ev.events" top :key="event.id" v-tooltip="event.title" :style="{left: event.left, width: event.width}")

        .timeline__baseline

        .timeline__dates
          .timeline__date(v-for="(key) in dateKeys" :key="key" :style="getDateStyle(key)")
            span {{getDateLabel(key)}}


</template>

<script>
import moment from 'moment';

export default {
  name: 'WidgetTrainerTimeline',
  components: {},
  props: {
    workplaces: Array,
    educations: Array,
  },
  data() {
    return {};
  },
  computed: {
    dates() {
      const workplaces = this.workplaces;
      const educations = this.educations;

      const years = [];

      [...workplaces, ...educations].forEach((x) => {
        const dateStart = moment(x.dateStart);
        const dateEnd = moment(x.dateEnd);

        years.push(parseInt(dateStart.format('YYYY')));
        years.push(parseInt(dateEnd.format('YYYY')));
      });

      // unique array and sort ASC
      return [...new Set(years)].sort((a, b) => a - b);
    },
    dateKeys() {
      let dates = this.datesDistance.yearsDiff

      return [...Array(dates || 1).keys()]
    },
    datesDistance() {
      const { min, max } = this.dates.reduce(
        ({ min, max }, v) => ({
          min: min < v ? min : v,
          max: max > v ? max : v,
        }),
        { min: this.dates[0], max: this.dates[0] }
      );

      return {
        yearMin: min,
        yearMax: max,
        yearsDiff: max - min,
      };
    },
    events() {
      const workplaces = this.workplaces;
      const educations = this.educations;
      const { yearMin, yearsDiff } = this.datesDistance;

      const getStyle = ({ dateStart, dateEnd }) => {
        const yearStart = parseInt(moment(dateStart).format('YYYY'));
        const yearEnd = parseInt(moment(dateEnd).format('YYYY'));

        const index = this.dateKeys.findIndex((x) => yearStart === yearMin + x);
        const duration = Math.abs(yearStart - yearEnd);

        const left = (index / yearsDiff) * 100;
        const width = (duration / yearsDiff) * 100;

        return {
          left: `${left}%`,
          width: `${width}%`,
          debug: `${yearStart} - ${yearEnd}`,
        };
      };

      const mapperFunction = (x) => {
        const { left, width, debug } = getStyle(x);

        return {
          id: x.id,
          left,
          width,
          debug,
          title: debug
        };
      };

      return [
        {
          id: 'workplaces',
          events: workplaces.map((x) => {
            return {
              ...mapperFunction(x),
              ...{
                title: `📆 ${x.employer} ${x.position} : ${x.responsibilities}`,
              },
            };
          }),
        },
        {
          id: 'educations',
          events: educations.map((x) => {
            return {
              ...mapperFunction(x),
              ...{
                title: `📆 ${x.title} : ${x.refresherCourses}`,
              },
            };
          }),
        },
      ];
    },
  },
  methods: {
    getDateStyle(key) {
      const rule = 1 / this.datesDistance.yearsDiff;
      // TODO - dynamic width for most recent ?

      return { width: `${rule * 100}%` };
    },
    getDateLabel(key) {
      const { dates, datesDistance } = this;
      if (key + 1 === datesDistance.yearsDiff) return 'По настоящее время';

      return dates.includes(datesDistance.yearMin + key) ? dates.find((x) => x === datesDistance.yearMin + key) : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.widget-header {
  padding: 24px 32px 20px;
}

.widget-header__title {
  font-size: 20px;
}

.widget-content {
  padding: 0 32px 62px;
}

.timeline {
  &__events {
    padding-top: 16px;
    display: flex;
    flex-direction: column;
  }
  &__events-row {
    position: relative;
    margin-bottom: 16px;
    min-height: 18px;
    display: flex;
    &:nth-child(2) {
      .timeline__event {
        &::before,
        &::after {
          height: 14px;
        }
      }
    }
  }
  &__event {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    background: rgba(50, 107, 255, 0.2);
    border-radius: 4px;
    height: 18px;
    &::before,
    &::after {
      display: inline-block;
      content: ' ';
      position: absolute;
      top: 100%;
      width: 4px;
      height: 48px;
      background: url('~@/assets/images/svg/timeline-indicator.svg') center bottom no-repeat;
      background-size: cover;
      background-position: center bottom;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }

  &__baseline {
    height: 6px;
    background: #326bff;
    border-radius: 3px;
  }
  &__dates {
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
  }
  &__date {
    font-size: 16px;
    line-height: 24px;
    color: #7c86a4;
  }
}
</style>
