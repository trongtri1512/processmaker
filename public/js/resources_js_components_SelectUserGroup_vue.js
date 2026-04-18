"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_components_SelectUserGroup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUserGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUserGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: null,
    label: {
      type: String,
      "default": ""
    },
    multiple: {
      type: Boolean,
      "default": true
    },
    hideUsers: {
      type: Boolean,
      "default": false
    },
    hideGroups: {
      type: Boolean,
      "default": false
    },
    usersEndpoint: {
      type: String,
      "default": "users_task_count"
    },
    error: String,
    helper: String,
    placeholder: String,
    activeTasksCount: false
  },
  data: function data() {
    return {
      loading: false,
      selected: {
        users: [],
        groups: []
      },
      options: [],
      results: [],
      lastEmitted: "",
      labelUsers: this.$t("Users"),
      labelGroups: this.$t("Groups")
    };
  },
  computed: {
    content: {
      get: function get() {
        var _this = this;
        if (this.loading) {
          return [];
        }
        return this.selected.users.map(function (user) {
          var uid;
          if (typeof user === 'number') {
            uid = user;
          } else {
            uid = user.id;
          }
          return _this.results.find(function (item) {
            return item.id === uid;
          });
        }).concat(this.selected.groups.map(function (group) {
          var gid;
          if (typeof group == 'number') {
            gid = "group-" + group;
          } else {
            gid = group.id;
          }
          return _this.results.find(function (item) {
            return item.id === gid;
          });
        }));
      },
      set: function set(value) {
        var _this2 = this;
        this.selected.users = [];
        this.selected.groups = [];
        if (value === null) {
          return;
        }

        // If it is array (this happens when the Select User/Group is selected)
        // add value just if it is not empty
        if (Array.isArray(value) && value.length) {
          value.forEach(function (item) {
            _this2.results.push(item);
            if (typeof item.id === "number") {
              _this2.selected.users.push(item.id);
            } else {
              _this2.selected.groups.push(parseInt(item.id.substr(6)));
            }
          });
        }

        //If an object arrives as value (this happens with Self Service and assign by expression)
        if (!Array.isArray(value) && value) {
          this.results.push(value);
          if (typeof value.id === "number") {
            this.selected.users.push(value);
          } else {
            this.selected.groups.push(value);
          }
        }
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function handler(value) {
        var _this3 = this;
        if (!value) {
          return;
        }
        if (value.users.length === 0 && value.groups.length === 0) {
          return;
        }
        if (JSON.stringify(value) == this.lastEmitted) {
          return;
        }
        this.loading = true;
        var results = [];
        var usersPromise = Promise.all(value.users.map(function (item) {
          if (typeof item == 'number' || typeof item == 'string') {
            return ProcessMaker.apiClient.get("users/" + item);
          } else {
            if (item.assignee) {
              var id = item.assignee;
              return ProcessMaker.apiClient.get("users/" + id);
            }
          }
        })).then(function (items) {
          items.forEach(function (item) {
            results.push(_this3.addUsernameToFullName(item.data));
          });
        });
        var groupsPromise = Promise.all(value.groups.map(function (item) {
          if (typeof item == 'number' || typeof item == 'string') {
            return ProcessMaker.apiClient.get("groups/" + item);
          } else {
            if (item.assignee) {
              var id = _this3.unformatGroup(item.assignee);
              return ProcessMaker.apiClient.get("groups/" + id);
            }
          }
        })).then(function (items) {
          items.forEach(function (item) {
            results.push(_this3.formatGroup(item.data));
          });
        });
        Promise.all([usersPromise, groupsPromise]).then(function () {
          _this3.content = results;
          _this3.loading = false;
        });
      }
    }
  },
  methods: {
    updateSeletected: function updateSeletected() {
      this.lastEmitted = JSON.stringify(this.selected);
      this.$emit("input", this.selected);
    },
    addUsernameToFullName: function addUsernameToFullName(user) {
      if (!user.fullname || !user.username) {
        return user;
      }
      var status = '';
      if (user.status === 'INACTIVE') {
        status = " - " + this.$t('Inactive');
      }
      return _objectSpread(_objectSpread({}, user), {}, {
        fullname: "".concat(user.fullname, " (").concat(user.username).concat(status, ")")
      });
    },
    load: function load(filter) {
      this.options = [];
      if (!this.hideUsers) {
        this.loadUsers(filter);
      }
      if (!this.hideGroups) {
        this.loadGroups(filter);
      }
    },
    loadUsers: function loadUsers(filter) {
      var _this4 = this;
      ProcessMaker.apiClient.get(this.usersEndpoint + (typeof filter === "string" ? "?filter=" + filter : "")).then(function (response) {
        var users = response.data.data.map(function (user) {
          return _this4.addUsernameToFullName(user);
        });
        _this4.users = users;
        if (response.data.data) {
          _this4.options.push({
            "type": _this4.labelUsers,
            "items": users
          });
        }
      });
    },
    loadGroups: function loadGroups(filter) {
      var _this5 = this;
      ProcessMaker.apiClient.get("groups" + (typeof filter === "string" ? "?filter=" + filter : "")).then(function (response) {
        var groups = response.data.data.map(function (item) {
          return _this5.formatGroup(item);
        });
        if (groups) {
          _this5.options.push({
            "type": _this5.labelGroups,
            "items": groups
          });
        }
      });
    },
    formatGroup: function formatGroup(item) {
      if (item && typeof item.id == 'number') {
        item.id = "group-" + item.id;
      }
      item.fullname = item.name;
      if (item.status === 'INACTIVE') {
        item.fullname += " (" + this.$t('Inactive') + ")";
      }
      return item;
    },
    unformatGroup: function unformatGroup(groupId) {
      if (typeof groupId == 'number') {
        return groupId;
      } else {
        var id = groupId.replace('group-', "");
        return id;
      }
    },
    getOptionLabel: function getOptionLabel(option, index) {
      if (this.isEmpty(option)) return '';
      if (option.isTag) return option.label;
      if (option.$isLabel) return option.$groupLabel;
      var label = this.customLabel(option, index);
      if (this.isEmpty(label)) return '';
      return label;
    },
    isEmpty: function isEmpty(opt) {
      if (opt === 0) return false;
      if (Array.isArray(opt) && opt.length === 0) return true;
      return !opt;
    },
    customLabel: function customLabel(option, label) {
      if (this.isEmpty(option)) return '';
      return label ? option[label] : option;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUserGroup.vue?vue&type=template&id=0b66e83d&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUserGroup.vue?vue&type=template&id=0b66e83d& ***!
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
    staticClass: "form-group"
  }, [_vm.label ? _c("label", [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c("multiselect", {
    "class": {
      "border border-danger": _vm.error
    },
    attrs: {
      id: "category-select-" + _vm._uid,
      "track-by": "id",
      label: "fullname",
      "group-values": "items",
      "group-label": "type",
      loading: _vm.loading,
      placeholder: _vm.placeholder ? _vm.placeholder : _vm.$t("type here to search"),
      options: _vm.options,
      multiple: _vm.multiple,
      "show-labels": false,
      searchable: true,
      "internal-search": false
    },
    on: {
      open: function open($event) {
        return _vm.load(null);
      },
      input: _vm.updateSeletected,
      "search-change": _vm.load
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option,
          search = _ref.search,
          index = _ref.index;
        return [Object.hasOwn(option, "active_tasks_count") && _vm.activeTasksCount ? _c("b-badge", {
          staticClass: "mr-2 custom-badges pl-2 pr-2 rounded-lg",
          attrs: {
            variant: "secondary"
          }
        }, [_vm._v("\n           " + _vm._s(option.active_tasks_count) + "\n         ")]) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(" \n            " + _vm._s(_vm.getOptionLabel(option, "fullname")) + " \n          ")])];
      }
    }]),
    model: {
      value: _vm.content,
      callback: function callback($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  }, [_c("template", {
    slot: "noResult"
  }, [_vm._t("noResult", function () {
    return [_vm._v(_vm._s(_vm.$t("No elements found. Consider changing the search query.")))];
  })], 2), _vm._v(" "), _c("template", {
    slot: "noOptions"
  }, [_vm._t("noOptions", function () {
    return [_vm._v(_vm._s(_vm.$t("No Data Available")))];
  })], 2)], 2), _vm._v(" "), _vm.error ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.helper ? _c("small", {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t(_vm.helper)))]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/SelectUserGroup.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SelectUserGroup.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectUserGroup_vue_vue_type_template_id_0b66e83d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectUserGroup.vue?vue&type=template&id=0b66e83d& */ "./resources/js/components/SelectUserGroup.vue?vue&type=template&id=0b66e83d&");
/* harmony import */ var _SelectUserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectUserGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/SelectUserGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectUserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectUserGroup_vue_vue_type_template_id_0b66e83d___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectUserGroup_vue_vue_type_template_id_0b66e83d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SelectUserGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SelectUserGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SelectUserGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectUserGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUserGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SelectUserGroup.vue?vue&type=template&id=0b66e83d&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SelectUserGroup.vue?vue&type=template&id=0b66e83d& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUserGroup_vue_vue_type_template_id_0b66e83d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUserGroup_vue_vue_type_template_id_0b66e83d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectUserGroup_vue_vue_type_template_id_0b66e83d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectUserGroup.vue?vue&type=template&id=0b66e83d& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SelectUserGroup.vue?vue&type=template&id=0b66e83d&");


/***/ })

}]);