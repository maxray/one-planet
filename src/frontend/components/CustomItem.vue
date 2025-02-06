<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  clickFunction: Function,
})

const emit = defineEmits(['update:title', 'update:description'])

const localTitle = ref(props.title)
const localDescription = ref(props.description)

const updateTitle = () => {
  emit('update:title', localTitle.value)
}

const updateDescription = () => {
  emit('update:description', localDescription.value)
}

const handleClick = () => {
  if (props.clickFunction) {
    props.clickFunction()
  }
}
// Use updateTitle and updateDescription wherever needed to change title or description
</script>

<template>
  <div>
    <label>
      Tool Title:
      <input v-model="localTitle" placeholder="Enter tool title" @input="updateTitle" />
    </label>
    <label>
      Tool Description:
      <textarea
        v-model="localDescription"
        placeholder="Enter tool description"
        @input="updateDescription"
      ></textarea>
    </label>

    <button class="btn btn-outline" @click="handleClick">Add Custom Tool</button>
  </div>
</template>
