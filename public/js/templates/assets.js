(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/templates/assets"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var SharedComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! SharedComponents */ "SharedComponents");
/* harmony import */ var SharedComponents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(SharedComponents__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: SharedComponents__WEBPACK_IMPORTED_MODULE_0__.Modal
  },
  props: ["templateName", "submitResponse", "processName", "redirectTo"],
  data: function data() {
    return {
      postComplete: false,
      customModalButtons: [{
        "content": "OK",
        "action": "goToModeler",
        "variant": "primary",
        "size": "md"
      }],
      titleIcon: "fas fa-check-circle text-success",
      processId: null
    };
  },
  computed: {
    title: function title() {
      return this.$t("Process Created Successfully");
    }
  },
  methods: {
    show: function show() {
      this.$bvModal.show("assetConfirmation");
    },
    close: function close() {
      this.$bvModal.hide("assetConfirmation");
    },
    goToModeler: function goToModeler() {
      this.processId = this.submitResponse.processId;
      if (undefined !== this.redirectTo && null !== this.redirectTo) {
        if (this.redirectTo === 'process-launchpad') {
          window.location = "/process-browser/".concat(this.processId);
        }
      } else {
        window.location = "/modeler/" + this.processId;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var SharedComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! SharedComponents */ "SharedComponents");
/* harmony import */ var SharedComponents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(SharedComponents__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: SharedComponents__WEBPACK_IMPORTED_MODULE_0__.Modal
  },
  props: ["templateName"],
  data: function data() {
    return {
      loading: false,
      customModalButtons: [{
        "content": "Cancel",
        "action": "close",
        "variant": "outline-secondary"
      }, {
        "content": "Yes",
        "action": "onSubmit",
        "variant": "primary"
      }]
    };
  },
  computed: {
    title: function title() {
      return this.$t("Confirmation");
    }
  },
  methods: {
    show: function show() {
      this.$bvModal.show("assetLoading");
    },
    close: function close() {
      this.$bvModal.hide("assetLoading");
    },
    onSubmit: function onSubmit() {
      this.loading = true;
      this.$emit("submitAssets");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_ImportExportIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ImportExportIcons */ "./resources/js/components/shared/ImportExportIcons.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    assets: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      filteredAssetGroups: null,
      actions: [{
        label: "Update",
        value: "update"
      }, {
        label: "Keep Previous",
        value: "discard"
      }, {
        label: "Duplicate",
        value: "copy"
      }]
    };
  },
  watch: {
    assets: {
      handler: function handler() {
        this.filteredAssetGroups = _.cloneDeep(this.filterAssetsByGroup());
      },
      deep: true
    },
    filteredAssetGroups: {
      handler: function handler() {
        this.$emit("assetChanged", this.filteredAssetGroups);
      },
      deep: true
    }
  },
  methods: {
    setGroupAction: function setGroupAction(group, action) {
      group.mode = action.value;
      group.items.forEach(function (item) {
        item.mode = group.mode;
      });
    },
    setAssetAction: function setAssetAction(group, asset, action) {
      group.mode = null;
      asset.mode = action.value;
    },
    filterAssetsByGroup: function filterAssetsByGroup() {
      var groupedItems = [];
      this.assets.forEach(function (asset) {
        var existingGroup = groupedItems.find(function (group) {
          return group.type === asset.type;
        });
        if (existingGroup) {
          existingGroup.items.push(asset);
          existingGroup.mode = "copy";
        } else {
          groupedItems.push({
            type: asset.type,
            mode: "copy",
            items: [asset]
          });
        }
      });
      var icons = _shared_ImportExportIcons__WEBPACK_IMPORTED_MODULE_1__["default"].ICONS;
      var groupedItemsWithIcons = groupedItems.map(function (item) {
        var newItem = _objectSpread({}, item);
        var iconKey = icons[item.type];
        newItem.icon = iconKey;
        return newItem;
      });
      return groupedItemsWithIcons;
    },
    formatName: function formatName(value) {
      return value.replace(/([a-z])([A-Z])/g, "$1 $2");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_uniq_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-uniq-ids */ "./node_modules/vue-uniq-ids/index.js");
/* harmony import */ var _AssetLoadingModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetLoadingModal.vue */ "./resources/js/components/templates/AssetLoadingModal.vue");
/* harmony import */ var _AssetConfirmationModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssetConfirmationModal.vue */ "./resources/js/components/templates/AssetConfirmationModal.vue");
/* harmony import */ var _TemplateAssetTable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemplateAssetTable.vue */ "./resources/js/components/templates/TemplateAssetTable.vue");




var uniqIdsMixin = (0,vue_uniq_ids__WEBPACK_IMPORTED_MODULE_0__.createUniqIdsMixin)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TemplateAssetTable: _TemplateAssetTable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AssetConfirmationModal: _AssetConfirmationModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AssetLoadingModal: _AssetLoadingModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [uniqIdsMixin],
  props: {
    assets: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    responseId: {
      type: String,
      required: true
    },
    request: {
      type: Object,
      required: true
    },
    redirectTo: {
      type: [String, null],
      "default": null
    },
    wizardTemplateUuid: {
      type: String,
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      templateAssets: [],
      templateName: "",
      updatedAssets: [],
      assetType: "update-assets",
      submitResponse: {},
      postComplete: false,
      processName: ""
    };
  },
  watch: {
    assets: function assets() {
      this.templateAssets = this.assets;
    }
  },
  mounted: function mounted() {
    this.templateAssets = this.assets;
    this.templateName = this.name;
  },
  methods: {
    reload: function reload() {
      window.location.reload();
    },
    onContinue: function onContinue() {
      this.$refs.assetLoadingModal.show();
    },
    submitAssets: function submitAssets() {
      var _this = this;
      var formData = new FormData();
      formData.append("id", this.responseId);
      formData.append("request", JSON.stringify(this.request));
      formData.append("existingAssets", JSON.stringify(this.updatedAssets));
      if (this.wizardTemplateUuid !== null) {
        formData.append("wizardTemplateUuid", this.wizardTemplateUuid);
      }
      ProcessMaker.apiClient.post("/template/create/".concat(this.assetType, "/").concat(this.responseId), formData).then(function (response) {
        _this.$nextTick(function () {
          _this.$refs.assetLoadingModal.close();
        });
        // Remove the state from local storage.
        localStorage.removeItem("templateAssetsState");
        _this.processName = response.data.processName;
        _this.submitResponse = response.data;
        _this.postComplete = true;
        _this.$refs.assetConfirmationModal.show();
      })["catch"](function (error) {
        var _error$response;
        var message = (_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error;
        ProcessMaker.alert(_this.$t(message), "danger");
      });
    },
    title: function title() {
      return this.$t("Use Template: ") + this.templateName;
    },
    boldSubtitle: function boldSubtitle() {
      return this.$t("The process you've recently created includes assets that closely resemble those found in other existing processes.");
    },
    subtitle: function subtitle() {
      return this.$t("We advise against duplicating assets if you plan to use the same content as the existing ones.");
    },
    updateAsset: function updateAsset() {
      return this.$t("Updates the already existing asset with a new blank version. Any previous customization of it will be erased.");
    },
    keepAsset: function keepAsset() {
      return this.$t("The new process will be using the already existing asset.");
    },
    duplicateAsset: function duplicateAsset() {
      return this.$t("A new blank asset will be created for the new process, without modifying the previously existing one.");
    },
    updateAssets: function updateAssets(assets) {
      var formattedAssets = assets.reduce(function (accumulator, group) {
        return accumulator.concat(group.items);
      }, []);
      this.updatedAssets = formattedAssets;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=template&id=27a53f69&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=template&id=27a53f69& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("modal", {
    attrs: {
      id: "assetConfirmation",
      size: "md",
      title: _vm.title,
      titleIcon: _vm.titleIcon,
      setCustomButtons: true,
      customButtons: _vm.customModalButtons
    },
    on: {
      goToModeler: _vm.goToModeler,
      hidden: _vm.close
    }
  }, [_c("div", [_c("p", {
    staticClass: "mt-1"
  }, [_vm._v("\n        The process "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.processName))]), _vm._v(" was created successfully from the template "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.templateName))]), _vm._v(".\n      ")])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=template&id=74e70bf0&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=template&id=74e70bf0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [!_vm.loading ? _c("modal", {
    staticClass: "proceed-modal",
    attrs: {
      id: "assetLoading",
      size: "md",
      title: _vm.title,
      setCustomButtons: true,
      customButtons: _vm.customModalButtons
    },
    on: {
      onSubmit: _vm.onSubmit,
      close: _vm.close
    }
  }, [_c("div", [_c("p", {
    staticClass: "mt-1"
  }, [_vm._v("Are you sure you want to proceed with your selection?")])])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c("modal", {
    attrs: {
      id: "assetLoading",
      size: "md",
      "hide-header": true,
      "hide-footer": true
    }
  }, [_c("div", {
    staticClass: "text-center py-3"
  }, [_c("span", {
    staticClass: "d-block mb-4"
  }, [_c("h4", [_vm._v("Applying Changes")])]), _vm._v(" "), _c("span", {
    staticClass: "d-block mb-4"
  }, [_c("p", [_vm._v("Some assets can take some time to be ready")])]), _vm._v(" "), _c("b-spinner", {
    staticClass: "text-center",
    attrs: {
      variant: "primary",
      label: "Loading..."
    }
  })], 1)]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-4 mb-5 data-card-container"
  }, _vm._l(_vm.filteredAssetGroups, function (group) {
    return _c("b-table-simple", {
      key: group.type,
      staticClass: "simple-table",
      attrs: {
        id: "group-".concat(group.type, "table"),
        name: "".concat(group.type, "-table")
      }
    }, [_c("colgroup", [_c("col"), _c("col")]), _vm._v(" "), _c("colgroup", [_c("col"), _c("col")]), _vm._v(" "), _c("colgroup", [_c("col"), _c("col")]), _vm._v(" "), _c("colgroup", [_c("col"), _c("col")]), _vm._v(" "), _c("b-thead", [_c("b-tr", [_c("b-td", {
      staticClass: "border-top-0 column-width",
      attrs: {
        colspan: "2"
      }
    }), _vm._v(" "), _vm._l(_vm.actions, function (action) {
      return _c("b-td", {
        key: action.value,
        staticClass: "border-top-0 text-center"
      }, [_vm._v("\n          " + _vm._s(action.label) + "\n        ")]);
    })], 2), _vm._v(" "), _c("b-tr", {
      staticClass: "card-header border-left border-right"
    }, [_c("b-th", {
      staticClass: "align-middle column-width",
      attrs: {
        colspan: "2"
      }
    }, [_c("div", [_c("i", {
      staticClass: "d-inline align-middle mr-1 fas",
      "class": group.icon
    }), _vm._v(" "), _c("h5", {
      staticClass: "d-inline align-middle"
    }, [_vm._v("\n              " + _vm._s(_vm.formatName(group.type)) + "\n            ")])])]), _vm._v(" "), _vm._l(_vm.actions, function (action) {
      return _c("b-td", {
        key: "".concat(group.type, "-").concat(action.value),
        staticClass: "text-center align-middle"
      }, [_c("b-form-group", {
        attrs: {
          id: "group-".concat(group.type, "-").concat(action.value, "-action")
        }
      }), _vm._v(" "), _c("b-form-radio", {
        attrs: {
          value: action.value,
          name: "".concat(group.type, "-").concat(action.value)
        },
        on: {
          change: function change($event) {
            return _vm.setGroupAction(group, action);
          }
        },
        model: {
          value: group.mode,
          callback: function callback($$v) {
            _vm.$set(group, "mode", $$v);
          },
          expression: "group.mode"
        }
      })], 1);
    })], 2)], 1), _vm._v(" "), _c("b-tbody", _vm._l(group.items, function (asset) {
      return _c("b-tr", {
        key: asset.uuid,
        staticClass: "border-left border-right border-bottom"
      }, [_c("b-td", {
        staticClass: "align-middle",
        attrs: {
          colspan: "2"
        }
      }, [_vm._v("\n          " + _vm._s(asset.name) + "\n        ")]), _vm._v(" "), _vm._l(_vm.actions, function (action) {
        return _c("b-td", {
          key: "".concat(group.type, "-").concat(asset.uuid, "-").concat(action.value),
          staticClass: "text-center align-middle"
        }, [_c("b-form-group", [_c("b-form-radio", {
          attrs: {
            value: action.value,
            name: "".concat(group.type, "-").concat(asset.uuid, "-").concat(action.value)
          },
          on: {
            change: function change($event) {
              return _vm.setAssetAction(group, asset, action);
            }
          },
          model: {
            value: asset.mode,
            callback: function callback($$v) {
              _vm.$set(asset, "mode", $$v);
            },
            expression: "asset.mode"
          }
        })], 1)], 1);
      })], 2);
    }), 1)], 1);
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container mb-3",
    attrs: {
      id: "importProcess"
    }
  }, [_c("div", {
    staticClass: "card p-4"
  }, [_c("div", {
    staticClass: "text-left"
  }, [_c("h4", {
    staticClass: "pb-4 mb-0"
  }, [_vm._v("\n        " + _vm._s(_vm.title()) + _vm._s(_vm.name) + "\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_c("span", {
    staticClass: "fw-semibold"
  }, [_vm._v(_vm._s(_vm.boldSubtitle()))]), _vm._v("\n        " + _vm._s(_vm.subtitle()) + "\n      ")]), _vm._v(" "), _c("h4", {
    staticClass: "py-4"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Choose what to do with the assets:")) + "\n      ")]), _vm._v(" "), _c("ul", {
    staticClass: "asset-options list-unstyled"
  }, [_c("li", [_c("span", {
    staticClass: "fw-semibold text-primary"
  }, [_vm._v(_vm._s(_vm.$t("Update:")))]), _vm._v(" " + _vm._s(_vm.updateAsset()))]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "fw-semibold text-primary"
  }, [_vm._v(_vm._s(_vm.$t("Keep Previous:")))]), _vm._v(" " + _vm._s(_vm.keepAsset()))]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "fw-semibold text-primary"
  }, [_vm._v(_vm._s(_vm.$t("Duplicate:")))]), _vm._v(" " + _vm._s(_vm.duplicateAsset()))])])]), _vm._v(" "), _c("div", [_c("template-asset-table", {
    attrs: {
      assets: _vm.templateAssets
    },
    on: {
      assetChanged: _vm.updateAssets
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-footer bg-light text-right pr-0"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onContinue
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Continue")) + "\n      ")])])]), _vm._v(" "), _c("asset-loading-modal", {
    ref: "assetLoadingModal",
    attrs: {
      "template-name": _vm.name
    },
    on: {
      submitAssets: _vm.submitAssets
    }
  }), _vm._v(" "), _c("asset-confirmation-modal", {
    ref: "assetConfirmationModal",
    attrs: {
      "template-name": _vm.name,
      "submit-response": _vm.submitResponse,
      "post-complete": _vm.postComplete,
      "process-name": _vm.processName,
      "redirect-to": _vm.redirectTo
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/ImportExportIcons.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/ImportExportIcons.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cov_470dc4rzg() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/components/shared/ImportExportIcons.js";
  var hash = "84187a67bd582f8555abb02f85be62a2da6d5a4c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/components/shared/ImportExportIcons.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 26,
          column: 1
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
    hash: "84187a67bd582f8555abb02f85be62a2da6d5a4c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_470dc4rzg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_470dc4rzg();
var ICONS = (cov_470dc4rzg().s[0]++, {
  User: "fa-user",
  Group: "fa-users",
  Screen: "fa-file-alt",
  ScreenCategory: "fa-file-alt",
  Script: "fa-code",
  ScriptCategory: "fa-code",
  Process: "fa-play-circle",
  SubProcess: "fa-play-circle",
  ProcessCategory: "fa-play-circle",
  Category: "",
  EnvironmentVariable: "fa-lock",
  Signal: "bpmn-icon-end-event-signal",
  DataConnector: "fa-cog",
  DataSource: "fa-cog",
  Collection: "fa-database",
  Vocabulary: "fa-book",
  CommentConfiguration: "fa-comments",
  SavedSearch: "fa-table",
  SavedSearchChart: "fa-chart-line",
  SavedSearchOption: "",
  SavedSearchReport: "fa-clock",
  Media: "fa-photo-video",
  Embed: "fa-link",
  LaunchpadSetting: "fa-rocket"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ICONS: ICONS
});

/***/ }),

/***/ "./resources/js/templates/assets.js":
/*!******************************************!*\
  !*** ./resources/js/templates/assets.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_templates_TemplateAssetsView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/templates/TemplateAssetsView.vue */ "./resources/js/components/templates/TemplateAssetsView.vue");
function cov_k0irixoxh() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/templates/assets.js";
  var hash = "32797059661ebd4b496c5e42f9000a0f68a597ba";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/templates/assets.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 33,
          column: 2
        }
      },
      "1": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 16,
          column: 6
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "3": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 20,
          column: 79
        }
      },
      "4": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 33
        }
      },
      "5": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 49
        }
      },
      "6": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 45
        }
      },
      "7": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 51
        }
      },
      "8": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 45
        }
      },
      "9": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 61
        }
      },
      "10": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "11": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 12
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 40
          },
          end: {
            line: 29,
            column: 41
          }
        },
        loc: {
          start: {
            line: 29,
            column: 46
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 29
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 27,
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
        line: 19
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
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "32797059661ebd4b496c5e42f9000a0f68a597ba"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_k0irixoxh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_k0irixoxh();


var app = (cov_k0irixoxh().s[0]++, new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: "#template-asset-manager",
  components: {
    TemplateAssetsView: _components_templates_TemplateAssetsView_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: [],
  data: function data() {
    cov_k0irixoxh().f[0]++;
    cov_k0irixoxh().s[1]++;
    return {
      assets: [],
      name: "",
      responseId: "",
      request: {},
      redirectTo: "",
      wizardTemplateUuid: null
    };
  },
  mounted: function mounted() {
    cov_k0irixoxh().f[1]++;
    cov_k0irixoxh().s[2]++;
    if (localStorage.getItem("templateAssetsState")) {
      cov_k0irixoxh().b[0][0]++;
      var stateData = (cov_k0irixoxh().s[3]++, JSON.parse(localStorage.getItem("templateAssetsState")));
      cov_k0irixoxh().s[4]++;
      this.name = stateData.name;
      cov_k0irixoxh().s[5]++;
      this.assets = JSON.parse(stateData.assets);
      cov_k0irixoxh().s[6]++;
      this.responseId = stateData.responseId;
      cov_k0irixoxh().s[7]++;
      this.request = JSON.parse(stateData.request);
      cov_k0irixoxh().s[8]++;
      this.redirectTo = stateData.redirectTo;
      cov_k0irixoxh().s[9]++;
      this.wizardTemplateUuid = stateData.wizardTemplateUuid;
    } else {
      cov_k0irixoxh().b[0][1]++;
    }
    cov_k0irixoxh().s[10]++;
    window.addEventListener("popstate", function () {
      cov_k0irixoxh().f[2]++;
      cov_k0irixoxh().s[11]++;
      window.location.href = "/processes";
    });
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#assetConfirmation___BV_modal_footer_ {\n  margin-top: 0 !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#assetLoading___BV_modal_footer_ {\n  margin-top: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n[v-cloak][data-v-0a482563] {\n    display: none;\n}\nstrong[data-v-0a482563] {\n    font-weight: 700;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".simple-table[data-v-25544859] {\n  margin-bottom: 2rem;\n}\n.column-width[data-v-25544859] {\n  width: 50%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/qinu/qinu.js":
/*!***********************************!*\
  !*** ./node_modules/qinu/qinu.js ***!
  \***********************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var defaultLength = 8;
  var defaultTemplate = '%qinu%';
  var defaultChars = '1234567890abcdefghijklmnopqrstuvwxyz';

  function generateString(chars, length, string) {
    if (typeof string === 'undefined') {
      return generateString(chars, length, '');
    }
    if (string.length >= length) {
      return string;
    }
    var randomIndex = Math.floor(Math.random() * chars.length);
    var newChar = chars[randomIndex];
    return generateString(chars, length, string + newChar);
  }

  function generate(opts, args) {
    var randomString = generateString(opts.chars, opts.length);
    var qinuString = opts.template.replace(/%qinu%/g, randomString);
    for (var i = args.length; i--; ) {
      qinuString = qinuString
        .replace(new RegExp('%arg\\['+i+'\\]%', 'g'), args[i]);
    }
    return qinuString;
  }

  function normalizeOptions(options) {
    if (!options) return {};
    return typeof options === 'object'
      ? options : { length: +options };
  }

  function qinu(options, args) {
    options = normalizeOptions(options);
    var opts = {
      length: options.length || defaultLength,
      template: options.template || defaultTemplate,
      chars: (options.chars || defaultChars).slice()
    };
    if (!(args instanceof Array)) {
      args = Array.prototype.slice.call(arguments, 1);
    }
    if (options.args) {
      args = options.args.concat(args);
    }
    return generate(opts, args);
  }

  qinu.create = function(opts) {
    return qinu.bind(null, opts);
  };

  return qinu;
}));


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_style_index_0_id_27a53f69_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_style_index_0_id_27a53f69_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_style_index_0_id_27a53f69_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_style_index_0_id_74e70bf0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_style_index_0_id_74e70bf0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_style_index_0_id_74e70bf0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_style_index_0_id_0a482563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_style_index_0_id_0a482563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_style_index_0_id_0a482563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_style_index_0_id_25544859_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_style_index_0_id_25544859_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_style_index_0_id_25544859_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

/***/ "./resources/js/components/templates/AssetConfirmationModal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/templates/AssetConfirmationModal.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssetConfirmationModal_vue_vue_type_template_id_27a53f69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetConfirmationModal.vue?vue&type=template&id=27a53f69& */ "./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=template&id=27a53f69&");
/* harmony import */ var _AssetConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetConfirmationModal.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _AssetConfirmationModal_vue_vue_type_style_index_0_id_27a53f69_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css& */ "./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AssetConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetConfirmationModal_vue_vue_type_template_id_27a53f69___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssetConfirmationModal_vue_vue_type_template_id_27a53f69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/AssetConfirmationModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/AssetLoadingModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/templates/AssetLoadingModal.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssetLoadingModal_vue_vue_type_template_id_74e70bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetLoadingModal.vue?vue&type=template&id=74e70bf0& */ "./resources/js/components/templates/AssetLoadingModal.vue?vue&type=template&id=74e70bf0&");
/* harmony import */ var _AssetLoadingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetLoadingModal.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/AssetLoadingModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _AssetLoadingModal_vue_vue_type_style_index_0_id_74e70bf0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css& */ "./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AssetLoadingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetLoadingModal_vue_vue_type_template_id_74e70bf0___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssetLoadingModal_vue_vue_type_template_id_74e70bf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/AssetLoadingModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetTable.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetTable.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateAssetTable_vue_vue_type_template_id_25544859_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true& */ "./resources/js/components/templates/TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true&");
/* harmony import */ var _TemplateAssetTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateAssetTable.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/TemplateAssetTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _TemplateAssetTable_vue_vue_type_style_index_0_id_25544859_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true& */ "./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplateAssetTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplateAssetTable_vue_vue_type_template_id_25544859_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplateAssetTable_vue_vue_type_template_id_25544859_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "25544859",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/TemplateAssetTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetsView.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetsView.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateAssetsView_vue_vue_type_template_id_0a482563_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true& */ "./resources/js/components/templates/TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true&");
/* harmony import */ var _TemplateAssetsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateAssetsView.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/TemplateAssetsView.vue?vue&type=script&lang=js&");
/* harmony import */ var _TemplateAssetsView_vue_vue_type_style_index_0_id_0a482563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css& */ "./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplateAssetsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplateAssetsView_vue_vue_type_template_id_0a482563_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplateAssetsView_vue_vue_type_template_id_0a482563_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0a482563",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/TemplateAssetsView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetConfirmationModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/AssetLoadingModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/templates/AssetLoadingModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetLoadingModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetsView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetsView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=template&id=27a53f69&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=template&id=27a53f69& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_template_id_27a53f69___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_template_id_27a53f69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_template_id_27a53f69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetConfirmationModal.vue?vue&type=template&id=27a53f69& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=template&id=27a53f69&");


/***/ }),

/***/ "./resources/js/components/templates/AssetLoadingModal.vue?vue&type=template&id=74e70bf0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/templates/AssetLoadingModal.vue?vue&type=template&id=74e70bf0& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_template_id_74e70bf0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_template_id_74e70bf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_template_id_74e70bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetLoadingModal.vue?vue&type=template&id=74e70bf0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=template&id=74e70bf0&");


/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_template_id_25544859_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_template_id_25544859_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_template_id_25544859_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=template&id=25544859&scoped=true&");


/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_template_id_0a482563_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_template_id_0a482563_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_template_id_0a482563_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=template&id=0a482563&scoped=true&");


/***/ }),

