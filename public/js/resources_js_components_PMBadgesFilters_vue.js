"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_PMBadgesFilters_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMBadgesFilters.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMBadgesFilters.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["value", "advancedFilterProp", "showPmqlBadge", "task"],
  data: function data() {
    return {
      get: lodash__WEBPACK_IMPORTED_MODULE_1__.get,
      pmql: "",
      selectedFilters: [],
      query: "",
      advancedFilter: []
    };
  },
  mounted: function mounted() {
    window.ProcessMaker.EventBus.$on('advanced-filter-updated', this.setAdvancedFilter);
    this.setAdvancedFilter();
  },
  computed: {
    filterBadges: function filterBadges() {
      var result = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.pmqlBadge), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selectedFilters), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.formatAdvancedFilterForBadges));
      return result;
    },
    pmqlBadge: function pmqlBadge() {
      var result = [];
      if (this.value) {
        result.push(['pmql', [{
          name: this.value,
          operator: '',
          advanced_filter: true
        }]]);
      }
      return result;
    },
    formatAdvancedFilterForBadges: function formatAdvancedFilterForBadges() {
      var result = [];
      if (Array.isArray(this.advancedFilter)) {
        result = this.formatForBadge(this.advancedFilter, result);
      }
      return result;
    }
  },
  watch: {
    advancedFilterProp: {
      deep: true,
      handler: function handler(a) {
        this.setAdvancedFilter();
      }
    }
  },
  methods: {
    setAdvancedFilter: function setAdvancedFilter() {
      this.advancedFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(this.advancedFilterProp, 'filters') || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(window, 'ProcessMaker.advanced_filter.filters', []);
    },
    capitalizeString: function capitalizeString(string) {
      if (string === "") {
        return "";
      }
      var str = string.toLowerCase();
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    formatForBadge: function formatForBadge(filters, result) {
      var _iterator = _createForOfIteratorHelper(filters),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var filter = _step.value;
          if (filter._hide_badge) {
            continue;
          }
          result.push([this.formatBadgeSubject(filter), [{
            name: filter.value,
            operator: filter.operator,
            advanced_filter: true
          }]]);
          if (filter.or && filter.or.length > 0) {
            this.formatForBadge(filter.or, result);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this.makeUserFriendly(result);
    },
    formatBadgeSubject: function formatBadgeSubject(filter) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(filter, '_column_label', (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(filter, 'subject.value', ''));
    },
    makeUserFriendly: function makeUserFriendly(result) {
      var _this = this;
      return result.map(function (badge) {
        var modified = _.cloneDeep(badge);
        switch (badge[0]) {
          case 'user_id':
            modified[0] = 'User';
            modified[1][0].name = window.ProcessMaker.user.fullName;
            return modified;
          case 'process_id':
            modified[0] = 'Process';
            modified[1][0].name = _this.task.process.name.substring(0, 30);
            return modified;
          case 'element_id':
            modified[0] = 'Task';
            modified[1][0].name = _this.task.element_name.substring(0, 30);
            return modified;
          default:
            return badge;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMBadgesFilters.vue?vue&type=template&id=746b199a&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMBadgesFilters.vue?vue&type=template&id=746b199a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      display: "flex"
    }
  }, [_vm.filterBadges.length > 0 ? _c("div", {
    staticClass: "selected-filters-bar d-flex pt-2"
  }, _vm._l(_vm.filterBadges, function (filter) {
    var _filter$1$0$operator;
    return _c("span", {
      staticClass: "selected-filter-item d-flex align-items-center"
    }, [_c("span", {
      staticClass: "selected-filter-key mr-1"
    }, [_vm._v("\n        " + _vm._s(_vm.$t(_vm.capitalizeString(filter[0]))) + "\n        "), !_vm.get(filter, "1.0.advanced_filter", false) ? [_vm._v(":")] : _vm._e()], 2), _vm._v("\n      " + _vm._s((_filter$1$0$operator = filter[1][0].operator) !== null && _filter$1$0$operator !== void 0 ? _filter$1$0$operator : "") + "\n      "), filter[0] === "Status" ? [_vm._v("\n        " + _vm._s(_vm.$t(filter[1][0].name)) + "\n      ")] : [_vm._v("\n        " + _vm._s(filter[1][0].name ? filter[1][0].name : filter[1][0].fullname) + "\n      ")], _vm._v(" "), filter[1].length > 1 ? _c("span", {
      staticClass: "badge badge-pill ml-2 filter-counter"
    }, [_vm._v("\n        +" + _vm._s(filter[1].length - 1) + "\n      ")]) : _vm._e(), _vm._v(" "), !_vm.get(filter, "1.0.advanced_filter", false) ? _c("i", {
      staticClass: "fa fa-times pl-2 pr-0",
      attrs: {
        role: "button"
      }
    }) : _vm._e()], 2);
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "auto"
    }
  }, [_vm._t("right-of-badges")], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/PMBadgesFilters.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/PMBadgesFilters.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PMBadgesFilters_vue_vue_type_template_id_746b199a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PMBadgesFilters.vue?vue&type=template&id=746b199a& */ "./resources/js/components/PMBadgesFilters.vue?vue&type=template&id=746b199a&");
/* harmony import */ var _PMBadgesFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PMBadgesFilters.vue?vue&type=script&lang=js& */ "./resources/js/components/PMBadgesFilters.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PMBadgesFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PMBadgesFilters_vue_vue_type_template_id_746b199a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PMBadgesFilters_vue_vue_type_template_id_746b199a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PMBadgesFilters.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PMBadgesFilters.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PMBadgesFilters.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PMBadgesFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMBadgesFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMBadgesFilters.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PMBadgesFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PMBadgesFilters.vue?vue&type=template&id=746b199a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/PMBadgesFilters.vue?vue&type=template&id=746b199a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMBadgesFilters_vue_vue_type_template_id_746b199a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMBadgesFilters_vue_vue_type_template_id_746b199a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMBadgesFilters_vue_vue_type_template_id_746b199a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMBadgesFilters.vue?vue&type=template&id=746b199a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMBadgesFilters.vue?vue&type=template&id=746b199a&");


/***/ })

}]);