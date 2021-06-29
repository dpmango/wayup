<template lang="pug">
  .widget
    .widget-empty-image.d-none.d-sm-none.d-md-flex(v-if="!(dataChart && dataChart.length)")
    .widget-header
      .widget-header__top
        img.drag-icon.mr-3(
          src="@/assets/images/general-progress-icon.png"
        )
        .widget-header__title {{ title }}
        v-item-group.d-flex.ml-auto.mb-0(mandatory v-if="dataChart && dataChart.length")
          v-item(
            v-slot='{ active, toggle }'
            v-for='(val,index) in types'
            :key='val'

          )
            div
              base-segment(
                classAttr='segment-default segment-small'
                :label="val"
                tag="div"
                @click='toggle'
                @select="changeChart(index)"
              )
    .widget-content
      v-row(v-if="dataChart && dataChart.length")
        v-col(sm="9")
          .chart-container
            #generalProgressChart( style="height:200px;")
        v-col(sm="3")
          .legend
            .legend-round(:style="{ background: currentColor}")
            .legend-val Текущие показатели
          .legend
            .legend-round(:style="{ background: predictionColor}")
            .legend-val Прогноз на заданный период
          .legend
            .legend-round(:style="{ background: goalColor}")
            .legend-val Цели на сезон
      v-row(v-else)
        v-col(
          md="5"
          sm="12"
          )
          .generalProgress-empty-text
            p Вас должен оценить тренер, после этого здесь начнут появляться данные
            p А пока заполните
              a(href="/") профиль
              |  и попробуйте настроить рабочий стол. Нужная кнопка
              | в правом верхнем углу -
              svg(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' class="generalProgress-empty-icon")
                path(fill-rule='evenodd' clip-rule='evenodd' d='M14.75 13C14.75 12.5858 14.4142 12.25 14 12.25C13.5858 12.25 13.25 12.5858 13.25 13V14.0945C11.9561 14.4275 11 15.6021 11 17C11 18.3979 11.9561 19.5725 13.25 19.9055V27C13.25 27.4142 13.5858 27.75 14 27.75C14.4142 27.75 14.75 27.4142 14.75 27V19.9055C16.0439 19.5725 17 18.3979 17 17C17 15.6021 16.0439 14.4275 14.75 14.0945V13ZM15.5 17C15.5 17.8284 14.8284 18.5 14 18.5C13.1716 18.5 12.5 17.8284 12.5 17C12.5 16.1716 13.1716 15.5 14 15.5C14.8284 15.5 15.5 16.1716 15.5 17Z' fill='#326BFF')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13V20.0945C17.9561 20.4275 17 21.6021 17 23C17 24.3979 17.9561 25.5725 19.25 25.9055V27C19.25 27.4142 19.5858 27.75 20 27.75C20.4142 27.75 20.75 27.4142 20.75 27V25.9055C22.0439 25.5725 23 24.3979 23 23C23 21.6021 22.0439 20.4275 20.75 20.0945V13ZM21.5 23C21.5 23.8284 20.8284 24.5 20 24.5C19.1716 24.5 18.5 23.8284 18.5 23C18.5 22.1716 19.1716 21.5 20 21.5C20.8284 21.5 21.5 22.1716 21.5 23Z' fill='#326BFF')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M26.75 13C26.75 12.5858 26.4142 12.25 26 12.25C25.5858 12.25 25.25 12.5858 25.25 13V15.0945C23.9561 15.4275 23 16.6021 23 18C23 19.3979 23.9561 20.5725 25.25 20.9055V27C25.25 27.4142 25.5858 27.75 26 27.75C26.4142 27.75 26.75 27.4142 26.75 27V20.9055C28.0439 20.5725 29 19.3979 29 18C29 16.6021 28.0439 15.4275 26.75 15.0945V13ZM27.5 18C27.5 18.8284 26.8284 19.5 26 19.5C25.1716 19.5 24.5 18.8284 24.5 18C24.5 17.1716 25.1716 16.5 26 16.5C26.8284 16.5 27.5 17.1716 27.5 18Z' fill='#326BFF')

</template>

<script>
  import Highcharts from 'highcharts';
  import axios from "axios";
  import {API_URL_GRAF} from "../../config/api";

  export default {
    name: "GeneralProgress",
    props: {
      data: {
        type: Array,
        required: false
      }
    },
    data: () => ({
      types: ['ОФП', 'Техника', 'Тактика', 'Психология', 'Игровая', 'Теория'],
      title: 'Общее развитие',
      goalColor: '#A3A3A3',
      predictionColor: '#3DC50D',
      currentColor: '#326BFF',
      currentDataChart: null,
      chart: null,
      isLoad: false,
      dataChart: [],
    }),

    methods: {
      changeChart(index) {

        let test = this.dataChart;
        this.currentDataChart = test[index + 1];
        this.chart.update({
          series: this.series,
          xAxis: {
            categories: this.currentDataChart.labels,
          }
        }, true, true);
      },
      generateDateChart(data, title) {
        var dataChartItem = {
          title: title,
          labels: [],
          datasets: {
            goals: [],
            prediction: [],
            current: []
          }
        };


          let ofp = data.filter(item => {
            return item.name == title;
          })[0];

        if(ofp) {
          let ofpLabels = Array.from(ofp.skills, (k) => k.name).filter((v, i, a) => {
            return a.indexOf(v) === i
          });

          dataChartItem.labels = ofpLabels;

          ofpLabels.map(item => {
            let skills = ofp.skills.filter(itemskill => {
              return itemskill.name == item;
            })
            let sum =0;
              skills.map(item => {
                sum += item.lastMark
              });
            dataChartItem.datasets.current.push(sum/skills.length)

            dataChartItem.datasets.goals.push(skills[0].goal);
            dataChartItem.datasets.prediction.push(skills[0].predict);
          });
        }

        return dataChartItem;
      },
      async load() {
        var self = this;
        await axios.get(API_URL_GRAF + '/skills/general/', {
          headers: {
            'Authorization': localStorage.getItem("access") ? "Bearer " + localStorage.getItem("access") : '',
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then((response) => {
          // TODO Добавляю дублирующий элемент потому что происходит замена нулевого. Баг, полечить
          self.dataChart.push(self.generateDateChart(response.data, 'ОФП'));


          self.dataChart.push(self.generateDateChart(response.data, 'ОФП'));
          self.dataChart.push(self.generateDateChart(response.data, 'Техника'));
          self.dataChart.push(self.generateDateChart(response.data, 'Тактика'));
          self.dataChart.push(self.generateDateChart(response.data, 'Психология'));
          self.dataChart.push(self.generateDateChart(response.data, 'Игровая'));
          self.dataChart.push(self.generateDateChart(response.data, 'Теория'));
        });
      }
    },

    computed: {
      series: function () {
        return [
          {
          type: 'spline',
          name: 'Цели на сезон',
          color: this.goalColor,
          marker: {
            fillColor: this.goalColor,
            radius: 5,
            symbol: 'circle'
          },
          data: this.currentDataChart.datasets.goals,
          lineWidth: 1,
          dashStyle: '5, 3',
          states: {
            inactive: {
              enabled: false
            }
          }
        },
          {
            type: 'areaspline',
            name: 'Прогноз на заданный период',
            color: this.predictionColor,
            fillColor: {
              linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
              stops: [
                [0, 'rgba(95, 255, 39, 1)'],
                [.25, 'rgba(95, 255, 39, 0.4342)'],
                [.5, 'rgba(95, 255, 39, 0)']
              ]
            },
            marker: {
              fillColor: this.predictionColor,
              radius: 5,
              symbol: 'circle'
            },
            data: this.currentDataChart.datasets.prediction,
            lineWidth: 1,
            dashStyle: '5, 3',
            states: {
              inactive: {
                enabled: false
              }
            }
          },
          {
            type: 'areaspline',
            name: 'Текущие показатели',
            color: this.currentColor,
            fillColor: {
              linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
              stops: [
                [0, 'rgba(104, 146, 255, 0.599)'],
                [1, 'rgba(104, 146, 255, 0)']
              ]
            },
            marker: {
              fillColor: this.currentColor,
              radius: 5,
              symbol: 'circle'
            },
            data: this.currentDataChart.datasets.current,
            lineWidth: 1,
            dashStyle: '5, 3',
            states: {
              inactive: {
                enabled: false
              }
            }
          },

        ]
      },
    },
    async mounted() {
      await this.load();

      if (this.dataChart && this.dataChart.length > 0) {

        this.currentDataChart = this.dataChart[0];
        console.log(this.dataChart);
        let dataChart1 = this.currentDataChart;
        let labels = dataChart1.labels;
        let dataSets = dataChart1.datasets;
        this.chart = Highcharts.chart('generalProgressChart', {
          title: false,
          legend: false,
          margin: 0,
          xAxis: {
            categories: labels,
            labels: {
              formatter: function () {
                let diff = dataSets.prediction[this.pos] - dataSets.current[this.pos];
                if (diff > 0) {
                  return this.value + '<span class="xAxis_up" style="color:#3DC50D;position:relative;padding-left: 20px">' +
                    //'<img :src=`${@/assets/images/chart_arrow.png}`>' +
                    '<span style="width: 0;height: 0;border:5px solid transparent;border-bottom-color:#3DC50D;border-bottom-width:7px;position:absolute;left:7px;"></span>' +
                    diff + '</span>';
                } else {
                  return this.value;
                }
              },
              useHTML: true,
              //rotation: -45,
              //padding: 0,
            },
            startOnTick: true,
            //left: 0,
            //right: 0
          },
          yAxis: {
            title: false,
            max: 100,
          },
          credits: {
            enabled: false
          },
          series: this.series,
        });
      }

    }
  }
</script>

<style scoped lang="scss">
  .widget {
    position: relative;
  }
  .chart-container{
    width: 100% !important;
  }

  .highcharts-series-group{
    width: 100% !important;
  }
  .widget-empty-image {
    background-image: url("~@/assets/images/general_progress_empty.jpg");
    position: absolute;
    right: 100px;
    bottom: 0;
    width: 350px;
    height: 260px;
    background-position: bottom;
  }

  .generalProgress-empty-icon {
    position: absolute;
    margin-top: -10px;
  }

  .generalProgress-empty-text {
    padding-bottom: 40px;
    z-index: 10;
    position: relative;
    p {
      padding-bottom: 30px;
      font-size: 14px;
      padding-left: 35px;
      max-width: 320px;
      line-height: 22px;
    }
    ::v-deep {
     a {
        color: rgba(50, 107, 255, 1);
        margin: 0 5px;
     }

    }
  }

  .chart-container {
    height: 200px;
  }

  .legend {
    display: flex;
    align-items: center;
    padding: 4px 0;

    &-round {
      width: 10px;
      height: 10px;
      background: rgba(0, 0, 0, .29);
      border-radius: 100%;
      margin-right: 10px;
    }

    &-val {
      font-size: 12px;
    }
  }
  ::v-deep {
    .highcharts-axis-labels > span{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .xAxis_up{
      left: -3px;
    }
  }


</style>