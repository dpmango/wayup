<template lang="pug">
    .widget
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title Уровень нагрузки
                v-item-group.d-flex.ml-4.mb-0(
                    mandatory
                    v-model = "period"
                    multiple
                    )
                        v-item(
                            v-slot='{ active, toggle }'
                            v-for="val in periods"

                        )

                            base-segment(
                                classAttr='segment-default segment-small'
                                :label="val"
                                tag="div"
                                @click="toggle"
                                @select="changePeriod($event)"
                            )
        .widget-content
            .maps-goal__wrap
                .chart-container
                    canvas(id="levelChart" width="400" height="400")
</template>

<script>
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);

export default {
    name: "WidgetLevel",
    data: () => ({
        periods: ['Ч', 'Д', 'Н', 'М'],
        period: [2],
        currentPeriod: 'Н',
        canvas: document.getElementById('levelChart'),
        chart: null
    }),
    methods: {
        changePeriod(period) {
            this.currentPeriod = period;
            let randomData = [];
            let labels = [];
            switch(this.currentPeriod) {
                case 'Ч':
                    randomData = this.getRandomData(7);
                    labels = this.getLabelsHour();
                    break;
                case 'Д':
                    randomData = this.getRandomData(14);
                    labels = this.getLabelsDay();
                    break;
                case 'Н':
                    randomData = this.getRandomData(35);
                    labels = this.getLabelsWeek(randomData);
                    break;
                case 'М':
                    randomData = this.getRandomData(30);
                    labels = this.getLabelsMonth();
                    break;
            }

            this.period = [this.periods.indexOf(period)];
            this.chart.data.labels = labels;
            this.chart.data.datasets.data = randomData;

            this.chart.options.scales.x.ticks.callback = function(val, index, values) {
                if(period == 'Н') {
                    if(index % Math.trunc(values.length / 7) === 0) {
                        return labels[index];
                    } else {
                        return '';
                    }
                } else {
                    return labels[index];
                }

            }
            this.chart.update();
        },
      getMinValue() {
          return Math.random() * 20 + 50;
      },
        getMaxValue() {
            return Math.random() * 78 + 100;
        },
        getRandomData(count) {
          let out = [];
          for(let i = 0; i < count; i++) {
              out.push([this.getMinValue(), this.getMaxValue()]);
          }
          return out;
        },
        getLabelsWeek(data) {
          let labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
          let out = [];
          let index = Math.trunc(data.length / 7);
            for(let i = 0; i < data.length; i++) {
                let j = Math.trunc(i/index);
                out.push(labels[j]);
            }
            return out;
        },
        getLabelsHour() {
            return ['0', '10 мин', '20 мин', '30 мин', '40 мин', '50 мин', '60 мин'];
        },
        getLabelsDay() {
            return ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00','16:00','17:00','18:00','19:00','20:00', '21:00'];
        },
        getLabelsMonth() {
            let out = [];
            for(let i = 0; i < 31; i++) {
                out.push(i + ' май');
            }
            return out;
        }
    },
    mounted () {
        let randomData = this.getRandomData(35);
        let labels = this.getLabelsWeek(randomData);
        let curPeriod = this.currentPeriod;
        let canvas = document.getElementById('levelChart');
        let context = canvas.getContext("2d");
        // Создаем градиент
        let gradientStroke = context.createLinearGradient(0, 0, 0, 180);
        gradientStroke.addColorStop(0, "red");
        gradientStroke.addColorStop(.45, "#B57F2E");
        gradientStroke.addColorStop(.65, "#3DC50D");
        gradientStroke.addColorStop(1, "#5FFF27");

        this.chart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: randomData,
                        backgroundColor: gradientStroke,
                        borderRadius: 5,
                        borderSkipped: false,
                    },
                    ]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },

                scales: {
                    y: {
                        beginAtZero: false,
                        min: 20,
                        max: 220,
                        ticks: {
                            stepSize: 40
                        },
                        position: 'right'
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            callback: function(val, index, values) {
                                if(curPeriod == 'Н') {
                                    if(index % Math.trunc(values.length / 7) === 0) {
                                        return labels[index];
                                    } else {
                                        return '';
                                    }
                                } else {
                                    console.log(val);
                                    return labels[index];
                                }
                            },
                            maxRotation: 0,
                        }
                    },
                }
            }
        });
    }
}
</script>

<style scoped lang="scss">
    .segment-default {
        min-width: 40px !important;
    }
    .chart-container {
        height: 180px;
    }
    .widget-header {
        overflow: hidden;
    }
</style>