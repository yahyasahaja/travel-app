<template>
  <div class="login-container">
    <div class="wrapper">
      <h1>Travel App Login</h1>
      <form class="login-form" @submit.prevent>
        <v-text-field
          v-model="$v.email.$model"
          type="email"
          label="Email"
          filled
          shaped
          :error-messages="emailErrors"
          :error-count="emailErrors.length"
          required
        />
        <v-text-field
          v-model="$v.password.$model"
          type="password"
          label="Password"
          filled
          shaped
          :error-messages="passwordErrors"
          :error-count="passwordErrors.length"
          required
        />
        <v-btn type="submit" color="primary">Login</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$error) return errors
      if (!this.$v.email.required) errors.push('Email can not be blank')
      if (!this.$v.email.emailValidator) {
        errors.push(
          'Email should be the correct form. Example: joe@example.com'
        )
      }

      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$error) return errors
      if (!this.$v.password.required) errors.push('Passsword can not be blank')

      return errors
    }
  },
  validations: {
    email: {
      required,
      emailValidator(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
      }
    },
    password: {
      required
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #34495e;

  .wrapper {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 40px;
    background: white;
    border-radius: 20px;
    text-align: center;

    .login-form {
      margin-top: 20px;
    }
  }
}
</style>
