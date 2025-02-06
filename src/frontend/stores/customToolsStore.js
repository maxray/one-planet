// customToolsStore.js
import { defineStore } from 'pinia'

export const useCustomToolsStore = defineStore({
  id: 'customTools',
  state: () => ({
    options: {
      // 1: {
      //   actions: [
      //     {
      //       actionId: 1,
      //       tools: [
      //         { id: 1699877598153, title: 'sdfsdf', description: 'sdfsdf' },
      //         { id: 1699877603730, title: 'ertert', description: 'ertert' },
      //       ],
      //     },
      //   ],
      // },
      // 2: {
      //   actions: [
      //     {
      //       actionId: 1,
      //       tools: [
      //         { id: 2499877598153, title: 'uiouio', description: 'uiouio' },
      //         { id: 2499877603730, title: 'bnmbnm', description: 'bnmbnm' },
      //       ],
      //     },
      //   ],
      // },
      1: { actions: [] },
      2: { actions: [] },
      3: { actions: [] },
    },
  }),
  actions: {
    addCustomTool(optionId, actionId, tool) {
      // Find the action within the option
      const action = this.options[optionId].actions.find(
        (a) => a.actionId === actionId
      )
      if (action) {
        // If the action exists, append the tool
        action.tools.push(tool)
      } else {
        // If the action does not exist, create it and add the tool
        this.options[optionId].actions.push({
          actionId,
          tools: [tool],
        })
      }
    },

    getCustomTool(actionId, optionId, toolId) {
      // Get the actions array for the current option
      const currentActions = this.options[optionId].actions
      // Find the action object that matches the given actionId
      const actionObject = currentActions.find(
        (action) => action.actionId == actionId
      )

      // Check if actionObject exists and has a tools property
      if (actionObject && Array.isArray(actionObject.tools)) {
        // console.log('Tools for Action:', actionObject.tools)
        return actionObject.tools
      } else {
        // Log the error condition for debugging
        console.error(
          'Action not found or tools not present:',
          actionId,
          actionObject
        )
        return []
      }
    },
  },
})
