<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'
import { usePrinciples } from '@/frontend/services/usePrinciples.js'

// Get Pinia store instance
const selectionStore = useSelectionStore()

// Get Vue Router instance
const router = useRouter()
const route = useRoute()

const currentOption = computed(() => route.query.option || '1').value
console.log('currentOption: ', currentOption)

// Set stored option
selectionStore.setCurrentOption(currentOption)

const { principles } = usePrinciples()

const selectedPrinciples = computed(() => {
  return Object.values(selectionStore.options).map((option) => option.currentPrinciple)
})

const isPrincipleSelected = computed(() => {
  const map = {}
  for (const id of selectedPrinciples.value) {
    map[id] = true
  }
  return map
})

const activePanel = ref(-1)

// Define the method
const showPanel = (index) => {
  if (activePanel.value !== index) {
    // If the clicked panel is not already active, show it
    activePanel.value = index
  }
}

const choosePrinciple = (principle) => {
  selectionStore.setPrinciple(principle)
  selectionStore.clearSelectedActions()
  router.push({
    name: 'actions',
    params: { principleId: principle.id },
    query: { option: currentOption },
  })
}
</script>

<template>
  <div>
    <div class="c-feature-box">
      <ul class="principle-icons">
        <li v-for="principle in principles" :key="principle.id">
          <button
            :style="{ 'background-color': principle.color }"
            :class="`principle-icon pi-${principle.id}`"
            :disabled="isPrincipleSelected[principle.id]"
            @click="showPanel(principle.id)"
          >
            <img :src="principle.icon.url" alt="{{ principle.title }}" />
          </button>
          <p>{{ principle.title }}</p>
        </li>
      </ul>
    </div>
  </div>
  <div
    v-for="principle in principles"
    v-show="activePanel === principle.id"
    :key="principle.id"
    class="principle"
    :class="principle"
  >
    <h3>{{ principle.title }}</h3>
    <div v-html="principle.description"></div>
    <div v-if="principle.video">
      <!-- Render video if set -->
      <div v-html="principle.video"></div>
    </div>
    <div v-else-if="principle.image.url">
      <!-- Render image if video is not set -->
      <img :src="principle.image.url" alt="Image Alt Text" class="principle-image" />
    </div>
    <button class="btn btn--solid" @click="choosePrinciple(principle)">
      Choose this principle
    </button>
  </div>
  <div>
</div>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/principle-icons.scss';

.principle h3 {
  margin: 0 0 var(--padding) 0;
}
</style>
