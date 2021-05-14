<template lang="pug">
  v-expansion-panels.acc-exercises__panels(v-model="panelLevelOne" multiple)
    v-expansion-panel(v-for='(item,i) in 3' :key='i')
      v-expansion-panel-header.acc-exercises__header
        .block-flex
          .block-flex__left.d-flex.align-center
            .acc-exercises__title.mr-4 ОФП
          .block-flex__right.d-flex.align-center.ml-auto.pr-12
            .hm-task.mr-2 1 задание
            base-badge(
              label="в процессе"
              background="rgba(61, 197, 13, 0.15)"
              textColor="#1F7800"
            )
      v-expansion-panel-content.acc-exercises__content
        v-expansion-panels.acc-exercises__panels_inner(v-model="panelLevelTwo" multiple)
          v-expansion-panel.acc-exercises__panel_inner(v-for='(item,i) in 3' :key='i')
            v-expansion-panel-header.acc-exercises__header_inner
              .block-flex
                .block-flex__left.d-flex.align-center
                  .acc-hm-date.mr-4 22 фев 2021
                  .acc-hm-title Развитие координационных способностей

                .block-flex__right.d-flex.align-center.ml-auto.pr-12
                  base-badge.mr-4(
                    label="в процессе"
                    background="rgba(61, 197, 13, 0.15)"
                    textColor="#1F7800"
                  )
                  base-badge.mr-4(
                    label="до 28 фев 2021"
                    background="rgba(247, 239, 176, 0.5)"
                    textColor="#676300"
                  )
                  a(href='#' @click.stop='onClick()')
                    img.icon-20.mr-5(
                      src="@/assets/images/svg/icon-message.svg"
                    )
                  dots-menu.mt-0.position-static.ml-2
            v-expansion-panel-content.acc-exercises__content_inner
              .hm-head
                .hm-head__title Задания:
                .link-show__block
                  .link-show(@click="all") развернуть все
                  .link-hide(@click="none") свернуть все

              v-expansion-panels.acc-hm__panels_inner(v-model="panelLevelThree" multiple)
                v-expansion-panel.acc-hm__panel_inner(v-for='(item,i) in items' :key='i')
                  v-expansion-panel-header.acc-hm__header_inner

                    .block-flex
                      .block-flex__left.d-flex.align-center
                        .acc-hm-num.mr-4 {{i + 1}}
                        .acc-hm-title Развитие координационных способностей

                      .block-flex__right.d-flex.align-center.ml-auto.pr-12
                        base-badge.mr-4(
                          label="в процессе"
                          background="rgba(61, 197, 13, 0.15)"
                          textColor="#1F7800"
                        )
                        base-badge.mr-4(
                          label="до 28 фев 2021"
                          background="rgba(247, 239, 176, 0.5)"
                          textColor="#676300"
                        )
                        a(href='#' @click.stop='onClick()')
                          img.icon-20.mr-5(
                            src="@/assets/images/svg/icon-message.svg"
                          )
                        dots-menu.mt-0.position-static.ml-2
                  v-expansion-panel-content.acc-exercises__content_inner





</template>

<script>
import DotsMenu from "@/components/DotsMenu";
export default {
  name: "AccordionHomework",
  components: {DotsMenu},
  data: () => ({
    items:5,
    panelLevelOne: [0],
    panelLevelTwo: [0],
    panelLevelThree: [],
    disabled: false,
    readonly: false,
  }),
  methods: {
    onClick() {
      /*this will toggle only by icon click. at the same time, will prevent toggle
      by clicking on header. */
      const curr = this.panel
      this.panel = curr === undefined ? 0 : undefined
    },
    all () {
      this.panelLevelThree = [...Array(this.items).keys()].map((k, i) => i)
      console.log('rkbr')
    },
    // Reset the panel
    none () {
      this.panelLevelThree = []
    },
  },


}
</script>

<style scoped lang="scss">


.acc-exercises__header {
  min-height: 72px;

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
        box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.4);

      }
    }
  }

  .acc-exercises__content_inner {
    padding: 16px 24px;
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
.acc-hm-date{
  font-size: 14px;
}
.acc-hm-title{
  font-family: $FiraSansMedium;
}

.hm-head{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hm-head__title{
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: $FiraSansMedium;
}

</style>