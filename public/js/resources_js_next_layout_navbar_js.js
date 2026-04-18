(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_next_layout_navbar_js"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["username"],
  data: function data() {
    return {};
  },
  methods: {
    hideModal: function hideModal() {
      this.$cookies.set("firstMounted", false);
      $("#welcomeModal").modal("hide");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "message", "variant", "callback", "show", "size", "dataTestClose", "dataTestOk"],
  data: function data() {
    return {
      'classMessage': '',
      'classButtonCancel': '',
      'classButtonConfirm': '',
      'showModal': false
    };
  },
  watch: {
    variant: function variant(value) {
      this.styles();
    },
    show: function show(value) {
      this.showModal = value;
    }
  },
  methods: {
    styles: function styles() {
      this.classMessage = '';
      this.classButtonCancel = 'btn btn-outline-success btn-sm text-uppercase';
      this.classButtonConfirm = 'btn btn-success btn-sm text-uppercase';
      if (this.variant) {
        this.classMessage += ' text-' + this.variant;
        this.classButtonCancel += ' btn-outline-' + this.variant;
        this.classButtonConfirm += ' btn-' + this.variant;
      }
    },
    onClose: function onClose() {
      this.$emit('close');
    },
    onConfirm: function onConfirm() {
      this.$emit("confirm", true);
      if (this.callback) {
        this.callback();
      }
      this.onClose();
    },
    onDeny: function onDeny() {
      this.$emit("confirm", false);
      this.onClose();
    }
  },
  mounted: function mounted() {
    this.$emit("show");
    this.styles();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    environment: {
      type: Object,
      "default": function _default() {}
    },
    renderTop: {
      type: Boolean,
      "default": false
    },
    initialNewItems: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    toolbarDisabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      changeItems: {},
      newItems: this.initialNewItems,
      sectionRight: true,
      items: [],
      selectedLanguage: "es"
    };
  },
  computed: {
    rightMenus: function rightMenus() {
      return this.renderTop ? this.section.rightTop : this.section.right;
    },
    section: function section() {
      var _this = this;
      var response = {};
      response.left = [];
      response.right = [];
      response.rightTop = [];
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.items = [];
      this.options.forEach(function (item) {
        if (item.type === "group") {
          item.items.forEach(function (sub) {
            _this.items.push(sub.id);
            return Object.assign(sub, _this.changeItems[sub.id]);
          });
        }
        response[item.section].push(Object.assign(item, _this.changeItems[item.id]));
        _this.items.push(item.id);
      });
      this.newItems.forEach(function (item) {
        if (_this.items.indexOf(item.id) === -1) {
          response[item.section].push(item);
          _this.items.push(item.id);
        }
      });
      return response;
    }
  },
  methods: {
    handleNavigate: function handleNavigate(action) {
      switch (action === null || action === void 0 ? void 0 : action.value) {
        case "discard-draft":
          window.ProcessMaker.EventBus.$emit("open-versions-discard-modal");
          break;
        case "create-template":
          window.ProcessMaker.EventBus.$emit("show-create-template-modal");
          break;
        default:
          if (action.action) {
            this.executeFunction(action.action);
          }
          break;
      }
    },
    executeFunction: function executeFunction(callback) {
      if (typeof callback === "function") {
        callback();
      } else {
        // eslint-disable-next-line no-eval
        eval("this.environment.".concat(callback));
      }
    },
    visibleItems: function visibleItems(item) {
      return item.items.filter(function (button) {
        return button.hide !== true;
      });
    },
    isVisible: function isVisible(item, type) {
      if (item.type === type && item.hide !== true) {
        if (item.displayCondition) {
          // eslint-disable-next-line no-eval
          return eval("this.environment.".concat(item.displayCondition));
        }
        return true;
      }
      return false;
    },
    changeItem: function changeItem(id, value) {
      this.changeItems[id] = value;
      this.changeOptions(this.section.left);
      this.changeOptions(this.section.right);
    },
    changeOptions: function changeOptions(data) {
      var _this2 = this;
      data.forEach(function (item) {
        var newItem = Object.assign(item, _this2.changeItems[item.id]);
        if (newItem.type === "group") {
          _this2.changeOptions(newItem.items);
        }
      });
    },
    addItem: function addItem(value) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return index !== null ? this.newItems.splice(index, 0, value) : this.newItems.push(value);
    },
    removeItem: function removeItem(idToRemove) {
      var indexToRemove = this.newItems.findIndex(function (element) {
        return element.id === idToRemove;
      });
      if (indexToRemove !== -1) {
        this.newItems.splice(indexToRemove, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "message", "variant", "callback", "show"],
  data: function data() {
    return {
      'classMessage': '',
      'classButtonCancel': '',
      'classButtonConfirm': '',
      'showModal': false
    };
  },
  watch: {
    variant: function variant(value) {
      this.styles();
    },
    show: function show(value) {
      this.showModal = value;
    }
  },
  methods: {
    styles: function styles() {
      this.classMessage = '';
      this.classButtonCancel = 'btn btn-outline-success btn-sm text-uppercase';
      this.classButtonConfirm = 'btn btn-success btn-sm text-uppercase';
      if (this.variant) {
        this.classMessage += ' text-' + this.variant;
        this.classButtonCancel += ' btn-outline-' + this.variant;
        this.classButtonConfirm += ' btn-' + this.variant;
      }
    },
    onClose: function onClose() {
      if (this.callback) {
        this.callback();
      }
    }
  },
  mounted: function mounted() {
    this.$emit("show");
    this.styles();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_croppie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-croppie */ "./node_modules/vue-croppie/index.js");
/* harmony import */ var vue_croppie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_croppie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AvatarImage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarImage.vue */ "./resources/js/components/AvatarImage.vue");



vue__WEBPACK_IMPORTED_MODULE_2__["default"].component("AvatarImage", _AvatarImage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].use((vue_croppie__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    info: {
      type: Object,
      required: true
    },
    permissions: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      sourceImage: false,
      fullName: null,
      username: null,
      user_id: null,
      popoverShow: true,
      information: []
    };
  },
  computed: {
    displayMyFilesLink: function displayMyFilesLink() {
      return window.ProcessMaker.packages.includes("package-files");
    },
    viewProfileText: function viewProfileText() {
      return this.$t("View {{user}} Profile", {
        user: this.username
      });
    },
    editProfileText: function editProfileText() {
      return this.$t("Edit {{user}} Profile", {
        user: this.username
      });
    }
  },
  mounted: function mounted() {
    this.formatData(this.info);
    window.ProcessMaker.events.$on("update-profile-avatar", this.updateAvatar);
  },
  methods: {
    // eslint-disable-next-line no-underscore-dangle
    __: function (_) {
      function __(_x) {
        return _.apply(this, arguments);
      }
      __.toString = function () {
        return _.toString();
      };
      return __;
    }(function (variable) {
      // eslint-disable-next-line no-undef
      return __(variable);
    }),
    onClose: function onClose() {
      this.popoverShow = false;
    },
    onShown: function onShown() {
      this.$refs.userMenuButton.expanded(true);
    },
    onHidden: function onHidden() {
      this.$refs.userMenuButton.expanded(false);
    },
    formatData: function formatData(user) {
      if (user.avatar) {
        this.sourceImage = true;
      }
      this.fullName = user.fullname;
      this.user_id = "/profile/".concat(user.id);
      this.username = user.username;
      this.information = [{
        id: "#",
        tooltip: user.fullname,
        src: user.avatar ? "".concat(user.avatar, "?").concat(new Date().getTime()) : user.avatar,
        title: "",
        initials: user.firstname && user.lastname ? user.firstname.match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0] + user.lastname.match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0] : ""
      }];
    },
    updateAvatar: function updateAvatar() {
      var _this = this;
      ProcessMaker.apiClient.get("users/".concat(window.ProcessMaker.user.id)).then(function (response) {
        _this.formatData(response.data);
      });
    },
    getTarget: function getTarget() {
      return this.$refs.userMenuButton.getTarget();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/card.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/card.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/tooltip/index.js");
/* harmony import */ var vue_uniq_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-uniq-ids */ "./node_modules/vue-uniq-ids/index.js");


var uniqIdsMixin = (0,vue_uniq_ids__WEBPACK_IMPORTED_MODULE_0__.createUniqIdsMixin)();
Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__.TooltipPlugin);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [uniqIdsMixin],
  props: ["name", "description", "filter", "id", "process"],
  data: function data() {
    return {
      disabled: false,
      spin: 0,
      showtip: true,
      showdetail: false
    };
  },
  methods: {
    newRequestLink: function newRequestLink(process, event) {
      var _this = this;
      if (this.disabled) return;
      this.disabled = true;
      ProcessMaker.EventBus.$emit("start-request");

      // Start a process
      this.spin = process.id + "." + event.id;
      var startEventId = event.id;
      window.ProcessMaker.apiClient.post("/process_events/" + this.process.id + "?event=" + startEventId).then(function (response) {
        _this.spin = 0;
        var instance = response.data;
        var url = '/requests';
        if (_this.$cookies.get("isMobile") === "true") {
          url = '/requests/mobile';
        }
        window.location = "".concat(url, "/").concat(instance.id, "?fromTriggerStartEvent=");
      })["catch"](function (err) {
        _this.disabled = false;
        var data = err.response.data;
        if (data.message) {
          ProcessMaker.alert(data.message, 'danger');
        }
      });
    },
    showRequestDetails: function showRequestDetails(id) {
      if (this.showdetail === false) {
        this.showdetail = true;
      } else {
        this.showdetail = false;
      }
    },
    getNewRequestLinkHref: function getNewRequestLinkHref(process, event) {
      var id = process.id;
      var startEventId = event.id;
      return "/process_events/" + id + "?event=" + startEventId;
    },
    getComputedId: function getComputedId(process) {
      return "process-".concat(process.id);
    }
  },
  computed: {
    ariaHidden: function ariaHidden() {
      return this.showdetail ? 'false' : 'true';
    },
    ariaExpanded: function ariaExpanded() {
      return this.showdetail ? 'true' : 'false';
    },
    emptyStartEvents: function emptyStartEvents() {
      return this.process.startEvents.filter(function (event) {
        return !event.eventDefinitions || event.eventDefinitions.length === 0;
      });
    },
    transformedName: function transformedName() {
      return this.process.name.replace(new RegExp(this.filter, "gi"), function (match) {
        return match;
      });
    },
    truncatedDescription: function truncatedDescription() {
      if (!this.process.description) {
        return '<span class="text-primary"></span>';
      }
      var result = "";
      var container = this.$refs.description;
      var wordArray = this.process.description.split(" ");

      // Number of maximum characters we want for our description
      var maxLength = 100;
      var word = null;
      while (word = wordArray.shift()) {
        if (result.length + word.length + 1 <= maxLength) {
          result = result + " " + word;
        }
      }
      return result.replace(new RegExp(this.filter, "gi"), function (match) {
        return '<span class="text-primary">' + match + "</span>";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _requestModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestModal.vue */ "./resources/js/components/requests/requestModal.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "new-request-modal": _requestModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    permission: Array,
    url: ""
  },
  data: function data() {
    return {};
  },
  methods: {
    hasEmptyStartEvents: function hasEmptyStartEvents(process) {
      return !!process.events.find(function (event) {
        return !event.eventDefinitions || event.eventDefinitions.length === 0;
      });
    },
    showRequestModal: function showRequestModal() {
      this.$refs.requestModal.showModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modalMobile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modalMobile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _requestModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestModal.vue */ "./resources/js/components/requests/requestModal.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "new-request-modal": _requestModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    permission: Array,
    url: ""
  },
  data: function data() {
    return {};
  },
  methods: {
    showRequestModal: function showRequestModal() {
      // Perform initial load of requests from backend
      this.$refs.requestModal.showModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue */ "./resources/js/components/requests/card.vue");
/* harmony import */ var _common_mixins_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/mixins/datatable */ "./resources/js/components/common/mixins/datatable.js");
/* harmony import */ var _common_ProgressLoader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ProgressLoader.vue */ "./resources/js/components/common/ProgressLoader.vue");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "process-card": _card_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "progress-loader": _common_ProgressLoader_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_common_mixins_datatable__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    permission: Array,
    url: "",
    size: ""
  },
  data: function data() {
    return {
      filter: "",
      loading: false,
      error: false,
      loaded: false,
      processes: {},
      startingRequest: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    ProcessMaker.EventBus.$on("start-request", function () {
      _this.startingRequest = true;
    });
  },
  methods: {
    hasEmptyStartEvents: function hasEmptyStartEvents(process) {
      return !!process.events.find(function (event) {
        return !event.eventDefinitions || event.eventDefinitions.length === 0;
      });
    },
    showModal: function showModal() {
      this.loaded = true;
      // Perform initial load of requests from backend
      this.$refs.requestModalAdd.show();
      this.fetch();
    },
    // Overwrite handler to change the page based on events fired
    onPageChange: function onPageChange(page) {
      if (page === "next") {
        this.page += 1;
      } else if (page === "prev") {
        this.page -= 1;
      } else {
        this.page = page;
      }
      if (this.page <= 0) {
        this.page = 1;
      }
      if (this.page > this.$refs.listProcess.tablePagination.last_page) {
        this.page = this.$refs.listProcess.tablePagination.last_page;
      }
      this.fetch();
    },
    fetch: function fetch() {
      var _this2 = this;
      if (!this.loaded) {
        return;
      }
      this.loading = true;
      // Now call our api
      window.ProcessMaker.apiClient.get("start_processes?page=".concat(this.page, "&per_page=").concat(this.perPage, "&filter=").concat(this.filter, "&order_by=category.name,name") + "&order_direction=asc,asc" + "&include=events,categories" + "&without_event_definitions=true").then(function (response) {
        var data = response.data;
        // Empty processes
        _this2.processes = {};
        // Now populate our processes array with data for rendering
        _this2.populate(data.data);
        // Do initial filter
        _this2.loading = false;
        // Set data in paginate
        data.meta.from -= 1;
        _this2.$refs.listProcess.data = data;
        _this2.$refs.listProcess.setPaginationData(data.meta);
      })["catch"](function () {
        _this2.loading = false;
        _this2.error = true;
      });
    },
    populate: function populate(data) {
      // Each element in data represents an individual process
      // We need to pull out the category name, and if it's available in our processes, append it there
      // if not, create the category in our processes array and then append it
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var process = _step.value;
          var _iterator2 = _createForOfIteratorHelper(process.categories),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var category = _step2.value;
              // Now determine if we have it defined in our processes list
              if (typeof this.processes[category.name] === "undefined") {
                // Create it
                this.processes[category.name] = [];
              }
              // Now append
              this.processes[category.name].push(process);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notifications_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notifications-mixin */ "./resources/js/notifications/notifications-mixin.js");
/* harmony import */ var _notification_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-user */ "./resources/js/notifications/components/notification-user.vue");
/* harmony import */ var _notification_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-message */ "./resources/js/notifications/components/notification-message.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NotificationUser: _notification_user__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationMessage: _notification_message__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_notifications_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    notification: {
      type: Object,
      required: true
    },
    showTime: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    url: function url() {
      var _this$notification$da;
      return (_this$notification$da = this.notification.data) === null || _this$notification$da === void 0 ? void 0 : _this$notification$da.url;
    },
    isComment: function isComment() {
      return this.data.type === "COMMENT";
    }
  },
  methods: {
    touchStart: function touchStart() {
      if (this.url) {
        window.location.href = this.url;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notifications_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notifications-mixin */ "./resources/js/notifications/notifications-mixin.js");
/* harmony import */ var _notification_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-user */ "./resources/js/notifications/components/notification-user.vue");
/* harmony import */ var _notification_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-message */ "./resources/js/notifications/components/notification-message.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NotificationUser: _notification_user__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationMessage: _notification_message__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_notifications_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    notification: {
      type: Object,
      required: true
    },
    showTime: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    url: function url() {
      var _this$notification$da;
      return (_this$notification$da = this.notification.data) === null || _this$notification$da === void 0 ? void 0 : _this$notification$da.url;
    },
    isComment: function isComment() {
      return this.data.type === "COMMENT";
    }
  },
  methods: {
    click: function click() {
      if (this.url) {
        window.location.href = this.url;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-time */ "./resources/js/notifications/components/notification-time.vue");
/* harmony import */ var _notifications_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications-mixin */ "./resources/js/notifications/notifications-mixin.js");
/* harmony import */ var _notification_inbox_rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-inbox-rule */ "./resources/js/notifications/components/notification-inbox-rule.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NotificationTime: _notification_time__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationInboxRule: _notification_inbox_rule__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_notifications_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    notification: {
      type: Object,
      required: true
    },
    showTime: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isMobile: false
    };
  },
  computed: {
    messages: function messages() {
      var _window$Processmaker;
      return ((_window$Processmaker = window.Processmaker) === null || _window$Processmaker === void 0 ? void 0 : _window$Processmaker.notificationMessages) || {};
    },
    message: function message() {
      if (this.isInboxRule) {
        return this.$t('Inbox rules <strong>handled {{ruleCount}} tasks</strong> since your last login', {
          ruleCount: this.ruleCount
        });
      }
      var message = this.messages[this.data.type] || this.messages[this.notification.type] || this.data.message;
      return this.$t(message, this.bindings);
    },
    bindings: function bindings() {
      return {
        user: "<strong>".concat(this.displayUser, "</strong>"),
        subject: "<strong>".concat(this.displaySubject, "</strong>"),
        processName: "<strong>".concat(this.data.processName || this.$t("Unknown Process"), "</strong>"),
        due: "<strong>".concat(this.data.due_at ? moment__WEBPACK_IMPORTED_MODULE_0___default()(this.data.due_at).format() : null, "</strong>")
      };
    },
    displaySubject: function displaySubject() {
      return this.data.name || this.data.processName || "";
    },
    displayBubble: function displayBubble() {
      switch (this.data.type) {
        case "COMMENT":
          return this.data.message.substring(0, 200);
      }
    },
    ruleCount: function ruleCount() {
      var _this$data$message;
      return (_this$data$message = this.data.message) === null || _this$data$message === void 0 ? void 0 : _this$data$message.total;
    }
  },
  mounted: function mounted() {
    this.isMobile = window.innerWidth < 768;
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-time.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-time.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    time: function time() {
      return this.notification.created_at;
    },
    formatDate: function formatDate() {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var dateObj = new Date(this.time);
      var currentDate = new Date();
      if (dateObj.getDate() === currentDate.getDate() && dateObj.getMonth() === currentDate.getMonth() && dateObj.getFullYear() === currentDate.getFullYear()) {
        var hours = dateObj.getHours();
        var minutes = dateObj.getMinutes();
        return "".concat(hours, ":").concat(minutes);
      }
      var month = dateObj.getMonth();
      var day = dateObj.getDate();
      var formattedMonth = months[month];
      return "".concat(formattedMonth, " ").concat(day);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notifications_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notifications-mixin */ "./resources/js/notifications/notifications-mixin.js");
/* harmony import */ var _components_AvatarImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AvatarImage */ "./resources/js/components/AvatarImage.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AvatarImage: _components_AvatarImage__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_notifications_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    notification: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/popover/index.js");
/* harmony import */ var _notification_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-card.vue */ "./resources/js/notifications/components/notification-card.vue");
/* harmony import */ var _notification_item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-item.vue */ "./resources/js/notifications/components/notification-item.vue");
/* harmony import */ var _notifications_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications-mixin */ "./resources/js/notifications/notifications-mixin.js");




Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__.PopoverPlugin);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NotificationItem: _notification_item_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationCard: _notification_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_notifications_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    messages: Array
  },
  data: function data() {
    return {
      isOpen: false,
      totalMessages: 0,
      incrementTotalMessages: false,
      arrowStyle: {
        top: "0px",
        left: "0px"
      },
      filterComments: null,
      reloadOnClose: false,
      shouldShowPopover: false,
      shouldShowMobilePopover: false
    };
  },
  computed: {
    ariaLabel: function ariaLabel() {
      var count = this.totalMessages;
      if (count === 0) {
        return this.$t("Notifications, No New Messages", {
          count: count
        });
      } else if (count === 1) {
        return this.$t("Notifications, {{count}} New Messages", {
          count: count
        });
      }
      return this.$t("Notifications, {{count}} New Messages", {
        count: count
      });
    },
    buttonVariant: function buttonVariant() {
      if (this.isOpen) {
        return "primary";
      }
      if (this.hasMessages) {
        return "notification-btn-warning";
      }
      return "link";
    },
    hasMessages: function hasMessages() {
      return this.totalMessages > 0;
    },
    displayTotalCount: function displayTotalCount() {
      return this.totalMessages > 10 ? "10+" : this.totalMessages;
    }
  },
  watch: {
    messages: function messages(value, mutation) {
      // update the number of messages just whe the number has been initialized (in mounted)
      if (this.incrementTotalMessages) {
        this.updateTotalMessages();
        $(this.$el).find(".dropdown").dropdown("toggle");
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
    if ($("#navbar-request-button").length > 0) {
      this.arrowStyle.top = "".concat($("#navbar-request-button").offset().top + 45, "px");
      this.arrowStyle.left = "".concat($("#navbar-request-button").offset().left + 53, "px");
      window.addEventListener("resize", function () {
        _this.arrowStyle.top = "".concat($("#navbar-request-button").offset().top + 42, "px");
        _this.arrowStyle.left = "".concat($("#navbar-request-button").offset().left + 32, "px");
      });
    }
    this.updateTotalMessages();
  },
  methods: {
    checkScreenWidth: function checkScreenWidth() {
      var mobileScreenWidth = 768;
      this.shouldShowPopover = window.innerWidth > mobileScreenWidth;
      this.shouldShowMobilePopover = window.innerWidth < mobileScreenWidth;
    },
    onShown: function onShown() {
      this.isOpen = true;
      this.markAsRead();
    },
    onHidden: function onHidden() {
      this.isOpen = false;
      this.filterComments = null;
      if (this.reloadOnClose) {
        this.updateTotalMessages();
      }
    },
    icon: function icon(task) {
      return ProcessMaker.$notifications.icons[task.type];
    },
    url: function url(task) {
      if (task.url) {
        return task.url;
      }
      return "/notifications";
    },
    updateTotalMessages: function updateTotalMessages() {
      var _this2 = this;
      this.incrementTotalMessages = false;
      ProcessMaker.apiClient.get("/notifications?per_page=10&filter=unread&include=user").then(function (response) {
        ProcessMaker.notifications.splice(0);
        response.data.data.forEach(function (element) {
          ProcessMaker.pushNotification(element);
        });
        _this2.totalMessages = response.data.meta.total;
        _this2.$nextTick(function () {
          _this2.incrementTotalMessages = true;
        });
      });
    },
    markAsRead: function markAsRead() {
      if (!this.hasMessages) {
        return;
      }
      var messageIds = this.messages.map(function (m) {
        return m.id;
      });
      window.ProcessMaker.apiClient.put("/read_notifications", {
        message_ids: messageIds,
        routes: []
      });
      this.reloadOnClose = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "welcomeModal",
      tabindex: "-1",
      role: "dialog"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-body justify-content-center"
  }, [_c("h3", {
    staticClass: "mt-3 font-weight-bold text-center"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Welcome")) + " " + _vm._s(_vm.username) + "\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "text-center px-5"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Check out your tasks and requests on your phone.")) + "\n        ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('To switch back to the previous interface, use "Switch to Desktop View" in the user menu.')) + "\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary w-100",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Got it!")) + "\n        ")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "text-center"
  }, [_c("img", {
    staticClass: "image",
    attrs: {
      src: "/img/welcome_mobile.svg",
      alt: "recent projects"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      "dialog-class": "top-20",
      title: _vm.title,
      size: _vm.size ? _vm.size : "md"
    },
    on: {
      hide: _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn() {
        return [_c("b-button", {
          staticClass: "m-0",
          attrs: {
            variant: "outline-secondary",
            "data-test": _vm.dataTestClose
          },
          on: {
            click: _vm.onDeny
          }
        }, [_vm._v("Cancel")]), _vm._v(" "), _c("b-button", {
          staticClass: "m-0",
          attrs: {
            "data-test": _vm.dataTestOk
          },
          on: {
            click: _vm.onConfirm
          }
        }, [_vm._v("Confirm")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_c("div", {
    staticClass: "my-3",
    "class": _vm.classMessage,
    domProps: {
      innerHTML: _vm._s(_vm.message)
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-header", [_c("b-row", [!_vm.renderTop ? _c("b-col", [_vm._l(_vm.section.left, function (item, index) {
    return [_vm.isVisible(item, "group") ? _c("b-button-group", {
      key: index,
      attrs: {
        size: "sm"
      }
    }, _vm._l(_vm.visibleItems(item), function (button, indexButton) {
      return _c("b-button", {
        key: indexButton,
        staticClass: "text-capitalize",
        attrs: {
          variant: button.variant || "secondary",
          title: button.title,
          "data-cy": "toolbar-".concat(button.id),
          tabindex: "1"
        },
        on: {
          click: function click($event) {
            return _vm.executeFunction(button.action);
          }
        }
      }, [_c("i", {
        "class": button.icon
      }), _vm._v("\n            " + _vm._s(button.name) + "\n          ")]);
    }), 1) : _vm._e(), _vm._v(" "), _vm.isVisible(item, "button") ? _c("b-button", {
      key: index,
      staticClass: "text-capitalize",
      attrs: {
        size: "sm",
        variant: item.variant || "secondary",
        title: item.title
      },
      on: {
        click: function click($event) {
          return _vm.executeFunction(item.action);
        }
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n          " + _vm._s(item.name) + "\n        ")]) : _vm._e(), _vm._v(" "), item.type !== "group" && item.type !== "button" ? _c(item.type, {
      key: index,
      tag: "component",
      attrs: {
        options: item.options
      }
    }) : _vm._e()];
  })], 2) : _vm._e(), _vm._v(" "), !_vm.sectionRight ? _c("div", {
    staticClass: "text-right"
  }, [_c("language-selector-button", {
    staticClass: "ml-2",
    attrs: {
      id: "language-screen-builder",
      type: "screen-builder",
      "show-language-code": true
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.sectionRight ? _c("b-col", {
    staticClass: "text-right"
  }, [_vm._l(_vm.rightMenus, function (item, index) {
    return [_vm.isVisible(item, "group") ? _c("b-button-group", {
      key: index,
      attrs: {
        size: "sm"
      }
    }, _vm._l(_vm.visibleItems(item), function (button, indexButton) {
      return _c("b-button", {
        key: "group-".concat(indexButton),
        staticClass: "text-capitalize screen-toolbar-button",
        attrs: {
          variant: button.variant || "secondary",
          title: button.title,
          "data-cy": "toolbar-".concat(button.id),
          disabled: _vm.toolbarDisabled
        },
        on: {
          click: function click($event) {
            return _vm.executeFunction(button.action);
          }
        }
      }, [_c("i", {
        "class": button.icon
      }), _vm._v("\n            " + _vm._s(button.name) + "\n          ")]);
    }), 1) : _vm._e(), _vm._v(" "), _vm.isVisible(item, "button") ? _c("b-button", {
      key: index,
      staticClass: "text-capitalize screen-toolbar-button",
      attrs: {
        size: "sm",
        variant: item.variant || "secondary",
        title: item.title
      },
      on: {
        click: function click($event) {
          return _vm.executeFunction(item.action);
        }
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n          " + _vm._s(item.name) + "\n        ")]) : _vm._e(), _vm._v(" "), item.type !== "group" && item.type !== "button" && !item.hide ? _c(item.type, _vm._b({
      key: index,
      ref: item.id,
      refInFor: true,
      tag: "component",
      attrs: {
        options: item.options
      },
      on: {
        navigate: _vm.handleNavigate
      }
    }, "component", _objectSpread({}, item.options), false)) : _vm._e()];
  })], 2) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=template&id=b91a6428&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=template&id=b91a6428& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      "dialog-class": "top-20",
      title: _vm.title
    },
    on: {
      hide: _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn() {
        return [_c("b-button", {
          staticClass: "m-0",
          on: {
            click: _vm.onClose
          }
        }, [_vm._v("Ok")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_c("div", {
    staticClass: "my-3",
    "class": _vm.classMessage,
    domProps: {
      innerHTML: _vm._s(_vm.message)
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "userMenu"
    }
  }, [_c("div", {
    attrs: {
      id: "profileMenu"
    }
  }, [_c("avatar-image", {
    ref: "userMenuButton",
    attrs: {
      id: "avatarMenu",
      "class-container": "d-flex",
      size: "40",
      "class-image": "m-0",
      "input-data": _vm.information,
      "hide-name": "true",
      popover: ""
    }
  })], 1), _vm._v(" "), _c("b-popover", {
    attrs: {
      container: "#userMenu",
      target: _vm.getTarget,
      placement: "bottomleft",
      offset: "3",
      triggers: "click blur"
    },
    on: {
      shown: _vm.onShown,
      hidden: _vm.onHidden
    }
  }, [_c("ul", {
    staticClass: "list-group list-group-flush px-1"
  }, [_c("li", {
    staticClass: "list-group-item px-2"
  }, [_c("a", {
    attrs: {
      href: _vm.user_id,
      role: "menuitem",
      "aria-label": _vm.viewProfileText
    }
  }, [_c("i", {
    staticClass: "fas fa-user fa-fw fa-lg mr-1"
  }), _vm._v("\n          " + _vm._s(_vm.viewProfileText) + "\n        ")])]), _vm._v(" "), _vm.permissions["edit-personal-profile"] ? _c("li", {
    staticClass: "list-group-item px-2"
  }, [_c("a", {
    attrs: {
      href: "/profile/edit",
      role: "menuitem",
      "aria-label": _vm.editProfileText
    }
  }, [_c("i", {
    staticClass: "fas fa-user-cog fa-fw fa-lg mr-1"
  }), _vm._v("\n          " + _vm._s(_vm.editProfileText) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.displayMyFilesLink ? _c("li", {
    staticClass: "list-group-item px-2"
  }, [_c("a", {
    attrs: {
      href: "/file-manager",
      role: "menuitem",
      "aria-label": _vm.$t("Files")
    }
  }, [_c("i", {
    staticClass: "fas fa-folder fa-fw fa-lg mr-1"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Files")) + "\n        ")])]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "list-group-item px-2"
  }, [_c("a", {
    attrs: {
      href: "https://docs.processmaker.com/",
      role: "menuitem",
      "aria-label": _vm.$t("Documentation"),
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fas fa-question-circle fa-fw fa-lg mr-1",
    attrs: {
      "data-v-2eb90a9e": ""
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Documentation")) + "\n        ")])]), _vm._v(" "), _c("li", {
    staticClass: "list-group-item px-2"
  }, [_c("a", {
    attrs: {
      href: "/about",
      role: "menuitem",
      "aria-label": _vm.$t("About")
    }
  }, [_c("i", {
    staticClass: "fas fa-info-circle fa-fw fa-lg mr-1"
  }), _vm._v("\n          " + _vm._s(_vm.$t("About")) + "\n        ")])]), _vm._v(" "), _c("li", {
    staticClass: "list-group-item px-2"
  }, [_c("a", {
    attrs: {
      href: "/logout",
      role: "menuitem",
      "aria-label": _vm.$t("Log Out")
    }
  }, [_c("i", {
    staticClass: "fas fa-sign-out-alt fa-fw fa-lg mr-1"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Log Out")) + "\n        ")])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/card.vue?vue&type=template&id=61026680&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/card.vue?vue&type=template&id=61026680& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-3"
  }, _vm._l(_vm.emptyStartEvents, function (event) {
    return _c("div", {
      key: event.id,
      staticClass: "card"
    }, [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("span", {
      directives: [{
        name: "uni-id",
        rawName: "v-uni-id",
        value: event.id.toString(),
        expression: "event.id.toString()"
      }],
      attrs: {
        "data-test": "new-request-modal-process-name",
        "data-test-by-key": "new-request-modal-process-name-".concat(_vm.process.id, "-").concat(event.id.toString())
      }
    }, [_vm._v("\n              " + _vm._s(_vm.transformedName) + "\n          ")]), _vm._v(" "), _vm.process.startEvents.length > 1 ? _c("span", [_vm._v(": " + _vm._s(event.name))]) : _vm._e(), _vm._v(" "), _c("a", {
      attrs: {
        href: "#",
        "aria-expanded": _vm.ariaExpanded,
        "aria-controls": _vm.getComputedId(_vm.process),
        "data-test": "new-request-modal-show-process-details-button",
        "data-test-by-key": "new-request-modal-show-process-details-button-".concat(_vm.process.id, "-").concat(event.id.toString())
      },
      on: {
        click: _vm.showRequestDetails
      }
    }, [_vm._v("\n            ...\n          ")])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c("button", {
      directives: [{
        name: "uni-aria-describedby",
        rawName: "v-uni-aria-describedby",
        value: event.id.toString(),
        expression: "event.id.toString()"
      }],
      staticClass: "btn btn-primary btn-sm d-flex align-items-center",
      attrs: {
        href: _vm.getNewRequestLinkHref(_vm.process, event),
        disabled: _vm.disabled,
        "data-test": "new-request-modal-process-start-button",
        "data-test-by-key": "new-request-modal-process-start-button-".concat(_vm.process.id, "-").concat(event.id.toString())
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.newRequestLink(_vm.process, event);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-caret-square-right mr-1"
    }), _vm._v(" " + _vm._s(_vm.$t("Start")) + "\n        ")])])]), _vm._v(" "), _vm.showdetail ? _c("div", {
      attrs: {
        "aria-hidden": _vm.ariaHidden,
        id: _vm.getComputedId(_vm.process)
      }
    }, [_c("hr"), _vm._v(" "), _c("p", {
      staticClass: "card-text text-muted",
      attrs: {
        "data-test": "new-request-modal-process-description",
        "data-test-by-key": "new-request-modal-process-description-".concat(_vm.process.id, "-").concat(event.id.toString())
      }
    }, [_vm._v("\n          " + _vm._s(_vm.process.description) + "\n        ")])]) : _vm._e()])]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=template&id=9a2a6aa6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=template&id=9a2a6aa6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "nav-item p-2"
  }, [_c("button", {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      id: "navbar-request-button",
      type: "button",
      "aria-label": _vm.$t("New Case"),
      "aria-haspopup": "dialog"
    },
    on: {
      click: _vm.showRequestModal
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v("\n    " + _vm._s(_vm.$t("Case")) + "\n  ")]), _vm._v(" "), _c("new-request-modal", {
    ref: "requestModal",
    attrs: {
      size: "lg",
      permission: _vm.permission,
      url: _vm.url
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modalMobile.vue?vue&type=template&id=289af2af&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modalMobile.vue?vue&type=template&id=289af2af& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "nav-item"
  }, [_c("button", {
    staticClass: "btn btn-success border border-white",
    attrs: {
      id: "navbar-request-button-mobile",
      type: "button",
      "aria-haspopup": "dialog",
      "aria-label": _vm.$t("New Case")
    },
    on: {
      click: _vm.showRequestModal
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })]), _vm._v(" "), _c("new-request-modal", {
    ref: "requestModal",
    attrs: {
      size: "md",
      permission: _vm.permission,
      url: _vm.url
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-modal", {
    ref: "requestModalAdd",
    staticClass: "requests-modal modal-dialog-scrollable",
    attrs: {
      id: "requests-modal",
      "header-close-content": "&times;",
      "hide-footer": "",
      title: _vm.$t("New Case"),
      size: _vm.size
    }
  }, [_vm.startingRequest ? _c("progress-loader", {
    ref: "progressLoader",
    attrs: {
      type: "radial"
    }
  }) : _vm._e(), _vm._v(" "), _c("b-row", {
    attrs: {
      "no-gutters": ""
    }
  }, [_c("b-col", {
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c("p", [_vm._v("\n          " + _vm._s(_vm.$t("Select a process below to get started.")) + "\n        ")])]), _vm._v(" "), _c("b-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("b-input-group", {
    staticClass: "search"
  }, [_c("b-form-input", {
    attrs: {
      "data-test": "new-request-modal-search-input",
      placeholder: _vm.$t("Search") + "..."
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      "data-test": "new-request-modal-search-button",
      type: "button",
      "aria-label": _vm.$t("Search")
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  })])])], 1)], 1)], 1), _vm._v(" "), Object.keys(_vm.processes).length && !_vm.loading ? _c("div", {
    staticClass: "process-list"
  }, _vm._l(_vm.processes, function (category, index) {
    return _c("div", {
      key: "category-".concat(index),
      staticClass: "mt-3"
    }, [_c("h5", {
      staticClass: "mb-n2"
    }, [_c("span", {
      attrs: {
        "data-test": "new-request-modal-category-name",
        "data-test-by-key": "new-request-modal-category-name-".concat(index)
      }
    }, [_vm._v("\n            " + _vm._s(index) + "\n          ")]), _vm._v(" "), _c("span", {
      staticClass: "badge badge-pill badge-secondary",
      attrs: {
        "data-test": "new-request-modal-category-count",
        "data-test-by-key": "new-request-modal-category-count-".concat(index)
      }
    }, [_vm._v("\n            " + _vm._s(category.length) + "\n          ")])]), _vm._v(" "), _vm._l(category, function (process, id) {
      return [_vm.hasEmptyStartEvents(process) ? _c("process-card", {
        key: "process-".concat(id),
        attrs: {
          filter: _vm.filter,
          process: process
        }
      }) : _vm._e()];
    })], 2);
  }), 0) : _vm._e(), _vm._v(" "), !Object.keys(_vm.processes).length && !_vm.loading ? _c("div", {
    staticClass: "no-requests my-3 text-center"
  }, [_c("h4", [_vm._v(_vm._s(_vm.$t("You don't have any Processes.")))]), _vm._v(" "), _vm.permission.includes("create-processes") ? _c("span", [_c("a", {
    staticClass: "text-primary",
    attrs: {
      href: _vm.url
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Please visit the Processes page")) + "\n        ")]), _vm._v("\n        " + _vm._s(_vm.$t("and click on +Process to get started.")) + "\n      ")]) : _c("span", [_vm._v("\n        " + _vm._s(_vm.$t("Please contact your administrator to get started.")) + "\n      ")])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "loading no-requests my-3 text-center"
  }, [_c("img", {
    staticClass: "m-3",
    attrs: {
      src: "/img/new-case-load.svg",
      alt: "new-case-loading",
      width: "209",
      height: "155"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "loading-text loading-title"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Finding your processes")) + "\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "loading-text"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Please wait a moment while we locate and load your processes.")) + "\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "loading-text"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("This should only take a few seconds.")) + "\n      ")])]) : _vm._e(), _vm._v(" "), _c("pagination", {
    ref: "listProcess",
    attrs: {
      single: _vm.$t("Process"),
      plural: _vm.$t("Processes"),
      "per-page-select-enabled": true,
      "data-test": "new-request-modal-pagination"
    },
    on: {
      changePerPage: _vm.changePerPage,
      "vuetable-pagination:change-page": _vm.onPageChange
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=template&id=113f64be&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=template&id=113f64be&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card", {
    staticClass: "card",
    attrs: {
      rounded: "",
      elevation: "4"
    }
  }, [_c("b-container", [_c("b-row", [_c("notification-user", {
    attrs: {
      notification: _vm.notification
    }
  }), _vm._v(" "), _c("notification-message", {
    attrs: {
      notification: _vm.notification,
      "show-time": _vm.showTime
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3"
  }, [_c("b-row", [_c("b-col", {
    staticClass: "count priority"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Priority")) + "\n      "), _c("div", [_vm._v(_vm._s(_vm.data.message.priority))])]), _vm._v(" "), _c("b-col", {
    staticClass: "count reassign"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Reassign")) + "\n      "), _c("div", [_vm._v(_vm._s(_vm.data.message.reassigned))])])], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "count draft"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Save As Draft")) + "\n      "), _c("div", [_vm._v(_vm._s(_vm.data.message.draft))])]), _vm._v(" "), _c("b-col", {
    staticClass: "count submit"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Submit")) + "\n      "), _c("div", [_vm._v(_vm._s(_vm.data.message.submit))])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=template&id=57ecab41&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=template&id=57ecab41&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "item border-top py-3",
    "class": {
      clickable: _vm.url
    },
    attrs: {
      title: _vm.url
    },
    on: {
      click: _vm.click
    }
  }, [_c("div", {
    staticClass: "px-3"
  }, [_c("b-row", [_c("notification-user", {
    attrs: {
      notification: _vm.notification
    }
  }), _vm._v(" "), _c("notification-message", {
    attrs: {
      notification: _vm.notification,
      "show-time": _vm.showTime
    }
  })], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=template&id=47f88f6e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=template&id=47f88f6e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-col", [_c("div", {
    staticClass: "message-title",
    "class": {
      "message-sm": _vm.isMobile
    },
    domProps: {
      innerHTML: _vm._s(_vm.message)
    }
  }), _vm._v(" "), _vm.isInboxRule ? _c("notification-inbox-rule", {
    attrs: {
      data: _vm.data
    }
  }) : _vm._e(), _vm._v(" "), _vm.showTime && !_vm.isInboxRule ? _c("notification-time", {
    attrs: {
      notification: _vm.notification
    }
  }) : _vm._e(), _vm._v(" "), _vm.displayBubble ? _c("div", {
    staticClass: "bubble",
    "class": {
      "bubble-sm": _vm.isMobile
    }
  }, [_vm._v("\n    " + _vm._s(_vm.displayBubble) + "\n  ")]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-time.vue?vue&type=template&id=d429d40a&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-time.vue?vue&type=template&id=d429d40a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("span", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        hover: true
      }
    }],
    staticClass: "text-muted",
    attrs: {
      title: _vm.time
    }
  }, [_vm._v(_vm._s(_vm.formatDate))])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=template&id=01dafff9&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=template&id=01dafff9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.displayUser ? _c("b-col", {
    staticClass: "pr-0",
    attrs: {
      lg: "auto"
    }
  }, [_c("avatar-image", {
    attrs: {
      size: "40",
      "hide-name": "true",
      "input-data": _vm.user
    }
  })], 1) : _c("b-col", {
    staticClass: "pr-0",
    attrs: {
      lg: "auto"
    }
  }, [_c("div", {
    staticClass: "notification-icon rounded-circle d-flex justify-content-center"
  }, [_c("i", {
    staticClass: "fas fa-bell align-self-center"
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=template&id=4db659f4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=template&id=4db659f4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("div", {
    attrs: {
      id: "notificationMenu"
    }
  }, [_c("b-button", {
    staticClass: "notification-menu-button",
    "class": {
      "is-open": _vm.isOpen,
      "has-messages": _vm.hasMessages
    },
    attrs: {
      id: "notification-menu-button",
      variant: _vm.buttonVariant,
      "data-toggle": "dropdown",
      role: "button",
      "aria-haspopup": "menu",
      "aria-expanded": _vm.isOpen,
      title: _vm.$t("Notifications"),
      "aria-label": _vm.ariaLabel,
      size: "sm"
    }
  }, [_c("div", {
    staticClass: "bell-icon"
  }, [_c("i", {
    staticClass: "fas fa-bell"
  }), _vm._v(" "), _vm.hasMessages ? _c("span", {
    staticClass: "dot"
  }) : _vm._e()]), _vm._v(" "), _vm.hasMessages ? _c("span", {
    staticClass: "message-count"
  }, [_vm._v(_vm._s(_vm.displayTotalCount))]) : _vm._e()]), _vm._v(" "), _vm.shouldShowMobilePopover ? _c("b-popover", {
    attrs: {
      target: "notification-menu-button",
      offset: "1",
      triggers: "click blur",
      "custom-class": "notification-popover-wrapper custom-popover",
      "data-cy": "notification-popover"
    },
    on: {
      shown: _vm.onShown,
      hidden: _vm.onHidden
    }
  }, [_c("div", {
    staticClass: "notification-popover"
  }, [_c("b-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("b-row", {
    attrs: {
      "align-h": "between"
    }
  }, [_c("b-col", [_c("b-tabs", [_c("b-tab", {
    on: {
      click: function click(_) {
        return _vm.filterComments = null;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm.allCount ? _c("b-badge", {
          attrs: {
            pill: "",
            variant: "warning lighten"
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.allCount) + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.$t("Inbox")) + "\n                  ")];
      },
      proxy: true
    }], null, false, 3340025203)
  }), _vm._v(" "), _c("b-tab", {
    on: {
      click: function click(_) {
        return _vm.filterComments = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm.notificationsCount ? _c("b-badge", {
          attrs: {
            pill: "",
            variant: "warning lighten"
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.notificationsCount) + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.$t("Notifications")) + "\n                  ")];
      },
      proxy: true
    }], null, false, 1937708127)
  }), _vm._v(" "), _c("b-tab", {
    on: {
      click: function click(_) {
        return _vm.filterComments = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm.commentsCount ? _c("b-badge", {
          attrs: {
            pill: "",
            variant: "warning lighten"
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.commentsCount) + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.$t("Comments")) + "\n                  ")];
      },
      proxy: true
    }], null, false, 3676927329)
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      "align-self": "center",
      cols: "auto"
    }
  }, [_c("a", {
    attrs: {
      href: "/notifications"
    }
  }, [_c("i", {
    staticClass: "fas fa-external-link-alt fa-lg pr-3 external-link"
  })])])], 1)], 1), _vm._v(" "), _vm.messages.length == 0 ? _c("div", {
    staticClass: "no-notifications-mobile"
  }, [_c("img", {
    attrs: {
      alt: _vm.$t("All Clear"),
      src: "/img/all-cleared.svg"
    }
  }), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_vm.$t("All Clear")))]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.$t("No new notifications at the moment.")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      href: "/notifications"
    }
  }, [_vm._v(_vm._s(_vm.$t("View All Notifications")))])], 1) : _vm._l(_vm.filteredMessages, function (item, index) {
    return _c("notification-card", {
      key: index,
      attrs: {
        notification: item,
        "show-time": true
      }
    });
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.shouldShowPopover ? _c("b-popover", {
    attrs: {
      id: "notification-popover-wrapper",
      target: "notification-menu-button",
      placement: "bottomleft",
      offset: "1",
      triggers: "click blur",
      "custom-class": "notification-popover-wrapper"
    },
    on: {
      shown: _vm.onShown,
      hidden: _vm.onHidden
    }
  }, [_c("div", {
    staticClass: "notification-popover"
  }, [_c("b-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("b-row", {
    attrs: {
      "align-h": "between"
    }
  }, [_c("b-col", [_c("b-tabs", [_c("b-tab", {
    on: {
      click: function click(_) {
        return _vm.filterComments = null;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm.allCount ? _c("b-badge", {
          attrs: {
            pill: "",
            variant: "warning lighten"
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.allCount) + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.$t("Inbox")) + "\n                  ")];
      },
      proxy: true
    }], null, false, 3340025203)
  }), _vm._v(" "), _c("b-tab", {
    on: {
      click: function click(_) {
        return _vm.filterComments = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm.notificationsCount ? _c("b-badge", {
          attrs: {
            pill: "",
            variant: "warning lighten"
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.notificationsCount) + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.$t("Notifications")) + "\n                  ")];
      },
      proxy: true
    }], null, false, 1937708127)
  }), _vm._v(" "), _c("b-tab", {
    on: {
      click: function click(_) {
        return _vm.filterComments = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm.commentsCount ? _c("b-badge", {
          attrs: {
            pill: "",
            variant: "warning lighten"
          }
        }, [_vm._v("\n                      " + _vm._s(_vm.commentsCount) + "\n                    ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(_vm.$t("Comments")) + "\n                  ")];
      },
      proxy: true
    }], null, false, 3676927329)
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "notification-popover-col",
    attrs: {
      "align-self": "center",
      cols: "auto"
    }
  }, [_c("a", {
    attrs: {
      href: "/notifications",
      "data-cy": "notification-popover-link"
    }
  }, [_c("i", {
    staticClass: "fas fa-external-link-alt fa-lg pr-3 external-link"
  })])])], 1)], 1), _vm._v(" "), _vm.messages.length == 0 ? _c("div", {
    staticClass: "no-notifications",
    attrs: {
      "data-cy": "notification-popover-no-notifications"
    }
  }, [_c("img", {
    attrs: {
      alt: _vm.$t("All Clear"),
      src: "/img/all-cleared.svg"
    }
  }), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_vm.$t("All Clear")))]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.$t("No new notifications at the moment.")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      href: "/notifications"
    }
  }, [_vm._v(_vm._s(_vm.$t("View All Notifications")))])], 1) : _c("div", {
    staticClass: "items"
  }, _vm._l(_vm.filteredMessages, function (item, index) {
    return _c("notification-item", {
      key: index,
      attrs: {
        notification: item,
        "show-time": true
      }
    });
  }), 1)], 1)]) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/next/layout/navbar.js":
/*!********************************************!*\
  !*** ./resources/js/next/layout/navbar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_requests_requestModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/requests/requestModal.vue */ "./resources/js/components/requests/requestModal.vue");
/* harmony import */ var _components_requests_modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/requests/modal.vue */ "./resources/js/components/requests/modal.vue");
/* harmony import */ var _components_requests_modalMobile_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/requests/modalMobile.vue */ "./resources/js/components/requests/modalMobile.vue");
/* harmony import */ var _Mobile_WelcomeModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Mobile/WelcomeModal.vue */ "./resources/js/Mobile/WelcomeModal.vue");
/* harmony import */ var _notifications_components_notifications_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications/components/notifications.vue */ "./resources/js/notifications/components/notifications.vue");
/* harmony import */ var _components_Session_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Session.vue */ "./resources/js/components/Session.vue");
/* harmony import */ var _components_Confirm_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Confirm.vue */ "./resources/js/components/Confirm.vue");
/* harmony import */ var _components_Message_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Message.vue */ "./resources/js/components/Message.vue");
/* harmony import */ var _components_NavbarProfile_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NavbarProfile.vue */ "./resources/js/components/NavbarProfile.vue");
/* harmony import */ var _components_Menu_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Menu.vue */ "./resources/js/components/Menu.vue");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../globalVariables */ "./resources/js/next/globalVariables.js");
function cov_28ijnun3p1() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/next/layout/navbar.js";
  var hash = "3ac54d971009d499d51a3d34de5c7d9ac8e8a8f2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/next/layout/navbar.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "1": {
        start: {
          line: 14,
          column: 10
        },
        end: {
          line: 14,
          column: 32
        }
      },
      "2": {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 15,
          column: 44
        }
      },
      "3": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 65
        }
      },
      "6": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 73
        }
      },
      "7": {
        start: {
          line: 26,
          column: 16
        },
        end: {
          line: 26,
          column: 35
        }
      },
      "8": {
        start: {
          line: 27,
          column: 23
        },
        end: {
          line: 27,
          column: 95
        }
      },
      "9": {
        start: {
          line: 29,
          column: 18
        },
        end: {
          line: 29,
          column: 34
        }
      },
      "10": {
        start: {
          line: 30,
          column: 23
        },
        end: {
          line: 30,
          column: 54
        }
      },
      "11": {
        start: {
          line: 34,
          column: 14
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "12": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "13": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 21
        }
      },
      "14": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "15": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 39
        }
      },
      "16": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "17": {
        start: {
          line: 56,
          column: 21
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "18": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 57,
          column: 68
        }
      },
      "19": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 89
        }
      },
      "20": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 59,
          column: 41
        }
      },
      "21": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 55
        }
      },
      "22": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 61,
          column: 41
        }
      },
      "23": {
        start: {
          line: 64,
          column: 26
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "24": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 65,
          column: 42
        }
      },
      "25": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 66,
          column: 48
        }
      },
      "26": {
        start: {
          line: 70,
          column: 21
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "27": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 79,
          column: 60
        }
      },
      "28": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 80,
          column: 89
        }
      },
      "29": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 81,
          column: 47
        }
      },
      "30": {
        start: {
          line: 82,
          column: 2
        },
        end: {
          line: 82,
          column: 49
        }
      },
      "31": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 83,
          column: 41
        }
      },
      "32": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 84,
          column: 41
        }
      },
      "33": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 85,
          column: 59
        }
      },
      "34": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 86,
          column: 53
        }
      },
      "35": {
        start: {
          line: 90,
          column: 21
        },
        end: {
          line: 96,
          column: 1
        }
      },
      "36": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 91,
          column: 60
        }
      },
      "37": {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 92,
          column: 57
        }
      },
      "38": {
        start: {
          line: 93,
          column: 2
        },
        end: {
          line: 93,
          column: 47
        }
      },
      "39": {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 94,
          column: 49
        }
      },
      "40": {
        start: {
          line: 95,
          column: 2
        },
        end: {
          line: 95,
          column: 41
        }
      },
      "41": {
        start: {
          line: 99,
          column: 15
        },
        end: {
          line: 223,
          column: 2
        }
      },
      "42": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 115,
          column: 7
        }
      },
      "43": {
        start: {
          line: 112,
          column: 8
        },
        end: {
          line: 112,
          column: 59
        }
      },
      "44": {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 114,
          column: 67
        }
      },
      "45": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 146,
          column: 6
        }
      },
      "46": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 34
        }
      },
      "47": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 171,
          column: 9
        }
      },
      "48": {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 156,
          column: 24
        }
      },
      "49": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 157,
          column: 76
        }
      },
      "50": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 164,
          column: 9
        }
      },
      "51": {
        start: {
          line: 160,
          column: 10
        },
        end: {
          line: 163,
          column: 12
        }
      },
      "52": {
        start: {
          line: 165,
          column: 23
        },
        end: {
          line: 170,
          column: 14
        }
      },
      "53": {
        start: {
          line: 166,
          column: 10
        },
        end: {
          line: 166,
          column: 65
        }
      },
      "54": {
        start: {
          line: 167,
          column: 10
        },
        end: {
          line: 169,
          column: 11
        }
      },
      "55": {
        start: {
          line: 168,
          column: 12
        },
        end: {
          line: 168,
          column: 34
        }
      },
      "56": {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 175,
          column: 40
        }
      },
      "57": {
        start: {
          line: 176,
          column: 6
        },
        end: {
          line: 176,
          column: 40
        }
      },
      "58": {
        start: {
          line: 179,
          column: 6
        },
        end: {
          line: 179,
          column: 26
        }
      },
      "59": {
        start: {
          line: 180,
          column: 20
        },
        end: {
          line: 180,
          column: 46
        }
      },
      "60": {
        start: {
          line: 181,
          column: 17
        },
        end: {
          line: 181,
          column: 41
        }
      },
      "61": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 182,
          column: 48
        }
      },
      "62": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 184,
          column: 92
        }
      },
      "63": {
        start: {
          line: 184,
          column: 35
        },
        end: {
          line: 184,
          column: 90
        }
      },
      "64": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 185,
          column: 33
        }
      },
      "65": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 194,
          column: 7
        }
      },
      "66": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 191,
          column: 68
        }
      },
      "67": {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 193,
          column: 18
        }
      },
      "68": {
        start: {
          line: 197,
          column: 31
        },
        end: {
          line: 197,
          column: 76
        }
      },
      "69": {
        start: {
          line: 197,
          column: 55
        },
        end: {
          line: 197,
          column: 75
        }
      },
      "70": {
        start: {
          line: 198,
          column: 6
        },
        end: {
          line: 198,
          column: 80
        }
      },
      "71": {
        start: {
          line: 201,
          column: 6
        },
        end: {
          line: 201,
          column: 42
        }
      },
      "72": {
        start: {
          line: 202,
          column: 6
        },
        end: {
          line: 202,
          column: 40
        }
      },
      "73": {
        start: {
          line: 205,
          column: 6
        },
        end: {
          line: 207,
          column: 7
        }
      },
      "74": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 206,
          column: 43
        }
      },
      "75": {
        start: {
          line: 208,
          column: 6
        },
        end: {
          line: 208,
          column: 16
        }
      },
      "76": {
        start: {
          line: 211,
          column: 6
        },
        end: {
          line: 213,
          column: 7
        }
      },
      "77": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 212,
          column: 59
        }
      },
      "78": {
        start: {
          line: 214,
          column: 6
        },
        end: {
          line: 214,
          column: 19
        }
      },
      "79": {
        start: {
          line: 217,
          column: 6
        },
        end: {
          line: 217,
          column: 46
        }
      },
      "80": {
        start: {
          line: 220,
          column: 6
        },
        end: {
          line: 220,
          column: 53
        }
      },
      "81": {
        start: {
          line: 225,
          column: 0
        },
        end: {
          line: 225,
          column: 44
        }
      },
      "82": {
        start: {
          line: 226,
          column: 0
        },
        end: {
          line: 226,
          column: 36
        }
      },
      "83": {
        start: {
          line: 227,
          column: 0
        },
        end: {
          line: 227,
          column: 50
        }
      },
      "84": {
        start: {
          line: 228,
          column: 0
        },
        end: {
          line: 228,
          column: 60
        }
      },
      "85": {
        start: {
          line: 229,
          column: 0
        },
        end: {
          line: 229,
          column: 50
        }
      },
      "86": {
        start: {
          line: 230,
          column: 0
        },
        end: {
          line: 230,
          column: 50
        }
      },
      "87": {
        start: {
          line: 231,
          column: 0
        },
        end: {
          line: 231,
          column: 38
        }
      },
      "88": {
        start: {
          line: 233,
          column: 0
        },
        end: {
          line: 233,
          column: 43
        }
      },
      "89": {
        start: {
          line: 236,
          column: 0
        },
        end: {
          line: 265,
          column: 1
        }
      },
      "90": {
        start: {
          line: 237,
          column: 23
        },
        end: {
          line: 262,
          column: 4
        }
      },
      "91": {
        start: {
          line: 244,
          column: 6
        },
        end: {
          line: 246,
          column: 8
        }
      },
      "92": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 251,
          column: 7
        }
      },
      "93": {
        start: {
          line: 250,
          column: 8
        },
        end: {
          line: 250,
          column: 41
        }
      },
      "94": {
        start: {
          line: 255,
          column: 8
        },
        end: {
          line: 255,
          column: 45
        }
      },
      "95": {
        start: {
          line: 256,
          column: 8
        },
        end: {
          line: 256,
          column: 33
        }
      },
      "96": {
        start: {
          line: 259,
          column: 8
        },
        end: {
          line: 259,
          column: 48
        }
      },
      "97": {
        start: {
          line: 264,
          column: 2
        },
        end: {
          line: 264,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 40
          },
          end: {
            line: 17,
            column: 41
          }
        },
        loc: {
          start: {
            line: 17,
            column: 53
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 14
          },
          end: {
            line: 34,
            column: 15
          }
        },
        loc: {
          start: {
            line: 34,
            column: 126
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 56,
            column: 21
          },
          end: {
            line: 56,
            column: 22
          }
        },
        loc: {
          start: {
            line: 56,
            column: 66
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 56
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 64,
            column: 26
          },
          end: {
            line: 64,
            column: 27
          }
        },
        loc: {
          start: {
            line: 64,
            column: 38
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 64
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 70,
            column: 21
          },
          end: {
            line: 70,
            column: 22
          }
        },
        loc: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 78
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 90,
            column: 21
          },
          end: {
            line: 90,
            column: 22
          }
        },
        loc: {
          start: {
            line: 90,
            column: 66
          },
          end: {
            line: 96,
            column: 1
          }
        },
        line: 90
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 110,
            column: 18
          },
          end: {
            line: 110,
            column: 19
          }
        },
        loc: {
          start: {
            line: 110,
            column: 31
          },
          end: {
            line: 116,
            column: 5
          }
        },
        line: 110
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 118,
            column: 9
          },
          end: {
            line: 147,
            column: 3
          }
        },
        line: 118
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        loc: {
          start: {
            line: 149,
            column: 18
          },
          end: {
            line: 151,
            column: 5
          }
        },
        line: 149
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 153,
            column: 3
          }
        },
        loc: {
          start: {
            line: 153,
            column: 12
          },
          end: {
            line: 172,
            column: 3
          }
        },
        line: 153
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 155,
            column: 12
          },
          end: {
            line: 155,
            column: 13
          }
        },
        loc: {
          start: {
            line: 155,
            column: 18
          },
          end: {
            line: 171,
            column: 7
          }
        },
        line: 155
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 165,
            column: 35
          },
          end: {
            line: 165,
            column: 36
          }
        },
        loc: {
          start: {
            line: 165,
            column: 41
          },
          end: {
            line: 170,
            column: 9
          }
        },
        line: 165
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        loc: {
          start: {
            line: 174,
            column: 45
          },
          end: {
            line: 177,
            column: 5
          }
        },
        line: 174
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        loc: {
          start: {
            line: 178,
            column: 26
          },
          end: {
            line: 186,
            column: 5
          }
        },
        line: 178
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 184,
            column: 25
          },
          end: {
            line: 184,
            column: 26
          }
        },
        loc: {
          start: {
            line: 184,
            column: 35
          },
          end: {
            line: 184,
            column: 90
          }
        },
        line: 184
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        loc: {
          start: {
            line: 187,
            column: 22
          },
          end: {
            line: 195,
            column: 5
          }
        },
        line: 187
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        loc: {
          start: {
            line: 196,
            column: 27
          },
          end: {
            line: 199,
            column: 5
          }
        },
        line: 196
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 197,
            column: 44
          },
          end: {
            line: 197,
            column: 45
          }
        },
        loc: {
          start: {
            line: 197,
            column: 55
          },
          end: {
            line: 197,
            column: 75
          }
        },
        line: 197
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 200,
            column: 5
          }
        },
        loc: {
          start: {
            line: 200,
            column: 21
          },
          end: {
            line: 203,
            column: 5
          }
        },
        line: 200
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 204,
            column: 5
          }
        },
        loc: {
          start: {
            line: 204,
            column: 16
          },
          end: {
            line: 209,
            column: 5
          }
        },
        line: 204
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 210,
            column: 5
          }
        },
        loc: {
          start: {
            line: 210,
            column: 22
          },
          end: {
            line: 215,
            column: 5
          }
        },
        line: 210
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 5
          }
        },
        loc: {
          start: {
            line: 216,
            column: 15
          },
          end: {
            line: 218,
            column: 5
          }
        },
        line: 216
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 5
          }
        },
        loc: {
          start: {
            line: 219,
            column: 19
          },
          end: {
            line: 221,
            column: 5
          }
        },
        line: 219
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 243,
            column: 5
          }
        },
        loc: {
          start: {
            line: 243,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        },
        line: 243
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        },
        loc: {
          start: {
            line: 248,
            column: 14
          },
          end: {
            line: 252,
            column: 5
          }
        },
        line: 248
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 7
          }
        },
        loc: {
          start: {
            line: 254,
            column: 24
          },
          end: {
            line: 257,
            column: 7
          }
        },
        line: 254
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 258,
            column: 7
          }
        },
        loc: {
          start: {
            line: 258,
            column: 17
          },
          end: {
            line: 260,
            column: 7
          }
        },
        line: 258
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }, {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 22,
            column: 3
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 34,
            column: 38
          },
          end: {
            line: 34,
            column: 51
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 50
          },
          end: {
            line: 34,
            column: 51
          }
        }],
        line: 34
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 53
          },
          end: {
            line: 34,
            column: 75
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 70
          },
          end: {
            line: 34,
            column: 75
          }
        }],
        line: 34
      },
      "3": {
        loc: {
          start: {
            line: 34,
            column: 77
          },
          end: {
            line: 34,
            column: 95
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 90
          },
          end: {
            line: 34,
            column: 95
          }
        }],
        line: 34
      },
      "4": {
        loc: {
          start: {
            line: 34,
            column: 97
          },
          end: {
            line: 34,
            column: 109
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 107
          },
          end: {
            line: 34,
            column: 109
          }
        }],
        line: 34
      },
      "5": {
        loc: {
          start: {
            line: 34,
            column: 111
          },
          end: {
            line: 34,
            column: 124
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 122
          },
          end: {
            line: 34,
            column: 124
          }
        }],
        line: 34
      },
      "6": {
        loc: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 38,
            column: 3
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
        line: 35
      },
      "7": {
        loc: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 42,
            column: 3
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
        line: 40
      },
      "8": {
        loc: {
          start: {
            line: 57,
            column: 37
          },
          end: {
            line: 57,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 37
          },
          end: {
            line: 57,
            column: 42
          }
        }, {
          start: {
            line: 57,
            column: 46
          },
          end: {
            line: 57,
            column: 67
          }
        }],
        line: 57
      },
      "9": {
        loc: {
          start: {
            line: 58,
            column: 39
          },
          end: {
            line: 58,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 58,
            column: 39
          },
          end: {
            line: 58,
            column: 46
          }
        }, {
          start: {
            line: 58,
            column: 50
          },
          end: {
            line: 58,
            column: 88
          }
        }],
        line: 58
      },
      "10": {
        loc: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 13
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 75,
            column: 9
          },
          end: {
            line: 75,
            column: 13
          }
        }],
        line: 75
      },
      "11": {
        loc: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 37
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 76,
            column: 18
          },
          end: {
            line: 76,
            column: 37
          }
        }],
        line: 76
      },
      "12": {
        loc: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 31
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 77,
            column: 15
          },
          end: {
            line: 77,
            column: 31
          }
        }],
        line: 77
      },
      "13": {
        loc: {
          start: {
            line: 79,
            column: 37
          },
          end: {
            line: 79,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 79,
            column: 37
          },
          end: {
            line: 79,
            column: 42
          }
        }, {
          start: {
            line: 79,
            column: 46
          },
          end: {
            line: 79,
            column: 59
          }
        }],
        line: 79
      },
      "14": {
        loc: {
          start: {
            line: 80,
            column: 39
          },
          end: {
            line: 80,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 80,
            column: 39
          },
          end: {
            line: 80,
            column: 46
          }
        }, {
          start: {
            line: 80,
            column: 50
          },
          end: {
            line: 80,
            column: 88
          }
        }],
        line: 80
      },
      "15": {
        loc: {
          start: {
            line: 91,
            column: 37
          },
          end: {
            line: 91,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 37
          },
          end: {
            line: 91,
            column: 42
          }
        }, {
          start: {
            line: 91,
            column: 46
          },
          end: {
            line: 91,
            column: 59
          }
        }],
        line: 91
      },
      "16": {
        loc: {
          start: {
            line: 92,
            column: 39
          },
          end: {
            line: 92,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 92,
            column: 39
          },
          end: {
            line: 92,
            column: 46
          }
        }, {
          start: {
            line: 92,
            column: 50
          },
          end: {
            line: 92,
            column: 56
          }
        }],
        line: 92
      },
      "17": {
        loc: {
          start: {
            line: 111,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 111,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        }, {
          start: {
            line: 113,
            column: 13
          },
          end: {
            line: 115,
            column: 7
          }
        }],
        line: 111
      },
      "18": {
        loc: {
          start: {
            line: 159,
            column: 8
          },
          end: {
            line: 164,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 159,
            column: 8
          },
          end: {
            line: 164,
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
        line: 159
      },
      "19": {
        loc: {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 169,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 169,
            column: 11
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
        line: 167
      },
      "20": {
        loc: {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 182,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 182,
            column: 19
          },
          end: {
            line: 182,
            column: 40
          }
        }, {
          start: {
            line: 182,
            column: 43
          },
          end: {
            line: 182,
            column: 47
          }
        }],
        line: 182
      },
      "21": {
        loc: {
          start: {
            line: 189,
            column: 15
          },
          end: {
            line: 191,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 191,
            column: 12
          },
          end: {
            line: 191,
            column: 62
          }
        }, {
          start: {
            line: 191,
            column: 65
          },
          end: {
            line: 191,
            column: 67
          }
        }],
        line: 189
      },
      "22": {
        loc: {
          start: {
            line: 189,
            column: 15
          },
          end: {
            line: 190,
            column: 82
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 189,
            column: 15
          },
          end: {
            line: 189,
            column: 53
          }
        }, {
          start: {
            line: 190,
            column: 23
          },
          end: {
            line: 190,
            column: 82
          }
        }],
        line: 189
      },
      "23": {
        loc: {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 207,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 207,
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
        line: 205
      },
      "24": {
        loc: {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 213,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 213,
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
        line: 211
      },
      "25": {
        loc: {
          start: {
            line: 236,
            column: 0
          },
          end: {
            line: 265,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 236,
            column: 0
          },
          end: {
            line: 265,
            column: 1
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
        line: 236
      },
      "26": {
        loc: {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 251,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 251,
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
        line: 249
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
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0
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
      "26": 0
    },
    b: {
      "0": [0, 0],
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0],
      "11": [0],
      "12": [0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3ac54d971009d499d51a3d34de5c7d9ac8e8a8f2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28ijnun3p1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_28ijnun3p1();











var Vue = (cov_28ijnun3p1().s[0]++, (0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.getGlobalVariable)("Vue"));
var $ = (cov_28ijnun3p1().s[1]++, (0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.getGlobalVariable)("$"));
var events = (cov_28ijnun3p1().s[2]++, (0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.getGlobalPMVariable)("events"));
cov_28ijnun3p1().s[3]++;
Vue.component("LanguageSelectorButton", function (resolve) {
  cov_28ijnun3p1().f[0]++;
  cov_28ijnun3p1().s[4]++;
  if (window.ProcessMaker.languageSelectorButtonComponent) {
    cov_28ijnun3p1().b[0][0]++;
    cov_28ijnun3p1().s[5]++;
    resolve(window.ProcessMaker.languageSelectorButtonComponent);
  } else {
    cov_28ijnun3p1().b[0][1]++;
    cov_28ijnun3p1().s[6]++;
    window.ProcessMaker.languageSelectorButtonComponentResolve = resolve;
  }
});

// Variables
var browser = (cov_28ijnun3p1().s[7]++, navigator.userAgent);
var isMobileDevice = (cov_28ijnun3p1().s[8]++, /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(browser));
var mobileApp = (cov_28ijnun3p1().s[9]++, !!isMobileDevice);
var isMobileNavbar = (cov_28ijnun3p1().s[10]++, events.$cookies.get("isMobile")); // Verify is in mobile mode

// Set our own specific alert function at the ProcessMaker global object that could
// potentially be overwritten by some custom theme support
cov_28ijnun3p1().s[11]++;
var alert = function alert(msg, variant) {
  var showValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_28ijnun3p1().b[1][0]++, 5);
  var stayNextScreen = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (cov_28ijnun3p1().b[2][0]++, false);
  var showLoader = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (cov_28ijnun3p1().b[3][0]++, false);
  var msgLink = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : (cov_28ijnun3p1().b[4][0]++, "");
  var msgTitle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : (cov_28ijnun3p1().b[5][0]++, "");
  cov_28ijnun3p1().f[1]++;
  cov_28ijnun3p1().s[12]++;
  if (showValue === 0) {
    cov_28ijnun3p1().b[6][0]++;
    cov_28ijnun3p1().s[13]++;
    // Just show it indefinitely, no countdown
    showValue = true;
  } else {
    cov_28ijnun3p1().b[6][1]++;
  }
  // amount of items allowed in array
  cov_28ijnun3p1().s[14]++;
  if (ProcessMaker.navbar.alerts.length > 5) {
    cov_28ijnun3p1().b[7][0]++;
    cov_28ijnun3p1().s[15]++;
    ProcessMaker.navbar.alerts.shift();
  } else {
    cov_28ijnun3p1().b[7][1]++;
  }
  cov_28ijnun3p1().s[16]++;
  ProcessMaker.navbar.alerts.push({
    alertText: msg,
    alertLink: msgLink,
    alertTitle: msgTitle,
    alertShow: showValue,
    alertVariant: String(variant),
    showLoader: showLoader,
    stayNextScreen: stayNextScreen,
    timestamp: Date.now()
  });
};

// Setup our login modal
cov_28ijnun3p1().s[17]++;
var sessionModal = function sessionModal(title, message, time, warnSeconds) {
  cov_28ijnun3p1().f[2]++;
  cov_28ijnun3p1().s[18]++;
  ProcessMaker.navbar.sessionTitle = (cov_28ijnun3p1().b[8][0]++, title) || (cov_28ijnun3p1().b[8][1]++, __("Session Warning"));
  cov_28ijnun3p1().s[19]++;
  ProcessMaker.navbar.sessionMessage = (cov_28ijnun3p1().b[9][0]++, message) || (cov_28ijnun3p1().b[9][1]++, __("Your session is about to expire."));
  cov_28ijnun3p1().s[20]++;
  ProcessMaker.navbar.sessionTime = time;
  cov_28ijnun3p1().s[21]++;
  ProcessMaker.navbar.sessionWarnSeconds = warnSeconds;
  cov_28ijnun3p1().s[22]++;
  ProcessMaker.navbar.sessionShow = true;
};
cov_28ijnun3p1().s[23]++;
var closeSessionModal = function closeSessionModal() {
  cov_28ijnun3p1().f[3]++;
  cov_28ijnun3p1().s[24]++;
  ProcessMaker.navbar.sessionShow = false;
  cov_28ijnun3p1().s[25]++;
  ProcessMaker.navbar.sessionIsRenewing = false;
};

// Set out own specific confirm modal.
cov_28ijnun3p1().s[26]++;
var confirmModal = function confirmModal(title, message, variant, callback) {
  var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (cov_28ijnun3p1().b[10][0]++, "md");
  var dataTestClose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : (cov_28ijnun3p1().b[11][0]++, "confirm-btn-close");
  var dataTestOk = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : (cov_28ijnun3p1().b[12][0]++, "confirm-btn-ok");
  cov_28ijnun3p1().f[4]++;
  cov_28ijnun3p1().s[27]++;
  ProcessMaker.navbar.confirmTitle = (cov_28ijnun3p1().b[13][0]++, title) || (cov_28ijnun3p1().b[13][1]++, __("Confirm"));
  cov_28ijnun3p1().s[28]++;
  ProcessMaker.navbar.confirmMessage = (cov_28ijnun3p1().b[14][0]++, message) || (cov_28ijnun3p1().b[14][1]++, __("Are you sure you want to delete?"));
  cov_28ijnun3p1().s[29]++;
  ProcessMaker.navbar.confirmVariant = variant;
  cov_28ijnun3p1().s[30]++;
  ProcessMaker.navbar.confirmCallback = callback;
  cov_28ijnun3p1().s[31]++;
  ProcessMaker.navbar.confirmShow = true;
  cov_28ijnun3p1().s[32]++;
  ProcessMaker.navbar.confirmSize = size;
  cov_28ijnun3p1().s[33]++;
  ProcessMaker.navbar.confirmDataTestClose = dataTestClose;
  cov_28ijnun3p1().s[34]++;
  ProcessMaker.navbar.confirmDataTestOk = dataTestOk;
};

// Set out own specific message modal.
cov_28ijnun3p1().s[35]++;
var messageModal = function messageModal(title, message, variant, callback) {
  cov_28ijnun3p1().f[5]++;
  cov_28ijnun3p1().s[36]++;
  ProcessMaker.navbar.messageTitle = (cov_28ijnun3p1().b[15][0]++, title) || (cov_28ijnun3p1().b[15][1]++, __("Message"));
  cov_28ijnun3p1().s[37]++;
  ProcessMaker.navbar.messageMessage = (cov_28ijnun3p1().b[16][0]++, message) || (cov_28ijnun3p1().b[16][1]++, __(""));
  cov_28ijnun3p1().s[38]++;
  ProcessMaker.navbar.messageVariant = variant;
  cov_28ijnun3p1().s[39]++;
  ProcessMaker.navbar.messageCallback = callback;
  cov_28ijnun3p1().s[40]++;
  ProcessMaker.navbar.messageShow = true;
};

// Assign our navbar component to our global ProcessMaker object
var navbar = (cov_28ijnun3p1().s[41]++, new Vue({
  el: "#navbar",
  components: {
    TopMenu: _components_Menu_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    requestModal: _components_requests_modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    notifications: _notifications_components_notifications_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    sessionModal: _components_Session_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ConfirmationModal: _components_Confirm_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    MessageModal: _components_Message_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NavbarProfile: _components_NavbarProfile_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    newRequestModal: _components_requests_requestModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    GlobalSearch: function GlobalSearch(resolve) {
      cov_28ijnun3p1().f[6]++;
      cov_28ijnun3p1().s[42]++;
      if (window.ProcessMaker.globalSearchComponent) {
        cov_28ijnun3p1().b[17][0]++;
        cov_28ijnun3p1().s[43]++;
        resolve(window.ProcessMaker.globalSearchComponent);
      } else {
        cov_28ijnun3p1().b[17][1]++;
        cov_28ijnun3p1().s[44]++;
        window.ProcessMaker.globalSearchComponentResolve = resolve;
      }
    }
  },
  data: function data() {
    cov_28ijnun3p1().f[7]++;
    cov_28ijnun3p1().s[45]++;
    return {
      screenBuilder: null,
      messages: ProcessMaker.notifications,
      alerts: this.loadLocalAlerts(),
      confirmTitle: "",
      confirmMessage: "",
      confirmVariant: "",
      confirmCallback: "",
      confirmSize: "md",
      confirmDataTestClose: "confirm-btn-close",
      confirmDataTestOk: "confirm-btn-ok",
      messageTitle: "",
      messageMessage: "",
      messageVariant: "",
      messageCallback: "",
      confirmShow: false,
      sessionShow: false,
      messageShow: false,
      sessionTitle: "",
      sessionMessage: "",
      sessionTime: "",
      sessionWarnSeconds: "",
      sessionIsRenewing: false,
      taskTitle: "",
      isMobile: false,
      isMobileDevice: mobileApp,
      isNavbarExpanded: false
    };
  },
  watch: {
    alerts: function alerts(array) {
      cov_28ijnun3p1().f[8]++;
      cov_28ijnun3p1().s[46]++;
      this.saveLocalAlerts(array);
    }
  },
  mounted: function mounted() {
    var _this = this;
    cov_28ijnun3p1().f[9]++;
    cov_28ijnun3p1().s[47]++;
    Vue.nextTick() // This is needed to override the default alert method.
    .then(function () {
      cov_28ijnun3p1().f[10]++;
      cov_28ijnun3p1().s[48]++;
      _this.onResize();
      cov_28ijnun3p1().s[49]++;
      window.addEventListener("resize", _this.onResize, {
        passive: true
      });
      cov_28ijnun3p1().s[50]++;
      if (document.querySelector("meta[name='alert']")) {
        cov_28ijnun3p1().b[18][0]++;
        cov_28ijnun3p1().s[51]++;
        ProcessMaker.alert(document.querySelector("meta[name='alertMessage']").getAttribute("content"), document.querySelector("meta[name='alertVariant']").getAttribute("content"));
      } else {
        cov_28ijnun3p1().b[18][1]++;
      }
      var findSB = (cov_28ijnun3p1().s[52]++, setInterval(function () {
        cov_28ijnun3p1().f[11]++;
        cov_28ijnun3p1().s[53]++;
        _this.screenBuilder = window.ProcessMaker.ScreenBuilder; // window.ProcessMaker.ScreenBuilder is not defined in the global scope
        cov_28ijnun3p1().s[54]++;
        if (_this.screenBuilder) {
          cov_28ijnun3p1().b[19][0]++;
          cov_28ijnun3p1().s[55]++;
          clearInterval(findSB);
        } else {
          cov_28ijnun3p1().b[19][1]++;
        }
      }, 80));
    });
  },
  methods: {
    alertDownChanged: function alertDownChanged(dismissCountDown, item) {
      cov_28ijnun3p1().f[12]++;
      cov_28ijnun3p1().s[56]++;
      item.alertShow = dismissCountDown;
      cov_28ijnun3p1().s[57]++;
      this.saveLocalAlerts(this.alerts);
    },
    alertDismissed: function alertDismissed(alert) {
      cov_28ijnun3p1().f[13]++;
      cov_28ijnun3p1().s[58]++;
      alert.alertShow = 0;
      var index = (cov_28ijnun3p1().s[59]++, this.alerts.indexOf(alert));
      var copy = (cov_28ijnun3p1().s[60]++, _.cloneDeep(this.alerts));
      cov_28ijnun3p1().s[61]++;
      index > -1 ? (cov_28ijnun3p1().b[20][0]++, copy.splice(index, 1)) : (cov_28ijnun3p1().b[20][1]++, null);
      // remove old alerts
      cov_28ijnun3p1().s[62]++;
      copy = copy.filter(function (item) {
        cov_28ijnun3p1().f[14]++;
        cov_28ijnun3p1().s[63]++;
        return (Date.now() - item.timestamp) / 1000 < item.alertShow;
      });
      cov_28ijnun3p1().s[64]++;
      this.saveLocalAlerts(copy);
    },
    loadLocalAlerts: function loadLocalAlerts() {
      cov_28ijnun3p1().f[15]++;
      cov_28ijnun3p1().s[65]++;
      try {
        cov_28ijnun3p1().s[66]++;
        return (cov_28ijnun3p1().b[22][0]++, window.localStorage.processmakerAlerts) && (cov_28ijnun3p1().b[22][1]++, window.localStorage.processmakerAlerts.substr(0, 1) === "[") ? (cov_28ijnun3p1().b[21][0]++, JSON.parse(window.localStorage.processmakerAlerts)) : (cov_28ijnun3p1().b[21][1]++, []);
      } catch (e) {
        cov_28ijnun3p1().s[67]++;
        return [];
      }
    },
    saveLocalAlerts: function saveLocalAlerts(array) {
      cov_28ijnun3p1().f[16]++;
      var nextScreenAlerts = (cov_28ijnun3p1().s[68]++, array.filter(function (alert) {
        cov_28ijnun3p1().f[17]++;
        cov_28ijnun3p1().s[69]++;
        return alert.stayNextScreen;
      }));
      cov_28ijnun3p1().s[70]++;
      window.localStorage.processmakerAlerts = JSON.stringify(nextScreenAlerts);
    },
    switchToMobile: function switchToMobile() {
      cov_28ijnun3p1().f[18]++;
      cov_28ijnun3p1().s[71]++;
      this.$cookies.set("isMobile", true);
      cov_28ijnun3p1().s[72]++;
      window.open("/requests", "_self");
    },
    getRoutes: function getRoutes() {
      cov_28ijnun3p1().f[19]++;
      cov_28ijnun3p1().s[73]++;
      if (this.$refs.breadcrumbs) {
        cov_28ijnun3p1().b[23][0]++;
        cov_28ijnun3p1().s[74]++;
        return this.$refs.breadcrumbs.list;
      } else {
        cov_28ijnun3p1().b[23][1]++;
      }
      cov_28ijnun3p1().s[75]++;
      return [];
    },
    setRoutes: function setRoutes(routes) {
      cov_28ijnun3p1().f[20]++;
      cov_28ijnun3p1().s[76]++;
      if (this.$refs.breadcrumbs) {
        cov_28ijnun3p1().b[24][0]++;
        cov_28ijnun3p1().s[77]++;
        return this.$refs.breadcrumbs.updateRoutes(routes);
      } else {
        cov_28ijnun3p1().b[24][1]++;
      }
      cov_28ijnun3p1().s[78]++;
      return false;
    },
    onResize: function onResize() {
      cov_28ijnun3p1().f[21]++;
      cov_28ijnun3p1().s[79]++;
      this.isMobile = window.innerWidth < 992;
    },
    toggleNavbar: function toggleNavbar() {
      cov_28ijnun3p1().f[22]++;
      cov_28ijnun3p1().s[80]++;
      this.isNavbarExpanded = !this.isNavbarExpanded;
    }
  }
}));
cov_28ijnun3p1().s[81]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("mobileApp", mobileApp);
cov_28ijnun3p1().s[82]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("alert", alert);
cov_28ijnun3p1().s[83]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("sessionModal", sessionModal);
cov_28ijnun3p1().s[84]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("closeSessionModal", closeSessionModal);
cov_28ijnun3p1().s[85]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("confirmModal", confirmModal);
cov_28ijnun3p1().s[86]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("messageModal", messageModal);
cov_28ijnun3p1().s[87]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("navbar", navbar);
// Breadcrumbs are now part of the navbar component. Alias it here.
cov_28ijnun3p1().s[88]++;
(0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("breadcrumbs", navbar);

// Assign our navbar component to our global ProcessMaker object
cov_28ijnun3p1().s[89]++;
if (isMobileNavbar === "true") {
  cov_28ijnun3p1().b[25][0]++;
  var navbarMobile = (cov_28ijnun3p1().s[90]++, new Vue({
    el: "#navbarMobile",
    components: {
      requestModalMobile: _components_requests_modalMobile_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      WelcomeModal: _Mobile_WelcomeModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    data: function data() {
      cov_28ijnun3p1().f[23]++;
      cov_28ijnun3p1().s[91]++;
      return {
        display: true
      };
    },
    mounted: function mounted() {
      cov_28ijnun3p1().f[24]++;
      cov_28ijnun3p1().s[92]++;
      if (this.$cookies.get("firstMounted") === "true") {
        cov_28ijnun3p1().b[26][0]++;
        cov_28ijnun3p1().s[93]++;
        $("#welcomeModal").modal("show");
      } else {
        cov_28ijnun3p1().b[26][1]++;
      }
    },
    methods: {
      switchToDesktop: function switchToDesktop() {
        cov_28ijnun3p1().f[25]++;
        cov_28ijnun3p1().s[94]++;
        this.$cookies.set("isMobile", false);
        cov_28ijnun3p1().s[95]++;
        window.location.reload();
      },
      onResize: function onResize() {
        cov_28ijnun3p1().f[26]++;
        cov_28ijnun3p1().s[96]++;
        this.isMobile = window.innerWidth < 992;
      }
    }
  }));
  cov_28ijnun3p1().s[97]++;
  (0,_globalVariables__WEBPACK_IMPORTED_MODULE_10__.setGlobalPMVariable)("navbarMobile", navbarMobile);
} else {
  cov_28ijnun3p1().b[25][1]++;
}

/***/ }),

/***/ "./resources/js/notifications/notifications-mixin.js":
/*!***********************************************************!*\
  !*** ./resources/js/notifications/notifications-mixin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cov_7zthu3zys() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/notifications/notifications-mixin.js";
  var hash = "3ca006e0341d397deafe6523c95fc785054bffb4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/notifications/notifications-mixin.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 6,
          column: 7
        }
      },
      "1": {
        start: {
          line: 5,
          column: 8
        },
        end: {
          line: 5,
          column: 67
        }
      },
      "2": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 18
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 78
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "5": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 77
        }
      },
      "6": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 69
        }
      },
      "7": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 70
        }
      },
      "8": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 69
        }
      },
      "9": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "10": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 41,
          column: 8
        }
      },
      "11": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "12": {
        start: {
          line: 35,
          column: 10
        },
        end: {
          line: 37,
          column: 11
        }
      },
      "13": {
        start: {
          line: 36,
          column: 12
        },
        end: {
          line: 36,
          column: 52
        }
      },
      "14": {
        start: {
          line: 38,
          column: 10
        },
        end: {
          line: 38,
          column: 50
        }
      },
      "15": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 20
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
            column: 18
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 11
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
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
            column: 11
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
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
            column: 23
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
            column: 15
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 18
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 25
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 21
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        loc: {
          start: {
            line: 24,
            column: 20
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 27,
            column: 18
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 27
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        loc: {
          start: {
            line: 32,
            column: 34
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 32
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 33,
            column: 13
          },
          end: {
            line: 33,
            column: 14
          }
        },
        loc: {
          start: {
            line: 33,
            column: 26
          },
          end: {
            line: 41,
            column: 7
          }
        },
        line: 33
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 6,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 6,
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
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 10
          },
          end: {
            line: 4,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 4,
            column: 10
          },
          end: {
            line: 4,
            column: 32
          }
        }, {
          start: {
            line: 4,
            column: 36
          },
          end: {
            line: 4,
            column: 53
          }
        }],
        line: 4
      },
      "2": {
        loc: {
          start: {
            line: 5,
            column: 15
          },
          end: {
            line: 5,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 15
          },
          end: {
            line: 5,
            column: 39
          }
        }, {
          start: {
            line: 5,
            column: 43
          },
          end: {
            line: 5,
            column: 66
          }
        }],
        line: 5
      },
      "3": {
        loc: {
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 40
          }
        }, {
          start: {
            line: 10,
            column: 44
          },
          end: {
            line: 10,
            column: 77
          }
        }],
        line: 10
      },
      "4": {
        loc: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 39,
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
        line: 34
      },
      "5": {
        loc: {
          start: {
            line: 35,
            column: 10
          },
          end: {
            line: 37,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 10
          },
          end: {
            line: 37,
            column: 11
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
        line: 35
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
      "15": 0
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
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3ca006e0341d397deafe6523c95fc785054bffb4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7zthu3zys = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7zthu3zys();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    displayUser: function displayUser() {
      cov_7zthu3zys().f[0]++;
      cov_7zthu3zys().s[0]++;
      if ((cov_7zthu3zys().b[1][0]++, "user_id" in this.data) && (cov_7zthu3zys().b[1][1]++, !this.isInboxRule)) {
        var _this$data$user;
        cov_7zthu3zys().b[0][0]++;
        cov_7zthu3zys().s[1]++;
        return (cov_7zthu3zys().b[2][0]++, (_this$data$user = this.data.user) === null || _this$data$user === void 0 ? void 0 : _this$data$user.fullname) || (cov_7zthu3zys().b[2][1]++, this.$t("Unknown User"));
      } else {
        cov_7zthu3zys().b[0][1]++;
      }
      cov_7zthu3zys().s[2]++;
      return null;
    },
    user: function user() {
      cov_7zthu3zys().f[1]++;
      cov_7zthu3zys().s[3]++;
      return (cov_7zthu3zys().b[3][0]++, this.notification.data.user) || (cov_7zthu3zys().b[3][1]++, {
        name: this.$t("Unknown User")
      });
    },
    data: function data() {
      cov_7zthu3zys().f[2]++;
      cov_7zthu3zys().s[4]++;
      return this.notification.data;
    },
    filteredMessages: function filteredMessages() {
      cov_7zthu3zys().f[3]++;
      cov_7zthu3zys().s[5]++;
      return this.messages.filter(this.commentFilterFn(this.filterComments));
    },
    allCount: function allCount() {
      cov_7zthu3zys().f[4]++;
      cov_7zthu3zys().s[6]++;
      return this.messages.filter(this.commentFilterFn(null)).length;
    },
    notificationsCount: function notificationsCount() {
      cov_7zthu3zys().f[5]++;
      cov_7zthu3zys().s[7]++;
      return this.messages.filter(this.commentFilterFn(false)).length;
    },
    commentsCount: function commentsCount() {
      cov_7zthu3zys().f[6]++;
      cov_7zthu3zys().s[8]++;
      return this.messages.filter(this.commentFilterFn(true)).length;
    },
    isInboxRule: function isInboxRule() {
      cov_7zthu3zys().f[7]++;
      cov_7zthu3zys().s[9]++;
      return this.data.type === "INBOX_RULE";
    }
  },
  methods: {
    commentFilterFn: function commentFilterFn(onlyComments) {
      cov_7zthu3zys().f[8]++;
      cov_7zthu3zys().s[10]++;
      return function (message) {
        cov_7zthu3zys().f[9]++;
        cov_7zthu3zys().s[11]++;
        if (onlyComments !== null) {
          var _message$data2;
          cov_7zthu3zys().b[4][0]++;
          cov_7zthu3zys().s[12]++;
          if (onlyComments) {
            var _message$data;
            cov_7zthu3zys().b[5][0]++;
            cov_7zthu3zys().s[13]++;
            return ((_message$data = message.data) === null || _message$data === void 0 ? void 0 : _message$data.type) === "COMMENT";
          } else {
            cov_7zthu3zys().b[5][1]++;
          }
          cov_7zthu3zys().s[14]++;
          return ((_message$data2 = message.data) === null || _message$data2 === void 0 ? void 0 : _message$data2.type) !== "COMMENT";
        } else {
          cov_7zthu3zys().b[4][1]++;
        }
        cov_7zthu3zys().s[15]++;
        return true;
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-4cea53aa],\n.dateInfo[data-v-4cea53aa] {\n  color: #57646F;\n}\n.titleInfo[data-v-4cea53aa] {\n  color: #1572C2;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.badge-custom[data-v-4cea53aa] {\n  color: #44494E;\n  background-color: #FFF5DB;\n}\n.align-left[data-v-4cea53aa] {\n  text-align: end;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.top-20 {\n    top: 20%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.screen-toolbar-button[data-v-7fa2c4ca] {\n  color: #556271;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.top-20 {\n    top: 20%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.count[data-v-d5ff4cde] {\n  margin: 0.3em;\n  border-left: 3px solid;\n  vertical-align: middle;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n}\n.count > div[data-v-d5ff4cde] {\n  float: right;\n  background-color: gray;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  padding-top: 1px;\n}\n.priority[data-v-d5ff4cde] {\n  border-color: #ED4858;\n}\n.priority > div[data-v-d5ff4cde] {\n  color: #ED4858;\n  background-color: #FBD1D5;\n}\n.reassign[data-v-d5ff4cde] {\n  border-color: #7101A6;\n}\n.reassign > div[data-v-d5ff4cde] {\n  color: #7101A6;\n  background-color: #E5D1FF;\n}\n.draft[data-v-d5ff4cde] {\n  border-color: #1572C2;\n}\n.draft > div[data-v-d5ff4cde] {\n  color: #1572C2;\n  background-color: #C4DCF0;\n}\n.submit[data-v-d5ff4cde] {\n  border-color: #4EA075;\n}\n.submit > div[data-v-d5ff4cde] {\n  color: #4EA075;\n  background-color: #D3E7DC;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-notification-btn-warning{\n    background-color: #FFEABF;\n    border-color: #FFEABF;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrap-name[data-v-2eb90a9e] {\n  font-size: 16px;\n  font-weight: 600;\n  width: 140px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.wrap-name[data-v-2eb90a9e]:hover {\n  white-space: initial;\n  overflow: visible;\n  cursor: pointer;\n}\n.item[data-v-2eb90a9e] {\n  font-size: 12px;\n  padding: 5px;\n  width: 160px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon-container[data-v-9a2a6aa6] {\n  display: inline-block;\n  width: 5em;\n  margin-bottom: 1em;\n}\n.icon-container i[data-v-9a2a6aa6] {\n  color: #b7bfc5;\n  font-size: 5em;\n}\n.icon-container svg[data-v-9a2a6aa6] {\n  fill: #b7bfc5;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon-container[data-v-2efe3c0e] {\n  display: inline-block;\n  width: 5em;\n  margin-bottom: 1em;\n}\n.icon-container i[data-v-2efe3c0e] {\n  color: #b7bfc5;\n  font-size: 5em;\n}\n.icon-container svg[data-v-2efe3c0e] {\n  fill: #b7bfc5;\n}\n.search[data-v-2efe3c0e] {\n  width: 100%;\n}\n.loading-text[data-v-2efe3c0e] {\n  color: #556271;\n  margin: 0px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n}\n.loading-title[data-v-2efe3c0e] {\n  margin-bottom: 8px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: -0.04em;\n}\n.process-list[data-v-2efe3c0e] {\n  height: calc(100vh - 14rem);\n  overflow-y: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-113f64be] {\n  margin: 16px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n.item.clickable[data-v-113f64be] {\n  cursor: pointer;\n  touch-action: manipulation;\n}\n.item.clickable[data-v-113f64be]:hover {\n  background-color: #ffe3b9;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item.clickable[data-v-57ecab41] {\n  cursor: pointer;\n}\n.item.item.clickable[data-v-57ecab41]:hover {\n  background-color: #ffe3b9;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".message-title[data-v-47f88f6e] {\n  font-size: 1.2em;\n}\n.message-sm[data-v-47f88f6e] {\n  font-size: 0.8em;\n  margin-bottom: 1em;\n}\n.bubble[data-v-47f88f6e] {\n  background-color: #e8f0fe;\n  border-radius: 1em;\n  padding: 1em;\n  margin-top: 1em;\n}\n.bubble-sm[data-v-47f88f6e] {\n  font-size: 0.8em;\n  background-color: #e8f0fe;\n  border-radius: 1em;\n  padding: 1em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".notification-icon[data-v-01dafff9] {\n  background-color: #EC8E00;\n  width: 40px;\n  height: 40px;\n}\n.notification-icon i[data-v-01dafff9] {\n  color: white;\n  font-size: 1.6em;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".no-notifications[data-v-4db659f4] {\n  text-align: center;\n  height: 600px;\n}\n.no-notifications img[data-v-4db659f4] {\n  width: 190px;\n  margin-top: 100px;\n  margin-bottom: 20px;\n}\n.no-notifications .nav-tabs .nav-link[data-v-4db659f4]:hover {\n  border: 0 !important;\n}\n.no-notifications-mobile[data-v-4db659f4] {\n  text-align: center;\n}\n.no-notifications-mobile img[data-v-4db659f4] {\n  width: 120px;\n  margin-top: 48px;\n  margin-bottom: 24px;\n}\n.no-notifications-mobile h5[data-v-4db659f4] {\n  margin-bottom: 24px;\n}\n.custom-popover[data-v-4db659f4] {\n  background-color: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.notification-list[data-v-4db659f4] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.lighten[data-v-4db659f4] {\n  background-color: #ffe3b9;\n}\n.button-dismiss[data-v-4db659f4] {\n  font-size: 12px;\n  padding: 0;\n}\n.notification-popover[data-v-4db659f4] {\n  font-size: 12px;\n  width: 450px;\n}\n.notification-popover-col[data-v-4db659f4] {\n  height: auto !important;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-tabs {\n  border-bottom: 0 !important;\n  font-size: 1.2em;\n  flex-direction: row;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-link {\n  color: #728092;\n  border-bottom: 3px solid transparent;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-link.active {\n  color: #2773F3;\n  font-weight: bold;\n  border-bottom: 3px solid #2773F3;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-tabs .nav-link {\n  border-bottom: 0 !important;\n  border: 0 !important;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-tabs .nav-link .badge {\n  margin-right: 0.5em;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-tabs .nav-link:hover {\n  background-color: transparent !important;\n}\n.notification-popover[data-v-4db659f4] .tabs .nav-tabs .nav-link:not(.active) .badge {\n  background-color: #ffe3b9 !important;\n}\n.external-link[data-v-4db659f4] {\n  color: #728092;\n}\n.notification-link[data-v-4db659f4] {\n  font-size: 14px;\n}\n.count-info[data-v-4db659f4] {\n  color: #788793;\n}\n.count-info .badge[data-v-4db659f4] {\n  font-size: 10px;\n  padding: 2px 5px;\n  position: absolute;\n  right: 88px;\n  top: 17px;\n}\n.count-info #info-large[data-v-4db659f4] {\n  position: absolute;\n  right: 83px;\n  top: 17px;\n}\n.popover[data-v-4db659f4] {\n  max-width: 450px;\n  top: -8px;\n}\n.items[data-v-4db659f4] {\n  height: 600px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.notification-menu-button[data-v-4db659f4] {\n  color: #20242A;\n}\n.notification-menu-button i[data-v-4db659f4] {\n  color: #FFFFFF;\n}\n.notification-menu-button.is-open[data-v-4db659f4],\n.notification-menu-button.is-open i[data-v-4db659f4] {\n  color: #FFFFFF;\n}\n.bell-icon[data-v-4db659f4] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.bell-icon i[data-v-4db659f4] {\n  font-size: 19px;\n  padding-right: 1px;\n  color: #728092;\n}\n.bell-icon .dot[data-v-4db659f4] {\n  height: 10px;\n  width: 10px;\n  background-color: #EC5962;\n  border-radius: 50%;\n  position: relative;\n  display: inline-block;\n  top: -6px;\n  margin-left: -10px;\n}\n@media only screen and (max-width: 600px) {\n.notification-popover-wrapper.popover[data-v-4db659f4] {\n    transform: translate3d(0px, 0px, 0px) !important;\n    right: 0;\n    height: auto;\n    max-width: 100%;\n}\n.notification-popover[data-v-4db659f4] {\n    width: auto;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_style_index_0_id_4cea53aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_style_index_0_id_4cea53aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_style_index_0_id_4cea53aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_27f69fb6_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_27f69fb6_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_27f69fb6_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_b91a6428_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Message.vue?vue&type=style&index=0&id=b91a6428&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_b91a6428_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_b91a6428_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_style_index_0_id_d5ff4cde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_style_index_0_id_d5ff4cde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_style_index_0_id_d5ff4cde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_4db659f4_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_4db659f4_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_4db659f4_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_style_index_0_id_2eb90a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_style_index_0_id_2eb90a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_style_index_0_id_2eb90a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_9a2a6aa6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_9a2a6aa6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_9a2a6aa6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_style_index_0_id_2efe3c0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_style_index_0_id_2efe3c0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_style_index_0_id_2efe3c0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_style_index_0_id_113f64be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_style_index_0_id_113f64be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_style_index_0_id_113f64be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_style_index_0_id_57ecab41_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_style_index_0_id_57ecab41_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_style_index_0_id_57ecab41_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_style_index_0_id_47f88f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_style_index_0_id_47f88f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_style_index_0_id_47f88f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_style_index_0_id_01dafff9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_style_index_0_id_01dafff9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_style_index_0_id_01dafff9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_id_4db659f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_id_4db659f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_id_4db659f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-croppie/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-croppie/dist/index.js ***!
  \************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2464__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _croppie = __nested_webpack_require_2464__(1);

__nested_webpack_require_2464__(6);

var VueCroppie = {
  install: function install(Vue, options) {
    var comp = Vue.extend({
      render: function render(h) {
        return h('div', {
          class: this.customClass,
          ref: 'croppieContainer',
          id: 'croppieContainer'
        });
      },

      props: {
        boundary: {
          type: Object,
          default: function _default() {
            return {
              width: 400,
              height: 400
            };
          }
        },
        customClass: String,
        enableExif: Boolean,
        enableOrientation: {
          type: Boolean,
          default: true
        },
        enableResize: {
          type: Boolean,
          default: true
        },
        enableZoom: {
          type: Boolean,
          default: true
        },
        enforceBoundary: {
          type: Boolean,
          default: true
        },
        mouseWheelZoom: {
          type: Boolean,
          default: true
        },
        showZoomer: {
          type: Boolean,
          default: true
        },
        viewport: {
          type: Object,
          default: function _default() {
            return {
              width: 200,
              height: 200,
              type: 'square'
            };
          }
        }
      },
      mounted: function mounted() {
        this.initCroppie();
      },
      data: function data() {
        return {
          croppie: null
        };
      },

      methods: {
        initCroppie: function initCroppie() {
          var _this = this;

          var el = this.$refs.croppieContainer;

          el.addEventListener('update', function (ev) {
            _this.$emit('update', ev.detail);
          });

          this.croppie = new _croppie.Croppie(el, {
            boundary: this.boundary,
            enableExif: this.enableExif,
            enableOrientation: this.enableOrientation,
            enableZoom: this.enableZoom,
            enableResize: this.enableResize,
            enforceBoundary: this.enforceBoundary,
            mouseWheelZoom: this.mouseWheelZoom,
            viewport: this.viewport,
            showZoomer: this.showZoomer
          });
        },
        bind: function bind(options) {
          return this.croppie.bind(options);
        },
        destroy: function destroy() {
          this.croppie.destroy();
        },
        get: function get(cb) {
          if (cb) {
            cb(this.croppie.get());
          } else {
            return this.croppie.get();
          }
        },
        rotate: function rotate(angle) {
          this.croppie.rotate(angle);
        },
        setZoom: function setZoom(value) {
          this.croppie.setZoom(value);
        },
        result: function result(options, cb) {
          var _this2 = this;

          if (!options) options = { type: 'base64' };
          return this.croppie.result(options).then(function (output) {
            if (!cb) {
              _this2.$emit('result', output);
            } else {
              cb(output);
            }
            return output;
          });
        },
        refresh: function refresh() {
          this.croppie.destroy();
          this.initCroppie();
        }
      }
    });
    Vue.component('vue-croppie', comp);
  }
};

exports.default = VueCroppie;

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_5993__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*************************
 * Croppie
 * Copyright 2017
 * Foliotek
 * Version: 2.6.1
 *************************/
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function (exports) {

    /* Polyfills */
    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"==typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"==typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a},"undefined"!=typeof module&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    if ( typeof window.CustomEvent !== "function" ) {
        (function(){
            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        }());
    }

    if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
                len = binStr.length,
                arr = new Uint8Array(len);

                for (var i=0; i<len; i++ ) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback( new Blob( [arr], {type: type || 'image/png'} ) );
            }
        });
    }
    /* End Polyfills */

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = document.createElement('div').style,
        EXIF_NORM = [1,8,3,6],
        EXIF_FLIP = [2,7,4,5],
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    function getExifOffset(ornt, rotate) {
        var arr = EXIF_NORM.indexOf(ornt) > -1 ? EXIF_NORM : EXIF_FLIP,
            index = arr.indexOf(ornt),
            offset = (rotate / 90) % arr.length;// 180 = 2%4 = 2 shift exif by 2 indexes

        return arr[(arr.length + index + (offset % arr.length)) % arr.length];
    }

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function clone(object) {
        return deepExtend({}, object);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    function num(v) {
        return parseInt(v, 10);
    }

    /* Utilities */
    function loadImage(src, doExif) {
        var img = new Image();
        img.style.opacity = 0;
        return new Promise(function (resolve) {
            function _resolve() {
                img.style.opacity = 1;
                setTimeout(function () {
                    resolve(img);
                }, 1);
            }

            img.removeAttribute('crossOrigin');
            if (src.match(/^https?:\/\/|^\/\//)) {
                img.setAttribute('crossOrigin', 'anonymous');
            }

            img.onload = function () {
                if (doExif) {
                    EXIF.getData(img, function () {
                        _resolve();
                    });
                }
                else {
                    _resolve();
                }
            };
            img.src = src;
        });
    }

    function naturalImageDimensions(img, ornt) {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orient = ornt || getExifOrientation(img);
        if (orient && orient >= 5) {
            var x= w;
            w = h;
            h = x;
        }
        return { width: w, height: h };
    }

    /* CSS Transform Prototype */
    var TRANSLATE_OPTS = {
        'translate3d': {
            suffix: ', 0px'
        },
        'translate': {
            suffix: ''
        }
    };
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(num(vals[4]), num(vals[5]), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(Croppie.globals.translate.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        var suffix = TRANSLATE_OPTS[Croppie.globals.translate].suffix || '';
        return Croppie.globals.translate + '(' + this.x + 'px, ' + this.y + 'px' + suffix + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img) {
        return img.exifdata ? img.exifdata.Orientation : 1;
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
          case 2:
             ctx.translate(width, 0);
             ctx.scale(-1, 1);
             break;

          case 3:
              ctx.translate(width, height);
              ctx.rotate(180*Math.PI/180);
              break;

          case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

          case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.scale(1, -1);
              break;

          case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.translate(0, -height);
              break;

          case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90*Math.PI/180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

          case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90*Math.PI/180);
              break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, bw, bh;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = self.elements.img;
        }

        addClass(boundary, 'cr-boundary');
        boundary.setAttribute('aria-dropeffect', 'none');
        bw = self.options.boundary.width;
        bh = self.options.boundary.height;
        css(boundary, {
            width: (bw + (isNaN(bw) ? '' : 'px')),
            height: (bh + (isNaN(bh) ? '' : 'px'))
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        setAttributes(self.elements.preview, { 'alt': 'preview', 'aria-grabbed': 'false' });
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }

        if (self.options.enableResize) {
            _initializeResize.call(self);
        }
    }

    // function _initRotationControls () {
    //     var self = this,
    //         wrap, btnLeft, btnRight, iLeft, iRight;

    //     wrap = document.createElement('div');
    //     self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
    //     self.elements.orientationBtnRight = btnRight = document.createElement('button');

    //     wrap.appendChild(btnLeft);
    //     wrap.appendChild(btnRight);

    //     iLeft = document.createElement('i');
    //     iRight = document.createElement('i');
    //     btnLeft.appendChild(iLeft);
    //     btnRight.appendChild(iRight);

    //     addClass(wrap, 'cr-rotate-controls');
    //     addClass(btnLeft, 'cr-rotate-l');
    //     addClass(btnRight, 'cr-rotate-r');

    //     self.elements.boundary.appendChild(wrap);

    //     btnLeft.addEventListener('click', function () {
    //         self.rotate(-90);
    //     });
    //     btnRight.addEventListener('click', function () {
    //         self.rotate(90);
    //     });
    // }

    function _hasExif() {
        return this.options.enableExif && window.EXIF;
    }

    function _initializeResize () {
        var self = this;
        var wrap = document.createElement('div');
        var isDragging = false;
        var direction;
        var originalX;
        var originalY;
        var minSize = 50;
        var maxWidth;
        var maxHeight;
        var vr;
        var hr;

        addClass(wrap, 'cr-resizer');
        css(wrap, {
            width: this.options.viewport.width + 'px',
            height: this.options.viewport.height + 'px'
        });

        if (this.options.resizeControls.height) {
            vr = document.createElement('div');
            addClass(vr, 'cr-resizer-vertical');
            wrap.appendChild(vr);
        }

        if (this.options.resizeControls.width) {
            hr = document.createElement('div');
            addClass(hr, 'cr-resizer-horisontal');
            wrap.appendChild(hr);
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) {
                return;
            }

            var overlayRect = self.elements.overlay.getBoundingClientRect();

            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;
            direction = ev.currentTarget.className.indexOf('vertical') !== -1 ? 'v' : 'h';
            maxWidth = overlayRect.width;
            maxHeight = overlayRect.height;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
        }

        function mouseMove(ev) {
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            ev.preventDefault();

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX;
            var deltaY = pageY - originalY;
            var newHeight = self.options.viewport.height + deltaY;
            var newWidth = self.options.viewport.width + deltaX;

            if (direction === 'v' && newHeight >= minSize && newHeight <= maxHeight) {
                css(wrap, {
                    height: newHeight + 'px'
                });

                self.options.boundary.height += deltaY;
                css(self.elements.boundary, {
                    height: self.options.boundary.height + 'px'
                });

                self.options.viewport.height += deltaY;
                css(self.elements.viewport, {
                    height: self.options.viewport.height + 'px'
                });
            }
            else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
                css(wrap, {
                    width: newWidth + 'px'
                });

                self.options.boundary.width += deltaX;
                css(self.elements.boundary, {
                    width: self.options.boundary.width + 'px'
                });

                self.options.viewport.width += deltaX;
                css(self.elements.viewport, {
                    width: self.options.viewport.width + 'px'
                });
            }

            _updateOverlay.call(self);
            _updateZoomLimits.call(self);
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
        }

        if (vr) {
            vr.addEventListener('mousedown', mouseDown);
            vr.addEventListener('touchstart', mouseDown);
        }

        if (hr) {
            hr.addEventListener('mousedown', mouseDown);
            hr.addEventListener('touchstart', mouseDown);
        }

        this.elements.boundary.appendChild(wrap);
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            var z = this.elements.zoomer,
                val = fix(v, 4);

            z.value = Math.max(z.min, Math.min(z.max, val));
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = 1;
        zoomer.style.display = self.options.showZoomer ? '' : 'none';
        zoomer.setAttribute('aria-label', 'zoom');

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if(self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey != true){ 
              return 0; 
            } else if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + (delta * self._currentZoom);

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview);

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        self.elements.zoomer.setAttribute('aria-valuenow', self._currentZoom);
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.elements.boundary.clientWidth / 2,
            centerFromBoundaryY = self.elements.boundary.clientHeight / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint() {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        center.y = top / scale;
        center.x = left / scale;

        adj.y = (center.y - pc.y) * (1 - scale);
        adj.x = (center.x - pc.x) * (1 - scale);

        transform.x -= adj.x;
        transform.y -= adj.y;

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            }
            else {
                transform.y = top;
                transform.x = left;
            }
        }

        function toggleGrabState(isDragging) {
          self.elements.preview.setAttribute('aria-grabbed', isDragging);
          self.elements.boundary.setAttribute('aria-dropeffect', isDragging? 'move': 'none');
        }

        function keyDown(ev) {
            var LEFT_ARROW  = 37,
                UP_ARROW    = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW  = 40;

            if (ev.shiftKey && (ev.keyCode == UP_ARROW || ev.keyCode == DOWN_ARROW)) {
                var zoom = 0.0;
                if (ev.keyCode == UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value, 10) + parseFloat(self.elements.zoomer.step, 10)
                }
                else {
                    zoom = parseFloat(self.elements.zoomer.value, 10) - parseFloat(self.elements.zoomer.step, 10)
                }
                self.setZoom(zoom);
            }
            else if (self.options.enableKeyMovement && (ev.keyCode >= 37 && ev.keyCode <= 40)) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            };

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                };
            };
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }
            toggleGrabState(isDragging);
            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type == 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            toggleGrabState(isDragging);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        if (!this.elements) return; // since this is debounced, it can be fired after destroy
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get(),
            ev;

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$ && typeof Prototype == 'undefined') {
            self.$(self.element).trigger('update.croppie', data);
        }
        else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            imgData = null,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self);

        if (!isVisible || self.data.bound) {// if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = self.elements.preview.getBoundingClientRect();

        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;
        self.data.orientation = getExifOrientation(self.elements.img);

        if (self.options.enableZoom) {
            _updateZoomLimits.call(self, true);
        }
        else {
            self._currentZoom = initialZoom;
        }

        transformReset.scale = self._currentZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _updateZoomLimits (initial) {
        var self = this,
            minZoom = 0,
            maxZoom = self.options.maxZoom || 1.5,
            initialZoom,
            defaultInitialZoom,
            zoomer = self.elements.zoomer,
            scale = parseFloat(zoomer.value),
            boundaryData = self.elements.boundary.getBoundingClientRect(),
            imgData = naturalImageDimensions(self.elements.img, self.data.orientation),
            vpData = self.elements.viewport.getBoundingClientRect(),
            minW,
            minH;
        if (self.options.enforceBoundary) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);
        }

        if (minZoom >= maxZoom) {
            maxZoom = minZoom + 1;
        }

        zoomer.min = fix(minZoom, 4);
        zoomer.max = fix(maxZoom, 4);
        
        if (!initial && (scale < zoomer.min || scale > zoomer.max)) {
            _setZoomerVal.call(self, scale < zoomer.min ? zoomer.min : zoomer.max);
        }
        else if (initial) {
            defaultInitialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
            _setZoomerVal.call(self, initialZoom);
        }

        dispatchChange(zoomer);
    }

    function _bindPoints(points) {
        if (points.length != 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
            // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d'),
            exif = _hasExif.call(self),
            customOrientation = self.options.enableOrientation && customOrientation;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        if (exif && !customOrientation) {
            var orientation = getExifOrientation(img);
            drawCanvas(canvas, img, num(orientation || 0, 10));
        }
        else if (customOrientation) {
            drawCanvas(canvas, img, customOrientation);
        }
    }

    function _getCanvas(data) {
        var self = this,
            points = data.points,
            left = num(points[0]),
            top = num(points[1]),
            right = num(points[2]),
            bottom = num(points[3]),
            width = right-left,
            height = bottom-top,
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            startX = 0,
            startY = 0,
            canvasWidth = data.outputWidth || width,
            canvasHeight = data.outputHeight || height,
            customDimensions = (data.outputWidth && data.outputHeight),
            outputWidthRatio = 1;
            outputHeightRatio = 1;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        width=Math.min(width, self._originalImageWidth);
        height=Math.min(height, self._originalImageHeight)
    
        // console.table({ left, right, top, bottom, canvasWidth, canvasHeight });
        ctx.drawImage(this.elements.preview, left, top, width, height, startX, startY, canvasWidth, canvasHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas;
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getBase64Result(data) {
        return _getCanvas.call(this, data).toDataURL(data.format, data.quality);
    }

    function _getBlobResult(data) {
        var self = this;
        return new Promise(function (resolve, reject) {
            _getCanvas.call(self, data).toBlob(function (blob) {
                resolve(blob);
            }, data.format, data.quality);
        });
    }

    function _replaceImage(img) {
        if (this.elements.img.parentNode) {
            Array.prototype.forEach.call(this.elements.img.classList, function(c) { img.classList.add(c); });
            this.elements.img.parentNode.replaceChild(img, this.elements.img);
            this.elements.preview = img; // if the img is attached to the DOM, they're not using the canvas
        }
        this.elements.img = img;
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [],
            zoom = null,
            hasExif = _hasExif.call(self);

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) == 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
            zoom = typeof(options.zoom) === 'undefined' ? null : options.zoom;
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.boundZoom = zoom;

        return loadImage(url, hasExif).then(function (img) {
            _replaceImage.call(self, img);
            if (!points.length) {
                var natDim = naturalImageDimensions(img);
                var rect = self.elements.viewport.getBoundingClientRect();
                var aspectRatio = rect.width / rect.height;
                var imgAspectRatio = natDim.width / natDim.height;
                var width, height;

                if (imgAspectRatio > aspectRatio) {
                    height = natDim.height;
                    width = height * aspectRatio;
                }
                else {
                    width = natDim.width;
                    height = natDim.height / aspectRatio;
                }

                var x0 = (natDim.width - width) / 2;
                var y0 = (natDim.height - height) / 2;
                var x1 = x0 + width;
                var y1 = y0 + height;
                self.data.points = [x0, y0, x1, y1];
            }
            else if (self.options.relative) {
                points = [
                    points[0] * img.naturalWidth / 100,
                    points[1] * img.naturalHeight / 100,
                    points[2] * img.naturalWidth / 100,
                    points[3] * img.naturalHeight / 100
                ];
            }

            self.data.points = points.map(function (p) {
                return parseFloat(p);
            });
            if (self.options.useCanvas) {
                _transferImageToCanvas.call(self, options.orientation || 1);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            cb && cb();
        }).catch(function (err) {
            console.error("Croppie:" + err);
        });
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2, //border
            heightDiff = (vpData.height - self.elements.viewport.offsetHeight) / 2,
            x2 = x1 + self.elements.viewport.offsetWidth + widthDiff,
            y2 = y1 + self.elements.viewport.offsetHeight + heightDiff,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.data.orientation
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas',
            format: 'png',
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(clone(RESULT_DEFAULTS), clone(options)),
            resultType = (typeof (options) === 'string' ? options : (opts.type || 'base64')),
            size = opts.size || 'viewport',
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : (self.options.viewport.type === 'circle'),
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if (typeof size === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve, reject) {
            switch(resultType.toLowerCase())
            {
                case 'rawcanvas':
                    resolve(_getCanvas.call(self, data));
                    break;
                case 'canvas':
                case 'base64':
                    resolve(_getBase64Result.call(self, data));
                    break;
                case 'blob':
                    _getBlobResult.call(self, data).then(resolve);
                    break;
                default:
                    resolve(_getHtmlResult.call(self, data));
                    break;
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas || !this.options.enableOrientation) {
            throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
        }

        var self = this,
            canvas = self.elements.canvas,
            ornt;

        self.data.orientation = getExifOffset(self.data.orientation, deg);
        drawCanvas(canvas, self.elements.img, self.data.orientation);
        _updateZoomLimits.call(self);
        _onZoom.call(self);
        copy = null;
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }
                else if (opts === 'bind') {
                    return singleInst.bind.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        if (element.className.indexOf('croppie-container') > -1) {
            throw new Error("Croppie: Can't initialize croppie more than once");
        }
        this.element = element;
        this.options = deepExtend(clone(Croppie.defaults), opts);

        if (this.element.tagName.toLowerCase() === 'img') {
            var origImage = this.element;
            addClass(origImage, 'cr-original-image');
            setAttributes(origImage, {'aria-hidden' : 'true', 'alt' : '' });
            var replacementDiv = document.createElement('div');
            this.element.parentNode.appendChild(replacementDiv);
            replacementDiv.appendChild(origImage);
            this.element = replacementDiv;
            this.options.url = this.options.url || origImage.src;
        }

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: { },
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        resizeControls: {
            width: true,
            height: true
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        enableResize: false,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        enableKeyMovement: true,
        update: function () { }
    };

    Croppie.globals = {
        translate: 'translate3d'
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            var data = _get.call(this);
            var points = data.points;
            if (this.options.relative) {
                points[0] /= this.elements.img.naturalWidth / 100;
                points[1] /= this.elements.img.naturalHeight / 100;
                points[2] /= this.elements.img.naturalWidth / 100;
                points[3] /= this.elements.img.naturalHeight / 100;
            }
            return data;
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function (deg) {
            _rotate.call(this, deg);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });

    exports.Croppie = window.Croppie = Croppie;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __nested_webpack_require_5993__(2).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_63412__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__nested_webpack_require_63412__(3);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_64848__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __nested_webpack_require_64848__(4), __nested_webpack_require_64848__(5)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_77584__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_77584__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __nested_webpack_require_77584__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_78560__) {

exports = module.exports = __nested_webpack_require_78560__(8)(undefined);
// imports


// module
exports.push([module.i, ".croppie-container {\n    width: 100%;\n    height: 100%;\n}\n\n.croppie-container .cr-image {\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform-origin: 0 0;\n    max-height: none;\n    max-width: none;\n}\n\n.croppie-container .cr-boundary {\n    position: relative;\n    overflow: hidden;\n    margin: 0 auto;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n}\n\n.croppie-container .cr-viewport,\n.croppie-container .cr-resizer {\n    position: absolute;\n    border: 2px solid #fff;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    box-shadow: 0 0 2000px 2000px rgba(0, 0, 0, 0.5);\n    z-index: 0;\n}\n\n.croppie-container .cr-resizer {\n  z-index: 2;\n  box-shadow: none;\n  pointer-events: none;\n}\n\n.croppie-container .cr-resizer-vertical,\n.croppie-container .cr-resizer-horisontal {\n  position: absolute;\n  pointer-events: all;\n}\n\n.croppie-container .cr-resizer-vertical::after,\n.croppie-container .cr-resizer-horisontal::after {\n    display: block;\n    position: absolute;\n    box-sizing: border-box;\n    border: 1px solid black;\n    background: #fff;\n    width: 10px;\n    height: 10px;\n    content: '';\n}\n\n.croppie-container .cr-resizer-vertical {\n  bottom: -5px;\n  cursor: row-resize;\n  width: 100%;\n  height: 10px;\n}\n\n.croppie-container .cr-resizer-vertical::after {\n    left: 50%;\n    margin-left: -5px;\n}\n\n.croppie-container .cr-resizer-horisontal {\n  right: -5px;\n  cursor: col-resize;\n  width: 10px;\n  height: 100%;\n}\n\n.croppie-container .cr-resizer-horisontal::after {\n    top: 50%;\n    margin-top: -5px;\n}\n\n.croppie-container .cr-original-image {\n    display: none;\n}\n\n.croppie-container .cr-vp-circle {\n    border-radius: 50%;\n}\n\n.croppie-container .cr-overlay {\n    z-index: 1;\n    position: absolute;\n    cursor: move;\n    touch-action: none;\n}\n\n.croppie-container .cr-slider-wrap {\n    width: 75%;\n    margin: 15px auto;\n    text-align: center;\n}\n\n.croppie-result {\n    position: relative;\n    overflow: hidden;\n}\n\n.croppie-result img {\n    position: absolute;\n}\n\n.croppie-container .cr-image,\n.croppie-container .cr-overlay,\n.croppie-container .cr-viewport {\n    -webkit-transform: translateZ(0);\n    -moz-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n}\n\n/*************************************/\n/***** STYLING RANGE INPUT ***********/\n/*************************************/\n/*http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html */\n/*************************************/\n\n.cr-slider {\n    -webkit-appearance: none;\n/*removes default webkit styles*/\n\t/*border: 1px solid white; *//*fix for FF unable to apply focus style bug */\n    width: 300px;\n/*required for proper track sizing in FF*/\n    max-width: 100%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background-color: transparent;\n}\n\n.cr-slider::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 3px;\n    background: rgba(0, 0, 0, 0.5);\n    border: 0;\n    border-radius: 3px;\n}\n\n.cr-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ddd;\n    margin-top: -6px;\n}\n\n.cr-slider:focus {\n    outline: none;\n}\n/*\n.cr-slider:focus::-webkit-slider-runnable-track {\nbackground: #ccc;\n}\n*/\n\n.cr-slider::-moz-range-track {\n    width: 100%;\n    height: 3px;\n    background: rgba(0, 0, 0, 0.5);\n    border: 0;\n    border-radius: 3px;\n}\n\n.cr-slider::-moz-range-thumb {\n    border: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ddd;\n    margin-top: -6px;\n}\n\n/*hide the outline behind the border*/\n.cr-slider:-moz-focusring {\n    outline: 1px solid white;\n    outline-offset: -1px;\n}\n\n.cr-slider::-ms-track {\n    width: 100%;\n    height: 5px;\n    background: transparent;\n/*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\n\tborder-color: transparent;/*leave room for the larger thumb to overflow with a transparent border */\n\tborder-width: 6px 0;\n\tcolor: transparent;/*remove default tick marks*/\n}\n.cr-slider::-ms-fill-lower {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tborder-radius: 10px;\n}\n.cr-slider::-ms-fill-upper {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tborder-radius: 10px;\n}\n.cr-slider::-ms-thumb {\n\tborder: none;\n\theight: 16px;\n\twidth: 16px;\n\tborder-radius: 50%;\n\tbackground: #ddd;\n\tmargin-top:1px;\n}\n.cr-slider:focus::-ms-fill-lower {\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n.cr-slider:focus::-ms-fill-upper {\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n/*******************************************/\n\n/***********************************/\n/* Rotation Tools */\n/***********************************/\n.cr-rotate-controls {\n\tposition: absolute;\n\tbottom: 5px;\n\tleft: 5px;\n\tz-index: 1;\n}\n.cr-rotate-controls button {\n\tborder: 0;\n\tbackground: none;\n}\n.cr-rotate-controls i:before {\n\tdisplay: inline-block;\n\tfont-style: normal;\n\tfont-weight: 900;\n\tfont-size: 22px;\n}\n.cr-rotate-l i:before {\n\tcontent: '\\21BA';\n}\n.cr-rotate-r i:before {\n\tcontent: '\\21BB';\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_86361__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __nested_webpack_require_86361__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/vue-croppie/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vue-croppie/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist */ "./node_modules/vue-croppie/dist/index.js");

/***/ }),

/***/ "./resources/js/Mobile/WelcomeModal.vue":
/*!**********************************************!*\
  !*** ./resources/js/Mobile/WelcomeModal.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WelcomeModal_vue_vue_type_template_id_4cea53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true& */ "./resources/js/Mobile/WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true&");
/* harmony import */ var _WelcomeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomeModal.vue?vue&type=script&lang=js& */ "./resources/js/Mobile/WelcomeModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _WelcomeModal_vue_vue_type_style_index_0_id_4cea53aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css& */ "./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WelcomeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WelcomeModal_vue_vue_type_template_id_4cea53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _WelcomeModal_vue_vue_type_template_id_4cea53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4cea53aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Mobile/WelcomeModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Confirm.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Confirm.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confirm.vue?vue&type=template&id=27f69fb6& */ "./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&");
/* harmony import */ var _Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Confirm.vue?vue&type=script&lang=js& */ "./resources/js/components/Confirm.vue?vue&type=script&lang=js&");
/* harmony import */ var _Confirm_vue_vue_type_style_index_0_id_27f69fb6_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css& */ "./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Confirm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Menu.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Menu.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& */ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/components/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& */ "./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7fa2c4ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Message.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Message.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=b91a6428& */ "./resources/js/components/Message.vue?vue&type=template&id=b91a6428&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./resources/js/components/Message.vue?vue&type=script&lang=js&");
/* harmony import */ var _Message_vue_vue_type_style_index_0_id_b91a6428_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.vue?vue&type=style&index=0&id=b91a6428&lang=css& */ "./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__.render,
  _Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Message.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavbarProfile.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/NavbarProfile.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarProfile_vue_vue_type_template_id_2eb90a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true& */ "./resources/js/components/NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true&");
