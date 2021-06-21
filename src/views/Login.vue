<template lang="pug">
  v-form(@submit.prevent="submitForm" ref="form")
    .form-login
      img.logo-form(
        src="@/assets/images/logo-2.svg"
      )
      select-user
      .inputs-block.mt-12

        base-input(
          label="Почта"
          classAttr="input-default input-big mb-6"
          v-model="email"
          :errors="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        )

        base-input-password(
          label="Пароль"
          classAttr="input-default input-big"
          v-model="password"
          :errors="passwordErrors"
          :show1="false"
        )

        //- .form-text.text-blue.text-left.mt-3 Не помню пароль
        base-checkbox.mt-8(
        )
          template(#label-custom)
            | Запомнить меня

        base-button(
          type="submit"
          classAttr='button-default button-blue button-big w-100 mt-8'
          label="Войти"
        )

      div(v-if="rejectText" class="reject mt-4")
        | {{ rejectText }}


</template>

<script>
import SelectUser from '@/components/elements/UserSelect.vue'
import { required, email } from 'vuelidate/lib/validators'

import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: { SelectUser },

  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      rememberUser: false,
      rejectText: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    ...mapActions('auth', ['login']),
    async submitForm() {
      this.rejectText = ''
      this.$v.$touch()

      if (!this.$v.$invalid) {
        await this.login({ email: this.email, password: this.password }).then(
          () => {
            this.$store.dispatch('auth/loadProfile')
            // window.location.reload()
          },
          reason => {
            console.warn('login error', reason)
            this.rejectText = reason.data.status + ' ' + reason.data.error
          }
        )
      }
    },
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      if (!this.$v.email.email) {
        errors.push('Проверьте правильность написания почты. Адрес почта содержит символ @, например:ivanov@pochta.ru')
      }
      !this.$v.email.required && errors.push('Укажите почту')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Пароль обязателен')
      return errors
    },
  },
}
</script>

<style lang="scss">
.reject {
  color: #ec4865;
}

.form-login {
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(121, 140, 189, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(50, 107, 255, 0.06);
  border-radius: 12px;
  width: 438px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  text-align: center;
  padding: 40px 48px 58px;
  box-sizing: border-box;
}

.logo-form {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.note {
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}
</style>
