"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/processes/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processmaker_vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @processmaker/vue-multiselect */ "./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.es.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueMultiselect: _processmaker_vue_multiselect__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    value: {
      type: null,
      "default": null
    },
    options: {
      type: [Array],
      "default": null
    },
    placeholder: {
      type: String,
      "default": "Select option"
    },
    selectLabel: {
      type: String,
      "default": "Press enter to select"
    },
    deselectLabel: {
      type: String,
      "default": "Press enter to remove"
    },
    selectedLabel: {
      type: String,
      "default": "Selected"
    },
    searchable: {
      type: Boolean,
      "default": true
    },
    loading: {
      type: Boolean,
      "default": false
    },
    internalSearch: {
      type: Boolean,
      "default": true
    },
    clearOnSelect: {
      type: Boolean,
      "default": true
    },
    closeOnSelect: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      input: null,
      newValue: null
    };
  },
  watch: {
    value: {
      handler: function handler(newValue) {
        this.newValue = newValue;
      },
      immediate: true
    },
    options: {
      handler: function handler() {
        this.setInput(this.newValue);
      },
      immediate: true,
      deep: true
    },
    input: function input() {
      this.emitInput();
    }
  },
  methods: {
    setInput: function setInput(value) {
      var _iterator = _createForOfIteratorHelper(this.options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          if (option.value === value) {
            this.input = option;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    emitInput: function emitInput() {
      var _this$input;
      this.$emit("input", (_this$input = this.input) === null || _this$input === void 0 ? void 0 : _this$input.value);
    },
    onSearchChange: function onSearchChange(searchTerm) {
      this.$emit("onSearchChange", searchTerm);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/categories/components/CategorySelect.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/categories/components/CategorySelect.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _processmaker_vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @processmaker/vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.min.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["value", "errors", "label", "helper", "params", "apiGet", "apiList"],
  data: function data() {
    return {
      content: [],
      loading: false,
      options: [],
      error: "",
      uncategorizedCategory: null,
      lastSelectedId: null
    };
  },
  computed: {},
  watch: {
    content: {
      handler: function handler() {
        this.setUncategorizedDefault();
        this.$emit("input", this.content instanceof Array ? this.content.map(function (item) {
          return item.id;
        }).join(",") : this.content ? this.content.id : "");
        this.$emit("update:duplicateScreenCategory", this.content);
      }
    },
    value: {
      handler: function handler() {
        this.setUpOptions();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.loadUncategorized().then(function () {
      _this.setUpOptions();
    });
  },
  methods: {
    setUpOptions: function setUpOptions() {
      var _this2 = this;
      if (this.value) {
        var content = [];
        var selected = String(this.value).split(",");
        this.loading = selected.length;
        selected.forEach(function (category) {
          _this2.getOptionData(category, content);
        });
      } else {
        this.content.splice(0);
        this.setUncategorizedDefault();
      }
    },
    completeSelectedLoading: function completeSelectedLoading(content) {
      var _this$content;
      this.loading = false;
      this.content.splice(0);
      (_this$content = this.content).push.apply(_this$content, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(content));
      this.setUncategorizedDefault();
    },
    getOptionData: function getOptionData(id, content) {
      var _this3 = this;
      var option = this.options.concat(this.content).find(function (item) {
        return item.id == id;
      });
      if (option) {
        this.loading--;
        content.push(option);
        !this.loading ? this.completeSelectedLoading(content) : null;
        return;
      }
      ProcessMaker.apiClient.get("".concat(this.apiGet, "/").concat(id)).then(function (response) {
        _this3.loading--;
        content.push(response.data);
        !_this3.loading ? _this3.completeSelectedLoading(content) : null;
      })["catch"](function (error) {
        _this3.loading--;
        if (error.response.status === 404) {
          _this3.error = _this3.$t("Selected not found");
        }
        !_this3.loading ? _this3.completeSelectedLoading(content) : null;
      });
    },
    load: function load(filter) {
      var _this4 = this;
      ProcessMaker.apiClient.get("".concat(this.apiList, "?order_direction=asc&status=active").concat(typeof filter === "string" ? "&filter=".concat(filter) : "")).then(function (response) {
        _this4.loading = false;
        _this4.options = response.data.data;
      })["catch"](function (err) {
        _this4.loading = false;
      });
    },
    loadUncategorized: function loadUncategorized() {
      var _this5 = this;
      return ProcessMaker.apiClient.get("".concat(this.apiList, "?filter=Uncategorized&per_page=1&order_by=id&order_direction=ASC")).then(function (response) {
        _this5.uncategorizedCategory = response.data.data[0];
      });
    },
    setUncategorizedDefault: function setUncategorizedDefault() {
      var _this6 = this;
      if (!this.uncategorizedCategory) {
        return;
      }
      if (this.content.length === 0) {
        // No categories so give it the Uncategorized category
        this.content.push(this.uncategorizedCategory);
        return;
      }
      if (this.lastSelectedId === this.uncategorizedCategory.id) {
        // The user picked Uncategorized so remove all other categories
        this.lastSelectedId = null;
        this.content = [this.uncategorizedCategory];
        return;
      }
      var uncategorizedCategoryIndex = this.content.findIndex(function (c) {
        return c.id === _this6.uncategorizedCategory.id;
      });
      if (uncategorizedCategoryIndex >= 0 && this.content.length > 1) {
        // The use picked a category so remove Uncategorized
        this.content.splice(uncategorizedCategoryIndex, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PMFormSelectSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/PMFormSelectSuggest.vue */ "./resources/js/components/PMFormSelectSuggest.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PMFormSelectSuggest: _components_PMFormSelectSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reassignments: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      showUserSelector: false,
      users: [],
      items: [],
      selectedOption: null,
      selectedText: "",
      toggleShowMenu: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.requestUser("");
    document.addEventListener("click", function (event) {
      if (event.target.id !== "reassignmentUserSelectorInput" && event.target.parentNode.id !== "buttonReassignmentClicked") {
        _this.showUserSelector = false;
      }
    });
  },
  watch: {
    reassignments: function reassignments() {
      this.items = this.reassignments;
    },
    users: function users() {
      this.showMessageEmpty = this.users.length <= 0;
    },
    selectedOption: function selectedOption() {
      var _this$selectedOption;
      this.selectedText = (_this$selectedOption = this.selectedOption) === null || _this$selectedOption === void 0 ? void 0 : _this$selectedOption.text;
    }
  },
  methods: {
    add: function add() {
      var _this2 = this;
      this.showUserSelector = !this.showUserSelector;
      if (this.showUserSelector) {
        this.requestUser("");
        this.$nextTick(function () {
          _this2.showMenu(true);
        });
      }
    },
    confirmDelete: function confirmDelete(id) {
      this.itemToRemove = id;
      this.$refs.deleteModal.show();
    },
    remove: function remove(id) {
      this.items = this.items.filter(function (item) {
        return item.id !== id;
      });
    },
    requestUser: function requestUser(filter) {
      var _this3 = this;
      var url = "users" + "?page=1" + "&per_page=30" + "&filter=" + filter + "&order_by=firstname" + "&order_direction=asc";
      ProcessMaker.apiClient.get(url).then(function (response) {
        _this3.users = [];
        for (var i in response.data.data) {
          _this3.users.push({
            text: response.data.data[i].fullname,
            value: response.data.data[i].id
          });
        }
      });
    },
    onInput: function onInput(value) {
      this.requestUser(value);
      this.showMenu(true);
    },
    showMenu: function showMenu(sw) {
      var button = document.getElementById("reassignmentUserSelector");
      if (!button) {
        return;
      }
      var obj = button.querySelector(".dropdown-menu").classList;
      if (sw === true) {
        obj.add("reassignment-user-selector-show");
      } else {
        obj.remove("reassignment-user-selector-show");
      }
    },
    onSelect: function onSelect(option) {
      this.selectedOption = option;
      this.showMenu(false);
      this.showUserSelector = false;
      this.onChangeUserId();
    },
    onChangeUserId: function onChangeUserId() {
      if (this.selectedOption) {
        var user = {
          id: this.selectedOption.value,
          fullname: this.selectedOption.text
        };
        this.selectedOption = null;
        this.selectedText = "";
        if (this.items.find(function (item) {
          return item.id === user.id;
        })) {
          ProcessMaker.alert(this.$t("This has already been assigned."), "info");
          return;
        }
        this.items.push(user);
      }
    },
    getItems: function getItems() {
      return this.items;
    },
    handleClose: function handleClose() {
      this.showUserSelector = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("VueMultiselect", {
    staticClass: "pm-suggest-list",
    attrs: {
      options: _vm.options,
      placeholder: _vm.placeholder,
      "select-label": _vm.selectLabel,
      "deselect-label": _vm.deselectLabel,
      "selected-label": _vm.selectedLabel,
      searchable: _vm.searchable,
      loading: _vm.loading,
      "internal-search": _vm.internalSearch,
      "clear-on-select": _vm.clearOnSelect,
      "close-on-select": _vm.closeOnSelect,
      label: "text",
      "track-by": "value"
    },
    on: {
      "search-change": _vm.onSearchChange
    },
    model: {
      value: _vm.input,
      callback: function callback($$v) {
        _vm.input = $$v;
      },
      expression: "input"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/categories/components/CategorySelect.vue?vue&type=template&id=a87bd3e0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/categories/components/CategorySelect.vue?vue&type=template&id=a87bd3e0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "form-group",
    attrs: {
      required: ""
    }
  }, [_c("label", [_vm._v(_vm._s(_vm.$t(_vm.label)))]), _vm._v(" "), _c("multiselect", {
    "class": {
      "border border-danger": _vm.error
    },
    attrs: {
      "aria-label": _vm.$t(_vm.label),
      "track-by": "id",
      label: "name",
      loading: !!_vm.loading,
      placeholder: _vm.$t("type here to search"),
      options: _vm.options,
      multiple: true,
      "show-labels": false,
      searchable: true,
      "internal-search": false
    },
    on: {
      open: function open($event) {
        return _vm.load();
      },
      "search-change": _vm.load,
      select: function select(selected) {
        return _vm.lastSelectedId = selected.id;
      }
    },
    model: {
      value: _vm.content,
      callback: function callback($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  }, [_c("template", {
    slot: "noResult"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("No elements found. Consider changing the search query.")) + "\n    ")]), _vm._v(" "), _c("template", {
    slot: "noOptions"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("No Data Available")) + "\n    ")])], 2), _vm._v(" "), _vm._l(_vm.errors, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "invalid-feedback d-block"
    }, [error ? _c("small", {
      staticClass: "text-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v(_vm._s(error))]) : _vm._e()]);
  }), _vm._v(" "), _vm.error ? _c("small", {
    staticClass: "text-danger",
    attrs: {
      role: "alert"
    }
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.helper ? _c("small", {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t(_vm.helper)))]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "reassignment-user-selector-container p-0"
  }, [_vm.showUserSelector ? _c("b-form-group", {
    staticClass: "floating w-100 reassignment-user-selector-search"
  }, [_c("b-dropdown", {
    staticClass: "reassignment-user-selector-border rounded-sm",
    attrs: {
      id: "reassignmentUserSelector",
      size: "sm",
      variant: "light",
      "split-variant": "light",
      split: ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "fa fa-search pmql-icons"
        }), _vm._v(" "), _c("b-form-input", {
          staticClass: "reassignment-user-selector-input",
          attrs: {
            placeholder: _vm.selectedOption ? _vm.selectedOption.text : _vm.$t("Type here to search users"),
            size: "sm",
            autocomplete: "off",
            id: "reassignmentUserSelectorInput"
          },
          on: {
            input: _vm.onInput,
            click: function click($event) {
              return _vm.showMenu(_vm.toggleShowMenu = !_vm.toggleShowMenu);
            }
          },
          model: {
            value: _vm.selectedText,
            callback: function callback($$v) {
              _vm.selectedText = $$v;
            },
            expression: "selectedText"
          }
        })], 1)];
      },
      proxy: true
    }], null, false, 74930564)
  }, [_vm._v(" "), _vm._l(_vm.users, function (option) {
    return _c("b-dropdown-item", {
      key: option.value,
      attrs: {
        value: option
      },
      on: {
        click: function click($event) {
          return _vm.onSelect(option);
        }
      }
    }, [_vm._v("\n        " + _vm._s(option.text) + "\n      ")]);
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "reassignment-user-selector-body"
  }, _vm._l(_vm.items, function (item, index) {
    return _c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_vm._v("\n        " + _vm._s(item.fullname) + "\n      ")]), _vm._v(" "), _c("div", [_c("b-button", {
      staticClass: "p-0",
      attrs: {
        size: "sm",
        variant: "outline-light",
        pill: ""
      },
      on: {
        click: function click($event) {
          return _vm.confirmDelete(item.id);
        }
      }
    }, [_c("img", {
      attrs: {
        src: "/img/button-small-trash.svg",
        alt: _vm.$t("Remove")
      }
    })])], 1)]);
  }), 0), _vm._v(" "), _c("b-modal", {
    ref: "deleteModal",
    attrs: {
      title: _vm.$t("Confirm Deletion"),
      "ok-title": _vm.$t("Remove"),
      "cancel-title": _vm.$t("Cancel"),
      "ok-variant": "danger",
      centered: ""
    },
    on: {
      ok: function ok($event) {
        return _vm.remove(_vm.itemToRemove);
      }
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.$t("Are you sure you want to delete this reassignment?")))])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/processes/edit.js":
/*!****************************************!*\
  !*** ./resources/js/processes/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_components_CategorySelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/components/CategorySelect */ "./resources/js/processes/categories/components/CategorySelect.vue");
/* harmony import */ var _components_ProcessesPermissions_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProcessesPermissions.vue */ "./resources/js/processes/components/ProcessesPermissions.vue");
function cov_17t9zo382o() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/processes/edit.js";
  var hash = "5725bef0a4c426febc9c174cf7b5dbeaef33974e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/processes/edit.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 48
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 60
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5725bef0a4c426febc9c174cf7b5dbeaef33974e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17t9zo382o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_17t9zo382o();


cov_17t9zo382o().s[0]++;
Vue.component("CategorySelect", _categories_components_CategorySelect__WEBPACK_IMPORTED_MODULE_0__["default"]);
cov_17t9zo382o().s[1]++;
Vue.component("ProcessesPermissions", _components_ProcessesPermissions_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.min.css":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.min.css ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:before,.multiselect__spinner:after{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:initial;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"×\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{line-height:16px;min-height:40px;box-sizing:border-box;display:block;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;margin:0;text-decoration:none;border-radius:5px;border:1px solid #e8e8e8;cursor:pointer}.multiselect__select{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0 5px;border-color:#999999 transparent transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-radius:5px 5px 0 0;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}*[dir=rtl] .multiselect{text-align:right}*[dir=rtl] .multiselect__select{right:auto;left:1px}*[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}*[dir=rtl] .multiselect__content{text-align:right}*[dir=rtl] .multiselect__option:after{right:auto;left:0}*[dir=rtl] .multiselect__clear{right:auto;left:12px}*[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.pm-suggest-list[data-v-57a17a8c]{\n  min-height: 38px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.pm-suggest-list>div{\n  padding: 0px;\n  margin: 0px;\n}\n.pm-suggest-list>.multiselect__select{\n  height: 40px;\n}\n.pm-suggest-list>.multiselect__tags{\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 38px;\n}\n.pm-suggest-list>.multiselect__tags>*{\n  padding: 0px;\n  margin: 0px 40px 0px 5px;\n}\n.pm-suggest-list>.multiselect__tags>.multiselect__placeholder{\n  font-size: 16px;\n}\n.pm-suggest-list>.multiselect__content-wrapper{\n  font-size: 14px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.reassignment-user-selector-show {\n  display: block;\n  position: absolute;\n  transform: translate3d(-1px, 30px, 0px);\n  top: 0px;\n  left: 0px;\n  will-change: transform;\n  margin-top: 6px;\n}\n.reassignment-user-selector-border .dropdown-menu {\n  width: 100%;\n  border: none !important;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.reassignment-user-selector-border > button {\n  background-color: white !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.reassignment-user-selector-search[data-v-72a2bc20] {\n  padding: 8px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.125);\n  height: 300px;\n}\n.reassignment-user-selector-border[data-v-72a2bc20] {\n  border: 1px solid #CDDDEE;\n  box-shadow: 0 0 5px #CDDDEE;\n  width: 100%;\n}\n.reassignment-user-selector-border[data-v-72a2bc20] > :first-child {\n  width: 100%;\n}\n.reassignment-user-selector-input[data-v-72a2bc20] {\n  border: 1px solid white;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: auto;\n  width: 100%;\n}\n.reassignment-user-selector-input[data-v-72a2bc20]:focus {\n  box-shadow: none !important;\n  border: 1px solid white !important;\n}\n.reassignment-user-selector-container[data-v-72a2bc20] {\n  position: relative;\n}\n.floating[data-v-72a2bc20] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1;\n}\n.reassignment-user-selector-body[data-v-72a2bc20] {\n  border: 1px solid var(--tabs-scroll-bg);\n  border-radius: 5px;\n  padding: 12px;\n}\n.reassignment-user-selector-body > div[data-v-72a2bc20] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--tabs-scroll-bg);\n}\n.reassignment-user-selector-body > div[data-v-72a2bc20]:first-child {\n  padding-top: 0;\n}\n.reassignment-user-selector-body > div[data-v-72a2bc20]:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.min.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.min.css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./vue-multiselect.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_0_id_57a17a8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_0_id_57a17a8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_0_id_57a17a8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_1_id_57a17a8c_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_1_id_57a17a8c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_1_id_57a17a8c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_0_id_72a2bc20_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_0_id_72a2bc20_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_0_id_72a2bc20_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_1_id_72a2bc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_1_id_72a2bc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_1_id_72a2bc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/PMFormSelectSuggest.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/PMFormSelectSuggest.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PMFormSelectSuggest_vue_vue_type_template_id_57a17a8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true& */ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true&");
/* harmony import */ var _PMFormSelectSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PMFormSelectSuggest.vue?vue&type=script&lang=js& */ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=script&lang=js&");
/* harmony import */ var _PMFormSelectSuggest_vue_vue_type_style_index_0_id_57a17a8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css& */ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css&");
/* harmony import */ var _PMFormSelectSuggest_vue_vue_type_style_index_1_id_57a17a8c_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css& */ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _PMFormSelectSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PMFormSelectSuggest_vue_vue_type_template_id_57a17a8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PMFormSelectSuggest_vue_vue_type_template_id_57a17a8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "57a17a8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PMFormSelectSuggest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/processes/categories/components/CategorySelect.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/processes/categories/components/CategorySelect.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategorySelect_vue_vue_type_template_id_a87bd3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategorySelect.vue?vue&type=template&id=a87bd3e0& */ "./resources/js/processes/categories/components/CategorySelect.vue?vue&type=template&id=a87bd3e0&");
/* harmony import */ var _CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategorySelect.vue?vue&type=script&lang=js& */ "./resources/js/processes/categories/components/CategorySelect.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategorySelect_vue_vue_type_template_id_a87bd3e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategorySelect_vue_vue_type_template_id_a87bd3e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/processes/categories/components/CategorySelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/processes/components/ProcessesPermissions.vue":
/*!********************************************************************!*\
  !*** ./resources/js/processes/components/ProcessesPermissions.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProcessesPermissions_vue_vue_type_template_id_72a2bc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true& */ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true&");
/* harmony import */ var _ProcessesPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProcessesPermissions.vue?vue&type=script&lang=js& */ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProcessesPermissions_vue_vue_type_style_index_0_id_72a2bc20_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css& */ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css&");
/* harmony import */ var _ProcessesPermissions_vue_vue_type_style_index_1_id_72a2bc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css& */ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ProcessesPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProcessesPermissions_vue_vue_type_template_id_72a2bc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProcessesPermissions_vue_vue_type_template_id_72a2bc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72a2bc20",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/processes/components/ProcessesPermissions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PMFormSelectSuggest.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMFormSelectSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/processes/categories/components/CategorySelect.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/processes/categories/components/CategorySelect.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategorySelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/categories/components/CategorySelect.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/processes/components/ProcessesPermissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessesPermissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_template_id_57a17a8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_template_id_57a17a8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_template_id_57a17a8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=template&id=57a17a8c&scoped=true&");


/***/ }),

/***/ "./resources/js/processes/categories/components/CategorySelect.vue?vue&type=template&id=a87bd3e0&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/processes/categories/components/CategorySelect.vue?vue&type=template&id=a87bd3e0& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_template_id_a87bd3e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_template_id_a87bd3e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_template_id_a87bd3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategorySelect.vue?vue&type=template&id=a87bd3e0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/categories/components/CategorySelect.vue?vue&type=template&id=a87bd3e0&");


/***/ }),