/* harmony import */ var _NavbarProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/NavbarProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _NavbarProfile_vue_vue_type_style_index_0_id_2eb90a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true& */ "./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavbarProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavbarProfile_vue_vue_type_template_id_2eb90a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavbarProfile_vue_vue_type_template_id_2eb90a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2eb90a9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavbarProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Session.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Session.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/requests/card.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/requests/card.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card_vue_vue_type_template_id_61026680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=61026680& */ "./resources/js/components/requests/card.vue?vue&type=template&id=61026680&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/js/components/requests/card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_61026680___WEBPACK_IMPORTED_MODULE_0__.render,
  _card_vue_vue_type_template_id_61026680___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/requests/card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/requests/modal.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/requests/modal.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_vue_vue_type_template_id_9a2a6aa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.vue?vue&type=template&id=9a2a6aa6&scoped=true& */ "./resources/js/components/requests/modal.vue?vue&type=template&id=9a2a6aa6&scoped=true&");
/* harmony import */ var _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.vue?vue&type=script&lang=js& */ "./resources/js/components/requests/modal.vue?vue&type=script&lang=js&");
/* harmony import */ var _modal_vue_vue_type_style_index_0_id_9a2a6aa6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true& */ "./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_vue_vue_type_template_id_9a2a6aa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _modal_vue_vue_type_template_id_9a2a6aa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9a2a6aa6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/requests/modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/requests/modalMobile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/requests/modalMobile.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalMobile_vue_vue_type_template_id_289af2af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalMobile.vue?vue&type=template&id=289af2af& */ "./resources/js/components/requests/modalMobile.vue?vue&type=template&id=289af2af&");
/* harmony import */ var _modalMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalMobile.vue?vue&type=script&lang=js& */ "./resources/js/components/requests/modalMobile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalMobile_vue_vue_type_template_id_289af2af___WEBPACK_IMPORTED_MODULE_0__.render,
  _modalMobile_vue_vue_type_template_id_289af2af___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/requests/modalMobile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/requests/requestModal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/requests/requestModal.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _requestModal_vue_vue_type_template_id_2efe3c0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true& */ "./resources/js/components/requests/requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true&");
