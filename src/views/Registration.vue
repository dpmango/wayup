<template lang="pug">
  div
    .form-login
      img.logo-form(
        src="@/assets/images/logo-2.svg"
      )
      .form-title Регистрация
      .form-text-block.d-flex.justify-center
        .form-text Уже регистрировался.
        router-link.form-text.text-blue.ml-3(to='/login') Войти
      .inputs-block.mt-12
        base-input(
          label="Фамилия"
          classAttr="input-default input-big mb-6"
        )
        base-input(
          label="Имя"
          classAttr="input-default input-big mb-6"
        )
        base-input(
          label="Отчество"
          classAttr="input-default input-big mb-6"
        )
        base-input(

          label="Почта"
          :rules='[rules.required, rules.email]'
          classAttr="input-default input-big mb-6"

        )
        base-input-password(
          label="Пароль"
          classAttr="input-default input-big"
        )
        .note.text-left
          |Используйте буквы, цифры и спецсимволы.<br/> Минимум 8 знаков
        base-checkbox.mt-10(
        )
          template(#label-custom)
            |Я выражаю согласие на <a href='#' class='text-blue'>обработку персональных данных</a>, нажимая кнопку «Зарегистрироваться»

        base-button(
          classAttr='button-default button-blue button-big w-100 mt-10'
          label="Зарегистрироваться"
          disabled="true"
        )


</template>

<script>
export default {
  name: "Registration",
  data () {
    return {
      email: '',
      rules: {
        required: value => !!value || 'Обязательное поле',
        counter: value => value.length <= 20 || 'Максимум 20 знаков',
        min: v => v.length >= 8 || 'Минимум 8 знаков',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Проверьте правильность написания почты. Адрес почты содержит символ @, например:ivanov@pochta.ru'
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