/***/ "./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetConfirmationModal_vue_vue_type_style_index_0_id_27a53f69_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetConfirmationModal.vue?vue&type=style&index=0&id=27a53f69&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoadingModal_vue_vue_type_style_index_0_id_74e70bf0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AssetLoadingModal.vue?vue&type=style&index=0&id=74e70bf0&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetsView_vue_vue_type_style_index_0_id_0a482563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetsView.vue?vue&type=style&index=0&id=0a482563&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateAssetTable_vue_vue_type_style_index_0_id_25544859_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/TemplateAssetTable.vue?vue&type=style&index=0&id=25544859&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/vue-uniq-ids/index.js":
/*!********************************************!*\
  !*** ./node_modules/vue-uniq-ids/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqIdsPlugin": () => (/* reexport safe */ _vue_uniq_ids_js__WEBPACK_IMPORTED_MODULE_0__.UniqIdsPlugin),
/* harmony export */   "createUniqIdsMixin": () => (/* reexport safe */ _vue_uniq_ids_js__WEBPACK_IMPORTED_MODULE_0__.createUniqIdsMixin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_uniq_ids_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-uniq-ids.js */ "./node_modules/vue-uniq-ids/vue-uniq-ids.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_uniq_ids_js__WEBPACK_IMPORTED_MODULE_0__.UniqIdsPlugin);


/***/ }),

