"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/templates/configure"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CategorySelect.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CategorySelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  mixins: [],
  props: ["label", "value", "modelType", "modelId"],
  data: function data() {
    return {
      images: [],
      imagesMedia: [],
      showDeleteIcons: Array(4).fill(false),
      focusIcons: Array(4).fill(false),
      list: {},
      maxImages: 4,
      mediaImageId: [],
      dataProcess: {}
    };
  },
  watch: {
    images: {
      deep: true,
      handler: function handler() {
        this.$emit('input', this.images);
      }
    }
  },
  methods: {
    /**
     * Method to open a screen for image selection from hard drive
     */
    openFileInput: function openFileInput() {
      this.$refs.fileInput.click();
    },
    /**
     * Method to add image files to thumbnails container
     */
    handleImageUpload: function handleImageUpload(event) {
      if (this.images.length >= this.maxImages) {
        // The amount of images allowed was reached.
        ProcessMaker.alert(this.$t("It is not possible to include more than four images."), "danger");
        this.$refs.fileInput.value = "";
        return;
      }
      var files = event.target.files;
      this.handleImages(files);
      event.target.value = "";
    },
    /**
     * This method handles dragged image files and adds each image to list
     */
    handleDrop: function handleDrop(event) {
      event.preventDefault();

      // Checks if event has 'dataTransfer' property
      if (event.dataTransfer) {
        var files = event.dataTransfer.files;

        // Checks if 'dataTransfer' has 'files' property
        if (files && files.length > 0) {
          if (this.images.length + files.length > this.maxImages) {
            window.ProcessMaker.alert(this.$t("It is not possible to include more than four images."), "danger");
            return;
          }
          this.validateImageExtension(files);
        }
      }
    },
    /**
    * Adds index info to dragged object
    */
    handleDragStart: function handleDragStart(event, index) {
      event.dataTransfer.setData("text/plain", index);
      event.preventDefault();
    },
    /**
     * Method to show trash image
     */
    showDeleteIcon: function showDeleteIcon(index) {
      return this.$set(this.showDeleteIcons, index, true);
    },
    /**
     * Method to hide trash image
     */
    hideDeleteIcon: function hideDeleteIcon(index) {
      return this.$set(this.showDeleteIcons, index, false);
    },
    /**
     * Method to focus trash image
     */
    focusIcon: function focusIcon(index) {
      this.focusIcons = Array(4).fill(false);
      this.$set(this.focusIcons, index, true);
    },
    /**
     * Method to unfocus trash image
     */
    unfocusIcon: function unfocusIcon(index) {
      this.$set(this.focusIcons, index, false);
    },
    /**
    * Method to delete image from carousel container
    */
    deleteImage: function deleteImage(index) {
      var uuid = this.images[index].uuid;
      this.images.splice(index, 1);
      this.$set(this.showDeleteIcons, index, false);
      this.$set(this.focusIcons, index, false);
    },
    /**
     * Generic Method to manage drag and drop and selected images
    */
    handleImages: function handleImages(files) {
      this.validateImageExtension(files);
    },
    /**
     *  Validates images with png and jpg extensions.
     */
    validateImageExtension: function validateImageExtension(files) {
      var _this = this;
      console.log("validateImageExtension", files);
      Array.from(files).forEach(function (file) {
        if (_this.images.length < _this.maxImages) {
          if (_this.isValidFileExtension(file.name)) {
            var reader = new FileReader();
            reader.onload = function (event) {
              _this.images.push({
                file: file,
                url: event.target.result,
                uuid: ""
              });
              _this.showDeleteIcons.push(false);
            };
            reader.readAsDataURL(file);
          } else {
            window.ProcessMaker.alert(_this.$t("Only PNG and JPG extensions are allowed."), "danger");
          }
        }
      });
    },
    /**
    * Validate image extensions
    */
    isValidFileExtension: function isValidFileExtension(fileName) {
      var allowedExtensions = [".jpg", ".jpeg", ".png"];
      return allowedExtensions.includes(fileName.slice(fileName.lastIndexOf(".")).toLowerCase());
    }
  },
  mounted: function mounted() {
    this.images = this.value ? this.value : [];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["value", "copyAssetMode", "screenTypes", "hideDescription"],
  data: function data() {
    return {
      isDisabled: false,
      selectedType: {
        type: "FORM",
        typeHuman: "Form",
        icon: "fas fa-file",
        description: "Design interactive and complex multi-page forms."
      }
    };
  },
  computed: {
    screenTypeOptions: function screenTypeOptions() {
      var _this = this;
      // Check if this.screenTypes is an array or an object and map accordingly
      var optionsArray;
      if (Array.isArray(this.screenTypes)) {
        optionsArray = this.screenTypes.map(function (screenType) {
          return _this.createScreenTypeOption(screenType);
        });
      } else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(this.screenTypes) === 'object' && this.screenTypes !== null) {
        optionsArray = Object.entries(this.screenTypes).map(function (_ref) {
          var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          return _this.createScreenTypeOption(key);
        });
      }
      return this.sortOptions(optionsArray);
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    if (this.copyAssetMode) {
      this.isDisabled = true;
    }

    // Find the matching value in screenTypeOptions or default to FORM
    if (this.value) {
      this.selectedType = this.screenTypeOptions.find(function (item) {
        return item.type === _this2.value;
      });
    }
    this.$emit("input", this.selectedType.type);
  },
  methods: {
    emitSelectedType: function emitSelectedType() {
      this.$emit("input", this.selectedType.type);
    },
    createScreenTypeOption: function createScreenTypeOption(screenType) {
      var type;
      var typeHuman;
      var icon;
      var description;
      switch (screenType) {
        case "FORM":
          type = "FORM";
          typeHuman = "Form";
          icon = "fas fa-file";
          description = this.$t("Design interactive and complex multi-page forms.");
          break;
        case "EMAIL":
          type = "EMAIL";
          typeHuman = "E-mail";
          icon = "fas fa-envelope";
          description = this.$t("Compose the email body for email messages.");
          break;
        case "DISPLAY":
          type = "DISPLAY";
          typeHuman = "Display";
          icon = "fas fa-desktop";
          description = this.$t("Display information or allow Request participants to download files.");
          break;
        case "CONVERSATIONAL":
          type = "CONVERSATIONAL";
          typeHuman = "Conversational";
          icon = "fas fa-comment";
          description = this.$t("Design functional rule-based modern chat style experiences.");
          break;
        default:
          type = "FORM";
          typeHuman = this.$t("Form");
          icon = "fas fa-file";
          description = this.$t("Design interactive and complex multi-page forms.");
          break;
      }
      return {
        type: type,
        typeHuman: typeHuman,
        icon: icon,
        description: description
      };
    },
    sortOptions: function sortOptions(optionsArray) {
      var order = ["FORM", "EMAIL", "DISPLAY", "CONVERSATIONAL"];
      return optionsArray.sort(function (a, b) {
        return order.indexOf(a.type) - order.indexOf(b.type);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_shared_FormErrorsMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/shared/FormErrorsMixin.js */ "./resources/js/components/shared/FormErrorsMixin.js");
/* harmony import */ var _components_shared_CategorySelect_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/CategorySelect.vue */ "./resources/js/components/shared/CategorySelect.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CategorySelect: _components_shared_CategorySelect_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_components_shared_FormErrorsMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['templateData', 'permission', 'responseErrors'],
  data: function data() {
    return {
      template: this.templateData,
      errors: {}
    };
  },
  watch: {
    template: {
      deep: true,
      handler: function handler() {
        this.$emit('updated', this.template);
      }
    },
    responseErrors: {
      deep: true,
      handler: function handler() {
        this.errors = this.responseErrors;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_shared_FormErrorsMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/shared/FormErrorsMixin.js */ "./resources/js/components/shared/FormErrorsMixin.js");
/* harmony import */ var _components_shared_CategorySelect_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/CategorySelect.vue */ "./resources/js/components/shared/CategorySelect.vue");
/* harmony import */ var _components_shared_MultiThumbnailFileUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/MultiThumbnailFileUploader */ "./resources/js/components/shared/MultiThumbnailFileUploader.vue");
/* harmony import */ var _processes_screens_components_ScreenTypeDropdown_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../processes/screens/components/ScreenTypeDropdown.vue */ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CategorySelect: _components_shared_CategorySelect_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MultiThumbnailFileUploader: _components_shared_MultiThumbnailFileUploader__WEBPACK_IMPORTED_MODULE_2__["default"],
    ScreenTypeDropdown: _processes_screens_components_ScreenTypeDropdown_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_components_shared_FormErrorsMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['templateData', 'permission', 'screenTypes', 'responseErrors'],
  data: function data() {
    return {
      template: this.templateData,
      errors: {}
    };
  },
  computed: {
    canMakePublicTemplates: function canMakePublicTemplates() {
      return this.permission.includes('publish-screen-templates');
    },
    isSharedTemplate: {
      get: function get() {
        return this.template.is_public === 1;
      },
      set: function set(value) {
        this.template.is_public = value;
      }
    },
    isDefaultProcessmakerTemplate: function isDefaultProcessmakerTemplate() {
      return this.template.user_id === null;
    }
  },
  watch: {
    template: {
      deep: true,
      handler: function handler() {
        this.$emit('updated', this.template, this.isDefaultProcessmakerTemplate);
      }
    },
    responseErrors: {
      deep: true,
      handler: function handler() {
        this.errors = this.responseErrors;
      }
    }
  },
  methods: {
    handleThumbnails: function handleThumbnails(images) {
      this.template.template_media = images;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CategorySelect.vue?vue&type=template&id=0c66812e&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CategorySelect.vue?vue&type=template&id=0c66812e& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "no-padding"
  }, [_c("div", {
    staticClass: "d-flex align-items-center w-100 mt-2"
  }, [_c("label", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c("input", {
    ref: "fileInput",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.handleImageUpload
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "fas fa-plus-square ml-auto",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: _vm.openFileInput
    }
  })])]), _vm._v(" "), _c("b-row", {
    ref: "thumbnailsContainer",
    staticClass: "image-thumbnails-container",
    on: {
      drop: _vm.handleDrop,
      dragover: function dragover($event) {
        $event.preventDefault();
      },
      dragstart: function dragstart($event) {
        $event.preventDefault();
        return _vm.handleDragStart.apply(null, arguments);
      }
    }
  }, [_vm._l(_vm.images, function (image, index) {
    return _c("b-col", {
      key: index,
      attrs: {
        md: "6"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-end align-items-end thumbnail",
      on: {
        mouseover: function mouseover($event) {
          return _vm.showDeleteIcon(index);
        },
        mouseleave: function mouseleave($event) {
          return _vm.hideDeleteIcon(index);
        }
      }
    }, [_vm.showDeleteIcons[index] || _vm.focusIcons[index] ? _c("div", {
      staticClass: "m-1 delete-icon"
    }, [_c("button", {
      staticClass: "btn btn-light p-0 px-1",
      attrs: {
        id: "popover-button-event",
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.focusIcon(index);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash-alt p-0 custom-color"
    })]), _vm._v(" "), _c("b-popover", {
      ref: "popover",
      refInFor: true,
      attrs: {
        show: _vm.focusIcons[index],
        target: "popover-button-event",
        triggers: "focus",
        placement: "bottom"
      },
      on: {
        "update:show": function updateShow($event) {
          return _vm.$set(_vm.focusIcons, index, $event);
        }
      }
    }, [_c("div", {
      staticClass: "p-3"
    }, [_c("p", {
      staticClass: "text-center"
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Do you really want to delete this image?")) + "\n                        ")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-around"
    }, [_c("button", {
      staticClass: "btn btn-secondary",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.unfocusIcon(index);
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Cancel")) + "\n                            ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.deleteImage(index);
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Delete")) + "\n                            ")])])])])], 1) : _vm._e(), _vm._v(" "), image && image.url ? _c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: image.url ? image.url : "",
        alt: image === null || image === void 0 ? void 0 : image.name
      }
    }) : image && typeof image === "string" ? _c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: image,
        alt: _vm.$t("Image")
      }
    }) : _vm._e()])]);
  }), _vm._v(" "), _vm.images.length === 0 ? _c("b-col", {
    staticClass: "text-center",
    attrs: {
      md: "12"
    }
  }, [_c("div", {
    staticClass: "drag-and-drop-container",
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-cloud-upload-alt"
  }), _vm._v(" "), _c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Drop your images here")))])]), _vm._v(" "), _c("div", [_vm._v("\n                    " + _vm._s(_vm.$t("Supported formats are PNG and JPG. ")) + "\n                ")]), _vm._v(" "), _c("b-button", {
    staticClass: "btn-custom-button",
    on: {
      click: _vm.openFileInput
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Upload Images")) + "\n                ")])], 1)]) : _vm._e()], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("multiselect", {
    staticClass: "screen-type-select mt-2",
    attrs: {
      id: "screenTypeDropdown",
      options: _vm.screenTypeOptions,
      "track-by": "type",
      label: "type",
      "aria-label": "type",
      "allow-empty": false,
      searchable: false,
      multiple: false,
      "option-height": 100,
      "show-labels": false,
      "prevent-autofocus": true,
      disabled: _vm.isDisabled
    },
    on: {
      input: _vm.emitSelectedType
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "type-container",
          attrs: {
            "data-cy": "type-container-".concat(props.option.typeHuman)
          }
        }, [_c("i", {
          staticClass: "type-icon-placeholder pr-3",
          "class": props.option.icon
        }), _vm._v(" "), _c("span", {
          staticClass: "type-desc"
        }, [_c("span", {
          staticClass: "type-title-placeholder"
        }, [_vm._v(_vm._s(props.option.typeHuman))]), _vm._v(" "), !_vm.hideDescription ? _c("span", {
          staticClass: "type-desc-placeholder"
        }, [_vm._v(_vm._s(props.option.description))]) : _vm._e()])])];
      }
    }, {
      key: "option",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "type-container",
          attrs: {
            "data-cy": "type-container-".concat(props.option.typeHuman)
          }
        }, [_c("i", {
          staticClass: "type-icon p-3",
          "class": props.option.icon
        }), _vm._v(" "), _c("span", {
          staticClass: "type-desc"
        }, [_c("span", {
          staticClass: "type-title-option"
        }, [_vm._v(_vm._s(props.option.typeHuman))]), _vm._v(" "), !_vm.hideDescription ? _c("span", {
          staticClass: "type-desc-option"
        }, [_vm._v(_vm._s(props.option.description))]) : _vm._e()])])];
      }
    }]),
    model: {
      value: _vm.selectedType,
      callback: function callback($$v) {
        _vm.selectedType = $$v;
      },
      expression: "selectedType"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-form-group", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Name"),
      "label-for": "name-text",
      description: _vm.$t("The template name must be unique."),
      state: _vm.errorState("name", _vm.errors),
      "invalid-feedback": _vm.errorMessage("name", _vm.errors),
      required: ""
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "name-text"
    },
    model: {
      value: _vm.template.name,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "name", $$v);
      },
      expression: "template.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Description"),
      "label-for": "description-text",
      state: _vm.errorState("description", _vm.errors),
      "invalid-feedback": _vm.errorMessage("description", _vm.errors),
      required: ""
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "description-text"
    },
    model: {
      value: _vm.template.description,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "description", $$v);
      },
      expression: "template.description"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Version"),
      "label-for": "version-text",
      state: _vm.errorState("version", _vm.errors),
      "invalid-feedback": _vm.errorMessage("version", _vm.errors),
      required: ""
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "version-text"
    },
    model: {
      value: _vm.template.version,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "version", $$v);
      },
      expression: "template.version"
    }
  })], 1), _vm._v(" "), _c("category-select", {
    attrs: {
      label: _vm.$t("Category"),
      "api-get": "process_categories",
      "api-list": "process_categories",
      errors: _vm.errors.category
    },
    model: {
      value: _vm.template.process_category_id,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "process_category_id", $$v);
      },
      expression: "template.process_category_id"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b-form-group", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Name"),
      "label-for": "name-text",
      state: _vm.errorState("name", _vm.errors),
      "invalid-feedback": _vm.errorMessage("name", _vm.errors),
      required: ""
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "name-text"
    },
    model: {
      value: _vm.template.name,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "name", $$v);
      },
      expression: "template.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Description"),
      "label-for": "description-text",
      state: _vm.errorState("description", _vm.errors),
      "invalid-feedback": _vm.errorMessage("description", _vm.errors),
      required: ""
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "description-text"
    },
    model: {
      value: _vm.template.description,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "description", $$v);
      },
      expression: "template.description"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      required: "",
      label: _vm.$t("Type"),
      state: _vm.errorState("type", _vm.errors),
      "invalid-feedback": _vm.errorMessage("type", _vm.errors)
    }
  }, [_c("screen-type-dropdown", {
    attrs: {
      id: "screenConfigsScreenType",
      value: _vm.template.screen_type,
      "screen-types": _vm.screenTypes,
      "copy-asset-mode": "true",
      hideDescription: "true"
    }
  })], 1), _vm._v(" "), _c("category-select", {
    attrs: {
      label: _vm.$t("Category"),
      "api-get": "screen_categories",
      "api-list": "screen_categories",
      errors: _vm.errors.category
    },
    model: {
      value: _vm.template.screen_category_id,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "screen_category_id", $$v);
      },
      expression: "template.screen_category_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("multi-thumbnail-file-uploader", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Template Thumbnail"),
      modelType: "template/screen",
      modelId: _vm.template.id,
      value: _vm.template.media
    },
    on: {
      input: _vm.handleThumbnails
    }
  }), _vm._v(" "), _c("b-form-group", {
    staticClass: "mb-3",
    attrs: {
      label: _vm.$t("Version"),
      "label-for": "version-text",
      state: _vm.errorState("version", _vm.errors),
      "invalid-feedback": _vm.errorMessage("version", _vm.errors),
      required: ""
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "version-text"
    },
    model: {
      value: _vm.template.version,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "version", $$v);
      },
      expression: "template.version"
    }
  })], 1), _vm._v(" "), _vm.canMakePublicTemplates && !_vm.isSharedTemplate ? _c("b-form-group", [_c("b-form-checkbox", {
    attrs: {
      id: "make-screen-template-public",
      name: "make-screen-template-public",
      value: true,
      "unchecked-value": false
    },
    model: {
      value: _vm.isSharedTemplate,
      callback: function callback($$v) {
        _vm.isSharedTemplate = $$v;
      },
      expression: "isSharedTemplate"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Share Template")) + "\n            ")])], 1) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/FormErrorsMixin.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/shared/FormErrorsMixin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cov_qfgsrr5lt() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/components/shared/FormErrorsMixin.js";
  var hash = "ae7ca6abd00ac2ecc712a50fb10f988a006939b2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/components/shared/FormErrorsMixin.js",
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
          column: 29
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
          column: 21
        }
      },
      "5": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 18
        }
      },
      "6": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 44
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
            column: 40
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
            column: 29
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 31
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
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
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ae7ca6abd00ac2ecc712a50fb10f988a006939b2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_qfgsrr5lt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_qfgsrr5lt();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    formDescription: function formDescription(text, field, array) {
      cov_qfgsrr5lt().f[0]++;
      cov_qfgsrr5lt().s[0]++;
      if (this.errorState(field, array) === null) {
        cov_qfgsrr5lt().b[0][0]++;
        cov_qfgsrr5lt().s[1]++;
        return this.$t(text);
      } else {
        cov_qfgsrr5lt().b[0][1]++;
      }
      cov_qfgsrr5lt().s[2]++;
      return null;
    },
    errorState: function errorState(field, array) {
      cov_qfgsrr5lt().f[1]++;
      cov_qfgsrr5lt().s[3]++;
      if (_.get(array, field, null)) {
        cov_qfgsrr5lt().b[1][0]++;
        cov_qfgsrr5lt().s[4]++;
        return false;
      } else {
        cov_qfgsrr5lt().b[1][1]++;
      }
      cov_qfgsrr5lt().s[5]++;
      return null;
    },
    errorMessage: function errorMessage(field, array) {
      cov_qfgsrr5lt().f[2]++;
      cov_qfgsrr5lt().s[6]++;
      return _.get(array, "".concat(field, ".0"), "");
    }
  }
});

