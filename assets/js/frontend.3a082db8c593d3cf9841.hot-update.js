/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _frontend_stores_selectionStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/frontend/stores/selectionStore.js */ \"./src/frontend/stores/selectionStore.js\");\n/* harmony import */ var _frontend_services_usePrinciples_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/frontend/services/usePrinciples.js */ \"./src/frontend/services/usePrinciples.js\");\n\n\n\n\n\n\n// Get Pinia store instance\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'PrincipleSelect',\n  props: {\n    username: String,\n    currentOption: Number\n  },\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const selectionStore = (0,_frontend_stores_selectionStore_js__WEBPACK_IMPORTED_MODULE_2__.useSelectionStore)();\n\n    // Get Vue Router instance\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute)();\n    const currentOption = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => route.query.option || '1').value;\n    console.log('currentOption: ', currentOption);\n\n    // Set stored option\n    selectionStore.setCurrentOption(currentOption);\n    const {\n      principles\n    } = (0,_frontend_services_usePrinciples_js__WEBPACK_IMPORTED_MODULE_3__.usePrinciples)();\n    const selectedPrinciples = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {\n      return Object.values(selectionStore.options).map(option => option.currentPrinciple);\n    });\n    const isPrincipleSelected = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {\n      const map = {};\n      for (const id of selectedPrinciples.value) {\n        map[id] = true;\n      }\n      return map;\n    });\n    const activePanel = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(-1);\n\n    // Define the method\n    const showPanel = id => {\n      if (activePanel.value !== id) {\n        // If the clicked panel is not already active, show it\n        activePanel.value = id;\n\n        // Scroll to the panel\n        const panelElement = document.getElementById(id);\n        if (panelElement) {\n          panelElement.scrollIntoView({\n            behavior: 'smooth',\n            // Smooth scroll\n            block: 'start' // Align to the top of the container\n          });\n        }\n      }\n    };\n    const choosePrinciple = principle => {\n      selectionStore.setPrinciple(principle);\n      selectionStore.clearSelectedActions();\n      router.push({\n        name: 'actions',\n        params: {\n          principleId: principle.id\n        },\n        query: {\n          option: currentOption\n        }\n      });\n    };\n    const props = __props;\n    const __returned__ = {\n      selectionStore,\n      router,\n      route,\n      currentOption,\n      principles,\n      selectedPrinciples,\n      isPrincipleSelected,\n      activePanel,\n      showPanel,\n      choosePrinciple,\n      props,\n      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,\n      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,\n      get useRouter() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter;\n      },\n      get useRoute() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute;\n      },\n      get useSelectionStore() {\n        return _frontend_stores_selectionStore_js__WEBPACK_IMPORTED_MODULE_2__.useSelectionStore;\n      },\n      get usePrinciples() {\n        return _frontend_services_usePrinciples_js__WEBPACK_IMPORTED_MODULE_3__.usePrinciples;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://three/./src/frontend/components/PrincipleSelect.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=style&index=0&id=3ac3f853&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=style&index=0&id=3ac3f853&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1743669942407\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"esModule\":false});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://three/./src/frontend/components/PrincipleSelect.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use%5B1%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use%5B2%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});