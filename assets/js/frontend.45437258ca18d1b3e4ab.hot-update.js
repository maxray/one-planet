/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./src/frontend/router/index.js":
/*!**************************************!*\
  !*** ./src/frontend/router/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontend_views_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/frontend/views/Home.vue */ \"./src/frontend/views/Home.vue\");\n/* harmony import */ var _frontend_views_PrinciplesPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/frontend/views/PrinciplesPage.vue */ \"./src/frontend/views/PrinciplesPage.vue\");\n/* harmony import */ var _frontend_views_ToolsPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/frontend/views/ToolsPage.vue */ \"./src/frontend/views/ToolsPage.vue\");\n/* harmony import */ var _frontend_views_LoginPage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/frontend/views/LoginPage.vue */ \"./src/frontend/views/LoginPage.vue\");\n/* harmony import */ var _frontend_views_RegisterUser_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/frontend/views/RegisterUser.vue */ \"./src/frontend/views/RegisterUser.vue\");\n/* harmony import */ var _frontend_views_ActionsPage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/frontend/views/ActionsPage.vue */ \"./src/frontend/views/ActionsPage.vue\");\n/* harmony import */ var _frontend_views_ActionsPage_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_frontend_views_ActionsPage_vue__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _frontend_views_ActionPlanPage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/frontend/views/ActionPlanPage.vue */ \"./src/frontend/views/ActionPlanPage.vue\");\n/* harmony import */ var _frontend_views_TestPage_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/frontend/views/TestPage.vue */ \"./src/frontend/views/TestPage.vue\");\n/* harmony import */ var _frontend_stores_userStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/frontend/stores/userStore.js */ \"./src/frontend/stores/userStore.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n\n\n\n\n\n\n\n\n\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createWebHashHistory)(),\n  routes: [{\n    path: '/',\n    name: 'Home',\n    component: _frontend_views_Home_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }, {\n    path: '/login',\n    name: 'Login',\n    component: _frontend_views_LoginPage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/register',\n    name: 'Register',\n    component: _frontend_views_RegisterUser_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: '/get_user_meta',\n    name: 'Get user meta'\n  }, {\n    path: '/update_user_meta',\n    name: 'Update user meta'\n  }, {\n    path: '/principles',\n    name: 'Principles',\n    component: _frontend_views_PrinciplesPage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/principle/:principleId/action',\n    name: 'actions',\n    component: (_frontend_views_ActionsPage_vue__WEBPACK_IMPORTED_MODULE_5___default()),\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/principle/:principleId/action/:actionId/tools',\n    name: 'tools',\n    component: _frontend_views_ToolsPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/actionplan',\n    name: 'Actionplan',\n    component: _frontend_views_ActionPlanPage_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/test',\n    name: 'Test',\n    component: _frontend_views_TestPage_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }]\n});\n\n// router.beforeEach(async (to, from, next) => {\n//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)\n//   const isAuthenticated = await checkLoginStatus()\n\n//   if (requiresAuth && !isAuthenticated) {\n//     next({ name: 'Login' }) // redirect to login page\n//   } else {\n//     next() // proceed as normal\n//   }\n// })\n\nrouter.beforeEach((to, from, next) => {\n  const store = (0,_frontend_stores_userStore_js__WEBPACK_IMPORTED_MODULE_8__.useUserStore)();\n  if (to.matched.some(record => record.meta.requiresAuth) && !store.isAuthenticated) {\n    next({\n      path: '/login'\n    });\n  } else {\n    next();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://three/./src/frontend/router/index.js?");

/***/ }),

/***/ "./src/frontend/views/ActionsPage.vue":
/*!********************************************!*\
  !*** ./src/frontend/views/ActionsPage.vue ***!
  \********************************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://three/./src/frontend/views/ActionsPage.vue?");

/***/ })

});