/***/ "./node_modules/vue-uniq-ids/src/create-directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-uniq-ids/src/create-directive.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generate_ids_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-ids.js */ "./node_modules/vue-uniq-ids/src/generate-ids.js");


const doesNeedNewScope = opts => (
  typeof opts.scope !== 'object'
  && typeof opts.scope !== 'undefined'
  && opts.scope
)

function createDirective(attr, options = {}) {
  return (el, binding, vnode) => {
    if (!vnode.context.$options.uniqIdsConfig) {
      vnode.context.$options.uniqIdsConfig = { scope: {} }
    }
    const localOpts = vnode.context.$options.uniqIdsConfig
    if (doesNeedNewScope(localOpts)) {
      localOpts.scope = {}
    }
    const opts = Object.assign({}, options, localOpts)
    const scope = typeof localOpts.scope === 'object'
      ? localOpts.scope
      : localOpts.scope && {} || options.scope || {}
    const value = binding.value
    const ids = (0,_generate_ids_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, scope, opts);
    if (ids) {
      el.setAttribute(attr, ids)
    } else {
      el.removeAttribute(attr)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDirective);


/***/ }),

/***/ "./node_modules/vue-uniq-ids/src/create-mixin.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-uniq-ids/src/create-mixin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-directive */ "./node_modules/vue-uniq-ids/src/create-directive.js");
/* harmony import */ var _get_uniq_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-uniq-id */ "./node_modules/vue-uniq-ids/src/get-uniq-id.js");



