"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_Timeline_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SubjectIcons = {
  'Task Complete': 'far fa-square',
  'Gateway': 'far fa-square fa-rotate-45',
  'Rollback': 'fa fa-undo'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["commentable_id", "commentable_type", "type", "hidden", "reactions", "voting", "edit", "remove", "adding", "readonly", "timeline"],
  data: function data() {
    return {
      newComment: "",
      form: {
        subject: "",
        body: "",
        commentable_id: "",
        commentable_type: "",
        hidden: false,
        type: "MESSAGE"
      },
      comments: [],
      systemCommentUser: {
        id: null,
        initials: "S"
      }
    };
  },
  computed: {
    disabled: function disabled() {
      return this.form.subject.trim() === "" || this.form.body.trim() === "";
    }
  },
  watch: {},
  methods: {
    isDefined: function isDefined(component) {
      return component in Vue.options.components;
    },
    component: function component(item) {
      var component = "timeline-".concat(item.type.toLowerCase());
      return component in Vue.options.components ? component : 'timeline-item';
    },
    icon: function icon(item) {
      return SubjectIcons[item.subject] || '';
    },
    emptyForm: function emptyForm() {
      this.form.subject = "";
      this.form.body = "";
    },
    load: function load() {
      var _this = this;
      this.comments = [];
      ProcessMaker.apiClient.get("comments", {
        params: {
          commentable_id: this.commentable_id,
          commentable_type: this.commentable_type,
          includes: 'children',
          order_by: 'id',
          type: 'LOG'
        }
      }).then(function (response) {
        _this.comments = response.data.data;
      });
    },
    save: function save() {
      var that = this;
      that.form.commentable_id = that.commentable_id;
      that.form.commentable_type = that.commentable_type;
      that.form.type = that.type ? that.type : "MESSAGE";
      that.form.hidden = that.hidden ? that.hidden : false;
      ProcessMaker.apiClient.post("comments", that.form).then(function (response) {
        that.load();
        that.emptyForm();
      });
    }
  },
  mounted: function mounted() {
    this.load();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=template&id=7199e12c&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=template&id=7199e12c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "px-4 mb-2 timeline"
  }, [_vm._l(_vm.comments, function (item, index) {
    return _vm.timeline ? [_c(_vm.component(item), {
      key: "timeline-item-".concat(index),
      tag: "component",
      attrs: {
        value: item,
        icon: _vm.icon(item),
        "allow-reactions": _vm.reactions,
        "allow-edit": _vm.edit,
        "allow-remove": _vm.remove,
        "allow-voting": _vm.voting,
        "read-only": _vm.readonly
      },
      on: {
        refresh: _vm.load
      }
    })] : _vm._e();
  }), _vm._v(" "), _vm._l(_vm.comments, function (item, index) {
    return !_vm.timeline ? [_c(_vm.component(item), {
      key: "timeline-item-".concat(index),
      tag: "component",
      attrs: {
        value: item,
        icon: _vm.icon(item),
        "allow-reactions": _vm.reactions,
        "allow-edit": _vm.edit,
        "allow-remove": _vm.remove,
        "allow-voting": _vm.voting,
        "read-only": _vm.readonly
      },
      on: {
        refresh: _vm.load
      }
    })] : _vm._e();
  }), _vm._v(" "), _vm.isDefined("comment-editor") && _vm.adding ? [_c("comment-editor", {
    staticClass: "mt-2",
    attrs: {
      commentable_id: _vm.commentable_id,
      commentable_type: _vm.commentable_type
    },
    on: {
      refresh: _vm.load
    },
    model: {
      value: _vm.newComment,
      callback: function callback($$v) {
        _vm.newComment = $$v;
      },
      expression: "newComment"
    }
  })] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#systemAvatar {\n  max-height: 24px;\n  max-width: 24px;\n  border-radius: 50%;\n  margin-left: 3px;\n}\n.row .col-auto {\n  height: 3em;\n}\n.date {\n  color: #848484;\n  font-size: 0.8em;\n}\n.comment-body {\n  line-height: 1.2em;\n}\n.timeline {\n  background: linear-gradient(\n    to right,\n    transparent 0%,\n    transparent 38px,\n    rgb(230, 230, 230) 38px,\n    rgb(230, 230, 230) 40px,\n    transparent 40px,\n    transparent 100%\n  );\n}\n.timeline-badge {\n  width: 28px;\n  height: 24px;\n  margin-left:0px;\n  padding: 0;\n}\n.timeline-icon {\n  background-color: rgb(225, 228, 232);\n  color: #788793;\n}\n.fa-rotate-45 {\n  transform: rotate(45deg);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_7199e12c_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_7199e12c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_7199e12c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Timeline.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Timeline.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timeline_vue_vue_type_template_id_7199e12c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=7199e12c& */ "./resources/js/components/Timeline.vue?vue&type=template&id=7199e12c&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./resources/js/components/Timeline.vue?vue&type=script&lang=js&");
/* harmony import */ var _Timeline_vue_vue_type_style_index_0_id_7199e12c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css& */ "./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline_vue_vue_type_template_id_7199e12c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Timeline_vue_vue_type_template_id_7199e12c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Timeline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Timeline.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Timeline.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Timeline.vue?vue&type=template&id=7199e12c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Timeline.vue?vue&type=template&id=7199e12c& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_7199e12c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_7199e12c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_7199e12c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=template&id=7199e12c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=template&id=7199e12c&");


/***/ }),

/***/ "./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_7199e12c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Timeline.vue?vue&type=style&index=0&id=7199e12c&lang=css&");


/***/ })

}]);