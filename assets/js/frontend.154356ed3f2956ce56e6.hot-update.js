"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/LoginForm.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/LoginForm.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _frontend_stores_userStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/frontend/stores/userStore.js */ \"./src/frontend/stores/userStore.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'LoginForm',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const lostPasswordUrl = window.oplbaseData?.lostPasswordUrl || '/wp-login.php?action=lostpassword&from=oplplugin';\n    const userStore = (0,_frontend_stores_userStore_js__WEBPACK_IMPORTED_MODULE_1__.useUserStore)();\n    const errorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');\n    const login = async value => {\n      console.log('LOGIN CALLED');\n      try {\n        const credentials = {\n          username: value.login_username,\n          password: value.login_password\n        };\n        await userStore.login(credentials);\n      } catch (error) {\n        console.error('Login Error:', error);\n        // Handle any additional login errors here\n\n        if (error.response) {\n          // The request was made and the server responded with a status code\n          // that falls out of the range of 2xx\n          errorMessage.value = error.response.data.message || 'An error occurred during login.';\n        } else if (error.request) {\n          // The request was made but no response was received\n          errorMessage.value = 'No response received from the server. Please check your network connection.';\n        } else {\n          // Something happened in setting up the request that triggered an Error\n          errorMessage.value = 'An error occurred while setting up the login request.';\n        }\n      }\n    };\n    const __returned__ = {\n      lostPasswordUrl,\n      userStore,\n      errorMessage,\n      login,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      get useUserStore() {\n        return _frontend_stores_userStore_js__WEBPACK_IMPORTED_MODULE_1__.useUserStore;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://three/./src/frontend/components/LoginForm.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});