const prefix = 'uni-'

const defaultAttributes = [
  'aria-activedescendant',
  'aria-controls',
  'aria-describedby',
  'aria-flowto',
  'aria-labelledby',
  'aria-labelledby',
  'aria-owns',
  'for',
  'form',
  'id',
]

const defaultQinuTemplate = '%arg[0]%-%qinu%'

const createDirectives = opts => (
  opts.attrs.reduce((dirs, attr) => {
    dirs[`${opts.prefix}${attr}`] = (0,_create_directive__WEBPACK_IMPORTED_MODULE_0__["default"])(attr, opts)
    return dirs
  }, {})
)

const createMixin = (options) => {
  const opts = Object.assign(
    { prefix, scope: {}, attrs: defaultAttributes, template: defaultQinuTemplate },
    options
  )
  return {
    directives: createDirectives(opts),
    methods: {
      uniId: function (idAlias) {
        if (!this.$options.uniqIdsConfig) {
          this.$options.uniqIdsConfig = { scope: {} };
        }
        const localOpts = this.$options.uniqIdsConfig;
        const settledOpts = Object.assign({}, opts, localOpts);
        return (0,_get_uniq_id__WEBPACK_IMPORTED_MODULE_1__["default"])(settledOpts.scope, idAlias, settledOpts);
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMixin);


/***/ }),

/***/ "./node_modules/vue-uniq-ids/src/generate-ids.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-uniq-ids/src/generate-ids.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_uniq_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-uniq-id.js */ "./node_modules/vue-uniq-ids/src/get-uniq-id.js");


const generateIds = (value, scope, options) => {
  var list = value instanceof Array ? value : (value || '').split(/\s+/)
  return list.map(id => (0,_get_uniq_id_js__WEBPACK_IMPORTED_MODULE_0__["default"])(scope, id, options)).join(' ')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateIds);


/***/ }),

