<template>
  <div class="login-container">
    <div class="wrapper">
      <h1>Travel App Login</h1>
      <form @submit.prevent="submitForm">
        <v-text-field
          v-model="$v.email.$model"
          filled
          shaped
          type="email"
          label="Email"
          :error-count="emailErrors.length"
          :error-messages="emailErrors"
        />
        <v-text-field
          v-model="$v.password.$model"
          filled
          shaped
          type="password"
          label="Password"
          :error-count="passwordErrors.length"
          :error-messages="passwordErrors"
        />
        <v-btn type="submit" color="primary">Submit</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      emailErrors: [],
      passwordErrors: []
    }
  },
  methods: {
    checkEmailErrors() {
      const errors = []
      if (!this.$v.email.$error) return errors

      if (!this.$v.email.required) errors.push('Email field can not be blank')
      if (!this.$v.email.emailValidation) {
        errors.push('Email field should be following email signature')
      }

      return errors
    },
    checkPasswordErrors() {
      const errors = []
      if (!this.$v.password.$error) return errors

      if (!this.$v.password.required) {
        errors.push('Password field can not be blank')
      }
      if (!this.$v.password.minLength) {
        errors.push('Password should be more than 6 characters length')
      }

      return errors
    },
    submitForm() {
      this.emailErrors = this.checkEmailErrors()
      this.passwordErrors = this.checkPasswordErrors()
    }
  },
  validations: {
    email: {
      required,
      emailValidation: email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #34495e;
  height: 100vh;

  .wrapper {
    max-width: 400px;
    width: 100%;
    background: white;
    border-radius: 50px;
    text-align: center;
    padding: 20px;
  }
}
</style>
