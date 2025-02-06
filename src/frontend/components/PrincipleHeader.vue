<script setup>
// import { defineProps } from 'vue'

defineProps({
  principle: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="principle-header">
    <div class="principle-header__icon">
      <div
        :style="{ 'background-color': principle.color }"
        :class="`principle-icon pi-${principle.id}`"
      >
        <img :src="principle.icon.url" alt="{{ principle.title }}" />
      </div>
    </div>
    <div class="principle-header__content">
      <h2>{{ principle.title }}</h2>
      <div v-html="principle.description"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/principle-icons.scss';

.principle-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  h2 {
    margin-top: 0;
  }
}
.principle-header__icon {
  display: flex;
}
.principle-icon {
  width: 120px;
  height: 120px;
  margin-right: 1rem;
}
</style>