/***/ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/processes/components/ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_template_id_72a2bc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_template_id_72a2bc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_template_id_72a2bc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=template&id=72a2bc20&scoped=true&");


/***/ }),

/***/ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_0_id_57a17a8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=0&id=57a17a8c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMFormSelectSuggest_vue_vue_type_style_index_1_id_57a17a8c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMFormSelectSuggest.vue?vue&type=style&index=1&id=57a17a8c&lang=css&");


/***/ }),

/***/ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_0_id_72a2bc20_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=0&id=72a2bc20&lang=css&");


/***/ }),

/***/ "./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessesPermissions_vue_vue_type_style_index_1_id_72a2bc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/components/ProcessesPermissions.vue?vue&type=style&index=1&id=72a2bc20&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.es.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multiselect": () => (/* binding */ B),
/* harmony export */   "default": () => (/* binding */ B),
/* harmony export */   "multiselectMixin": () => (/* binding */ L),
/* harmony export */   "pointerMixin": () => (/* binding */ x)
/* harmony export */ });
function c(i) {
  return i === 0 ? !1 : Array.isArray(i) && i.length === 0 ? !0 : !i;
}
function w(i) {
  return (...e) => !i(...e);
}
function O(i, e) {
  return i === void 0 && (i = "undefined"), i === null && (i = "null"), i === !1 && (i = "false"), i.toString().toLowerCase().indexOf(e.trim()) !== -1;
}
function b(i, e, s, t) {
  return i.filter((l) => O(t(l, s), e));
}
function v(i) {
  return i.filter((e) => !e.$isLabel);
}
function p(i, e) {
  return (s) => s.reduce((t, l) => l[i] && l[i].length ? (t.push({
    $groupLabel: l[e],
    $isLabel: !0
  }), t.concat(l[i])) : t, []);
}
function S(i, e, s, t, l) {
  return (r) => r.map((u) => {
    if (!u[s])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const h = b(u[s], i, e, l);
    return h.length ? {
      [t]: u[t],
      [s]: h
    } : [];
  });
}
const g = (...i) => (e) => i.reduce((s, t) => t(s), e);
let m = 0;
const L = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    value: {
      type: null,
      default() {
        return [];
      }
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(i, e) {
        return c(i) ? "" : e ? i[e] : i;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]), this.pointer = this.initialPointer();
  },
  beforeCreate() {
    this.uuid = m.toString(), m += 1;
  },
  computed: {
    internalValue() {
      return this.value || this.value === 0 ? Array.isArray(this.value) ? this.value : [this.value] : [];
    },
    filteredOptions() {
      const i = this.search || "", e = i.toLowerCase().trim();
      let s = this.options.concat();
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, e, this.label) : b(s, e, this.label, this.customLabel) : s = this.groupValues ? p(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(w(this.isSelected)) : s, this.taggable && e.length && !this.isExistingOption(e) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: i }) : s.unshift({ isTag: !0, label: i })), s.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((i) => i[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((e) => this.customLabel(e, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("input", this.multiple ? [] : null));
    },
    search() {
      this.$emit("search-change", this.search, this.id);
    }
  },
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat(i, e, s) {
      return g(
        S(e, s, this.groupValues, this.groupLabel, this.customLabel),
        p(this.groupValues, this.groupLabel)
      )(i);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip(i) {
      return g(
        p(this.groupValues, this.groupLabel),
        v
      )(i);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(i) {
      this.search = i;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @returns {Boolean} returns true if element is available
     */
    isExistingOption(i) {
      return this.options ? this.optionKeys.indexOf(i) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(i) {
      const e = this.trackBy ? i[this.trackBy] : i;
      return this.valueKeys.indexOf(e) > -1;
    },
    /**
     * When mounted, pick the first item and set the pointer to it
     * @returns {Integer}
     */
    initialPointer() {
      const i = this.options.findIndex((e) => e === this.internalValue[0]);
      return i === -1 ? 0 : i;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(i) {
      return !!i.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(i) {
      if (c(i))
        return "";
      if (i.isTag)
        return i.label;
      if (i.$isLabel)
        return i.$groupLabel;
      let e = this.customLabel(i, this.label);
      return c(e) ? "" : e;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(i, e) {
      if (i.$isLabel && this.groupSelect) {
        this.selectGroup(i);
        return;
      }
      if (!(this.blockKeys.indexOf(e) !== -1 || this.disabled || i.$isDisabled || i.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(e === "Tab" && !this.pointerDirty)) {
        if (i.isTag)
          this.$emit("tag", i.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(i)) {
            e !== "Tab" && this.removeElement(i);
            return;
          }
          this.$emit("select", i, this.id), this.multiple ? this.$emit("input", this.internalValue.concat([i]), this.id) : this.$emit("input", i, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(i) {
      const e = this.options.find((s) => s[this.groupLabel] === i.$groupLabel);
      if (e) {
        if (this.wholeGroupSelected(e)) {
          this.$emit("remove", e[this.groupValues], this.id);
          const s = this.internalValue.filter(
            (t) => e[this.groupValues].indexOf(t) === -1
          );
          this.$emit("input", s, this.id);
        } else {
          const s = e[this.groupValues].filter(
            (t) => !(this.isOptionDisabled(t) || this.isSelected(t))
          );
          this.$emit("select", s, this.id), this.$emit(
            "input",
            this.internalValue.concat(s),
            this.id
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(i) {
      return i[this.groupValues].every(
        (e) => this.isSelected(e) || this.isOptionDisabled(e)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(i) {
      return i[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement(i, e = !0) {
      if (this.disabled || i.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const s = typeof i == "object" ? this.valueKeys.indexOf(i[this.trackBy]) : this.valueKeys.indexOf(i);
      if (this.$emit("remove", i, this.id), this.multiple) {
        const t = this.internalValue.slice(0, s).concat(this.internalValue.slice(s + 1));
        this.$emit("input", t, this.id);
      } else
        this.$emit("input", null, this.id);
      this.closeOnSelect && e && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search && this.$refs.search.blur() : this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u")
        return;
      const i = this.$el.getBoundingClientRect().top, e = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      e > this.maxHeight || e > i || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(e - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(i - 40, this.maxHeight));
    }
  }
}, x = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", "option-" + this.uuid + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(i, e) {
      return {
        "multiselect__option--highlight": i === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(e)
      };
    },
    groupHighlight(i, e) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": e.$isLabel }
        ];
      const s = this.options.find((t) => t[this.groupLabel] === e.$groupLabel);
      return s && !this.wholeGroupDisabled(s) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": i === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(s) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: i } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], i);
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(i) {
      this.pointer = i, this.pointerDirty = !0;
    }
  }
};
function k(i, e, s, t, l, r, u, h) {
  var n = typeof i == "function" ? i.options : i;
  e && (n.render = e, n.staticRenderFns = s, n._compiled = !0), t && (n.functional = !0), r && (n._scopeId = "data-v-" + r);
  var o;
  if (u ? (o = function(a) {
    a = a || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), l && l.call(this, a), a && a._registeredComponents && a._registeredComponents.add(u);
  }, n._ssrRegister = o) : l && (o = h ? function() {
    l.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), o)
    if (n.functional) {
      n._injectStyles = o;
      var y = n.render;
      n.render = function(_, f) {
        return o.call(f), y(_, f);
      };
    } else {
      var d = n.beforeCreate;
      n.beforeCreate = d ? [].concat(d, o) : [o];
    }
  return {
    exports: i,
    options: n
  };
}
const V = {
  name: "vue-multiselect",
  mixins: [L, x],
  props: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
      type: Number,
      default: 99999
    },
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: (i) => `and ${i} more`
    },
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
      type: String,
      default: ""
    },
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.value && this.value.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    }
  }
};
var D = function() {
  var e = this, s = e._self._c;
  return s("div", { staticClass: "multiselect", class: { "multiselect--active": e.isOpen, "multiselect--disabled": e.disabled, "multiselect--above": e.isAbove }, attrs: { tabindex: e.searchable ? -1 : e.tabindex, role: "combobox", "aria-expanded": e.isOpen ? "true" : "false", "aria-owns": "listbox-" + e.uuid, "aria-haspopup": "listbox" }, on: { focus: function(t) {
    return e.activate();
  }, blur: function(t) {
    e.searchable || e.deactivate();
  }, keydown: [function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) || t.target !== t.currentTarget ? null : (t.preventDefault(), e.pointerForward());
  }, function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) || t.target !== t.currentTarget ? null : (t.preventDefault(), e.pointerBackward());
  }], keypress: function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") && e._k(t.keyCode, "tab", 9, t.key, "Tab") || (t.stopPropagation(), t.target !== t.currentTarget) ? null : e.addPointerElement(t);
  }, keyup: function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.deactivate();
  } } }, [e._t("caret", function() {
    return [s("div", { staticClass: "multiselect__select", on: { mousedown: function(t) {
      return t.preventDefault(), t.stopPropagation(), e.toggle();
    } } })];
  }, { toggle: e.toggle }), e._t("clear", null, { search: e.search }), s("div", { ref: "tags", staticClass: "multiselect__tags" }, [e._t("selection", function() {
    return [s("div", { directives: [{ name: "show", rawName: "v-show", value: e.visibleValues.length > 0, expression: "visibleValues.length > 0" }], staticClass: "multiselect__tags-wrap" }, [e._l(e.visibleValues, function(t, l) {
      return [e._t("tag", function() {
        return [s("span", { key: l, staticClass: "multiselect__tag" }, [s("span", { domProps: { textContent: e._s(e.getOptionLabel(t)) } }), s("i", { staticClass: "multiselect__tag-icon", attrs: { role: "button", "aria-label": "Remove Element" }, on: { keypress: function(r) {
          return !r.type.indexOf("key") && e._k(r.keyCode, "enter", 13, r.key, "Enter") ? null : (r.preventDefault(), e.removeElement(t));
        }, mousedown: function(r) {
          return r.preventDefault(), e.removeElement(t);
        } } })])];
      }, { option: t, search: e.search, remove: e.removeElement })];
    })], 2), e.internalValue && e.internalValue.length > e.limit ? [e._t("limit", function() {
      return [s("strong", { staticClass: "multiselect__strong", domProps: { textContent: e._s(e.limitText(e.internalValue.length - e.limit)) } })];
    })] : e._e()];
  }, { search: e.search, remove: e.removeElement, values: e.visibleValues, isOpen: e.isOpen }), s("transition", { attrs: { name: "multiselect__loading" } }, [e._t("loading", function() {
    return [s("div", { directives: [{ name: "show", rawName: "v-show", value: e.loading, expression: "loading" }], staticClass: "multiselect__spinner" })];
  })], 2), e.searchable ? s("input", { ref: "search", staticClass: "multiselect__input", style: e.inputStyle, attrs: { name: e.name, id: e.id, type: "text", autocomplete: "off", spellcheck: "false", placeholder: e.placeholder, "aria-placeholder": e.placeholder, "aria-autocomplete": "list", disabled: e.disabled, tabindex: e.tabindex, "aria-controls": "listbox-" + e.uuid }, domProps: { value: e.search }, on: { input: function(t) {
    return e.updateSearch(t.target.value);
  }, focus: function(t) {
    return t.preventDefault(), e.activate();
  }, blur: function(t) {
    return t.preventDefault(), e.deactivate();
  }, keyup: function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.deactivate();
  }, keydown: [function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) ? null : (t.preventDefault(), e.pointerForward());
  }, function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) ? null : (t.preventDefault(), e.pointerBackward());
  }, function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "delete", [8, 46], t.key, ["Backspace", "Delete", "Del"]) ? null : (t.stopPropagation(), e.removeLastElement());
  }], keypress: function(t) {
    return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") || (t.preventDefault(), t.stopPropagation(), t.target !== t.currentTarget) ? null : e.addPointerElement(t);
  } } }) : e._e(), e.isSingleLabelVisible ? s("span", { staticClass: "multiselect__single", on: { mousedown: function(t) {
    return t.preventDefault(), e.toggle.apply(null, arguments);
  } } }, [e._t("singleLabel", function() {
    return [[e._v(e._s(e.currentOptionLabel))]];
  }, { option: e.singleValue })], 2) : e._e(), e.isPlaceholderVisible ? s("span", { staticClass: "multiselect__placeholder", on: { mousedown: function(t) {
    return t.preventDefault(), e.toggle.apply(null, arguments);
  } } }, [e._t("placeholder", function() {
    return [e._v(" " + e._s(e.placeholder) + " ")];
  })], 2) : e._e()], 2), s("transition", { attrs: { name: "multiselect" } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: e.isOpen, expression: "isOpen" }], ref: "list", staticClass: "multiselect__content-wrapper", style: { maxHeight: e.optimizedHeight + "px" }, attrs: { tabindex: "-1" }, on: { focus: e.activate, mousedown: function(t) {
    t.preventDefault();
  } } }, [s("ul", { staticClass: "multiselect__content", style: e.contentStyle, attrs: { role: "listbox", id: "listbox-" + e.uuid } }, [e._t("beforeList"), e.multiple && e.max === e.internalValue.length ? s("li", [s("span", { staticClass: "multiselect__option" }, [e._t("maxElements", function() {
    return [e._v("Maximum of " + e._s(e.max) + " options selected. First remove a selected option to select another.")];
  })], 2)]) : e._e(), !e.max || e.internalValue.length < e.max ? e._l(e.filteredOptions, function(t, l) {
    return s("li", { key: l, staticClass: "multiselect__element", attrs: { id: "option-" + e.uuid + "-" + l, role: t && (t.$isLabel || t.$isDisabled) ? null : "option", "aria-selected": e.isSelected(t) ? "true" : "false", "aria-label": e.getOptionLabel(t) + ". " + (e.isSelected(t) ? e.deselectLabelText : e.selectLabelText) } }, [t && (t.$isLabel || t.$isDisabled) ? e._e() : s("span", { staticClass: "multiselect__option", class: e.optionHighlight(l, t), attrs: { "data-select": t && t.isTag ? e.tagPlaceholder : e.selectLabelText, "data-selected": e.selectedLabelText, "data-deselect": e.deselectLabelText }, on: { click: function(r) {
      return r.stopPropagation(), e.select(t);
    }, mouseenter: function(r) {
      return r.target !== r.currentTarget ? null : e.pointerSet(l);
    } } }, [e._t("option", function() {
      return [s("span", [e._v(e._s(e.getOptionLabel(t)))])];
    }, { option: t, search: e.search, index: l })], 2), t && (t.$isLabel || t.$isDisabled) ? s("span", { staticClass: "multiselect__option", class: e.groupHighlight(l, t), attrs: { "data-select": e.groupSelect && e.selectGroupLabelText, "data-deselect": e.groupSelect && e.deselectGroupLabelText }, on: { mouseenter: function(r) {
      if (r.target !== r.currentTarget)
        return null;
      e.groupSelect && e.pointerSet(l);
    }, mousedown: function(r) {
      return r.preventDefault(), e.selectGroup(t);
    } } }, [e._t("option", function() {
      return [s("span", [e._v(e._s(e.getOptionLabel(t)))])];
    }, { option: t, search: e.search, index: l })], 2) : e._e()]);
  }) : e._e(), s("li", { directives: [{ name: "show", rawName: "v-show", value: e.showNoResults && e.filteredOptions.length === 0 && e.search && !e.loading, expression: "showNoResults && (filteredOptions.length === 0 && search && !loading)" }] }, [s("span", { staticClass: "multiselect__option" }, [e._t("noResult", function() {
    return [e._v("No elements found. Consider changing the search query.")];
  }, { search: e.search })], 2)]), s("li", { directives: [{ name: "show", rawName: "v-show", value: e.showNoOptions && e.options.length === 0 && !e.search && !e.loading, expression: "showNoOptions && (options.length === 0 && !search && !loading)" }] }, [s("span", { staticClass: "multiselect__option" }, [e._t("noOptions", function() {
    return [e._v("List is empty.")];
  })], 2)]), e._t("afterList")], 2)])])], 2);
}, C = [], T = /* @__PURE__ */ k(
  V,
  D,
  C,
  !1,
  null,
  null,
  null,
  null
);
const B = T.exports;



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/processes/edit.js"));
/******/ }
]);