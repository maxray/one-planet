<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/frontend/stores/userStore.js'
import wardsData from '@/frontend/static-data/wards.js'

const wards = wardsData
const store = useUserStore()
const router = useRouter()
const errorMessage = ref('')

const handleSubmit = async (credentials) => {
  try {
    const registrationResponse = await axios.post(
      '/wp-json/vueapp/v1/register',
      credentials,
      {
        headers: {
          'X-WP-Nonce': window.oplbaseNonce,
        },
      }
    )

    if (registrationResponse.data.success) {
      try {
        const loginResponse = await axios.post(
          '/wp-json/vueapp/v1/login', // Adjust this URL to your WordPress login endpoint
          {
            username: credentials.username,
            password: credentials.password,
          }
        )
        await store.login(credentials)
        // Handle login success (e.g., store token, redirect to a dashboard)
        // Example: localStorage.setItem('authToken', loginResponse.data.token)_ne
        // router.push('/actionplan')
      } catch (loginError) {
        console.error('Login Error:', loginError)
        errorMessage.value = 'Auto-login failed. Please log in manually.'
        router.push('/login')
      }
    } else {
      errorMessage.value = 'Registration failed. Please try again.'
    }
  } catch (registrationError) {
    console.log('Registration Error:', registrationError) // Debug: Log the error
    errorMessage.value =
      registrationError.response &&
      registrationError.response.data &&
      registrationError.response.data.message
        ? registrationError.response.data.message
        : 'An error occurred during registration.'
  }
}
</script>

<template>
  <FormKit
    type="form"
    submit-label="Register"
    :submit-class="['c-btn', 'c-btn--primary']"
    @submit="handleSubmit"
  >

    <div class="control">
      <FormKit
        id="username"
        name="username"
        type="text"
        label="Username"
        validation="required"
        placeholder="Enter your username"
      />
    </div>
    <div class="control">
      <FormKit
        id="password"
        name="password"
        type="password"
        label="Password"
        validation="required"
        placeholder="Enter your password"
      />
    </div>
    <div class="control">
      <FormKit
        id="email"
        name="email"
        type="email"
        label="Email"
        validation="required|email"
        placeholder="Enter your email"
      />
    </div>

    <FormKit
      type="select"
      label="Ward"
      name="ward"
      placeholder="Select a ward"
      :options="wards"
    />

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </FormKit>
</template>
