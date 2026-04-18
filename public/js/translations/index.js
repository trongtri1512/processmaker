"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/translations/index"],{

/***/ "./resources/js/translations/index.js":
/*!********************************************!*\
  !*** ./resources/js/translations/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function cov_o6isnp866() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/translations/index.js";
  var hash = "0fe0e007f3ab11058dc2708bc26bedb4e942b0fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/translations/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "1": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 11,
          column: 7
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 69
        }
      },
      "3": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 77
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 28
          },
          end: {
            line: 6,
            column: 29
          }
        },
        loc: {
          start: {
            line: 6,
            column: 41
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 11,
            column: 7
          }
        }, {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 11,
            column: 7
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0fe0e007f3ab11058dc2708bc26bedb4e942b0fa"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_o6isnp866 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_o6isnp866();

cov_o6isnp866().s[0]++;
window.ProcessMaker.languageSelector = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: "#language-selector",
  components: {
    LanguageSelectorButton: function LanguageSelectorButton(resolve) {
      cov_o6isnp866().f[0]++;
      cov_o6isnp866().s[1]++;
      if (window.ProcessMaker.languageSelectorButtonComponent) {
        cov_o6isnp866().b[0][0]++;
        cov_o6isnp866().s[2]++;
        resolve(window.ProcessMaker.languageSelectorButtonComponent);
      } else {
        cov_o6isnp866().b[0][1]++;
        cov_o6isnp866().s[3]++;
        window.ProcessMaker.languageSelectorButtonComponentResolve = resolve;
      }
    }
  }
});

/***/ }),

/***/ "./resources/sass/sidebar/sidebar.scss":
/*!*********************************************!*\
  !*** ./resources/sass/sidebar/sidebar.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/admin/queues.scss":
/*!******************************************!*\
  !*** ./resources/sass/admin/queues.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["builds/login/js/vendor","css/app","css/admin/queues","css/sidebar"], () => (__webpack_exec__("./resources/js/translations/index.js"), __webpack_exec__("./resources/sass/sidebar/sidebar.scss"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/sass/admin/queues.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);