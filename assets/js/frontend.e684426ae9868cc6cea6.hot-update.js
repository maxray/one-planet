/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/ActionPlanPage.vue?vue&type=template&id=6c044f3a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/ActionPlanPage.vue?vue&type=template&id=6c044f3a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6c044f3a\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  key: 1\n};\nconst _hoisted_2 = {\n  class: \"action-plan\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"action-plan__header\"\n};\nconst _hoisted_5 = {\n  class: \"action-plan__title\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Your Action Plan\", -1 /* HOISTED */));\nconst _hoisted_7 = {\n  class: \"action-plan__controls\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" Here are your current chosen principles, click to edit or print out for your records. \", -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"principles\"\n};\nconst _hoisted_10 = {\n  class: \"principle__header\"\n};\nconst _hoisted_11 = [\"src\"];\nconst _hoisted_12 = {\n  class: \"principle-content\"\n};\nconst _hoisted_13 = [\"innerHTML\"];\nconst _hoisted_14 = {\n  class: \"principle-media\"\n};\nconst _hoisted_15 = {\n  class: \"utilities\"\n};\nconst _hoisted_16 = [\"onClick\"];\nconst _hoisted_17 = [\"onClick\"];\nconst _hoisted_18 = {\n  key: 0\n};\nconst _hoisted_19 = [\"innerHTML\"];\nconst _hoisted_20 = {\n  key: 1\n};\nconst _hoisted_21 = [\"src\"];\nconst _hoisted_22 = [\"innerHTML\"];\nconst _hoisted_23 = [\"innerHTML\"];\nconst _hoisted_24 = {\n  key: 1,\n  class: \"principle holder\"\n};\nconst _hoisted_25 = [\"onClick\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup[\"DefaultLayout\"], null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup[\"Preloader\"], {\n      key: 0\n    })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [$setup.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup[\"ConfirmationModal\"], {\n      key: 0,\n      onConfirm: $setup.handleConfirm,\n      onCancel: $setup.handleCancel\n    }, {\n      header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Delete Principle \")]),\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Are you sure you want to delete this Principle? \"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"This will also remove the Principle's associated Actions and Tools. \")]),\n      _: 1 /* STABLE */\n    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n      class: \"btn btn--solid\",\n      to: \"/printhome\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Print Action Plan\")]),\n      _: 1 /* STABLE */\n    })])]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.fetchedData, (data, index) => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        key: data.id\n      }, [data.principleName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n        key: 0,\n        class: \"principle filled\",\n        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n          backgroundColor: data.principleColor,\n          color: '#ffffff'\n        })\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('principle-icon pi-' + data.principleId)\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n        src: data.principleIcon.url,\n        alt: \"{{ data.principleName }}\"\n      }, null, 8 /* PROPS */, _hoisted_11)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.principleName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n        innerHTML: data.principleDescription\n      }, null, 8 /* PROPS */, _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n        class: \"c-btn c-btn--utility invert\",\n        onClick: () => $setup.openModal(data.principleId, index + 1)\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"RemoveIcon\"])], 8 /* PROPS */, _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n        class: \"c-btn c-btn--utility invert\",\n        onClick: $event => $setup.editPrinciple(data.principleId, index + 1)\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Edit Actions and Tools \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"EditIcon\"])], 8 /* PROPS */, _hoisted_17)]), data.principleVideo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Render video if set \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n        innerHTML: data.principleVideo\n      }, null, 8 /* PROPS */, _hoisted_19)])) : data.principleImage.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Render image if video is not set \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n        src: data.principleImage.url,\n        alt: \"Image Alt Text\",\n        class: \"principle-image\"\n      }, null, 8 /* PROPS */, _hoisted_21)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(data.actions, action => {\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n          key: action.id,\n          class: \"panel\"\n        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(action.actionName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n          innerHTML: action.actionDescription\n        }, null, 8 /* PROPS */, _hoisted_22), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(action.tools, tool => {\n          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n            key: tool.id,\n            class: \"panel tool\"\n          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tool.toolTitle), 1 /* TEXT */), tool.toolDescription ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"p\", {\n            key: 0,\n            innerHTML: tool.toolDescription\n          }, null, 8 /* PROPS */, _hoisted_23)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n        }), 128 /* KEYED_FRAGMENT */))]);\n      }), 128 /* KEYED_FRAGMENT */))], 4 /* STYLE */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n        class: \"btn btn--solid\",\n        onClick: $event => $setup.gotoPrinciples(index + 1)\n      }, \" Add a principle \", 8 /* PROPS */, _hoisted_25)]))], 64 /* STABLE_FRAGMENT */);\n    }), 128 /* KEYED_FRAGMENT */))])])]))]),\n    _: 1 /* STABLE */\n  });\n}\n\n//# sourceURL=webpack://three/./src/frontend/views/ActionPlanPage.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/ActionPlanPage.vue?vue&type=style&index=0&id=6c044f3a&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/ActionPlanPage.vue?vue&type=style&index=0&id=6c044f3a&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(true) {\n      // 1717758393130\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"esModule\":false,\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://three/./src/frontend/views/ActionPlanPage.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use%5B1%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use%5B2%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});