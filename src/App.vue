<template lang="pug">
  #app(data-app)
    component(:is="layout")
      router-view

</template>

<script>
import EmptyLayout from '@/layouts/layout-empty'
import MainLayout from '@/layouts/layout'

export default {
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components:{
    MainLayout,
    EmptyLayout
  },
  mounted() {
    if(!Object.keys(this.$store.state.auth.profile).length) {
      console.log('Получаем профиль');

      this.$store.dispatch('auth/loadProfile');
    }
/*let auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzOTEyODcwLCJqdGkiOiI3NjVmNzRmYWNkOGM0ZmU5OTVlOGRjZTJmNmNkOWUzMyIsInVzZXJfaWQiOjN9.hvN2W_xcLKBHS5mI8TBOQZAKA5j7fUna1kx6ALP6JsA';
    axios.get('https://wayup.grafponddev.ru/api/coaches/', { headers: { Authorization: auth } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }) */

  }
}
</script>
