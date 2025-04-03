<script setup>
import { computed, watchEffect, ref } from 'vue'
import { useUserStore } from '@/frontend/stores/userStore.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import LoginForm from '@/frontend/components/LoginForm.vue'
import RegistrationForm from '@/frontend/components/RegistrationForm.vue'

const logoopl = require('@/frontend/assets/img/logo-opl.png')

const store = useUserStore()
const selectionStore = useSelectionStore()

const userData = computed(() => store.userData)
const isAuthenticated = computed(() => store.isAuthenticated)

// Get the user-selected principles
const selectedPrinciples = computed(() => {
  return Object.values(selectionStore.options) // Extract selected principles from store
})

// Check if the user has chosen at least one principle
const hasSelectedPrinciples = computed(() => {
  return selectedPrinciples.value.some((data) => data.currentPrinciple) // If any exist, return true
})

// Debugging logs
watchEffect(() => {
  console.log('User-selected principles:', selectedPrinciples.value)
  console.log('Has selected principles?', hasSelectedPrinciples.value)
})
</script>




<template>
  <DefaultLayout>
    <section class="section1 h-flow c-section">
      <div class="section c-hero h-2-col">
        <div>
          <h1> Welcome to our Sustainability Toolkit! </h1>
          <p>Using the One Planet Living® framework this will provide you with the knowledge and tools needed to make more sustainable choices.</p>

          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/JZ0erjJFiCE?controls=0"
              frameborder="0"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p>Whether you're looking to reduce your carbon footprint, conserve resources, or support local biodiversity, our toolkit offers practical tips and guidance to help you on your journey towards a greener, healthier lifestyle.</p>  
          <p>Let's make better choices to create a more sustainable future!</p>
        </div>

        <div class="c-feature-box">
          <div v-if="isAuthenticated">
             <img :src="logoopl" alt="Logo Eco" class="logo-opl" />
            <p>
              <strong>{{ userData.username }},</strong> start your Sustainability Action Plan today or access your saved plan. </p>
            <router-link
              class="c-btn c-btn--primary"
              :to="hasSelectedPrinciples ? '/actionplan' : '/principles?option=1'"
            >
              Action Plan
            </router-link>


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