/* harmony import */ var _requestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestModal.vue?vue&type=script&lang=js& */ "./resources/js/components/requests/requestModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _requestModal_vue_vue_type_style_index_0_id_2efe3c0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true& */ "./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _requestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _requestModal_vue_vue_type_template_id_2efe3c0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _requestModal_vue_vue_type_template_id_2efe3c0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2efe3c0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/requests/requestModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notification-card.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/notifications/components/notification-card.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_card_vue_vue_type_template_id_113f64be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-card.vue?vue&type=template&id=113f64be&scoped=true& */ "./resources/js/notifications/components/notification-card.vue?vue&type=template&id=113f64be&scoped=true&");
/* harmony import */ var _notification_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-card.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notification-card.vue?vue&type=script&lang=js&");
/* harmony import */ var _notification_card_vue_vue_type_style_index_0_id_113f64be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true& */ "./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_card_vue_vue_type_template_id_113f64be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_card_vue_vue_type_template_id_113f64be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "113f64be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notification-card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notification-inbox-rule.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-inbox-rule.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_inbox_rule_vue_vue_type_template_id_d5ff4cde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true& */ "./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true&");
/* harmony import */ var _notification_inbox_rule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-inbox-rule.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=script&lang=js&");
/* harmony import */ var _notification_inbox_rule_vue_vue_type_style_index_0_id_d5ff4cde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css& */ "./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_inbox_rule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_inbox_rule_vue_vue_type_template_id_d5ff4cde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_inbox_rule_vue_vue_type_template_id_d5ff4cde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d5ff4cde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notification-inbox-rule.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notification-item.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/notifications/components/notification-item.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_item_vue_vue_type_template_id_57ecab41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-item.vue?vue&type=template&id=57ecab41&scoped=true& */ "./resources/js/notifications/components/notification-item.vue?vue&type=template&id=57ecab41&scoped=true&");
/* harmony import */ var _notification_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-item.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notification-item.vue?vue&type=script&lang=js&");
/* harmony import */ var _notification_item_vue_vue_type_style_index_0_id_57ecab41_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true& */ "./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_item_vue_vue_type_template_id_57ecab41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_item_vue_vue_type_template_id_57ecab41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "57ecab41",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notification-item.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notification-message.vue":
/*!************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-message.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_message_vue_vue_type_template_id_47f88f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-message.vue?vue&type=template&id=47f88f6e&scoped=true& */ "./resources/js/notifications/components/notification-message.vue?vue&type=template&id=47f88f6e&scoped=true&");
/* harmony import */ var _notification_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-message.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notification-message.vue?vue&type=script&lang=js&");
/* harmony import */ var _notification_message_vue_vue_type_style_index_0_id_47f88f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true& */ "./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_message_vue_vue_type_template_id_47f88f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_message_vue_vue_type_template_id_47f88f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47f88f6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notification-message.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notification-time.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/notifications/components/notification-time.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_time_vue_vue_type_template_id_d429d40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-time.vue?vue&type=template&id=d429d40a& */ "./resources/js/notifications/components/notification-time.vue?vue&type=template&id=d429d40a&");
/* harmony import */ var _notification_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-time.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notification-time.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notification_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_time_vue_vue_type_template_id_d429d40a___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_time_vue_vue_type_template_id_d429d40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notification-time.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notification-user.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/notifications/components/notification-user.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_user_vue_vue_type_template_id_01dafff9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-user.vue?vue&type=template&id=01dafff9&scoped=true& */ "./resources/js/notifications/components/notification-user.vue?vue&type=template&id=01dafff9&scoped=true&");
/* harmony import */ var _notification_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-user.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notification-user.vue?vue&type=script&lang=js&");
/* harmony import */ var _notification_user_vue_vue_type_style_index_0_id_01dafff9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true& */ "./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_user_vue_vue_type_template_id_01dafff9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notification_user_vue_vue_type_template_id_01dafff9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "01dafff9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notification-user.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/notifications/components/notifications.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/notifications/components/notifications.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notifications_vue_vue_type_template_id_4db659f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.vue?vue&type=template&id=4db659f4&scoped=true& */ "./resources/js/notifications/components/notifications.vue?vue&type=template&id=4db659f4&scoped=true&");
/* harmony import */ var _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.vue?vue&type=script&lang=js& */ "./resources/js/notifications/components/notifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _notifications_vue_vue_type_style_index_0_id_4db659f4_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css& */ "./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css&");
/* harmony import */ var _notifications_vue_vue_type_style_index_1_id_4db659f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true& */ "./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notifications_vue_vue_type_template_id_4db659f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notifications_vue_vue_type_template_id_4db659f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4db659f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/notifications/components/notifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Mobile/WelcomeModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Mobile/WelcomeModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WelcomeModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Confirm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Confirm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Confirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavbarProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/NavbarProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Session.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Session.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/requests/card.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/requests/card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/requests/modal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/requests/modal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/requests/modalMobile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/requests/modalMobile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modalMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modalMobile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/requests/requestModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/requests/requestModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./requestModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notification-card.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-card.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-inbox-rule.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notification-item.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-item.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notification-message.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-message.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notification-time.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-time.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-time.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-time.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notification-user.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-user.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/notifications/components/notifications.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/notifications/components/notifications.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Mobile/WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Mobile/WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_template_id_4cea53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_template_id_4cea53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_template_id_4cea53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=template&id=4cea53aa&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_27f69fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Confirm.vue?vue&type=template&id=27f69fb6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=template&id=27f69fb6&");


