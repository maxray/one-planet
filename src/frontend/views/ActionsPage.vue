<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import PrincipleHeader from '@/frontend/components/PrincipleHeader.vue'
import ConfirmationModal from '@/frontend/components/ConfirmationModal.vue'
import RemoveIcon from '@/frontend/components/icons/RemoveIcon.vue'
import EditIcon from '@/frontend/components/icons/EditIcon.vue'
import { usePrinciples } from '@/frontend/services/usePrinciples.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'
import { useUserStore } from '@/frontend/stores/userStore.js'
import Preloader from '@/frontend/components/PreloadData.vue'

// Setup stores
const userStore = useUserStore()
const selectionStore = useSelectionStore()

const userData = computed(() => userStore.userData)
const userId = userData.value.id
const metaKey = userStore.metaKey

const { principles, loading } = usePrinciples()
const loaded = ref(false)

const validationMessage = ref('')

const router = useRouter()
const route = useRoute()

// Query URL
const currentOption = computed(() => route.query.option || '1').value
const principleId = parseInt(route.params.principleId, 10)
// End: Query URL ------------------------------------

selectionStore.setCurrentOption(currentOption)
selectionStore.setPrinciple(principleId)

const optionId = currentOption

// Reactive property to store the index of the selected option
const selectedActionId = ref(null)
const selectedAction = ref(null)

const principle = ref(null)
const actions = ref([])

const showModal = ref(false)
const actionToDelete = ref(null)

const openModal = (action) => {
  console.log('OPEN MODAL')
  actionToDelete.value = action
  showModal.value = true
}

const handleConfirm = () => {
  if (actionToDelete.value) {
    deselectAction(actionToDelete.value)
  }
  showModal.value = false
  actionToDelete.value = null // Reset after deletion
}

const handleCancel = () => {
  showModal.value = false
  actionToDelete.value = null // Reset when canceled
}

watchEffect(() => {
  loaded.value = !loading.value

  if (loaded.value) {
    // Data has been loaded, you can perform additional actions here
    // Find the principle once the data is loaded
    // console.log('LOADED: ')
    const foundPrinciple = principles.value.find((p) => p.id === principleId)
    principle.value = foundPrinciple

    // Update actions based on the found principle
    actions.value = foundPrinciple ? foundPrinciple.actions : []
  }
})

const selectAction = async (index, action) => {
  // Reset validation message
  validationMessage.value = ''
  const currentOptionActions = selectionStore.options[currentOption].actions

  // Check if the action is already in the current option's action list
  if (currentOptionActions.some((obj) => obj.actionId === action.id)) {
    validationMessage.value = 'This action is already selected.'
    return // Exit function early
  }

  // Check if we already have 3 selected actions in the current option
  if (currentOptionActions.length > 3) {
    validationMessage.value = 'You can select a maximum of 3 actions.'
    return // Exit function early
  }

  // Update the refs
  selectedActionId.value = index
  selectedAction.value = action
}

const deselectAction = (action) => {
  selectionStore.removeSelectedAction(action.id)
}

const editTools = (action) => {
  if (action.id !== null) {
    selectionStore.addSelectedAction(selectedActionId.value)
    router.push({
      name: 'tools',
      params: { principleId: principle.id, actionId: action.id },
      query: { mode: 'edit', option: currentOption },
    })
  }
}

const selectedActionsList = computed(() => {
  // Extract action objects from the current option
  let actionObjects = selectionStore.options[optionId].actions
  const actionList = []
  if (principle) {
    for (const actionObj of actionObjects) {
      const action = principle.value.actions.find((a) => a.id === actionObj.actionId)

      if (action) {
        const { tools, ...actionWithoutTools } = action
        actionList.push(actionWithoutTools)
      }
    }
  }
  return actionList
})

const availableActions = computed(() => {
  return actions.value.filter(
    (action) => !selectedActionsList.value.some((selected) => selected.id === action.id)
  )
})


