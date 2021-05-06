<template lang="pug">
  div
    .form-login
      img.logo-form(
        src="@/assets/images/logo-2.svg"
      )
      select-user
      .inputs-block.mt-12
        base-input(
          label="Почта"
          :rules='[rules.required, rules.email]'
          classAttr="input-default input-big mb-6"

        )
        base-input-password(
          label="Пароль"
          classAttr="input-default input-big"
        )
        .form-text.text-blue.text-left.mt-3 Не помню пароль
        base-checkbox.mt-8(
        )
          template(#label-custom)
            |Запомнить меня

        base-button(
          classAttr='button-default button-blue button-big w-100 mt-8'
          label="Войти"
        )
        base-button(
          classAttr='button-default button-blue button-big w-100 mt-5'
          label="Войти c помощью смс"
          disabled="true"
        )


</template>

<script>
import SelectUser from "@/components/elements/UserSelect";
export default {
  name: "Login",
  components: {SelectUser},
  data () {
    return {
      email: '',
      rules: {
        required: value => !!value || 'Обязательное поле',
        counter: value => value.length <= 20 || 'Максимум 20 знаков',
        min: v => v.length >= 8 || 'Минимум 8 знаков',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Проверьте правильность написания почты. Адрес почта содержит символ @, например:ivanov@pochta.ru'
        },
      },
    }
  },
}
</script>

<style lang="scss">
.form-login {
  background: #FFFFFF;
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

.note{
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}


</style>