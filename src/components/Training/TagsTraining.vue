<template lang="pug">
  .tags
    .tags-item(v-if="group")
      img.tag-icon(
        src=`@/assets/images/svg/icon-people.svg`
      )
      .tag-text {{ group.name }}

    .tags-item(v-if="location")
      img.tag-icon(
        src=`@/assets/images/svg/icon-book.svg`
      )
      .tag-text {{ location.name }}

    .tags-item(v-if="plan")
      img.tag-icon(
        src=`@/assets/images/svg/icon-hokey.svg`
      )
      .tag-text {{ plan.purposeLesson }}

    .tags-item(v-if="typeLesson")
      img.tag-icon(
        src=`@/assets/images/svg/icon-man.svg`
      )
      .tag-text {{ typeLesson  }}

    .tags-item(v-if="typePreparation")
      img.tag-icon(
        src=`@/assets/images/svg/icon-power.svg`
      )
      .tag-text {{ typePreparation.name }}

</template>

<script>
export default {
  name: "TagsTraining",
  props: {
    group: [Object, String],
    location: {
      type: Object
    },
    utils:[Object, Array],
    plan: {
      type: Object
    }
  },
  computed: {

    loc: function() {
      if(this.utils.locations) {
        return this.utils.locations.filter(item => {
          return item.id == this.location;
        })[0]
      }
      return false;

    },
    typeLesson: function() {
     if(this.utils.organizationForms) {
        return this.utils.organizationForms.filter(item => {
          return item.id == this.plan.typeLesson;
        })[0].name
      }
      return false;

    },
    typePreparation: function() {
      if(this.utils.exerciseCategories) {
        return this.utils.exerciseCategories.filter(item => {
          return item.id == this.plan.typeOfPreparation;
        })[0]
      }
      return false;

    }
  }
}
</script>

<style lang="scss" scoped>

.tags{
  margin-bottom: 27px;
}
.tags-item{
  display: inline-flex;
  align-items: center;
  background: #F1F3F9;
  border-radius: 4px;
  padding: 4px 8px 3px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.tag-text{
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 3px;
}
.tag-icon{
  @include width-flex(12px)
  height: 15px;
}


</style>