<template lang="pug">
  v-form(@submit.prevent="submit" ref="form")
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
          v-model="lastName"
          :errors="lastNameErrors"
          @input="$v.lastName.$touch()"
          @blur="$v.lastName.$touch()"
        )
        base-input(
          label="Имя"
          classAttr="input-default input-big mb-6"
          v-model="firstName"
          :errors="firstNameErrors"
          @input="$v.firstName.$touch()"
          @blur="$v.firstName.$touch()"
        )
        base-input(
          label="Отчество"
          classAttr="input-default input-big mb-6"
          v-model="middleName"
          :errors="middleNameErrors"
          @input="$v.middleName.$touch()"
          @blur="$v.middleName.$touch()"
        )
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
          classAttr="input-default input-big mb-6"
          v-model="password"
          :errors="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        )
        base-input-password(
          label="Подтвердите Пароль"
          classAttr="input-default input-big"
          v-model="confirmPassword"
          :errors="confirmPasswordErrors"
          @input="$v.confirmPassword.$touch()"
          @blur="$v.confirmPassword.$touch()"
        )
        .note.text-left
          | Используйте буквы, цифры и спецсимволы.<br/> Минимум 8 знаков
        base-checkbox.mt-10(
          v-model="allowPersonalDataProcessing"
          :errors="allowPersonalDataProcessingErrors"
          @input="$v.confirmPassword.$touch()"
          @blur="$v.confirmPassword.$touch()"
        )
          template(#label-custom)
            | Я выражаю согласие на <a href='#' class='text-blue'>обработку персональных данных</a>, нажимая кнопку «Зарегистрироваться»

        base-button(
          classAttr='button-default button-blue button-big w-100 mt-10'
          label="Зарегистрироваться"
          :disabled="$v.$invalid"
          type="submit"
        )

        div(v-if="rejectText" class="reject mt-4")
          | {{ rejectText }}


</template>

<script>
import {required, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators';
import {AuthApi} from '@/store/api';

export default {
  name: "Registration",
  data() {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      allowPersonalDataProcessing: false,
      rejectText: ''

    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50)
    },
    lastName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50)
    },
    middleName: {
      maxLength: maxLength(50)
    },
    email: {
      required,
      email,
      minLength: minLength(7),
      maxLength: maxLength(64)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(50),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password"),
      maxLength: maxLength(50),
    },
    allowPersonalDataProcessing: {
      checked(val) {
        return val;
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();

      AuthApi.registration({
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword
      }).then(response => {
        this.$store.dispatch('auth/login', response.data.data.user.authentication_token);
        this.$router.push("/");
      }, reason => {
        console.log('error');
        console.log(reason);
        this.rejectText = reason.status + ' ' + reason.statusText;
      });
      console.log(this.email)
    }
  },
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.minLength &&
      errors.push("Имя должно содержать минимум 2 символа");
      !this.$v.firstName.maxLength &&
      errors.push("Имя должно содержать максимум 50 символа");
      !this.$v.firstName.required && errors.push("Имя обязательно");
      return errors;
    },
    middleNameErrors() {
      const errors = [];
      if (!this.$v.middleName.$dirty) return errors;
      !this.$v.middleName.maxLength &&
      errors.push("Отчество должно содержать максимум 50 символа");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.minLength &&
      errors.push("Фамилия должна содержать минимум 2 символа");
      !this.$v.lastName.maxLength &&
      errors.push("Фамилия должна содержать максимум 50 символа");
      !this.$v.lastName.required && errors.push("Фамилия");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
      errors.push(
          "Проверьте правильность написания почты. Адрес почта содержит символ @, например:ivanov@pochta.ru"
      );
      !this.$v.email.required && errors.push("Укажите почту");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
      errors.push("Пароль должен содержать минимум 8 символов");
      !this.$v.password.maxLength &&
      errors.push("Пароль должен содержать максимум 50 символов");
      !this.$v.password.required && errors.push("Пароль обязателен");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
      errors.push("Пароли должны совпадать");
      !this.$v.confirmPassword.maxLength &&
      errors.push("Пароль должен содержать максимум 50 символов");
      !this.$v.confirmPassword.required && errors.push("Подтвердите пароль");
      return errors;
    },
    allowPersonalDataProcessingErrors() {
      const errors = [];
      if (!this.$v.allowPersonalDataProcessing.$dirty) return errors;
      !this.$v.allowPersonalDataProcessing.checked &&
      errors.push("Вы должны согласиться!");
      return errors;
    }
  }
}
</script>

<style lang="scss">
.reject {
  color: #EC4865;
}

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

.note {
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}


</style>