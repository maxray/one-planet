<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/frontend/stores/userStore.js'

const userStore = useUserStore()
const errorMessage = ref('')

const login = async (value) => {
  console.log('LOGIN CALLED')
  try {
    const credentials = {
      username: value.login_username,
      password: value.login_password,
    }
    await userStore.login(credentials)
  } catch (error) {
    console.error('Login Error:', error)
    // Handle any additional login errors here

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage.value =
        error.response.data.message || 'An error occurred during login.'
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage.value =
        'No response received from the server. Please check your network connection.'
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage.value =
        'An error occurred while setting up the login request.'
    }
  }
}
</script>
<template>
  <FormKit
    #default="{ value }"
    type="form"
    submit-label="Login"
    :actions="false"
    @submit="login"
  >
    <FormKit
      id="login-username"
      name="login_username"
      label="Username"
      type="text"
      placeholder="Username"
      autocomplete="current-username"
      validation="required"
      
    />
    <FormKit
      id="login-password"
      name="login_password"
      label="Password"
      type="password"
      placeholder="Password"
      autocomplete="current-password"
      validation="required"
    />
    <FormKit type="submit" label="Login" />
    <p v-if="errorMessage" v-html="errorMessage"></p>
  </FormKit>
</template>
