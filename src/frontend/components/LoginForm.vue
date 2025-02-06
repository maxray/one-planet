<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/frontend/stores/userStore.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'

const userStore = useUserStore()
const selectionStore = useSelectionStore()
const errorMessage = ref('')

const login = async (value) => {
  console.log('LOGIN CALLED')
  try {
    // const response = await axios.post('/wp-json/vueapp/v1/login', value)

    // if (response.data.success) {
    //   await userStore.login(value)

    //   const userId = response.data.user.id
    //   const metaKey = userStore.metaKey
    //   await selectionStore.fetchUserData(userId, metaKey)

    //   console.log('RESPONSE: --', response.data)
    //   console.log('RESPONSE USER ID: --', response.data.user.id)
    //   // router.push({ path: '/login', query: { registered: 'true' } })
    //   // Handle success (e.g., redirect or show a success message)
    // } else {
    //   errorMessage.value =
    //     response.data.message || 'Login failed. Please try again.'
    // }
    await userStore.login(value)
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
      id="username"
      name="username"
      label="Username"
      type="text"
      placeholder="Username"
      autocomplete="current-username"
      validation="required"
    />
    <FormKit
      id="password"
      name="password"
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