/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=template&id=b91a6428&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=template&id=b91a6428& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_b91a6428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Message.vue?vue&type=template&id=b91a6428& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=template&id=b91a6428&");


/***/ }),

/***/ "./resources/js/components/NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_template_id_2eb90a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_template_id_2eb90a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_template_id_2eb90a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=template&id=2eb90a9e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_template_id_53b31e0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=template&id=53b31e0a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=template&id=53b31e0a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/requests/card.vue?vue&type=template&id=61026680&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/requests/card.vue?vue&type=template&id=61026680& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_61026680___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_61026680___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_61026680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./card.vue?vue&type=template&id=61026680& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/card.vue?vue&type=template&id=61026680&");


/***/ }),

/***/ "./resources/js/components/requests/modal.vue?vue&type=template&id=9a2a6aa6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/requests/modal.vue?vue&type=template&id=9a2a6aa6&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_9a2a6aa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_9a2a6aa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_9a2a6aa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=template&id=9a2a6aa6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=template&id=9a2a6aa6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/requests/modalMobile.vue?vue&type=template&id=289af2af&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/requests/modalMobile.vue?vue&type=template&id=289af2af& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalMobile_vue_vue_type_template_id_289af2af___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalMobile_vue_vue_type_template_id_289af2af___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalMobile_vue_vue_type_template_id_289af2af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modalMobile.vue?vue&type=template&id=289af2af& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modalMobile.vue?vue&type=template&id=289af2af&");


