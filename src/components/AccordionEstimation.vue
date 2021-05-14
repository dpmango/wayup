<template lang="pug">
  v-expansion-panels.acc-exercises__panels(v-model="panel" multiple)
    v-expansion-panel.acc-exercises__panel(v-for='(item,i) in 3' :key='i')
      v-expansion-panel-header.acc-exercises__header
        .block-flex
          .block-flex__left.d-flex.align-center
            .acc-exercises__title.mr-4 Техника/стойка

          .block-flex__right.ml-auto.pr-12
            .acc-exercises__num 5,75

      v-expansion-panel-content.acc-exercises__content
        v-expansion-panels.acc-exercises__panels_inner
          v-expansion-panel.acc-exercises__panel_inner(v-for='(item,i) in 3' :key='i')
            v-expansion-panel-header.acc-exercises__header_inner
              .block-flex
                .block-flex__left.d-flex.align-center
                  .acc-estimation__title.mr-4 Основная стойка

                .block-flex__right.d-flex.align-center.ml-auto.pr-12
                  base-badge.mr-4(
                    label="В работе <span class='font-bold'>до 21 фев</span>"
                    background="rgba(247, 239, 176, 0.5)"
                    textColor="#676300"
                  )
                  .acc-exercises__item-estimation.color-red.ml-auto 3
            v-expansion-panel-content.acc-exercises__content_inner
              v-row
                v-col(md='7')
                  .iframe__wrap
                    iframe.iframe(src='https://www.youtube.com/embed/d--WyNL97TE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='')
                v-col(md='5')
                  .estimation__right
                    .estimation__block.mb-5
                      .estimation__block-title
                        | ⛔
                        span.ml-2 Ошибка:
                      .estimation__block-desc
                        | Понимает, но выполняет с ошибкой в заключительной фазе.

                    .estimation__block
                      .estimation__block-title
                        | ⚠️
                        span.ml-2 Ошибка:
                      .estimation__block-desc
                        | Рассеянное внимание
                    base-button(
                      classAttr='button-default button-gray button-big mt-auto'
                      label="Отправить отчёт"

                    )


</template>

<script>
export default {
  name: "AccordionEstimation",
  data: () => ({
    panel: [0],
    disabled: false,
    readonly: false,
  }),

}




</script>

<style scoped lang="scss">


.acc-exercises__header {
  min-height: 56px;

}

.acc-exercises__panels.acc-exercises__panels_inner {
  border-radius: 0px 0px 12px 12px;

}

.acc-exercises__panels {

  ::v-deep {
    .v-expansion-panel-content__wrap {
      padding: 0;
      background: #F8F9FC;
      box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);

    }

    .v-expansion-panel:before {
      box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1);
    }

    .v-expansion-panel--active {
      margin-top: 0;

      .acc-exercises__header {
        box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.4);
      }

      .v-expansion-panel-content__wrap {
        box-shadow: none;
      }
    }

    .v-expansion-panel.acc-exercises__panel {
      border-radius: 12px !important;
      margin-bottom: 0px;
      margin-top: 16px;
    }

    .v-expansion-panel.acc-exercises__panel_inner {
      border-radius: 0px !important;
      margin-bottom: 0px;
      margin-top: 0;
      background: #F8F9FC;

    }

  }

  .acc-exercises__panels_inner {
    ::v-deep {
      .v-expansion-panel_inner:before {
        border-radius: 0px 0px 12px 12px;

      }

      .acc-exercises__header_inner {
        border-top: 1px solid rgba(0, 0, 0, 0.1);

      }
    }
  }

  .acc-exercises__content_inner {
    padding: 0 24px 24px 24px;
  }

  .acc-exercises__title {
    font-size: 20px;
    font-family: $FiraSansMedium;
  }

  .acc-exercises__num {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    font-family: $FiraSansMedium;

  }

  .acc-exercises__item {
    padding: 16px 30px 20px 24px;
    display: flex;
    align-items: center;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);

    &:last-child {
      box-shadow: none;
    }
  }

  .acc-exercises__item-num {
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @include width-flex(20px)
    height: 20px;
    font-size: 12px;
    margin-right: 12px;
  }

  .acc-exercises__item-text {
    font-size: 16px;
    font-family: $FiraSansMedium;
  }

  .color-red {
    color: #FFFFFF;
    background: #EC4865;
    @include width-flex(22px)
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-ay {
    color: rgba(0, 0, 0, 0.4);
  }

  .color-een {
    color: #3DC50D;
  }


}

.iframe {
  width: 100%;
  height: 350px;
}

.iframe__wrap {
  border-radius: 12px;
  overflow: hidden;
}

.estimation__block-title {
  span {
    color: rgba(0, 0, 0, 0.5);

  }
}

.estimation__block-title {
  margin-bottom: 8px;
}

.estimation__right {
  display: flex;
  flex-direction: column;
  height: 100%;
}


</style>