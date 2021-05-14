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
                  .link-show(@click="all" :class="!isShowAccordions ? 'm-show' : 'm-hide'") развернуть все
                  .link-hide(@click="none" :class="isShowAccordions ? 'm-show' : 'm-hide'") свернуть все

              v-expansion-panels.acc-hm__panels_inner(v-model="panelLevelThree" multiple)
                v-expansion-panel.acc-hm__panel_inner.complete(v-for='(item,i) in items' :key='i')
                  v-expansion-panel-header.acc-hm__header_inner
                    .block-flex
                      .block-flex__left.d-flex.align-center
                        .acc-hm-num.mr-4 {{i + 1}}
                        .acc-hm__task-title Игры с теннисным мячом. Метание и ловля мяча отскочившего от стены
                      .block-flex__right.d-flex.align-center.ml-auto.pr-4
                        .complete-icon.mr-4
                          | ✅
                        base-badge.mr-4(
                          label="в процессе"
                          background="rgba(89, 87, 202, 0.15)"
                          textColor="#413FBC"
                        )
                  v-expansion-panel-content.acc-hm__content_inner
                    .hm-report__block
                      .hm-report__block-title Отчёт о выполнении:
                      v-row
                        v-col(
                          md='5'
                        )
                          .hm-report__block-mess
                            .hm-report__block-mess-icon.icon-24 💬
                            base-textarea.ml-3(solo="true" name="test" label="" )
                        v-col(
                          md='2'
                        )
                          DropzoneBlock
                base-button.mt-4.w-100(
                  classAttr='button-default button-blue button-big'
                  label="Отправить отчёт"
                  disabled=true
                )






</template>

<script>
import DotsMenu from "@/components/DotsMenu";
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import DropzoneBlock from "@/components/elements/DropzoneBlock";
export default {
  name: "AccordionHomework",
  components: {
    DropzoneBlock,
    DotsMenu,
    vueDropzone: vue2Dropzone
  },
  isShowAccordions: false,
  data: () => ({
    items:5,
    panelLevelOne: [0],
    panelLevelTwo: [0],
    panelLevelThree: [0],
    disabled: false,
    readonly: false,
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:'Загрузить видео'
    }
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
      this.isShowAccordions = true;
    },
    // Reset the panel
    none () {
      this.panelLevelThree = []
      this.isShowAccordions = false;
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
    .acc-hm__panels_inner{
      .v-expansion-panel-content__wrap{
        background: transparent;
        padding: 16px 48px 16px;
      }
    }
    .acc-hm__task-title{
      //color: rgba(0, 0, 0, 0.56);

    }
    .hm-report__block-title{
      color: rgba(0, 0, 0, 0.56);
      font-size: 14px;
      margin-bottom: 12px;
    }

    .acc-hm__panel_inner{
      margin-top: 8px;
      &:after{
        border-color: transparent !important;
      }
      &:before{
        box-shadow: none !important;
      }
    }

    .acc-hm__panel_inner.complete{
      background: rgba(61, 197, 13, 0.05);
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
  margin-bottom: 12px;
}

.hm-head__title{
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: $FiraSansMedium;
}



.m-show{
  display: block;
}

.m-hide{
  display: none;
}



.hm-report__block-mess{
  display: flex;
}
.complete-icon{
  //padding: 4px 8px;
  min-width: 28px;
  min-height: 24px;
  background: rgba(61, 197, 13, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 4px;
}












</style>