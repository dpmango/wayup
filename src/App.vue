<template lang="pug">
  #app(data-app)
    component(:is="layout")
      router-view

</template>

<script>
import EmptyLayout from '@/layouts/layout-empty'
import MainLayout from '@/layouts/layout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  components: {
    MainLayout,
    EmptyLayout,
  },

}
</script>
