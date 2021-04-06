<template lang="pug">
  .training-filter
    .training-filter__head
      .training-filter__title Упражнения
      a(href='#').training-filter__close Закрыть
    v-text-field(
      class='input-outline mb-5'
      label='Название упражнения'
      placeholder='Название упражнения'
      outlined=''
      hide-details
      height="40"
    )
    FiltersAccordion



</template>

<script>
import BaseInput from "@/components/baseInput";
import FiltersAccordion from "@/components/FiltersAccordion";
import Accordion from "@/components/Accordion";
export default {
name: "TrainingAsideFilter",
  components: {Accordion, FiltersAccordion, BaseInput}
}
</script>

<style  lang="scss">

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