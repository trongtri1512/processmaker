"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/tasks/mobile"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: String,
    outRef: null,
    outName: null
  },
  data: function data() {
    return {
      searchCriteria: "",
      selectedOptionStatus: "In Progress",
      selectedIconStatus: "",
      selectedOrderBy: "",
      selectedIconFilter: "fas fa-user",
      apiData: [],
      showInput: false,
      showDropdowns: true,
      pmql: "",
      status: "",
      statusChange: false,
      searchText: "",
      filter: ""
    };
  },
  computed: {
    getIconSrc: function getIconSrc() {
      return this.showInput ? "/img/arrow-left.svg" : "/img/search-icon.svg";
    }
  },
  methods: {
    /**
     * This boolean method shows or hide elements
     */
    toggleInput: function toggleInput() {
      this.showInput = !this.showInput;
      this.showDropdowns = !this.showInput;
    },
    /**
     * This method receives parameters from dropdown controls options selected by user
     */
    selectOption: function selectOption(option, controlName, icon) {
      this.callApiFilter(this.buildApiPath(option, controlName, icon));
    },
    buildPmql: function buildPmql() {
      this.pmql = "";
      this.pmql += this.status;
      if (this.searchText !== "") {
        this.pmql += this.searchText;
      }
      if (this.filter !== "") {
        this.pmql += this.filter;
      }
      return "pmql=".concat(this.pmql);
    },
    /**
     * This method builds a specific url api string depending of filter used by user
     */
    buildApiPath: function buildApiPath(option, controlName, icon) {
      if (controlName === "status") {
        this.selectedOptionStatus = option;
        this.selectedIconStatus = icon;
        this.status = "AND (status = \"".concat(option, "\")");
        this.statusChange = true;
        return this.buildPmql();
      }
      if (controlName === "filter") {
        this.selectedIconFilter = icon;
        this.filter = "AND (".concat(option, " = \"").concat(Processmaker.user.username, "\")");
        return this.buildPmql();
      }
      if (controlName === "orderBy") {
        this.selectedOrderBy = option;
        return "order_by=".concat(option);
      }
      if (controlName === "search") {
        this.searchText = "AND (fulltext LIKE \"%".concat(option, "%\")");
        return this.buildPmql();
      }
      return "";
    },
    /**
     * This is a generic method to call API with previous builded apiPath
     * related to Filters selected by user
     */
    callApiFilter: function callApiFilter(payload) {
      if (this.type === "tasks") {
        var _this$$parent$$refs$t3, _this$outRef3;
        if (payload.startsWith("pmql")) {
          var _this$$parent$$refs$t, _this$outRef;
          (_this$$parent$$refs$t = this.$parent.$refs.taskMobileList) === null || _this$$parent$$refs$t === void 0 || _this$$parent$$refs$t.updatePmql(payload.substr(5));
          (_this$outRef = this.outRef) === null || _this$outRef === void 0 || (_this$outRef = _this$outRef[this.outName]) === null || _this$outRef === void 0 || (_this$outRef = _this$outRef[0]) === null || _this$outRef === void 0 || _this$outRef.updatePmql(payload.substr(5));
        }
        if (payload.startsWith("order_by")) {
          var _this$$parent$$refs$t2, _this$outRef2;
          (_this$$parent$$refs$t2 = this.$parent.$refs.taskMobileList) === null || _this$$parent$$refs$t2 === void 0 || _this$$parent$$refs$t2.updateOrder(payload.substr(9));
          (_this$outRef2 = this.outRef) === null || _this$outRef2 === void 0 || (_this$outRef2 = _this$outRef2[this.outName]) === null || _this$outRef2 === void 0 || (_this$outRef2 = _this$outRef2[0]) === null || _this$outRef2 === void 0 || _this$outRef2.updateOrder(payload.substr(9));
        }
        (_this$$parent$$refs$t3 = this.$parent.$refs.taskMobileList) === null || _this$$parent$$refs$t3 === void 0 || _this$$parent$$refs$t3.fetch(true);
        (_this$outRef3 = this.outRef) === null || _this$outRef3 === void 0 || (_this$outRef3 = _this$outRef3[this.outName]) === null || _this$outRef3 === void 0 || (_this$outRef3 = _this$outRef3[0]) === null || _this$outRef3 === void 0 || _this$outRef3.fetch(true);
      }
      if (this.type === "requests") {
        var _this$$parent$$refs$r2, _this$outRef5;
        if (payload.startsWith("pmql")) {
          var _this$$parent$$refs$r, _this$outRef4;
          (_this$$parent$$refs$r = this.$parent.$refs.requestsMobileList) === null || _this$$parent$$refs$r === void 0 || _this$$parent$$refs$r.updatePmql(payload.substr(5), this.statusChange);
          (_this$outRef4 = this.outRef) === null || _this$outRef4 === void 0 || (_this$outRef4 = _this$outRef4[this.outName]) === null || _this$outRef4 === void 0 || (_this$outRef4 = _this$outRef4[0]) === null || _this$outRef4 === void 0 || _this$outRef4.updatePmql(payload.substr(5), this.statusChange);
        }
        (_this$$parent$$refs$r2 = this.$parent.$refs.requestsMobileList) === null || _this$$parent$$refs$r2 === void 0 || _this$$parent$$refs$r2.fetch(true);
        (_this$outRef5 = this.outRef) === null || _this$outRef5 === void 0 || (_this$outRef5 = _this$outRef5[this.outName]) === null || _this$outRef5 === void 0 || (_this$outRef5 = _this$outRef5[0]) === null || _this$outRef5 === void 0 || _this$outRef5.fetch(true);
      }
    },
    /**
     * This method sends users's input criteria to filter specific tasks or requests
     */
    performSearch: function performSearch() {
      this.callApiFilter(this.buildApiPath(this.searchCriteria, "search"));
    },
    clearSearch: function clearSearch() {
      this.searchCriteria = "";
      this.performSearch();
      this.toggleInput();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    size: {
      "default": null
    },
    rounded: {
      "default": true
    },
    classContainer: {
      "default": null
    },
    classImage: {
      "default": null
    },
    inputData: {
      "default": null
    },
    hideName: {
      "default": false
    },
    popover: {
      type: Boolean,
      "default": false
    },
    characterLimit: {
      type: Number,
      "default": null
    },
    vertical: {
      type: Boolean,
      "default": false
    },
    nameClickable: {
      type: Boolean,
      "default": false
    },
    customStyle: {
      type: String,
      "default": ''
    },
    usePmDefaultLabel: {
      type: Boolean,
      "default": false
    },
    usePmDefaultLabelProcess: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      ariaExpanded: false,
      round: "circle",
      image: "",
      styleButton: "width: 25px; height: 25px;",
      options: []
    };
  },
  watch: {
    inputData: function inputData(value) {
      this.formatInputData(value);
    },
    size: function size(value) {
      this.formatSize(value);
    },
    rounded: function rounded(value) {
      this.formatRounded(value);
    },
    classImage: function classImage(value) {
      this.formatClassImage(value);
    }
  },
  methods: {
    getTarget: function getTarget() {
      return this.$refs.button[0];
    },
    expanded: function expanded(value) {
      this.ariaExpanded = value;
    },
    href: function href(value) {
      if (this.popover) {
        return null;
      } else {
        return value.id;
      }
    },
    role: function role(value) {
      if (this.popover) {
        return 'button';
      } else {
        if (!value.id) {
          return 'img';
        } else {
          return 'link';
        }
      }
    },
    ariaHasPopup: function ariaHasPopup(value) {
      if (this.popover) {
        return 'menu';
      } else {
        return null;
      }
    },
    disabled: function disabled(value) {
      if (!this.popover) {
        if (!value.id) {
          return true;
        }
      }
      ;
      return false;
    },
    variant: function variant(value) {
      if (value.src) {
        return 'secondary';
      } else {
        return 'info';
      }
    },
    timestamp: function timestamp(src) {
      if (src.startsWith('data:image')) {
        // Do not add cache buster to base64 encoded image
        return src;
      }
      return src + '?' + new Date().getTime();
    },
    "default": function _default() {
      this.displayTitle = this.hideName === undefined ? false : this.hideName;
      this.formatRounded(this.rounded);
      this.formatClassImage(this.classImage);
      this.formatInputData(this.inputData);
      this.formatSize(this.size);
    },
    formatClassImage: function formatClassImage(value) {
      this.image = value;
    },
    formatRounded: function formatRounded(value) {
      this.round = value ? value : "circle";
    },
    formatSize: function formatSize(size) {
      this.sizeImage = size ? size : "25";
      this.formatSizeButton(this.sizeImage);
    },
    formatSizeButton: function formatSizeButton(size) {
      this.styleButton = "width: " + size + "px; height: " + size + "px; font-size:" + size / 2.5 + "px; padding:0; cursor: pointer;";
    },
    formatValue: function formatValue(value) {
      if (value === null) {
        value = {};
      }
      var profileUrl = null;
      if (value.id) {
        if (value.id === '#') {
          profileUrl = '#';
        } else {
          profileUrl = "/profile/" + value.id;
        }
      }
      return {
        id: profileUrl,
        src: value.src ? value.src : value.avatar ? value.avatar : "",
        tooltip: value.tooltip ? value.tooltip : !this.displayTitle ? value.title : value.fullname ? value.fullname : "",
        name: value.name ? value.name : value.fullname ? value.fullname : value.firstname && value.lastname ? value.firstname + ' ' + value.lastname : "",
        initials: value.initials ? value.initials : value.firstname && value.lastname ? value.firstname.match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0] + value.lastname.match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0] : ""
      };
    },
    formatInputData: function formatInputData(data) {
      var options = [];
      if (data && Array.isArray(data)) {
        var that = this;
        data.forEach(function (value) {
          options.push(that.formatValue(value));
        });
      } else {
        options.push(this.formatValue(data));
      }
      this.options = options;
    },
    buttonClick: function buttonClick(url) {
      if (url && url !== '#') {
        window.location.href = url;
      }
    },
    limitCharacters: function limitCharacters(text) {
      if (!this.characterLimit || text.length <= this.characterLimit) {
        return text;
      } else {
        return text.substring(0, this.characterLimit) + '...';
      }
    }
  },
  mounted: function mounted() {
    this["default"]();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      noResults: false,
      dataLoading: true,
      error: false
    };
  },
  props: ['loading', 'desc', 'icon', 'empty', 'emptyDesc', 'emptyIcon', 'for', 'dataLoadingId'],
  watch: {
    dataLoading: function dataLoading() {
      ProcessMaker.EventBus.$emit('api-data-loading', this.dataLoading, this.dataLoadingId);
    },
    noResults: function noResults() {
      ProcessMaker.EventBus.$emit('api-data-no-results', this.noResults, this.dataLoadingId);
    }
  },
  mounted: function mounted() {
    var _this = this;
    ProcessMaker.EventBus.$on('api-client-loading', function (request) {
      var _this$for;
      if (_this.requestIdCheck(request) || (_this$for = _this["for"]) !== null && _this$for !== void 0 && _this$for.test(request.url) && request.method.toLowerCase() === 'get') {
        _this.dataLoading = true;
        _this.error = false;
        _this.noResults = false;
      }
    });
    ProcessMaker.EventBus.$on('api-client-done', function (response) {
      if (_this.responseIdCheck(response) || response.config && _this["for"] && _this["for"].test(response.config.url)) {
        if (response.data && response.data.data && response.data.data.length === 0) {
          _this.noResults = true;
        }
        _this.dataLoading = false;
      }
    });
    ProcessMaker.EventBus.$on('api-client-error', function (error) {
      var _error$response;
      if (error && ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) == 'Not Found') {
        _this.noResults = true;
      }
      if (error && error.code === "ERR_CANCELED") {
        _this.noResults = false;
        _this.error = true;
      }
      if (error && error.code === "ERR_BAD_REQUEST") {
        _this.noResults = false;
      } else {
        _this.noResults = false;
        _this.error = true;
      }
    });
  },
  methods: {
    requestIdCheck: function requestIdCheck(request) {
      if (!this.dataLoadingId) {
        return false;
      }
      if (this.dataLoadingId === request.dataLoadingId) {
        return true;
      }
      return false;
    },
    responseIdCheck: function responseIdCheck(response) {
      if (!this.dataLoadingId) {
        return false;
      }
      if (this.dataLoadingId === response.config.dataLoadingId) {
        return true;
      }
    },
    loadingText: function loadingText() {
      return this.loading ? this.loading : this.$t('Loading');
    },
    descText: function descText() {
      return this.desc ? this.desc : this.$t('Please wait while your content is loaded');
    },
    emptyText: function emptyText() {
      return this.empty ? this.empty : this.$t('No Results');
    },
    emptyDescText: function emptyDescText() {
      return this.emptyDesc ? this.emptyDesc : '';
    },
    iconType: function iconType() {
      return this.icon ? this.icon : 'gear';
    },
    emptyIconType: function emptyIconType() {
      return this.emptyIcon ? this.emptyIcon : 'none';
    },
    errorTitleText: function errorTitleText() {
      return this.$t('Sorry! API failed to load');
    },
    errorDescText: function errorDescText() {
      return this.$t('Something went wrong. Try refreshing the application');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuetable_2_src_components_VuetablePaginationMixin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetable-2/src/components/VuetablePaginationMixin.vue */ "./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [vuetable_2_src_components_VuetablePaginationMixin_vue__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["perPageSelectEnabled", "single", "plural"],
  data: function data() {
    return {
      perPage: 15
    };
  },
  computed: {
    title: function title() {
      if (this.tablePagination.total == 1) {
        return this.single;
      }
      return this.plural;
    }
  },
  watch: {
    perPage: function perPage(value) {
      this.$emit("changePerPage", value);
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=template&id=6aed340e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=template&id=6aed340e& ***!
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
  return _c("b-container", {
    staticClass: "bv-example-row"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_vm.showDropdowns ? _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle dropdown-status-style",
    attrs: {
      id: "statusDropdown",
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    "class": _vm.selectedIconStatus
  }), _vm._v("\n        " + _vm._s(_vm.selectedOptionStatus) + "\n        "), _c("i", {
    staticClass: "fas fa-caret-down status-dropdown"
  })]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu mobile-dropdown-menu",
    attrs: {
      "aria-labelledby": "statusDropdown"
    }
  }, [_c("a", {
    staticClass: "dropdown-item",
    "class": {
      "dropdown-item-selected": _vm.selectedOptionStatus === "In Progress"
    },
    on: {
      click: function click($event) {
        return _vm.selectOption("In Progress", "status", "");
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("In Progress")) + "\n        ")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    "class": {
      "dropdown-item-selected": _vm.selectedOptionStatus === "Completed"
    },
    on: {
      click: function click($event) {
        return _vm.selectOption("Completed", "status", "");
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Completed")) + "\n        ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between",
    "class": {
      "w-100": _vm.showInput
    }
  }, [_vm.showDropdowns && _vm.type === "requests" ? _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn dropdown-toggle dropdown-requests-style",
    attrs: {
      id: "requestsDropdown",
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("img", {
    attrs: {
      src: "/img/sort-down-icon.svg",
      alt: "sort-down"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu mobile-dropdown-menu",
    attrs: {
      "aria-labelledby": "requestsDropdown"
    }
  }, [_c("a", {
    staticClass: "dropdown-item",
    "class": {
      "dropdown-item-selected": _vm.selectedIconFilter === "fas fa-user"
    },
    on: {
      click: function click($event) {
        return _vm.selectOption("requester", "filter", "fas fa-user");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("As Requester")) + "\n          ")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    "class": {
      "dropdown-item-selected": _vm.selectedIconFilter === "fas fa-users"
    },
    on: {
      click: function click($event) {
        return _vm.selectOption("participant", "filter", "fas fa-users");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("As Participant")) + "\n          ")])])]) : _vm._e(), _vm._v(" "), _vm.showDropdowns && _vm.type === "tasks" ? _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn dropdown-toggle dropdown-requests-style",
    attrs: {
      id: "requestsDropdown",
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("img", {
    attrs: {
      src: "/img/sort-down-icon.svg",
      alt: "sort-down"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu mobile-dropdown-menu",
    attrs: {
      "aria-labelledby": "tasksDropdown"
    }
  }, [_c("a", {
    staticClass: "dropdown-item",
    "class": {
      "dropdown-item-selected": _vm.selectedOrderBy === "due_at"
    },
    on: {
      click: function click($event) {
        return _vm.selectOption("due_at", "orderBy");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("By Due Date")) + "\n          ")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    "class": {
      "dropdown-item-selected": _vm.selectedOrderBy === "created_at"
    },
    on: {
      click: function click($event) {
        return _vm.selectOption("created_at", "orderBy");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("By Creation Date")) + "\n          ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-end ml-1",
    "class": {
      "w-100": _vm.showInput
    }
  }, [_c("button", {
    staticClass: "btn",
    on: {
      click: _vm.toggleInput
    }
  }, [_c("img", {
    attrs: {
      src: _vm.getIconSrc,
      alt: "search"
    }
  })]), _vm._v(" "), _vm.showInput ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchCriteria,
      expression: "searchCriteria"
    }],
    ref: "input",
    staticClass: "form-control narrow-input",
    attrs: {
      type: "text",
      placeholder: "(fulltext LIKE '%someText%')"
    },
    domProps: {
      value: _vm.searchCriteria
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.performSearch.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchCriteria = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.showInput ? _c("button", {
    staticClass: "btn btn-clear",
    on: {
      click: _vm.clearSearch
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  })]) : _vm._e()])])])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=template&id=65945167&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=template&id=65945167&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("div", {
    "class": {
      "d-inline-flex": !_vm.vertical
    }
  }, [_vm._l(_vm.options, function (value, key) {
    return [_c("div", {
      staticClass: "vertical-view"
    }, [value.initials ? _c("b-button", {
      key: "link-" + key,
      ref: "button",
      refInFor: true,
      staticClass: "avatar-button rounded-circle overflow-hidden p-0 m-0 d-inline-flex",
      style: _vm.customStyle,
      attrs: {
        variant: _vm.variant(value),
        href: _vm.href(value),
        title: value.tooltip,
        "aria-label": value.tooltip,
        role: _vm.role(value),
        "aria-haspopup": _vm.ariaHasPopup(value),
        disabled: _vm.disabled(value),
        "aria-expanded": _vm.ariaExpanded
      }
    }, [value.src ? _c("img", {
      "class": _vm.image,
      attrs: {
        src: _vm.timestamp(value.src),
        width: _vm.sizeImage,
        height: _vm.sizeImage,
        alt: value.tooltip
      }
    }) : _c("span", {
      key: "button-" + key,
      staticClass: "border-0 d-inline-flex align-items-center justify-content-center text-white text-uppercase text-nowrap font-weight-normal",
      style: _vm.styleButton
    }, [value.initials ? _c("span", [_vm._v(_vm._s(value.initials))]) : _c("span", [_vm._v("PM")])])]) : _vm._e(), _vm._v(" "), !_vm.hideName ? _c("span", {
      key: "name-" + key,
      staticClass: "text-center text-capitalize new-wrap m-1"
    }, [value.name ? _c("span", [_vm.nameClickable ? [_c("a", {
      attrs: {
        href: _vm.href(value)
      }
    }, [_vm._v(_vm._s(_vm.limitCharacters(value.name)))])] : [_vm._v("\n            " + _vm._s(_vm.limitCharacters(value.name)) + "\n          ")]], 2) : _vm.usePmDefaultLabel || _vm.usePmDefaultLabelProcess ? _c("span", [_vm._v(_vm._s(_vm.$t("ProcessMaker")))]) : _c("span", [_c("b-badge", {
      staticClass: "status-alternative-a"
    }, [_vm._v(_vm._s(_vm.$t("Unclaimed")))])], 1)]) : _vm._e()], 1)];
  })], 2)]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=template&id=21eeb279&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=template&id=21eeb279&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "jumbotron jumbotron-fluid"
  }, [_c("div", {
    staticClass: "container text-center"
  }, [_vm.noResults ? _c("div", {
    attrs: {
      "data-cy": "no-results-message"
    }
  }, [_vm._t("no-results", function () {
    return [_c("div", {
      staticClass: "empty-title"
    }, [_vm._t("no-results-title", function () {
      return [_vm._v("\n                    " + _vm._s(_vm.emptyText()) + "\n                  ")];
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "img-container"
    }, [_vm._t("no-results-image", function () {
      return [_vm.emptyIconType() === "beach" ? _c("div", [_c("img", {
        staticClass: "no-results-img",
        attrs: {
          src: "/img/no-results.svg",
          alt: "no-results"
        }
      })]) : _vm._e(), _vm._v(" "), _vm.emptyIconType() === "noData" ? _c("div", [_c("img", {
        staticClass: "no-results-img",
        attrs: {
          src: "/img/no-results.svg",
          alt: "no-results"
        }
      })]) : _vm._e(), _vm._v(" "), _vm.emptyIconType() === "noTasks" ? _c("div", [_c("img", {
        staticClass: "no-results-img",
        attrs: {
          src: "/img/all-cleared.svg",
          alt: "no-results"
        }
      })]) : _vm._e()];
    })], 2), _vm._v(" "), _c("p", {
      staticClass: "empty-desc"
    }, [_vm._t("no-results-message", function () {
      return [_vm._v("\n                    " + _vm._s(_vm.emptyDescText()) + "\n                  ")];
    })], 2)];
  })], 2) : _vm.error ? _c("div", {
    attrs: {
      "data-cy": "error-message"
    }
  }, [_vm._m(0), _vm._v(" "), _c("h3", {
    staticClass: "display-6"
  }, [_vm._v(_vm._s(_vm.errorTitleText()))]), _vm._v(" "), _c("p", {
    staticClass: "lead"
  }, [_vm._v(_vm._s(_vm.errorDescText()))])]) : _c("div", [_c("div", {
    staticClass: "icon-container"
  }, [_vm.iconType() === "gear" ? _c("div", [_c("svg", {
    staticClass: "lds-gear",
    attrs: {
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid"
    }
  }, [_c("g", {
    attrs: {
      transform: "translate(50 50)"
    }
  }, [_c("g", {
    attrs: {
      transform: "rotate(248.825)"
    }
  }, [_c("animateTransform", {
    attrs: {
      attributeName: "transform",
      type: "rotate",
      values: "0;360",
      keyTimes: "0;1",
      dur: "4.7s",
      repeatCount: "indefinite"
    }
  }), _c("path", {
    attrs: {
      d: "M37.43995192304605 -6.5 L47.43995192304605 -6.5 L47.43995192304605 6.5 L37.43995192304605 6.5 A38 38 0 0 1 35.67394948182593 13.090810836924174 L35.67394948182593 13.090810836924174 L44.33420351967032 18.090810836924174 L37.83420351967032 29.34914108612188 L29.17394948182593 24.34914108612188 A38 38 0 0 1 24.34914108612188 29.17394948182593 L24.34914108612188 29.17394948182593 L29.34914108612188 37.83420351967032 L18.090810836924184 44.33420351967032 L13.090810836924183 35.67394948182593 A38 38 0 0 1 6.5 37.43995192304605 L6.5 37.43995192304605 L6.500000000000001 47.43995192304605 L-6.499999999999995 47.43995192304606 L-6.499999999999996 37.43995192304606 A38 38 0 0 1 -13.09081083692417 35.67394948182593 L-13.09081083692417 35.67394948182593 L-18.09081083692417 44.33420351967032 L-29.34914108612187 37.834203519670325 L-24.349141086121872 29.173949481825936 A38 38 0 0 1 -29.17394948182592 24.34914108612189 L-29.17394948182592 24.34914108612189 L-37.83420351967031 29.349141086121893 L-44.33420351967031 18.0908108369242 L-35.67394948182592 13.090810836924193 A38 38 0 0 1 -37.43995192304605 6.5000000000000036 L-37.43995192304605 6.5000000000000036 L-47.43995192304605 6.500000000000004 L-47.43995192304606 -6.499999999999993 L-37.43995192304606 -6.499999999999994 A38 38 0 0 1 -35.67394948182593 -13.090810836924167 L-35.67394948182593 -13.090810836924167 L-44.33420351967032 -18.090810836924163 L-37.834203519670325 -29.34914108612187 L-29.173949481825936 -24.34914108612187 A38 38 0 0 1 -24.349141086121893 -29.17394948182592 L-24.349141086121893 -29.17394948182592 L-29.349141086121897 -37.834203519670304 L-18.0908108369242 -44.334203519670304 L-13.090810836924195 -35.67394948182592 A38 38 0 0 1 -6.500000000000005 -37.43995192304605 L-6.500000000000005 -37.43995192304605 L-6.500000000000007 -47.43995192304605 L6.49999999999999 -47.43995192304606 L6.499999999999992 -37.43995192304606 A38 38 0 0 1 13.090810836924149 -35.67394948182594 L13.090810836924149 -35.67394948182594 L18.090810836924142 -44.33420351967033 L29.349141086121847 -37.83420351967034 L24.349141086121854 -29.17394948182595 A38 38 0 0 1 29.17394948182592 -24.349141086121893 L29.17394948182592 -24.349141086121893 L37.834203519670304 -29.349141086121897 L44.334203519670304 -18.0908108369242 L35.67394948182592 -13.090810836924197 A38 38 0 0 1 37.43995192304605 -6.500000000000007 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
    }
  })], 1)])])]) : _vm._e()]), _vm._v(" "), _c("h3", {
    staticClass: "display-6"
  }, [_vm._v(_vm._s(_vm.loadingText()))]), _vm._v(" "), _c("p", {
    staticClass: "lead"
  }, [_vm._v(_vm._s(_vm.descText()))])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon-container"
  }, [_c("i", {
    staticClass: "fas fa-exclamation-triangle"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.tablePagination && _vm.tablePagination.last_page > 0 ? _c("div", {
    staticClass: "w-100 d-flex my-2 px-2"
  }, [_c("div", {
    staticClass: "pt-1 mr-auto"
  }, [_vm.tablePagination ? _c("div", {
    staticClass: "pagination"
  }, [_vm._v(_vm._s(_vm.tablePagination.from + 1) + " - " + _vm._s(_vm.tablePagination.to) + " " + _vm._s(_vm.$t("of")) + " " + _vm._s(_vm.tablePagination.total) + " " + _vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.tablePagination && _vm.tablePagination.last_page < 1 ? _c("div", {
    staticClass: "pagination"
  }, [_vm._v(_vm._s(_vm.tablePagination.total) + " " + _vm._s(_vm.title))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "justify-content-end button-pagination"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tablePagination,
      expression: "tablePagination"
    }],
    "class": _vm.css.wrapperClass,
    attrs: {
      role: "navigation",
      "aria-label": _vm.$t("Pagination")
    }
  }, [_c("div", {
    "class": ["pagination-nav-item", _vm.css.linkClass, _vm.isOnFirstPage ? _vm.css.disabledClass : ""],
    on: {
      click: function click($event) {
        return _vm.loadPage(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-left"
  })]), _vm._v(" "), _c("div", {
    "class": ["pagination-nav-item", _vm.css.linkClass, _vm.isOnFirstPage ? _vm.css.disabledClass : ""],
    on: {
      click: function click($event) {
        return _vm.loadPage("prev");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-left"
  })]), _vm._v(" "), _vm.notEnoughPages ? [_vm._l(_vm.totalPage, function (n) {
    return [_c("div", {
      "class": ["pagination-nav-item", _vm.css.pageClass, _vm.isCurrentPage(n) ? _vm.css.activeClass : ""],
      attrs: {
        "aria-current": _vm.isCurrentPage(n) ? _vm.$t("Page") : ""
      },
      domProps: {
        innerHTML: _vm._s(n)
      },
      on: {
        click: function click($event) {
          return _vm.loadPage(n);
        }
      }
    })];
  })] : [_vm._l(_vm.windowSize, function (n) {
    return [_c("div", {
      "class": ["pagination-nav-item", _vm.css.pageClass, _vm.isCurrentPage(_vm.windowStart + n - 1) ? _vm.css.activeClass : ""],
      attrs: {
        "aria-current": _vm.isCurrentPage(_vm.windowStart + n - 1) ? _vm.$t("Page") : ""
      },
      domProps: {
        innerHTML: _vm._s(_vm.windowStart + n - 1)
      },
      on: {
        click: function click($event) {
          return _vm.loadPage(_vm.windowStart + n - 1);
        }
      }
    })];
  })], _vm._v(" "), _c("div", {
    "class": ["pagination-nav-item", _vm.css.linkClass, _vm.isOnLastPage ? _vm.css.disabledClass : ""],
    on: {
      click: function click($event) {
        return _vm.loadPage("next");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-right"
  })]), _vm._v(" "), _c("div", {
    "class": ["pagination-nav-item", _vm.css.linkClass, _vm.isOnLastPage ? _vm.css.disabledClass : ""],
    on: {
      click: function click($event) {
        return _vm.loadPage(_vm.totalPage);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-angle-double-right"
  })]), _vm._v(" "), _vm.perPageSelectEnabled ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.perPage,
      expression: "perPage"
    }],
    staticClass: "pagination-nav-item pagination-nav-drop",
    attrs: {
      "aria-label": _vm.$t("Per page")
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.perPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "15"
    }
  }, [_vm._v("15")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "30"
    }
  }, [_vm._v("30")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "50"
    }
  }, [_vm._v("50")])]) : _vm._e()], 2)])]) : _vm._e();
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

/***/ "./resources/js/Mobile/FilterMixin.js":
/*!********************************************!*\
  !*** ./resources/js/Mobile/FilterMixin.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cov_ejdpbr6zf() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/Mobile/FilterMixin.js";
  var hash = "3f8d4add8c68a290bfc78503e463974fa81aeb0b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/Mobile/FilterMixin.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 20
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 41
        }
      },
      "2": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 22
        }
      },
      "3": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 10,
          column: 7
        }
      },
      "4": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 46
        }
      },
      "5": {
        start: {
          line: 13,
          column: 27
        },
        end: {
          line: 13,
          column: 29
        }
      },
      "6": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 17,
          column: 7
        }
      },
      "7": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 42
        }
      },
      "8": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "9": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 62
        }
      },
      "10": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 25,
          column: 7
        }
      },
      "11": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 35
        }
      },
      "12": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 4
          },
          end: {
            line: 3,
            column: 5
          }
        },
        loc: {
          start: {
            line: 3,
            column: 31
          },
          end: {
            line: 6,
            column: 5
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 10,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 10,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 17,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 17,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 15,
            column: 10
          },
          end: {
            line: 15,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 10
          },
          end: {
            line: 15,
            column: 26
          }
        }, {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 15,
            column: 53
          }
        }],
        line: 15
      },
      "3": {
        loc: {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 21,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 21,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 19
      },
      "4": {
        loc: {
          start: {
            line: 19,
            column: 10
          },
          end: {
            line: 19,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 19,
            column: 10
          },
          end: {
            line: 19,
            column: 31
          }
        }, {
          start: {
            line: 19,
            column: 35
          },
          end: {
            line: 19,
            column: 44
          }
        }, {
          start: {
            line: 19,
            column: 48
          },
          end: {
            line: 19,
            column: 64
          }
        }],
        line: 19
      },
      "5": {
        loc: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 25,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 25,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 23
      },
      "6": {
        loc: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 31
          }
        }, {
          start: {
            line: 23,
            column: 35
          },
          end: {
            line: 23,
            column: 44
          }
        }, {
          start: {
            line: 23,
            column: 48
          },
          end: {
            line: 23,
            column: 64
          }
        }],
        line: 23
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0],
      "5": [0, 0],
      "6": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3f8d4add8c68a290bfc78503e463974fa81aeb0b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ejdpbr6zf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ejdpbr6zf();
var FilterMixin = (cov_ejdpbr6zf().s[0]++, {
  methods: {
    onFiltersPmqlChange: function onFiltersPmqlChange(value) {
      cov_ejdpbr6zf().f[0]++;
      cov_ejdpbr6zf().s[1]++;
      this.fullPmql = this.getFullPmql();
      cov_ejdpbr6zf().s[2]++;
      this.onSearch();
    },
    onSearch: function onSearch() {
      cov_ejdpbr6zf().f[1]++;
      cov_ejdpbr6zf().s[3]++;
      if (this.$refs.taskMobileList) {
        cov_ejdpbr6zf().b[0][0]++;
        cov_ejdpbr6zf().s[4]++;
        this.$refs.taskMobileList.fetch(true);
      } else {
        cov_ejdpbr6zf().b[0][1]++;
      }
    },
    getFullPmql: function getFullPmql() {
      cov_ejdpbr6zf().f[2]++;
      var fullPmqlString = (cov_ejdpbr6zf().s[5]++, "");
      cov_ejdpbr6zf().s[6]++;
      if ((cov_ejdpbr6zf().b[2][0]++, this.filtersPmql) && (cov_ejdpbr6zf().b[2][1]++, this.filtersPmql !== "")) {
        cov_ejdpbr6zf().b[1][0]++;
        cov_ejdpbr6zf().s[7]++;
        fullPmqlString = this.filtersPmql;
      } else {
        cov_ejdpbr6zf().b[1][1]++;
      }
      cov_ejdpbr6zf().s[8]++;
      if ((cov_ejdpbr6zf().b[4][0]++, fullPmqlString !== "") && (cov_ejdpbr6zf().b[4][1]++, this.pmql) && (cov_ejdpbr6zf().b[4][2]++, this.pmql !== "")) {
        cov_ejdpbr6zf().b[3][0]++;
        cov_ejdpbr6zf().s[9]++;
        fullPmqlString = "".concat(fullPmqlString, " AND ").concat(this.pmql);
      } else {
        cov_ejdpbr6zf().b[3][1]++;
      }
      cov_ejdpbr6zf().s[10]++;
      if ((cov_ejdpbr6zf().b[6][0]++, fullPmqlString === "") && (cov_ejdpbr6zf().b[6][1]++, this.pmql) && (cov_ejdpbr6zf().b[6][2]++, this.pmql !== "")) {
        cov_ejdpbr6zf().b[5][0]++;
        cov_ejdpbr6zf().s[11]++;
        fullPmqlString = this.pmql;
      } else {
        cov_ejdpbr6zf().b[5][1]++;
      }
      cov_ejdpbr6zf().s[12]++;
      return fullPmqlString;
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterMixin);

/***/ }),

/***/ "./resources/js/components/common/mixins/apiDataLoading.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/common/mixins/apiDataLoading.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_DataLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/common/DataLoading */ "./resources/js/components/common/DataLoading.vue");
function cov_1meuqiv6ex() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/components/common/mixins/apiDataLoading.js";
  var hash = "2b4d6eb82617eb287af1636d670e20174ecc90c0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/components/common/mixins/apiDataLoading.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 12,
          column: 6
        }
      },
      "1": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 54
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "3": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "4": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 34
        }
      },
      "5": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 7
        }
      },
      "6": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "7": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 23
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 50
          },
          end: {
            line: 20,
            column: 51
          }
        },
        loc: {
          start: {
            line: 20,
            column: 63
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 20
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 28,
            column: 53
          },
          end: {
            line: 28,
            column: 54
          }
        },
        loc: {
          start: {
            line: 28,
            column: 66
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 28
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 32
          }
        }, {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 16,
            column: 53
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 26,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 26,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 35
          }
        }, {
          start: {
            line: 24,
            column: 39
          },
          end: {
            line: 24,
            column: 64
          }
        }],
        line: 24
      },
      "3": {
        loc: {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 29
      },
      "4": {
        loc: {
          start: {
            line: 29,
            column: 10
          },
          end: {
            line: 29,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 10
          },
          end: {
            line: 29,
            column: 35
          }
        }, {
          start: {
            line: 29,
            column: 39
          },
          end: {
            line: 29,
            column: 64
          }
        }],
        line: 29
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2b4d6eb82617eb287af1636d670e20174ecc90c0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1meuqiv6ex = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1meuqiv6ex();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataLoading: _components_common_DataLoading__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    cov_1meuqiv6ex().f[0]++;
    cov_1meuqiv6ex().s[0]++;
    return {
      apiDataLoading: true,
      apiNoResults: false,
      dataLoadingId: Math.random()
    };
  },
  computed: {
    shouldShowLoader: function shouldShowLoader() {
      cov_1meuqiv6ex().f[1]++;
      cov_1meuqiv6ex().s[1]++;
      return (cov_1meuqiv6ex().b[0][0]++, this.apiDataLoading) || (cov_1meuqiv6ex().b[0][1]++, this.apiNoResults);
    }
  },
  mounted: function mounted() {
    var _this = this;
    cov_1meuqiv6ex().f[2]++;
    cov_1meuqiv6ex().s[2]++;
    ProcessMaker.EventBus.$on("api-data-loading", function (val, id) {
      cov_1meuqiv6ex().f[3]++;
      cov_1meuqiv6ex().s[3]++;
      // Restrict the flag to the specified id, but only if an ID
      // was sent. This is used when there are multiple DataLoading
      // components on the page.
      if ((cov_1meuqiv6ex().b[2][0]++, typeof id === "undefined") || (cov_1meuqiv6ex().b[2][1]++, _this.dataLoadingId === id)) {
        cov_1meuqiv6ex().b[1][0]++;
        cov_1meuqiv6ex().s[4]++;
        _this.apiDataLoading = val;
      } else {
        cov_1meuqiv6ex().b[1][1]++;
      }
    });
    cov_1meuqiv6ex().s[5]++;
    ProcessMaker.EventBus.$on("api-data-no-results", function (val, id) {
      cov_1meuqiv6ex().f[4]++;
      cov_1meuqiv6ex().s[6]++;
      if ((cov_1meuqiv6ex().b[4][0]++, typeof id === "undefined") || (cov_1meuqiv6ex().b[4][1]++, _this.dataLoadingId === id)) {
        cov_1meuqiv6ex().b[3][0]++;
        cov_1meuqiv6ex().s[7]++;
        _this.apiNoResults = val;
      } else {
        cov_1meuqiv6ex().b[3][1]++;
      }
    });
  }
});

