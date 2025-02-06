<script setup>
// import { ref, defineProps, emit } from 'vue'
import { ref, emit } from 'vue'

const props = defineProps({
  tools: {
    type: Array,
    default: () => [],
  },
})
console.log('props.tools: ', JSON.stringify(props.tools))

// Define props using the withDefaults API or type annotations
// const props = defineProps({
//   tools: {
//     type: Array,
//     required: true,
//   },
// })

const customTool = ref({ title: '', description: '' })

const addCustomTool = () => {
  const tools = props.tools
  console.log('tools: ', tools)

  emit('selectCustomTool')

  // if (!customTool.value.title || !customTool.value.description) {
  //   alert('Both title and description are required.')
  //   return
  // }

  // // Create a new tool object
  // const newTool = {
  //   id: tools.length + 1, // or generate a unique ID
  //   title: customTool.value.title,
  //   description: customTool.value.description,
  // }

  // // Add the new tool to the existing tools list
  // tools.push(newTool)

  // // Optionally, add the tool to the store or perform other actions

  // // Clear the input fields
  // customTool.value = { title: '', description: '' }
}
</script>

<!-- <template>
  <FormKit type="form" submit-label="Add custom tool">
    <FormKit
      id="tool_title"
      type="text"
      name="tool_title"
      placeholder="tool title"
    />
    <FormKit
      id="tool_description"
      type="text"
      name="tool_description"
      placeholder="Description of the tool"
    />
  </FormKit>
</template> -->

<template>
  <!-- Add Custom Tool -->
  <div class="custom-tool-form">
    <label>
      Tool Title:
      <input v-model="customTool.title" placeholder="Enter tool title" />
    </label>
    <label>
      Tool Description:
      <textarea
        v-model="customTool.description"
        placeholder="Enter tool description"
      ></textarea>
    </label>
    <button @click="addCustomTool">Add Custom Tool</button>
  </div>
</template>

<style scoped lang="scss"></style>
