<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import { usePrinciples } from '@/frontend/services/usePrinciples.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'
import RemoveIcon from '@/frontend/components/icons/RemoveIcon.vue'
import EditIcon from '@/frontend/components/icons/EditIcon.vue'
import ConfirmationModal from '@/frontend/components/ConfirmationModal.vue'
import Preloader from '@/frontend/components/PreloadData.vue'

const selectionStore = useSelectionStore()
const storedData = selectionStore.options

const { principles, loading } = usePrinciples()
const loaded = ref(false)

const router = useRouter()
const route = useRoute()
let currentOption = computed(() => route.query.option || '1').value

// Set stored option
selectionStore.setCurrentOption(currentOption)

const loadedPrinciples = ref([])
const fetchedData = ref()

watchEffect(() => {
  loaded.value = !loading.value

  if (loaded.value) {
    // Data has been loaded, you can perform additional actions here
    // Find the principle once the data is loaded
    console.log('LOADED: ')

    loadedPrinciples.value = principles.value
    fetchedData.value = fetchDataFromStore(storedData)
  }
})

function fetchDataFromStore(storedData) {
  const result = []
  // Loop through each option in storedData
  for (const option in storedData) {
    const optionData = storedData[option]
    const principle = loadedPrinciples.value.find(
      (p) => p.id === parseInt(optionData.currentPrinciple)
    )

    if (principle) {
      const principleName = principle.title
      const principleDescription = principle.description
      const principleColor = principle.color
      const principleIcon = principle.icon
      const principleId = principle.id
      const principleVideo = principle.video
      const principleImage = principle.image

      const actionData = []

      for (const actionWithTool of optionData.actions) {
        const action = principle.actions.find((a) => a.id === parseInt(actionWithTool.actionId))
        if (action) {
          const tools = actionWithTool.tools
            .map((toolId) => {
              const tool = action.tools.find((t) => t.id === toolId)
              if (tool) {
                return {
                  toolId: tool.id,
                  toolTitle: tool.title,
                  toolDescription: tool.description,
                }
              }
            })
            .filter(Boolean) // Filter out any undefined values in case a tool isn't found

          actionData.push({
            actionName: action.title,
            actionDescription: action.description,
            tools: tools,
          })
        }
      }

      result.push({
        principleName: principleName,
        principleDescription: principleDescription,
        principleColor: principleColor,
        principleIcon: principleIcon,
        principleVideo: principleVideo,
        principleImage: principleImage,
        principleId: principleId,
        actions: actionData,
      })
    } else {
      result.push({
        principleName: null,
        actions: null,
      })
    }
  }
  return result
}

const gotoPrinciples = (option) => {
  selectionStore.setCurrentOption(option)
  router.push({
    name: 'Principles',
    query: { option },
  })
}

const editPrinciple = (id, optionId) => {
  selectionStore.setCurrentOption(optionId)
  router.push({
    name: 'actions',
    params: { principleId: id },
    query: { mode: 'edit', option: optionId },
  })
}

const showModal = ref(false)
const itemToDelete = ref(null)

const openModal = (principleId, optionId) => {
  console.log('OPEN MODAL with principleId:', principleId, 'and optionId:', optionId)
  itemToDelete.value = { principleId, optionId }
  showModal.value = true
}

const handleConfirm = () => {
  if (itemToDelete.value) {
    // Call the store action with the correct optionId
    selectionStore.removePrinciple(itemToDelete.value.optionId)
    showModal.value = false
    itemToDelete.value = null // Reset after deletion
  }
}

const handleCancel = () => {
  showModal.value = false
  itemToDelete.value = null // Reset when canceled
}
</script>

