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
  mounted() {
    if (this.$store.state.auth.access) {
      this.$store.dispatch('auth/loadProfile')
    }

    const $refreshToken = async () => {
      const refresh = localStorage.getItem('refresh')

      console.log('refreshing token', refresh)

      if (refresh) {
        try {
          await this.$store.dispatch('auth/refreshToken', { refresh })
        } catch (error) {
          this.$store.dispatch('auth/logout')
          // throw new Error('Ошибка обновления токена');
        }
      }
    }

    $refreshToken()

    // TODO - add cookies timestamps

    setInterval(() => {
      $refreshToken()
    }, 30 * 60 * 1000)
  },
}
</script>
