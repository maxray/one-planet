<script setup>
import axios from 'axios'

// const castRangeToNumber = (node) => {
//   // We add a check to add the cast only to range inputs
//   if (node.props.type !== 'range') return

//   node.hook.input((value, next) => next(Number(value)))
// }

// const axios = {
//   post: () => new Promise(r => setTimeout(r, 2000))
// }

async function handleRegistration(credentials) {
  const res = await axios.post('/wp-json/vueapp/v1/register', credentials)
  console.log(res)
  // do some login things now
  alert('Logged in!')
}
</script>

<!-- <script>
import axios from 'axios';

export default {
  name: "RegistrationForm",
  beforeCreate() {
    console.log('Before Create - RegistrationForm');
  },
  created() {
    console.log('Created - RegistrationForm');
  },

  data() {
    return {
      user: {
        username: '',
        password: '',
        email: ''
      },
      errorMessage: null
    };
  },
  methods: {
    async handleRegistration() {
      try {
        const response = await axios.post('/wp-json/vueapp/v1/register', this.user);
        console.log(response.data);
        if (response.data && response.data.success) {
          // Handle successful registration (e.g., navigate to login page or show a success message)
        } else {
          this.errorMessage = "Registration failed";
        }
      } catch (error) {
        this.errorMessage = error.message || "Error occurred during registration";
      }
    }
  },
  mounted() {
    console.log('User Object:', this.user);
  },
}
</script> -->

<template>
  <FormKit type="form" submit-label="Register" @submit="handleRegistration">
    <FormKit
      id="signup_username"
      type="text"
      name="signup_username"
      autocomplete="new-username"
      label="Username"
    />
    <FormKit
      id="signup_password"
      type="password"
      name="signup_password"
      autocomplete="new-password"
      label="Password"
    />
    <FormKit id="signup_email" type="email" name="signup_email" label="Email" />
  </FormKit>
  <!-- <div>
    <form @submit.prevent="handleRegistration">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="user.username" />

      <label for="password">Password</label>
      <input type="password" name="password" v-model="user.password" />

      <label for="email">Email</label>
      <input type="email" name="email" v-model="user.email" />

      <button type="submit">Register</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div> -->
</template>

<style>
/* Add your styles here */
</style>
