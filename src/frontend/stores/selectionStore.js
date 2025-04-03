import { defineStore } from 'pinia'
import axios from 'axios'
import { saveStateToLocal, loadStateFromLocal } from '@/frontend/services/localStorageUtils.js'

export const useSelectionStore = defineStore({
  id: 'selection',

  state: () => {
    const savedState = loadStateFromLocal()
    return (
      savedState || {
        options: {
          1: {
            currentPrinciple: null,
            actions: [],
          },
          2: {
            currentPrinciple: null,
            actions: [],
          },
          // DUMMY DATA
          // 1: {
          //   currentPrinciple: 2,
          //   actions: [
          //     1,
          //     2,
          //     {
          //       actionId: '1',
          //       tools: [1699877598153, 1699877603730, 2],
          //     },
          //     {
          //       actionId: '2',
          //       tools: [2, 1],
          //     },
          //   ],
          // },
          // 2: {
          //   currentPrinciple: 8,
          //   actions: [
          //     1,
          //     2,
          //     {
          //       actionId: '1',
          //       tools: [2499877598153, 2499877603730, 3],
          //     },
          //     {
          //       actionId: '2',
          //       tools: [2, 1],
          //     },
          //   ],
          // },
          3: { currentPrinciple: null, actions: [] },
        },
        currentOption: 1, // Default to option1
        principle: null,
        selectedActions: [],
      }
    )
  },

  actions: {
    setCurrentOption(optionName) {
      // this.currentOption = optionName
      this.currentOption = Number(optionName)
    },

    setPrinciple(principleId) {
      this.options[this.currentOption].currentPrinciple = principleId
    },

    removePrinciple(optionId) {
      if (this.options[optionId]) {
        this.options[optionId].currentPrinciple = null
        this.options[optionId].actions = []
        saveStateToLocal(this.$state)
      } else {
        console.warn('Option not found:', optionId)
      }
    },

    addSelection(principleId, actionId, tools) {
      const currentOptionData = this.options[this.currentOption]
      currentOptionData.currentPrinciple = principleId

      // Check if the action is already added. If not, add it with its tools.
      let existingAction = currentOptionData.actions.find((a) => a.actionId === actionId)

      const toolIds = tools.map((tool) => tool.id)

      if (existingAction) {
        // Append tools if they aren't already stored
        toolIds.forEach((toolId) => {
          if (!existingAction.tools.includes(toolId)) {
            existingAction.tools.push(toolId)
          }
        })
      } else {
        currentOptionData.actions.push({
          actionId: actionId,
          tools: toolIds,
        })
      }
    },

    addToolToAction(optionId, actionId, toolId) {
      // Check if the option and action exist
      if (this.options[optionId] && this.options[optionId].actions) {
        // Find the action that matches the given actionId
        const action = this.options[optionId].actions.find((a) => a.actionId == actionId)

        if (action) {
          // Check if the tool is already in the list
          if (!action.tools.includes(toolId)) {
            // Add the tool to the action's tools array
            action.tools.push(toolId)
          } else {
            console.warn('Tool already exists in the action:', toolId)
          }
        } else {
          console.error('Action not found:', actionId)
        }
      } else {
        console.error('Option not found:', optionId)
      }
    },

    removeToolFromAction(optionId, actionId, toolId) {
      // console.log('toolId: ', toolId)
      // console.log('actionId: ', actionId)
      // console.log('optionId: ', optionId)
      const action = this.options[optionId].actions.find((a) => a.actionId === actionId)
      if (action) {
        action.tools = action.tools.filter((id) => id !== toolId)
      }
    },

    addSelectedAction(actionId) {
      // console.log('addSelectedAction: ', actionId)
      const currentActions = this.options[this.currentOption].actions

      // Check if the selected action is already in the list
      const existingAction = currentActions.find((action) => action.actionId === actionId)
      // console.log('asasd', currentActions.length)
      if (!existingAction) {
        // Count the number of actions
        if (currentActions.length < 6) {
          currentActions.push({
            actionId: actionId,
            tools: [], // initially empty, but you can populate it if needed.
          })
        } else {
          console.warn('You can select a maximum of 3 actions.')
        }
      } else {
        console.warn('This action is already selected.')
      }
    },

    removeSelectedAction(actionId) {
      // console.log('actionId: ', actionId)
      const currentActions = this.options[this.currentOption].actions
      const actionIndex = currentActions.findIndex((action) => action.actionId === actionId)

      if (actionIndex !== -1) {
        currentActions.splice(actionIndex, 1)
      } else {
        console.warn('Action ID not found in selectedActions.')
      }
    },

    removePrinciple(optionId) {
      // Confirm deletion of the principle
      if (this.options[optionId]) {
        this.options[optionId].currentPrinciple = null;
        this.options[optionId].actions = [];
        saveStateToLocal(this.$state);
      } else {
        console.warn('Option not found:', optionId);
      }
    },
  // }

    clearSelectedActions() {
      this.selectedActions = []
    },

    getStoredToolsForAction(actionId) {
      // Get the actions array for the current option
      const currentActions = this.options[this.currentOption].actions

      // Find the action object that matches the given actionId
      const actionObject = currentActions.find((action) => action.actionId == actionId)

      // Check if actionObject exists and has a tools property
      if (actionObject && Array.isArray(actionObject.tools)) {
        return actionObject.tools
      } else {
        // Log the error condition for debugging
        console.error('Action not found or tools not present:', actionId, actionObject)
        return []
      }
    },

    // New action to send data to WordPress
    async sendToWordPress(userId, metaKey) {
      console.log(' SEND TO WORDPRESS CALLED!! ----')
      console.log('Store Options data: ', this.options)

      try {
        const url = '/wp-json/vueapp/v1/update_user_meta'
        const response = await axios.post(url, {
          user_id: userId,
          meta_key: metaKey,
          options: this.options,
        })

        // Handle the response
        console.log('Data sent successfully:', response.data)
        saveStateToLocal(this.$state)
      } catch (error) {
        console.error('Error sending data to WordPress:', error)
      }
    },

    saveState() {
      saveStateToLocal(this.$state)
    },

    async fetchFromWordPress(userId, metaKey) {
      localStorage.removeItem('appState')
      try {
        const url = '/wp-json/vueapp/v1/get_user_meta'
        const response = await axios.get(url, {
          params: {
            user_id: userId,
            meta_key: metaKey,
          },
        })

        // Assuming the response is in the correct format
        if (response.data && response.data.options) {
          this.options = response.data.options
          saveStateToLocal(this.$state)
        } else {
          console.error('Invalid response format:', response.data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
  },
})
