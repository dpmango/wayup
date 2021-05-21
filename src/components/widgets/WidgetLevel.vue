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
        )
          v-item(
            v-slot='{ active, toggle }'
            v-for="val in periods"
            :key="val"

          )
            div
              base-segment(
                classAttr='segment-default segment-small'
                :label="val"
                tag="div"
                @click="toggle"
                @select="changePeriod($event)"
              )
    .widget-content
      v-row
        v-col(sm="3")
          .legend(v-if="maxMinValue")
            .legend-label 1.01.21 — 7.01.21
            .legend-val {{ maxMinValue }}
              span У.М.
          .legend(v-if="middleValue")
            .legend-label Среднее
            .legend-val {{ middleValue }}
              span У.М.
          .legend(v-if="lastValue")
            .legend-label Последнее
            .legend-val {{ lastValue }}
              span У.М.
        v-col(sm="9")
          .maps-goal__wrap
            .chart-container
              canvas(id="levelChart" width="400" height="400")
</template>

<script>
	import {Chart, registerables} from 'chart.js';

	Chart.register(...registerables);

	export default {
		name: "WidgetLevel",
		data: () => ({
			periods: ['Ч', 'Д', 'Н', 'М'],
			period: [0],
			currentPeriod: 'Ч',
			canvas: document.getElementById('levelChart'),
			chart: null,
      maxMinValue: '',
      middleValue: '',
      lastValue: ''

		}),
		props: {
			title: {
				type: String,
				required: false,
				default: 'Уровень нагрузки'
			},
			data: {
				type: Array,
				required: true
			}
		},
		computed: {
			dataHours: function () {
				return this.data.filter(item => item.period == "hour")[0];
			},
			dataDay: function () {
				return this.data.filter(item => item.period == "day")[0];
			},
			dataWeek: function () {
				return this.data.filter(item => item.period == "week")[0];
			},
			dataMonth: function () {
				return this.data.filter(item => item.period == "month")[0];
			},

		},
		methods: {
			getLegend(chartDate) {
				let flatArray = [].concat(...chartDate);
				let last = chartDate[chartDate.length - 1];
				let sum = flatArray.reduce((accumulator, currentValue) => accumulator + currentValue);
				this.maxMinValue =  Math.round(Math.min(...flatArray)) + '–' + Math.round(Math.max(...flatArray));
        this.middleValue = Math.round(sum/flatArray.length);
				this.lastValue = Math.round((last[0] + last[1])/2);
      },
			changePeriod(period) {
				this.currentPeriod = period;
				let chartData = [];
				let labels = [];
				switch (this.currentPeriod) {
					case 'Ч':
						chartData = this.dataHours.chartData;
						labels = this.getLabelsHour();
						break;
					case 'Д':
						chartData = this.dataDay.chartData;
						labels = this.getLabelsDay();
						break;
					case 'Н':
						chartData = this.dataWeek.chartData;
						labels = this.getLabelsWeek(chartData);
						break;
					case 'М':
						chartData = this.dataMonth.chartData;
						labels = this.getLabelsMonth();
						break;
				}
				this.getLegend(chartData);
				this.period = [this.periods.indexOf(period)];
				this.chart.data.labels = labels;
				this.chart.data.datasets.data = chartData;

				this.chart.options.scales.x.ticks.callback = function (val, index, values) {
					if (period == 'Н') {
						if (index % Math.trunc(values.length / 7) === 0) {
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
			getLabelsWeek(data) {
				let labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
				let out = [];
				let index = Math.trunc(data.length / 7);
				for (let i = 0; i < data.length; i++) {
					let j = Math.trunc(i / index);
					out.push(labels[j]);
				}
				return out;
			},
			getLabelsHour() {
				return ['0', '10 мин', '20 мин', '30 мин', '40 мин', '50 мин', '60 мин'];
			},
			getLabelsDay() {
				return ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
			},
			getLabelsMonth() {
				let out = [];
				for (let i = 0; i < 31; i++) {
					out.push(i + ' май');
				}
				return out;
			}
		}
		,
		mounted() {

			let chartData = this.dataWeek.chartData;
			this.getLegend(chartData);
			let labels = this.getLabelsHour();
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
							data: chartData,
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
								callback: function (val, index, values) {
									if (curPeriod == 'Н') {
										if (index % Math.trunc(values.length / 7) === 0) {
											return labels[index];
										} else {
											return '';
										}
									} else {
										//console.log(val);
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
  .legend {
    padding-bottom: 15px;

    &-label {
      font-size: 12px;
      color: rgba(0, 0, 0, .5);
      padding-bottom: 5px;
    }

    &-val {
      font-family: "Fira Sans Bold";
      font-size: 20px;

      span {
        font-family: "Fira Sans Regular";
        font-size: 12px;
        padding-left: 5px;
      }
    }
  }

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