/***/ }),

/***/ "./resources/js/components/common/mixins/datatable.js":
/*!************************************************************!*\
  !*** ./resources/js/components/common/mixins/datatable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var _components_common_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/common/Pagination */ "./resources/js/components/common/Pagination.vue");
/* harmony import */ var _shared_FilterTableBodyMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/FilterTableBodyMixin */ "./resources/js/components/shared/FilterTableBodyMixin.js");

function cov_2jel2l5d3e() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/components/common/mixins/datatable.js";
  var hash = "77d4f7cefef851f5e248cabe0032c7e3f1430056";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/components/common/mixins/datatable.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "1": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 19
        }
      },
      "2": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "3": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 22
        }
      },
      "4": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 21
        }
      },
      "5": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 28
        }
      },
      "6": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "7": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 40,
          column: 26
        }
      },
      "8": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 19
        }
      },
      "9": {
        start: {
          line: 46,
          column: 19
        },
        end: {
          line: 46,
          column: 21
        }
      },
      "10": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "11": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 50,
          column: 9
        }
      },
      "12": {
        start: {
          line: 49,
          column: 10
        },
        end: {
          line: 49,
          column: 53
        }
      },
      "13": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 53,
          column: 9
        }
      },
      "14": {
        start: {
          line: 52,
          column: 10
        },
        end: {
          line: 52,
          column: 83
        }
      },
      "15": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 61,
          column: 7
        }
      },
      "16": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 59,
          column: 9
        }
      },
      "17": {
        start: {
          line: 57,
          column: 10
        },
        end: {
          line: 58,
          column: 28
        }
      },
      "18": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 60,
          column: 21
        }
      },
      "19": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 19
        }
      },
      "20": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 70,
          column: 7
        }
      },
      "21": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 46
        }
      },
      "22": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 42
        }
      },
      "23": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 51
        }
      },
      "24": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 19
        }
      },
      "25": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 76,
          column: 27
        }
      },
      "26": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 79,
          column: 7
        }
      },
      "27": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 65
        }
      },
      "28": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 19
        }
      },
      "29": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 50
        }
      },
      "30": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 73
        }
      },
      "31": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 87,
          column: 54
        }
      },
      "32": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 88,
          column: 43
        }
      },
      "33": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 100,
          column: 9
        }
      },
      "34": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 94,
          column: 9
        }
      },
      "35": {
        start: {
          line: 93,
          column: 10
        },
        end: {
          line: 93,
          column: 56
        }
      },
      "36": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 99,
          column: 9
        }
      },
      "37": {
        start: {
          line: 98,
          column: 10
        },
        end: {
          line: 98,
          column: 72
        }
      },
      "38": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 18
        }
      },
      "39": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 110,
          column: 7
        }
      },
      "40": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 108,
          column: 9
        }
      },
      "41": {
        start: {
          line: 107,
          column: 10
        },
        end: {
          line: 107,
          column: 37
        }
      },
      "42": {
        start: {
          line: 109,
          column: 8
        },
        end: {
          line: 109,
          column: 20
        }
      },
      "43": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 54
        }
      },
      "44": {
        start: {
          line: 111,
          column: 31
        },
        end: {
          line: 111,
          column: 52
        }
      },
      "45": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 115,
          column: 52
        }
      },
      "46": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 125,
          column: 7
        }
      },
      "47": {
        start: {
          line: 120,
          column: 8
        },
        end: {
          line: 120,
          column: 23
        }
      },
      "48": {
        start: {
          line: 121,
          column: 13
        },
        end: {
          line: 125,
          column: 7
        }
      },
      "49": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 122,
          column: 23
        }
      },
      "50": {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 124,
          column: 25
        }
      },
      "51": {
        start: {
          line: 126,
          column: 6
        },
        end: {
          line: 128,
          column: 7
        }
      },
      "52": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 127,
          column: 22
        }
      },
      "53": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 131,
          column: 7
        }
      },
      "54": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 130,
          column: 45
        }
      },
      "55": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 132,
          column: 19
        }
      },
      "56": {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 171,
          column: 6
        }
      },
      "57": {
        start: {
          line: 162,
          column: 10
        },
        end: {
          line: 162,
          column: 56
        }
      },
      "58": {
        start: {
          line: 165,
          column: 25
        },
        end: {
          line: 165,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 23
          },
          end: {
            line: 27,
            column: 24
          }
        },
        loc: {
          start: {
            line: 27,
            column: 35
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        loc: {
          start: {
            line: 36,
            column: 30
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        loc: {
          start: {
            line: 45,
            column: 34
          },
          end: {
            line: 63,
            column: 5
          }
        },
        line: 45
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        loc: {
          start: {
            line: 65,
            column: 39
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        loc: {
          start: {
            line: 75,
            column: 25
          },
          end: {
            line: 81,
            column: 5
          }
        },
        line: 75
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        },
        loc: {
          start: {
            line: 83,
            column: 20
          },
          end: {
            line: 102,
            column: 5
          }
        },
        line: 83
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 89,
            column: 24
          },
          end: {
            line: 89,
            column: 25
          }
        },
        loc: {
          start: {
            line: 89,
            column: 36
          },
          end: {
            line: 100,
            column: 7
          }
        },
        line: 89
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 5
          }
        },
        loc: {
          start: {
            line: 104,
            column: 19
          },
          end: {
            line: 112,
            column: 5
          }
        },
        line: 104
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 111,
            column: 22
          },
          end: {
            line: 111,
            column: 23
          }
        },
        loc: {
          start: {
            line: 111,
            column: 31
          },
          end: {
            line: 111,
            column: 52
          }
        },
        line: 111
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        loc: {
          start: {
            line: 114,
            column: 27
          },
          end: {
            line: 116,
            column: 5
          }
        },
        line: 114
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        },
        loc: {
          start: {
            line: 118,
            column: 23
          },
          end: {
            line: 133,
            column: 5
          }
        },
        line: 118
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 135,
            column: 2
          },
          end: {
            line: 135,
            column: 3
          }
        },
        loc: {
          start: {
            line: 135,
            column: 9
          },
          end: {
            line: 172,
            column: 3
          }
        },
        line: 135
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 9
          }
        },
        loc: {
          start: {
            line: 161,
            column: 37
          },
          end: {
            line: 163,
            column: 9
          }
        },
        line: 161
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 165,
            column: 7
          }
        },
        loc: {
          start: {
            line: 165,
            column: 23
          },
          end: {
            line: 165,
            column: 52
          }
        },
        line: 165
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 37,
            column: 15
          },
          end: {
            line: 37,
            column: 27
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 15
          },
          end: {
            line: 37,
            column: 21
          }
        }, {
          start: {
            line: 37,
            column: 25
          },
          end: {
            line: 37,
            column: 27
          }
        }],
        line: 37
      },
      "3": {
        loc: {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 38
      },
      "4": {
        loc: {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 47
      },
      "5": {
        loc: {
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 47,
            column: 103
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 47,
            column: 45
          }
        }, {
          start: {
            line: 47,
            column: 49
          },
          end: {
            line: 47,
            column: 66
          }
        }, {
          start: {
            line: 47,
            column: 70
          },
          end: {
            line: 47,
            column: 103
          }
        }],
        line: 47
      },
      "6": {
        loc: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 50,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 50,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 48
      },
      "7": {
        loc: {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 53,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 53,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 51
      },
      "8": {
        loc: {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 61,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 61,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 55
      },
      "9": {
        loc: {
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 59,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 59,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 56
      },
      "10": {
        loc: {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 70,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 70,
            column: 7
          }
        }, {
          start: {
            line: 68,
            column: 13
          },
          end: {
            line: 70,
            column: 7
          }
        }],
        line: 66
      },
      "11": {
        loc: {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 79,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 79,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 77
      },
      "12": {
        loc: {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 94,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 94,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 91
      },
      "13": {
        loc: {
          start: {
            line: 96,
            column: 8
          },
          end: {
            line: 99,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 8
          },
          end: {
            line: 99,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 96
      },
      "14": {
        loc: {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 105
      },
      "15": {
        loc: {
          start: {
            line: 105,
            column: 10
          },
          end: {
            line: 105,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 105,
            column: 10
          },
          end: {
            line: 105,
            column: 27
          }
        }, {
          start: {
            line: 105,
            column: 31
          },
          end: {
            line: 105,
            column: 62
          }
        }],
        line: 105
      },
      "16": {
        loc: {
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 108,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 106
      },
      "17": {
        loc: {
          start: {
            line: 106,
            column: 12
          },
          end: {
            line: 106,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 106,
            column: 12
          },
          end: {
            line: 106,
            column: 32
          }
        }, {
          start: {
            line: 106,
            column: 36
          },
          end: {
            line: 106,
            column: 60
          }
        }],
        line: 106
      },
      "18": {
        loc: {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 125,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 125,
            column: 7
          }
        }, {
          start: {
            line: 121,
            column: 13
          },
          end: {
            line: 125,
            column: 7
          }
        }],
        line: 119
      },
      "19": {
        loc: {
          start: {
            line: 121,
            column: 13
          },
          end: {
            line: 125,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 121,
            column: 13
          },
          end: {
            line: 125,
            column: 7
          }
        }, {
          start: {
            line: 123,
            column: 13
          },
          end: {
            line: 125,
            column: 7
          }
        }],
        line: 121
      },
      "20": {
        loc: {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 128,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 128,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 126
      },
      "21": {
        loc: {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 129
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "77d4f7cefef851f5e248cabe0032c7e3f1430056"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2jel2l5d3e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2jel2l5d3e();
/**
 * Default mix in for general data table behavior.  Defines look and feel of sorting,
 * pagination transformers, etc.
 *
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_shared_FilterTableBodyMixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    fetchOnCreated: {
      "default": true
    }
  },
  components: {
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pagination: _components_common_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    cov_2jel2l5d3e().f[0]++;
    cov_2jel2l5d3e().s[0]++;
    // Use our api to fetch our role listing
    if (this.fetchOnCreated) {
      cov_2jel2l5d3e().b[0][0]++;
      cov_2jel2l5d3e().s[1]++;
      this.fetch();
    } else {
      cov_2jel2l5d3e().b[0][1]++;
    }
  },
  watch: {
    filter: _.debounce(function () {
      cov_2jel2l5d3e().f[1]++;
      cov_2jel2l5d3e().s[2]++;
      if (!this.loading) {
        cov_2jel2l5d3e().b[1][0]++;
        cov_2jel2l5d3e().s[3]++;
        this.page = 1;
        cov_2jel2l5d3e().s[4]++;
        this.fetch();
      } else {
        cov_2jel2l5d3e().b[1][1]++;
      }
    }, 250)
  },
  methods: {
    // Handler to properly format date/time columns according to localized format
    formatDate: function formatDate(value, format) {
      cov_2jel2l5d3e().f[2]++;
      cov_2jel2l5d3e().s[5]++;
      format = (cov_2jel2l5d3e().b[2][0]++, format) || (cov_2jel2l5d3e().b[2][1]++, "");
      cov_2jel2l5d3e().s[6]++;
      if (value) {
        cov_2jel2l5d3e().b[3][0]++;
        cov_2jel2l5d3e().s[7]++;
        return window.moment(value).format(format);
      } else {
        cov_2jel2l5d3e().b[3][1]++;
      }
      cov_2jel2l5d3e().s[8]++;
      return "n/a";
    },
    // Handler to properly format date/time columns according to configuration of user
    formatDateUser: function formatDateUser(value, format) {
      cov_2jel2l5d3e().f[3]++;
      var config = (cov_2jel2l5d3e().s[9]++, "");
      cov_2jel2l5d3e().s[10]++;
      if ((cov_2jel2l5d3e().b[5][0]++, typeof ProcessMaker !== "undefined") && (cov_2jel2l5d3e().b[5][1]++, ProcessMaker.user) && (cov_2jel2l5d3e().b[5][2]++, ProcessMaker.user.datetime_format)) {
        cov_2jel2l5d3e().b[4][0]++;
        cov_2jel2l5d3e().s[11]++;
        if (format === "datetime") {
          cov_2jel2l5d3e().b[6][0]++;
          cov_2jel2l5d3e().s[12]++;
          config = ProcessMaker.user.datetime_format;
        } else {
          cov_2jel2l5d3e().b[6][1]++;
        }
        cov_2jel2l5d3e().s[13]++;
        if (format === "date") {
          cov_2jel2l5d3e().b[7][0]++;
          cov_2jel2l5d3e().s[14]++;
          config = ProcessMaker.user.datetime_format.replace(/[\sHh:msaAzZ]/g, "");
        } else {
          cov_2jel2l5d3e().b[7][1]++;
        }
      } else {
        cov_2jel2l5d3e().b[4][1]++;
      }
      cov_2jel2l5d3e().s[15]++;
      if (value) {
        cov_2jel2l5d3e().b[8][0]++;
        cov_2jel2l5d3e().s[16]++;
        if (moment(value).isValid()) {
          cov_2jel2l5d3e().b[9][0]++;
          cov_2jel2l5d3e().s[17]++;
          return window.moment(value).format(config);
        } else {
          cov_2jel2l5d3e().b[9][1]++;
        }
        cov_2jel2l5d3e().s[18]++;
        return value;
      } else {
        cov_2jel2l5d3e().b[8][1]++;
      }
      cov_2jel2l5d3e().s[19]++;
      return "n/a";
    },
    // Data manager takes new sorting and calls our fetch method
    dataManager: function dataManager(sortOrder, pagination) {
      cov_2jel2l5d3e().f[4]++;
      cov_2jel2l5d3e().s[20]++;
      if (sortOrder[0].sortField !== undefined) {
        cov_2jel2l5d3e().b[10][0]++;
        cov_2jel2l5d3e().s[21]++;
        this.orderBy = sortOrder[0].sortField;
      } else {
        cov_2jel2l5d3e().b[10][1]++;
        cov_2jel2l5d3e().s[22]++;
        this.orderBy = sortOrder[0].field;
      }
      cov_2jel2l5d3e().s[23]++;
      this.orderDirection = sortOrder[0].direction;
      cov_2jel2l5d3e().s[24]++;
      this.fetch();
    },
    // Handler to change what page of results we are on
    changePerPage: function changePerPage(value) {
      cov_2jel2l5d3e().f[5]++;
      cov_2jel2l5d3e().s[25]++;
      this.perPage = value;
      cov_2jel2l5d3e().s[26]++;
      if (this.page * value > this.data.meta.total) {
        cov_2jel2l5d3e().b[11][0]++;
        cov_2jel2l5d3e().s[27]++;
        this.page = Math.floor(this.data.meta.total / value) + 1;
      } else {
        cov_2jel2l5d3e().b[11][1]++;
      }
      cov_2jel2l5d3e().s[28]++;
      this.fetch();
    },
    // Transformers our API meta data to a format understood by vuetable 2
    transform: function transform(data) {
      var _this = this;
      cov_2jel2l5d3e().f[6]++;
      cov_2jel2l5d3e().s[29]++;
      // Clean up fields for meta pagination so vue table pagination can understand
      data.meta.last_page = data.meta.total_pages;
      cov_2jel2l5d3e().s[30]++;
      data.meta.from = (data.meta.current_page - 1) * data.meta.per_page;
      cov_2jel2l5d3e().s[31]++;
      data.meta.to = data.meta.from + data.meta.count;
      cov_2jel2l5d3e().s[32]++;
      data.data = this.jsonRows(data.data);
      cov_2jel2l5d3e().s[33]++;
      data.data.forEach(function (record) {
        cov_2jel2l5d3e().f[7]++;
        cov_2jel2l5d3e().s[34]++;
        // format owner avatar if exists
        if (Object.hasOwn(record, "user")) {
          cov_2jel2l5d3e().b[12][0]++;
          cov_2jel2l5d3e().s[35]++;
          // eslint-disable-next-line no-param-reassign
          record.owner = _this.formatAvatar(record.user);
        } else {
          cov_2jel2l5d3e().b[12][1]++;
        }
        // format category if exists
        cov_2jel2l5d3e().s[36]++;
        if (Object.hasOwn(record, "category")) {
          cov_2jel2l5d3e().b[13][0]++;
          cov_2jel2l5d3e().s[37]++;
          // eslint-disable-next-line no-param-reassign
          record.category_list = _this.formatCategory(record.categories);
        } else {
          cov_2jel2l5d3e().b[13][1]++;
        }
      });
      cov_2jel2l5d3e().s[38]++;
      return data;
    },
    // Some controllers return each row as a json object to preserve integer keys (ie saved search)
    jsonRows: function jsonRows(rows) {
      cov_2jel2l5d3e().f[8]++;
      cov_2jel2l5d3e().s[39]++;
      if ((cov_2jel2l5d3e().b[15][0]++, rows.length === 0) || (cov_2jel2l5d3e().b[15][1]++, !_.has(_.head(rows), "_json"))) {
        cov_2jel2l5d3e().b[14][0]++;
        cov_2jel2l5d3e().s[40]++;
        if ((cov_2jel2l5d3e().b[17][0]++, !Array.isArray(rows)) && (cov_2jel2l5d3e().b[17][1]++, (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(rows) === "object")) {
          cov_2jel2l5d3e().b[16][0]++;
          cov_2jel2l5d3e().s[41]++;
          return Object.values(rows);
        } else {
          cov_2jel2l5d3e().b[16][1]++;
        }
        cov_2jel2l5d3e().s[42]++;
        return rows;
      } else {
        cov_2jel2l5d3e().b[14][1]++;
      }
      cov_2jel2l5d3e().s[43]++;
      return rows.map(function (row) {
        cov_2jel2l5d3e().f[9]++;
        cov_2jel2l5d3e().s[44]++;
        return JSON.parse(row._json);
      });
    },
    // Handler to set pagination data on our pagination based off of data passed into vuetable
    onPaginationData: function onPaginationData(data) {
      cov_2jel2l5d3e().f[10]++;
      cov_2jel2l5d3e().s[45]++;
      this.$refs.pagination.setPaginationData(data);
    },
    // Handler to change the page based on events fired from our pagination component
    onPageChange: function onPageChange(page) {
      cov_2jel2l5d3e().f[11]++;
      cov_2jel2l5d3e().s[46]++;
      if (page === "next") {
        cov_2jel2l5d3e().b[18][0]++;
        cov_2jel2l5d3e().s[47]++;
        this.page += 1;
      } else {
        cov_2jel2l5d3e().b[18][1]++;
        cov_2jel2l5d3e().s[48]++;
        if (page === "prev") {
          cov_2jel2l5d3e().b[19][0]++;
          cov_2jel2l5d3e().s[49]++;
          this.page -= 1;
        } else {
          cov_2jel2l5d3e().b[19][1]++;
          cov_2jel2l5d3e().s[50]++;
          this.page = page;
        }
      }
      cov_2jel2l5d3e().s[51]++;
      if (this.page <= 0) {
        cov_2jel2l5d3e().b[20][0]++;
        cov_2jel2l5d3e().s[52]++;
        this.page = 1;
      } else {
        cov_2jel2l5d3e().b[20][1]++;
      }
      cov_2jel2l5d3e().s[53]++;
      if (this.page > this.data.meta.last_page) {
        cov_2jel2l5d3e().b[21][0]++;
        cov_2jel2l5d3e().s[54]++;
        this.page = this.data.meta.last_page;
      } else {
        cov_2jel2l5d3e().b[21][1]++;
      }
      cov_2jel2l5d3e().s[55]++;
      this.fetch();
    }
  },
  data: function data() {
    cov_2jel2l5d3e().f[12]++;
    cov_2jel2l5d3e().s[56]++;
    return {
      // The returned data that will be loaded into the vuetable
      data: [],
      // What page of results we are on
      page: 1,
      // How many items per page
      perPage: 15,
      // Our loading flag
      loading: false,
      // What column to order by (default of name)
      orderBy: "name",
      // What direction to order by (default of ascending)
      orderDirection: "asc",
      // Cancel token which should be stored from axios if you want to cancel the current in progress request
      cancelToken: null,
      css: {
        tableClass: "table table-hover table-responsive-lg text-break mb-0",
        loadingClass: "loading",
        detailRowClass: "vuetable-detail-row",
        handleIcon: "grey sidebar icon",
        sortableIcon: "fas fa-sort",
        ascendingIcon: "fas fa-sort-up",
        descendingIcon: "fas fa-sort-down",
        ascendingClass: "ascending",
        descendingClass: "descending",
        renderIcon: function renderIcon(classes, options) {
          cov_2jel2l5d3e().f[13]++;
          cov_2jel2l5d3e().s[57]++;
          return "<i class=\"".concat(classes.join(" "), "\"></i>");
        }
      },
      noDataTemplate: function noDataTemplate() {
        cov_2jel2l5d3e().f[14]++;
        cov_2jel2l5d3e().s[58]++;
        return "asdfas#####1111";
      },
      totalCards: 0,
      counterPage: 2,
      cardMessage: "show-more",
      sumCards: 0,
      totalPages: 0
    };
  }
});

/***/ }),

/***/ "./resources/js/components/shared/FilterTableBodyMixin.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/shared/FilterTableBodyMixin.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

function cov_256fu6xeg4() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/components/shared/FilterTableBodyMixin.js";
  var hash = "25c35e35e158582f2a23611f5d20a0c7fd060bf7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/components/shared/FilterTableBodyMixin.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 68
        }
      },
      "1": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 95
        }
      },
      "2": {
        start: {
          line: 7,
          column: 58
        },
        end: {
          line: 7,
          column: 93
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 12,
          column: 7
        }
      },
      "4": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 70
        }
      },
      "5": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 19
        }
      },
      "6": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 38
        }
      },
      "7": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 69
        }
      },
      "8": {
        start: {
          line: 21,
          column: 22
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "9": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "10": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "11": {
        start: {
          line: 26,
          column: 21
        },
        end: {
          line: 26,
          column: 50
        }
      },
      "12": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 29,
          column: 9
        }
      },
      "13": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 23
        }
      },
      "14": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 32
        }
      },
      "15": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 23
        }
      },
      "16": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 19
        }
      },
      "17": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 23
        }
      },
      "18": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 27
        }
      },
      "19": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 19
        }
      },
      "20": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 53,
          column: 8
        }
      },
      "21": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 59
        }
      },
      "22": {
        start: {
          line: 56,
          column: 37
        },
        end: {
          line: 56,
          column: 46
        }
      },
      "23": {
        start: {
          line: 59,
          column: 20
        },
        end: {
          line: 59,
          column: 42
        }
      },
      "24": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 63,
          column: 7
        }
      },
      "25": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 37
        }
      },
      "26": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 40
        }
      },
      "27": {
        start: {
          line: 68,
          column: 19
        },
        end: {
          line: 68,
          column: 21
        }
      },
      "28": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 72,
          column: 7
        }
      },
      "29": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 51
        }
      },
      "30": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 53
        }
      },
      "31": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 76,
          column: 7
        }
      },
      "32": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 81
        }
      },
      "33": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 75,
          column: 53
        }
      },
      "34": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 19
        }
      },
      "35": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "36": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 84,
          column: 9
        }
      },
      "37": {
        start: {
          line: 82,
          column: 10
        },
        end: {
          line: 83,
          column: 28
        }
      },
      "38": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 21
        }
      },
      "39": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 87,
          column: 17
        }
      },
      "40": {
        start: {
          line: 90,
          column: 6
        },
        end: {
          line: 92,
          column: 7
        }
      },
      "41": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 50
          },
          end: {
            line: 7,
            column: 51
          }
        },
        loc: {
          start: {
            line: 7,
            column: 58
          },
          end: {
            line: 7,
            column: 93
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 9
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 19
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 18
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 22,
            column: 22
          },
          end: {
            line: 22,
            column: 23
          }
        },
        loc: {
          start: {
            line: 22,
            column: 34
          },
          end: {
            line: 24,
            column: 7
          }
        },
        line: 22
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 27,
            column: 22
          }
        },
        loc: {
          start: {
            line: 27,
            column: 32
          },
          end: {
            line: 29,
            column: 7
          }
        },
        line: 27
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        loc: {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 36,
            column: 5
          }
        },
        line: 33
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        loc: {
          start: {
            line: 37,
            column: 31
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 37
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        loc: {
          start: {
            line: 42,
            column: 86
          },
          end: {
            line: 54,
            column: 5
          }
        },
        line: 42
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        loc: {
          start: {
            line: 55,
            column: 31
          },
          end: {
            line: 57,
            column: 5
          }
        },
        line: 55
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 56,
            column: 29
          },
          end: {
            line: 56,
            column: 30
          }
        },
        loc: {
          start: {
            line: 56,
            column: 37
          },
          end: {
            line: 56,
            column: 46
          }
        },
        line: 56
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 5
          }
        },
        loc: {
          start: {
            line: 58,
            column: 40
          },
          end: {
            line: 66,
            column: 5
          }
        },
        line: 58
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        loc: {
          start: {
            line: 67,
            column: 26
          },
          end: {
            line: 78,
            column: 5
          }
        },
        line: 67
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        loc: {
          start: {
            line: 79,
            column: 37
          },
          end: {
            line: 88,
            column: 5
          }
        },
        line: 79
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        loc: {
          start: {
            line: 89,
            column: 31
          },
          end: {
            line: 93,
            column: 5
          }
        },
        line: 89
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 12,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 12,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 17
          }
        }, {
          start: {
            line: 10,
            column: 21
          },
          end: {
            line: 10,
            column: 48
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 32
          }
        }, {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 11,
            column: 69
          }
        }],
        line: 11
      },
      "3": {
        loc: {
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 42,
            column: 44
          },
          end: {
            line: 42,
            column: 49
          }
        }],
        line: 42
      },
      "4": {
        loc: {
          start: {
            line: 42,
            column: 51
          },
          end: {
            line: 42,
            column: 84
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 42,
            column: 79
          },
          end: {
            line: 42,
            column: 84
          }
        }],
        line: 42
      },
      "5": {
        loc: {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 63,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 63,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 61
      },
      "6": {
        loc: {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 72,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 72,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 69
      },
      "7": {
        loc: {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 76,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 76,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 73
      },
      "8": {
        loc: {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 80
      },
      "9": {
        loc: {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 84,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 84,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 81
      },
      "10": {
        loc: {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 90
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0],
      "4": [0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "25c35e35e158582f2a23611f5d20a0c7fd060bf7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_256fu6xeg4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_256fu6xeg4();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    containsHTML: function containsHTML(text) {
      cov_256fu6xeg4().f[0]++;
      var doc = (cov_256fu6xeg4().s[0]++, new DOMParser().parseFromString(text, 'text/html'));
      cov_256fu6xeg4().s[1]++;
      return Array.from(doc.body.childNodes).some(function (node) {
        cov_256fu6xeg4().f[1]++;
        cov_256fu6xeg4().s[2]++;
        return node.nodeType === Node.ELEMENT_NODE;
      });
    },
    isComponent: function isComponent(content) {
      cov_256fu6xeg4().f[2]++;
      cov_256fu6xeg4().s[3]++;
      if ((cov_256fu6xeg4().b[1][0]++, content) && (cov_256fu6xeg4().b[1][1]++, (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(content) === 'object')) {
        cov_256fu6xeg4().b[0][0]++;
        cov_256fu6xeg4().s[4]++;
        return (cov_256fu6xeg4().b[2][0]++, content.component) && (cov_256fu6xeg4().b[2][1]++, (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(content.props) === 'object');
      } else {
        cov_256fu6xeg4().b[0][1]++;
      }
      cov_256fu6xeg4().s[5]++;
      return false;
    },
    sanitize: function sanitize(html) {
      cov_256fu6xeg4().f[3]++;
      cov_256fu6xeg4().s[6]++;
      return this.removeScripts(html);
    },
    removeScripts: function removeScripts(input) {
      cov_256fu6xeg4().f[4]++;
      var doc = (cov_256fu6xeg4().s[7]++, new DOMParser().parseFromString(input, 'text/html'));
      var scripts = (cov_256fu6xeg4().s[8]++, doc.querySelectorAll('script'));
      cov_256fu6xeg4().s[9]++;
      scripts.forEach(function (script) {
        cov_256fu6xeg4().f[5]++;
        cov_256fu6xeg4().s[10]++;
        script.remove();
      });
      var styles = (cov_256fu6xeg4().s[11]++, doc.querySelectorAll('style'));
      cov_256fu6xeg4().s[12]++;
      styles.forEach(function (style) {
        cov_256fu6xeg4().f[6]++;
        cov_256fu6xeg4().s[13]++;
        style.remove();
      });
      cov_256fu6xeg4().s[14]++;
      return doc.body.innerHTML;
    },
    changePage: function changePage(page) {
      cov_256fu6xeg4().f[7]++;
      cov_256fu6xeg4().s[15]++;
      this.page = page;
      cov_256fu6xeg4().s[16]++;
      this.fetch();
    },
    changePerPage: function changePerPage(value, page) {
      cov_256fu6xeg4().f[8]++;
      cov_256fu6xeg4().s[17]++;
      this.page = page;
      cov_256fu6xeg4().s[18]++;
      this.perPage = value;
      cov_256fu6xeg4().s[19]++;
      this.fetch();
    },
    formatAvatar: function formatAvatar(user) {
      var $usePmDefaultLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_256fu6xeg4().b[3][0]++, false);
      var $usePmDefaultLabelProcess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_256fu6xeg4().b[4][0]++, false);
      cov_256fu6xeg4().f[9]++;
      cov_256fu6xeg4().s[20]++;
      return {
        component: "AvatarImage",
        props: {
          size: "25",
          "input-data": user,
          "hide-name": false,
          "name-clickable": true,
          'use-pm-default-label': $usePmDefaultLabel,
          'use-pm-default-label-process': $usePmDefaultLabelProcess
        }
      };
    },
    formatCategory: function formatCategory(categories) {
      cov_256fu6xeg4().f[10]++;
      cov_256fu6xeg4().s[21]++;
      return categories === null || categories === void 0 ? void 0 : categories.map(function (item) {
        cov_256fu6xeg4().f[11]++;
        cov_256fu6xeg4().s[22]++;
        return item.name;
      }).join(', ');
    },
    getNestedPropertyValue: function getNestedPropertyValue(obj, header) {
      cov_256fu6xeg4().f[12]++;
      var value = (cov_256fu6xeg4().s[23]++, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(obj, header.field));
      cov_256fu6xeg4().s[24]++;
      if (typeof header.cb === 'function') {
        cov_256fu6xeg4().b[5][0]++;
        cov_256fu6xeg4().s[25]++;
        return header.cb(value, obj);
      } else {
        cov_256fu6xeg4().b[5][1]++;
      }
      cov_256fu6xeg4().s[26]++;
      return this.format(value, header);
    },
    format: function format(value, header) {
      cov_256fu6xeg4().f[13]++;
      var config = (cov_256fu6xeg4().s[27]++, "");
      cov_256fu6xeg4().s[28]++;
      if (header.format === "datetime") {
        cov_256fu6xeg4().b[6][0]++;
        cov_256fu6xeg4().s[29]++;
        config = ProcessMaker.user.datetime_format;
        cov_256fu6xeg4().s[30]++;
        value = this.convertUTCToLocal(value, config);
      } else {
        cov_256fu6xeg4().b[6][1]++;
      }
      cov_256fu6xeg4().s[31]++;
      if (header.format === "date") {
        cov_256fu6xeg4().b[7][0]++;
        cov_256fu6xeg4().s[32]++;
        config = ProcessMaker.user.datetime_format.replace(/[\sHh:msaAzZ]/g, "");
        cov_256fu6xeg4().s[33]++;
        value = this.convertUTCToLocal(value, config);
      } else {
        cov_256fu6xeg4().b[7][1]++;
      }
      cov_256fu6xeg4().s[34]++;
      return value;
    },
    convertUTCToLocal: function convertUTCToLocal(value, config) {
      cov_256fu6xeg4().f[14]++;
      cov_256fu6xeg4().s[35]++;
      if (value) {
        cov_256fu6xeg4().b[8][0]++;
        cov_256fu6xeg4().s[36]++;
        if (moment(value).isValid()) {
          cov_256fu6xeg4().b[9][0]++;
          cov_256fu6xeg4().s[37]++;
          return window.moment(value).format(config);
        } else {
          cov_256fu6xeg4().b[9][1]++;
        }
        cov_256fu6xeg4().s[38]++;
        return value;
      } else {
        cov_256fu6xeg4().b[8][1]++;
      }
      cov_256fu6xeg4().s[39]++;
      return "-";
    },
    checkIfTooltipIsNeeded: function checkIfTooltipIsNeeded(e, v) {
      cov_256fu6xeg4().f[15]++;
      cov_256fu6xeg4().s[40]++;
      if (e.target.offsetWidth >= e.target.scrollWidth) {
        cov_256fu6xeg4().b[10][0]++;
        cov_256fu6xeg4().s[41]++;
        e.preventDefault();
      } else {
        cov_256fu6xeg4().b[10][1]++;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/tasks/components/ListMixin.js":
/*!****************************************************!*\
  !*** ./resources/js/tasks/components/ListMixin.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

function cov_23q4jjau9r() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/tasks/components/ListMixin.js";
  var hash = "fdeb6e39bba39033aebaa3fec93e38b0450b2783";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/tasks/components/ListMixin.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 135,
          column: 1
        }
      },
      "1": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 3,
          column: 68
        }
      },
      "2": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 6,
          column: 5
        }
      },
      "3": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 64
        }
      },
      "4": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 9,
          column: 79
        }
      },
      "5": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 33
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 7
        }
      },
      "7": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 19
        }
      },
      "8": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 16,
          column: 68
        }
      },
      "9": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "10": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 67
        }
      },
      "11": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 25,
          column: 7
        }
      },
      "12": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 72
        }
      },
      "13": {
        start: {
          line: 24,
          column: 51
        },
        end: {
          line: 24,
          column: 58
        }
      },
      "14": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 16
        }
      },
      "15": {
        start: {
          line: 31,
          column: 24
        },
        end: {
          line: 31,
          column: 67
        }
      },
      "16": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "17": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 40,
          column: 9
        }
      },
      "18": {
        start: {
          line: 37,
          column: 10
        },
        end: {
          line: 37,
          column: 41
        }
      },
      "19": {
        start: {
          line: 38,
          column: 10
        },
        end: {
          line: 38,
          column: 55
        }
      },
      "20": {
        start: {
          line: 39,
          column: 10
        },
        end: {
          line: 39,
          column: 23
        }
      },
      "21": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 46,
          column: 7
        }
      },
      "22": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 45,
          column: 105
        }
      },
      "23": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 16
        }
      },
      "24": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 38
        }
      },
      "25": {
        start: {
          line: 50,
          column: 29
        },
        end: {
          line: 50,
          column: 38
        }
      },
      "26": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 50
        }
      },
      "27": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 132,
          column: 9
        }
      },
      "28": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 36
        }
      },
      "29": {
        start: {
          line: 56,
          column: 19
        },
        end: {
          line: 56,
          column: 21
        }
      },
      "30": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 59,
          column: 9
        }
      },
      "31": {
        start: {
          line: 58,
          column: 10
        },
        end: {
          line: 58,
          column: 27
        }
      },
      "32": {
        start: {
          line: 60,
          column: 25
        },
        end: {
          line: 60,
          column: 29
        }
      },
      "33": {
        start: {
          line: 61,
          column: 27
        },
        end: {
          line: 61,
          column: 29
        }
      },
      "34": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 69,
          column: 9
        }
      },
      "35": {
        start: {
          line: 63,
          column: 10
        },
        end: {
          line: 68,
          column: 11
        }
      },
      "36": {
        start: {
          line: 64,
          column: 12
        },
        end: {
          line: 64,
          column: 47
        }
      },
      "37": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 65,
          column: 24
        }
      },
      "38": {
        start: {
          line: 67,
          column: 12
        },
        end: {
          line: 67,
          column: 113
        }
      },
      "39": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 72,
          column: 9
        }
      },
      "40": {
        start: {
          line: 71,
          column: 10
        },
        end: {
          line: 71,
          column: 24
        }
      },
      "41": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 37
        }
      },
      "42": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 76,
          column: 9
        }
      },
      "43": {
        start: {
          line: 75,
          column: 10
        },
        end: {
          line: 75,
          column: 24
        }
      },
      "44": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 33
        }
      },
      "45": {
        start: {
          line: 78,
          column: 29
        },
        end: {
          line: 80,
          column: 14
        }
      },
      "46": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 83,
          column: 9
        }
      },
      "47": {
        start: {
          line: 82,
          column: 10
        },
        end: {
          line: 82,
          column: 24
        }
      },
      "48": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 53
        }
      },
      "49": {
        start: {
          line: 85,
          column: 28
        },
        end: {
          line: 85,
          column: 82
        }
      },
      "50": {
        start: {
          line: 88,
          column: 33
        },
        end: {
          line: 88,
          column: 79
        }
      },
      "51": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 91,
          column: 9
        }
      },
      "52": {
        start: {
          line: 90,
          column: 10
        },
        end: {
          line: 90,
          column: 76
        }
      },
      "53": {
        start: {
          line: 92,
          column: 24
        },
        end: {
          line: 92,
          column: 48
        }
      },
      "54": {
        start: {
          line: 93,
          column: 8
        },
        end: {
          line: 95,
          column: 9
        }
      },
      "55": {
        start: {
          line: 94,
          column: 10
        },
        end: {
          line: 94,
          column: 51
        }
      },
      "56": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 131,
          column: 13
        }
      },
      "57": {
        start: {
          line: 113,
          column: 12
        },
        end: {
          line: 113,
          column: 54
        }
      },
      "58": {
        start: {
          line: 114,
          column: 12
        },
        end: {
          line: 114,
          column: 55
        }
      },
      "59": {
        start: {
          line: 115,
          column: 12
        },
        end: {
          line: 118,
          column: 14
        }
      },
      "60": {
        start: {
          line: 119,
          column: 12
        },
        end: {
          line: 125,
          column: 13
        }
      },
      "61": {
        start: {
          line: 120,
          column: 30
        },
        end: {
          line: 120,
          column: 32
        }
      },
      "62": {
        start: {
          line: 121,
          column: 14
        },
        end: {
          line: 123,
          column: 17
        }
      },
      "63": {
        start: {
          line: 122,
          column: 16
        },
        end: {
          line: 122,
          column: 41
        }
      },
      "64": {
        start: {
          line: 124,
          column: 14
        },
        end: {
          line: 124,
          column: 76
        }
      },
      "65": {
        start: {
          line: 126,
          column: 12
        },
        end: {
          line: 126,
          column: 68
        }
      },
      "66": {
        start: {
          line: 129,
          column: 12
        },
        end: {
          line: 129,
          column: 77
        }
      },
      "67": {
        start: {
          line: 130,
          column: 12
        },
        end: {
          line: 130,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 12
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 47
          },
          end: {
            line: 11,
            column: 48
          }
        },
        loc: {
          start: {
            line: 11,
            column: 53
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 18
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        loc: {
          start: {
            line: 22,
            column: 19
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 22
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 24,
            column: 44
          },
          end: {
            line: 24,
            column: 45
          }
        },
        loc: {
          start: {
            line: 24,
            column: 51
          },
          end: {
            line: 24,
            column: 58
          }
        },
        line: 24
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        loc: {
          start: {
            line: 30,
            column: 15
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 30
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        loc: {
          start: {
            line: 43,
            column: 19
          },
          end: {
            line: 48,
            column: 5
          }
        },
        line: 43
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        loc: {
          start: {
            line: 49,
            column: 50
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 49
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        loc: {
          start: {
            line: 53,
            column: 12
          },
          end: {
            line: 133,
            column: 5
          }
        },
        line: 53
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 54,
            column: 19
          },
          end: {
            line: 54,
            column: 20
          }
        },
        loc: {
          start: {
            line: 54,
            column: 25
          },
          end: {
            line: 132,
            column: 7
          }
        },
        line: 54
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 112,
            column: 16
          },
          end: {
            line: 112,
            column: 17
          }
        },
        loc: {
          start: {
            line: 112,
            column: 30
          },
          end: {
            line: 127,
            column: 11
          }
        },
        line: 112
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 121,
            column: 37
          },
          end: {
            line: 121,
            column: 38
          }
        },
        loc: {
          start: {
            line: 121,
            column: 50
          },
          end: {
            line: 123,
            column: 15
          }
        },
        line: 121
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 128,
            column: 17
          },
          end: {
            line: 128,
            column: 18
          }
        },
        loc: {
          start: {
            line: 128,
            column: 28
          },
          end: {
            line: 131,
            column: 11
          }
        },
        line: 128
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 17
      },
      "2": {
        loc: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 25,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 25,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 23
      },
      "3": {
        loc: {
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 10
          },
          end: {
            line: 23,
            column: 22
          }
        }, {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 49
          }
        }],
        line: 23
      },
      "4": {
        loc: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 32
      },
      "5": {
        loc: {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 40,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 40,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 36
      },
      "6": {
        loc: {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 44
      },
      "7": {
        loc: {
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 44,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 44,
            column: 41
          }
        }, {
          start: {
            line: 44,
            column: 45
          },
          end: {
            line: 44,
            column: 70
          }
        }],
        line: 44
      },
      "8": {
        loc: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 38
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 38
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 50
      },
      "9": {
        loc: {
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 59,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 59,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 57
      },
      "10": {
        loc: {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 69,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 69,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 62
      },
      "11": {
        loc: {
          start: {
            line: 62,
            column: 12
          },
          end: {
            line: 62,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 62,
            column: 12
          },
          end: {
            line: 62,
            column: 18
          }
        }, {
          start: {
            line: 62,
            column: 22
          },
          end: {
            line: 62,
            column: 35
          }
        }],
        line: 62
      },
      "12": {
        loc: {
          start: {
            line: 63,
            column: 10
          },
          end: {
            line: 68,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 10
          },
          end: {
            line: 68,
            column: 11
          }
        }, {
          start: {
            line: 66,
            column: 17
          },
          end: {
            line: 68,
            column: 11
          }
        }],
        line: 63
      },
      "13": {
        loc: {
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 72,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 72,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 70
      },
      "14": {
        loc: {
          start: {
            line: 74,
            column: 8
          },
          end: {
            line: 76,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 74,
            column: 8
          },
          end: {
            line: 76,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 74
      },
      "15": {
        loc: {
          start: {
            line: 78,
            column: 29
          },
          end: {
            line: 80,
            column: 14
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 79,
            column: 12
          },
          end: {
            line: 79,
            column: 36
          }
        }, {
          start: {
            line: 80,
            column: 12
          },
          end: {
            line: 80,
            column: 14
          }
        }],
        line: 78
      },
      "16": {
        loc: {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 83,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 83,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 81
      },
      "17": {
        loc: {
          start: {
            line: 88,
            column: 33
          },
          end: {
            line: 88,
            column: 79
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 88,
            column: 33
          },
          end: {
            line: 88,
            column: 70
          }
        }, {
          start: {
            line: 88,
            column: 74
          },
          end: {
            line: 88,
            column: 79
          }
        }],
        line: 88
      },
      "18": {
        loc: {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 91,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 91,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 89
      },
      "19": {
        loc: {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 95,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 95,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 93
      },
      "20": {
        loc: {
          start: {
            line: 104,
            column: 35
          },
          end: {
            line: 104,
            column: 75
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 104,
            column: 59
          },
          end: {
            line: 104,
            column: 65
          }
        }, {
          start: {
            line: 104,
            column: 68
          },
          end: {
            line: 104,
            column: 75
          }
        }],
        line: 104
      },
      "21": {
        loc: {
          start: {
            line: 119,
            column: 12
          },
          end: {
            line: 125,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 119,
            column: 12
          },
          end: {
            line: 125,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 119
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fdeb6e39bba39033aebaa3fec93e38b0450b2783"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23q4jjau9r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_23q4jjau9r();
var ListMixin = (cov_23q4jjau9r().s[0]++, {
  mounted: function mounted() {
    var _window$ProcessMaker,
      _this = this;
    cov_23q4jjau9r().f[0]++;
    var taskListCard = (cov_23q4jjau9r().s[1]++, document.querySelector(".mobile-container"));
    cov_23q4jjau9r().s[2]++;
    if (taskListCard) {
      cov_23q4jjau9r().b[0][0]++;
      cov_23q4jjau9r().s[3]++;
      taskListCard.addEventListener("scrollend", this.onScroll);
    } else {
      cov_23q4jjau9r().b[0][1]++;
    }

    // Reload the task list when tasks are updated in the backend
    var channel = (cov_23q4jjau9r().s[4]++, "ProcessMaker.Models.User.".concat((_window$ProcessMaker = window.ProcessMaker) === null || _window$ProcessMaker === void 0 || (_window$ProcessMaker = _window$ProcessMaker.user) === null || _window$ProcessMaker === void 0 ? void 0 : _window$ProcessMaker.id));
    var event = (cov_23q4jjau9r().s[5]++, ".TasksUpdated");
    cov_23q4jjau9r().s[6]++;
    window.Echo["private"](channel).listen(event, function () {
      cov_23q4jjau9r().f[1]++;
      cov_23q4jjau9r().s[7]++;
      _this.fetch();
    });
  },
  beforeDestroy: function beforeDestroy() {
    cov_23q4jjau9r().f[2]++;
    var taskListCard = (cov_23q4jjau9r().s[8]++, document.querySelector(".mobile-container"));
    cov_23q4jjau9r().s[9]++;
    if (taskListCard) {
      cov_23q4jjau9r().b[1][0]++;
      cov_23q4jjau9r().s[10]++;
      taskListCard.removeEventListener("scrollend", this.onScroll);
    } else {
      cov_23q4jjau9r().b[1][1]++;
    }
  },
  computed: {
    columnsQuery: function columnsQuery() {
      cov_23q4jjau9r().f[3]++;
      cov_23q4jjau9r().s[11]++;
      if ((cov_23q4jjau9r().b[3][0]++, this.columns) && (cov_23q4jjau9r().b[3][1]++, this.columns.length > 0)) {
        cov_23q4jjau9r().b[2][0]++;
        cov_23q4jjau9r().s[12]++;
        return "&columns=".concat(this.columns.map(function (c) {
          cov_23q4jjau9r().f[4]++;
          cov_23q4jjau9r().s[13]++;
          return c.field;
        }).join(","));
      } else {
        cov_23q4jjau9r().b[2][1]++;
      }
      cov_23q4jjau9r().s[14]++;
      return "";
    }
  },
  methods: {
    onScroll: function onScroll() {
      cov_23q4jjau9r().f[5]++;
      var container = (cov_23q4jjau9r().s[15]++, document.querySelector(".mobile-container"));
      cov_23q4jjau9r().s[16]++;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
        cov_23q4jjau9r().b[4][0]++;
        cov_23q4jjau9r().s[17]++;
        if (this.totalCards >= this.perPage) {
          cov_23q4jjau9r().b[5][0]++;
          cov_23q4jjau9r().s[18]++;
          this.cardMessage = "show-page";
          cov_23q4jjau9r().s[19]++;
          this.sumCards = this.sumCards + this.perPage;
          cov_23q4jjau9r().s[20]++;
          this.fetch();
        } else {
          cov_23q4jjau9r().b[5][1]++;
        }
      } else {
        cov_23q4jjau9r().b[4][1]++;
      }
    },
    getSortParam: function getSortParam() {
      cov_23q4jjau9r().f[6]++;
      cov_23q4jjau9r().s[21]++;
      if ((cov_23q4jjau9r().b[7][0]++, this.sortOrder instanceof Array) && (cov_23q4jjau9r().b[7][1]++, this.sortOrder.length > 0)) {
        cov_23q4jjau9r().b[6][0]++;
        cov_23q4jjau9r().s[22]++;
        return "&order_by=".concat(this.sortOrder[0].sortField, "&order_direction=").concat(this.sortOrder[0].direction);
      } else {
        cov_23q4jjau9r().b[6][1]++;
      }
      cov_23q4jjau9r().s[23]++;
      return "";
    },
    calculateTotalPages: function calculateTotalPages(totalItems, itemsPerPage) {
      cov_23q4jjau9r().f[7]++;
      cov_23q4jjau9r().s[24]++;
      if (itemsPerPage <= 0) {
        cov_23q4jjau9r().b[8][0]++;
        cov_23q4jjau9r().s[25]++;
        return 0;
      } else {
        cov_23q4jjau9r().b[8][1]++;
      }
      cov_23q4jjau9r().s[26]++;
      return Math.ceil(totalItems / itemsPerPage);
    },
    fetch: function fetch() {
      var _this2 = this;
      cov_23q4jjau9r().f[8]++;
      cov_23q4jjau9r().s[27]++;
      Vue.nextTick(function () {
        var _ref2, _window$ProcessMaker2;
        cov_23q4jjau9r().f[9]++;
        cov_23q4jjau9r().s[28]++;
        _this2.$emit("on-fetch-task");
        var pmql = (cov_23q4jjau9r().s[29]++, "");
        cov_23q4jjau9r().s[30]++;
        if (_this2.pmql !== undefined) {
          cov_23q4jjau9r().b[9][0]++;
          cov_23q4jjau9r().s[31]++;
          pmql = _this2.pmql;
        } else {
          cov_23q4jjau9r().b[9][1]++;
        }
        var _ref = (cov_23q4jjau9r().s[32]++, _this2),
          filter = _ref.filter;
        var filterParams = (cov_23q4jjau9r().s[33]++, "");
        cov_23q4jjau9r().s[34]++;
        if ((cov_23q4jjau9r().b[11][0]++, filter) && (cov_23q4jjau9r().b[11][1]++, filter.length)) {
          cov_23q4jjau9r().b[10][0]++;
          cov_23q4jjau9r().s[35]++;
          if (filter.isPMQL()) {
            cov_23q4jjau9r().b[12][0]++;
            cov_23q4jjau9r().s[36]++;
            pmql = "(".concat(pmql, ") and (").concat(filter, ")");
            cov_23q4jjau9r().s[37]++;
            filter = "";
          } else {
            cov_23q4jjau9r().b[12][1]++;
            cov_23q4jjau9r().s[38]++;
            filterParams = "&user_id=".concat(window.ProcessMaker.user.id, "&filter=").concat(filter, "&statusfilter=ACTIVE,CLOSED");
          }
        } else {
          cov_23q4jjau9r().b[10][1]++;
        }
        cov_23q4jjau9r().s[39]++;
        if (_this2.previousFilter !== filter) {
          cov_23q4jjau9r().b[13][0]++;
          cov_23q4jjau9r().s[40]++;
          _this2.page = 1;
        } else {
          cov_23q4jjau9r().b[13][1]++;
        }
        cov_23q4jjau9r().s[41]++;
        _this2.previousFilter = filter;
        cov_23q4jjau9r().s[42]++;
        if (_this2.previousPmql !== pmql) {
          cov_23q4jjau9r().b[14][0]++;
          cov_23q4jjau9r().s[43]++;
          _this2.page = 1;
        } else {
          cov_23q4jjau9r().b[14][1]++;
        }
        cov_23q4jjau9r().s[44]++;
        _this2.previousPmql = pmql;
        var advancedFilter = (cov_23q4jjau9r().s[45]++, _this2.getAdvancedFilter ? (cov_23q4jjau9r().b[15][0]++, _this2.getAdvancedFilter()) : (cov_23q4jjau9r().b[15][1]++, ""));
        cov_23q4jjau9r().s[46]++;
        if (_this2.previousAdvancedFilter !== advancedFilter) {
          cov_23q4jjau9r().b[16][0]++;
          cov_23q4jjau9r().s[47]++;
          _this2.page = 1;
        } else {
          cov_23q4jjau9r().b[16][1]++;
        }
        cov_23q4jjau9r().s[48]++;
        _this2.previousAdvancedFilter = advancedFilter;
        var includeString = (cov_23q4jjau9r().s[49]++, "process,processRequest,processRequest.user,user,data");
        // If columns are default (isDefaultColumns = true), don't include data
        // If columns are NOT default (isDefaultColumns = false), include data
        var isDefaultColumns = (cov_23q4jjau9r().s[50]++, (_ref2 = (cov_23q4jjau9r().b[17][0]++, (_window$ProcessMaker2 = window.ProcessMaker) === null || _window$ProcessMaker2 === void 0 ? void 0 : _window$ProcessMaker2.isDefaultColumns)) !== null && _ref2 !== void 0 ? _ref2 : (cov_23q4jjau9r().b[17][1]++, false));
        cov_23q4jjau9r().s[51]++;
        if (isDefaultColumns) {
          cov_23q4jjau9r().b[18][0]++;
          cov_23q4jjau9r().s[52]++;
          includeString = "process,processRequest,processRequest.user,user";
        } else {
          cov_23q4jjau9r().b[18][1]++;
        }
        var include = (cov_23q4jjau9r().s[53]++, includeString.split(","));
        cov_23q4jjau9r().s[54]++;
        if (_this2.additionalIncludes) {
          cov_23q4jjau9r().b[19][0]++;
          cov_23q4jjau9r().s[55]++;
          include.push.apply(include, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.additionalIncludes));
        } else {
          cov_23q4jjau9r().b[19][1]++;
        }
        // Load from our api client
        cov_23q4jjau9r().s[56]++;
        ProcessMaker.apiClient.get("".concat(_this2.endpoint, "?page=").concat(_this2.page, "&include=") + include.join(",") + "&pmql=".concat(encodeURIComponent(pmql), "&per_page=").concat(_this2.perPage + _this2.sumCards).concat(filterParams).concat(_this2.getSortParam(), "&non_system=true") + "&processesIManage=".concat(_this2.processesIManage ? (cov_23q4jjau9r().b[20][0]++, "true") : (cov_23q4jjau9r().b[20][1]++, "false")) + advancedFilter + _this2.columnsQuery, {
          dataLoadingId: _this2.dataLoadingId,
          headers: {
            "Cache-Control": "no-cache"
          }
        }).then(function (response) {
          cov_23q4jjau9r().f[10]++;
          cov_23q4jjau9r().s[57]++;
          _this2.data = _this2.transform(response.data);
          cov_23q4jjau9r().s[58]++;
          _this2.totalCards = response.data.meta.total;
          cov_23q4jjau9r().s[59]++;
          _this2.totalPages = _this2.calculateTotalPages(_this2.totalCards, _this2.perPage);
          cov_23q4jjau9r().s[60]++;
          if (_this2.$cookies.get("isMobile") === "true") {
            cov_23q4jjau9r().b[21][0]++;
            var dataIds = (cov_23q4jjau9r().s[61]++, []);
            cov_23q4jjau9r().s[62]++;
            _this2.data.data.forEach(function (element) {
              cov_23q4jjau9r().f[11]++;
              cov_23q4jjau9r().s[63]++;
              dataIds.push(element.id);
            });
            cov_23q4jjau9r().s[64]++;
            _this2.$cookies.set("tasksListMobile", JSON.stringify(dataIds));
          } else {
            cov_23q4jjau9r().b[21][1]++;
          }
          cov_23q4jjau9r().s[65]++;
          _this2.$emit("in-overdue", response.data.meta.in_overdue);
        })["catch"](function (error) {
          cov_23q4jjau9r().f[12]++;
          cov_23q4jjau9r().s[66]++;
          window.ProcessMaker.alert(error.response.data.message, "danger");
          cov_23q4jjau9r().s[67]++;
          _this2.data = [];
        });
      });
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListMixin);

/***/ }),

/***/ "./resources/js/tasks/mobile.js":
/*!**************************************!*\
  !*** ./resources/js/tasks/mobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_MobileTasks_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MobileTasks.vue */ "./resources/js/tasks/components/MobileTasks.vue");
/* harmony import */ var _Mobile_FilterMobile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mobile/FilterMobile.vue */ "./resources/js/Mobile/FilterMobile.vue");
/* harmony import */ var _Mobile_FilterMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mobile/FilterMixin */ "./resources/js/Mobile/FilterMixin.js");
function cov_26b75wnapi() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/tasks/mobile.js";
  var hash = "5c25948ed2acb1a0c0fe7160259ebe6af9689f68";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/tasks/mobile.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 16,
          column: 3
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5c25948ed2acb1a0c0fe7160259ebe6af9689f68"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26b75wnapi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_26b75wnapi();




cov_26b75wnapi().s[0]++;
new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  el: "#tasks-mobile",
  mixins: [_Mobile_FilterMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    MobileTasks: _components_MobileTasks_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FilterMobile: _Mobile_FilterMobile_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: {
    filter: "",
    pmql: "",
    status: [],
    fullPmql: ""
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n[v-cloak][data-v-15965e3b] {\n  display: none;\n}\n.vuetable th.sortable[data-v-15965e3b]:hover {\n  color: #2185d0;\n  cursor: pointer;\n}\n.vuetable-body-wrapper[data-v-15965e3b] {\n  position:relative;\n  overflow-y:auto;\n}\n.vuetable-head-wrapper[data-v-15965e3b] {\n  overflow-x: hidden;\n}\n.vuetable-actions[data-v-15965e3b] {\n  width: 15%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.vuetable-pagination[data-v-15965e3b] {\n  background: #f9fafb !important;\n}\n.vuetable-pagination-info[data-v-15965e3b] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.vuetable-empty-result[data-v-15965e3b] {\n  text-align: center;\n}\n.vuetable-clip-text[data-v-15965e3b] {\n  white-space: pre-wrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: block;\n}\n.vuetable-semantic-no-top[data-v-15965e3b] {\n  border-top:none !important;\n  margin-top:0 !important;\n}\n.vuetable-fixed-layout[data-v-15965e3b] {\n  table-layout: fixed;\n}\n.vuetable-gutter-col[data-v-15965e3b] {\n  padding: 0 !important;\n  border-left: none  !important;\n  border-right: none  !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.has-search .form-control {\n  padding-left: 2.375rem;\n}\n.has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n.expanded .dropdown {\n  display: none;\n}\n.hidden-input {\n  display: none;\n}\n.dropdown-item {\n  display: flex;\n  align-items: center;\n}\n.dropdown-item .fas.fa-check {\n  margin-left: auto;\n  color: black;\n}\n.btn-clear {\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 8px 4px;\n  margin-left: 5px;\n  color: #888;\n}\n.dropdown-toggle {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.dropdown-item {\n  font-size: 16px;\n  font-weight: 400;\n  color: #556271;\n  height: 48px;\n}\n.narrow-input {\n  font-size: 12px;\n  width: 100%;\n  padding: 5px 5px;\n  border: none;\n}\n.dropdown-status-style {\n  background-color: transparent !important;\n  color: #4C545C !important;\n  border: none;\n  text-transform: none;\n  font-size: 15px;\n  font-weight: 400;\n}\n.dropdown-status-style:focus {\n  color: #0C8CE9 !important;\n  box-shadow: none !important;\n}\n.status-dropdown {\n  margin-left: 5px;\n}\n.dropdown-requests-style {\n  align-items: center;\n  padding: 8px 8px;\n}\n.dropdown-requests-style:focus {\n  background-color: #E1EAF0;\n}\n.dropdown-item-selected {\n  background-color: #EBEEF2;\n}\n.mobile-dropdown-menu {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".avatar-button.disabled[data-v-65945167],\n.avatar-button[data-v-65945167]:disabled {\n  opacity: 1;\n  pointer-events: none;\n}\n.vertical-view[data-v-65945167] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.new-wrap[data-v-65945167] {\n  overflow-wrap: anywhere;\n}\n.class-border-avatar[data-v-65945167] {\n  border: 2px solid white;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".jumbotron[data-v-21eeb279] {\n  background-color: transparent;\n}\n.icon-container[data-v-21eeb279] {\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  margin-bottom: 1em;\n}\n.icon-container i[data-v-21eeb279] {\n  color: #b7bfc5;\n  font-size: 5em;\n}\n.icon-container svg[data-v-21eeb279] {\n  fill: #b7bfc5;\n}\n.img-container[data-v-21eeb279] {\n  display: inline-block;\n  width: 297px;\n  height: 210px;\n  margin-bottom: 1em;\n}\n.no-results-img[data-v-21eeb279] {\n  width: 297px;\n  height: 210px;\n  fill: #b7bfc5;\n}\n.empty-title[data-v-21eeb279] {\n  color: #1572C2;\n  font-weight: 700;\n  font-size: 24px;\n}\n.empty-desc[data-v-21eeb279] {\n  color: #556271;\n  font-weight: 400;\n  font-size: 20px;\n  white-space: pre-line;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".meta[data-v-3b0b08a3] {\n  font-size: 12px;\n  color: #788793;\n}\n.pagination-nav-item[data-v-3b0b08a3] {\n  background-color: #f7f9fb;\n  width: 29px;\n  height: 29px;\n  margin: 1px;\n  font-size: 12px;\n  line-height: 29px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  color: #788793;\n}\n.pagination-nav-item.active[data-v-3b0b08a3] {\n  background-color: #e9edf1;\n}\n.pagination-nav-item.disabled[data-v-3b0b08a3] {\n  cursor: not-allowed;\n}\n.pagination-nav-item[data-v-3b0b08a3]:hover {\n  background-color: white;\n}\n.pagination-nav-drop[data-v-3b0b08a3] {\n  width: 40px;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../vue-loader/lib/index.js??vue-loader-options!./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_style_index_0_id_6aed340e_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_style_index_0_id_6aed340e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_style_index_0_id_6aed340e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_style_index_0_id_65945167_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_style_index_0_id_65945167_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_style_index_0_id_65945167_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_style_index_0_id_21eeb279_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_style_index_0_id_21eeb279_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_style_index_0_id_21eeb279_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_3b0b08a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_3b0b08a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_3b0b08a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue":
/*!*************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&");
/* harmony import */ var _Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=script&lang=js& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&");
/* harmony import */ var _Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "15965e3b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vuetable-2/src/components/Vuetable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/vuetable-2/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    fields: {
      type: Array,
      required: true
    },
    loadOnStart: {
      type: Boolean,
      default: true
    },
    apiUrl: {
        type: String,
        default: ''
    },
    httpMethod: {
        type: String,
        default: 'get',
        validator: (value) => {
          return ['get', 'post'].indexOf(value) > -1
        }
    },
    reactiveApiUrl: {
        type: Boolean,
        default: true
    },
    apiMode: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object],
      default: null
    },
    dataTotal: {
      type: Number,
      default: 0
    },
    dataManager: {
      type: Function,
      default: null
    },
    dataPath: {
        type: String,
        default: 'data'
    },
    paginationPath: {
        type: [String],
        default: 'links.pagination'
    },
    queryParams: {
      type: [Object, Function],
      default () {
        return {
          sort: 'sort',
          page: 'page',
          perPage: 'per_page'
        }
      }
    },
    appendParams: {
      type: Object,
      default () {
        return {}
      }
    },
    httpOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    httpFetch: {
      type: Function,
      default: null
    },
    perPage: {
        type: Number,
        default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    sortOrder: {
      type: Array,
      default () {
        return []
      }
    },
    multiSort: {
      type: Boolean,
      default () {
        return false
      }
    },
    tableHeight: {
      type: String,
      default: null
    },
    /*
     * physical key that will trigger multi-sort option
     * possible values: 'alt', 'ctrl', 'meta', 'shift'
     * 'ctrl' might not work as expected on Mac
     */
    multiSortKey: {
      type: String,
      default: 'alt'
    },
    /* deprecated */
    rowClassCallback: {
      type: [String, Function],
      default: ''
    },
    rowClass: {
      type: [String, Function],
      default: ''
    },
    detailRowComponent: {
      type: String,
      default: ''
    },
    detailRowTransition: {
      type: String,
      default: ''
    },
    trackBy: {
      type: String,
      default: 'id'
    },
    css: {
      type: Object,
      default () {
        return {
          tableClass: 'ui blue selectable celled stackable attached table',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          ascendingClass: 'sorted-asc',
          descendingClass: 'sorted-desc',
          sortableIcon: '',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon',
          tableBodyClass: 'vuetable-semantic-no-top vuetable-fixed-layout',
          tableHeaderClass: 'vuetable-fixed-layout'
        }
      }
    },
    minRows: {
      type: Number,
      default: 0
    },
    silent: {
      type: Boolean,
      default: false
    },
    noDataTemplate: {
      type: String,
      default() {
        return 'No Data Available'
      }
    },
    showSortIcons: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      eventPrefix: 'vuetable:',
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: this.initialPage,
      selectedTo: [],
      visibleDetailRows: [],
      lastScrollPosition: 0,
      scrollBarWidth: '17px', //chrome default
      scrollVisible: false,
    }
  },
  mounted () {
    this.normalizeFields()
    this.normalizeSortOrder()
    if (this.isFixedHeader) {
      this.scrollBarWidth = this.getScrollBarWidth() + 'px';
    }
    this.$nextTick(function() {
      this.fireEvent('initialized', this.tableFields)
    })

    if (this.loadOnStart) {
      this.loadData()
    }
    if (this.isFixedHeader) {
      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        elem.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  destroyed () {
    let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
    if (elem != null) {
      elem.removeEventListener('scroll', this.handleScroll);
    }
  },
  computed: {
    version: () => VERSION,
    useDetailRow () {
      if (this.tableData && this.tableData[0] && this.detailRowComponent !== '' && typeof this.tableData[0][this.trackBy] === 'undefined') {
        this.warn('You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!')
        return false
      }

      return this.detailRowComponent !== ''
    },
    countVisibleFields () {
      return this.tableFields.filter(function(field) {
        return field.visible
      }).length
    },
    countTableData () {
      if (this.tableData === null) {
        return 0
      }
      return this.tableData.length
    },
    displayEmptyDataRow () {
      return this.countTableData === 0 && this.noDataTemplate.length > 0
    },
    lessThanMinRows () {
      if (this.tableData === null || this.tableData.length === 0) {
        return true
      }
      return this.tableData.length < this.minRows
    },
    blankRows () {
      if (this.tableData === null || this.tableData.length === 0) {
        return this.minRows
      }
      if (this.tableData.length >= this.minRows) {
        return 0
      }

      return this.minRows - this.tableData.length
    },
    isApiMode () {
      return this.apiMode
    },
    isDataMode () {
      return ! this.apiMode
    },
    isFixedHeader () {
      return this.tableHeight != null
    }
  },
  methods: {
    getScrollBarWidth () {
      const outer = document.createElement('div');
      const inner = document.createElement('div');

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';

      inner.style.width = '100%';


      outer.appendChild(inner);
      document.body.appendChild(outer);


      const widthWithoutScrollbar = outer.offsetWidth;

      outer.style.overflow = 'scroll';

      const widthWithScrollbar = inner.offsetWidth;


      document.body.removeChild(outer);


      return (widthWithoutScrollbar - widthWithScrollbar);
    },
    handleScroll (e) { //make sure that the header and the body are aligned when scrolling horizontally on a table that is wider than the viewport
      let horizontal = e.currentTarget.scrollLeft;
      if (horizontal != this.lastScrollPosition) { //don't modify header scroll if we are scrolling vertically
        let header = this.$el.getElementsByClassName('vuetable-head-wrapper')[0]
        if (header != null) {
          header.scrollLeft = horizontal;
        }
        this.lastScrollPosition = horizontal;
      }

    },
    normalizeFields () {
      if (typeof(this.fields) === 'undefined') {
        this.warn('You need to provide "fields" prop.')
        return
      }

      this.tableFields = []
      let self = this
      let obj
      this.fields.forEach(function(field, i) {
        if (typeof (field) === 'string') {
          obj = {
            name: field,
            title: self.setTitle(field),
            titleClass: '',
            dataClass: '',
            callback: null,
            visible: true,
          }
        } else {
          obj = {
            name: field.name,
            width: field.width,
            title: (field.title === undefined) ? self.setTitle(field.name) : field.title,
            sortField: field.sortField,
            titleClass: (field.titleClass === undefined) ? '' : field.titleClass,
            dataClass: (field.dataClass === undefined) ? '' : field.dataClass,
            callback: (field.callback === undefined) ? '' : field.callback,
            visible: (field.visible === undefined) ? true : field.visible,
          }
        }
        self.tableFields.push(obj)
      })
    },
    setData (data) {
      if (data === null || typeof(data) === 'undefined') return

      this.fireEvent('loading')

      if (Array.isArray(data)) {
        this.tableData = data
        this.fireEvent('loaded')
        return
      }

      this.tableData = this.getObjectValue(data, this.dataPath, null)
      this.tablePagination = this.getObjectValue(data, this.paginationPath, null)

      this.$nextTick(function() {
        this.fixHeader()
        this.fireEvent('pagination-data', this.tablePagination)
        this.fireEvent('loaded')
      })
    },
    setTitle (str) {
      if (this.isSpecialField(str)) {
        return ''
      }

      return this.titleCase(str)
    },
    getTitle (field) {
      if (typeof(field.title) === 'function') return field.title()

      return typeof(field.title) === 'undefined'
        ? field.name.replace('.', ' ')
        : field.title
    },
    renderTitle (field) {
      let title = this.getTitle(field)

      if (title.length > 0 && this.isInCurrentSortGroup(field) || this.hasSortableIcon(field)) {
        let style = `opacity:${this.sortIconOpacity(field)};position:relative;float:right`
        let iconTag = this.showSortIcons ? this.renderIconTag(['sort-icon', this.sortIcon(field)], `style="${style}"`) : ''
        return title + ' ' + iconTag
      }

      return title
    },
    renderSequence (index) {
      return this.tablePagination
        ? this.tablePagination.from + index
        : index
    },
    renderNormalField (field, item) {
      return this.hasCallback(field)
        ? this.callCallback(field, item)
        : this.getObjectValue(item, field.name, '')
    },
    isSpecialField (fieldName) {
      return fieldName.slice(0, 2) === '__'
    },
    titleCase (str) {
      return str.replace(/\w+/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    camelCase (str, delimiter = '_') {
      let self = this
      return str.split(delimiter).map(function(item) {
        return self.titleCase(item)
      }).join('')
    },
    notIn (str, arr) {
      return arr.indexOf(str) === -1
    },
    loadData (success = this.loadSuccess, failed = this.loadFailed) {
      if (this.isDataMode) {
        this.callDataManager()
        return
      }

      this.fireEvent('loading')

      this.httpOptions['params'] = this.getAppendParams( this.getAllQueryParams() )

      return this.fetch(this.apiUrl, this.httpOptions).then(
          success,
          failed
      ).catch(() => failed())
    },
    fetch (apiUrl, httpOptions) {
      return this.httpFetch
          ? this.httpFetch(apiUrl, httpOptions)
          : (axios__WEBPACK_IMPORTED_MODULE_0___default())[this.httpMethod](apiUrl, httpOptions)
    },
    loadSuccess (response) {
      this.fireEvent('load-success', response)

      let body = this.transform(response.data)

      this.tableData = this.getObjectValue(body, this.dataPath, null)
      this.tablePagination = this.getObjectValue(body, this.paginationPath, null)

      if (this.tablePagination === null) {
        this.warn('vuetable: pagination-path "' + this.paginationPath + '" not found. '
          + 'It looks like the data returned from the sever does not have pagination information '
          + "or you may have set it incorrectly.\n"
          + 'You can explicitly suppress this warning by setting pagination-path="".'
        )
      }

      this.$nextTick(function() {
        this.fixHeader()
        this.fireEvent('pagination-data', this.tablePagination)
        this.fireEvent('loaded')
      })
    },
    fixHeader() {
      if (!this.isFixedHeader) {
        return;
      }

      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0]
      if (elem != null) {
        if (elem.scrollHeight > elem.clientHeight) {
          this.scrollVisible = true;
        }
        else {
          this.scrollVisible = false;
        }
      }
    },
    loadFailed (response) {
      console.error('load-error', response)
      this.fireEvent('load-error', response)
      this.fireEvent('loaded')
    },
    transform (data) {
      let func = 'transform'

      if (this.parentFunctionExists(func)) {
          return this.$parent[func].call(this.$parent, data)
      }

      return data
    },
    parentFunctionExists (func) {
      return (func !== '' && typeof this.$parent[func] === 'function')
    },
    callParentFunction (func, args, defaultValue = null) {
      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, args)
      }

      return defaultValue
    },
    fireEvent (eventName, args) {
      this.$emit(this.eventPrefix + eventName, args)
    },
    warn (msg) {
      if (!this.silent) {
        console.warn(msg)
      }
    },
    getAllQueryParams () {
      let params = {}

      if (typeof(this.queryParams) === 'function') {
        params = this.queryParams(this.sortOrder, this.currentPage, this.perPage)
        return typeof(params) !== 'object' ? {} : params
      }

      params[this.queryParams.sort] = this.getSortParam()
      params[this.queryParams.page] = this.currentPage
      params[this.queryParams.perPage] = this.perPage

      return params
    },
    getSortParam () {
      if (!this.sortOrder || this.sortOrder.field == '') {
        return ''
      }

      if (typeof this.$parent['getSortParam'] === 'function') {
        return this.$parent['getSortParam'].call(this.$parent, this.sortOrder)
      }

      return this.getDefaultSortParam()
    },
    getDefaultSortParam () {
      let result = '';

      for (let i = 0; i < this.sortOrder.length; i++) {
        let fieldName = (typeof this.sortOrder[i].sortField === 'undefined')
          ? this.sortOrder[i].field
          : this.sortOrder[i].sortField;

        result += fieldName + '|' + this.sortOrder[i].direction + ((i+1) < this.sortOrder.length ? ',' : '');
      }
      return result;
    },
    getAppendParams (params) {
      for (let x in this.appendParams) {
        params[x] = this.appendParams[x]
      }

      return params
    },
    extractName (string) {
      return string.split(':')[0].trim()
    },
    extractArgs (string) {
      return string.split(':')[1]
    },
    isSortable (field) {
      return !(typeof field.sortField === 'undefined')
    },
    isInCurrentSortGroup (field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    hasSortableIcon (field) {
      return this.isSortable(field) && this.css.sortableIcon != ''
    },
    currentSortOrderPosition (field) {
      if ( ! this.isSortable(field)) {
        return false
      }

      for (let i = 0; i < this.sortOrder.length; i++) {
        if (this.fieldIsInSortOrderPosition(field, i)) {
          return i;
        }
      }

      return false;
    },
    fieldIsInSortOrderPosition (field, i) {
      return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField
    },
    orderBy (field, event) {
      if ( ! this.isSortable(field) ) return

      let key = this.multiSortKey.toLowerCase() + 'Key'

      if (this.multiSort && event[key]) { //adding column to multisort
        this.multiColumnSort(field)
      } else {
        //no multisort, or resetting sort
        this.singleColumnSort(field)
      }

      this.currentPage = 1    // reset page index
      if (this.apiMode || this.dataManager) {
        this.loadData()
      }
    },
    multiColumnSort (field) {
      let i = this.currentSortOrderPosition(field);

      if(i === false) { //this field is not in the sort array yet
        this.sortOrder.push({
          field: field.name,
          sortField: field.sortField,
          direction: 'asc'
        });
      } else { //this field is in the sort array, now we change its state
        if(this.sortOrder[i].direction === 'asc') {
          // switch direction
          this.sortOrder[i].direction = 'desc'
        } else {
          //remove sort condition
          this.sortOrder.splice(i, 1);
        }
      }
    },
    singleColumnSort (field) {
      if (this.sortOrder.length === 0) {
        this.clearSortOrder()
      }

      this.sortOrder.splice(1); //removes additional columns

      if (this.fieldIsInSortOrderPosition(field, 0)) {
        // change sort direction
        this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc'
      } else {
        // reset sort direction
        this.sortOrder[0].direction = 'asc'
      }
      this.sortOrder[0].field = field.name
      this.sortOrder[0].sortField = field.sortField
    },
    clearSortOrder () {
      this.sortOrder.push({
        field: '',
        sortField: '',
        direction: 'asc'
      });
    },
    sortClass (field) {
      let cls = ''
      let i = this.currentSortOrderPosition(field)

      if (i !== false) {
        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingClass : this.css.descendingClass
      }

      return cls
    },
    sortIcon (field) {
      let cls = this.css.sortableIcon
      let i = this.currentSortOrderPosition(field)

      if (i !== false) {
        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingIcon : this.css.descendingIcon
      }

      return cls;
    },
    sortIconOpacity (field) {
      /*
       * fields with stronger precedence have darker color
       *
       * if there are few fields, we go down by 0.3
       * ex. 2 fields are selected: 1.0, 0.7
       *
       * if there are more we go down evenly on the given spectrum
       * ex. 6 fields are selected: 1.0, 0.86, 0.72, 0.58, 0.44, 0.3
       */
      let max = 1.0,
          min = 0.3,
          step = 0.3

      let count = this.sortOrder.length;
      let current = this.currentSortOrderPosition(field)


      if(max - count * step < min) {
        step = (max - min) / (count-1)
      }

      let opacity = max - current * step

      return opacity
    },
    hasCallback (item) {
      return item.callback ? true : false
    },
    callCallback (field, item) {
      if ( ! this.hasCallback(field)) return

      if(typeof(field.callback) == 'function') {
       return field.callback(this.getObjectValue(item, field.name))
      }

      let args = field.callback.split('|')
      let func = args.shift()

      if (typeof this.$parent[func] === 'function') {
        let value = this.getObjectValue(item, field.name)

        return (args.length > 0)
          ? this.$parent[func].apply(this.$parent, [value].concat(args))
          : this.$parent[func].call(this.$parent, value)
      }

      return null
    },
    getObjectValue (object, path, defaultValue) {
      defaultValue = (typeof defaultValue === 'undefined') ? null : defaultValue

      let obj = object
      if (path.trim() != '') {
        let keys = path.split('.')
        keys.forEach(function(key) {
          if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {
            obj = obj[key]
          } else {
            obj = defaultValue
            return
          }
        })
      }
      return obj
    },
    toggleCheckbox (dataItem, fieldName, event) {
      let isChecked = event.target.checked
      let idColumn = this.trackBy

      if (dataItem[idColumn] === undefined) {
        this.warn('__checkbox field: The "'+this.trackBy+'" field does not exist! Make sure the field you specify in "track-by" prop does exist.')
        return
      }

      let key = dataItem[idColumn]
      if (isChecked) {
        this.selectId(key)
      } else {
        this.unselectId(key)
      }
      this.$emit('vuetable:checkbox-toggled', isChecked, dataItem)
    },
    selectId (key) {
      if ( ! this.isSelectedRow(key)) {
        this.selectedTo.push(key)
      }
    },
    unselectId (key) {
      this.selectedTo = this.selectedTo.filter(function(item) {
        return item !== key
      })
    },
    isSelectedRow (key) {
      return this.selectedTo.indexOf(key) >= 0
    },
    rowSelected (dataItem, fieldName){
      let idColumn = this.trackBy
      let key = dataItem[idColumn]

      return this.isSelectedRow(key)
    },
    checkCheckboxesState (fieldName) {
      if (! this.tableData) return

      let self = this
      let idColumn = this.trackBy
      let selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]'
      let els = document.querySelectorAll(selector)

      //fixed:document.querySelectorAll return the typeof nodeList not array
      if (els.forEach===undefined)
        els.forEach=function(cb){
          [].forEach.call(els, cb);
        }

      // count how many checkbox row in the current page has been checked
      let selected = this.tableData.filter(function(item) {
        return self.selectedTo.indexOf(item[idColumn]) >= 0
      })

      // count == 0, clear the checkbox
      if (selected.length <= 0) {
        els.forEach(function(el) {
          el.indeterminate = false
        })
        return false
      }
      // count > 0 and count < perPage, set checkbox state to 'indeterminate'
      else if (selected.length < this.perPage) {
        els.forEach(function(el) {
          el.indeterminate = true
        })
        return true
      }
      // count == perPage, set checkbox state to 'checked'
      else {
        els.forEach(function(el) {
          el.indeterminate = false
        })
        return true
      }
    },
    toggleAllCheckboxes (fieldName, event) {
      let self = this
      let isChecked = event.target.checked
      let idColumn = this.trackBy

      if (isChecked) {
        this.tableData.forEach(function(dataItem) {
          self.selectId(dataItem[idColumn])
        })
      } else {
        this.tableData.forEach(function(dataItem) {
          self.unselectId(dataItem[idColumn])
        })
      }
      this.$emit('vuetable:checkbox-toggled-all', isChecked)
    },
    gotoPreviousPage () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.loadData()
      }
    },
    gotoNextPage () {
      if (this.currentPage < this.tablePagination.last_page) {
        this.currentPage++
        this.loadData()
      }
    },
    gotoPage (page) {
      if (page != this.currentPage && (page > 0 && page <= this.tablePagination.last_page)) {
        this.currentPage = page
        this.loadData()
      }
    },
    isVisibleDetailRow (rowId) {
      return this.visibleDetailRows.indexOf( rowId ) >= 0
    },
    showDetailRow (rowId) {
      if (!this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.push(rowId)
      }
    },
    hideDetailRow (rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.splice(
          this.visibleDetailRows.indexOf(rowId),
          1
        )
      }
    },
    toggleDetailRow (rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.hideDetailRow(rowId)
      } else {
        this.showDetailRow(rowId)
      }
    },
    showField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = true
    },
    hideField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = false
    },
    toggleField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = ! this.tableFields[index].visible
    },
    renderIconTag (classes, options = '') {
      return typeof(this.css.renderIcon) === 'undefined'
        ? `<i class="${classes.join(' ')}" ${options}></i>`
        : this.css.renderIcon(classes, options)
    },
    makePagination (total = null, perPage = null, currentPage = null) {
      let pagination = {}
      total = total === null ? this.dataTotal : total
      perPage = perPage === null ? this.perPage : perPage
      currentPage = currentPage === null ? this.currentPage : currentPage

      return {
        'total': total,
        'per_page': perPage,
        'current_page': currentPage,
        'last_page': Math.ceil(total / perPage) || 0,
        'next_page_url': '',
        'prev_page_url': '',
        'from': (currentPage -1) * perPage +1,
        'to': Math.min(currentPage * perPage, total)
      }
    },
    normalizeSortOrder () {
      this.sortOrder.forEach(function(item) {
        item.sortField = item.sortField || item.field
      })
    },
    callDataManager () {
      if (this.dataManager === null && this.data === null) return

      if (Array.isArray(this.data)) {
        return this.setData(this.data)
      } 
      
      this.normalizeSortOrder()

      return this.setData(
        this.dataManager
          ? this.dataManager(this.sortOrder, this.makePagination())
          : this.data
      )
    },
    onRowClass (dataItem, index) {
      if (this.rowClassCallback !== '') {
        this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.')
        return
      }

      if (typeof(this.rowClass) === 'function') {
        return this.rowClass(dataItem, index)
      }

      return this.rowClass
    },
    onRowChanged (dataItem) {
      this.fireEvent('row-changed', dataItem)
      return true
    },
    onRowClicked (dataItem, event) {
      this.$emit(this.eventPrefix + 'row-clicked', dataItem, event)
      return true
    },
    onRowDoubleClicked (dataItem, event) {
      this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event)
    },
    onDetailRowClick (dataItem, event) {
      this.$emit(this.eventPrefix + 'detail-row-clicked', dataItem, event)
    },
    onCellClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event)
    },
    onCellDoubleClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event)
    },
    onCellRightClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-rightclicked', dataItem, field, event)
    },
    /*
     * API for externals
     */
    changePage (page) {
      if (page === 'prev') {
        this.gotoPreviousPage()
      } else if (page === 'next') {
        this.gotoNextPage()
      } else {
        this.gotoPage(page)
      }
    },
    reload () {
      return this.loadData()
    },
    refresh () {
      this.currentPage = 1
      return this.loadData()
    },
    resetData () {
      this.tableData = null
      this.tablePagination = null
      this.fireEvent('data-reset')
    }
  }, // end: methods
  watch: {
    'multiSort' (newVal, oldVal) {
      if (newVal === false && this.sortOrder.length > 1) {
        this.sortOrder.splice(1);
        this.loadData();
      }
    },
    'apiUrl'  (newVal, oldVal) {
      if(this.reactiveApiUrl && newVal !== oldVal)
        this.refresh()
    },
    'data' (newVal, oldVal) {
      this.setData(newVal)
    },
    'tableHeight' (newVal, oldVal) {
      this.fixHeader()
    }
  },
});


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationMixin.vue?vue&type=script&lang=js& */ "./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    css: {
      type: Object,
      default () {
        return {
          wrapperClass: 'ui right floated pagination menu',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item',
          linkClass: 'icon item',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: 'angle double left icon',
            prev: 'left chevron icon',
            next: 'right chevron icon',
            last: 'angle double right icon',
          }
        }
      }
    },
    onEachSide: {
      type: Number,
      default () {
        return 2
      }
    },
  },
  data: function() {
    return {
      eventPrefix: 'vuetable-pagination:',
      tablePagination: null
    }
  },
  computed: {
    totalPage () {
      return this.tablePagination === null
        ? 0
        : this.tablePagination.last_page
    },
    isOnFirstPage () {
      return this.tablePagination === null
        ? false
        : this.tablePagination.current_page === 1
    },
    isOnLastPage () {
      return this.tablePagination === null
        ? false
        : this.tablePagination.current_page === this.tablePagination.last_page
    },
    notEnoughPages () {
      return this.totalPage < (this.onEachSide * 2) + 4
    },
    windowSize () {
      return this.onEachSide * 2 +1;
    },
    windowStart () {
      if (!this.tablePagination || this.tablePagination.current_page <= this.onEachSide) {
        return 1
      } else if (this.tablePagination.current_page >= (this.totalPage - this.onEachSide)) {
        return this.totalPage - this.onEachSide*2
      }

      return this.tablePagination.current_page - this.onEachSide
    },
  },
  methods: {
    loadPage (page) {
      this.$emit(this.eventPrefix+'change-page', page)
    },
    isCurrentPage (page) {
      return page === this.tablePagination.current_page
    },
    setPaginationData (tablePagination) {
      this.tablePagination = tablePagination
    },
    resetData () {
      this.tablePagination = null
    }
  }
});


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

