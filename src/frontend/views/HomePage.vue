<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/frontend/stores/userStore.js'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import LoginForm from '@/frontend/components/LoginForm.vue'
import RegistrationForm from '@/frontend/components/RegistrationForm.vue'
const logoopl = require('@/frontend/assets/img/logo-opl.png')

const store = useUserStore()
const userData = computed(() => store.userData)
const isAuthenticated = computed(() => store.isAuthenticated)
</script>

<template>
  <DefaultLayout>
    <section class="section1 h-flow c-section">
      <div class="section c-hero h-2-col">
        <div>
          <h1>Begin your One Planet Living<sup>®</sup> Journey</h1>

          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/JZ0erjJFiCE?controls=0"
              frameborder="0"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p>Here you can create an action plan based on your personal goals and priorities. Using the One Planet Living® framework this will provide you with the knowledge and resources to make better choices and help guide you on your sustainable living journey.
              Together we can make Birmingham a greener, happier and healthier place to live.</p>
        </div>

        <div class="c-feature-box">
          <div v-if="isAuthenticated">
             <img :src="logoopl" alt="Logo Eco" class="logo-opl" />
            <p>
              Welcome, <strong>{{ userData.username }}</strong> to our sustainability toolkit.</p>
            
            <p><strong>Start your Action Plan today or access your saved plan.</strong> </p>
            <router-link class="c-btn c-btn--primary" to="/actionplan">Action Plan</router-link>
          </div>
          <div v-else>
            <!-- These are the login and registration forms shown to unauthenticated users -->
            <h3>First Time Here?</h3>
            <p>Enter your Name and Email to get started.</p>
            <RegistrationForm />
            <hr />
            <h3>Returning?</h3>
            <p>Enter your Email to retrieve your plan.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>

.embed-container {
  margin-bottom: 1rem;
}

.logo-opl {
    max-width: 350px;
    margin-bottom: 1rem;
}

.login-row {
  display: flex;
  gap: 1rem;

  .col1 {
    width: 50%;
  }

  .col2 {
    width: 50%;
  }

  .col1,
  .col2 {
    background-color: var(--brand-blue);
    color: var(--white);
    padding: 2rem;
  }
}

.app .c-feature-box p {
  width: 100%;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  /* height: 0;
  overflow: hidden;
  max-width: 100%; */
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