const gotoTools = (action) => {
  selectionStore.saveState()

  if (action.id !== null) {
    selectionStore.addSelectedAction(selectedActionId.value)
    router.push({
      name: 'tools',
      params: { principleId: principle.id, actionId: action.id },
      query: { option: currentOption },
    })
  }
}

const gotoActionPlan = async () => {
  try {
    // console.log(selectionStore)
    await selectionStore.sendToWordPress(userId, metaKey)
    router.push({
      name: 'Actionplan',
      query: { option: currentOption },
    })
  } catch (error) {
    console.error('Error in sendToWordPress:', error)
  }
}
</script>

<template>
  <DefaultLayout>
    <preloader v-if="loading" />
    <div v-else>
      <section v-if="loaded" class="section1 h-flow c-section">
        <confirmation-modal v-if="showModal" @confirm="handleConfirm" @cancel="handleCancel">
          <template v-slot:header> Delete Action </template>
          Are you sure you want to delete this action?
        </confirmation-modal>
        <div class="section c-hero h-2-col">
          <div class="c-hero--text">
            <h1>Select an action</h1>
            <div v-html="principle.strapline"></div>
          </div>
          <div v-if="loaded">
            <PrincipleHeader :principle="principle" />
          </div>
        </div>
        <div class="h-flow-none">
          <div class="validation-holder">
            <transition-group name="fade">
              <div v-if="validationMessage" class="validation-holder__message">
                {{ validationMessage }}
              </div>
            </transition-group>
          </div>

          <ul class="c-reel">
            <li v-for="action in availableActions" :key="action.id" class="panel-list__item c-card">
              <button
                class="panel"
                :class="{ selected: action.id === selectedAction }"
                @click="selectAction(action.id, action), gotoTools(selectedAction)"
              >
                <img
                  v-if="action.image"
                  :src="action.image.url"
                  :alt="action.title"
                  class="principle-image"
                />
                <h3>{{ action.title }}</h3>
                <div v-html="action.intro"></div>
              </button>
            </li>
          </ul>

        </div>
        <div class="section c-hero h-2-col h-align-top">
          <div>
            <ul class="panel-list">
              <li v-for="action in selectedActionsList" :key="action.id" class="c-card">
                <div class="panel selected">
                  <div class="panel__header">
                    <h3>{{ action.title }}</h3>
                    <div class="utilities">
                      <button class="c-btn c-btn--utility" @click="() => openModal(action)">
                        <RemoveIcon />
                      </button>
                      <button class="c-btn c-btn--utility" @click="() => editTools(action)">
                        <EditIcon />
                      </button>
                    </div>
                  </div>
                  <div v-html="action.description"></div>
                </div>
              </li>
            </ul>

            <!-- /////// SELECTED ACTION  /////// -->
            <div class="panel_current">
              <div v-if="selectedAction" class="panel selected">
                <div class="panel__header">
                  <h3>{{ selectedAction.title }}</h3>
                </div>
                <div v-html="selectedAction.intro"></div>
              </div>
            </div>
            <!-- <ActionAdd /> -->
          </div>
          <div class="c-feature-box">
            <h3>{{ selectedActionsList.length < 3 ? 'Next... Tools and Support' : 'Back to Principles' }}</h3>
            <button
              v-if="selectedActionsList.length < 3 && selectedAction"
              class="c-btn c-btn--primary"
              @click="() => gotoTools(selectedAction)"
            >
              Choose the selected action
            </button>
            <button
              v-if="selectedActionsList.length >= 1"
              class="c-btn c-btn--primary"
              @click="() => gotoActionPlan()"
            >
              I'm done, pick another principle
            </button>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/panel.scss';

.columns {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
}

.action-selector__header,
.principle-header__content {
  min-height: 15vh;
}

.action-selector__header h2 {
  margin-top: 0;
}
.h-flow-none {
  margin-top: 0;
}
.validation-holder {
  min-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
}
.validation-holder__message {
  background-color: var(--alert);
  color: var(--white);
  text-align: center;
  border-radius: calc(var(--border-radius-s) / 1.5);
  padding: 0 calc(var(--padding-s) * 1.5);
  font-weight: bold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
