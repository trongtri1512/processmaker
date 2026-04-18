"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_SelectUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUser.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUser.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: null,
    multiple: {
      type: Boolean,
      "default": false
    },
    maxSelection: {
      type: Number,
      "default": null
    }
  },
  data: function data() {
    return {
      users: []
    };
  },
  computed: {
    selectionInfo: function selectionInfo() {
      if (this.multiple && this.maxSelection && Array.isArray(this.value)) {
        var selected = this.value.length;
        var max = this.maxSelection;
        return "".concat(selected, "/").concat(max, " ").concat(this.$t('selected'));
      }
      return null;
    },
    limitReachedMessage: function limitReachedMessage() {
      if (this.multiple && this.maxSelection && Array.isArray(this.value) && this.value.length >= this.maxSelection) {
        return this.$t('Maximum of {{max}} users can be selected', {
          max: this.maxSelection
        });
      }
      return null;
    }
  },
  methods: {
    change: function change(value) {
      // If multiple and maxSelection is set, and value is an array
      if (this.multiple && this.maxSelection && Array.isArray(value)) {
        // If value length is greater than maxSelection, keep only the first maxSelection elements
        if (value.length > this.maxSelection) {
          value = value.slice(0, this.maxSelection);
        }
      }
      this.$emit('input', value);
    },
    loadUsers: function loadUsers(filter) {
      var _this = this;
      window.ProcessMaker.apiClient.get("users" + (typeof filter === "string" ? "?filter=" + filter : "")).then(function (response) {
        _this.users = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUser.vue?vue&type=template&id=96facfdc&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUser.vue?vue&type=template&id=96facfdc& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("multiselect", {
    attrs: {
      id: "user-select-" + _vm._uid,
      value: _vm.value,
      placeholder: _vm.$t("Select"),
      options: _vm.users,
      multiple: _vm.multiple,
      "track-by": "id",
      "show-labels": false,
      searchable: true,
      "internal-search": false,
      label: "fullname"
    },
    on: {
      input: _vm.change,
      "search-change": _vm.loadUsers,
      open: function open($event) {
        return _vm.loadUsers(null);
      }
    }
  }, [_c("template", {
    slot: "noResult"
  }, [_vm._t("noResult", function () {
    return [_vm._v(_vm._s(_vm.$t("No elements found. Consider changing the search query.")))];
  })], 2), _vm._v(" "), _c("template", {
    slot: "noOptions"
  }, [_vm._t("noOptions", function () {
    return [_vm._v(_vm._s(_vm.$t("No Data Available")))];
  })], 2)], 2), _vm._v(" "), _vm.selectionInfo ? _c("div", {
    staticClass: "text-muted small mt-1"
  }, [_vm._v("\n    " + _vm._s(_vm.selectionInfo) + "\n  ")]) : _vm._e(), _vm._v(" "), _vm.limitReachedMessage ? _c("div", {
    staticClass: "text-warning small mt-1"
  }, [_vm._v("\n    " + _vm._s(_vm.limitReachedMessage) + "\n  ")]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/SelectUser.vue":
/*!************************************************!*\
  !*** ./resources/js/components/SelectUser.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectUser_vue_vue_type_template_id_96facfdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectUser.vue?vue&type=template&id=96facfdc& */ "./resources/js/components/SelectUser.vue?vue&type=template&id=96facfdc&");
/* harmony import */ var _SelectUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectUser.vue?vue&type=script&lang=js& */ "./resources/js/components/SelectUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectUser_vue_vue_type_template_id_96facfdc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectUser_vue_vue_type_template_id_96facfdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SelectUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SelectUser.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/SelectUser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SelectUser.vue?vue&type=template&id=96facfdc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/SelectUser.vue?vue&type=template&id=96facfdc& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUser_vue_vue_type_template_id_96facfdc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUser_vue_vue_type_template_id_96facfdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUser_vue_vue_type_template_id_96facfdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectUser.vue?vue&type=template&id=96facfdc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUser.vue?vue&type=template&id=96facfdc&");


/***/ })

}]);