/***/ "./resources/js/Mobile/FilterMobile.vue":
/*!**********************************************!*\
  !*** ./resources/js/Mobile/FilterMobile.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterMobile_vue_vue_type_template_id_6aed340e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterMobile.vue?vue&type=template&id=6aed340e& */ "./resources/js/Mobile/FilterMobile.vue?vue&type=template&id=6aed340e&");
/* harmony import */ var _FilterMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterMobile.vue?vue&type=script&lang=js& */ "./resources/js/Mobile/FilterMobile.vue?vue&type=script&lang=js&");
/* harmony import */ var _FilterMobile_vue_vue_type_style_index_0_id_6aed340e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css& */ "./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilterMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterMobile_vue_vue_type_template_id_6aed340e___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilterMobile_vue_vue_type_template_id_6aed340e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Mobile/FilterMobile.vue"
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

/***/ "./resources/js/components/AvatarImage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AvatarImage.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AvatarImage_vue_vue_type_template_id_65945167_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarImage.vue?vue&type=template&id=65945167&scoped=true& */ "./resources/js/components/AvatarImage.vue?vue&type=template&id=65945167&scoped=true&");
/* harmony import */ var _AvatarImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarImage.vue?vue&type=script&lang=js& */ "./resources/js/components/AvatarImage.vue?vue&type=script&lang=js&");
/* harmony import */ var _AvatarImage_vue_vue_type_style_index_0_id_65945167_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true& */ "./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AvatarImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AvatarImage_vue_vue_type_template_id_65945167_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AvatarImage_vue_vue_type_template_id_65945167_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "65945167",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AvatarImage.vue"
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

