/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/PrintHome.vue?vue&type=template&id=4fd37ef2&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/PrintHome.vue?vue&type=template&id=4fd37ef2&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"print-plan\"\n};\nconst _hoisted_2 = {\n  class: \"action-plan\"\n};\nconst _hoisted_3 = {\n  class: \"print__header\"\n};\nconst _hoisted_4 = {\n  class: \"print__logo\"\n};\nconst _hoisted_5 = [\"src\"];\nconst _hoisted_6 = {\n  class: \"print__title\"\n};\nconst _hoisted_7 = {\n  class: \"principles\"\n};\nconst _hoisted_8 = {\n  class: \"principle__intro\"\n};\nconst _hoisted_9 = {\n  class: \"principle__header\"\n};\nconst _hoisted_10 = [\"src\", \"alt\"];\nconst _hoisted_11 = {\n  class: \"principle__description_wrapper\"\n};\nconst _hoisted_12 = {\n  class: \"principle__description\"\n};\nconst _hoisted_13 = {\n  class: \"action__info\"\n};\nconst _hoisted_14 = {\n  class: \"action__image\"\n};\nconst _hoisted_15 = [\"src\"];\nconst _hoisted_16 = {\n  class: \"action__description\"\n};\nconst _hoisted_17 = [\"innerHTML\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _directive_strip_html = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)(\"strip-html\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup[\"DefaultLayout\"], null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"You can print out this plan or - if you would prefer a PDF click print and choose 'Save as PDF' instead of choosing your printer!\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"section\", {\n      class: \"print-options\"\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      class: \"btn btn--solid\",\n      onClick: $setup.printPage\n    }, \"Print\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n      src: $setup.logo,\n      alt: \"Logo Eco\",\n      class: \"logo-eco\"\n    }, null, 8 /* PROPS */, _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.userData.username) + \"’s One Planet Living Action Plan\", 1 /* TEXT */)]), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, null, -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.fetchedData, data => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n        key: data.id,\n        class: \"principle-column\",\n        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n          backgroundColor: data.principleColor,\n          boxShadow: `inset 0 0 0 1000px ${data.principleColor}`\n        })\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('principle-icon pi-' + data.principleId)\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('principle-icon pi-' + data.principleId)\n      }, [data.principleIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n        key: 0,\n        src: data.principleIcon.url,\n        alt: data.principleName\n      }, null, 8 /* PROPS */, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)], 2 /* CLASS */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.principleName), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, null, 512 /* NEED_PATCH */), [[_directive_strip_html, data.principleDescription]])])]), data.principleName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n        key: 0,\n        class: \"principle filled\",\n        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({\n          backgroundColor: data.principleColor,\n          boxShadow: `inset 0 0 0 1000px ${data.principleColor}`\n        })\n      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(data.actions, action => {\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n          key: action.id,\n          class: \"panel\"\n        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [action.actionImage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n          key: 0,\n          src: action.actionImage.url,\n          alt: \"{{ action.title }}\"\n        }, null, 8 /* PROPS */, _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(action.actionName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n          class: \"action__text\",\n          innerHTML: action.actionDescription\n        }, null, 8 /* PROPS */, _hoisted_17)])])]);\n      }), 128 /* KEYED_FRAGMENT */))], 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)], 4 /* STYLE */);\n    }), 128 /* KEYED_FRAGMENT */))])])])]),\n    _: 1 /* STABLE */\n  });\n}\n\n//# sourceURL=webpack://three/./src/frontend/views/PrintHome.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/PrintHome.vue?vue&type=style&index=0&id=4fd37ef2&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/frontend/views/PrintHome.vue?vue&type=style&index=0&id=4fd37ef2&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1741863116226\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"esModule\":false});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://three/./src/frontend/views/PrintHome.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use%5B1%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use%5B2%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});