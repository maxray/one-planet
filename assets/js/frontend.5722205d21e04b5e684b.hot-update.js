/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=template&id=3ac3f853&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=template&id=3ac3f853&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"c-feature-box\"\n};\nconst _hoisted_2 = {\n  class: \"principle-icons\"\n};\nconst _hoisted_3 = [\"disabled\", \"onClick\"];\nconst _hoisted_4 = [\"src\", \"alt\"];\nconst _hoisted_5 = {\n  key: 0,\n  class: \"principle default-pane\"\n};\nconst _hoisted_6 = {\n  key: 0\n};\nconst _hoisted_7 = {\n  key: 1\n};\nconst _hoisted_8 = [\"innerHTML\"];\nconst _hoisted_9 = {\n  key: 0\n};\nconst _hoisted_10 = [\"innerHTML\"];\nconst _hoisted_11 = {\n  key: 1,\n  class: \"principle-image\"\n};\nconst _hoisted_12 = [\"src\"];\nconst _hoisted_13 = [\"onClick\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.principles, principle => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: principle.id\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n        'background-color': principle.color\n      }),\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`principle-icon pi-${principle.id}`),\n      disabled: $setup.isPrincipleSelected[principle.id],\n      onClick: $event => $setup.showPanel(principle.id)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n      src: principle.icon.url,\n      alt: principle.title\n    }, null, 8 /* PROPS */, _hoisted_4)], 14 /* CLASS, STYLE, PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(principle.title), 1 /* TEXT */)]);\n  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Default Content Pane \"), $setup.activePanel === -1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_5, [$setup.props.username && $setup.props.currentOption === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"h2\", _hoisted_6, \" Let us Begin... \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.username) + \", pick your first principle from the grid of icons, click on one to view a little more information. \", 1 /* TEXT */)) : $setup.props.username && $setup.props.currentOption > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"h2\", _hoisted_7, \" OK \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.username) + \", pick another principle. \", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" Choose a One Planet Living Principle that you want to add to your toolkit. The next page will provide you with information and options for actions to implement in your lifestyle. \", -1 /* HOISTED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Selected Principle Content \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.principles, principle => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: principle.id,\n      class: \"principle\"\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(principle.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      innerHTML: principle.description\n    }, null, 8 /* PROPS */, _hoisted_8), principle.video ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n      innerHTML: principle.video,\n      class: \"principle-video\"\n    }, null, 8 /* PROPS */, _hoisted_10)])) : principle.image.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n      src: principle.image.url,\n      alt: \"Image Alt Text\",\n      class: \"principle-image\"\n    }, null, 8 /* PROPS */, _hoisted_12)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      class: \"btn btn--solid\",\n      onClick: $event => $setup.choosePrinciple(principle)\n    }, \" Choose this principle \", 8 /* PROPS */, _hoisted_13)])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activePanel === principle.id]]);\n  }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://three/./src/frontend/components/PrincipleSelect.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=style&index=0&id=3ac3f853&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=style&index=0&id=3ac3f853&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1743669630270\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"esModule\":false});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://three/./src/frontend/components/PrincipleSelect.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use%5B1%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use%5B2%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});