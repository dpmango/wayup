<template lang="pug">
  .training-aside
    ModalTrainerNewExercise(:visible='dialogExercise' @close="dialogExercise=false")
    TrainingAsideFilter(
      :exercises="exercises"
      @filter="filter"
      @selectPlace="selectPlace"
      @selectType="selectType"
      @showAll="showAll"
      @sort="sortEx"
    )
    base-button(
      classAttr='button-default button-gray button-big w-100 mb-10'
      label="Добавить новое упражнение"
      @click='dialogExercise = true'
    )
    .training-aside-body
      template(v-for="group in dataEexercises")
        .training-aside__head(v-if="group.exercices.length")
          .training-aside__title {{ group.name }}
        Accordion(:groupt="group.exercices" v-if="group.exercices.length")

</template>

<script>
import Accordion from "@/components/Accordion";
import TrainingAsideFilter from "@/components/Training/TrainingAsideFilter";
import moment from 'moment';
import ModalTrainerNewExercise from "@/components/modals/ModalTrainerNewExercise";

export default {
  name: "TrainingAside",
  components: {
    ModalTrainerNewExercise,
    TrainingAsideFilter,
    Accordion
  },
  props: {
    exercises: [Array, Object]
  },
  data: function () {
    return {
      dialogExercise:false,
      dataEexercises: this.exercises,
      location: '',
      type: ''
    }
  },
  watch: {
    exercises: function (val) {
      this.dataEexercises = val;
    },
  },
  methods: {
    filter: function (val) {
      if(val.length > 0) {
        let newEx = [];
        this.exercises.map(item => {
          let ex = item.exercices.filter((item1) => {
            if(item1.title.toLowerCase().indexOf(val) != -1 || item1.title.indexOf(val) != -1) {
              return true;
            } else {
              return false;
            }
          });
          if(ex.length > 0) {
            let ob = {
              id: item.id,
              name: item.name,
              slug: item.slug,
              exercices: ex
            };
            newEx.push(ob)
          }
        });
        this.dataEexercises = newEx;
      } else {
        this.dataEexercises = this.exercises;
      }

    },
    selectPlace: function (val) {
      if(val.length > 0) {
        this.location = val;
        this.selectEx();
      }
    },
    selectType: function (val) {
      if(val.length > 0) {
        this.type = val;
        this.selectEx();
      }
    },
    showAll: function () {
      this.dataEexercises = this.exercises;
      this.location = '';
      this.type = '';
    },

    selectEx: function () {
      /*this.dataEexercises =this.exercises.filter(item => {
        let location = true;
        let type = true;
        if(this.location.length > 0) {
          location = (item.location == this.location);
        }

        if(this.type.length > 0) {
          type = (item.type_of_exercise == this.type);
        }
        return (location && type);
      });*/

      let newEx = [];
      this.exercises.map(item => {
        let ex = item.exercices.filter((item1) => {
          let location = true;
          let type = true;
          if(this.location.length > 0) {
            location = (item1.playground[0].name == this.location);
          }

          if(this.type.length > 0) {
            type = (item1.organizationForm[0].name == this.type);
          }
          return (location && type);
        });
        if(ex.length > 0) {
          let ob = {
            id: item.id,
            name: item.name,
            slug: item.slug,
            exercices: ex
          };
          newEx.push(ob)
        }
      });
      this.dataEexercises = newEx;

    },
    sortEx: function (sort) {
      if(sort) {
        this.dataEexercises = this.dataEexercises.sort((a, b) => {
          if (moment(a.created_at).isBefore(b.created_at)) {
            return -1;
          } else {
            return 1;
          }
        })
      } else {
        this.dataEexercises = this.dataEexercises.sort((a, b) => {
          if (moment(b.created_at).isBefore(a.created_at)) {
            return -1;
          } else {
            return 1;
          }
        })
      }

    }
  },


}
</script>

<style lang="scss" >
  .accordion-big__body {
    min-height: 150px;
  }
  .training-aside-body {
    max-height: 600px;
    overflow: auto;
  }

  .training-aside {
    .v-expansion-panels{
      margin-bottom: 16px;
    }
    .panel-num,
    .add-training,
    .training-edit{
      display: none;
    }
  }
  .training-aside__head {
    margin-bottom: 16px;
  }

  .training-aside__title {
    font-size: 16px;
    font-family: $FiraSansSemiBold;
    margin-bottom: 8px;
  }
  .training-aside__subtitle{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.32);
  }

</style>