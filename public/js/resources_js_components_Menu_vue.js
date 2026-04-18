"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_Menu_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    environment: {
      type: Object,
      "default": function _default() {}
    },
    renderTop: {
      type: Boolean,
      "default": false
    },
    initialNewItems: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    toolbarDisabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      changeItems: {},
      newItems: this.initialNewItems,
      sectionRight: true,
      items: [],
      selectedLanguage: "es"
    };
  },
  computed: {
    rightMenus: function rightMenus() {
      return this.renderTop ? this.section.rightTop : this.section.right;
    },
    section: function section() {
      var _this = this;
      var response = {};
      response.left = [];
      response.right = [];
      response.rightTop = [];
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.items = [];
      this.options.forEach(function (item) {
        if (item.type === "group") {
          item.items.forEach(function (sub) {
            _this.items.push(sub.id);
            return Object.assign(sub, _this.changeItems[sub.id]);
          });
        }
        response[item.section].push(Object.assign(item, _this.changeItems[item.id]));
        _this.items.push(item.id);
      });
      this.newItems.forEach(function (item) {
        if (_this.items.indexOf(item.id) === -1) {
          response[item.section].push(item);
          _this.items.push(item.id);
        }
      });
      return response;
    }
  },
  methods: {
    handleNavigate: function handleNavigate(action) {
      switch (action === null || action === void 0 ? void 0 : action.value) {
        case "discard-draft":
          window.ProcessMaker.EventBus.$emit("open-versions-discard-modal");
          break;
        case "create-template":
          window.ProcessMaker.EventBus.$emit("show-create-template-modal");
          break;
        default:
          if (action.action) {
            this.executeFunction(action.action);
          }
          break;
      }
    },
    executeFunction: function executeFunction(callback) {
      if (typeof callback === "function") {
        callback();
      } else {
        // eslint-disable-next-line no-eval
        eval("this.environment.".concat(callback));
      }
    },
    visibleItems: function visibleItems(item) {
      return item.items.filter(function (button) {
        return button.hide !== true;
      });
    },
    isVisible: function isVisible(item, type) {
      if (item.type === type && item.hide !== true) {
        if (item.displayCondition) {
          // eslint-disable-next-line no-eval
          return eval("this.environment.".concat(item.displayCondition));
        }
        return true;
      }
      return false;
    },
    changeItem: function changeItem(id, value) {
      this.changeItems[id] = value;
      this.changeOptions(this.section.left);
      this.changeOptions(this.section.right);
    },
    changeOptions: function changeOptions(data) {
      var _this2 = this;
      data.forEach(function (item) {
        var newItem = Object.assign(item, _this2.changeItems[item.id]);
        if (newItem.type === "group") {
          _this2.changeOptions(newItem.items);
        }
      });
    },
    addItem: function addItem(value) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return index !== null ? this.newItems.splice(index, 0, value) : this.newItems.push(value);
    },
    removeItem: function removeItem(idToRemove) {
      var indexToRemove = this.newItems.findIndex(function (element) {
        return element.id === idToRemove;
      });
      if (indexToRemove !== -1) {
        this.newItems.splice(indexToRemove, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-header", [_c("b-row", [!_vm.renderTop ? _c("b-col", [_vm._l(_vm.section.left, function (item, index) {
    return [_vm.isVisible(item, "group") ? _c("b-button-group", {
      key: index,
      attrs: {
        size: "sm"
      }
    }, _vm._l(_vm.visibleItems(item), function (button, indexButton) {
      return _c("b-button", {
        key: indexButton,
        staticClass: "text-capitalize",
        attrs: {
          variant: button.variant || "secondary",
          title: button.title,
          "data-cy": "toolbar-".concat(button.id),
          tabindex: "1"
        },
        on: {
          click: function click($event) {
            return _vm.executeFunction(button.action);
          }
        }
      }, [_c("i", {
        "class": button.icon
      }), _vm._v("\n            " + _vm._s(button.name) + "\n          ")]);
    }), 1) : _vm._e(), _vm._v(" "), _vm.isVisible(item, "button") ? _c("b-button", {
      key: index,
      staticClass: "text-capitalize",
      attrs: {
        size: "sm",
        variant: item.variant || "secondary",
        title: item.title
      },
      on: {
        click: function click($event) {
          return _vm.executeFunction(item.action);
        }
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n          " + _vm._s(item.name) + "\n        ")]) : _vm._e(), _vm._v(" "), item.type !== "group" && item.type !== "button" ? _c(item.type, {
      key: index,
      tag: "component",
      attrs: {
        options: item.options
      }
    }) : _vm._e()];
  })], 2) : _vm._e(), _vm._v(" "), !_vm.sectionRight ? _c("div", {
    staticClass: "text-right"
  }, [_c("language-selector-button", {
    staticClass: "ml-2",
    attrs: {
      id: "language-screen-builder",
      type: "screen-builder",
      "show-language-code": true
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.sectionRight ? _c("b-col", {
    staticClass: "text-right"
  }, [_vm._l(_vm.rightMenus, function (item, index) {
    return [_vm.isVisible(item, "group") ? _c("b-button-group", {
      key: index,
      attrs: {
        size: "sm"
      }
    }, _vm._l(_vm.visibleItems(item), function (button, indexButton) {
      return _c("b-button", {
        key: "group-".concat(indexButton),
        staticClass: "text-capitalize screen-toolbar-button",
        attrs: {
          variant: button.variant || "secondary",
          title: button.title,
          "data-cy": "toolbar-".concat(button.id),
          disabled: _vm.toolbarDisabled
        },
        on: {
          click: function click($event) {
            return _vm.executeFunction(button.action);
          }
        }
      }, [_c("i", {
        "class": button.icon
      }), _vm._v("\n            " + _vm._s(button.name) + "\n          ")]);
    }), 1) : _vm._e(), _vm._v(" "), _vm.isVisible(item, "button") ? _c("b-button", {
      key: index,
      staticClass: "text-capitalize screen-toolbar-button",
      attrs: {
        size: "sm",
        variant: item.variant || "secondary",
        title: item.title
      },
      on: {
        click: function click($event) {
          return _vm.executeFunction(item.action);
        }
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n          " + _vm._s(item.name) + "\n        ")]) : _vm._e(), _vm._v(" "), item.type !== "group" && item.type !== "button" && !item.hide ? _c(item.type, _vm._b({
      key: index,
      ref: item.id,
      refInFor: true,
      tag: "component",
      attrs: {
        options: item.options
      },
      on: {
        navigate: _vm.handleNavigate
      }
    }, "component", _objectSpread({}, item.options), false)) : _vm._e()];
  })], 2) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.screen-toolbar-button[data-v-7fa2c4ca] {\n  color: #556271;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Menu.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Menu.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& */ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/components/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& */ "./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7fa2c4ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&");


/***/ })

}]);