/***/ }),

/***/ "./resources/js/components/requests/requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/requests/requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_template_id_2efe3c0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_template_id_2efe3c0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_template_id_2efe3c0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=template&id=2efe3c0e&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-card.vue?vue&type=template&id=113f64be&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-card.vue?vue&type=template&id=113f64be&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_template_id_113f64be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_template_id_113f64be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_template_id_113f64be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-card.vue?vue&type=template&id=113f64be&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=template&id=113f64be&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_template_id_d5ff4cde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_template_id_d5ff4cde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_template_id_d5ff4cde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=template&id=d5ff4cde&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-item.vue?vue&type=template&id=57ecab41&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-item.vue?vue&type=template&id=57ecab41&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_template_id_57ecab41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_template_id_57ecab41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_template_id_57ecab41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-item.vue?vue&type=template&id=57ecab41&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=template&id=57ecab41&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-message.vue?vue&type=template&id=47f88f6e&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-message.vue?vue&type=template&id=47f88f6e&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_template_id_47f88f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_template_id_47f88f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_template_id_47f88f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-message.vue?vue&type=template&id=47f88f6e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=template&id=47f88f6e&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-time.vue?vue&type=template&id=d429d40a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-time.vue?vue&type=template&id=d429d40a& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_time_vue_vue_type_template_id_d429d40a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_time_vue_vue_type_template_id_d429d40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_time_vue_vue_type_template_id_d429d40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-time.vue?vue&type=template&id=d429d40a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-time.vue?vue&type=template&id=d429d40a&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-user.vue?vue&type=template&id=01dafff9&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-user.vue?vue&type=template&id=01dafff9&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_template_id_01dafff9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_template_id_01dafff9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_template_id_01dafff9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-user.vue?vue&type=template&id=01dafff9&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=template&id=01dafff9&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notifications.vue?vue&type=template&id=4db659f4&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notifications.vue?vue&type=template&id=4db659f4&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_template_id_4db659f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_template_id_4db659f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_template_id_4db659f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notifications.vue?vue&type=template&id=4db659f4&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=template&id=4db659f4&scoped=true&");


