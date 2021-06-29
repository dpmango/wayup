<template lang="pug">
  .widget
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/svg/more-icon.svg"
        )
        .widget-header__title {{ title }}
        base-switch.ml-11(
          label='Среднее за неделю'
        )

        .nav-slider.ml-auto
          .nav-arrow()
            svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M9 4L5 8L9 12' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
          .nav-slider__text Текущая неделя
          .nav-arrow()
            svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M7 4L11 8L7 12' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
        DotsMenu.mt-0.position-static.ml-5


    .widget-content
      .level-week__wrap
        .chart-container
          canvas(id="levelChart00" width="400" height="400")
</template>

<script>
  import {Chart, registerables} from 'chart.js';
  import axios from "axios";
  import {API_URL_GRAF} from "../../config/api";

  Chart.register(...registerables);

  import DotsMenu from "@/components/DotsMenu";

  export default {
    name: "WidgetLevelWeek",
    components: {
      DotsMenu
    },
    data: () => ({
      yLabels: {
        0: 'Отдых',
        3: 'Легко',
        6: 'Нормально',
        10: 'Тяжело',
      },
      chart: null,

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

    methods: {
      draw(data) {
        let canvas = document.getElementById('levelChart00');
        let context = canvas.getContext("2d");
        let yLabels = this.yLabels;

        let gradientStroke = context.createLinearGradient(0, 0, 0, 180);
        gradientStroke.addColorStop(0, "red");
        gradientStroke.addColorStop(.45, "#B57F2E");
        gradientStroke.addColorStop(.65, "#3DC50D");
        gradientStroke.addColorStop(1, "#5FFF27");

        this.chart = new Chart(canvas, {
          type: 'bar',
          data: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            datasets: [
              {
                data: data,
                backgroundColor: gradientStroke,
                borderRadius: {
                  topLeft: 5,
                  topRight: 5
                },
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
                min: 0,
                max: 10,
                ticks: {
                  stepSize: 3,
                  callback: function (val) {
                    if(yLabels[val]) {
                      return yLabels[val];
                    }
                    return ' ';
                  },
                  maxRotation: 0,
                }
              },
            }
          }
        });
      }
    },

    mounted() {
      var self = this;
      axios.get(API_URL_GRAF + '/events/load/', {
        headers: {
          'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then((response) => {
        self.draw(response.data)
      });

    }
  }
</script>

<style scoped lang="scss">
  .widget-content {
    background: #F8F9FB;
  }

  .widget-header {
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    position: relative;
  }

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
