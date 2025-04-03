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

import { nextTick } from 'vue'

const showPanel = (id) => {
  if (activePanel.value !== id) {
    // If the clicked panel is not already active, show it
    activePanel.value = id
    
    // Wait for the DOM to update
    nextTick(() => {
      // Scroll to the panel
      const panelElement = document.getElementById(id)
      if (panelElement) {
        panelElement.scrollIntoView({
          behavior: 'smooth',  // Smooth scroll
          block: 'start',      // Align to the top of the container
        })
      }
    })
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

import { defineProps } from 'vue'

const props = defineProps({
  username: String,
  currentOption: Number,
});

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
            <img :src="principle.icon.url" :alt="principle.title" />
          </button>
          <p>{{ principle.title }}</p>
        </li>
      </ul>
    </div>
  </div>

  <!-- Default Content Pane -->
  <div v-if="activePanel === -1" class="principle default-pane" >
     <h2 v-if="props.username && props.currentOption === 1">
      Let us Begin... {{ props.username }}, the aim is to choose three One Planet Living Principles to add to your action plan. Pick your first principle from the grid of icons. 
    </h2>
    <h2 v-else-if="props.username && props.currentOption > 1">
      OK {{ props.username }}, pick another principle.
    </h2>
        <p v-if="props.username && props.currentOption === 1">
          Click on each one to view a little more information. Choose a principle that is important to you and it will be added to your action plan. 
        </p>
        <p v-else-if="props.username && props.currentOption > 1">
        Choose a One Planet Living Principle that you want to add to your action plan. Creating a sustainability action plan is a proactive step towards building a greener, happier, and healthier community. 
        </p>
  </div>

  <!-- Selected Principle Content -->
  <div
    v-for="principle in principles"
    v-show="activePanel === principle.id"
    :key="principle.id"
    class="principle"
    :id="principle.id"
  >
    <h3>{{ principle.title }}</h3>
    <div v-html="principle.description"></div>
    <div v-if="principle.video">
      <div v-html="principle.video" class="principle-video"></div>
    </div>
    <div v-else-if="principle.image.url" class="principle-image">
      <img :src="principle.image.url" alt="Image Alt Text" class="principle-image" />
    </div>
    <p>The next page will provide you with more information, options for actions to implement in your lifestyle and resources to help you on your sustainability journey. </p>
    <button class="btn btn--solid" @click="choosePrinciple(principle)">
      Choose this principle
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/principle-icons.scss';

.principle h3 {
  margin: 0 0 var(--padding) 0;
}
</style>
