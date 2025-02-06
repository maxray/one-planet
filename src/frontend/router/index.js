import ActionsPage from '@/frontend/views/ActionsPage.vue'
import ActionPlanPage from '@/frontend/views/ActionPlanPage.vue'
import Home from '@/frontend/views/HomePage.vue'
import LoginPage from '@/frontend/views/LoginPage.vue'
import PrinciplesPage from '@/frontend/views/PrinciplesPage.vue'
import PrintHome from '@/frontend/views/PrintHome.vue'
import PrintPage from '@/frontend/views/PrintPage.vue'
import PrintRequest from '@/frontend/views/PrintRequest.vue'
import RegisterUser from '@/frontend/views/RegisterUser.vue'
import ToolsPage from '@/frontend/views/ToolsPage.vue'
import { useUserStore } from '@/frontend/stores/userStore.js'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterUser,
    },
    {
      path: '/principles',
      name: 'Principles',
      component: PrinciplesPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/principle/:principleId/action',
      name: 'actions',
      component: ActionsPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/principle/:principleId/action/:actionId/tools',
      name: 'tools',
      component: ToolsPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/actionplan',
      name: 'Actionplan',
      component: ActionPlanPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/printhome',
      name: 'PrintHome',
      component: PrintHome,
      meta: { requiresAuth: true },
    },
    {
      path: '/printpage',
      name: 'PrintPage',
      component: PrintPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/printrequest',
      name: 'PrintRequest',
      component: PrintRequest,
      meta: { requiresAuth: true },
    },
    // API routes ----------------------------------
    {
      path: '/get_user_meta',
      name: 'Get user meta',
    },
    {
      path: '/update_user_meta',
      name: 'Update user meta',
    },
    {
      path: '/send_email',
      name: 'Send email',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()

  if (to.matched.some((record) => record.meta.requiresAuth) && !store.isAuthenticated) {
    // If the route requires authentication and the user is not authenticated
    next({ path: '/login' })
  } else {
    // In all other cases, proceed as normal
    next()
  }

  // // If the user is already authenticated and trying to access the homepage
  // if (store.isAuthenticated && to.path === '/') {
  //   next({ path: '/actionplan' }) // Redirect to the action plan page
  // } else if (
  //   to.matched.some((record) => record.meta.requiresAuth) &&
  //   !store.isAuthenticated
  // ) {
  //   // If the route requires authentication and the user is not authenticated
  //   next({ path: '/login' }) // Redirect to login
  // } else {
  //   // In all other cases, proceed as normal
  //   next()
  // }
})

export default router
