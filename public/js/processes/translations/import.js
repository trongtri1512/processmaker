(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/processes/translations/import"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_uniq_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-uniq-ids */ "./node_modules/vue-uniq-ids/index.js");
/* harmony import */ var vue_simple_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-simple-uploader */ "./node_modules/vue-simple-uploader/dist/vue-uploader.js");
/* harmony import */ var vue_simple_uploader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_simple_uploader__WEBPACK_IMPORTED_MODULE_1__);



// Create the mixin
var uniqIdsMixin = (0,vue_uniq_ids__WEBPACK_IMPORTED_MODULE_0__.createUniqIdsMixin)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: (vue_simple_uploader__WEBPACK_IMPORTED_MODULE_1___default()),
  mixins: [uniqIdsMixin],
  props: ["options", "accept", 'displayUploaderList'],
  computed: {
    inProgress: function inProgress() {
      return this.$refs.uploader.fileList.some(function (file) {
        return file._prevProgress < 1;
      });
    }
  },
  data: function data() {
    return {
      loadingFile: false
    };
  },
  methods: {
    addFile: function addFile(file) {
      this.loadingFile = false;
      if (this.accept) {
        file.ignored = true;
        if (this.accept.indexOf(file.fileType) !== -1) {
          file.ignored = false;
        }
        if (file.ignored) {
          ProcessMaker.alert(this.$t("The selected file is invalid or not supported. Please verify that this file is in JSON format."), "danger");
          return false;
        }
        this.loadingFile = true;
      }
      file.ignored = false;
      return true;
    },
    fileUploaded: function fileUploaded(rootFile, file, message) {
      this.loadingFile = false;
      this.$emit('input', file.file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("uploader", {
    ref: "uploader",
    attrs: {
      options: _vm.options
    },
    on: {
      "file-success": _vm.fileUploaded,
      "file-added": _vm.addFile
    }
  }, [_c("uploader-unsupport"), _vm._v(" "), _c("uploader-drop", {
    staticClass: "dotted-border p-4",
    attrs: {
      id: "uploaderMain"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-upload fa-3x fa-fw text-secondary mb-1"
  }), _vm._v(" "), _c("div", [_vm._v("\n        " + _vm._s(_vm.$t("Drag file here")) + " "), _c("br"), _vm._v("\n        - " + _vm._s(_vm.$t("or")) + " -\n      ")]), _vm._v(" "), _c("uploader-btn", {
    staticClass: "text-primary",
    attrs: {
      id: "submitFile"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select file from computer")))]), _vm._v(" "), _vm.$refs.uploader && _vm.inProgress || _vm.loadingFile ? _c("div", [_c("i", {
    staticClass: "fas fa-spinner fa-spin p-0"
  })]) : _vm._e()], 1), _vm._v(" "), _vm.displayUploaderList ? _c("uploader-list", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var fileList = _ref.fileList;
        return [_c("ul", _vm._l(fileList, function (file) {
          return _c("li", {
            key: file.id
          }, [_c("uploader-file", {
            attrs: {
              file: file,
              list: true
            }
          })], 1);
        }), 0)];
      }
    }], null, false, 1868099479)
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/processes/translations/import.js":
/*!*******************************************************!*\
  !*** ./resources/js/processes/translations/import.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_shared_DraggableFileUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/shared/DraggableFileUpload */ "./resources/js/components/shared/DraggableFileUpload.vue");
function cov_1huocmw06c() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/processes/translations/import.js";
  var hash = "793257ce601169c6642431cad4ec0700875b44af";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/processes/translations/import.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 58
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
    hash: "793257ce601169c6642431cad4ec0700875b44af"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1huocmw06c = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1huocmw06c();

