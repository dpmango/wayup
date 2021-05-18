<template lang="pug">
    .widget
        .widget-header
            .widget-header__top
                img.drag-icon.mr-3(
                    src="@/assets/images/svg/more-icon.svg"
                )
                .widget-header__title {{ widgetTitle }}
        .widget-content
            .chart-indicator {{ widgetMainNumber }}%
            .chart-container
                canvas(id="throwRadarChart" width="200" height="200")

</template>

<script>
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);

    export default {
        name: "WidgetChartThrow",
        data: () => ({
            widgetTitle: 'Отраженных бросков',
            dataChart: {
                'И' : 40,
                'В' : 58,
                'П' : 18,
                '%ОБ' : 92.7,
                'КН' : 40,
                'И’’0’’' : 30,
                'ВП' : 49
            },
            widgetMainNumber: 0,
            dataFullLabel: {
                'И' : 'Количество игр',
                'В' : 'Выигранные игры',
                'П' : 'Проигранные игры',
                '%ОБ' : 'Процент отраженных бросков',
                'КН' : 'Коэффициент надежности',
                'И’’0’’' : 'Количество игр на 0',
                'ВП' : 'ВП'
            }
        }),
        mounted() {
            this.widgetMainNumber = this.dataChart['%ОБ'];
            let ctx = document.getElementById('throwRadarChart');
            const data = {
                labels: Object.keys(this.dataChart),
                datasets: [{
                    label: false,
                    data: Object.values(this.dataChart),
                    fill: true,
                    backgroundColor: 'rgba(50, 107, 255, .5)',
                    borderColor: false,
                    borderWidth: 0
                }]
            };
            let fullLabel = this.dataFullLabel;
            let chart = new Chart(ctx, {
                type: 'radar',
                data: data,
                options: {
                    onClick: () => {
                        let elem = chart.getActiveElements();
                        if(elem.length > 0) {
                            let label = Object.keys(this.dataChart)[elem[0].index];
                            this.widgetMainNumber = this.dataChart[label];
                            this.widgetTitle = fullLabel[label]
                        }
                    },
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                title: function(context) {
                                    return fullLabel[context[0].label];
                                }
                            }
                        }
                    },
                    scales: {
                        r: {
                            min: 0,
                            max: 100,
                            angleLines: {
                                display: false,
                            },
                            pointLabels: {
                                color: '#000'
                            },
                            ticks: {
                                display: false,
                                stepSize: 20,
                            },
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        intersect: false,
                    }

                },
            });

        }

    }
</script>

<style scoped lang="scss">
    .chart-indicator {
        font-size: rem(28px);
        color: $blue;
        font-family: $FiraSansBold;
        padding-left: 30px;
        padding-bottom: 20px;
    }
</style>