/***/ "./node_modules/vue-uniq-ids/src/get-uniq-id.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-uniq-ids/src/get-uniq-id.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var qinu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qinu */ "./node_modules/qinu/qinu.js");
/* harmony import */ var qinu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qinu__WEBPACK_IMPORTED_MODULE_0__);


const getUniqId = (scope, id, options = {}) => {
  if (!scope[id]) {
    scope[id] = qinu__WEBPACK_IMPORTED_MODULE_0___default()(options, id)
  }
  return scope[id]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUniqId);


/***/ }),

/***/ "./node_modules/vue-uniq-ids/vue-uniq-ids.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-uniq-ids/vue-uniq-ids.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqIdsPlugin": () => (/* binding */ UniqIdsPlugin),
/* harmony export */   "createUniqIdsMixin": () => (/* reexport safe */ _src_create_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _src_create_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/create-mixin */ "./node_modules/vue-uniq-ids/src/create-mixin.js");


const UniqIdsPlugin = {
  install: function(Vue, options) {
    Vue.mixin((0,_src_create_mixin__WEBPACK_IMPORTED_MODULE_0__["default"])(options))
  }
}




/***/ }),

/***/ "SharedComponents":
/*!***********************************!*\
  !*** external "SharedComponents" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = SharedComponents;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : String(i);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vue-vendor"], () => (__webpack_exec__("./resources/js/templates/assets.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);