/***/ "./resources/js/components/common/DataLoading.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/common/DataLoading.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataLoading_vue_vue_type_template_id_21eeb279_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataLoading.vue?vue&type=template&id=21eeb279&scoped=true& */ "./resources/js/components/common/DataLoading.vue?vue&type=template&id=21eeb279&scoped=true&");
/* harmony import */ var _DataLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataLoading.vue?vue&type=script&lang=js& */ "./resources/js/components/common/DataLoading.vue?vue&type=script&lang=js&");
/* harmony import */ var _DataLoading_vue_vue_type_style_index_0_id_21eeb279_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true& */ "./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataLoading_vue_vue_type_template_id_21eeb279_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DataLoading_vue_vue_type_template_id_21eeb279_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "21eeb279",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/DataLoading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/Pagination.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_3b0b08a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true& */ "./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _Pagination_vue_vue_type_style_index_0_id_3b0b08a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true& */ "./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_3b0b08a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pagination_vue_vue_type_template_id_3b0b08a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b0b08a3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/Pagination.vue"
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

/***/ "./resources/js/Mobile/FilterMobile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Mobile/FilterMobile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/AvatarImage.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AvatarImage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvatarImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/common/DataLoading.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/common/DataLoading.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataLoading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Mobile/FilterMobile.vue?vue&type=template&id=6aed340e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Mobile/FilterMobile.vue?vue&type=template&id=6aed340e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_template_id_6aed340e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_template_id_6aed340e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_template_id_6aed340e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterMobile.vue?vue&type=template&id=6aed340e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=template&id=6aed340e&");


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

