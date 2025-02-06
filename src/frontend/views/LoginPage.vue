<script>
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import LoginForm from '@/frontend/components/LoginForm.vue'
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    DefaultLayout,
  },
}
</script>

<template>
  <DefaultLayout>
    <div class="login">
      <h2>Login</h2>
      <LoginForm />
    </div>
    <p>
      Don't have an account?
      <router-link to="/register">Register here</router-link>
    </p>
  </DefaultLayout>
</template>
