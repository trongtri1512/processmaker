"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_Session_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "message", "time", "warnSeconds", "shown", "isRenewing"],
  data: function data() {
    return {
      errors: {},
      disabled: false,
      localRenewing: false
    };
  },
  computed: {
    isRenewingEffective: function isRenewingEffective() {
      return this.localRenewing || this.isRenewing;
    },
    isProcessing: function isProcessing() {
      return this.isRenewingEffective;
    },
    isBusy: function isBusy() {
      return this.disabled || this.isRenewingEffective;
    },
    percentage: function percentage() {
      if (this.time === "" || this.warnSeconds === "") {
        return 0;
      }
      return Math.round(this.time / this.warnSeconds * 100);
    }
  },
  watch: {
    shown: function shown(value) {
      if (value) {
        this.resetProcessingState();
      }
      if (value) {
        this.$refs.sessionModal.show();
      } else {
        this.$refs.sessionModal.hide();
      }
    }
  },
  mounted: function mounted() {
    this.$emit("show");
  },
  methods: {
    resetProcessingState: function resetProcessingState() {
      this.localRenewing = false;
      this.disabled = false;
      this.errors = {};
    },
    onClose: function onClose() {
      this.$emit("close");
    },
    keepAlive: function keepAlive() {
      var _this = this;
      this.disabled = true;
      this.setRenewingState(true);
      ProcessMaker.apiClient.post("/keep-alive", {}, {
        baseURL: ""
      }).then(function () {
        var _window$ProcessMaker$, _window$ProcessMaker$2, _window$ProcessMaker$3, _window$ProcessMaker$4, _window$ProcessMaker$5;
        _this.disabled = false;
        _this.setRenewingState(false);
        var timeout = window.ProcessMaker.AccountTimeoutLength;
        if ((_window$ProcessMaker$ = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$ !== void 0 && _window$ProcessMaker$.setSessionState) {
          window.ProcessMaker.sessionSync.setSessionState(timeout);
        }
        if ((_window$ProcessMaker$2 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$2 !== void 0 && _window$ProcessMaker$2.clearWarningState) {
          window.ProcessMaker.sessionSync.clearWarningState();
        }
        if ((_window$ProcessMaker$3 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$3 !== void 0 && _window$ProcessMaker$3.broadcast) {
          window.ProcessMaker.sessionSync.broadcast("renewed", {
            timeout: timeout
          });
        }
        // If reponse is correct, the timer is started again.
        if ((_window$ProcessMaker$4 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$4 !== void 0 && (_window$ProcessMaker$5 = _window$ProcessMaker$4.isLeader) !== null && _window$ProcessMaker$5 !== void 0 && _window$ProcessMaker$5.call(_window$ProcessMaker$4) && typeof window.ProcessMaker.AccountTimeoutWorker !== "undefined") {
          window.ProcessMaker.AccountTimeoutWorker.postMessage({
            method: "start",
            data: {
              timeout: timeout,
              warnSeconds: window.ProcessMaker.AccountTimeoutWarnSeconds,
              enabled: window.ProcessMaker.AccountTimeoutEnabled
            }
          });
        }
        _this.onClose();
      })["catch"](function (error) {
        var _error$response;
        var status = error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status;
        if (status === 401 || status === 419) {
          // Session expired server-side; broadcast and redirect.
          _this.setRenewingState(false);
          _this.broadcastExpired();
          window.location.href = "/logout";
          return;
        }
        _this.disabled = false;
        _this.setRenewingState(false);
        _this.errors = error.response.data.errors;
      });
    },
    setRenewingState: function setRenewingState(isRenewing) {
      var _window$ProcessMaker$6, _window$ProcessMaker$7;
      this.localRenewing = isRenewing;
      // Broadcast renewal status so other tabs show the spinner.
      if ((_window$ProcessMaker$6 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$6 !== void 0 && _window$ProcessMaker$6.broadcast) {
        window.ProcessMaker.sessionSync.broadcast("renewing", {
          isRenewing: isRenewing
        });
      }
      if ((_window$ProcessMaker$7 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$7 !== void 0 && _window$ProcessMaker$7.setRenewingState) {
        window.ProcessMaker.sessionSync.setRenewingState(isRenewing);
      }
    },
    broadcastExpired: function broadcastExpired() {
      var _window$ProcessMaker$8, _window$ProcessMaker$9;
      // Sync timeout state across tabs.
      if ((_window$ProcessMaker$8 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$8 !== void 0 && _window$ProcessMaker$8.clearWarningState) {
        window.ProcessMaker.sessionSync.clearWarningState();
      }
      if ((_window$ProcessMaker$9 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$9 !== void 0 && _window$ProcessMaker$9.broadcast) {
        window.ProcessMaker.sessionSync.broadcast("expired");
      }
    },
    broadcastLogout: function broadcastLogout() {
      var _window$ProcessMaker$0, _window$ProcessMaker$1;
      // Sync manual logout state across tabs.
      if ((_window$ProcessMaker$0 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$0 !== void 0 && _window$ProcessMaker$0.clearWarningState) {
        window.ProcessMaker.sessionSync.clearWarningState();
      }
      if ((_window$ProcessMaker$1 = window.ProcessMaker.sessionSync) !== null && _window$ProcessMaker$1 !== void 0 && _window$ProcessMaker$1.broadcast) {
        window.ProcessMaker.sessionSync.broadcast("logout");
      }
    },
    logoutNow: function logoutNow() {
      // Ensure other tabs close warning before redirect.
      this.disabled = true;
      this.setRenewingState(true);
      this.broadcastLogout();
      window.location.href = "/logout";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    ref: "sessionModal",
    attrs: {
      id: "sessionModal",
      title: _vm.title,
      "footer-class": "pm-modal-footer",
      "no-close-on-backdrop": "",
      centered: "",
      "no-close-button": ""
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", [_vm._v(_vm._s(_vm.title))])];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn() {
        return [!_vm.isProcessing ? _c("button", {
          staticClass: "btn btn-outline-secondary ml-2",
          attrs: {
            type: "button",
            disabled: _vm.isBusy
          },
          on: {
            click: _vm.logoutNow
          }
        }, [_vm._v("\n      " + _vm._s("LogOut") + "\n    ")]) : _vm._e(), _vm._v(" "), !_vm.isProcessing ? _c("button", {
          staticClass: "btn btn-secondary ml-2",
          attrs: {
            type: "button",
            disabled: _vm.isBusy
          },
          on: {
            click: _vm.keepAlive
          }
        }, [_vm._v("\n      " + _vm._s("Stay Connected") + "\n    ")]) : _vm._e()];
      },
      proxy: true
    }])
  }, [_vm._v(" "), !_vm.isProcessing ? _c("div", [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.message)
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-striped",
    style: {
      width: _vm.percentage + "%"
    },
    attrs: {
      role: "progressbar"
    }
  }, [_c("span", {
    staticClass: "pl-2",
    attrs: {
      align: "left"
    }
  }, [_vm._v(_vm._s(_vm.moment().startOf("day").seconds(_vm.time).format("mm:ss")))])])])]) : _c("div", {
    staticClass: "d-flex align-items-center justify-content-center py-3"
  }, [_c("output", {
    staticClass: "spinner-border spinner-border-sm mr-2",
    attrs: {
      "aria-live": "polite"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s("Processing..."))])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal[data-v-53b31e0a] {\n    position: fixed;\n    background: rgba(0, 0, 0, .5);\n    z-index: 1060;\n    display: flex;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_style_index_0_id_53b31e0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_style_index_0_id_53b31e0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_style_index_0_id_53b31e0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Session.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Session.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Session.vue?vue&type=template&id=53b31e0a&scoped=true& */ "./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&");
/* harmony import */ var _Session_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Session.vue?vue&type=script&lang=js& */ "./resources/js/components/Session.vue?vue&type=script&lang=js&");
/* harmony import */ var _Session_vue_vue_type_style_index_0_id_53b31e0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& */ "./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Session_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "53b31e0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Session.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Session.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Session.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=template&id=53b31e0a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_style_index_0_id_53b31e0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&");


/***/ })

}]);