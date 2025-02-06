<script>
import AppHeader from '@/frontend/components/AppHeader.vue'
import AppFooter from '@/frontend/components/AppFooter.vue'
export default {
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <div>
    <AppHeader />
    <slot></slot>
    <AppFooter />
  </div>
</template>
