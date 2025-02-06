<script setup>
import { computed } from 'vue'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'
import PrincipleSelect from '@/frontend/components/PrincipleSelect.vue'
import { useUserStore } from '@/frontend/stores/userStore.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'

const store = useUserStore()
const selectionStore = useSelectionStore()

const currentOption = computed(() => selectionStore.currentOption)
const username = computed(() => store.userData.username)
</script>

<script>
// Export component for older syntax compatibility (like global registration)
export default {
  name: 'OplPrinciples',
  components: {
    DefaultLayout,
  },
}
</script>

<template>
  <DefaultLayout>
    <div>
      <div>
        <h2 v-if="username && currentOption === 1">
          Let us Begin... OK {{ username }}, pick your first principle.
        </h2>
        <h2 v-else-if="username && currentOption > 1">
          OK {{ username }}, pick another principle.
        </h2>
        <p>
          Choose a One Planet Living Principle that you want to add to your toolkit. The next page will provide you with information and options for actions to implement in your lifestyle.
        </p>
      </div>

      <div class="container">
        <PrincipleSelect />
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.container {
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 1em 1em;
  }
}
</style>