/***/ }),

/***/ "./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeModal_vue_vue_type_style_index_0_id_4cea53aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Mobile/WelcomeModal.vue?vue&type=style&index=0&id=4cea53aa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_27f69fb6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Confirm.vue?vue&type=style&index=0&id=27f69fb6&lang=css&");


/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_7fa2c4ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Menu.vue?vue&type=style&index=0&id=7fa2c4ca&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_b91a6428_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Message.vue?vue&type=style&index=0&id=b91a6428&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Message.vue?vue&type=style&index=0&id=b91a6428&lang=css&");


/***/ }),

/***/ "./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Session_vue_vue_type_style_index_0_id_53b31e0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Session.vue?vue&type=style&index=0&id=53b31e0a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_inbox_rule_vue_vue_type_style_index_0_id_d5ff4cde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-inbox-rule.vue?vue&type=style&index=0&id=d5ff4cde&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_4db659f4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=0&id=4db659f4&lang=css&");


/***/ }),

/***/ "./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarProfile_vue_vue_type_style_index_0_id_2eb90a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarProfile.vue?vue&type=style&index=0&id=2eb90a9e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_9a2a6aa6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/modal.vue?vue&type=style&index=0&id=9a2a6aa6&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_requestModal_vue_vue_type_style_index_0_id_2efe3c0e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/requests/requestModal.vue?vue&type=style&index=0&id=2efe3c0e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_card_vue_vue_type_style_index_0_id_113f64be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-card.vue?vue&type=style&index=0&id=113f64be&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_item_vue_vue_type_style_index_0_id_57ecab41_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-item.vue?vue&type=style&index=0&id=57ecab41&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_message_vue_vue_type_style_index_0_id_47f88f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-message.vue?vue&type=style&index=0&id=47f88f6e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_user_vue_vue_type_style_index_0_id_01dafff9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notification-user.vue?vue&type=style&index=0&id=01dafff9&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_id_4db659f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/notifications/components/notifications.vue?vue&type=style&index=1&id=4db659f4&lang=scss&scoped=true&");


/***/ })

}]);