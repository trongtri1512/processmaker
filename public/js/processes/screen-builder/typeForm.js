"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/processes/screen-builder/typeForm"],{

/***/ "./resources/js/processes/screen-builder/typeForm.js":
/*!***********************************************************!*\
  !*** ./resources/js/processes/screen-builder/typeForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _processmaker_vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @processmaker/vue-multiselect */ "./node_modules/@processmaker/vue-multiselect/dist/vue-multiselect.es.js");

function cov_1vw74r0irg() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/processes/screen-builder/typeForm.js";
  var hash = "d10c63943ff251e922f7f61d61049b69cbb3c570";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/processes/screen-builder/typeForm.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 42
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 52
        },
        end: {
          line: 6,
          column: 72
        }
      },
      "3": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 7,
          column: 45
        }
      },
      "4": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 80
        }
      },
      "5": {
        start: {
          line: 9,
          column: 51
        },
        end: {
          line: 9,
          column: 79
        }
      },
      "6": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "7": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 54
        }
      },
      "8": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "9": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 68
        }
      },
      "10": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "11": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 31,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 49
          },
          end: {
            line: 5,
            column: 50
          }
        },
        loc: {
          start: {
            line: 5,
            column: 62
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 44
          },
          end: {
            line: 9,
            column: 45
          }
        },
        loc: {
          start: {
            line: 9,
            column: 51
          },
          end: {
            line: 9,
            column: 79
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 14,
            column: 27
          }
        },
        loc: {
          start: {
            line: 14,
            column: 38
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
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
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 32,
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
            line: 32,
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
            line: 18,
            column: 6
          },
          end: {
            line: 23,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 50
          }
        }, {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 19,
            column: 58
          }
        }, {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 50
          }
        }, {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 21,
            column: 50
          }
        }, {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 65
          }
        }, {
          start: {
            line: 23,
            column: 9
          },
          end: {
            line: 23,
            column: 55
          }
        }],
        line: 18
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d10c63943ff251e922f7f61d61049b69cbb3c570"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vw74r0irg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1vw74r0irg();

cov_1vw74r0irg().s[0]++;
Vue.component("Multiselect", _processmaker_vue_multiselect__WEBPACK_IMPORTED_MODULE_1__.Multiselect);
cov_1vw74r0irg().s[1]++;
ProcessMaker.EventBus.$on("screen-builder-init", function (manager) {
  cov_1vw74r0irg().f[0]++;
  var _ref = (cov_1vw74r0irg().s[2]++, window.ScreenBuilder),
    FormBuilderControls = _ref.FormBuilderControls,
    globalProperties = _ref.globalProperties;
  var initialControls = (cov_1vw74r0irg().s[3]++, FormBuilderControls);
  // The submit button has by default the 'submit' value
  var submitButton = (cov_1vw74r0irg().s[4]++, initialControls.find(function (x) {
    cov_1vw74r0irg().f[1]++;
    cov_1vw74r0irg().s[5]++;
    return x.control.label === "Submit";
  }));
  cov_1vw74r0irg().s[6]++;
  if (submitButton) {
    cov_1vw74r0irg().b[0][0]++;
    cov_1vw74r0irg().s[7]++;
    submitButton.control.config.fieldValue = "submit";
  } else {
    cov_1vw74r0irg().b[0][1]++;
  }
  cov_1vw74r0irg().s[8]++;
  initialControls.forEach(function (config) {
    var _config$control$inspe;
    cov_1vw74r0irg().f[2]++;
    cov_1vw74r0irg().s[9]++;
    (_config$control$inspe = config.control.inspector).push.apply(_config$control$inspe, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(globalProperties[0].inspector));
    cov_1vw74r0irg().s[10]++;
    if ((cov_1vw74r0irg().b[2][0]++, config.control.component !== "FormListTable") && (cov_1vw74r0irg().b[2][1]++, config.control.component !== "FormAnalyticsChart") && (cov_1vw74r0irg().b[2][2]++, config.control.component !== "FormAvatar") && (cov_1vw74r0irg().b[2][3]++, config.control.component !== "LinkButton") && (cov_1vw74r0irg().b[2][4]++, config.control.component !== "FormCollectionViewControl") && (cov_1vw74r0irg().b[2][5]++, config.control.component !== "CaseProgressBar")) {
      cov_1vw74r0irg().b[1][0]++;
      cov_1vw74r0irg().s[11]++;
      manager.addControl(config.control, config.rendererComponent, config.rendererBinding, config.builderComponent, config.builderBinding);
    } else {
      cov_1vw74r0irg().b[1][1]++;
    }
  });
});

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
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/processes/screen-builder/typeForm.js"));
/******/ }
]);