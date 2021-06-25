<template lang="pug">
  .timeline
    .dev-log {{workplaces}}
    .dev-log {{educations}}
    span test
  
</template>


<script>

export default {
  name: 'WidgetTrainerTimeline',
  components: {  },
  props: {
    workplaces: Array,
    educations: Array
  },
  data() {
    return {

    }
  },
  computed: {

  },
}
</script>

<style lang="scss" scoped>
.timeline{
 &__baseline{

 }
}
 

</style>