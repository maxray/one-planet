/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=template&id=3ac3f853&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=template&id=3ac3f853&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-3ac3f853\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Option: \", -1 /* HOISTED */));\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"principle-icons\"\n};\nconst _hoisted_4 = [\"disabled\", \"onClick\"];\nconst _hoisted_5 = [\"onClick\"];\nconst _hoisted_6 = [\"innerHTML\"];\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, null, -1 /* HOISTED */));\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentOption) + \" | \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.selectionStore.selectedActions) + \" \", 1 /* TEXT */), _hoisted_2]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.principles, principle => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: principle.id\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n        'background-color': principle.color\n      }),\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`principle-icon pi-${principle.id}`),\n      disabled: $setup.isPrincipleSelected[principle.id],\n      onClick: $event => $setup.showPanel(principle.id)\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(principle.title), 15 /* TEXT, CLASS, STYLE, PROPS */, _hoisted_4)]);\n  }), 128 /* KEYED_FRAGMENT */))]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.principles, principle => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: principle.id,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(principle)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(principle.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(principle.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      class: \"btn btn--solid\",\n      onClick: $event => $setup.choosePrinciple(principle)\n    }, \" Choose this principle \", 8 /* PROPS */, _hoisted_5)], 2 /* CLASS */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activePanel === principle.id]]);\n  }), 128 /* KEYED_FRAGMENT */))])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.principles, principle => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: principle.id,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(principle),\n      innerHTML: _ctx.sanitize(principle.video)\n    }, null, 10 /* CLASS, PROPS */, _hoisted_6)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activePanel === principle.id]]);\n  }), 128 /* KEYED_FRAGMENT */)), _hoisted_7], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://three/./src/frontend/components/PrincipleSelect.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=style&index=0&id=3ac3f853&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/frontend/components/PrincipleSelect.vue?vue&type=style&index=0&id=3ac3f853&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(true) {\n      // 1704910094047\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"esModule\":false,\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://three/./src/frontend/components/PrincipleSelect.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use%5B1%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use%5B2%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B0%5D");

/***/ })

});