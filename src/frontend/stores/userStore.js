import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/frontend/router/index.js'
import { useSelectionStore } from '@/frontend/stores/selectionStore.js'

export const useUserStore = defineStore('main', {
  state: () => ({
    metaKey: 'user_meta_data',
    isAuthenticated: false,
    errorMessage: '',
    userData: {},
  }),
  actions: {
    checkAuth() {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated === 'true') {
        this.isAuthenticated = true
        this.userData = JSON.parse(localStorage.getItem('userData')) || {} // Retrieve user data
      }
    },

    async login(credentials) {
      this.errorMessage = ''
      try {
        const response = await axios.post('/wp-json/vueapp/v1/login', credentials, {
          withCredentials: true,
        })
        console.log('Login response:', response.data)

        // Check if the login was unsuccessful
        if (!response.data.success) {
          // Manually handle the error
          this.handleError({
            response: {
              data: { message: response.data.message },
            },
          })
          return
        }

        this.isAuthenticated = true
        this.userData = response.data.user || {}
        localStorage.removeItem('appState') // refresh app state on login
        localStorage.setItem('isAuthenticated', 'true') // Save to local storage
        localStorage.setItem('userData', JSON.stringify(this.userData)) // Save user data

        // Fetch user data
        await this.fetchUserData(response.data.user.id)

        // router.push('/actionplan')
      } catch (error) {
        this.handleError(error)
      }
    },

    async fetchUserData(userId) {
      const selectionStore = useSelectionStore()
      await selectionStore.fetchFromWordPress(userId, this.metaKey)
    },

    setUser(data) {
      this.userData = data
    },
    async logout() {
      try {
        // Call WordPress logout endpoint
        await axios.post('/wp-json/vueapp/v1/logout')

        // Clear local session
        this.isAuthenticated = false
        this.userData = {}
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userData')
        localStorage.removeItem('appState')

        // Redirect to home
        router.push('/')
      } catch (error) {
        console.error('Logout Error:', error)
        // Handle any errors here
      }
    },
    handleError(error) {
      this.isAuthenticated = false
      // Set a user-friendly error message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        this.errorMessage = error.response.data.message || 'Login failed. Please try again.'
      } else if (error.request) {
        // The request was made but no response was received
        this.errorMessage = 'No response from server. Check your network connection.'
      } else {
        // Something happened in setting up the request that triggered an Error
        this.errorMessage = 'Error: ' + error.message
      }
    },
  },
})
