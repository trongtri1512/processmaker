"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_tasks_components_MobileTasks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AvatarImage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AvatarImage.vue */ "./resources/js/components/AvatarImage.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AvatarImage: _components_AvatarImage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    item: null,
    type: null,
    loading: false,
    cardMessage: null,
    currentPage: {
      type: Number,
      "default": 1
    },
    totalPages: {
      type: Number,
      "default": 0
    },
    process: null,
    hideBookmark: {
      type: Boolean,
      "default": false
    },
    showCards: true,
    fields: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      openURL: "",
      colorStatus: "",
      requestBadge: "",
      taskStatus: "",
      isVisible: false,
      title1: "",
      title2: "",
      formatItem: [],
      callbackResize: function callbackResize() {}
    };
  },
  computed: {
    caseNumber: function caseNumber() {
      if (this.type === "requests") {
        return this.item.case_number;
      }
      if (this.type === "tasks") {
        return this.item.process_request.case_number;
      }
      return null;
    }
  },
  watch: {
    item: function item() {
      var _this = this;
      this.formatItem = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.item);
      if (this.type === "requests") {
        this.splitText(this.sanitize(this.item.case_title_formatted));
      } else if (this.type === "tasks") {
        this.splitText(this.sanitize(this.item.process_request.case_title_formatted));
      }
      this.fields.forEach(function (row) {
        if (row.field === "tasks") {
          _this.formatItem[row.field] = _this.formatActiveTasks(_this.formatItem.active_tasks);
        }
        if (row.format && row.format === "dateTime") {
          _this.formatItem[row.field] = _this.formatDate(_this.formatItem[row.field]);
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.formatItem = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.item);
    this.callbackResize = function () {
      if (_this2.type === "requests") {
        _this2.splitText(_this2.sanitize(_this2.item.case_title_formatted));
      } else if (_this2.type === "tasks") {
        _this2.splitText(_this2.sanitize(_this2.item.process_request.case_title_formatted));
      }
    };
    window.addEventListener("resize", this.callbackResize);
    if (this.type === "tasks") {
      this.splitText(this.sanitize(this.item.process_request.case_title_formatted));
    } else if (this.type === "requests") {
      this.splitText(this.sanitize(this.item.case_title_formatted));
    }
    this.fields.forEach(function (row) {
      if (row.field === "tasks") {
        _this2.formatItem[row.field] = _this2.formatActiveTasks(_this2.formatItem.active_tasks);
      }
      if (row.format && row.format === "dateTime") {
        _this2.formatItem[row.field] = _this2.formatDate(_this2.formatItem[row.field]);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.callbackResize);
  },
  methods: {
    /**
     * Show info in the badge
     */
    showBadge: function showBadge() {
      var statusMap = {
        "DRAFT": {
          color: "#F9E8C3",
          label: this.$t("Draft")
        },
        "CANCELED": {
          color: "#FFC7C7",
          label: this.$t("Canceled")
        },
        "CLOSED": {
          color: "#B8DCF7",
          label: this.$t("Completed")
        },
        "COMPLETED": {
          color: "#B8DCF7",
          label: this.$t("Completed")
        },
        "ERROR": {
          color: "#FFC7C7",
          label: this.$t("Error")
        },
        "ACTIVE": {
          "overdue": {
            color: "#FFC7C7",
            label: this.$t("Overdue")
          },
          "open": {
            color: "#C8F0CF",
            label: this.$t("In Progress")
          },
          "default": {
            color: "#C8F0CF",
            label: this.$t("In Progress")
          }
        },
        "default": {
          color: "#C8F0CF",
          label: this.$t("In Progress")
        }
      };
      if (this.item.status === "ACTIVE") {
        var advanceStatus = this.item.advanceStatus ? statusMap["ACTIVE"][this.item.advanceStatus] : statusMap["ACTIVE"]["default"];
        this.colorStatus = "background-color: ".concat(advanceStatus.color);
        this.requestBadge = advanceStatus.label;
      } else {
        var currentStatus = statusMap[this.item.status] || statusMap["default"];
        this.colorStatus = "background-color: ".concat(currentStatus.color);
        this.requestBadge = currentStatus.label;
      }
      return this.requestBadge;
    },
    /**
     * Format the date
     */
    formatDate: function formatDate(value) {
      if (value) {
        return window.moment(value).format('DD MMM YYYY / HH:mm');
      }
      return "n/a";
    },
    openCard: function openCard() {
      if (this.type === "tasks") {
        this.openURL = "/tasks/".concat(this.item.id, "/edit");
      }
      if (this.type === "requests") {
        this.openURL = "/requests/".concat(this.item.id);
      }
    },
    splitText: function splitText(text) {
      var _this3 = this;
      // Split the text into two lines
      this.title1 = "";
      this.title2 = "";
      var lineBreak = false;
      this.isVisible = true;
      var words = text.split(' ');
      this.$nextTick(function () {
        var fullText = _this3.$refs.fullText;
        var fullWidth = fullText.offsetWidth;
        words.forEach(function (word) {
          if ((_this3.title1 + word).length < fullWidth / 7 && !lineBreak) {
            _this3.title1 += "".concat(word, " ");
          } else {
            _this3.title2 += "".concat(word, " ");
            lineBreak = true;
          }
        });
        _this3.isVisible = false;
      });
    },
    formatActiveTasks: function formatActiveTasks(value) {
      return value.map(function (task) {
        return "".concat(task.element_name);
      }).join(", ");
    },
    sanitize: function sanitize(html) {
      return this.removeScripts(html);
    },
    removeScripts: function removeScripts(input) {
      var doc = new DOMParser().parseFromString(input, 'text/html');
      var scripts = doc.querySelectorAll('script');
      scripts.forEach(function (script) {
        script.remove();
      });
      var styles = doc.querySelectorAll('style');
      styles.forEach(function (style) {
        style.remove();
      });
      return doc.body.innerHTML;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/MobileCardsPagination.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/MobileCardsPagination.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue */ "./resources/js/Mobile/Card.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Card: _Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    dataLength: {
      type: Number,
      required: true
    },
    counterPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    cardMessage: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    showPaginationCard: function showPaginationCard() {
      return this.index % this.perPage === this.perPage - 1 && this.dataLength >= this.perPage;
    },
    isLastItem: function isLastItem() {
      return this.index + 1 === this.dataLength;
    },
    currentPage: function currentPage() {
      return this.counterPage + Math.floor(this.index / this.perPage);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_DataLoading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/DataLoading.vue */ "./resources/js/components/common/DataLoading.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataLoading: _common_DataLoading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    message: {
      type: String,
      "default": ""
    },
    description: {
      type: String,
      "default": ""
    },
    baseURL: {
      type: String,
      "default": ""
    },
    shouldShowLoader: null,
    dataLoadingId: null
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/MobileTasks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/MobileTasks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Mobile_Card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Mobile/Card.vue */ "./resources/js/Mobile/Card.vue");
/* harmony import */ var _components_common_mixins_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/mixins/datatable */ "./resources/js/components/common/mixins/datatable.js");
/* harmony import */ var _ListMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListMixin */ "./resources/js/tasks/components/ListMixin.js");
/* harmony import */ var _Mobile_MobileCardsPagination_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Mobile/MobileCardsPagination.vue */ "./resources/js/Mobile/MobileCardsPagination.vue");
/* harmony import */ var _components_PMMessageResults_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PMMessageResults.vue */ "./resources/js/components/PMMessageResults.vue");
/* harmony import */ var _components_common_mixins_apiDataLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/mixins/apiDataLoading */ "./resources/js/components/common/mixins/apiDataLoading.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Card: _Mobile_Card_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileCardsPagination: _Mobile_MobileCardsPagination_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PMMessageResults: _components_PMMessageResults_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_components_common_mixins_datatable__WEBPACK_IMPORTED_MODULE_2__["default"], _ListMixin__WEBPACK_IMPORTED_MODULE_3__["default"], _components_common_mixins_apiDataLoading__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    filter: {},
    process: Object,
    advancedFilter: {
      type: Object,
      "default": function _default() {
        return null;
      }
    }
  },
  data: function data() {
    return {
      data: "",
      pmql: "",
      orderBy: "ID",
      order_direction: "DESC",
      status: "",
      sortOrder: [{
        field: "ID",
        sortField: "ID",
        direction: "DESC"
      }],
      fields: [{
        label: "Task",
        field: "element_name"
      }, {
        label: "Due",
        field: "due_at",
        format: "dateTime"
      }, {
        label: "Completed",
        field: "completed_at",
        format: "dateTime"
      }],
      previousFilter: "",
      previousPmql: "",
      endpoint: "tasks"
    };
  },
  mounted: function mounted() {
    var _this$advancedFilter;
    var filter = this.process ? " AND (process_id = ".concat(this.process.id, ")") : "";
    // Check if advanced filters are provided
    if ((_this$advancedFilter = this.advancedFilter) !== null && _this$advancedFilter !== void 0 && _this$advancedFilter.filters) {
      // Set pmql to filter by user_id
      this.pmql = "(user_id = ".concat(ProcessMaker.user.id, ")");
    } else {
      // Set pmql to filter by user_id and status, including process filter if available
      this.pmql = "(user_id = ".concat(ProcessMaker.user.id, ") AND (status = \"In Progress\")").concat(filter);
    }
  },
  methods: {
    updatePmql: function updatePmql(value) {
      this.pmql = "(user_id = ".concat(ProcessMaker.user.id, ") ").concat(value);
    },
    updateOrder: function updateOrder(value) {
      this.sortOrder[0].sortField = value;
    },
    /**
     * Generates the advanced filter query string for the API request.
     * If advanced filters are provided, it formats them by removing keys that start with an underscore
     * and then encodes them as a query string.
     *
     * @returns {string} The encoded advanced filter query string or an empty string if no filters are provided.
     */
    getAdvancedFilter: function getAdvancedFilter() {
      var _this$advancedFilter2;
      if ((_this$advancedFilter2 = this.advancedFilter) !== null && _this$advancedFilter2 !== void 0 && _this$advancedFilter2.filters) {
        this.pmql = '';

        // Format the filters by removing keys that start with an underscore
        var formattedFilter = this.advancedFilter.filters.map(function (obj) {
          return Object.fromEntries(Object.entries(obj).filter(function (_ref) {
            var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
              key = _ref2[0],
              _ = _ref2[1];
            return !key.startsWith('_');
          }));
        });

        // Encode the formatted filters as a query string
        return "&advanced_filter=" + encodeURIComponent(JSON.stringify(formattedFilter));
      }

      // Return an empty string if no filters are provided
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=template&id=62f5cecf&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=template&id=62f5cecf&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showCards ? _c("b-card", {
    staticClass: "m-3 card-mobile",
    attrs: {
      "no-body": ""
    }
  }, [_c("a", {
    attrs: {
      href: _vm.openURL
    }
  }, [_c("b-card-body", {
    staticClass: "card-mobile-body"
  }, [_c("b-card-text", {
    on: {
      click: function click($event) {
        return _vm.openCard();
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("span", [_c("div", {
    ref: "fullText",
    style: {
      display: _vm.isVisible ? "block" : "none"
    },
    domProps: {
      innerHTML: _vm._s(_vm.sanitize(_vm.item.case_title_formatted))
    }
  }), _vm._v(" "), _c("div", {
    ref: "line1",
    staticClass: "line-1",
    domProps: {
      innerHTML: _vm._s(_vm.title1)
    }
  }), _vm._v(" "), _c("div", {
    ref: "line2",
    staticClass: "line-2",
    domProps: {
      innerHTML: _vm._s(_vm.title2)
    }
  })])])], 1), _vm._v(" "), _c("b-row", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "card-divider col-11"
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 mb-3"
  }, [[_vm._l(_vm.fields, function (row, index) {
    return [_c("div", {
      key: index,
      staticClass: "bodyInfo"
    }, [_vm._v("\n                " + _vm._s(_vm.$t(row.label)) + ": " + _vm._s(_vm.formatItem[row.field]) + "\n              ")])];
  })]], 2)], 1)], 1), _vm._v(" "), _c("b-card-footer", {
    staticClass: "card-mobile-footer",
    on: {
      click: function click($event) {
        return _vm.openCard();
      }
    }
  }, [_c("b-row", {
    attrs: {
      "align-h": "between"
    }
  }, [_c("b-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("img", {
    attrs: {
      src: "/img/smartinbox-images/open-case.svg",
      alt: "case_number"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "footer-case-number"
  }, [_vm._v("\n            #" + _vm._s(_vm.caseNumber) + "\n          ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "align-left",
    attrs: {
      cols: "8"
    }
  }, [_vm.item.draft && _vm.item.status !== "CLOSED" && _vm.type === "tasks" ? _c("span", {
    staticClass: "footer-status badge-draft"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Draft")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("b-badge", {
    staticClass: "footer-status",
    style: _vm.colorStatus
  }, [_vm._v("\n            " + _vm._s(_vm.showBadge(_vm.item)) + "\n          ")]), _vm._v(" "), _vm.item.is_priority ? _c("img", {
    staticClass: "mobile-priority",
    attrs: {
      src: "/img/priority.svg",
      alt: _vm.$t("Priority")
    }
  }) : _vm._e()], 1)], 1)], 1)], 1)]) : _c("b-card", {
    staticClass: "card-tasks"
  }, [_c("div", {
    staticClass: "card-tasks-content"
  }, [_vm.cardMessage === "show-page" ? _c("span", [_vm._v("Page " + _vm._s(_vm.currentPage) + " of " + _vm._s(_vm.totalPages))]) : _vm._e(), _vm._v(" "), _vm.cardMessage === "show-more" && !_vm.loading ? _c("span", [_vm._v(" " + _vm._s(_vm.$t("Show More")))]) : _vm._e(), _vm._v(" "), _vm.loading ? _c("span", [_c("i", {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v(" " + _vm._s(_vm.$t("Loading")) + "...")]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/MobileCardsPagination.vue?vue&type=template&id=2bbce12c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/MobileCardsPagination.vue?vue&type=template&id=2bbce12c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showPaginationCard ? _c("div", {
    staticStyle: {
      width: "100%"
    }
  }, [_vm.isLastItem ? _c("Card", {
    attrs: {
      "show-cards": false,
      "current-page": _vm.currentPage,
      "total-pages": _vm.totalPages,
      "card-message": "show-more",
      loading: _vm.loading
    }
  }) : _c("Card", {
    attrs: {
      "show-cards": false,
      "current-page": _vm.currentPage,
      "total-pages": _vm.totalPages,
      "card-message": _vm.cardMessage,
      loading: _vm.loading
    }
  })], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("DataLoading", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.shouldShowLoader,
      expression: "shouldShowLoader"
    }],
    attrs: {
      "for": new RegExp(_vm.baseURL),
      "data-loading-id": _vm.dataLoadingId,
      "empty-icon": "noTasks"
    },
    scopedSlots: _vm._u([{
      key: "no-results-title",
      fn: function fn() {
        return [_c("span")];
      },
      proxy: true
    }, {
      key: "no-results-message",
      fn: function fn() {
        return [_c("b", [_vm._v("\n      " + _vm._s(_vm.message) + "\n    ")]), _vm._v(" "), _c("span", {
          staticClass: "pm-message-description"
        }, [_vm._v("\n      " + _vm._s(_vm.description) + "  \n    ")])];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/MobileTasks.vue?vue&type=template&id=c1ca60dc&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/MobileTasks.vue?vue&type=template&id=c1ca60dc& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
    ref: "tasksContainer",
    staticClass: "tasks-container"
  }, [_c("PMMessageResults", {
    attrs: {
      baseURL: _vm.endpoint,
      shouldShowLoader: _vm.shouldShowLoader,
      dataLoadingId: _vm.dataLoadingId,
      message: _vm.$t("No items to show"),
      description: _vm.$t("You have to start a Case of this process.")
    }
  }), _vm._v(" "), _vm._l(_vm.data.data, function (item, index) {
    return [_c("card", {
      key: index,
      attrs: {
        item: item,
        fields: _vm.fields,
        "show-cards": true,
        type: "tasks"
      }
    }), _vm._v(" "), _c("mobile-cards-pagination", {
      attrs: {
        index: index,
        "per-page": _vm.perPage,
        "data-length": _vm.data.data.length,
        "counter-page": _vm.counterPage,
        "total-pages": _vm.totalPages,
        "card-message": _vm.cardMessage,
        loading: _vm.loading
      }
    })];
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-62f5cecf] {\n  color: #4C545C;\n}\n.bodyInfo[data-v-62f5cecf] {\n  color: rgba(76, 84, 92, 0.7);\n  font-size: 14px;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.titleInfo[data-v-62f5cecf] {\n  color: #1572C2;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.footer-case-number[data-v-62f5cecf] {\n  font-weight: 500;\n  font-size: 13px;\n}\n.footer-status[data-v-62f5cecf] {\n  color: rgba(0, 0, 0, 0.75);\n  font-weight: 700;\n  font-size: 12px;\n  padding: 7px;\n  border-radius: 4.5px;\n}\n.align-left[data-v-62f5cecf] {\n  text-align: end;\n}\n.card-tasks[data-v-62f5cecf] {\n  height: 40px;\n  margin-top: 1rem;\n  margin-right: 1rem;\n  border-radius: 8px;\n  background-color: #E5EDF3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin-left: 1rem;\n}\n.card-tasks-content[data-v-62f5cecf] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.card-divider[data-v-62f5cecf] {\n  border-top: 1px solid #CDDDEE;\n}\n.card-mobile[data-v-62f5cecf] {\n  border: #CDDDEE 1px solid;\n  border-radius: 8px;\n}\n.card-mobile-body[data-v-62f5cecf] {\n  color: #4C545C;\n  padding: 16px 16px 0 16px;\n}\n.card-mobile-footer[data-v-62f5cecf] {\n  background-color: rgba(250, 250, 250, 1);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.line-1[data-v-62f5cecf] {\n  font-size: 16px;\n}\n.line-2[data-v-62f5cecf] {\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-bottom: 10px;\n}\n.badge-draft[data-v-62f5cecf] {\n  background-color: #F9E8C3;\n  margin-right: 3px;\n  line-height: 1;\n  display: inline-block;\n}\n.mobile-priority[data-v-62f5cecf] {\n  background-color: #F8E3E5;\n  padding: 5px;\n  border-radius: 4.5px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.pm-message-description[data-v-1b3004d2]{\n  font-size: 12px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_62f5cecf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_62f5cecf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_62f5cecf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_style_index_0_id_1b3004d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_style_index_0_id_1b3004d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_style_index_0_id_1b3004d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Mobile/Card.vue":
/*!**************************************!*\
  !*** ./resources/js/Mobile/Card.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_62f5cecf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=62f5cecf&scoped=true& */ "./resources/js/Mobile/Card.vue?vue&type=template&id=62f5cecf&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/Mobile/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _Card_vue_vue_type_style_index_0_id_62f5cecf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& */ "./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_62f5cecf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_62f5cecf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62f5cecf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Mobile/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Mobile/MobileCardsPagination.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Mobile/MobileCardsPagination.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MobileCardsPagination_vue_vue_type_template_id_2bbce12c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileCardsPagination.vue?vue&type=template&id=2bbce12c& */ "./resources/js/Mobile/MobileCardsPagination.vue?vue&type=template&id=2bbce12c&");
/* harmony import */ var _MobileCardsPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileCardsPagination.vue?vue&type=script&lang=js& */ "./resources/js/Mobile/MobileCardsPagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileCardsPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileCardsPagination_vue_vue_type_template_id_2bbce12c___WEBPACK_IMPORTED_MODULE_0__.render,
  _MobileCardsPagination_vue_vue_type_template_id_2bbce12c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Mobile/MobileCardsPagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PMMessageResults.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/PMMessageResults.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PMMessageResults_vue_vue_type_template_id_1b3004d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true& */ "./resources/js/components/PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true&");
/* harmony import */ var _PMMessageResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PMMessageResults.vue?vue&type=script&lang=js& */ "./resources/js/components/PMMessageResults.vue?vue&type=script&lang=js&");
/* harmony import */ var _PMMessageResults_vue_vue_type_style_index_0_id_1b3004d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& */ "./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PMMessageResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PMMessageResults_vue_vue_type_template_id_1b3004d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PMMessageResults_vue_vue_type_template_id_1b3004d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1b3004d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PMMessageResults.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/tasks/components/MobileTasks.vue":
/*!*******************************************************!*\
  !*** ./resources/js/tasks/components/MobileTasks.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MobileTasks_vue_vue_type_template_id_c1ca60dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileTasks.vue?vue&type=template&id=c1ca60dc& */ "./resources/js/tasks/components/MobileTasks.vue?vue&type=template&id=c1ca60dc&");
/* harmony import */ var _MobileTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileTasks.vue?vue&type=script&lang=js& */ "./resources/js/tasks/components/MobileTasks.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileTasks_vue_vue_type_template_id_c1ca60dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _MobileTasks_vue_vue_type_template_id_c1ca60dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/tasks/components/MobileTasks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Mobile/Card.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Mobile/Card.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Mobile/MobileCardsPagination.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Mobile/MobileCardsPagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCardsPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileCardsPagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/MobileCardsPagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCardsPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PMMessageResults.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PMMessageResults.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMMessageResults.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/tasks/components/MobileTasks.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/tasks/components/MobileTasks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileTasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/MobileTasks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Mobile/Card.vue?vue&type=template&id=62f5cecf&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Mobile/Card.vue?vue&type=template&id=62f5cecf&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_62f5cecf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_62f5cecf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_62f5cecf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=62f5cecf&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=template&id=62f5cecf&scoped=true&");


/***/ }),

/***/ "./resources/js/Mobile/MobileCardsPagination.vue?vue&type=template&id=2bbce12c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Mobile/MobileCardsPagination.vue?vue&type=template&id=2bbce12c& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCardsPagination_vue_vue_type_template_id_2bbce12c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCardsPagination_vue_vue_type_template_id_2bbce12c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCardsPagination_vue_vue_type_template_id_2bbce12c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileCardsPagination.vue?vue&type=template&id=2bbce12c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/MobileCardsPagination.vue?vue&type=template&id=2bbce12c&");


/***/ }),

/***/ "./resources/js/components/PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_template_id_1b3004d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_template_id_1b3004d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_template_id_1b3004d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=template&id=1b3004d2&scoped=true&");


/***/ }),

/***/ "./resources/js/tasks/components/MobileTasks.vue?vue&type=template&id=c1ca60dc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/tasks/components/MobileTasks.vue?vue&type=template&id=c1ca60dc& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTasks_vue_vue_type_template_id_c1ca60dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTasks_vue_vue_type_template_id_c1ca60dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTasks_vue_vue_type_template_id_c1ca60dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileTasks.vue?vue&type=template&id=c1ca60dc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/MobileTasks.vue?vue&type=template&id=c1ca60dc&");


/***/ }),

/***/ "./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_62f5cecf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_style_index_0_id_1b3004d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&");


/***/ })

}]);