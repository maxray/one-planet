<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/frontend/stores/userStore.js'

const store = useUserStore()

const isLoggedIn = computed(() => !!store.userData?.username)
const userData = computed(() => store.userData || {})

const logout = () => {
  store.logout()
}
</script>

<template>
  <div v-if="isLoggedIn">
    <header class="app-header">
      <nav>
        <router-link class="btn btn--outline" to="/">Home</router-link>
        <router-link class="btn btn--outline" to="/actionplan">Action plan</router-link>
      </nav>

      <div class="user-controls">
        <strong>{{ userData?.username || 'Guest' }}</strong> |
        <button class="btn-link" @click="logout">Logout</button>
        <!-- {{ currentOption }} -->
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--padding-l);

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  gap: var(--padding-xs);
}

.user-controls {
  text-align: right;
}

button:hover {
  cursor: pointer;
}

@media print {
  .app-header {
    display: none;
  }
}
</style>
