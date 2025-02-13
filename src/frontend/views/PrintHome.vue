<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import { usePrinciples } from '@/frontend/services/usePrinciples.js'
import { useUserStore } from '@/frontend/stores/userStore.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'

const store = useUserStore()
const userData = computed(() => store.userData)
// import logo from '@/frontend/assets/img/logo-eco.png'
const logo = require('@/frontend/assets/img/logo-eco.png')

const selectionStore = useSelectionStore()
const storedData = selectionStore.options

const { principles, loading } = usePrinciples()
const loaded = ref(false)

const route = useRoute()
const currentOption = computed(() => route.query.option || '1').value

const printPage = () => {
  window.print()
}

// Set stored option
selectionStore.setCurrentOption(currentOption)

// const optionId = currentOption
const loadedPrinciples = ref([])
const actions = ref([])
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
            actionImage: action.image,
            tools: tools,
          })
        }
      }

      result.push({
        principleName: principleName,
        principleDescription: principleDescription,
        principleColor: principleColor,
        principleIcon: principleIcon,
        principleId: principleId,
        actions: actionData,
      })
    } 
  }

  return result
}
</script>

<template>
  <DefaultLayout>
    <div class="print-plan">
      <section class="print-options">
        <router-link class="btn btn--outline no-printer" to="/printrequest">I don't have a printer</router-link>
        <button class="btn btn--solid" @click="printPage">Print</button>
      </section>

      <div class="action-plan">
        <div class="print__header">
          <div class="print__logo">
            <img :src="logo" alt="Logo Eco" class="logo-eco" />
          </div>
          <div class="print__title">
            <h1>{{ userData.username }}’s One Planet Living Action Plan</h1>
          </div>
          <div></div>
        </div>
        <div class="principles">
          <template v-for="data in fetchedData" :key="data.id">
            <div class="principle-column" :style="{
          backgroundColor: data.principleColor,
          boxShadow: `inset 0 0 0 1000px ${data.principleColor}`,
        }">
              <div class="principle__intro">
                <div class="principle__header">
                  <div :class="'principle-icon pi-' + data.principleId">
                    <div :class="'principle-icon pi-' + data.principleId">
                      <img v-if="data.principleIcon" :src="data.principleIcon.url" :alt="data.principleName" />
                    </div>

                  </div>
                  <h2>{{ data.principleName }}</h2>
                </div>
                <div class="principle__description_wrapper">
                  <div v-strip-html="data.principleDescription" class="principle__description"></div>
                </div>
              </div>

              <template v-if="data.principleName">
                <div class="principle filled" :style="{
                    backgroundColor: data.principleColor,
                    boxShadow: `inset 0 0 0 1000px ${data.principleColor}`,
                  }">
                  <div v-for="action in data.actions" :key="action.id" class="panel">
                    <div class="action__info">
                      <div class="action__image">
                        <img v-if="action.actionImage" :src="action.actionImage.url" alt="{{ action.title }}" />
                      </div>

                      <div class="action__description">
                        <h3>{{ action.actionName }}</h3>
                        <div class="action__text" v-html="action.actionDescription"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
@import '@/frontend/scss/panel.scss';
@import '@/frontend/scss/principle-icons.scss';

.no-printer {
  margin-right: var(--padding-xs) !important;
}

body {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

h3 {
  font-size: 1rem !important;
  line-height: 1.3;
  padding-bottom: 0.3rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.print-options {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--padding);
}

.panel {
  padding: var(--padding-xs);
  background-color: #fff;
}

.panel .action__image {
  width: 110px;
  height: 110px;
  float: left;
  position: relative;
  background-color: #ccc;
  overflow: hidden;

  img {
    position: absolute;
    overflow: hidden;
  }
}

.panel.tool {
  padding: 0.25rem 1rem 0.25rem;

  h4 {
    font-size: 1.25rem;
  }
}

.print__header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;
  align-items: center;
}

.print__logo {
  margin-top: 7px;
}

.logo-eco {
  width: 230px;
  height: auto;
}

.print__title h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-align: center;
}

.action__text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  overflow: hidden;
}

.action__description {
  float: left;
  padding-left: 10px;
  width: 185px;
  margin: 0;
  height: 147px;
  // overflow: hidden;
  h3 {
    color: var(--black);
    height: 42px;
  }
}

.principles {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--padding);
}

.principle-column{
  border-radius: var(--border-radius-xs);
}

.principle {
  padding: var(--padding-xs);
  border-radius: var(--border-radius-xs);
  display: flex;
  align-items: center;
  justify-content: center;
}

.principle__description_wrapper {
  overflow: hidden;
  height: 6rem;
}

.principle__description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  margin: 0;
  font-size: 0.875rem;
  margin-top: 0.2rem;
  @media screen and (min-width: 768px) {
    font-size: 0.813rem;
  }
}

.principle__description {
  padding: .5rem;
}
.principle.filled {
  flex-direction: column;
}

.principle__header {
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    font-size: 1.3rem;
  }
}

@media print {
  @page {
    size: A4 landscape;
    margin: 0;
  }
}
</style>
