<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import PrincipleHeader from '@/frontend/components/PrincipleHeader.vue'
import { usePrinciples } from '@/frontend/services/usePrinciples.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'
import RemoveIcon from '@/frontend/components/icons/RemoveIcon.vue'
import Preloader from '@/frontend/components/PreloadData.vue'

const { principles, loading } = usePrinciples()
const loaded = ref(false)

const selectionStore = useSelectionStore()

const router = useRouter()
const route = useRoute()

// Query URL
const currentOption = computed(() => route.query.option || '1').value
const principleId = parseInt(route.params.principleId)
const actionId = parseInt(route.params.actionId)
// End: Query URL ------------------------------------

const optionId = currentOption

const principle = ref(null)
const action = ref([])
const tools = ref([])

const selectedToolIds = ref(new Set())

watchEffect(() => {
  loaded.value = !loading.value

  if (loaded.value) {
    // Data has been loaded, you can perform additional actions here
    // Find the principle once the data is loaded
    console.log('LOADED: ')
    const foundPrinciple = principles.value.find((p) => p.id === principleId)
    principle.value = foundPrinciple

    const foundAction = foundPrinciple.actions.find((a) => a.id === actionId)
    action.value = foundAction

    tools.value = foundAction ? foundAction.tools : []
  }
})

const storedOptionData = selectionStore.options[optionId]
selectionStore.addSelectedAction(actionId)

// Get tools relevant to the current action
// Validation messages
const toolSelectionValidation = ref('')

// const selectTool = (tool) => {
//   const totalTools = fetchedData.value.length
//   const toolAlreadyInFetchedData = fetchedData.value.some((t) => t.toolId === tool.id)

//   if (totalTools < 3 && !toolAlreadyInFetchedData) {
//     // Save the tool in the store
//     selectionStore.addToolToAction(optionId, actionId, tool.id)
//     toolSelectionValidation.value = ''
//   } else if (toolAlreadyInFetchedData) {
//     // Remove the tool if it's already selected
//     selectionStore.removeToolFromAction(optionId, actionId, tool.id)
//     if (totalTools === 3) {
//       toolSelectionValidation.value = ''
//     }
//   } else {
//     toolSelectionValidation.value = 'You can only select up to 3 tools.'
//   }
// }

const selectTool = (tool) => {
  if (selectedToolIds.value.has(tool.id)) {
    deselectStoredTool(tool)
  } else {
    if (selectedToolIds.value.size < 3) {
      selectionStore.addToolToAction(optionId, actionId, tool.id)
      selectedToolIds.value.add(tool.id)
      toolSelectionValidation.value = ''
    } else {
      toolSelectionValidation.value = 'You can only select up to 3 tools.'
    }
  }
}


// ____________________________________________
// FETCHED DATA -------------------------------
function fetchDataFromStore(storedOptionData) {
  const result = []

  const toolIdList = selectionStore.getStoredToolsForAction(actionId)

  // get data for tools and custom tools
  for (const toolId of toolIdList) {
    const tool = action.value.tools.find((t) => t.id === toolId)

    if (tool) {
      result.push({
        toolId: tool.id,
        toolTitle: tool.title,
        toolDescription: tool.description,
      })
    }
  }
  return result
}

const fetchedData = computed(() => fetchDataFromStore(storedOptionData))

// FETCHED DATA -------------------------------
// ____________________________________________

// const deselectStoredTool = (tool) => {
//   // Remove the tool from the store
//   selectionStore.removeToolFromAction(optionId, actionId, tool.toolId)
//   const totalTools = fetchedData.value.length
//   // Refresh fetchedData to reflect the changes made to the store
//   if (totalTools < 3) {
//     toolSelectionValidation.value = ''
//   }
// }

const deselectStoredTool = (tool) => {
  selectionStore.removeToolFromAction(optionId, actionId, tool.id)
  selectedToolIds.value.delete(tool.id)
}


const saveSelection = async (tools) => {
  selectionStore.saveState()

  router.push({
    name: 'actions',
    params: { principleId: principleId },
    query: { option: currentOption },
  })
}
</script>

<script>
export default {
  name: 'OplTools',
  components: {
    DefaultLayout,
  },
}
</script>

<template>
  <DefaultLayout>
    <preloader v-if="loading" />
    <div v-else>
      <section class="section1 h-flow c-section">
        <div class="section c-hero h-2-col">
          <div class="c-hero--text">
            <h1>What tools or support do you need?</h1>
            <p>View the links and resources that will help you meet your goal.</p>
          </div>
          <div v-if="loaded">
            <PrincipleHeader :principle="principle" />
          </div>
        </div>
        <div class="main-content">
          <div v-if="loaded">
            <!-- /////// CURRENT ACTION /////// -->
            <div v-if="action" class="panel selected wide-style">
              <img
                v-if="action.image"
                :src="action.image.url"
                alt="{{ action.title }}"
                class="principle-image"
              />
              <div>
                <h3>{{ action.title }}</h3>
                <div v-html="action.description"></div>
              </div>
            </div>
            <div class="validation-area">
              <transition-group name="fade">
                <span v-if="toolSelectionValidation" class="validation-message">{{
                  toolSelectionValidation
                }}</span>
              </transition-group>
            </div>
            <button v-if="selectedToolIds.size > 0" 
                    class="c-btn c-btn--primary" 
                    @click="saveSelection">
              Continue with these selections
            </button>

            <h3>Select tools below and then click continue when you are happy.</h3>

            <hr />

            <!-- Display tools relevant to the current action -->
            <ul class="panel-list">
  <li v-for="tool in tools" :key="tool.id" 
      :class="['panel-list__item', { selected: selectedToolIds.has(tool.id) }]">
    <div class="panel tool" @click="() => selectTool(tool)">
      <h3>{{ tool.title }}</h3>
      <p v-if="tool.description" v-html="tool.description"></p>
      
      <!-- Show remove button inside selected tools -->
      <button v-if="selectedToolIds.has(tool.id)" 
              class="c-btn c-btn--utility remove-btn" 
              @click.stop="() => deselectStoredTool(tool)">
        <RemoveIcon />
      </button>
    </div>
  </li>
</ul>
<hr>
 <button v-if="selectedToolIds.size > 0" 
                    class="c-btn c-btn--primary" 
                    @click="saveSelection">
              Continue with these selections
            </button>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/panel.scss';

.main-content {
  width: 100%;
}

.wide-style img {
  max-width: 100%;
  width: 100%;
}
.columns {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.validation-area {
  position: relative;
  height: 2rem;
}
.validation-message {
  background-color: #00ffad;
  color: #006f4c;
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.25rem 0;
  width: 100%;
  border-radius: var(--base-radius);
  position: absolute;
  margin-bottom: 1rem;
}
.col-2 h2 {
  margin-top: 0;
}

.selected-tools {
  display: flex;
  gap: 0.5rem;

  .panel {
    padding: var(--padding-xs);
  }
}
</style>
