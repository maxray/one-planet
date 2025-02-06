<script>
import RegistrationForm from '@/frontend/components/RegistrationForm.vue'
export default {
  name: 'RegisterUser',
  components: {
    RegistrationForm,
  },
  beforeCreate() {
    console.log('Before Create - RegisterUser')
  },
  created() {
    console.log('Created - RegisterUser')
  },
}
</script>

<template>
  <div class="login">
    <h2>Register</h2>
    <RegistrationForm />
  </div>
</template>
