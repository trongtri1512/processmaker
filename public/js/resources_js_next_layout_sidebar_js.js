"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_next_layout_sidebar_js"],{

/***/ "./node_modules/@braintree/sanitize-url/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@braintree/sanitize-url/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sanitizeUrl = void 0;
var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
var htmlCtrlEntityRegex = /&(newline|tab);/gi;
var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var urlSchemeRegex = /^.+(:|&colon;)/gim;
var relativeFirstCharacters = [".", "/"];
function isRelativeUrlWithoutProtocol(url) {
    return relativeFirstCharacters.indexOf(url[0]) > -1;
}
// adapted from https://stackoverflow.com/a/29824550/2601552
function decodeHtmlCharacters(str) {
    return str.replace(htmlEntitiesRegex, function (match, dec) {
        return String.fromCharCode(dec);
    });
}
function sanitizeUrl(url) {
    var sanitizedUrl = decodeHtmlCharacters(url || "")
        .replace(htmlCtrlEntityRegex, "")
        .replace(ctrlCharactersRegex, "")
        .trim();
    if (!sanitizedUrl) {
        return "about:blank";
    }
    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
    }
    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
    if (!urlSchemeParseResults) {
        return sanitizedUrl;
    }
    var urlScheme = urlSchemeParseResults[0];
    if (invalidProtocolRegex.test(urlScheme)) {
        return "about:blank";
    }
    return sanitizedUrl;
}
exports.sanitizeUrl = sanitizeUrl;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebaricon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebaricon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['item'],
  mounted: function mounted() {
    var _this = this;
    if (this.item.attributes.count !== undefined) {
      this.count = this.item.attributes.count;
    }
    if (this.item.attributes.countId !== undefined) {
      ProcessMaker.EventBus.$on('sidebar-count-updated-' + this.item.attributes.countId, function (count) {
        _this.count = count;
      });
    }
  },
  data: function data() {
    return {
      count: null,
      isOpen: false
    };
  },
  computed: {
    ariaLabel: function ariaLabel() {
      if (this.item.attributes.count !== undefined) {
        return this.item.title + ', ' + this.pluralize(this.count);
      } else {
        return this.item.title;
      }
    }
  },
  methods: {
    pluralize: function pluralize(count) {
      if (count == 1) {
        return this.$t('{{count}} Item', {
          count: count
        });
      } else {
        return this.$t('{{count}} Items', {
          count: count
        });
      }
    },
    toggle: function toggle() {
      this.isOpen = !this.isOpen;
    },
    expanded: function expanded() {
      return this.$parent.expanded;
    },
    maskStyle: function maskStyle(file) {
      return {
        backgroundColor: 'currentColor',
        WebkitMaskImage: "url(".concat(file, ")"),
        maskImage: "url(".concat(file, ")"),
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain'
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebaricon.vue?vue&type=template&id=eb737b8c&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebaricon.vue?vue&type=template&id=eb737b8c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover.right",
      value: {
        animation: false,
        disabled: _vm.expanded(),
        boundary: "viewport",
        delay: {
          show: 0,
          hide: 0
        },
        title: _vm.item.title
      },
      expression: "{ animation: false, disabled: expanded(), boundary: 'viewport', delay: { show: 0, hide: 0 }, title: item.title }",
      modifiers: {
        hover: true,
        right: true
      }
    }],
    staticClass: "nav-item filter-bar justify-content-between",
    attrs: {
      id: "Sidebaricon",
      "data-cy": _vm.item.title
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: _vm.item.url,
      target: _vm.item.attributes.target,
      "aria-label": _vm.ariaLabel
    },
    on: {
      click: _vm.toggle
    }
  }, [_vm.item.attributes.icon ? _c("i", {
    staticClass: "fas nav-icon",
    "class": _vm.item.attributes.icon
  }) : _vm._e(), _vm._v(" "), _vm.item.attributes.customicon ? _c("i", {
    "class": _vm.item.attributes.customicon
  }) : _vm._e(), _vm._v(" "), _vm.item.attributes.file ? _c("span", {
    staticClass: "nav-icon custom-icon",
    style: _vm.maskStyle(_vm.item.attributes.file),
    attrs: {
      id: "custom_icon"
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.expanded(),
      expression: "expanded()"
    }],
    staticClass: "nav-text"
  }, [_vm._v("\n      " + _vm._s(_vm.item.title) + "\n      "), _vm.item.children && _vm.item.children.length ? _c("i", {
    staticClass: "float-right fas",
    "class": {
      "fa-caret-right": !_vm.isOpen,
      "fa-caret-down": _vm.isOpen
    }
  }) : _vm._e(), _vm._v(" "), _vm.count !== null ? _c("span", {
    staticClass: "nav-badge float-right"
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e()])]), _vm._v(" "), _vm.item.children && _vm.item.children.length ? _c("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isOpen,
      expression: "isOpen"
    }],
    staticClass: "nav nav-list flex-column"
  }, _vm._l(_vm.item.children, function (item) {
    return _c("li", {
      key: item.id,
      staticClass: "nav-item nav-pl"
    }, [_c("a", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.attributes.icon,
        expression: "item.attributes.icon"
      }],
      staticClass: "nav-link",
      attrs: {
        href: item.url
      }
    }, [_c("i", {
      staticClass: "fas nav-icon",
      "class": item.attributes.icon
    }), _vm._v(" "), _vm.expanded() ? _c("span", {
      staticClass: "nav-text"
    }, [_vm._v(_vm._s(item.title) + "\n              "), _vm.count !== null ? _c("span", {
      staticClass: "nav-badge float-right",
      attrs: {
        "aria-label": _vm.ariaLabel
      }
    }, [_vm._v(_vm._s(_vm.count))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("a", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.attributes.file,
        expression: "item.attributes.file"
      }],
      staticClass: "nav-link",
      attrs: {
        href: item.url
      }
    }, [_c("span", {
      staticClass: "nav-icon custom-icon",
      style: _vm.maskStyle(item.attributes.file),
      attrs: {
        id: "custom_icon"
      }
    }), _vm._v(" "), _vm.expanded() ? _c("span", {
      staticClass: "nav-text"
    }, [_vm._v(_vm._s(item.title)), _vm.count !== null ? _c("span", {
      staticClass: "nav-badge float-right"
    }, [_vm._v(_vm._s(_vm.count))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.expanded() ? _c("span", {
      staticClass: "nav-text"
    }, [_vm._v(_vm._s(item.title) + "\n              "), _vm.count !== null ? _c("span", {
      staticClass: "nav-badge float-right",
      attrs: {
        "aria-label": _vm.ariaLabel
      }
    }, [_vm._v(_vm._s(_vm.count))]) : _vm._e()]) : _vm._e()])]);
  }), 0) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/next/layout/sidebar.js":
/*!*********************************************!*\
  !*** ./resources/js/next/layout/sidebar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @braintree/sanitize-url */ "./node_modules/@braintree/sanitize-url/dist/index.js");
/* harmony import */ var _components_Sidebaricon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebaricon.vue */ "./resources/js/components/Sidebaricon.vue");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalVariables */ "./resources/js/next/globalVariables.js");
function cov_13jz524chr() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/next/layout/sidebar.js";
  var hash = "125b88c93f4838701d4837889ae82839148f2197";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/next/layout/sidebar.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 36
        }
      },
      "1": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "2": {
        start: {
          line: 11,
          column: 16
        },
        end: {
          line: 21,
          column: 2
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 19,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "125b88c93f4838701d4837889ae82839148f2197"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13jz524chr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_13jz524chr();

// import VueHtml2Canvas from "vue-html2canvas";


var Vue = (cov_13jz524chr().s[0]++, (0,_globalVariables__WEBPACK_IMPORTED_MODULE_2__.getGlobalVariable)("Vue"));

// Vue.use(VueHtml2Canvas);
cov_13jz524chr().s[1]++;
Vue.prototype.$sanitize = _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__.sanitizeUrl;
var sidebar = (cov_13jz524chr().s[2]++, new Vue({
  el: "#sidebar",
  components: {
    Sidebaricon: _components_Sidebaricon_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    cov_13jz524chr().f[0]++;
    cov_13jz524chr().s[3]++;
    return {
      expanded: false
    };
  }
}));

/***/ }),

/***/ "./resources/js/components/Sidebaricon.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Sidebaricon.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebaricon_vue_vue_type_template_id_eb737b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebaricon.vue?vue&type=template&id=eb737b8c& */ "./resources/js/components/Sidebaricon.vue?vue&type=template&id=eb737b8c&");
/* harmony import */ var _Sidebaricon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebaricon.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebaricon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebaricon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebaricon_vue_vue_type_template_id_eb737b8c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebaricon_vue_vue_type_template_id_eb737b8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebaricon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebaricon.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Sidebaricon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebaricon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebaricon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebaricon.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebaricon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebaricon.vue?vue&type=template&id=eb737b8c&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Sidebaricon.vue?vue&type=template&id=eb737b8c& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebaricon_vue_vue_type_template_id_eb737b8c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebaricon_vue_vue_type_template_id_eb737b8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebaricon_vue_vue_type_template_id_eb737b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebaricon.vue?vue&type=template&id=eb737b8c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebaricon.vue?vue&type=template&id=eb737b8c&");


/***/ })

}]);