<template lang="pug">
  .training-filter__block
    v-expansion-panels.accordion-filters
      v-expansion-panel
        v-expansion-panel-header
          .show-filtres Показать фильтры
          .hide-filtres Cкрыть фильтры
        v-expansion-panel-content
          .labels
            v-chip(
              v-for="(tagFilter, i) in tagFilters"
              class="tag-filters mr-2 mb-2"
              :index="i"
              :key="i"
              link
              @click="tagFilterActive"
              :class="{active: tagFilter.isActive}"

            )
              | {{tagFilter.label}}


</template>

<script>
export default {
  name: "FiltersAccordion",

  data: () => ({

    tagFilters: [
      {
        isActive: false,
        label: "Лед",
      },
      {
        isActive: false,
        label: "Рекомендованые",
      },
      {
        isActive: false,
        label: "Технические",
      },
      {
        isActive: false,
        label: "Лед",
      },
      {
        isActive: false,
        label: "Рекомендованые",
      },
      {
        isActive: false,
        label: "Технические",
      },
    ]
  }),

  methods: {
    tagFilterActive: function () {
      this.tagFilters.isActive = !this.tagFilters.isActive;
      console.log('клик')
    }
  }

}
</script>

<style lang="scss">

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

</style>