/***/ "./resources/js/components/AvatarImage.vue?vue&type=template&id=65945167&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/AvatarImage.vue?vue&type=template&id=65945167&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_template_id_65945167_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_template_id_65945167_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_template_id_65945167_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvatarImage.vue?vue&type=template&id=65945167&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=template&id=65945167&scoped=true&");


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

/***/ "./resources/js/components/common/DataLoading.vue?vue&type=template&id=21eeb279&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/common/DataLoading.vue?vue&type=template&id=21eeb279&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_template_id_21eeb279_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_template_id_21eeb279_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_template_id_21eeb279_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataLoading.vue?vue&type=template&id=21eeb279&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=template&id=21eeb279&scoped=true&");


/***/ }),

/***/ "./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_3b0b08a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_3b0b08a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_3b0b08a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=template&id=3b0b08a3&scoped=true&");


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

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../vue-loader/lib/index.js??vue-loader-options!./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_62f5cecf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/Card.vue?vue&type=style&index=0&id=62f5cecf&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterMobile_vue_vue_type_style_index_0_id_6aed340e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/FilterMobile.vue?vue&type=style&index=0&id=6aed340e&lang=css&");


/***/ }),

/***/ "./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PMMessageResults_vue_vue_type_style_index_0_id_1b3004d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PMMessageResults.vue?vue&type=style&index=0&id=1b3004d2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarImage_vue_vue_type_style_index_0_id_65945167_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AvatarImage.vue?vue&type=style&index=0&id=65945167&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataLoading_vue_vue_type_style_index_0_id_21eeb279_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/DataLoading.vue?vue&type=style&index=0&id=21eeb279&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_3b0b08a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/Pagination.vue?vue&type=style&index=0&id=3b0b08a3&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/index.js??vue-loader-options!./Vuetable.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/index.js??vue-loader-options!./VuetablePaginationMixin.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/lib/index.js??vue-loader-options!./Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _vm.isFixedHeader
    ? _c("div", [
        _c("div", { staticClass: "vuetable-head-wrapper" }, [
          _c(
            "table",
            {
              class: ["vuetable", _vm.css.tableClass, _vm.css.tableHeaderClass],
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _vm._l(_vm.tableFields, function (field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "th",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-th-checkbox-" +
                                                _vm.trackBy,
                                              field.titleClass,
                                            ],
                                            style: { width: field.width },
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked:
                                                  _vm.checkCheckboxesState(
                                                    field.name
                                                  ),
                                              },
                                              on: {
                                                change: function ($event) {
                                                  return _vm.toggleAllCheckboxes(
                                                    field.name,
                                                    $event
                                                  )
                                                },
                                              },
                                            }),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__component"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-component-" +
                                              _vm.trackBy,
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) },
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            ),
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.orderBy(field, $event)
                                            },
                                          },
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__slot"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-slot-" +
                                              _vm.extractArgs(field.name),
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) },
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            ),
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.orderBy(field, $event)
                                            },
                                          },
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-sequence",
                                            field.titleClass || "",
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.notIn(_vm.extractName(field.name), [
                                      "__sequence",
                                      "__checkbox",
                                      "__component",
                                      "__slot",
                                    ])
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-" + field.name,
                                            field.titleClass || "",
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                : [
                                    _c("th", {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-" + field.name,
                                        field.titleClass,
                                        _vm.sortClass(field),
                                        { sortable: _vm.isSortable(field) },
                                      ],
                                      style: { width: field.width },
                                      attrs: { id: "_" + field.name },
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderTitle(field)
                                        ),
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.orderBy(field, $event)
                                        },
                                      },
                                    }),
                                  ],
                            ]
                          : _vm._e(),
                      ]
                    }),
                    _vm._v(" "),
                    _vm.scrollVisible
                      ? _c("th", {
                          staticClass: "vuetable-gutter-col",
                          style: { width: _vm.scrollBarWidth },
                        })
                      : _vm._e(),
                  ],
                  2
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "vuetable-body-wrapper",
            style: { height: _vm.tableHeight },
          },
          [
            _c(
              "table",
              {
                class: ["vuetable", _vm.css.tableClass, _vm.css.tableBodyClass],
              },
              [
                _c(
                  "colgroup",
                  [
                    _vm._l(_vm.tableFields, function (field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _c("col", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass,
                                ],
                                style: { width: field.width },
                                attrs: { id: "_col_" + field.name },
                              }),
                            ]
                          : _vm._e(),
                      ]
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "tbody",
                  { staticClass: "vuetable-body" },
                  [
                    _vm._l(_vm.tableData, function (item, itemIndex) {
                      return [
                        _c(
                          "tr",
                          {
                            key: itemIndex,
                            class: _vm.onRowClass(item, itemIndex),
                            attrs: {
                              "item-index": itemIndex,
                              render: _vm.onRowChanged(item),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.onRowClicked(item, $event)
                              },
                              dblclick: function ($event) {
                                return _vm.onRowDoubleClicked(item, $event)
                              },
                            },
                          },
                          [
                            _vm._l(
                              _vm.tableFields,
                              function (field, fieldIndex) {
                                return [
                                  field.visible
                                    ? [
                                        _vm.isSpecialField(field.name)
                                          ? [
                                              _vm.extractName(field.name) ==
                                              "__sequence"
                                                ? _c("td", {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-sequence",
                                                      field.dataClass,
                                                    ],
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.renderSequence(
                                                          itemIndex
                                                        )
                                                      ),
                                                    },
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.extractName(field.name) ==
                                              "__handle"
                                                ? _c("td", {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-handle",
                                                      field.dataClass,
                                                    ],
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.renderIconTag([
                                                          "handle-icon",
                                                          _vm.css.handleIcon,
                                                        ])
                                                      ),
                                                    },
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.extractName(field.name) ==
                                              "__checkbox"
                                                ? _c(
                                                    "td",
                                                    {
                                                      key: fieldIndex,
                                                      class: [
                                                        "vuetable-checkboxes",
                                                        field.dataClass,
                                                      ],
                                                    },
                                                    [
                                                      _c("input", {
                                                        attrs: {
                                                          type: "checkbox",
                                                        },
                                                        domProps: {
                                                          checked:
                                                            _vm.rowSelected(
                                                              item,
                                                              field.name
                                                            ),
                                                        },
                                                        on: {
                                                          change: function (
                                                            $event
                                                          ) {
                                                            return _vm.toggleCheckbox(
                                                              item,
                                                              field.name,
                                                              $event
                                                            )
                                                          },
                                                        },
                                                      }),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.extractName(field.name) ===
                                              "__component"
                                                ? _c(
                                                    "td",
                                                    {
                                                      key: fieldIndex,
                                                      class: [
                                                        "vuetable-component",
                                                        field.dataClass,
                                                      ],
                                                    },
                                                    [
                                                      _c(
                                                        _vm.extractArgs(
                                                          field.name
                                                        ),
                                                        {
                                                          tag: "component",
                                                          attrs: {
                                                            "row-data": item,
                                                            "row-index":
                                                              itemIndex,
                                                            "row-field":
                                                              field.sortField,
                                                          },
                                                        }
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.extractName(field.name) ===
                                              "__slot"
                                                ? _c(
                                                    "td",
                                                    {
                                                      key: fieldIndex,
                                                      class: [
                                                        "vuetable-slot",
                                                        field.dataClass,
                                                      ],
                                                    },
                                                    [
                                                      _vm._t(
                                                        _vm.extractArgs(
                                                          field.name
                                                        ),
                                                        null,
                                                        {
                                                          rowData: item,
                                                          rowIndex: itemIndex,
                                                          rowField:
                                                            field.sortField,
                                                        }
                                                      ),
                                                    ],
                                                    2
                                                  )
                                                : _vm._e(),
                                            ]
                                          : [
                                              _c("td", {
                                                key: fieldIndex,
                                                class: field.dataClass,
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.renderNormalField(
                                                      field,
                                                      item
                                                    )
                                                  ),
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.onCellClicked(
                                                      item,
                                                      field,
                                                      $event
                                                    )
                                                  },
                                                  dblclick: function ($event) {
                                                    return _vm.onCellDoubleClicked(
                                                      item,
                                                      field,
                                                      $event
                                                    )
                                                  },
                                                  contextmenu: function (
                                                    $event
                                                  ) {
                                                    return _vm.onCellRightClicked(
                                                      item,
                                                      field,
                                                      $event
                                                    )
                                                  },
                                                },
                                              }),
                                            ],
                                      ]
                                    : _vm._e(),
                                ]
                              }
                            ),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.useDetailRow
                          ? [
                              _c(
                                "transition",
                                {
                                  key: itemIndex,
                                  attrs: { name: _vm.detailRowTransition },
                                },
                                [
                                  _vm.isVisibleDetailRow(item[_vm.trackBy])
                                    ? _c(
                                        "tr",
                                        {
                                          class: [_vm.css.detailRowClass],
                                          on: {
                                            click: function ($event) {
                                              return _vm.onDetailRowClick(
                                                item,
                                                $event
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "td",
                                            {
                                              attrs: {
                                                colspan: _vm.countVisibleFields,
                                              },
                                            },
                                            [
                                              _c(_vm.detailRowComponent, {
                                                tag: "component",
                                                attrs: {
                                                  "row-data": item,
                                                  "row-index": itemIndex,
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]
                              ),
                            ]
                          : _vm._e(),
                      ]
                    }),
                    _vm._v(" "),
                    _vm.displayEmptyDataRow
                      ? [
                          _c("tr", [
                            _c("td", {
                              staticClass: "vuetable-empty-result",
                              attrs: { colspan: _vm.countVisibleFields },
                              domProps: {
                                innerHTML: _vm._s(_vm.noDataTemplate),
                              },
                            }),
                          ]),
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.lessThanMinRows
                      ? _vm._l(_vm.blankRows, function (i) {
                          return _c(
                            "tr",
                            { key: i, staticClass: "blank-row" },
                            [
                              _vm._l(
                                _vm.tableFields,
                                function (field, fieldIndex) {
                                  return [
                                    field.visible
                                      ? _c("td", { key: fieldIndex }, [
                                          _vm._v(" "),
                                        ])
                                      : _vm._e(),
                                  ]
                                }
                              ),
                            ],
                            2
                          )
                        })
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            ),
          ]
        ),
      ])
    : _c("table", { class: ["vuetable", _vm.css.tableClass] }, [
        _c("thead", [
          _c(
            "tr",
            [
              _vm._l(_vm.tableFields, function (field, fieldIndex) {
                return [
                  field.visible
                    ? [
                        _vm.isSpecialField(field.name)
                          ? [
                              _vm.extractName(field.name) == "__checkbox"
                                ? _c(
                                    "th",
                                    {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-checkbox-" + _vm.trackBy,
                                        field.titleClass,
                                      ],
                                      style: { width: field.width },
                                    },
                                    [
                                      _c("input", {
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.checkCheckboxesState(
                                            field.name
                                          ),
                                        },
                                        on: {
                                          change: function ($event) {
                                            return _vm.toggleAllCheckboxes(
                                              field.name,
                                              $event
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__component"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-component-" + _vm.trackBy,
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) },
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field)),
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.orderBy(field, $event)
                                      },
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__slot"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-slot-" +
                                        _vm.extractArgs(field.name),
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) },
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field)),
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.orderBy(field, $event)
                                      },
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__sequence"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-sequence",
                                      field.titleClass || "",
                                      _vm.sortClass(field),
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field)),
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.notIn(_vm.extractName(field.name), [
                                "__sequence",
                                "__checkbox",
                                "__component",
                                "__slot",
                              ])
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-" + field.name,
                                      field.titleClass || "",
                                      _vm.sortClass(field),
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field)),
                                    },
                                  })
                                : _vm._e(),
                            ]
                          : [
                              _c("th", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass,
                                  _vm.sortClass(field),
                                  { sortable: _vm.isSortable(field) },
                                ],
                                style: { width: field.width },
                                attrs: { id: "_" + field.name },
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field)),
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.orderBy(field, $event)
                                  },
                                },
                              }),
                            ],
                      ]
                    : _vm._e(),
                ]
              }),
            ],
            2
          ),
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          { staticClass: "vuetable-body" },
          [
            _vm._l(_vm.tableData, function (item, itemIndex) {
              return [
                _c(
                  "tr",
                  {
                    key: itemIndex,
                    class: _vm.onRowClass(item, itemIndex),
                    attrs: {
                      "item-index": itemIndex,
                      render: _vm.onRowChanged(item),
                    },
                    on: {
                      dblclick: function ($event) {
                        return _vm.onRowDoubleClicked(item, $event)
                      },
                      click: function ($event) {
                        return _vm.onRowClicked(item, $event)
                      },
                    },
                  },
                  [
                    _vm._l(_vm.tableFields, function (field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-sequence",
                                            field.dataClass,
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderSequence(itemIndex)
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__handle"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-handle",
                                            field.dataClass,
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderIconTag([
                                                "handle-icon",
                                                _vm.css.handleIcon,
                                              ])
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-checkboxes",
                                              field.dataClass,
                                            ],
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.rowSelected(
                                                  item,
                                                  field.name
                                                ),
                                              },
                                              on: {
                                                change: function ($event) {
                                                  return _vm.toggleCheckbox(
                                                    item,
                                                    field.name,
                                                    $event
                                                  )
                                                },
                                              },
                                            }),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) ===
                                    "__component"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-component",
                                              field.dataClass,
                                            ],
                                          },
                                          [
                                            _c(_vm.extractArgs(field.name), {
                                              tag: "component",
                                              attrs: {
                                                "row-data": item,
                                                "row-index": itemIndex,
                                                "row-field": field.sortField,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) === "__slot"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-slot",
                                              field.dataClass,
                                            ],
                                          },
                                          [
                                            _vm._t(
                                              _vm.extractArgs(field.name),
                                              null,
                                              {
                                                rowData: item,
                                                rowIndex: itemIndex,
                                                rowField: field.sortField,
                                              }
                                            ),
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                  ]
                                : [
                                    _vm.hasCallback(field)
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.callCallback(field, item)
                                            ),
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function ($event) {
                                              return _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function ($event) {
                                              return _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                          },
                                        })
                                      : _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.getObjectValue(
                                                item,
                                                field.name,
                                                ""
                                              )
                                            ),
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function ($event) {
                                              return _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function ($event) {
                                              return _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                          },
                                        }),
                                  ],
                            ]
                          : _vm._e(),
                      ]
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.useDetailRow
                  ? [
                      _c(
                        "transition",
                        {
                          key: itemIndex,
                          attrs: { name: _vm.detailRowTransition },
                        },
                        [
                          _vm.isVisibleDetailRow(item[_vm.trackBy])
                            ? _c(
                                "tr",
                                {
                                  class: [_vm.css.detailRowClass],
                                  on: {
                                    click: function ($event) {
                                      return _vm.onDetailRowClick(item, $event)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      attrs: {
                                        colspan: _vm.countVisibleFields,
                                      },
                                    },
                                    [
                                      _c(_vm.detailRowComponent, {
                                        tag: "component",
                                        attrs: {
                                          "row-data": item,
                                          "row-index": itemIndex,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                    ]
                  : _vm._e(),
              ]
            }),
            _vm._v(" "),
            _vm.displayEmptyDataRow
              ? [
                  _c("tr", [
                    _c("td", {
                      staticClass: "vuetable-empty-result",
                      attrs: { colspan: _vm.countVisibleFields },
                      domProps: { innerHTML: _vm._s(_vm.noDataTemplate) },
                    }),
                  ]),
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.lessThanMinRows
              ? _vm._l(_vm.blankRows, function (i) {
                  return _c(
                    "tr",
                    { key: i, staticClass: "blank-row" },
                    [
                      _vm._l(_vm.tableFields, function (field, fieldIndex) {
                        return [
                          field.visible
                            ? _c("td", { key: fieldIndex }, [_vm._v(" ")])
                            : _vm._e(),
                        ]
                      }),
                    ],
                    2
                  )
                })
              : _vm._e(),
          ],
          2
        ),
      ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vue-vendor"], () => (__webpack_exec__("./resources/js/tasks/mobile.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);