/***/ }),

/***/ "./resources/js/templates/configure.js":
/*!*********************************************!*\
  !*** ./resources/js/templates/configure.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_templates_components_ProcessTemplateConfigurations_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/templates/components/ProcessTemplateConfigurations.vue */ "./resources/js/templates/components/ProcessTemplateConfigurations.vue");
/* harmony import */ var _js_templates_components_ScreenTemplateConfigurations_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/templates/components/ScreenTemplateConfigurations.vue */ "./resources/js/templates/components/ScreenTemplateConfigurations.vue");
function cov_pv8wr6cyx() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/templates/configure.js";
  var hash = "3f7814b5ce01405ef4e38f375a94382c0fef4d00";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/templates/configure.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 78
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 76
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 72,
          column: 3
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 26,
          column: 9
        }
      },
      "4": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 37,
          column: 13
        }
      },
      "5": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 40
        }
      },
      "6": {
        start: {
          line: 34,
          column: 24
        },
        end: {
          line: 34,
          column: 51
        }
      },
      "7": {
        start: {
          line: 36,
          column: 20
        },
        end: {
          line: 36,
          column: 26
        }
      },
      "8": {
        start: {
          line: 42,
          column: 12
        },
        end: {
          line: 42,
          column: 29
        }
      },
      "9": {
        start: {
          line: 45,
          column: 12
        },
        end: {
          line: 45,
          column: 52
        }
      },
      "10": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 48,
          column: 31
        }
      },
      "11": {
        start: {
          line: 49,
          column: 23
        },
        end: {
          line: 49,
          column: 27
        }
      },
      "12": {
        start: {
          line: 51,
          column: 12
        },
        end: {
          line: 65,
          column: 15
        }
      },
      "13": {
        start: {
          line: 53,
          column: 16
        },
        end: {
          line: 53,
          column: 91
        }
      },
      "14": {
        start: {
          line: 54,
          column: 16
        },
        end: {
          line: 54,
          column: 31
        }
      },
      "15": {
        start: {
          line: 58,
          column: 16
        },
        end: {
          line: 64,
          column: 17
        }
      },
      "16": {
        start: {
          line: 60,
          column: 20
        },
        end: {
          line: 60,
          column: 61
        }
      },
      "17": {
        start: {
          line: 61,
          column: 23
        },
        end: {
          line: 64,
          column: 17
        }
      },
      "18": {
        start: {
          line: 63,
          column: 20
        },
        end: {
          line: 63,
          column: 54
        }
      },
      "19": {
        start: {
          line: 68,
          column: 12
        },
        end: {
          line: 68,
          column: 33
        }
      },
      "20": {
        start: {
          line: 69,
          column: 12
        },
        end: {
          line: 69,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 11
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        },
        loc: {
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 38,
            column: 9
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 41,
            column: 9
          }
        },
        loc: {
          start: {
            line: 41,
            column: 22
          },
          end: {
            line: 43,
            column: 9
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 9
          }
        },
        loc: {
          start: {
            line: 44,
            column: 18
          },
          end: {
            line: 46,
            column: 9
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        },
        loc: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 66,
            column: 9
          }
        },
        line: 47
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 52,
            column: 18
          },
          end: {
            line: 52,
            column: 19
          }
        },
        loc: {
          start: {
            line: 52,
            column: 30
          },
          end: {
            line: 55,
            column: 13
          }
        },
        line: 52
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 56,
            column: 19
          },
          end: {
            line: 56,
            column: 20
          }
        },
        loc: {
          start: {
            line: 56,
            column: 28
          },
          end: {
            line: 65,
            column: 13
          }
        },
        line: 56
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 67,
            column: 8
          },
          end: {
            line: 67,
            column: 9
          }
        },
        loc: {
          start: {
            line: 67,
            column: 50
          },
          end: {
            line: 70,
            column: 9
          }
        },
        line: 67
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 37,
            column: 13
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 32,
            column: 40
          }
        }, {
          start: {
            line: 33,
            column: 16
          },
          end: {
            line: 34,
            column: 51
          }
        }, {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 36,
            column: 26
          }
        }],
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 64,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 64,
            column: 17
          }
        }, {
          start: {
            line: 61,
            column: 23
          },
          end: {
            line: 64,
            column: 17
          }
        }],
        line: 58
      },
      "2": {
        loc: {
          start: {
            line: 61,
            column: 23
          },
          end: {
            line: 64,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 23
          },
          end: {
            line: 64,
            column: 17
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
      "20": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    b: {
      "0": [0, 0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3f7814b5ce01405ef4e38f375a94382c0fef4d00"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pv8wr6cyx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_pv8wr6cyx();


cov_pv8wr6cyx().s[0]++;
Vue.component("ProcessTemplateConfigurations", _js_templates_components_ProcessTemplateConfigurations_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
cov_pv8wr6cyx().s[1]++;
Vue.component("ScreenTemplateConfigurations", _js_templates_components_ScreenTemplateConfigurations_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
cov_pv8wr6cyx().s[2]++;
new Vue({
  el: '#configureTemplate',
  mixins: addons,
  data: function data() {
    cov_pv8wr6cyx().f[0]++;
    cov_pv8wr6cyx().s[3]++;
    return {
      formData: window.ProcessMaker.templateConfigurations.data,
      screenTypes: window.ProcessMaker.templateConfigurations.screenTypes,
      type: window.ProcessMaker.templateConfigurations.templateType,
      dataGroups: [],
      value: [],
      errors: {
        name: null,
        description: null,
        category: null,
        status: null,
        screen: null
      },
      isDefaultProcessmakerTemplate: false
    };
  },
  computed: {
    redirectUrl: function redirectUrl() {
      cov_pv8wr6cyx().f[1]++;
      cov_pv8wr6cyx().s[4]++;
      switch (this.type) {
        case 'process':
          cov_pv8wr6cyx().b[0][0]++;
          cov_pv8wr6cyx().s[5]++;
          return '/processes';
        case 'screen':
          cov_pv8wr6cyx().b[0][1]++;
          cov_pv8wr6cyx().s[6]++;
          return '/designer/screens';
        default:
          cov_pv8wr6cyx().b[0][2]++;
          cov_pv8wr6cyx().s[7]++;
          break;
      }
    }
  },
  methods: {
    resetErrors: function resetErrors() {
      cov_pv8wr6cyx().f[2]++;
      cov_pv8wr6cyx().s[8]++;
      this.errors = {};
    },
    onClose: function onClose() {
      cov_pv8wr6cyx().f[3]++;
      cov_pv8wr6cyx().s[9]++;
      window.location.href = this.redirectUrl;
    },
    onUpdate: function onUpdate() {
      var _this = this;
      cov_pv8wr6cyx().f[4]++;
      cov_pv8wr6cyx().s[10]++;
      this.resetErrors();
      var that = (cov_pv8wr6cyx().s[11]++, this);
      cov_pv8wr6cyx().s[12]++;
      ProcessMaker.apiClient.put("template/settings/".concat(this.type, "/").concat(that.formData.id), that.formData).then(function (response) {
        cov_pv8wr6cyx().f[5]++;
        cov_pv8wr6cyx().s[13]++;
        ProcessMaker.alert(_this.$t('The template was saved.'), 'success', 5, true);
        cov_pv8wr6cyx().s[14]++;
        that.onClose();
      })["catch"](function (error) {
        var _error$response;
        cov_pv8wr6cyx().f[6]++;
        cov_pv8wr6cyx().s[15]++;
        //define how display errors
        if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422) {
          cov_pv8wr6cyx().b[1][0]++;
          cov_pv8wr6cyx().s[16]++;
          // Validation error
          that.errors = error.response.data.errors;
        } else {
          var _error$response2;
          cov_pv8wr6cyx().b[1][1]++;
          cov_pv8wr6cyx().s[17]++;
          if ((error === null || error === void 0 || (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 409) {
            cov_pv8wr6cyx().b[2][0]++;
            cov_pv8wr6cyx().s[18]++;
            // Duplicate error
            that.errors = error.response.data;
          } else {
            cov_pv8wr6cyx().b[2][1]++;
          }
        }
      });
    },
    handleUpdatedTemplate: function handleUpdatedTemplate(data, templateData) {
      cov_pv8wr6cyx().f[7]++;
      cov_pv8wr6cyx().s[19]++;
      this.formData = data;
      cov_pv8wr6cyx().s[20]++;
      this.isDefaultProcessmakerTemplate = templateData;
    }
  }
});

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".image-thumbnails-container[data-v-00436b2c] {\n  border: 1px solid #CDDDEE;\n  height: 204px;\n  border-radius: 4px;\n  padding: 12px;\n  overflow-y: auto;\n}\n.drag-and-drop-container[data-v-00436b2c] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 33px;\n  letter-spacing: -0.02em;\n  text-align: center;\n  color: #6a7888;\n  margin-bottom: 9px;\n}\n.drag-and-drop-container i[data-v-00436b2c] {\n  font-size: 32px;\n}\n.delete-icon[data-v-00436b2c] {\n  cursor: pointer;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.delete-icon i[data-v-00436b2c] {\n  font-size: 18px;\n  color: #000;\n}\n.btn-delete-image[data-v-00436b2c] {\n  color: #000;\n  background-color: #6a7888;\n}\n.btn-cancel-delete[data-v-00436b2c] {\n  color: #556271;\n  background-color: #d8e0e9;\n}\n.popover[data-v-00436b2c] {\n  max-width: 474px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".type-container[data-v-39c078e8] {\n  display: flex;\n  align-items: center;\n}\n.type-icon-placeholder[data-v-39c078e8] {\n  color: #2773F3;\n  border-color: #2773F3;\n  font-size: 32px;\n}\n.type-icon[data-v-39c078e8] {\n  color: #2773F3;\n  border-color: #2773F3;\n  font-size: 24px;\n}\n.type-desc[data-v-39c078e8] {\n  display: flex;\n  flex-direction: column;\n}\n.type-title-option[data-v-39c078e8] {\n  font-size: 14px;\n}\n.type-desc-placeholder[data-v-39c078e8] {\n  font-size: 14px;\n}\n.type-desc-option[data-v-39c078e8] {\n  font-size: 12px;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_style_index_0_id_00436b2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_style_index_0_id_00436b2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_style_index_0_id_00436b2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_style_index_0_id_39c078e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_style_index_0_id_39c078e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_style_index_0_id_39c078e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/shared/CategorySelect.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/shared/CategorySelect.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategorySelect_vue_vue_type_template_id_0c66812e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategorySelect.vue?vue&type=template&id=0c66812e& */ "./resources/js/components/shared/CategorySelect.vue?vue&type=template&id=0c66812e&");
/* harmony import */ var _CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategorySelect.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/CategorySelect.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategorySelect_vue_vue_type_template_id_0c66812e___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategorySelect_vue_vue_type_template_id_0c66812e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/CategorySelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/MultiThumbnailFileUploader.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/shared/MultiThumbnailFileUploader.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MultiThumbnailFileUploader_vue_vue_type_template_id_00436b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true& */ "./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true&");
/* harmony import */ var _MultiThumbnailFileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiThumbnailFileUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=script&lang=js&");
/* harmony import */ var _MultiThumbnailFileUploader_vue_vue_type_style_index_0_id_00436b2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true& */ "./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultiThumbnailFileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiThumbnailFileUploader_vue_vue_type_template_id_00436b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MultiThumbnailFileUploader_vue_vue_type_template_id_00436b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00436b2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/MultiThumbnailFileUploader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/processes/screens/components/ScreenTypeDropdown.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenTypeDropdown_vue_vue_type_template_id_39c078e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true& */ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true&");
/* harmony import */ var _ScreenTypeDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenTypeDropdown.vue?vue&type=script&lang=js& */ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _ScreenTypeDropdown_vue_vue_type_style_index_0_id_39c078e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true& */ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScreenTypeDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScreenTypeDropdown_vue_vue_type_template_id_39c078e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScreenTypeDropdown_vue_vue_type_template_id_39c078e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39c078e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/processes/screens/components/ScreenTypeDropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/templates/components/ProcessTemplateConfigurations.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/templates/components/ProcessTemplateConfigurations.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProcessTemplateConfigurations_vue_vue_type_template_id_32f4163e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e& */ "./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e&");
/* harmony import */ var _ProcessTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProcessTemplateConfigurations.vue?vue&type=script&lang=js& */ "./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProcessTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProcessTemplateConfigurations_vue_vue_type_template_id_32f4163e___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProcessTemplateConfigurations_vue_vue_type_template_id_32f4163e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templates/components/ProcessTemplateConfigurations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/templates/components/ScreenTemplateConfigurations.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/templates/components/ScreenTemplateConfigurations.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScreenTemplateConfigurations_vue_vue_type_template_id_6c2cbef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8& */ "./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8&");
/* harmony import */ var _ScreenTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenTemplateConfigurations.vue?vue&type=script&lang=js& */ "./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScreenTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScreenTemplateConfigurations_vue_vue_type_template_id_6c2cbef8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScreenTemplateConfigurations_vue_vue_type_template_id_6c2cbef8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templates/components/ScreenTemplateConfigurations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/CategorySelect.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/shared/CategorySelect.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategorySelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CategorySelect.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiThumbnailFileUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenTypeDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessTemplateConfigurations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenTemplateConfigurations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTemplateConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/CategorySelect.vue?vue&type=template&id=0c66812e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/shared/CategorySelect.vue?vue&type=template&id=0c66812e& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_template_id_0c66812e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_template_id_0c66812e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySelect_vue_vue_type_template_id_0c66812e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategorySelect.vue?vue&type=template&id=0c66812e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CategorySelect.vue?vue&type=template&id=0c66812e&");


/***/ }),

/***/ "./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_template_id_00436b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_template_id_00436b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_template_id_00436b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=template&id=00436b2c&scoped=true&");


/***/ }),

