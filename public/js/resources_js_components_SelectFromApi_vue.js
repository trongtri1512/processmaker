"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_SelectFromApi_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectFromApi.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectFromApi.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: null,
    placeholder: String,
    trackBy: {
      type: String,
      "default": "id"
    },
    label: {
      type: String,
      "default": "name"
    },
    api: {
      type: String,
      "default": "process"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    storeId: {
      type: Boolean,
      "default": true
    },
    exclude_ids: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    undefinedValue: null
  },
  data: function data() {
    return {
      options: [],
      selectedOption: null
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var _this = this;
        this.selectedOption = this.storeId ? this.options.find(function (option) {
          return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(option, _this.trackBy) == value;
        }) : value;
        value && !this.selectedOption ? this.loadSelected(value) : null;
      }
    }
  },
  methods: {
    change: function change(value) {
      this.$emit("input", this.storeId ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(value, this.trackBy, this.undefinedValue) : value);
    },
    loadOptions: function loadOptions(filter) {
      var _this2 = this;
      var query = {
        filter: typeof filter === "string" ? filter : '',
        exclude_ids: this.exclude_ids.join(',')
      };
      var separator = this.api.includes('?') ? '&' : '?';
      window.ProcessMaker.apiClient.get(this.api + separator + Object.keys(query).filter(function (par) {
        return query[par];
      }, '').map(function (par) {
        return "".concat(par, "=").concat(encodeURIComponent(query[par]));
      }).join('&')).then(function (response) {
        _this2.options = response.data.data || [];
      });
    },
    loadSelected: function loadSelected(value) {
      var _this3 = this;
      window.ProcessMaker.apiClient.get(this.api + "/" + value).then(function (response) {
        _this3.selectedOption = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectFromApi.vue?vue&type=template&id=210e2319&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectFromApi.vue?vue&type=template&id=210e2319& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("multiselect", {
    attrs: {
      id: "api-select-" + _vm._uid,
      value: _vm.selectedOption,
      placeholder: _vm.placeholder,
      options: _vm.options,
      multiple: _vm.multiple,
      "track-by": _vm.trackBy,
      "show-labels": false,
      searchable: true,
      "internal-search": false,
      label: _vm.label
    },
    on: {
      input: _vm.change,
      "search-change": _vm.loadOptions,
      open: function open($event) {
        return _vm.loadOptions(null);
      }
    }
  }, [_c("template", {
    slot: "noResult"
  }, [_vm._t("noResult", function () {
    return [_vm._v(_vm._s(_vm.$t("Not found")))];
  })], 2), _vm._v(" "), _c("template", {
    slot: "noOptions"
  }, [_vm._t("noOptions", function () {
    return [_vm._v(_vm._s(_vm.$t("No Data Available")))];
  })], 2)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/SelectFromApi.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/SelectFromApi.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFromApi_vue_vue_type_template_id_210e2319___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFromApi.vue?vue&type=template&id=210e2319& */ "./resources/js/components/SelectFromApi.vue?vue&type=template&id=210e2319&");
/* harmony import */ var _SelectFromApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectFromApi.vue?vue&type=script&lang=js& */ "./resources/js/components/SelectFromApi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectFromApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectFromApi_vue_vue_type_template_id_210e2319___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectFromApi_vue_vue_type_template_id_210e2319___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SelectFromApi.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SelectFromApi.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SelectFromApi.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFromApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectFromApi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectFromApi.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFromApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SelectFromApi.vue?vue&type=template&id=210e2319&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SelectFromApi.vue?vue&type=template&id=210e2319& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFromApi_vue_vue_type_template_id_210e2319___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFromApi_vue_vue_type_template_id_210e2319___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFromApi_vue_vue_type_template_id_210e2319___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectFromApi.vue?vue&type=template&id=210e2319& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectFromApi.vue?vue&type=template&id=210e2319&");


/***/ })

}]);