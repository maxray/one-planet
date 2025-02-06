import { ref, onMounted } from 'vue'

export function usePrinciples() {
  const principles = ref([])
  const loading = ref(true)

  const fetchPrinciples = async () => {
    try {
      const response = await fetch('/wp-json/vueapp/v1/principles')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      principles.value = data.principles
    } catch (error) {
      console.error('Error fetching principles:', error)
    } finally {
      loading.value = false // Set loading to false when fetch is complete
    }
  }

  onMounted(fetchPrinciples)

  return { principles, loading }
}