<template>
  <DefaultLayout>
    <preloader v-if="loading" />
    <div v-else>
      <div class="action-plan">
        <confirmation-modal v-if="showModal" @confirm="handleConfirm" @cancel="handleCancel">
          <template #header> Delete Principle </template>
          Are you sure you want to delete this Principle? <br />This will also remove the
          Principle's associated Actions and Tools.
        </confirmation-modal>

        <div class="action-plan__header">
          <div class="action-plan__title">
            <h1>Your Action Plan</h1>

            <div class="action-plan__controls">
              <router-link class="btn btn--solid" to="/printhome">Print Action Plan</router-link>
            </div>
          </div>
          <p>
            Here are your current chosen principles, click to edit or print out for your records.
          </p>
        </div>
        <div class="principles">
          <template v-for="(data, index) in fetchedData" :key="data.id">
            <template v-if="data.principleName">
              <div
                class="principle filled"
                :style="{
                  backgroundColor: data.principleColor,
                  color: '#002f49',
                }"
              >
                <div class="principle__header">
                  <div :class="'principle-icon pi-' + data.principleId">
                    <img :src="data.principleIcon.url" alt="{{ data.principleName }}" />
                  </div>

                  <div class="principle-content">
                    <h2>{{ data.principleName }}</h2>
                    <div v-html="data.principleDescription"></div>
                  </div>

                  <div class="principle-media">
                    <div class="utilities">
                      <button
                        class="c-btn c-btn--utility invert"
                        @click="() => openModal(data.principleId, index + 1)"
                      >
                        <RemoveIcon />
                      </button>
                      <button
                        class="c-btn c-btn--utility invert"
                        @click="editPrinciple(data.principleId, index + 1)"
                      >
                        <!-- Edit Actions and Tools -->
                        <EditIcon />
                      </button>
                    </div>
                    <div v-if="data.principleVideo">
                      <!-- Render video if set -->
                      <div v-html="data.principleVideo" class="principle-video"></div>
                    </div>
                    <div v-else-if="data.principleImage.url">
                      <!-- Render image if video is not set -->
                      <img
                        :src="data.principleImage.url"
                        alt="Image Alt Text"
                        class="principle-image"
                      />
                    </div>
                  </div>
                </div>

                <div v-for="action in data.actions" :key="action.id" class="panel">
                  <h3>{{ action.actionName }}</h3>
                  <div v-html="action.actionDescription"></div>
                  <div v-for="tool in action.tools" :key="tool.id" class="panel tool">
                    <h4>{{ tool.toolTitle }}</h4>
                    <p v-if="tool.toolDescription" v-html="tool.toolDescription"></p>
                  </div>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="principle holder">
                <button class="btn btn--solid" @click="gotoPrinciples(index + 1)">
                  Add a principle
                </button>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/panel.scss';
@import '@/frontend/scss/principle-icons.scss';

.action-plan__title {
  display: flex;
  justify-content: space-between;
  align-items: center;

@media screen and (max-width: 600px) {
  flex-direction: column;
}

}

.principles {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--padding-l);
}

.principle {
  padding: var(--padding);
  border-radius: var(--border-radius-s);
  display: flex;
  align-items: center;
  justify-content: center;
}

.principle__header {
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: var(--padding);
  gap: var(--padding);

  .principle-image , iframe{
    max-width: 300px;
    height: auto;
    margin-bottom: 1rem;
    } 

  .principle-icon,
  .principle-media {
    flex: 0 0 auto;
  }

  .utilities {
    padding-bottom: var(--padding);
  }

  .principle-content {
    flex: 1 1 0px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  h2 {
    margin-top: 0;
  }
}

.principle.holder {
  border: 1px solid var(--base-content-100);
  border-radius: var(--base-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.principle.filled {
  flex-direction: column;

  >* , h2  {
    color: #002f49;
  }

  .panel {
    background-color: #ffffff;
    color: #2b2b2b;;
  }
}

.panel.tool {
  padding: 0.25rem 1rem 0.25rem;

  h4 {
    font-size: 1.25rem;
  }
}

.app .c-feature-box {
@media only screen and (max-width: 768px) {
    display: flex;
    block-size: auto;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0;
    list-style: none;
    scrollbar-color: #fff var(--brand-blue);
}
}


</style>
