<template lang="pug">
  v-expansion-panels.acc-medical__panels(v-model="panel" multiple)
    v-expansion-panel.acc-medical__panel(v-for='(item,i) in 3' :key='i')
      v-expansion-panel-header.acc-medical__header
        .block-flex
          .block-flex__left.d-flex.align-center
            .acc-medical__title.mr-4 25 янв 2021

          .block-flex__right.ml-auto.pr-6
            base-badge.mr-4(
              label="Без противопоказаний"
              background="rgba(61, 197, 13, 0.15)"
              textColor="#1F7800"
            )


      v-expansion-panel-content.acc-medical__content
        .acc-medical__item(v-for='(item,j) in 5' :key='j')
          .acc-medical__item-text Врач по спортивной медицине
          img.icon-16(
            src="@/assets/images/svg/check-green.svg"
          )


</template>

<script>
	export default {
		name: "AccordionMedical",
		data: () => ({
			disabled: false,
			readonly: false,
			panel: []
		}),

	}


</script>

<style scoped lang="scss">


  .acc-medical__panels {

    ::v-deep {

      .acc-medical__header {
        min-height: 30px;
        padding: 7px 8px 7px 8px;

        .v-expansion-panel-header__icon {
          right: 12px;
        }

      }

      .v-expansion-panel-content__wrap {
        padding: 0;
        background: #F8F9FC;
        box-shadow: none;

      }

      .v-expansion-panel:before {
        box-shadow: none;
      }

      .v-expansion-panel--active {
        margin-top: 0;

        .acc-exercises__header {
          box-shadow: none;
        }

        .v-expansion-panel-content__wrap {
          box-shadow: none;
        }
      }

      .v-expansion-panel.acc-medical__panel {
        border-radius: 4px !important;
        margin-bottom: 0px;
        margin-top: 8px;

        &:after {
          border-color: transparent !important;

        }
      }

      .acc-medical__title {
        font-family: $FiraSansMedium;
        font-size: 14px;
      }

      .acc-medical__content {
        background: #FFFFFF;
        padding: 14px 8px;

      }

      .acc-medical__item {
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .acc-medical__item-text {
        font-size: 14px;
        color: $blue;
      }

    }


  }


</style>
