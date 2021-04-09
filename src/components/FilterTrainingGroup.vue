<template lang="pug">
  .filter-group
    .h5.mb-6 Поиск и фильтрация
    base-input-new(
      classAttr='mb-9'
      label="Название группы"
    )
    base-select-new(
      classAttr='mb-9'
      label="Год подготовки"
      :items="selectItems"
      solo=false
    )
    base-select-new(
      classAttr='mb-9'
      label="Возраст"
      :items="selectItems"
      solo=false
    )

    .sorting
      .sorting__block
        .sorting-title Сортировать по:
        each val in ['Название','возрасту','году подготовки']
          .sorting__item(:class="isActiveSorting ? 'active' : ''" @click='toggleSorting' )
            .icon-16.sorting-icon
              svg(width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M3 6H13M3 9H10M3 12H7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
            .sorting__item-title !{val}
    .sorting__block
      .sorting-title Отображать в виде:
      .view-block
        base-button(
          label='Лист'
          classAttr='custom-button mr-6'
          @click="$emit('changeView')"
        )


</template>

<script>
import SortingBlock from "@/components/SortingBlock";

export default {
  name: "FilterTrainingGroup",
  components: {SortingBlock},
  data: () => ({
    isActiveSorting:false,

    selectItems: ['1', '2', '4', '5'],


  }),
  methods: {
    toggleSorting: function () {
      this.isActiveSorting = !this.isActiveSorting;
      console.log(this.isActiveSorting)

    },

  }
}
</script>

<style lang="scss" scoped>
.sorting-icon {
  stroke: $blue;
}

.sorting-title {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, .6);
  font-size: 14px;
}

.sorting__item-title {
  text-transform: lowercase;
  color: $blue;
  font-size: 14px;
}

.sorting {
  margin-bottom: 40px;
}

.sorting__item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  .sorting-icon {
    opacity: 0;
  }

    &:hover {
    cursor: pointer;
    .sorting__item-title {
      color: #000;
    }
    .sorting-icon {
      opacity: 1;

    }
  }
}
.sorting__item.active {
  .sorting__item-title {
    color: #000;
  }
  .sorting-icon {
    opacity: 1;
  }
}
.sorting-icon {
  @include width-flex(20px)
  stroke: #000000;

}


</style>