cov_1huocmw06c().s[0]++;
Vue.component("DraggableFileUpload", _components_shared_DraggableFileUpload__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.required[data-v-b906d46a] {\n  color: red;\n  font-size: 0.8em;\n}\n.dotted-border[data-v-b906d46a] {\n  border: 3px dotted #e0e0e0;\n}\n#uploaderMain[data-v-b906d46a] {\n  font-size: 18px;\n}\n.uploader-drop[data-v-b906d46a] {\n  background: none;\n}\n.uploader-btn[data-v-b906d46a]:hover {\n  background:none;\n}\n#submitFile[data-v-b906d46a] {\n  border:none;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_style_index_0_id_b906d46a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_style_index_0_id_b906d46a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_style_index_0_id_b906d46a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/shared/DraggableFileUpload.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/shared/DraggableFileUpload.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DraggableFileUpload_vue_vue_type_template_id_b906d46a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true& */ "./resources/js/components/shared/DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true&");
/* harmony import */ var _DraggableFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraggableFileUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/DraggableFileUpload.vue?vue&type=script&lang=js&");
/* harmony import */ var _DraggableFileUpload_vue_vue_type_style_index_0_id_b906d46a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css& */ "./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DraggableFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DraggableFileUpload_vue_vue_type_template_id_b906d46a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DraggableFileUpload_vue_vue_type_template_id_b906d46a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b906d46a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/DraggableFileUpload.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/DraggableFileUpload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/shared/DraggableFileUpload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DraggableFileUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/shared/DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_template_id_b906d46a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_template_id_b906d46a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_template_id_b906d46a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=template&id=b906d46a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DraggableFileUpload_vue_vue_type_style_index_0_id_b906d46a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DraggableFileUpload.vue?vue&type=style&index=0&id=b906d46a&scoped=true&lang=css&");


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

/***/ "./node_modules/vue-simple-uploader/dist/vue-uploader.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-simple-uploader/dist/vue-uploader.js ***!
  \***************************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=26)}([function(e,t){function i(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(e,t){e.exports=function(e,t,i,n,r){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=l):i&&(l=i),l){var p=u.functional,f=p?u.render:u.beforeCreate;p?u.render=function(e,t){return l.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:u}}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=p[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(o(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(o(i.parts[r]));p[i.id]={id:i.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,i,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(h)return A;n.parentNode.removeChild(n)}if(C){var o=c++;n=d||(d=r()),t=s.bind(null,n,o,!1),i=s.bind(null,n,o,!0)}else n=r(),t=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function s(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(g,t.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(86),p={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,c=0,h=!1,A=function(){},v=null,g="data-vue-ssr-id",C="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,r){h=i,v=r||{};var o=l(e,t);return n(o),function(t){for(var i=[],r=0;r<o.length;r++){var s=o[r],a=p[s.id];a.refs--,i.push(a)}t?(o=l(e,t),n(o)):o=[];for(var r=0;r<i.length;r++){var a=i[r];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete p[a.id]}}}};var m=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var n,r,o;!function(i,s){r=[t],n=s,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.uploaderMixin={inject:["uploader"]},e.supportMixin={data:function(){return{support:!0}},mounted:function(){this.support=this.uploader.uploader.support}}})},function(e,t,i){function n(e){i(81)}var r=i(1)(i(29),i(74),n,null,null);e.exports=r.exports},function(e,t){var i=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},function(e,t,i){e.exports=!i(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var i=Object.prototype,n=Array.prototype,r=i.toString,o=function(e){return"[object Function]"===r.call(e)},s=Array.isArray||function(e){return"[object Array]"===r.call(e)},a=function(e){return"[object Object]"===r.call(e)&&Object.getPrototypeOf(e)===i},u=0,l={uid:function(){return++u},noop:function(){},bind:function(e,t){return function(){return e.apply(t,arguments)}},preventEvent:function(e){e.preventDefault()},stop:function(e){e.preventDefault(),e.stopPropagation()},nextTick:function(e,t){setTimeout(l.bind(e,t),0)},toArray:function(e,t,i){return void 0===t&&(t=0),void 0===i&&(i=e.length),n.slice.call(e,t,i)},isPlainObject:a,isFunction:o,isArray:s,isObject:function(e){return Object(e)===e},isString:function(e){return"string"==typeof e},isUndefined:function(e){return void 0===e},isDefined:function(e){return void 0!==e},each:function(e,t,i){if(l.isDefined(e.length))for(var n=0,r=e.length;n<r&&!1!==t.call(i,e[n],n,e);n++);else for(var o in e)if(!1===t.call(i,e[o],o,e))break},evalOpts:function(e,t){return l.isFunction(e)&&(t=l.toArray(arguments),e=e.apply(null,t.slice(1))),e},extend:function(){var e,t,i,n,r,u,p=arguments[0]||{},f=1,d=arguments.length,c=!1;for("boolean"==typeof p&&(c=p,p=arguments[1]||{},f++),"object"==typeof p||o(p)||(p={}),f===d&&(p=this,f--);f<d;f++)if(null!=(e=arguments[f]))for(t in e)i=p[t],n=e[t],p!==n&&(c&&n&&(a(n)||(r=s(n)))?(r?(r=!1,u=i&&s(i)?i:[]):u=i&&a(i)?i:{},p[t]=l.extend(c,u,n)):void 0!==n&&(p[t]=n));return p},formatSize:function(e){return e<1024?e.toFixed(0)+" bytes":e<1048576?(e/1024).toFixed(0)+" KB":e<1073741824?(e/1024/1024).toFixed(1)+" MB":(e/1024/1024/1024).toFixed(1)+" GB"},defineNonEnumerable:function(e,t,i){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:i})}};e.exports=l},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var i=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,i){function n(e){i(85)}var r=i(1)(i(27),i(78),n,null,null);e.exports=r.exports},function(e,t,i){function n(e){i(83)}var r=i(1)(i(28),i(76),n,null,null);e.exports=r.exports},function(e,t,i){function n(e){i(84)}var r=i(1)(i(30),i(77),n,null,null);e.exports=r.exports},function(e,t,i){function n(e){i(80)}var r=i(1)(i(31),i(73),n,null,null);e.exports=r.exports},function(e,t,i){function n(e){i(79)}var r=i(1)(i(32),i(72),n,null,null);e.exports=r.exports},function(e,t,i){var n,r,o;!function(i,s){r=[t],n=s,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e){"use strict";function t(e){function t(e){return e>1?"s":""}var i=Math.floor(e/31536e3);if(i)return i+" year"+t(i);var n=Math.floor((e%=31536e3)/86400);if(n)return n+" day"+t(n);var r=Math.floor((e%=86400)/3600);if(r)return r+" hour"+t(r);var o=Math.floor((e%=3600)/60);if(o)return o+" minute"+t(o);var s=e%60;return s+" second"+t(s)}function i(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}Object.defineProperty(e,"__esModule",{value:!0}),e.secondsToStr=t,e.kebabCase=i})},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,i){var n=i(9),r=i(5),o=i(43),s=i(47),a=function(e,t,i){var u,l,p,f=e&a.F,d=e&a.G,c=e&a.S,h=e&a.P,A=e&a.B,v=e&a.W,g=d?r:r[t]||(r[t]={}),C=g.prototype,m=d?n:c?n[t]:(n[t]||{}).prototype;d&&(i=t);for(u in i)(l=!f&&m&&void 0!==m[u])&&u in g||(p=l?m[u]:i[u],g[u]=d&&"function"!=typeof m[u]?i[u]:A&&l?o(p,n):v&&m[u]==p?function(e){var t=function(t,i,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,i)}return new e(t,i,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):h&&"function"==typeof p?o(Function.call,p):p,h&&((g.virtual||(g.virtual={}))[u]=p,e&a.R&&C&&!C[u]&&s(C,u,p)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t,i){var n=i(40),r=i(48),o=i(59),s=Object.defineProperty;t.f=i(6)?Object.defineProperty:function(e,t,i){if(n(e),t=o(t,!0),n(i),r)try{return s(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[t]=i.value),e}},function(e,t){var i=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:i)(e)}},function(e,t,i){var n=i(49),r=i(17);e.exports=function(e){return n(r(e))}},function(e,t,i){function n(e,t,i){r.defineNonEnumerable(this,"uploader",e),r.defineNonEnumerable(this,"file",t),r.defineNonEnumerable(this,"bytes",null),this.offset=i,this.tested=!1,this.retries=0,this.pendingRetry=!1,this.preprocessState=0,this.readState=0,this.loaded=0,this.total=0,this.chunkSize=this.uploader.opts.chunkSize,this.startByte=this.offset*this.chunkSize,this.endByte=this.computeEndByte(),this.xhr=null}var r=i(7),o=n.STATUS={PENDING:"pending",UPLOADING:"uploading",READING:"reading",SUCCESS:"success",ERROR:"error",COMPLETE:"complete",PROGRESS:"progress",RETRY:"retry"};r.extend(n.prototype,{_event:function(e,t){t=r.toArray(arguments),t.unshift(this),this.file._chunkEvent.apply(this.file,t)},computeEndByte:function(){var e=Math.min(this.file.size,(this.offset+1)*this.chunkSize);return this.file.size-e<this.chunkSize&&!this.uploader.opts.forceChunkSize&&(e=this.file.size),e},getParams:function(){return{chunkNumber:this.offset+1,chunkSize:this.uploader.opts.chunkSize,currentChunkSize:this.endByte-this.startByte,totalSize:this.file.size,identifier:this.file.uniqueIdentifier,filename:this.file.name,relativePath:this.file.relativePath,totalChunks:this.file.chunks.length}},getTarget:function(e,t){return t.length?(e.indexOf("?")<0?e+="?":e+="&",e+t.join("&")):e},test:function(){function e(e){var t=n.status(!0);t===o.ERROR?(n._event(t,n.message()),n.uploader.uploadNextChunk()):t===o.SUCCESS?(n._event(t,n.message()),n.tested=!0):n.file.paused||(n.tested=!0,n.send())}this.xhr=new XMLHttpRequest,this.xhr.addEventListener("load",e,!1),this.xhr.addEventListener("error",e,!1);var t=r.evalOpts(this.uploader.opts.testMethod,this.file,this),i=this.prepareXhrRequest(t,!0);this.xhr.send(i);var n=this},preprocessFinished:function(){this.endByte=this.computeEndByte(),this.preprocessState=2,this.send()},readFinished:function(e){this.readState=2,this.bytes=e,this.send()},send:function(){function e(e){e.lengthComputable&&(u.loaded=e.loaded,u.total=e.total),u._event(o.PROGRESS,e)}function t(e){var t=u.message();u.processingResponse=!0,u.uploader.opts.processResponse(t,function(e,t){if(u.processingResponse=!1,u.xhr){u.processedState={err:e,res:t};var i=u.status();if(i===o.SUCCESS||i===o.ERROR)u._event(i,t),i===o.ERROR&&u.uploader.uploadNextChunk();else{u._event(o.RETRY,t),u.pendingRetry=!0,u.abort(),u.retries++;var n=u.uploader.opts.chunkRetryInterval;null!==n?setTimeout(function(){u.send()},n):u.send()}}},u.file,u)}var i=this.uploader.opts.preprocess,n=this.uploader.opts.readFileFn;if(r.isFunction(i))switch(this.preprocessState){case 0:return this.preprocessState=1,void i(this);case 1:return}switch(this.readState){case 0:return this.readState=1,void n(this.file,this.file.fileType,this.startByte,this.endByte,this);case 1:return}if(this.uploader.opts.testChunks&&!this.tested)return void this.test();this.loaded=0,this.total=0,this.pendingRetry=!1,this.xhr=new XMLHttpRequest,this.xhr.upload.addEventListener("progress",e,!1),this.xhr.addEventListener("load",t,!1),this.xhr.addEventListener("error",t,!1);var s=r.evalOpts(this.uploader.opts.uploadMethod,this.file,this),a=this.prepareXhrRequest(s,!1,this.uploader.opts.method,this.bytes);this.xhr.send(a);var u=this},abort:function(){var e=this.xhr;this.xhr=null,this.processingResponse=!1,this.processedState=null,e&&e.abort()},status:function(e){if(1===this.readState)return o.READING;if(this.pendingRetry||1===this.preprocessState)return o.UPLOADING;if(this.xhr){if(this.xhr.readyState<4||this.processingResponse)return o.UPLOADING;var t;this.uploader.opts.successStatuses.indexOf(this.xhr.status)>-1?t=o.SUCCESS:this.uploader.opts.permanentErrors.indexOf(this.xhr.status)>-1||!e&&this.retries>=this.uploader.opts.maxChunkRetries?t=o.ERROR:(this.abort(),t=o.PENDING);var i=this.processedState;return i&&i.err&&(t=o.ERROR),t}return o.PENDING},message:function(){return this.xhr?this.xhr.responseText:""},progress:function(){if(this.pendingRetry)return 0;var e=this.status();return e===o.SUCCESS||e===o.ERROR?1:e===o.PENDING?0:this.total>0?this.loaded/this.total:0},sizeUploaded:function(){var e=this.endByte-this.startByte;return this.status()!==o.SUCCESS&&(e=this.progress()*e),e},prepareXhrRequest:function(e,t,i,n){var o=r.evalOpts(this.uploader.opts.query,this.file,this,t);o=r.extend(this.getParams(),o),o=this.uploader.opts.processParams(o,this.file,this,t);var s=r.evalOpts(this.uploader.opts.target,this.file,this,t),a=null;if("GET"===e||"octet"===i){var u=[];r.each(o,function(e,t){u.push([encodeURIComponent(t),encodeURIComponent(e)].join("="))}),s=this.getTarget(s,u),a=n||null}else a=new FormData,r.each(o,function(e,t){a.append(t,e)}),void 0!==n&&a.append(this.uploader.opts.fileParameterName,n,this.file.name);return this.xhr.open(e,s,!0),this.xhr.withCredentials=this.uploader.opts.withCredentials,r.each(r.evalOpts(this.uploader.opts.headers,this.file,this,t),function(e,t){this.xhr.setRequestHeader(t,e)},this),a}}),e.exports=n},function(e,t,i){function n(e){this.support=p,this.support&&(this.supportDirectory=f,r.defineNonEnumerable(this,"filePaths",{}),this.opts=r.extend({},n.defaults,e||{}),this.preventEvent=r.bind(this._preventEvent,this),s.call(this,this))}var r=i(7),o=i(70),s=i(71),a=i(22),u="undefined"==typeof window,l=!u&&window.navigator.msPointerEnabled,p=function(){if(u)return!1;var e="slice",t=r.isDefined(window.File)&&r.isDefined(window.Blob)&&r.isDefined(window.FileList),i=null;return t&&(i=window.Blob.prototype,r.each(["slice","webkitSlice","mozSlice"],function(t){if(i[t])return e=t,!1}),t=!!i[e]),t&&(n.sliceName=e),i=null,t}(),f=function(){if(u)return!1;var e=window.document.createElement("input");e.type="file";var t="webkitdirectory"in e||"directory"in e;return e=null,t}(),d=function(e,t,i,r,o){o.readFinished(e.file[n.sliceName](i,r,t))};n.version="__VERSION__",n.defaults={chunkSize:1048576,forceChunkSize:!1,simultaneousUploads:3,singleFile:!1,fileParameterName:"file",progressCallbacksInterval:500,speedSmoothingFactor:.1,query:{},headers:{},withCredentials:!1,preprocess:null,method:"multipart",testMethod:"GET",uploadMethod:"POST",prioritizeFirstAndLastChunk:!1,allowDuplicateUploads:!1,target:"/",testChunks:!0,generateUniqueIdentifier:null,maxChunkRetries:0,chunkRetryInterval:null,permanentErrors:[404,415,500,501],successStatuses:[200,201,202],onDropStopPropagation:!1,initFileFn:null,readFileFn:d,checkChunkUploadedByResponse:null,initialPaused:!1,processResponse:function(e,t){t(null,e)},processParams:function(e){return e}},n.utils=r,n.event=o,n.File=s,n.Chunk=a,n.prototype=r.extend({},s.prototype),r.extend(n.prototype,o),r.extend(n.prototype,{constructor:n,_trigger:function(e){var t=r.toArray(arguments),i=!this.trigger.apply(this,arguments);return"catchAll"!==e&&(t.unshift("catchAll"),i=!this.trigger.apply(this,t)||i),!i},_triggerAsync:function(){var e=arguments;r.nextTick(function(){this._trigger.apply(this,e)},this)},addFiles:function(e,t){var i=[],n=this.fileList.length;r.each(e,function(e){if((!l||l&&e.size>0)&&(e.size%4096!=0||"."!==e.name&&"."!==e.fileName)){var n=this.generateUniqueIdentifier(e);if(this.opts.allowDuplicateUploads||!this.getFromUniqueIdentifier(n)){var r=new s(this,e,this);r.uniqueIdentifier=n,this._trigger("fileAdded",r,t)?i.push(r):s.prototype.removeFile.call(this,r)}}},this);var o=this.fileList.slice(n);this._trigger("filesAdded",i,o,t)?(r.each(i,function(e){this.opts.singleFile&&this.files.length>0&&this.removeFile(this.files[0]),this.files.push(e)},this),this._trigger("filesSubmitted",i,o,t)):r.each(o,function(e){s.prototype.removeFile.call(this,e)},this)},addFile:function(e,t){this.addFiles([e],t)},cancel:function(){for(var e=this.fileList.length-1;e>=0;e--)this.fileList[e].cancel()},removeFile:function(e){s.prototype.removeFile.call(this,e),this._trigger("fileRemoved",e)},generateUniqueIdentifier:function(e){var t=this.opts.generateUniqueIdentifier;if(r.isFunction(t))return t(e);var i=e.relativePath||e.webkitRelativePath||e.fileName||e.name;return e.size+"-"+i.replace(/[^0-9a-zA-Z_-]/gim,"")},getFromUniqueIdentifier:function(e){var t=!1;return r.each(this.files,function(i){if(i.uniqueIdentifier===e)return t=i,!1}),t},uploadNextChunk:function(e){var t=!1,i=a.STATUS.PENDING,n=this.uploader.opts.checkChunkUploadedByResponse;if(this.opts.prioritizeFirstAndLastChunk&&(r.each(this.files,function(e){if(!e.paused&&(!n||e._firstResponse||!e.isUploading()))return e.chunks.length&&e.chunks[0].status()===i?(e.chunks[0].send(),t=!0,!1):e.chunks.length>1&&e.chunks[e.chunks.length-1].status()===i?(e.chunks[e.chunks.length-1].send(),t=!0,!1):void 0}),t))return t;if(r.each(this.files,function(e){if(!e.paused){if(n&&!e._firstResponse&&e.isUploading())return;r.each(e.chunks,function(e){if(e.status()===i)return e.send(),t=!0,!1})}if(t)return!1}),t)return!0;var o=!1;return r.each(this.files,function(e){if(!e.isComplete())return o=!0,!1}),o||e||!this.files.length||this._triggerAsync("complete"),o},upload:function(e){var t=this._shouldUploadNext();if(!1!==t){!e&&this._trigger("uploadStart");for(var i=!1,n=1;n<=this.opts.simultaneousUploads-t&&((i=this.uploadNextChunk(!e)||i)||!e);n++);i||e||this._triggerAsync("complete")}},_shouldUploadNext:function(){var e=0,t=!0,i=this.opts.simultaneousUploads,n=a.STATUS.UPLOADING;return r.each(this.files,function(o){return r.each(o.chunks,function(r){if(r.status()===n&&++e>=i)return t=!1,!1}),t}),t&&e},assignBrowse:function(e,t,i,n){void 0===e.length&&(e=[e]),r.each(e,function(e){var o;"INPUT"===e.tagName&&"file"===e.type?o=e:(o=document.createElement("input"),o.setAttribute("type","file"),r.extend(o.style,{visibility:"hidden",position:"absolute",width:"1px",height:"1px"}),e.appendChild(o),e.addEventListener("click",function(t){"label"!==e.tagName.toLowerCase()&&o.click()},!1)),this.opts.singleFile||i||o.setAttribute("multiple","multiple"),t&&o.setAttribute("webkitdirectory","webkitdirectory"),n&&r.each(n,function(e,t){o.setAttribute(t,e)});var s=this;o.addEventListener("change",function(e){s._trigger(e.type,e),e.target.value&&(s.addFiles(e.target.files,e),e.target.value="")},!1)},this)},onDrop:function(e){this._trigger(e.type,e),this.opts.onDropStopPropagation&&e.stopPropagation(),e.preventDefault(),this._parseDataTransfer(e.dataTransfer,e)},_parseDataTransfer:function(e,t){e.items&&e.items[0]&&e.items[0].webkitGetAsEntry?this.webkitReadDataTransfer(e,t):this.addFiles(e.files,t)},webkitReadDataTransfer:function(e,t){function i(e){e.readEntries(function(t){t.length?(u+=t.length,r.each(t,function(e){if(e.isFile){var t=e.fullPath;e.file(function(e){n(e,t)},o)}else e.isDirectory&&i(e.createReader())}),i(e)):s()},o)}function n(e,t){e.relativePath=t.substring(1),l.push(e),s()}function o(e){throw e}function s(){0==--u&&a.addFiles(l,t)}var a=this,u=e.items.length,l=[];r.each(e.items,function(e){var t=e.webkitGetAsEntry();if(!t)return void s();t.isFile?n(e.getAsFile(),t.fullPath):i(t.createReader())})},_assignHelper:function(e,t,i){void 0===e.length&&(e=[e]);var n=i?"removeEventListener":"addEventListener";r.each(e,function(e){r.each(t,function(t,i){e[n](i,t,!1)},this)},this)},_preventEvent:function(e){r.preventEvent(e),this._trigger(e.type,e)},assignDrop:function(e){this._onDrop=r.bind(this.onDrop,this),this._assignHelper(e,{dragover:this.preventEvent,dragenter:this.preventEvent,dragleave:this.preventEvent,drop:this._onDrop})},unAssignDrop:function(e){this._assignHelper(e,{dragover:this.preventEvent,dragenter:this.preventEvent,dragleave:this.preventEvent,drop:this._onDrop},!0),this._onDrop=null}}),e.exports=n},function(e,t,i){function n(e){i(82)}var r=i(1)(i(33),i(75),n,null,null);e.exports=r.exports},function(e,t,i){var n,r,o;!function(i,s){r=[e,t],n=s,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=["fileProgress","fileSuccess","fileComplete","fileError"];t.default=i,e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(24),i(11),i(12),i(15),i(14),i(13),i(4)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i,n,r,o,s,a,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function p(e){p.installed||(e.component(f.default.name,f.default),e.component(d.default.name,d.default),e.component(c.default.name,c.default),e.component(h.default.name,h.default),e.component(A.default.name,A.default),e.component(v.default.name,v.default),e.component(g.default.name,g.default))}Object.defineProperty(t,"__esModule",{value:!0});var f=l(i),d=l(n),c=l(r),h=l(o),A=l(s),v=l(a),g=l(u),C={version:"0.7.6",install:p,Uploader:f.default,UploaderBtn:d.default,UploaderDrop:c.default,UploaderUnsupport:h.default,UploaderList:A.default,UploaderFiles:v.default,UploaderFile:g.default};"undefined"!=typeof window&&window.Vue&&window.Vue.use(p),t.default=C,e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(3)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"uploader-btn",mixins:[i.uploaderMixin,i.supportMixin],props:{directory:{type:Boolean,default:!1},single:{type:Boolean,default:!1},attrs:{type:Object,default:function(){return{}}}},mounted:function(){var e=this;this.$nextTick(function(){e.uploader.uploader.assignBrowse(e.$refs.btn,e.directory,e.single,e.attrs)})}},e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(3)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"uploader-drop",mixins:[i.uploaderMixin,i.supportMixin],data:function(){return{dropClass:""}},methods:{onDragEnter:function(){this.dropClass="uploader-dragover"},onDragLeave:function(){this.dropClass=""},onDrop:function(){this.dropClass="uploader-droped"}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$refs.drop,i=e.uploader.uploader;i.assignDrop(t),i.on("dragenter",e.onDragEnter),i.on("dragleave",e.onDragLeave),i.on("drop",e.onDrop)})},beforeDestroy:function(){var e=this.$refs.drop,t=this.uploader.uploader;t.off("dragenter",this.onDragEnter),t.off("dragleave",this.onDragLeave),t.off("drop",this.onDrop),t.unAssignDrop(e)}},e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(35),i(23),i(25),i(16)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i,n,r,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(i),u=s(n),l=s(r);t.default={name:"uploader-file",props:{file:{type:Object,default:function(){return{}}},list:{type:Boolean,default:!1}},data:function(){return{response:null,paused:!1,error:!1,averageSpeed:0,currentSpeed:0,isComplete:!1,isUploading:!1,size:0,formatedSize:"",uploadedSize:0,progress:0,timeRemaining:0,type:"",extension:"",progressingClass:""}},computed:{fileCategory:function(){var e=this.extension,t=this.file.isFolder,i=t?"folder":"unknown",n=this.file.uploader.opts.categoryMap,r=n||{image:["gif","jpg","jpeg","png","bmp","webp"],video:["mp4","m3u8","rmvb","avi","swf","3gp","mkv","flv"],audio:["mp3","wav","wma","ogg","aac","flac"],document:["doc","txt","docx","pages","epub","pdf","numbers","csv","xls","xlsx","keynote","ppt","pptx"]};return(0,a.default)(r).forEach(function(t){r[t].indexOf(e)>-1&&(i=t)}),i},progressStyle:function(){var e=Math.floor(100*this.progress),t="translateX("+Math.floor(e-100)+"%)";return{progress:e+"%",webkitTransform:t,mozTransform:t,msTransform:t,transform:t}},formatedAverageSpeed:function(){return u.default.utils.formatSize(this.averageSpeed)+" / s"},status:function(){var e=this.isUploading,t=this.isComplete,i=this.error,n=this.paused;return t?"success":i?"error":e?"uploading":n?"paused":"waiting"},statusText:function(){var e=this.status,t=this.file.uploader.fileStatusText;return("function"==typeof t?t(e,this.response):t[e])||e},formatedTimeRemaining:function(){var e=this.timeRemaining,t=this.file;if(e===Number.POSITIVE_INFINITY||0===e)return"";var i=(0,o.secondsToStr)(e),n=t.uploader.opts.parseTimeRemaining;return n&&(i=n(e,i)),i}},watch:{status:function(e,t){var i=this;t&&"uploading"===e&&"uploading"!==t?this.tid=setTimeout(function(){i.progressingClass="uploader-file-progressing"},200):(clearTimeout(this.tid),this.progressingClass="")}},methods:{_actionCheck:function(){this.paused=this.file.paused,this.error=this.file.error,this.isUploading=this.file.isUploading()},pause:function(){this.file.pause(),this._actionCheck(),this._fileProgress()},resume:function(){this.file.resume(),this._actionCheck()},remove:function(){this.file.cancel()},retry:function(){this.file.retry(),this._actionCheck()},processResponse:function(e){var t=e;try{t=JSON.parse(e)}catch(e){}this.response=t},fileEventsHandler:function(e,t){var i=t[0],n=t[1],r=this.list?i:n;if(this.file===r){if(this.list&&"fileSuccess"===e)return void this.processResponse(t[2]);this["_"+e].apply(this,t)}},_fileProgress:function(){this.progress=this.file.progress(),this.averageSpeed=this.file.averageSpeed,this.currentSpeed=this.file.currentSpeed,this.timeRemaining=this.file.timeRemaining(),this.uploadedSize=this.file.sizeUploaded(),this._actionCheck()},_fileSuccess:function(e,t,i){e&&this.processResponse(i),this._fileProgress(),this.error=!1,this.isComplete=!0,this.isUploading=!1},_fileComplete:function(){this._fileSuccess()},_fileError:function(e,t,i){this._fileProgress(),this.processResponse(i),this.error=!0,this.isComplete=!1,this.isUploading=!1}},mounted:function(){var e=this,t=["paused","error","averageSpeed","currentSpeed"],i=["isComplete","isUploading",{key:"size",fn:"getSize"},{key:"formatedSize",fn:"getFormatSize"},{key:"uploadedSize",fn:"sizeUploaded"},"progress","timeRemaining",{key:"type",fn:"getType"},{key:"extension",fn:"getExtension"}];t.forEach(function(t){e[t]=e.file[t]}),i.forEach(function(t){"string"==typeof t?e[t]=e.file[t]():e[t.key]=e.file[t.fn]()});var n=this._handlers={},r=function(t){return n[t]=function(){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];e.fileEventsHandler(t,n)},n[t]};l.default.forEach(function(t){e.file.uploader.on(t,r(t))})},destroyed:function(){var e=this;l.default.forEach(function(t){e.file.uploader.off(t,e._handlers[t])}),this._handlers=null}},e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(3),i(4)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"uploader-files",mixins:[i.uploaderMixin],computed:{files:function(){return this.uploader.files}},components:{UploaderFile:r.default}},e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(3),i(4)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"uploader-list",mixins:[i.uploaderMixin],computed:{fileList:function(){return this.uploader.fileList}},components:{UploaderFile:r.default}},e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(3)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"uploader-unsupport",mixins:[i.uploaderMixin,i.supportMixin]},e.exports=t.default})},function(e,t,i){var n,r,o;!function(s,a){r=[e,t,i(36),i(23),i(16),i(11),i(12),i(15),i(14),i(13),i(4)],n=a,void 0!==(o="function"==typeof n?n.apply(t,r):n)&&(e.exports=o)}(0,function(e,t,i,n,r,o,s,a,u,l,p){"use strict";function f(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=f(i),c=f(n),h=f(o),A=f(s),v=f(a),g=f(u),C=f(l),m=f(p);t.default={name:"uploader",provide:function(){return{uploader:this}},props:{options:{type:Object,default:function(){return{}}},autoStart:{type:Boolean,default:!0},fileStatusText:{type:[Object,Function],default:function(){return{success:"success",error:"error",uploading:"uploading",paused:"paused",waiting:"waiting"}}}},data:function(){return{started:!1,files:[],fileList:[]}},methods:{uploadStart:function(){this.started=!0},fileAdded:function(e){if(this.$emit((0,r.kebabCase)("fileAdded"),e),e.ignored)return!1},filesAdded:function(e,t){if(this.$emit((0,r.kebabCase)("filesAdded"),e,t),e.ignored||t.ignored)return!1},fileRemoved:function(e){this.files=this.uploader.files,this.fileList=this.uploader.fileList},filesSubmitted:function(e,t){this.files=this.uploader.files,this.fileList=this.uploader.fileList,this.autoStart&&this.uploader.upload()},allEvent:function(){for(var e,t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];var o=i[0],s=(e={},(0,d.default)(e,"fileAdded",!0),(0,d.default)(e,"filesAdded",!0),(0,d.default)(e,"uploadStart","uploadStart"),e),a=s[o];if(a){if(!0===a)return;this[a].apply(this,i.slice(1))}i[0]=(0,r.kebabCase)(o),this.$emit.apply(this,i)}},created:function(){this.options.initialPaused=!this.autoStart;var e=new c.default(this.options);this.uploader=e,this.uploader.fileStatusText=this.fileStatusText,e.on("catchAll",this.allEvent),e.on("fileAdded",this.fileAdded),e.on("filesAdded",this.filesAdded),e.on("fileRemoved",this.fileRemoved),e.on("filesSubmitted",this.filesSubmitted)},destroyed:function(){var e=this.uploader;e.off("catchAll",this.allEvent),e.off("fileAdded",this.fileAdded),e.off("filesAdded",this.filesAdded),e.off("fileRemoved",this.fileRemoved),e.off("filesSubmitted",this.filesSubmitted),this.uploader=null},components:{UploaderBtn:h.default,UploaderDrop:A.default,UploaderUnsupport:v.default,UploaderList:g.default,UploaderFiles:C.default,UploaderFile:m.default}},e.exports=t.default})},function(e,t,i){e.exports={default:i(37),__esModule:!0}},function(e,t,i){e.exports={default:i(38),__esModule:!0}},function(e,t,i){"use strict";t.__esModule=!0;var n=i(34),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t,i){return t in e?(0,r.default)(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},function(e,t,i){i(61);var n=i(5).Object;e.exports=function(e,t,i){return n.defineProperty(e,t,i)}},function(e,t,i){i(62),e.exports=i(5).Object.keys},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,i){var n=i(10);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,i){var n=i(21),r=i(57),o=i(56);e.exports=function(e){return function(t,i,s){var a,u=n(t),l=r(u.length),p=o(s,l);if(e&&i!=i){for(;l>p;)if((a=u[p++])!=a)return!0}else for(;l>p;p++)if((e||p in u)&&u[p]===i)return e||p||0;return!e&&-1}}},function(e,t){var i={}.toString;e.exports=function(e){return i.call(e).slice(8,-1)}},function(e,t,i){var n=i(39);e.exports=function(e,t,i){if(n(e),void 0===t)return e;switch(i){case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,r){return e.call(t,i,n,r)}}return function(){return e.apply(t,arguments)}}},function(e,t,i){var n=i(10),r=i(9).document,o=n(r)&&n(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){var i={}.hasOwnProperty;e.exports=function(e,t){return i.call(e,t)}},function(e,t,i){var n=i(19),r=i(53);e.exports=i(6)?function(e,t,i){return n.f(e,t,r(1,i))}:function(e,t,i){return e[t]=i,e}},function(e,t,i){e.exports=!i(6)&&!i(8)(function(){return 7!=Object.defineProperty(i(44)("div"),"a",{get:function(){return 7}}).a})},function(e,t,i){var n=i(42);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,i){var n=i(46),r=i(21),o=i(41)(!1),s=i(54)("IE_PROTO");e.exports=function(e,t){var i,a=r(e),u=0,l=[];for(i in a)i!=s&&n(a,i)&&l.push(i);for(;t.length>u;)n(a,i=t[u++])&&(~o(l,i)||l.push(i));return l}},function(e,t,i){var n=i(50),r=i(45);e.exports=Object.keys||function(e){return n(e,r)}},function(e,t,i){var n=i(18),r=i(5),o=i(8);e.exports=function(e,t){var i=(r.Object||{})[e]||Object[e],s={};s[e]=t(i),n(n.S+n.F*o(function(){i(1)}),"Object",s)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,i){var n=i(55)("keys"),r=i(60);e.exports=function(e){return n[e]||(n[e]=r(e))}},function(e,t,i){var n=i(9),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t,i){var n=i(20),r=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?r(e+t,0):o(e,t)}},function(e,t,i){var n=i(20),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},function(e,t,i){var n=i(17);e.exports=function(e){return Object(n(e))}},function(e,t,i){var n=i(10);e.exports=function(e,t){if(!n(e))return e;var i,r;if(t&&"function"==typeof(i=e.toString)&&!n(r=i.call(e)))return r;if("function"==typeof(i=e.valueOf)&&!n(r=i.call(e)))return r;if(!t&&"function"==typeof(i=e.toString)&&!n(r=i.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){var i=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++i+n).toString(36))}},function(e,t,i){var n=i(18);n(n.S+n.F*!i(6),"Object",{defineProperty:i(19).f})},function(e,t,i){var n=i(58),r=i(51);i(52)("keys",function(){return function(e){return r(n(e))}})},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,".uploader-unsupport{position:relative;z-index:10;overflow:hidden}","",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/unsupport.vue"],names:[],mappings:"AACA,oBACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB",file:"unsupport.vue",sourcesContent:["\n.uploader-unsupport {\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n}\n"],sourceRoot:""}])},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,".uploader-list{position:relative}.uploader-list>ul{list-style:none;margin:0;padding:0}","",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/list.vue"],names:[],mappings:"AACA,eACE,iBAAmB,CACpB,AACD,kBACE,gBAAiB,AACjB,SAAU,AACV,SAAU,CACX",file:"list.vue",sourcesContent:["\n.uploader-list {\n  position: relative;\n}\n.uploader-list > ul {\n  list-style: none;\n  margin: 0;\n  padding: 0\n}\n"],sourceRoot:""}])},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,'.uploader-file{position:relative;height:49px;line-height:49px;overflow:hidden;border-bottom:1px solid #cdcdcd}.uploader-file[status=error] .uploader-file-retry,.uploader-file[status=paused] .uploader-file-resume,.uploader-file[status=uploading] .uploader-file-pause,.uploader-file[status=waiting] .uploader-file-pause{display:block}.uploader-file[status=success] .uploader-file-remove{display:none}.uploader-file[status=error] .uploader-file-progress{background:#ffe0e0}.uploader-file-progress{position:absolute;width:100%;height:100%;background:#e2eeff;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.uploader-file-progressing{-webkit-transition:all .4s linear;transition:all .4s linear}.uploader-file-info{position:relative;z-index:1;height:100%;overflow:hidden}.uploader-file-info:hover{background-color:hsla(0,0%,94%,.2)}.uploader-file-info em,.uploader-file-info i{font-style:normal}.uploader-file-actions,.uploader-file-meta,.uploader-file-name,.uploader-file-size,.uploader-file-status{float:left;position:relative;height:100%}.uploader-file-name{width:45%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-indent:14px}.uploader-file-icon{width:24px;height:24px;display:inline-block;vertical-align:top;margin-top:13px;margin-right:8px}.uploader-file-icon:before{content:"\\1F4C3";display:block;height:100%;font-size:24px;line-height:1;text-indent:0}.uploader-file-icon[icon=folder]:before{content:"\\1F4C2"}.uploader-file-icon[icon=image]:before{content:"\\1F4CA"}.uploader-file-icon[icon=video]:before{content:"\\1F4F9"}.uploader-file-icon[icon=audio]:before{content:"\\1F3B5"}.uploader-file-icon[icon=document]:before{content:"\\1F4CB"}.uploader-file-size{width:13%;text-indent:10px}.uploader-file-meta{width:8%}.uploader-file-status{width:24%;text-indent:20px}.uploader-file-actions{width:10%}.uploader-file-actions>span{display:none;float:left;width:16px;height:16px;margin-top:16px;margin-right:10px;cursor:pointer;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkCAYAAAD0ZHJ6AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAACxMAAAsTAQCanBgAAARkSURBVGje7ZnfS1NRHMAH4ptPkvQSuAdBkCxD8FUQJMEULUgzy1KyyPVQ4JMiiP4Bvg6EwUQQfMmwhwRDshwaKUjDVCgoSdDNHkzTJZ6+Z37Purve8+PeTb2TM/ggu+ew89l33x8H9BBCPG7GowXTJej3+wnDvEm0JuLC04+EYWftVAUv+fiCvDUdQR1BHUEdQR3BTIygvixoQS14XgTtthLVdpNWwXRLqvQ724LplFRtyrYF0yVpFLQrKRVMh6RZ0I6kkmCqklaCqpKZH0FX56Crq9jVfdDVk0RfFrSgFsxkQVmLcdKCVrKySCrryhPEyYShhzOcrFtG0EoilfHHk1CRU5rF6ZjNZhlVOW6RnMSVyyilKies4pO41diVy8wIujoHXV3FGdMHXTtJKLFYTLhZtq4vC1rwXApCZTIqgR6g1PBMCO9DL3bMMSqBHqDU8EyISDAHiGKvWwcCQG2KgjlAFCDAOhAAap0K5gKLphk8mqJgLrCIgoxRJ4J5wKpJ7gAoMkn5EBXBPGDVJHcAFJmkfIhQcAql1oBpTvTol9gG9pm4RHAKpdaAaU706JfYBvaZuJVgPQrt4sFlnOh5MC/p3lmJYD0K7eLBZZzoeTAv6d5ZnuAYHjpgEOnk5F0ufhG6v1ggOIaHDhhEOjl5l4tfhO4vthLcwAMrFNvLJO5vEwhu4IEViu1lEve3WQmyoihQFBzG/V0CQVYUBYqCw7i/SxTBcpsRbFeIYLnNCLZbCY5b5KAnxRwct8hBj9McZFVMW0ihRNBuFdMWUigRlFaxuQ9WWYjRMTiIe5z0wSoLMToGB3GPsA9aTZIJoB+nRgBnM1tzOkkmgH6cGgGczWzNpzqLx3n/aULJJgezeNw07oxQySbVywKjBOgFRnDs+VEsx8FlgVEC9AIjOPb8KJYjvSzoG7UW1IJaUAtqQS14toLNM5fN5APdwBJA8G83Pk/aK/rgzVvXzeQD3cASQPBvNz5P2ssTzAaGUIrHEO6zI5gNDKEUjyHcxxWkh4Ylcowwk1QQpIeGJXKMMJO0EgwqyjGCioJBJvDrxRMSuVOTJEXfbz1/bHwWtBL0yoQehK6RucgE+bGzanzulQh6E3IgQV+xpc8kcrfuSO7eTfJ3ZYmQw0Oy9azVKOk1C/bJ5D5F38YPeLfx0rjWJxHsS0SqsSYuxySjj5qO5Oj7xQWy2VBtFOwzCy6ryH3YfE3uh64Y1xckgstJPydEjkkeHv07Iy4Xaao15+KCWTBx6M/db+T9xivSErqaJDdzXI6yLRE8Vgg0coex/SPJvT0SbWu0KpZtbgSpCH3NRt7I5OxHkObc6heU+/M/J5vrpBFM5GBLqCQux14COXs5CNXK5OjPGm1tSMrJSOMNYQ4mVTGV/L6zTL7+DovkbFUxbSW0Wo05l8hJWsU+cRWfSh+Mt5Lb1ck/J1TvVsdDaR/MiEni+llsdZuZp62EViu+96bpNjNPWwmtVnzvFd5m9IVVC54x/wA7gNvqFG9vXQAAAABJRU5ErkJggg==") no-repeat 0 0}.uploader-file-actions>span:hover{background-position-x:-21px}.uploader-file-actions .uploader-file-pause{background-position-y:0}.uploader-file-actions .uploader-file-resume{background-position-y:-17px}.uploader-file-actions .uploader-file-retry{background-position-y:-53px}.uploader-file-actions .uploader-file-remove{display:block;background-position-y:-34px}',"",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/file.vue"],names:[],mappings:"AACA,eACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,+BAAiC,CAClC,AAQD,gNACE,aAAe,CAChB,AACD,qDACE,YAAc,CACf,AACD,qDACE,kBAAoB,CACrB,AACD,wBACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,oCAAqC,AAC7B,2BAA6B,CACtC,AACD,2BACE,kCAAmC,AACnC,yBAA2B,CAC5B,AACD,oBACE,kBAAmB,AACnB,UAAW,AACX,YAAa,AACb,eAAiB,CAClB,AACD,0BACE,kCAA2C,CAC5C,AACD,6CAEE,iBAAmB,CACpB,AACD,yGAKE,WAAY,AACZ,kBAAmB,AACnB,WAAa,CACd,AACD,oBACE,UAAW,AACX,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,gBAAkB,CACnB,AACD,oBACE,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,mBAAoB,AACpB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,2BACE,iBAAc,AACd,cAAe,AACf,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,aAAe,CAChB,AACD,wCACE,gBAAc,CACf,AACD,uCACE,gBAAc,CACf,AACD,uCACE,gBAAc,CACf,AACD,uCACE,gBAAc,CACf,AACD,0CACE,gBAAc,CACf,AACD,oBACE,UAAW,AACX,gBAAkB,CACnB,AACD,oBACE,QAAU,CACX,AACD,sBACE,UAAW,AACX,gBAAkB,CACnB,AACD,uBACE,SAAW,CACZ,AACD,4BACE,aAAc,AACd,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,srDAAwrD,CACzrD,AACD,kCACE,2BAA6B,CAC9B,AACD,4CACE,uBAAyB,CAC1B,AACD,6CACE,2BAA6B,CAC9B,AACD,4CACE,2BAA6B,CAC9B,AACD,6CACE,cAAe,AACf,2BAA6B,CAC9B",file:"file.vue",sourcesContent:['\n.uploader-file {\n  position: relative;\n  height: 49px;\n  line-height: 49px;\n  overflow: hidden;\n  border-bottom: 1px solid #cdcdcd;\n}\n.uploader-file[status="waiting"] .uploader-file-pause,\n.uploader-file[status="uploading"] .uploader-file-pause {\n  display: block;\n}\n.uploader-file[status="paused"] .uploader-file-resume {\n  display: block;\n}\n.uploader-file[status="error"] .uploader-file-retry {\n  display: block;\n}\n.uploader-file[status="success"] .uploader-file-remove {\n  display: none;\n}\n.uploader-file[status="error"] .uploader-file-progress {\n  background: #ffe0e0;\n}\n.uploader-file-progress {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #e2eeff;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.uploader-file-progressing {\n  -webkit-transition: all .4s linear;\n  transition: all .4s linear;\n}\n.uploader-file-info {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  overflow: hidden;\n}\n.uploader-file-info:hover {\n  background-color: rgba(240, 240, 240, 0.2);\n}\n.uploader-file-info i,\n.uploader-file-info em {\n  font-style: normal;\n}\n.uploader-file-name,\n.uploader-file-size,\n.uploader-file-meta,\n.uploader-file-status,\n.uploader-file-actions {\n  float: left;\n  position: relative;\n  height: 100%;\n}\n.uploader-file-name {\n  width: 45%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-indent: 14px;\n}\n.uploader-file-icon {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 13px;\n  margin-right: 8px;\n}\n.uploader-file-icon::before {\n  content: "📃";\n  display: block;\n  height: 100%;\n  font-size: 24px;\n  line-height: 1;\n  text-indent: 0;\n}\n.uploader-file-icon[icon="folder"]::before {\n  content: "📂";\n}\n.uploader-file-icon[icon="image"]::before {\n  content: "📊";\n}\n.uploader-file-icon[icon="video"]::before {\n  content: "📹";\n}\n.uploader-file-icon[icon="audio"]::before {\n  content: "🎵";\n}\n.uploader-file-icon[icon="document"]::before {\n  content: "📋";\n}\n.uploader-file-size {\n  width: 13%;\n  text-indent: 10px;\n}\n.uploader-file-meta {\n  width: 8%;\n}\n.uploader-file-status {\n  width: 24%;\n  text-indent: 20px;\n}\n.uploader-file-actions {\n  width: 10%;\n}\n.uploader-file-actions > span {\n  display: none;\n  float: left;\n  width: 16px;\n  height: 16px;\n  margin-top: 16px;\n  margin-right: 10px;\n  cursor: pointer;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkCAYAAAD0ZHJ6AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAACxMAAAsTAQCanBgAAARkSURBVGje7ZnfS1NRHMAH4ptPkvQSuAdBkCxD8FUQJMEULUgzy1KyyPVQ4JMiiP4Bvg6EwUQQfMmwhwRDshwaKUjDVCgoSdDNHkzTJZ6+Z37Purve8+PeTb2TM/ggu+ew89l33x8H9BBCPG7GowXTJej3+wnDvEm0JuLC04+EYWftVAUv+fiCvDUdQR1BHUEdQR3BTIygvixoQS14XgTtthLVdpNWwXRLqvQ724LplFRtyrYF0yVpFLQrKRVMh6RZ0I6kkmCqklaCqpKZH0FX56Crq9jVfdDVk0RfFrSgFsxkQVmLcdKCVrKySCrryhPEyYShhzOcrFtG0EoilfHHk1CRU5rF6ZjNZhlVOW6RnMSVyyilKies4pO41diVy8wIujoHXV3FGdMHXTtJKLFYTLhZtq4vC1rwXApCZTIqgR6g1PBMCO9DL3bMMSqBHqDU8EyISDAHiGKvWwcCQG2KgjlAFCDAOhAAap0K5gKLphk8mqJgLrCIgoxRJ4J5wKpJ7gAoMkn5EBXBPGDVJHcAFJmkfIhQcAql1oBpTvTol9gG9pm4RHAKpdaAaU706JfYBvaZuJVgPQrt4sFlnOh5MC/p3lmJYD0K7eLBZZzoeTAv6d5ZnuAYHjpgEOnk5F0ufhG6v1ggOIaHDhhEOjl5l4tfhO4vthLcwAMrFNvLJO5vEwhu4IEViu1lEve3WQmyoihQFBzG/V0CQVYUBYqCw7i/SxTBcpsRbFeIYLnNCLZbCY5b5KAnxRwct8hBj9McZFVMW0ihRNBuFdMWUigRlFaxuQ9WWYjRMTiIe5z0wSoLMToGB3GPsA9aTZIJoB+nRgBnM1tzOkkmgH6cGgGczWzNpzqLx3n/aULJJgezeNw07oxQySbVywKjBOgFRnDs+VEsx8FlgVEC9AIjOPb8KJYjvSzoG7UW1IJaUAtqQS14toLNM5fN5APdwBJA8G83Pk/aK/rgzVvXzeQD3cASQPBvNz5P2ssTzAaGUIrHEO6zI5gNDKEUjyHcxxWkh4Ylcowwk1QQpIeGJXKMMJO0EgwqyjGCioJBJvDrxRMSuVOTJEXfbz1/bHwWtBL0yoQehK6RucgE+bGzanzulQh6E3IgQV+xpc8kcrfuSO7eTfJ3ZYmQw0Oy9azVKOk1C/bJ5D5F38YPeLfx0rjWJxHsS0SqsSYuxySjj5qO5Oj7xQWy2VBtFOwzCy6ryH3YfE3uh64Y1xckgstJPydEjkkeHv07Iy4Xaao15+KCWTBx6M/db+T9xivSErqaJDdzXI6yLRE8Vgg0coex/SPJvT0SbWu0KpZtbgSpCH3NRt7I5OxHkObc6heU+/M/J5vrpBFM5GBLqCQux14COXs5CNXK5OjPGm1tSMrJSOMNYQ4mVTGV/L6zTL7+DovkbFUxbSW0Wo05l8hJWsU+cRWfSh+Mt5Lb1ck/J1TvVsdDaR/MiEni+llsdZuZp62EViu+96bpNjNPWwmtVnzvFd5m9IVVC54x/wA7gNvqFG9vXQAAAABJRU5ErkJggg==") no-repeat 0 0;\n}\n.uploader-file-actions > span:hover {\n  background-position-x: -21px;\n}\n.uploader-file-actions .uploader-file-pause {\n  background-position-y: 0;\n}\n.uploader-file-actions .uploader-file-resume {\n  background-position-y: -17px;\n}\n.uploader-file-actions .uploader-file-retry {\n  background-position-y: -53px;\n}\n.uploader-file-actions .uploader-file-remove {\n  display: block;\n  background-position-y: -34px;\n}\n'],sourceRoot:""}])},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,".uploader{position:relative}","",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/uploader.vue"],names:[],mappings:"AACA,UACE,iBAAmB,CACpB",file:"uploader.vue",sourcesContent:["\n.uploader {\n  position: relative;\n}\n"],sourceRoot:""}])},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,".uploader-drop{position:relative;padding:10px;overflow:hidden;border:1px dashed #ccc;background-color:#f5f5f5}.uploader-dragover{border-color:#999;background-color:#f7f7f7}","",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/drop.vue"],names:[],mappings:"AACA,eACE,kBAAmB,AACnB,aAAc,AACd,gBAAiB,AACjB,uBAAwB,AACxB,wBAA0B,CAC3B,AACD,mBACE,kBAAmB,AACnB,wBAA0B,CAC3B",file:"drop.vue",sourcesContent:["\n.uploader-drop {\n  position: relative;\n  padding: 10px;\n  overflow: hidden;\n  border: 1px dashed #ccc;\n  background-color: #f5f5f5;\n}\n.uploader-dragover {\n  border-color: #999;\n  background-color: #f7f7f7;\n}\n"],sourceRoot:""}])},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,".uploader-files{position:relative}.uploader-files>ul{list-style:none;margin:0;padding:0}","",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/files.vue"],names:[],mappings:"AACA,gBACE,iBAAmB,CACpB,AACD,mBACE,gBAAiB,AACjB,SAAU,AACV,SAAU,CACX",file:"files.vue",sourcesContent:["\n.uploader-files {\n  position: relative;\n}\n.uploader-files > ul {\n  list-style: none;\n  margin: 0;\n  padding: 0\n}\n"],sourceRoot:""}])},function(e,t,i){t=e.exports=i(0)(!0),t.push([e.i,".uploader-btn{display:inline-block;position:relative;padding:4px 8px;font-size:100%;line-height:1.4;color:#666;border:1px solid #666;cursor:pointer;border-radius:2px;background:none;outline:none}.uploader-btn:hover{background-color:rgba(0,0,0,.08)}","",{version:3,sources:["/Users/didi/Documents/git/private/vue-uploader/src/components/btn.vue"],names:[],mappings:"AACA,cACE,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,sBAAuB,AACvB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,YAAc,CACf,AACD,oBACE,gCAAqC,CACtC",file:"btn.vue",sourcesContent:["\n.uploader-btn {\n  display: inline-block;\n  position: relative;\n  padding: 4px 8px;\n  font-size: 100%;\n  line-height: 1.4;\n  color: #666;\n  border: 1px solid #666;\n  cursor: pointer;\n  border-radius: 2px;\n  background: none;\n  outline: none;\n}\n.uploader-btn:hover {\n  background-color: rgba(0, 0, 0, .08);\n}\n"],sourceRoot:""}])},function(e,t,i){var n=i(7).each,r={_eventData:null,on:function(e,t){this._eventData||(this._eventData={}),this._eventData[e]||(this._eventData[e]=[]);var i=!1;n(this._eventData[e],function(e){if(e===t)return i=!0,!1}),i||this._eventData[e].push(t)},off:function(e,t){this._eventData||(this._eventData={}),this._eventData[e]&&this._eventData[e].length&&(t?n(this._eventData[e],function(i,n){if(i===t)return this._eventData[e].splice(n,1),!1},this):this._eventData[e]=[])},trigger:function(e){if(this._eventData||(this._eventData={}),!this._eventData[e])return!0;var t=this._eventData[e].slice.call(arguments,1),i=!1;return n(this._eventData[e],function(e){i=!1===e.apply(this,t)||i},this),!i}};e.exports=r},function(e,t,i){function n(e,t,i){o.defineNonEnumerable(this,"uploader",e),this.isRoot=this.isFolder=e===this,o.defineNonEnumerable(this,"parent",i||null),o.defineNonEnumerable(this,"files",[]),o.defineNonEnumerable(this,"fileList",[]),o.defineNonEnumerable(this,"chunks",[]),o.defineNonEnumerable(this,"_errorFiles",[]),o.defineNonEnumerable(this,"file",null),this.id=o.uid(),this.isRoot||!t?this.file=null:o.isString(t)?(this.isFolder=!0,this.file=null,this.path=t,this.parent.path&&(t=t.substr(this.parent.path.length)),this.name="/"===t.charAt(t.length-1)?t.substr(0,t.length-1):t):(this.file=t,this.fileType=this.file.type,this.name=t.fileName||t.name,this.size=t.size,this.relativePath=t.relativePath||t.webkitRelativePath||this.name,this._parseFile()),this.paused=e.opts.initialPaused,this.error=!1,this.allError=!1,this.aborted=!1,this.completed=!1,this.averageSpeed=0,this.currentSpeed=0,this._lastProgressCallback=Date.now(),this._prevUploadedSize=0,this._prevProgress=0,this.bootstrap()}function r(e){var t=[],i=e.split("/"),n=i.length,r=1;if(i.splice(n-1,1),n--,i.length)for(;r<=n;)t.push(i.slice(0,r++).join("/")+"/");return t}var o=i(7),s=i(22);o.extend(n.prototype,{_parseFile:function(){var e=r(this.relativePath);if(e.length){var t=this.uploader.filePaths;o.each(e,function(i,r){var o=t[i];o||(o=new n(this.uploader,i,this.parent),t[i]=o,this._updateParentFileList(o)),this.parent=o,o.files.push(this),e[r+1]||o.fileList.push(this)},this)}else this._updateParentFileList()},_updateParentFileList:function(e){e||(e=this);var t=this.parent;t&&t.fileList.push(e)},_eachAccess:function(e,t){if(this.isFolder)return void o.each(this.files,function(t,i){return e.call(this,t,i)},this);t.call(this,this)},bootstrap:function(){if(!this.isFolder){var e=this.uploader.opts;o.isFunction(e.initFileFn)&&e.initFileFn.call(this,this),this.abort(!0),this._resetError(),this._prevProgress=0;for(var t=e.forceChunkSize?Math.ceil:Math.floor,i=Math.max(t(this.size/e.chunkSize),1),n=0;n<i;n++)this.chunks.push(new s(this.uploader,this,n))}},_measureSpeed:function(){var e=this.uploader.opts.speedSmoothingFactor,t=Date.now()-this._lastProgressCallback;if(t){var i=this.sizeUploaded();this.currentSpeed=Math.max((i-this._prevUploadedSize)/t*1e3,0),this.averageSpeed=e*this.currentSpeed+(1-e)*this.averageSpeed,this._prevUploadedSize=i,this.parent&&this.parent._checkProgress()&&this.parent._measureSpeed()}},_checkProgress:function(e){return Date.now()-this._lastProgressCallback>=this.uploader.opts.progressCallbacksInterval},_chunkEvent:function(e,t,i){var n=this.uploader,r=s.STATUS,o=this,a=this.getRoot(),u=function(){o._measureSpeed(),n._trigger("fileProgress",a,o,e),o._lastProgressCallback=Date.now()};switch(t){case r.PROGRESS:this._checkProgress()&&u();break;case r.ERROR:this._error(),this.abort(!0),n._trigger("fileError",a,this,i,e);break;case r.SUCCESS:if(this._updateUploadedChunks(i,e),this.error)return;clearTimeout(this._progeressId),this._progeressId=0;var l=Date.now()-this._lastProgressCallback;l<n.opts.progressCallbacksInterval&&(this._progeressId=setTimeout(u,n.opts.progressCallbacksInterval-l)),this.isComplete()?(clearTimeout(this._progeressId),u(),this.currentSpeed=0,this.averageSpeed=0,n._trigger("fileSuccess",a,this,i,e),a.isComplete()&&n._trigger("fileComplete",a,this)):this._progeressId||u();break;case r.RETRY:n._trigger("fileRetry",a,this,e)}},_updateUploadedChunks:function(e,t){var i=this.uploader.opts.checkChunkUploadedByResponse;if(i){var n=t.xhr;o.each(this.chunks,function(r){if(!r.tested){var o=i.call(this,r,e);r!==t||o||(r.xhr=null),o&&(r.xhr=n),r.tested=!0}},this),this._firstResponse?this.uploader.uploadNextChunk():(this._firstResponse=!0,this.uploader.upload(!0))}else this.uploader.uploadNextChunk()},_error:function(){this.error=this.allError=!0;for(var e=this.parent;e&&e!==this.uploader;)e._errorFiles.push(this),e.error=!0,e._errorFiles.length===e.files.length&&(e.allError=!0),e=e.parent},_resetError:function(){this.error=this.allError=!1;for(var e=this.parent,t=-1;e&&e!==this.uploader;)t=e._errorFiles.indexOf(this),e._errorFiles.splice(t,1),e.allError=!1,e._errorFiles.length||(e.error=!1),e=e.parent},isComplete:function(){if(!this.completed){var e=!1;this._eachAccess(function(t){if(!t.isComplete())return e=!0,!1},function(){if(this.error)e=!0;else{var t=s.STATUS;o.each(this.chunks,function(i){var n=i.status();if(n===t.ERROR||n===t.PENDING||n===t.UPLOADING||n===t.READING||1===i.preprocessState||1===i.readState)return e=!0,!1})}}),this.completed=!e}return this.completed},isUploading:function(){var e=!1;return this._eachAccess(function(t){if(t.isUploading())return e=!0,!1},function(){var t=s.STATUS.UPLOADING;o.each(this.chunks,function(i){if(i.status()===t)return e=!0,!1})}),e},resume:function(){this._eachAccess(function(e){e.resume()},function(){this.paused=!1,this.aborted=!1,this.uploader.upload()}),this.paused=!1,this.aborted=!1},pause:function(){this._eachAccess(function(e){e.pause()},function(){this.paused=!0,this.abort()}),this.paused=!0},cancel:function(){this.uploader.removeFile(this)},retry:function(e){var t=function(e){e.error&&e.bootstrap()};e?e.bootstrap():this._eachAccess(t,function(){this.bootstrap()}),this.uploader.upload()},abort:function(e){if(!this.aborted){this.currentSpeed=0,this.averageSpeed=0,this.aborted=!e;var t=this.chunks;e&&(this.chunks=[]);var i=s.STATUS.UPLOADING;o.each(t,function(e){e.status()===i&&(e.abort(),this.uploader.uploadNextChunk())},this)}},progress:function(){var e=0,t=0,i=0;return this._eachAccess(function(n,r){e+=n.progress()*n.size,t+=n.size,r===this.files.length-1&&(i=t>0?e/t:this.isComplete()?1:0)},function(){if(this.error)return void(i=1);if(1===this.chunks.length)return this._prevProgress=Math.max(this._prevProgress,this.chunks[0].progress()),void(i=this._prevProgress);var e=0;o.each(this.chunks,function(t){e+=t.progress()*(t.endByte-t.startByte)});var t=e/this.size;this._prevProgress=Math.max(this._prevProgress,t>.9999?1:t),i=this._prevProgress}),i},getSize:function(){var e=0;return this._eachAccess(function(t){e+=t.size},function(){e+=this.size}),e},getFormatSize:function(){var e=this.getSize();return o.formatSize(e)},getRoot:function(){if(this.isRoot)return this;for(var e=this.parent;e;){if(e.parent===this.uploader)return e;e=e.parent}return this},sizeUploaded:function(){var e=0;return this._eachAccess(function(t){e+=t.sizeUploaded()},function(){o.each(this.chunks,function(t){e+=t.sizeUploaded()})}),e},timeRemaining:function(){function e(e,t){return e&&!t?Number.POSITIVE_INFINITY:e||t?Math.floor(e/t):0}var t=0,i=0,n=0;return this._eachAccess(function(r,o){r.paused||r.error||(i+=r.size-r.sizeUploaded(),n+=r.averageSpeed),o===this.files.length-1&&(t=e(i,n))},function(){if(this.paused||this.error)return void(t=0);var i=this.size-this.sizeUploaded();t=e(i,this.averageSpeed)}),t},removeFile:function(e){if(e.isFolder)for(;e.files.length;){var t=e.files[e.files.length-1];this._removeFile(t)}this._removeFile(e)},_delFilePath:function(e){e.path&&this.filePaths&&delete this.filePaths[e.path],o.each(e.fileList,function(e){this._delFilePath(e)},this)},_removeFile:function(e){if(!e.isFolder){o.each(this.files,function(t,i){if(t===e)return this.files.splice(i,1),!1},this),e.abort();for(var t,i=e.parent;i&&i!==this;)t=i.parent,i._removeFile(e),i=t}e.parent===this&&o.each(this.fileList,function(t,i){if(t===e)return this.fileList.splice(i,1),!1},this),this.isRoot||!this.isFolder||this.files.length||(this.parent._removeFile(this),this.uploader._delFilePath(this)),e.parent=null},getType:function(){return this.isFolder?"folder":this.file.type&&this.file.type.split("/")[1]},getExtension:function(){return this.isFolder?"":this.name.substr(2+(~-this.name.lastIndexOf(".")>>>0)).toLowerCase()}}),e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:!e.support,expression:"!support"}],staticClass:"uploader-unsupport"},[e._t("default",[e._m(0)])],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("\n      Your browser, unfortunately, is not supported by Uploader.js. The library requires support for "),i("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/"}},[e._v("the HTML5 File API")]),e._v(" along with "),i("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/#normalization-of-params"}},[e._v("file slicing")]),e._v(".\n    ")])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader-list"},[e._t("default",[i("ul",e._l(e.fileList,function(e){return i("li",{key:e.id},[i("uploader-file",{attrs:{file:e,list:!0}})],1)}))],{fileList:e.fileList})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader-file",attrs:{status:e.status}},[e._t("default",[i("div",{staticClass:"uploader-file-progress",class:e.progressingClass,style:e.progressStyle}),e._v(" "),i("div",{staticClass:"uploader-file-info"},[i("div",{staticClass:"uploader-file-name"},[i("i",{staticClass:"uploader-file-icon",attrs:{icon:e.fileCategory}}),e._v(e._s(e.file.name))]),e._v(" "),i("div",{staticClass:"uploader-file-size"},[e._v(e._s(e.formatedSize))]),e._v(" "),i("div",{staticClass:"uploader-file-meta"}),e._v(" "),i("div",{staticClass:"uploader-file-status"},[i("span",{directives:[{name:"show",rawName:"v-show",value:"uploading"!==e.status,expression:"status !== 'uploading'"}]},[e._v(e._s(e.statusText))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:"uploading"===e.status,expression:"status === 'uploading'"}]},[i("span",[e._v(e._s(e.progressStyle.progress))]),e._v(" "),i("em",[e._v(e._s(e.formatedAverageSpeed))]),e._v(" "),i("i",[e._v(e._s(e.formatedTimeRemaining))])])]),e._v(" "),i("div",{staticClass:"uploader-file-actions"},[i("span",{staticClass:"uploader-file-pause",on:{click:e.pause}}),e._v(" "),i("span",{staticClass:"uploader-file-resume",on:{click:e.resume}},[e._v("️")]),e._v(" "),i("span",{staticClass:"uploader-file-retry",on:{click:e.retry}}),e._v(" "),i("span",{staticClass:"uploader-file-remove",on:{click:e.remove}})])])],{file:e.file,list:e.list,status:e.status,paused:e.paused,error:e.error,response:e.response,averageSpeed:e.averageSpeed,formatedAverageSpeed:e.formatedAverageSpeed,currentSpeed:e.currentSpeed,isComplete:e.isComplete,isUploading:e.isUploading,size:e.size,formatedSize:e.formatedSize,uploadedSize:e.uploadedSize,progress:e.progress,progressStyle:e.progressStyle,progressingClass:e.progressingClass,timeRemaining:e.timeRemaining,formatedTimeRemaining:e.formatedTimeRemaining,type:e.type,extension:e.extension,fileCategory:e.fileCategory})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader"},[e._t("default",[i("uploader-unsupport"),e._v(" "),i("uploader-drop",[i("p",[e._v("Drop files here to upload or")]),e._v(" "),i("uploader-btn",[e._v("select files")]),e._v(" "),i("uploader-btn",{attrs:{directory:!0}},[e._v("select folder")])],1),e._v(" "),i("uploader-list")],{files:e.files,fileList:e.fileList,started:e.started})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.support,expression:"support"}],ref:"drop",staticClass:"uploader-drop",class:e.dropClass},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader-files"},[e._t("default",[i("ul",e._l(e.files,function(e){return i("li",{key:e.id},[i("uploader-file",{attrs:{file:e}})],1)}))],{files:e.files})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",{directives:[{name:"show",rawName:"v-show",value:e.support,expression:"support"}],ref:"btn",staticClass:"uploader-btn"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t,i){var n=i(63);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("2e4f4074",n,!0,{})},function(e,t,i){var n=i(64);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("30297bf6",n,!0,{})},function(e,t,i){var n=i(65);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("9c4391de",n,!0,{})},function(e,t,i){var n=i(66);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("6f0f0164",n,!0,{})},function(e,t,i){var n=i(67);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("f60d437e",n,!0,{})},function(e,t,i){var n=i(68);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("36e02209",n,!0,{})},function(e,t,i){var n=i(69);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("fb1ffb7e",n,!0,{})},function(e,t){e.exports=function(e,t){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],s=o[0],a=o[1],u=o[2],l=o[3],p={id:e+":"+r,css:a,media:u,sourceMap:l};n[s]?n[s].parts.push(p):i.push(n[s]={id:s,parts:[p]})}return i}}])});
//# sourceMappingURL=vue-uploader.js.map

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/processes/translations/import.js"));
/******/ }
]);