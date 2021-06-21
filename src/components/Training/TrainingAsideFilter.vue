<template lang="pug">
  .training-filter
    .training-filter__head
      .training-filter__title Упражнения
    v-text-field(
      class='input-outline mb-5'
      label='Название упражнения'
      placeholder='Название упражнения'
      outlined=''
      hide-details
      height="40"
      v-model="nameEx"
    )
    .training-filter__block
      v-expansion-panels.accordion-filters
        v-expansion-panel
          v-expansion-panel-header
            .show-filtres Показать фильтры
            .hide-filtres Cкрыть фильтры
          v-expansion-panel-content
            .labels
              v-chip(
                v-if="false"
                class="tag-filters mr-2 mb-5"
                link
                @click="showAll"
                :class="{active: false}"

              )
                | Все

              v-chip(
                v-if="false"
                class="tag-filters mr-2 mb-5"
                link
                @click="sort"
                :class="{active: sortActive}"

              )
                | Недавно созданные

              base-select(
                classAttr='select-default select-bg-gray mb-5'
                label="Место проведения"
                :items="placeItems"
                solo=true
                :value="selectPlace"
                v-model="selectPlace"
              )

              base-select(
                classAttr='select-default select-bg-gray mb-5'
                label="Форма организации"
                :items="exerItems"
                solo=true
                :value="selectType"
                v-model="selectType"
              )


</template>

<script>
  import FiltersAccordion from "@/components/FiltersAccordion";
  import Accordion from "@/components/Accordion";
  export default {
    name: "TrainingAsideFilter",
    components: {Accordion, FiltersAccordion},
    data: () => ({
      nameEx: '',
      selectPlace: '',
      selectType: '',
      placeItems: ['Лед', 'Зал', 'Улица'],
      exerItems: ['Индивидуальная', 'Групповая', 'Командная', 'Домашнее задание'],
      sortActive: false
    }),
    watch: {
      nameEx: function (val) {
        this.$emit('filter', val);
      },
      selectPlace: function (val) {
        this.$emit('selectPlace', val);
      },

      selectType: function (val) {
        this.$emit('selectType', val);
      },
    },
    computed: {
      //
    },
    methods: {
      tagFilterActive: function () {
        this.tagFilters.isActive = !this.tagFilters.isActive;
      },
      showAll: function () {
        this.$emit('showAll');
        this.selectPlace = '';
        this.selectType = '';

      },
      sort: function () {
        this.sortActive = !this.sortActive;
        this.$emit('sort', this.sortActive);
      }
    },
    mounted() {

    }
  }
</script>

<style  lang="scss">
  .accordion-filters {
    .v-expansion-panel-header {
      min-height: 0;
      padding: 0;
      margin-bottom: 20px;
    }

    .v-item--active {
      .show-filtres {
        display: none;
      }

      .hide-filtres {
        display: inline-block;
      }
    }

    .v-expansion-panel-header__icon {
      margin-left: 15px !important;
      @include width-flex(15px)
      height: 15px;
      right: 0;
      left: auto;
    }

    .v-expansion-panel-content__wrap {
      padding: 0;
    }
  }

  .show-filtres,
  .hide-filtres {
    color: #326BFF;
    font-size: 14px;
  }

  .hide-filtres {
    display: none;
  }

  .tag-filters {
    padding-left: 25px;
    padding-right: 25px;
    background: #F1F3F9 !important;
    .v-chip__content {
      font-size: 12px;
      font-family: $FiraSansMedium;
      text-transform: none;
      color: #326BFF;

    }
  }
  .tag-filters.active,
  .tag-filters:hover {
    background-color: #326BFF !important;
    border-color: #326BFF !important;
    .v-chip__content {
      color: #FFFFFF;
    }

  }





  .training-filter__head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .training-filter__title{
    font-size: 20px;
    font-family: $FiraSansMedium;
  }
  .training-filter__close{
    color: #326BFF !important;
    font-size: 14px;
  }

  /* input-outline start */
  .input-outline{
    .v-input__slot{
      min-height: 40px !important;
    }
    .v-label{
      top: 11px !important;
    }
    .v-label--active{
      top: 18px !important;

    }
    fieldset{
      border: 1px solid #E4E8F2;
    }
  }


  /* input-outline end */


</style>