/***/ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_template_id_39c078e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_template_id_39c078e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_template_id_39c078e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=template&id=39c078e8&scoped=true&");


/***/ }),

/***/ "./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessTemplateConfigurations_vue_vue_type_template_id_32f4163e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessTemplateConfigurations_vue_vue_type_template_id_32f4163e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessTemplateConfigurations_vue_vue_type_template_id_32f4163e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ProcessTemplateConfigurations.vue?vue&type=template&id=32f4163e&");


/***/ }),

/***/ "./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTemplateConfigurations_vue_vue_type_template_id_6c2cbef8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTemplateConfigurations_vue_vue_type_template_id_6c2cbef8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTemplateConfigurations_vue_vue_type_template_id_6c2cbef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/templates/components/ScreenTemplateConfigurations.vue?vue&type=template&id=6c2cbef8&");


/***/ }),

/***/ "./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiThumbnailFileUploader_vue_vue_type_style_index_0_id_00436b2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MultiThumbnailFileUploader.vue?vue&type=style&index=0&id=00436b2c&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenTypeDropdown_vue_vue_type_style_index_0_id_39c078e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-16.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/processes/screens/components/ScreenTypeDropdown.vue?vue&type=style&index=0&id=39c078e8&lang=scss&scoped=true&");


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
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/templates/configure.js"));
/******/ }
]);