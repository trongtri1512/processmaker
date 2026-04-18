(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/tasks/preview"],{

/***/ "./resources/js/tasks/api/index.js":
/*!*****************************************!*\
  !*** ./resources/js/tasks/api/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReassignUsers": () => (/* binding */ getReassignUsers),
/* harmony export */   "updateCollection": () => (/* binding */ updateCollection),
/* harmony export */   "updateComment": () => (/* binding */ updateComment),
/* harmony export */   "updateReassignUser": () => (/* binding */ updateReassignUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/index */ "./resources/js/tasks/variables/index.js");


function cov_2r139k9j3f() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/tasks/api/index.js";
  var hash = "b97d07fd2aecbbf53b2f1b7833680592fa602d63";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/tasks/api/index.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 32
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 14
        },
        end: {
          line: 19,
          column: 22
        }
      },
      "2": {
        start: {
          line: 20,
          column: 17
        },
        end: {
          line: 20,
          column: 19
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 27
        }
      },
      "5": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "6": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 43
        }
      },
      "7": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "8": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 41
        }
      },
      "9": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 36
        }
      },
      "10": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 39
        }
      },
      "11": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 39
        }
      },
      "12": {
        start: {
          line: 39,
          column: 19
        },
        end: {
          line: 39,
          column: 61
        }
      },
      "13": {
        start: {
          line: 40,
          column: 15
        },
        end: {
          line: 40,
          column: 28
        }
      },
      "14": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "15": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 74
        }
      },
      "16": {
        start: {
          line: 44,
          column: 43
        },
        end: {
          line: 44,
          column: 72
        }
      },
      "17": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 14
        }
      },
      "18": {
        start: {
          line: 50,
          column: 34
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "19": {
        start: {
          line: 51,
          column: 14
        },
        end: {
          line: 51,
          column: 22
        }
      },
      "20": {
        start: {
          line: 52,
          column: 19
        },
        end: {
          line: 52,
          column: 82
        }
      },
      "21": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 23
        }
      },
      "22": {
        start: {
          line: 56,
          column: 29
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "23": {
        start: {
          line: 64,
          column: 14
        },
        end: {
          line: 64,
          column: 22
        }
      },
      "24": {
        start: {
          line: 65,
          column: 19
        },
        end: {
          line: 72,
          column: 4
        }
      },
      "25": {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 73,
          column: 23
        }
      },
      "26": {
        start: {
          line: 76,
          column: 32
        },
        end: {
          line: 81,
          column: 1
        }
      },
      "27": {
        start: {
          line: 77,
          column: 14
        },
        end: {
          line: 77,
          column: 22
        }
      },
      "28": {
        start: {
          line: 78,
          column: 19
        },
        end: {
          line: 78,
          column: 89
        }
      },
      "29": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 80,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 18,
            column: 5
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 33
          },
          end: {
            line: 44,
            column: 34
          }
        },
        loc: {
          start: {
            line: 44,
            column: 43
          },
          end: {
            line: 44,
            column: 72
          }
        },
        line: 44
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 50,
            column: 34
          },
          end: {
            line: 50,
            column: 35
          }
        },
        loc: {
          start: {
            line: 50,
            column: 77
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 50
      },
      "3": {
        name: "(anonymous_3)",
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
            line: 63,
            column: 6
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 63
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 76,
            column: 32
          },
          end: {
            line: 76,
            column: 33
          }
        },
        loc: {
          start: {
            line: 76,
            column: 76
          },
          end: {
            line: 81,
            column: 1
          }
        },
        line: 76
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 15
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 14,
            column: 15
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 15
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 15,
            column: 15
          }
        }],
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 17
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 17
          }
        }],
        line: 16
      },
      "3": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 17,
            column: 22
          },
          end: {
            line: 17,
            column: 26
          }
        }],
        line: 17
      },
      "4": {
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
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
        line: 22
      },
      "5": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 37,
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
        line: 26
      },
      "6": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 36,
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
        line: 30
      },
      "7": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
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
        line: 43
      },
      "8": {
        loc: {
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 43,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 43,
            column: 23
          }
        }, {
          start: {
            line: 43,
            column: 27
          },
          end: {
            line: 43,
            column: 52
          }
        }],
        line: 43
      },
      "9": {
        loc: {
          start: {
            line: 50,
            column: 57
          },
          end: {
            line: 50,
            column: 72
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 50,
            column: 68
          },
          end: {
            line: 50,
            column: 72
          }
        }],
        line: 50
      },
      "10": {
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 14
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 61,
            column: 13
          },
          end: {
            line: 61,
            column: 14
          }
        }],
        line: 61
      },
      "11": {
        loc: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 18
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 62,
            column: 9
          },
          end: {
            line: 62,
            column: 18
          }
        }],
        line: 62
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
      "29": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0],
      "10": [0],
      "11": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b97d07fd2aecbbf53b2f1b7833680592fa602d63"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2r139k9j3f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2r139k9j3f();

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/**
 * Get reassign users using POST with form_data (for rule expression evaluation)
 * This replaces the obsolete GET method with the advanced POST logic from reassignMixin
 * 
 * @param {string|null} filter - Filter string to search users
 * @param {number|null} taskId - Task ID to get assignable users for
 * @param {Object|null} formData - Form data needed to calculate rule expressions
 * @param {number|null} currentTaskUserId - User ID to exclude from results (matches: task?.user_id ?? task?.user?.id)
 * @returns {Promise<Object>} Response data with users array
 */
cov_2r139k9j3f().s[0]++;
var getReassignUsers = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var filter,
      taskId,
      formData,
      currentTaskUserId,
      api,
      params,
      response,
      data,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filter = _args.length > 0 && _args[0] !== undefined ? _args[0] : (cov_2r139k9j3f().b[0][0]++, null);
          taskId = _args.length > 1 && _args[1] !== undefined ? _args[1] : (cov_2r139k9j3f().b[1][0]++, null);
          formData = _args.length > 2 && _args[2] !== undefined ? _args[2] : (cov_2r139k9j3f().b[2][0]++, null);
          currentTaskUserId = _args.length > 3 && _args[3] !== undefined ? _args[3] : (cov_2r139k9j3f().b[3][0]++, null);
          cov_2r139k9j3f().f[0]++;
          api = (cov_2r139k9j3f().s[1]++, (0,_variables_index__WEBPACK_IMPORTED_MODULE_3__.getApi)());
          params = (cov_2r139k9j3f().s[2]++, {});
          cov_2r139k9j3f().s[3]++;
          if (filter) {
            cov_2r139k9j3f().b[4][0]++;
            cov_2r139k9j3f().s[4]++;
            params.filter = filter;
          } else {
            cov_2r139k9j3f().b[4][1]++;
          }
          cov_2r139k9j3f().s[5]++;
          if (taskId) {
            cov_2r139k9j3f().b[5][0]++;
            cov_2r139k9j3f().s[6]++;
            params.assignable_for_task_id = taskId;

            // The variables are needed to calculate the rule expression.
            cov_2r139k9j3f().s[7]++;
            if (formData) {
              cov_2r139k9j3f().b[6][0]++;
              cov_2r139k9j3f().s[8]++;
              params.form_data = _objectSpread({}, formData);
              // Remove internal variables
              cov_2r139k9j3f().s[9]++;
              delete params.form_data._user;
              cov_2r139k9j3f().s[10]++;
              delete params.form_data._request;
              cov_2r139k9j3f().s[11]++;
              delete params.form_data._process;
            } else {
              cov_2r139k9j3f().b[6][1]++;
            }
          } else {
            cov_2r139k9j3f().b[5][1]++;
          }
          cov_2r139k9j3f().s[12]++;
          _context.next = 14;
          return api.post("users_task_count", params);
        case 14:
          response = _context.sent;
          data = (cov_2r139k9j3f().s[13]++, response.data); // Filter out current user to prevent self-reassignment (matches mixin logic)
          cov_2r139k9j3f().s[14]++;
          if ((cov_2r139k9j3f().b[8][0]++, currentTaskUserId) && (cov_2r139k9j3f().b[8][1]++, Array.isArray(data === null || data === void 0 ? void 0 : data.data))) {
            cov_2r139k9j3f().b[7][0]++;
            cov_2r139k9j3f().s[15]++;
            data.data = data.data.filter(function (user) {
              cov_2r139k9j3f().f[1]++;
              cov_2r139k9j3f().s[16]++;
              return user.id !== currentTaskUserId;
            });
          } else {
            cov_2r139k9j3f().b[7][1]++;
          }
          cov_2r139k9j3f().s[17]++;
          return _context.abrupt("return", data);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getReassignUsers() {
    return _ref.apply(this, arguments);
  };
}();
cov_2r139k9j3f().s[18]++;
var updateReassignUser = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(taskId, userId) {
    var comments,
      api,
      response,
      _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          comments = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : (cov_2r139k9j3f().b[9][0]++, null);
          cov_2r139k9j3f().f[2]++;
          api = (cov_2r139k9j3f().s[19]++, (0,_variables_index__WEBPACK_IMPORTED_MODULE_3__.getApi)());
          cov_2r139k9j3f().s[20]++;
          _context2.next = 6;
          return api.put("tasks/".concat(taskId), {
            user_id: userId,
            comments: comments
          });
        case 6:
          response = _context2.sent;
          cov_2r139k9j3f().s[21]++;
          return _context2.abrupt("return", response.data);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function updateReassignUser(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
cov_2r139k9j3f().s[22]++;
var updateComment = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(_ref3) {
    var body, subject, commentableId, commentableType, _ref3$parentId, parentId, _ref3$type, type, api, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          body = _ref3.body, subject = _ref3.subject, commentableId = _ref3.commentableId, commentableType = _ref3.commentableType, _ref3$parentId = _ref3.parentId, parentId = _ref3$parentId === void 0 ? (cov_2r139k9j3f().b[10][0]++, 0) : _ref3$parentId, _ref3$type = _ref3.type, type = _ref3$type === void 0 ? (cov_2r139k9j3f().b[11][0]++, "COMMENT") : _ref3$type;
          cov_2r139k9j3f().f[3]++;
          api = (cov_2r139k9j3f().s[23]++, (0,_variables_index__WEBPACK_IMPORTED_MODULE_3__.getApi)());
          cov_2r139k9j3f().s[24]++;
          _context3.next = 6;
          return api.post("comments/comments", {
            body: body,
            subject: subject,
            commentable_id: commentableId,
            commentable_type: commentableType,
            type: type,
            parent_id: parentId
          });
        case 6:
          response = _context3.sent;
          cov_2r139k9j3f().s[25]++;
          return _context3.abrupt("return", response.data);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function updateComment(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
cov_2r139k9j3f().s[26]++;
var updateCollection = /*#__PURE__*/function () {
  var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(_ref5) {
    var collectionId, recordId, data, api, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          collectionId = _ref5.collectionId, recordId = _ref5.recordId, data = _ref5.data;
          cov_2r139k9j3f().f[4]++;
          api = (cov_2r139k9j3f().s[27]++, (0,_variables_index__WEBPACK_IMPORTED_MODULE_3__.getApi)());
          cov_2r139k9j3f().s[28]++;
          _context4.next = 6;
          return api.put("collections/".concat(collectionId, "/records/").concat(recordId), data);
        case 6:
          response = _context4.sent;
          cov_2r139k9j3f().s[29]++;
          return _context4.abrupt("return", response.data);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateCollection(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/js/tasks/preview.js":
/*!***************************************!*\
  !*** ./resources/js/tasks/preview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index */ "./resources/js/tasks/utils/index.js");

function cov_282y5xe3eu() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/tasks/preview.js";
  var hash = "ae7baebe30fe8e4484f3153ae547fa5d1321ae32";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/tasks/preview.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 339,
          column: 2
        }
      },
      "1": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 52
        }
      },
      "2": {
        start: {
          line: 45,
          column: 21
        },
        end: {
          line: 45,
          column: 23
        }
      },
      "3": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 48,
          column: 7
        }
      },
      "4": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 55
        }
      },
      "5": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 16
        }
      },
      "6": {
        start: {
          line: 52,
          column: 24
        },
        end: {
          line: 56,
          column: 7
        }
      },
      "7": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 54
        }
      },
      "8": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 88
        }
      },
      "9": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 30
        }
      },
      "10": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 34
        }
      },
      "11": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 36
        }
      },
      "12": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 43
        }
      },
      "13": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 75,
          column: 71
        }
      },
      "14": {
        start: {
          line: 78,
          column: 21
        },
        end: {
          line: 78,
          column: 46
        }
      },
      "15": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 59
        }
      },
      "16": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 70
        }
      },
      "17": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 89,
          column: 9
        }
      },
      "18": {
        start: {
          line: 88,
          column: 10
        },
        end: {
          line: 88,
          column: 77
        }
      },
      "19": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 95,
          column: 63
        }
      },
      "20": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 23
        }
      },
      "21": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 104,
          column: 7
        }
      },
      "22": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 103,
          column: 39
        }
      },
      "23": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 130,
          column: 7
        }
      },
      "24": {
        start: {
          line: 107,
          column: 22
        },
        end: {
          line: 107,
          column: 24
        }
      },
      "25": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 127,
          column: 9
        }
      },
      "26": {
        start: {
          line: 109,
          column: 30
        },
        end: {
          line: 109,
          column: 63
        }
      },
      "27": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 119,
          column: 9
        }
      },
      "28": {
        start: {
          line: 115,
          column: 10
        },
        end: {
          line: 115,
          column: 41
        }
      },
      "29": {
        start: {
          line: 118,
          column: 10
        },
        end: {
          line: 118,
          column: 60
        }
      },
      "30": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 124,
          column: 9
        }
      },
      "31": {
        start: {
          line: 122,
          column: 10
        },
        end: {
          line: 122,
          column: 47
        }
      },
      "32": {
        start: {
          line: 123,
          column: 10
        },
        end: {
          line: 123,
          column: 17
        }
      },
      "33": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 46
        }
      },
      "34": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 129,
          column: 30
        }
      },
      "35": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 145,
          column: 7
        }
      },
      "36": {
        start: {
          line: 136,
          column: 6
        },
        end: {
          line: 143,
          column: 7
        }
      },
      "37": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 142,
          column: 9
        }
      },
      "38": {
        start: {
          line: 138,
          column: 24
        },
        end: {
          line: 138,
          column: 41
        }
      },
      "39": {
        start: {
          line: 139,
          column: 10
        },
        end: {
          line: 141,
          column: 11
        }
      },
      "40": {
        start: {
          line: 140,
          column: 12
        },
        end: {
          line: 140,
          column: 37
        }
      },
      "41": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 72
        }
      },
      "42": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 149,
          column: 7
        }
      },
      "43": {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 25
        }
      },
      "44": {
        start: {
          line: 152,
          column: 32
        },
        end: {
          line: 152,
          column: 78
        }
      },
      "45": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 155,
          column: 7
        }
      },
      "46": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 154,
          column: 35
        }
      },
      "47": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 158,
          column: 7
        }
      },
      "48": {
        start: {
          line: 157,
          column: 6
        },
        end: {
          line: 157,
          column: 35
        }
      },
      "49": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 162,
          column: 43
        }
      },
      "50": {
        start: {
          line: 165,
          column: 27
        },
        end: {
          line: 165,
          column: 29
        }
      },
      "51": {
        start: {
          line: 166,
          column: 6
        },
        end: {
          line: 168,
          column: 9
        }
      },
      "52": {
        start: {
          line: 167,
          column: 8
        },
        end: {
          line: 167,
          column: 65
        }
      },
      "53": {
        start: {
          line: 169,
          column: 6
        },
        end: {
          line: 169,
          column: 26
        }
      },
      "54": {
        start: {
          line: 172,
          column: 20
        },
        end: {
          line: 177,
          column: 8
        }
      },
      "55": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 41
        }
      },
      "56": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 184,
          column: 7
        }
      },
      "57": {
        start: {
          line: 182,
          column: 8
        },
        end: {
          line: 182,
          column: 38
        }
      },
      "58": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 50
        }
      },
      "59": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 190,
          column: 7
        }
      },
      "60": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 15
        }
      },
      "61": {
        start: {
          line: 191,
          column: 6
        },
        end: {
          line: 193,
          column: 14
        }
      },
      "62": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 33
        }
      },
      "63": {
        start: {
          line: 196,
          column: 6
        },
        end: {
          line: 196,
          column: 47
        }
      },
      "64": {
        start: {
          line: 199,
          column: 6
        },
        end: {
          line: 199,
          column: 58
        }
      },
      "65": {
        start: {
          line: 203,
          column: 6
        },
        end: {
          line: 205,
          column: 7
        }
      },
      "66": {
        start: {
          line: 204,
          column: 8
        },
        end: {
          line: 204,
          column: 15
        }
      },
      "67": {
        start: {
          line: 206,
          column: 6
        },
        end: {
          line: 206,
          column: 30
        }
      },
      "68": {
        start: {
          line: 209,
          column: 6
        },
        end: {
          line: 217,
          column: 11
        }
      },
      "69": {
        start: {
          line: 215,
          column: 10
        },
        end: {
          line: 215,
          column: 100
        }
      },
      "70": {
        start: {
          line: 216,
          column: 10
        },
        end: {
          line: 216,
          column: 35
        }
      },
      "71": {
        start: {
          line: 221,
          column: 19
        },
        end: {
          line: 221,
          column: 44
        }
      },
      "72": {
        start: {
          line: 222,
          column: 6
        },
        end: {
          line: 230,
          column: 11
        }
      },
      "73": {
        start: {
          line: 228,
          column: 10
        },
        end: {
          line: 228,
          column: 40
        }
      },
      "74": {
        start: {
          line: 229,
          column: 10
        },
        end: {
          line: 229,
          column: 85
        }
      },
      "75": {
        start: {
          line: 233,
          column: 6
        },
        end: {
          line: 238,
          column: 7
        }
      },
      "76": {
        start: {
          line: 234,
          column: 22
        },
        end: {
          line: 234,
          column: 47
        }
      },
      "77": {
        start: {
          line: 235,
          column: 8
        },
        end: {
          line: 235,
          column: 33
        }
      },
      "78": {
        start: {
          line: 241,
          column: 6
        },
        end: {
          line: 241,
          column: 70
        }
      },
      "79": {
        start: {
          line: 245,
          column: 6
        },
        end: {
          line: 245,
          column: 35
        }
      },
      "80": {
        start: {
          line: 248,
          column: 6
        },
        end: {
          line: 248,
          column: 36
        }
      },
      "81": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 249,
          column: 29
        }
      },
      "82": {
        start: {
          line: 252,
          column: 6
        },
        end: {
          line: 262,
          column: 7
        }
      },
      "83": {
        start: {
          line: 253,
          column: 8
        },
        end: {
          line: 261,
          column: 13
        }
      },
      "84": {
        start: {
          line: 258,
          column: 12
        },
        end: {
          line: 258,
          column: 42
        }
      },
      "85": {
        start: {
          line: 259,
          column: 12
        },
        end: {
          line: 259,
          column: 35
        }
      },
      "86": {
        start: {
          line: 260,
          column: 12
        },
        end: {
          line: 260,
          column: 36
        }
      },
      "87": {
        start: {
          line: 265,
          column: 6
        },
        end: {
          line: 267,
          column: 7
        }
      },
      "88": {
        start: {
          line: 266,
          column: 8
        },
        end: {
          line: 266,
          column: 15
        }
      },
      "89": {
        start: {
          line: 268,
          column: 6
        },
        end: {
          line: 268,
          column: 36
        }
      },
      "90": {
        start: {
          line: 269,
          column: 6
        },
        end: {
          line: 269,
          column: 32
        }
      },
      "91": {
        start: {
          line: 272,
          column: 6
        },
        end: {
          line: 275,
          column: 9
        }
      },
      "92": {
        start: {
          line: 278,
          column: 21
        },
        end: {
          line: 278,
          column: 50
        }
      },
      "93": {
        start: {
          line: 279,
          column: 6
        },
        end: {
          line: 279,
          column: 59
        }
      },
      "94": {
        start: {
          line: 282,
          column: 6
        },
        end: {
          line: 282,
          column: 70
        }
      },
      "95": {
        start: {
          line: 283,
          column: 6
        },
        end: {
          line: 283,
          column: 26
        }
      },
      "96": {
        start: {
          line: 286,
          column: 6
        },
        end: {
          line: 286,
          column: 35
        }
      },
      "97": {
        start: {
          line: 289,
          column: 6
        },
        end: {
          line: 325,
          column: 7
        }
      },
      "98": {
        start: {
          line: 290,
          column: 8
        },
        end: {
          line: 290,
          column: 49
        }
      },
      "99": {
        start: {
          line: 291,
          column: 13
        },
        end: {
          line: 325,
          column: 7
        }
      },
      "100": {
        start: {
          line: 292,
          column: 8
        },
        end: {
          line: 292,
          column: 83
        }
      },
      "101": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 296,
          column: 9
        }
      },
      "102": {
        start: {
          line: 295,
          column: 10
        },
        end: {
          line: 295,
          column: 17
        }
      },
      "103": {
        start: {
          line: 300,
          column: 8
        },
        end: {
          line: 300,
          column: 50
        }
      },
      "104": {
        start: {
          line: 302,
          column: 24
        },
        end: {
          line: 302,
          column: 62
        }
      },
      "105": {
        start: {
          line: 303,
          column: 23
        },
        end: {
          line: 303,
          column: 30
        }
      },
      "106": {
        start: {
          line: 304,
          column: 8
        },
        end: {
          line: 304,
          column: 31
        }
      },
      "107": {
        start: {
          line: 305,
          column: 8
        },
        end: {
          line: 324,
          column: 13
        }
      },
      "108": {
        start: {
          line: 308,
          column: 12
        },
        end: {
          line: 308,
          column: 65
        }
      },
      "109": {
        start: {
          line: 313,
          column: 12
        },
        end: {
          line: 318,
          column: 13
        }
      },
      "110": {
        start: {
          line: 315,
          column: 14
        },
        end: {
          line: 317,
          column: 17
        }
      },
      "111": {
        start: {
          line: 316,
          column: 16
        },
        end: {
          line: 316,
          column: 76
        }
      },
      "112": {
        start: {
          line: 320,
          column: 12
        },
        end: {
          line: 320,
          column: 36
        }
      },
      "113": {
        start: {
          line: 321,
          column: 12
        },
        end: {
          line: 323,
          column: 20
        }
      },
      "114": {
        start: {
          line: 322,
          column: 14
        },
        end: {
          line: 322,
          column: 39
        }
      },
      "115": {
        start: {
          line: 328,
          column: 6
        },
        end: {
          line: 328,
          column: 23
        }
      },
      "116": {
        start: {
          line: 329,
          column: 6
        },
        end: {
          line: 329,
          column: 63
        }
      },
      "117": {
        start: {
          line: 330,
          column: 6
        },
        end: {
          line: 332,
          column: 9
        }
      },
      "118": {
        start: {
          line: 331,
          column: 8
        },
        end: {
          line: 331,
          column: 51
        }
      },
      "119": {
        start: {
          line: 335,
          column: 20
        },
        end: {
          line: 335,
          column: 46
        }
      },
      "120": {
        start: {
          line: 336,
          column: 6
        },
        end: {
          line: 336,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        loc: {
          start: {
            line: 41,
            column: 25
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 41
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        loc: {
          start: {
            line: 44,
            column: 27
          },
          end: {
            line: 50,
            column: 5
          }
        },
        line: 44
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        loc: {
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 58,
            column: 5
          }
        },
        line: 51
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        loc: {
          start: {
            line: 59,
            column: 20
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 59
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        loc: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 64,
            column: 5
          }
        },
        line: 62
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 16
          },
          end: {
            line: 67,
            column: 5
          }
        },
        line: 65
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        },
        loc: {
          start: {
            line: 68,
            column: 18
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 68
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 5
          }
        },
        loc: {
          start: {
            line: 71,
            column: 21
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 71
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        loc: {
          start: {
            line: 74,
            column: 15
          },
          end: {
            line: 76,
            column: 5
          }
        },
        line: 74
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        },
        loc: {
          start: {
            line: 77,
            column: 22
          },
          end: {
            line: 80,
            column: 5
          }
        },
        line: 77
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 85,
            column: 7
          }
        },
        loc: {
          start: {
            line: 85,
            column: 29
          },
          end: {
            line: 90,
            column: 7
          }
        },
        line: 85
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 7
          }
        },
        loc: {
          start: {
            line: 94,
            column: 16
          },
          end: {
            line: 96,
            column: 7
          }
        },
        line: 94
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 12
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 99
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 102,
            column: 48
          },
          end: {
            line: 102,
            column: 49
          }
        },
        loc: {
          start: {
            line: 102,
            column: 59
          },
          end: {
            line: 104,
            column: 5
          }
        },
        line: 102
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 106,
            column: 40
          },
          end: {
            line: 106,
            column: 41
          }
        },
        loc: {
          start: {
            line: 106,
            column: 51
          },
          end: {
            line: 130,
            column: 5
          }
        },
        line: 106
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 108,
            column: 27
          },
          end: {
            line: 108,
            column: 28
          }
        },
        loc: {
          start: {
            line: 108,
            column: 38
          },
          end: {
            line: 127,
            column: 7
          }
        },
        line: 108
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 135,
            column: 63
          },
          end: {
            line: 135,
            column: 64
          }
        },
        loc: {
          start: {
            line: 135,
            column: 74
          },
          end: {
            line: 145,
            column: 5
          }
        },
        line: 135
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 147,
            column: 41
          },
          end: {
            line: 147,
            column: 42
          }
        },
        loc: {
          start: {
            line: 147,
            column: 52
          },
          end: {
            line: 149,
            column: 5
          }
        },
        line: 147
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 153,
            column: 54
          },
          end: {
            line: 153,
            column: 55
          }
        },
        loc: {
          start: {
            line: 153,
            column: 65
          },
          end: {
            line: 155,
            column: 5
          }
        },
        line: 153
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 156,
            column: 52
          },
          end: {
            line: 156,
            column: 53
          }
        },
        loc: {
          start: {
            line: 156,
            column: 63
          },
          end: {
            line: 158,
            column: 5
          }
        },
        line: 156
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        loc: {
          start: {
            line: 161,
            column: 23
          },
          end: {
            line: 163,
            column: 5
          }
        },
        line: 161
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        loc: {
          start: {
            line: 164,
            column: 33
          },
          end: {
            line: 170,
            column: 5
          }
        },
        line: 164
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 166,
            column: 27
          },
          end: {
            line: 166,
            column: 28
          }
        },
        loc: {
          start: {
            line: 166,
            column: 38
          },
          end: {
            line: 168,
            column: 7
          }
        },
        line: 166
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 5
          }
        },
        loc: {
          start: {
            line: 171,
            column: 26
          },
          end: {
            line: 179,
            column: 5
          }
        },
        line: 171
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 180,
            column: 5
          }
        },
        loc: {
          start: {
            line: 180,
            column: 28
          },
          end: {
            line: 185,
            column: 5
          }
        },
        line: 180
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        loc: {
          start: {
            line: 186,
            column: 32
          },
          end: {
            line: 194,
            column: 5
          }
        },
        line: 186
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 191,
            column: 17
          },
          end: {
            line: 191,
            column: 18
          }
        },
        loc: {
          start: {
            line: 191,
            column: 23
          },
          end: {
            line: 193,
            column: 7
          }
        },
        line: 191
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 195,
            column: 5
          }
        },
        loc: {
          start: {
            line: 195,
            column: 28
          },
          end: {
            line: 197,
            column: 5
          }
        },
        line: 195
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 198,
            column: 5
          }
        },
        loc: {
          start: {
            line: 198,
            column: 40
          },
          end: {
            line: 200,
            column: 5
          }
        },
        line: 198
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        loc: {
          start: {
            line: 201,
            column: 19
          },
          end: {
            line: 207,
            column: 5
          }
        },
        line: 201
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 5
          }
        },
        loc: {
          start: {
            line: 208,
            column: 16
          },
          end: {
            line: 218,
            column: 5
          }
        },
        line: 208
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 214,
            column: 14
          },
          end: {
            line: 214,
            column: 15
          }
        },
        loc: {
          start: {
            line: 214,
            column: 28
          },
          end: {
            line: 217,
            column: 9
          }
        },
        line: 214
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 220,
            column: 5
          }
        },
        loc: {
          start: {
            line: 220,
            column: 24
          },
          end: {
            line: 231,
            column: 5
          }
        },
        line: 220
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 227,
            column: 14
          },
          end: {
            line: 227,
            column: 15
          }
        },
        loc: {
          start: {
            line: 227,
            column: 28
          },
          end: {
            line: 230,
            column: 9
          }
        },
        line: 227
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        },
        loc: {
          start: {
            line: 232,
            column: 19
          },
          end: {
            line: 239,
            column: 5
          }
        },
        line: 232
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        },
        loc: {
          start: {
            line: 240,
            column: 19
          },
          end: {
            line: 242,
            column: 5
          }
        },
        line: 240
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        loc: {
          start: {
            line: 244,
            column: 11
          },
          end: {
            line: 246,
            column: 5
          }
        },
        line: 244
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        },
        loc: {
          start: {
            line: 247,
            column: 21
          },
          end: {
            line: 250,
            column: 5
          }
        },
        line: 247
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 251,
            column: 5
          }
        },
        loc: {
          start: {
            line: 251,
            column: 19
          },
          end: {
            line: 263,
            column: 5
          }
        },
        line: 251
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 257,
            column: 16
          },
          end: {
            line: 257,
            column: 17
          }
        },
        loc: {
          start: {
            line: 257,
            column: 30
          },
          end: {
            line: 261,
            column: 11
          }
        },
        line: 257
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        },
        loc: {
          start: {
            line: 264,
            column: 40
          },
          end: {
            line: 270,
            column: 5
          }
        },
        line: 264
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        loc: {
          start: {
            line: 271,
            column: 29
          },
          end: {
            line: 276,
            column: 5
          }
        },
        line: 271
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 277,
            column: 5
          }
        },
        loc: {
          start: {
            line: 277,
            column: 19
          },
          end: {
            line: 280,
            column: 5
          }
        },
        line: 277
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 281,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        },
        loc: {
          start: {
            line: 281,
            column: 18
          },
          end: {
            line: 284,
            column: 5
          }
        },
        line: 281
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 285,
            column: 4
          },
          end: {
            line: 285,
            column: 5
          }
        },
        loc: {
          start: {
            line: 285,
            column: 20
          },
          end: {
            line: 287,
            column: 5
          }
        },
        line: 285
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 288,
            column: 5
          }
        },
        loc: {
          start: {
            line: 288,
            column: 38
          },
          end: {
            line: 326,
            column: 5
          }
        },
        line: 288
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 307,
            column: 16
          },
          end: {
            line: 307,
            column: 17
          }
        },
        loc: {
          start: {
            line: 307,
            column: 22
          },
          end: {
            line: 309,
            column: 11
          }
        },
        line: 307
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 310,
            column: 17
          },
          end: {
            line: 310,
            column: 18
          }
        },
        loc: {
          start: {
            line: 310,
            column: 28
          },
          end: {
            line: 319,
            column: 11
          }
        },
        line: 310
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 315,
            column: 65
          },
          end: {
            line: 315,
            column: 66
          }
        },
        loc: {
          start: {
            line: 315,
            column: 83
          },
          end: {
            line: 317,
            column: 15
          }
        },
        line: 315
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 319,
            column: 21
          },
          end: {
            line: 319,
            column: 22
          }
        },
        loc: {
          start: {
            line: 319,
            column: 27
          },
          end: {
            line: 324,
            column: 11
          }
        },
        line: 319
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 321,
            column: 23
          },
          end: {
            line: 321,
            column: 24
          }
        },
        loc: {
          start: {
            line: 321,
            column: 29
          },
          end: {
            line: 323,
            column: 13
          }
        },
        line: 321
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 327,
            column: 4
          },
          end: {
            line: 327,
            column: 5
          }
        },
        loc: {
          start: {
            line: 327,
            column: 22
          },
          end: {
            line: 333,
            column: 5
          }
        },
        line: 327
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 330,
            column: 21
          },
          end: {
            line: 330,
            column: 22
          }
        },
        loc: {
          start: {
            line: 330,
            column: 27
          },
          end: {
            line: 332,
            column: 7
          }
        },
        line: 330
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 334,
            column: 4
          },
          end: {
            line: 334,
            column: 5
          }
        },
        loc: {
          start: {
            line: 334,
            column: 26
          },
          end: {
            line: 337,
            column: 5
          }
        },
        line: 334
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 48,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 48,
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
        line: 46
      },
      "1": {
        loc: {
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 46,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 46,
            column: 30
          }
        }, {
          start: {
            line: 46,
            column: 34
          },
          end: {
            line: 46,
            column: 61
          }
        }],
        line: 46
      },
      "2": {
        loc: {
          start: {
            line: 57,
            column: 13
          },
          end: {
            line: 57,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 13
          },
          end: {
            line: 57,
            column: 47
          }
        }, {
          start: {
            line: 57,
            column: 51
          },
          end: {
            line: 57,
            column: 53
          }
        }],
        line: 57
      },
      "3": {
        loc: {
          start: {
            line: 60,
            column: 13
          },
          end: {
            line: 60,
            column: 87
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 60,
            column: 13
          },
          end: {
            line: 60,
            column: 58
          }
        }, {
          start: {
            line: 60,
            column: 62
          },
          end: {
            line: 60,
            column: 87
          }
        }],
        line: 60
      },
      "4": {
        loc: {
          start: {
            line: 75,
            column: 13
          },
          end: {
            line: 75,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 75,
            column: 33
          },
          end: {
            line: 75,
            column: 63
          }
        }, {
          start: {
            line: 75,
            column: 66
          },
          end: {
            line: 75,
            column: 70
          }
        }],
        line: 75
      },
      "5": {
        loc: {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
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
        line: 87
      },
      "6": {
        loc: {
          start: {
            line: 87,
            column: 12
          },
          end: {
            line: 87,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 87,
            column: 12
          },
          end: {
            line: 87,
            column: 16
          }
        }, {
          start: {
            line: 87,
            column: 20
          },
          end: {
            line: 87,
            column: 27
          }
        }, {
          start: {
            line: 87,
            column: 31
          },
          end: {
            line: 87,
            column: 53
          }
        }],
        line: 87
      },
      "7": {
        loc: {
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 119,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 119,
            column: 9
          }
        }, {
          start: {
            line: 116,
            column: 15
          },
          end: {
            line: 119,
            column: 9
          }
        }],
        line: 113
      },
      "8": {
        loc: {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 124,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 124,
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
        line: 121
      },
      "9": {
        loc: {
          start: {
            line: 137,
            column: 8
          },
          end: {
            line: 142,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 8
          },
          end: {
            line: 142,
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
        line: 137
      },
      "10": {
        loc: {
          start: {
            line: 139,
            column: 10
          },
          end: {
            line: 141,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 139,
            column: 10
          },
          end: {
            line: 141,
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
        line: 139
      },
      "11": {
        loc: {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 184,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 184,
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
        line: 181
      },
      "12": {
        loc: {
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 190,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 190,
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
        line: 188
      },
      "13": {
        loc: {
          start: {
            line: 188,
            column: 10
          },
          end: {
            line: 188,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 188,
            column: 10
          },
          end: {
            line: 188,
            column: 29
          }
        }, {
          start: {
            line: 188,
            column: 33
          },
          end: {
            line: 188,
            column: 78
          }
        }],
        line: 188
      },
      "14": {
        loc: {
          start: {
            line: 198,
            column: 25
          },
          end: {
            line: 198,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 198,
            column: 33
          },
          end: {
            line: 198,
            column: 38
          }
        }],
        line: 198
      },
      "15": {
        loc: {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 205,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 205,
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
        line: 203
      },
      "16": {
        loc: {
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 203,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 203,
            column: 29
          }
        }, {
          start: {
            line: 203,
            column: 33
          },
          end: {
            line: 203,
            column: 78
          }
        }],
        line: 203
      },
      "17": {
        loc: {
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 262,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 262,
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
        line: 252
      },
      "18": {
        loc: {
          start: {
            line: 264,
            column: 17
          },
          end: {
            line: 264,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 264,
            column: 33
          },
          end: {
            line: 264,
            column: 38
          }
        }],
        line: 264
      },
      "19": {
        loc: {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 267,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 267,
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
        line: 265
      },
      "20": {
        loc: {
          start: {
            line: 265,
            column: 10
          },
          end: {
            line: 265,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 265,
            column: 10
          },
          end: {
            line: 265,
            column: 32
          }
        }, {
          start: {
            line: 265,
            column: 36
          },
          end: {
            line: 265,
            column: 50
          }
        }],
        line: 265
      },
      "21": {
        loc: {
          start: {
            line: 289,
            column: 6
          },
          end: {
            line: 325,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 289,
            column: 6
          },
          end: {
            line: 325,
            column: 7
          }
        }, {
          start: {
            line: 291,
            column: 13
          },
          end: {
            line: 325,
            column: 7
          }
        }],
        line: 289
      },
      "22": {
        loc: {
          start: {
            line: 291,
            column: 13
          },
          end: {
            line: 325,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 291,
            column: 13
          },
          end: {
            line: 325,
            column: 7
          }
        }, {
          start: {
            line: 293,
            column: 13
          },
          end: {
            line: 325,
            column: 7
          }
        }],
        line: 291
      },
      "23": {
        loc: {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 296,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 296,
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
        line: 294
      },
      "24": {
        loc: {
          start: {
            line: 313,
            column: 12
          },
          end: {
            line: 318,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 313,
            column: 12
          },
          end: {
            line: 318,
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
        line: 313
      },
      "25": {
        loc: {
          start: {
            line: 313,
            column: 16
          },
          end: {
            line: 313,
            column: 72
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 313,
            column: 16
          },
          end: {
            line: 313,
            column: 38
          }
        }, {
          start: {
            line: 313,
            column: 42
          },
          end: {
            line: 313,
            column: 72
          }
        }],
        line: 313
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
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0
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
      "53": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ae7baebe30fe8e4484f3153ae547fa5d1321ae32"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_282y5xe3eu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_282y5xe3eu();

// const store = new Vuex.Store();
var main = (cov_282y5xe3eu().s[0]++, new Vue({
  // store: store,
  el: "#task",
  mixins: addons,
  data: {
    // Edit data
    fieldsToUpdate: [],
    jsonData: "",
    monacoLargeOptions: {
      automaticLayout: true
    },
    showJSONEditor: false,
    windowParent: window.parent.ProcessMaker,
    // Reassignment
    selected: null,
    selectedIndex: -1,
    usersList: [],
    filter: "",
    showReassignment: false,
    task: task,
    userHasAccessToTask: userHasAccessToTask,
    statusCard: "card-header text-capitalize text-white bg-success",
    selectedUser: [],
    hasErrors: false,
    redirectInProcess: false,
    formData: {},
    submitting: false,
    userIsAdmin: userIsAdmin,
    userIsProcessManager: userIsProcessManager,
    is_loading: false,
    autoSaveDelay: 5000,
    userHasInteracted: false,
    initialFormDataSet: false,
    alwaysAllowEditing: window.location.search.includes("alwaysAllowEditing=1"),
    disableInterstitial: window.location.search.includes("disableInterstitial=1"),
    validateForm: true
  },
  computed: {
    screenFilteredData: function screenFilteredData() {
      cov_282y5xe3eu().f[0]++;
      cov_282y5xe3eu().s[1]++;
      return this.filterScreenFields(this.formData);
    },
    taskDefinitionConfig: function taskDefinitionConfig() {
      cov_282y5xe3eu().f[1]++;
      var config = (cov_282y5xe3eu().s[2]++, {});
      cov_282y5xe3eu().s[3]++;
      if ((cov_282y5xe3eu().b[1][0]++, this.task.definition) && (cov_282y5xe3eu().b[1][1]++, this.task.definition.config)) {
        cov_282y5xe3eu().b[0][0]++;
        cov_282y5xe3eu().s[4]++;
        return JSON.parse(this.task.definition.config);
      } else {
        cov_282y5xe3eu().b[0][1]++;
      }
      cov_282y5xe3eu().s[5]++;
      return {};
    },
    dueLabel: function dueLabel() {
      cov_282y5xe3eu().f[2]++;
      var dueLabels = (cov_282y5xe3eu().s[6]++, {
        open: "Due",
        completed: "Completed",
        overdue: "Due"
      });
      cov_282y5xe3eu().s[7]++;
      return (cov_282y5xe3eu().b[2][0]++, dueLabels[this.task.advanceStatus]) || (cov_282y5xe3eu().b[2][1]++, "");
    },
    isSelfService: function isSelfService() {
      cov_282y5xe3eu().f[3]++;
      cov_282y5xe3eu().s[8]++;
      return (cov_282y5xe3eu().b[3][0]++, this.task.process_request.status === "ACTIVE") && (cov_282y5xe3eu().b[3][1]++, this.task.is_self_service);
    },
    dateDueAt: function dateDueAt() {
      cov_282y5xe3eu().f[4]++;
      cov_282y5xe3eu().s[9]++;
      return this.task.due_at;
    },
    createdAt: function createdAt() {
      cov_282y5xe3eu().f[5]++;
      cov_282y5xe3eu().s[10]++;
      return this.task.created_at;
    },
    completedAt: function completedAt() {
      cov_282y5xe3eu().f[6]++;
      cov_282y5xe3eu().s[11]++;
      return this.task.completed_at;
    },
    showDueAtDates: function showDueAtDates() {
      cov_282y5xe3eu().f[7]++;
      cov_282y5xe3eu().s[12]++;
      return this.task.status !== "CLOSED";
    },
    disabled: function disabled() {
      cov_282y5xe3eu().f[8]++;
      cov_282y5xe3eu().s[13]++;
      return this.selectedUser ? (cov_282y5xe3eu().b[4][0]++, this.selectedUser.length === 0) : (cov_282y5xe3eu().b[4][1]++, true);
    },
    styleDataMonaco: function styleDataMonaco() {
      cov_282y5xe3eu().f[9]++;
      var height = (cov_282y5xe3eu().s[14]++, window.innerHeight * 0.55);
      cov_282y5xe3eu().s[15]++;
      return "height: ".concat(height, "px; border:1px solid gray;");
    }
  },
  watch: {
    task: {
      deep: true,
      handler: function handler(task, oldTask) {
        cov_282y5xe3eu().f[10]++;
        cov_282y5xe3eu().s[16]++;
        window.ProcessMaker.breadcrumbs.taskTitle = task.element_name;
        cov_282y5xe3eu().s[17]++;
        if ((cov_282y5xe3eu().b[6][0]++, task) && (cov_282y5xe3eu().b[6][1]++, oldTask) && (cov_282y5xe3eu().b[6][2]++, task.id !== oldTask.id)) {
          cov_282y5xe3eu().b[5][0]++;
          cov_282y5xe3eu().s[18]++;
          history.replaceState(null, null, "/tasks/".concat(task.id, "/edit/preview"));
        } else {
          cov_282y5xe3eu().b[5][1]++;
        }
      }
    },
    screenFilteredData: {
      deep: true,
      handler: function handler() {
        cov_282y5xe3eu().f[11]++;
        cov_282y5xe3eu().s[19]++;
        this.sendEvent("dataUpdated", this.screenFilteredData);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    cov_282y5xe3eu().f[12]++;
    cov_282y5xe3eu().s[20]++;
    this.prepareData();
    cov_282y5xe3eu().s[21]++;
    window.addEventListener("sendValidateForm", function (event) {
      cov_282y5xe3eu().f[13]++;
      cov_282y5xe3eu().s[22]++;
      _this.validateForm = event.detail;
    });
    cov_282y5xe3eu().s[23]++;
    window.addEventListener("fillData", function (event) {
      cov_282y5xe3eu().f[14]++;
      var newData = (cov_282y5xe3eu().s[24]++, {});
      cov_282y5xe3eu().s[25]++;
      screenFields.forEach(function (field) {
        cov_282y5xe3eu().f[15]++;
        var existingValue = (cov_282y5xe3eu().s[26]++, _.get(_this.formData, field, null));
        var quickFillValue;
        cov_282y5xe3eu().s[27]++;
        if (existingValue) {
          cov_282y5xe3eu().b[7][0]++;
          cov_282y5xe3eu().s[28]++;
          // If the value exists in the task data, don't overwrite it
          quickFillValue = existingValue;
        } else {
          cov_282y5xe3eu().b[7][1]++;
          cov_282y5xe3eu().s[29]++;
          // use the value from the quick fill(event.detail)
          quickFillValue = _.get(event.detail, field, null);
        }
        cov_282y5xe3eu().s[30]++;
        if (_this.validateBase64(quickFillValue)) {
          cov_282y5xe3eu().b[8][0]++;
          cov_282y5xe3eu().s[31]++;
          _.set(newData, field, existingValue);
          cov_282y5xe3eu().s[32]++;
          return;
        } else {
          cov_282y5xe3eu().b[8][1]++;
        }
        // Set the value. This handles nested values using dot notation in 'field' string
        cov_282y5xe3eu().s[33]++;
        _.set(newData, field, quickFillValue);
      });
      cov_282y5xe3eu().s[34]++;
      _this.formData = newData;
    });

    // Used by inbox rules new/edit interface. With inbox rules, we always
    // want to use all data saved in the inbox rule db record, regardless
    // if the field exists or not.
    cov_282y5xe3eu().s[35]++;
    window.addEventListener("fillDataOverwriteExistingFields", function (event) {
      cov_282y5xe3eu().f[16]++;
      cov_282y5xe3eu().s[36]++;
      for (var key in event.detail) {
        cov_282y5xe3eu().s[37]++;
        if (event.detail.hasOwnProperty(key)) {
          cov_282y5xe3eu().b[9][0]++;
          var value = (cov_282y5xe3eu().s[38]++, event.detail[key]);
          cov_282y5xe3eu().s[39]++;
          if (_this.validateBase64(value)) {
            cov_282y5xe3eu().b[10][0]++;
            cov_282y5xe3eu().s[40]++;
            delete event.detail[key];
          } else {
            cov_282y5xe3eu().b[10][1]++;
          }
        } else {
          cov_282y5xe3eu().b[9][1]++;
        }
      }
      cov_282y5xe3eu().s[41]++;
      _this.formData = _.merge(_.cloneDeep(_this.formData), event.detail);
    });
    cov_282y5xe3eu().s[42]++;
    window.addEventListener("eraseData", function (event) {
      cov_282y5xe3eu().f[17]++;
      cov_282y5xe3eu().s[43]++;
      _this.formData = {};
    });

    // listen for keydown on element with id interactionListener
    var interactionListener = (cov_282y5xe3eu().s[44]++, document.getElementById("interactionListener"));
    cov_282y5xe3eu().s[45]++;
    interactionListener.addEventListener("mousedown", function (event) {
      cov_282y5xe3eu().f[18]++;
      cov_282y5xe3eu().s[46]++;
      _this.sendUserHasInteracted();
    });
    cov_282y5xe3eu().s[47]++;
    interactionListener.addEventListener("keydown", function (event) {
      cov_282y5xe3eu().f[19]++;
      cov_282y5xe3eu().s[48]++;
      _this.sendUserHasInteracted();
    });
  },
  methods: {
    afterSubmit: function afterSubmit(event) {
      cov_282y5xe3eu().f[20]++;
      cov_282y5xe3eu().s[49]++;
      event.validation = this.validateForm;
    },
    filterScreenFields: function filterScreenFields(taskData) {
      cov_282y5xe3eu().f[21]++;
      var filteredData = (cov_282y5xe3eu().s[50]++, {});
      cov_282y5xe3eu().s[51]++;
      screenFields.forEach(function (field) {
        cov_282y5xe3eu().f[22]++;
        cov_282y5xe3eu().s[52]++;
        _.set(filteredData, field, _.get(taskData, field, null));
      });
      cov_282y5xe3eu().s[53]++;
      return filteredData;
    },
    sendEvent: function sendEvent(name, data) {
      cov_282y5xe3eu().f[23]++;
      var event = (cov_282y5xe3eu().s[54]++, new CustomEvent(name, {
        detail: {
          event_parent_id: Number(window.frameElement.getAttribute("event-parent-id")),
          data: data
        }
      }));
      cov_282y5xe3eu().s[55]++;
      window.parent.dispatchEvent(event);
    },
    sendUserHasInteracted: function sendUserHasInteracted() {
      cov_282y5xe3eu().f[24]++;
      cov_282y5xe3eu().s[56]++;
      if (!this.userHasInteracted) {
        cov_282y5xe3eu().b[11][0]++;
        cov_282y5xe3eu().s[57]++;
        this.userHasInteracted = true;
        cov_282y5xe3eu().s[58]++;
        this.sendEvent("userHasInteracted", true);
      } else {
        cov_282y5xe3eu().b[11][1]++;
      }
    },
    completed: function completed(processRequestId) {
      cov_282y5xe3eu().f[25]++;
      cov_282y5xe3eu().s[59]++;
      // avoid redirection if using a customized renderer
      if ((cov_282y5xe3eu().b[13][0]++, this.task.component) && (cov_282y5xe3eu().b[13][1]++, this.task.component === "AdvancedScreenFrame")) {
        cov_282y5xe3eu().b[12][0]++;
        cov_282y5xe3eu().s[60]++;
        return;
      } else {
        cov_282y5xe3eu().b[12][1]++;
      }
      cov_282y5xe3eu().s[61]++;
      setTimeout(function () {
        cov_282y5xe3eu().f[26]++;
        cov_282y5xe3eu().s[62]++;
        parent.location.reload();
      }, 200);
    },
    error: function error(processRequestId) {
      cov_282y5xe3eu().f[27]++;
      cov_282y5xe3eu().s[63]++;
      this.$refs.task.showSimpleErrorMessage();
    },
    redirectToTask: function redirectToTask(task) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_282y5xe3eu().b[14][0]++, false);
      cov_282y5xe3eu().f[28]++;
      cov_282y5xe3eu().s[64]++;
      this.redirect("/tasks/".concat(task, "/edit/preview"), force);
    },
    closed: function closed(taskId) {
      cov_282y5xe3eu().f[29]++;
      cov_282y5xe3eu().s[65]++;
      // avoid redirection if using a customized renderer
      if ((cov_282y5xe3eu().b[16][0]++, this.task.component) && (cov_282y5xe3eu().b[16][1]++, this.task.component === "AdvancedScreenFrame")) {
        cov_282y5xe3eu().b[15][0]++;
        cov_282y5xe3eu().s[66]++;
        return;
      } else {
        cov_282y5xe3eu().b[15][1]++;
      }
      cov_282y5xe3eu().s[67]++;
      this.redirect("/tasks");
    },
    claimTask: function claimTask() {
      var _this2 = this;
      cov_282y5xe3eu().f[30]++;
      cov_282y5xe3eu().s[68]++;
      ProcessMaker.apiClient.put("tasks/".concat(this.task.id), {
        user_id: window.ProcessMaker.user.id,
        is_self_service: 0
      }).then(function (response) {
        cov_282y5xe3eu().f[31]++;
        cov_282y5xe3eu().s[69]++;
        _this2.windowParent.alert(_this2.$t("The task was successfully claimed"), "primary", 5, true);
        cov_282y5xe3eu().s[70]++;
        parent.location.reload();
      });
    },
    // Data editor
    updateRequestData: function updateRequestData() {
      var _this3 = this;
      cov_282y5xe3eu().f[32]++;
      var data = (cov_282y5xe3eu().s[71]++, JSON.parse(this.jsonData));
      cov_282y5xe3eu().s[72]++;
      ProcessMaker.apiClient.put("requests/".concat(this.task.process_request_id), {
        data: data,
        task_element_id: this.task.element_id
      }).then(function (response) {
        cov_282y5xe3eu().f[33]++;
        cov_282y5xe3eu().s[73]++;
        _this3.fieldsToUpdate.splice(0);
        cov_282y5xe3eu().s[74]++;
        _this3.windowParent.alert(_this3.$t("The request data was saved."), "success");
      });
    },
    saveJsonData: function saveJsonData() {
      cov_282y5xe3eu().f[34]++;
      cov_282y5xe3eu().s[75]++;
      try {
        var value = (cov_282y5xe3eu().s[76]++, JSON.parse(this.jsonData));
        cov_282y5xe3eu().s[77]++;
        this.updateRequestData();
      } catch (e) {
        // Invalid data
      }
    },
    editJsonData: function editJsonData() {
      cov_282y5xe3eu().f[35]++;
      cov_282y5xe3eu().s[78]++;
      this.jsonData = JSON.stringify(this.task.request_data, null, 4);
    },
    // Reassign methods
    show: function show() {
      cov_282y5xe3eu().f[36]++;
      cov_282y5xe3eu().s[79]++;
      this.showReassignment = true;
    },
    cancelReassign: function cancelReassign() {
      cov_282y5xe3eu().f[37]++;
      cov_282y5xe3eu().s[80]++;
      this.showReassignment = false;
      cov_282y5xe3eu().s[81]++;
      this.selectedUser = [];
    },
    reassignUser: function reassignUser() {
      var _this4 = this;
      cov_282y5xe3eu().f[38]++;
      cov_282y5xe3eu().s[82]++;
      if (this.selectedUser) {
        cov_282y5xe3eu().b[17][0]++;
        cov_282y5xe3eu().s[83]++;
        ProcessMaker.apiClient.put("tasks/".concat(this.task.id), {
          user_id: this.selectedUser.id
        }).then(function (response) {
          cov_282y5xe3eu().f[39]++;
          cov_282y5xe3eu().s[84]++;
          _this4.showReassignment = false;
          cov_282y5xe3eu().s[85]++;
          _this4.selectedUser = [];
          cov_282y5xe3eu().s[86]++;
          _this4.redirect("/tasks");
        });
      } else {
        cov_282y5xe3eu().b[17][1]++;
      }
    },
    redirect: function redirect(to) {
      var forceRedirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_282y5xe3eu().b[18][0]++, false);
      cov_282y5xe3eu().f[40]++;
      cov_282y5xe3eu().s[87]++;
      if ((cov_282y5xe3eu().b[20][0]++, this.redirectInProcess) && (cov_282y5xe3eu().b[20][1]++, !forceRedirect)) {
        cov_282y5xe3eu().b[19][0]++;
        cov_282y5xe3eu().s[88]++;
        return;
      } else {
        cov_282y5xe3eu().b[19][1]++;
      }
      cov_282y5xe3eu().s[89]++;
      this.redirectInProcess = true;
      cov_282y5xe3eu().s[90]++;
      window.location.href = to;
    },
    assignedUserAvatar: function assignedUserAvatar(user) {
      cov_282y5xe3eu().f[41]++;
      cov_282y5xe3eu().s[91]++;
      return [{
        src: user.avatar,
        name: user.fullname
      }];
    },
    resizeMonaco: function resizeMonaco() {
      cov_282y5xe3eu().f[42]++;
      var editor = (cov_282y5xe3eu().s[92]++, this.$refs.monaco.getMonaco());
      cov_282y5xe3eu().s[93]++;
      editor.layout({
        height: window.innerHeight * 0.65
      });
    },
    prepareData: function prepareData() {
      cov_282y5xe3eu().f[43]++;
      cov_282y5xe3eu().s[94]++;
      this.updateRequestData = debounce(this.updateRequestData, 1000);
      cov_282y5xe3eu().s[95]++;
      this.editJsonData();
    },
    updateTask: function updateTask(val) {
      cov_282y5xe3eu().f[44]++;
      cov_282y5xe3eu().s[96]++;
      this.$set(this, "task", val);
    },
    submit: function submit(task, loading, buttonInfo) {
      var _this5 = this;
      cov_282y5xe3eu().f[45]++;
      cov_282y5xe3eu().s[97]++;
      if (window.location.search.includes("dispatchSubmit=1")) {
        cov_282y5xe3eu().b[21][0]++;
        cov_282y5xe3eu().s[98]++;
        this.sendEvent("formSubmit", buttonInfo);
      } else {
        cov_282y5xe3eu().b[21][1]++;
        cov_282y5xe3eu().s[99]++;
        if (this.isSelfService) {
          cov_282y5xe3eu().b[22][0]++;
          cov_282y5xe3eu().s[100]++;
          this.windowParent.alert(this.$t("Claim the Task to continue."), "warning");
        } else {
          cov_282y5xe3eu().b[22][1]++;
          cov_282y5xe3eu().s[101]++;
          if (this.submitting) {
            cov_282y5xe3eu().b[23][0]++;
            cov_282y5xe3eu().s[102]++;
            return;
          } else {
            cov_282y5xe3eu().b[23][1]++;
          }

          // Save collection data
          // This code is copied from tasks/edit.js, we should improve it
          cov_282y5xe3eu().s[103]++;
          (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.submitCollectionData)(task, this.formData);
          var message = (cov_282y5xe3eu().s[104]++, this.$t("Task Completed Successfully"));
          var taskId = (cov_282y5xe3eu().s[105]++, task.id);
          cov_282y5xe3eu().s[106]++;
          this.submitting = true;
          cov_282y5xe3eu().s[107]++;
          ProcessMaker.apiClient.put("tasks/".concat(taskId), {
            status: "COMPLETED",
            data: this.formData
          }).then(function () {
            cov_282y5xe3eu().f[46]++;
            cov_282y5xe3eu().s[108]++;
            _this5.windowParent.alert(message, "success", 5, true);
          })["catch"](function (error) {
            var _error$response, _error$response2;
            cov_282y5xe3eu().f[47]++;
            cov_282y5xe3eu().s[109]++;
            // If there are errors, the user will be redirected to the request page
            // to view error details. This is done in loadTask in Task.vue
            if ((cov_282y5xe3eu().b[25][0]++, (_error$response = error.response) !== null && _error$response !== void 0 && _error$response.status) && (cov_282y5xe3eu().b[25][1]++, ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 422)) {
              cov_282y5xe3eu().b[24][0]++;
              cov_282y5xe3eu().s[110]++;
              // Validation error
              Object.entries(error.response.data.errors).forEach(function (_ref) {
                var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                cov_282y5xe3eu().f[48]++;
                cov_282y5xe3eu().s[111]++;
                _this5.windowParent.alert("".concat(key, ": ").concat(value[0]), "danger", 0);
              });
            } else {
              cov_282y5xe3eu().b[24][1]++;
            }
          })["finally"](function () {
            cov_282y5xe3eu().f[49]++;
            cov_282y5xe3eu().s[112]++;
            _this5.submitting = false;
            cov_282y5xe3eu().s[113]++;
            setTimeout(function () {
              cov_282y5xe3eu().f[50]++;
              cov_282y5xe3eu().s[114]++;
              parent.location.reload();
            }, 200);
          });
        }
      }
    },
    taskUpdated: function taskUpdated(task) {
      var _this6 = this;
      cov_282y5xe3eu().f[51]++;
      cov_282y5xe3eu().s[115]++;
      this.task = task;
      cov_282y5xe3eu().s[116]++;
      this.formData = _.cloneDeep(this.$refs.task.requestData);
      cov_282y5xe3eu().s[117]++;
      this.$nextTick(function () {
        var _this6$task;
        cov_282y5xe3eu().f[52]++;
        cov_282y5xe3eu().s[118]++;
        _this6.sendEvent("taskReady", (_this6$task = _this6.task) === null || _this6$task === void 0 ? void 0 : _this6$task.id);
      });
    },
    validateBase64: function validateBase64(field) {
      cov_282y5xe3eu().f[53]++;
      var regex = (cov_282y5xe3eu().s[119]++, /^data:image\/\w+;base64,/);
      cov_282y5xe3eu().s[120]++;
      return regex.test(field);
    }
  }
}));

/***/ }),

/***/ "./resources/js/tasks/utils/index.js":
/*!*******************************************!*\
  !*** ./resources/js/tasks/utils/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCollectionDataFromTask": () => (/* binding */ getCollectionDataFromTask),
/* harmony export */   "isMustache": () => (/* binding */ isMustache),
/* harmony export */   "submitCollectionData": () => (/* binding */ submitCollectionData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables/index */ "./resources/js/tasks/variables/index.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/index */ "./resources/js/tasks/api/index.js");

function cov_1ixt83qgz4() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/tasks/utils/index.js";
  var hash = "47db371aab7fa7957b056cc607f24df35dc69933";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/tasks/utils/index.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 6,
          column: 63
        }
      },
      "1": {
        start: {
          line: 6,
          column: 38
        },
        end: {
          line: 6,
          column: 63
        }
      },
      "2": {
        start: {
          line: 9,
          column: 41
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "3": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 20
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 47,
          column: 3
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      "6": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 45,
          column: 7
        }
      },
      "7": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 44,
          column: 9
        }
      },
      "8": {
        start: {
          line: 20,
          column: 10
        },
        end: {
          line: 43,
          column: 11
        }
      },
      "9": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 42,
          column: 13
        }
      },
      "10": {
        start: {
          line: 24,
          column: 33
        },
        end: {
          line: 24,
          column: 37
        }
      },
      "11": {
        start: {
          line: 27,
          column: 39
        },
        end: {
          line: 27,
          column: 64
        }
      },
      "12": {
        start: {
          line: 28,
          column: 46
        },
        end: {
          line: 28,
          column: 89
        }
      },
      "13": {
        start: {
          line: 29,
          column: 29
        },
        end: {
          line: 29,
          column: 31
        }
      },
      "14": {
        start: {
          line: 30,
          column: 33
        },
        end: {
          line: 30,
          column: 39
        }
      },
      "15": {
        start: {
          line: 32,
          column: 14
        },
        end: {
          line: 36,
          column: 15
        }
      },
      "16": {
        start: {
          line: 33,
          column: 16
        },
        end: {
          line: 33,
          column: 61
        }
      },
      "17": {
        start: {
          line: 35,
          column: 16
        },
        end: {
          line: 35,
          column: 48
        }
      },
      "18": {
        start: {
          line: 37,
          column: 39
        },
        end: {
          line: 37,
          column: 56
        }
      },
      "19": {
        start: {
          line: 39,
          column: 14
        },
        end: {
          line: 41,
          column: 17
        }
      },
      "20": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 45
        }
      },
      "21": {
        start: {
          line: 52,
          column: 36
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "22": {
        start: {
          line: 54,
          column: 36
        },
        end: {
          line: 54,
          column: 77
        }
      },
      "23": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "24": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 74,
          column: 7
        }
      },
      "25": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 73,
          column: 7
        }
      },
      "26": {
        start: {
          line: 59,
          column: 31
        },
        end: {
          line: 59,
          column: 67
        }
      },
      "27": {
        start: {
          line: 60,
          column: 29
        },
        end: {
          line: 60,
          column: 82
        }
      },
      "28": {
        start: {
          line: 61,
          column: 32
        },
        end: {
          line: 61,
          column: 62
        }
      },
      "29": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 72,
          column: 11
        }
      },
      "30": {
        start: {
          line: 71,
          column: 10
        },
        end: {
          line: 71,
          column: 75
        }
      },
      "31": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 76,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 26
          },
          end: {
            line: 6,
            column: 27
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 6,
            column: 63
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 9,
            column: 42
          }
        },
        loc: {
          start: {
            line: 9,
            column: 61
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 36
          },
          end: {
            line: 52,
            column: 37
          }
        },
        loc: {
          start: {
            line: 52,
            column: 62
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 52
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 38
          },
          end: {
            line: 57,
            column: 39
          }
        },
        loc: {
          start: {
            line: 57,
            column: 56
          },
          end: {
            line: 74,
            column: 5
          }
        },
        line: 57
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 70,
            column: 16
          },
          end: {
            line: 70,
            column: 17
          }
        },
        loc: {
          start: {
            line: 70,
            column: 22
          },
          end: {
            line: 72,
            column: 9
          }
        },
        line: 70
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 47,
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
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 46,
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
        line: 14
      },
      "2": {
        loc: {
          start: {
            line: 14,
            column: 8
          },
          end: {
            line: 14,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 8
          },
          end: {
            line: 14,
            column: 41
          }
        }, {
          start: {
            line: 14,
            column: 45
          },
          end: {
            line: 14,
            column: 74
          }
        }],
        line: 14
      },
      "3": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 44,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 44,
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
        line: 18
      },
      "4": {
        loc: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 42,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 42,
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
        line: 22
      },
      "5": {
        loc: {
          start: {
            line: 32,
            column: 14
          },
          end: {
            line: 36,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 14
          },
          end: {
            line: 36,
            column: 15
          }
        }, {
          start: {
            line: 34,
            column: 21
          },
          end: {
            line: 36,
            column: 15
          }
        }],
        line: 32
      },
      "6": {
        loc: {
          start: {
            line: 48,
            column: 9
          },
          end: {
            line: 48,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 48,
            column: 30
          },
          end: {
            line: 48,
            column: 37
          }
        }, {
          start: {
            line: 48,
            column: 40
          },
          end: {
            line: 48,
            column: 44
          }
        }],
        line: 48
      },
      "7": {
        loc: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 75,
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
        line: 56
      },
      "8": {
        loc: {
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 56,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 56,
            column: 31
          }
        }, {
          start: {
            line: 56,
            column: 35
          },
          end: {
            line: 56,
            column: 71
          }
        }],
        line: 56
      },
      "9": {
        loc: {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 73,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 73,
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
        line: 58
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
      "31": 0
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
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "47db371aab7fa7957b056cc607f24df35dc69933"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ixt83qgz4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ixt83qgz4();

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});
cov_1ixt83qgz4().s[0]++;
var isMustache = function isMustache(record) {
  cov_1ixt83qgz4().f[0]++;
  cov_1ixt83qgz4().s[1]++;
  return /\{\{.*\}\}/.test(record);
};

// Get data in FormCollectionRecordControl components
cov_1ixt83qgz4().s[2]++;
var getCollectionDataFromTask = function getCollectionDataFromTask(task, formData) {
  cov_1ixt83qgz4().f[1]++;
  var results = (cov_1ixt83qgz4().s[3]++, []);
  // Verify if object "screen" exists
  cov_1ixt83qgz4().s[4]++;
  if (task.screen) {
    cov_1ixt83qgz4().b[0][0]++;
    cov_1ixt83qgz4().s[5]++;
    // Verify if "config" array exists and it has at least one element
    if ((cov_1ixt83qgz4().b[2][0]++, Array.isArray(task.screen.config)) && (cov_1ixt83qgz4().b[2][1]++, task.screen.config.length > 0)) {
      cov_1ixt83qgz4().b[1][0]++;
      cov_1ixt83qgz4().s[6]++;
      // Iteration on "config" array
      var _iterator = _createForOfIteratorHelper(task.screen.config),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var configItem = _step.value;
          cov_1ixt83qgz4().s[7]++;
          // Verify if "items" array exists
          if (Array.isArray(configItem.items)) {
            cov_1ixt83qgz4().b[3][0]++;
            cov_1ixt83qgz4().s[8]++;
            // Iteration over each "items" element
            var _iterator2 = _createForOfIteratorHelper(configItem.items),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                cov_1ixt83qgz4().s[9]++;
                // Verify if component "FormCollectionRecordControl" is inside the screen
                if (item.component === "FormCollectionRecordControl") {
                  cov_1ixt83qgz4().b[4][0]++;
                  // Access to FormCollectionRecordControl "config" object
                  var _ref = (cov_1ixt83qgz4().s[10]++, item),
                    config = _ref.config;

                  // Saving values into variables
                  var collectionFields = (cov_1ixt83qgz4().s[11]++, config.collection.data[0]);
                  var submitCollectionChecked = (cov_1ixt83qgz4().s[12]++, config.collectionmode.submitCollectionCheck);
                  var recordId = (cov_1ixt83qgz4().s[13]++, "");
                  var _ref2 = (cov_1ixt83qgz4().s[14]++, config),
                    record = _ref2.record;
                  cov_1ixt83qgz4().s[15]++;
                  if (isMustache(record)) {
                    cov_1ixt83qgz4().b[5][0]++;
                    cov_1ixt83qgz4().s[16]++;
                    recordId = _variables_index__WEBPACK_IMPORTED_MODULE_2__.Mustache.render(record, formData);
                  } else {
                    cov_1ixt83qgz4().b[5][1]++;
                    cov_1ixt83qgz4().s[17]++;
                    recordId = parseInt(record, 10);
                  }
                  var _ref3 = (cov_1ixt83qgz4().s[18]++, config.collection),
                    collectionId = _ref3.collectionId;
                  // Save the values into the results array
                  cov_1ixt83qgz4().s[19]++;
                  results.push({
                    submitCollectionChecked: submitCollectionChecked,
                    recordId: recordId,
                    collectionId: collectionId,
                    collectionFields: collectionFields
                  });
                } else {
                  cov_1ixt83qgz4().b[4][1]++;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            cov_1ixt83qgz4().b[3][1]++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      cov_1ixt83qgz4().b[1][1]++;
    }
  } else {
    cov_1ixt83qgz4().b[0][1]++;
  }
  cov_1ixt83qgz4().s[20]++;
  return results.length > 0 ? (cov_1ixt83qgz4().b[6][0]++, results) : (cov_1ixt83qgz4().b[6][1]++, null);
};

// Submit collection data
cov_1ixt83qgz4().s[21]++;
var submitCollectionData = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(task, formData) {
    var resultCollectionComponent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_1ixt83qgz4().f[2]++;
          // If screen has CollectionControl components saves collection data (if submit check is true)
          resultCollectionComponent = (cov_1ixt83qgz4().s[22]++, getCollectionDataFromTask(task, formData));
          cov_1ixt83qgz4().s[23]++;
          if ((cov_1ixt83qgz4().b[8][0]++, resultCollectionComponent) && (cov_1ixt83qgz4().b[8][1]++, resultCollectionComponent.length > 0)) {
            cov_1ixt83qgz4().b[7][0]++;
            cov_1ixt83qgz4().s[24]++;
            resultCollectionComponent.forEach(/*#__PURE__*/function () {
              var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(result) {
                var collectionKeys, matchingKeys, collectionsData;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      cov_1ixt83qgz4().f[3]++;
                      cov_1ixt83qgz4().s[25]++;
                      if (result.submitCollectionChecked) {
                        cov_1ixt83qgz4().b[9][0]++;
                        collectionKeys = (cov_1ixt83qgz4().s[26]++, Object.keys(result.collectionFields));
                        matchingKeys = (cov_1ixt83qgz4().s[27]++, _.intersection(Object.keys(formData), collectionKeys));
                        collectionsData = (cov_1ixt83qgz4().s[28]++, _.pick(formData, matchingKeys));
                        cov_1ixt83qgz4().s[29]++;
                        (0,_api_index__WEBPACK_IMPORTED_MODULE_3__.updateCollection)({
                          collectionId: result.collectionId,
                          recordId: result.recordId,
                          data: {
                            data: collectionsData,
                            uploads: []
                          }
                        }).then(function () {
                          cov_1ixt83qgz4().f[4]++;
                          cov_1ixt83qgz4().s[30]++;
                          (0,_variables_index__WEBPACK_IMPORTED_MODULE_2__.alert)(_variables_index__WEBPACK_IMPORTED_MODULE_2__.i18n.t("Collection data was updated"), "success", 5, true);
                        });
                      } else {
                        cov_1ixt83qgz4().b[9][1]++;
                      }
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x3) {
                return _ref5.apply(this, arguments);
              };
            }());
          } else {
            cov_1ixt83qgz4().b[7][1]++;
          }
          cov_1ixt83qgz4().s[31]++;
          return _context2.abrupt("return", null);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function submitCollectionData(_x, _x2) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/js/tasks/variables/index.js":
/*!***********************************************!*\
  !*** ./resources/js/tasks/variables/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mustache": () => (/* binding */ Mustache),
/* harmony export */   "alert": () => (/* binding */ alert),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getApi": () => (/* binding */ getApi),
/* harmony export */   "i18n": () => (/* binding */ i18n)
/* harmony export */ });
var _window$ProcessMaker2, _window$ProcessMaker3;
function cov_18akhxzr3j() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/tasks/variables/index.js";
  var hash = "94b0b2bf493540091375b87c9776ce988edb1500";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/tasks/variables/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 58
        }
      },
      "1": {
        start: {
          line: 3,
          column: 28
        },
        end: {
          line: 3,
          column: 58
        }
      },
      "2": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 45
        }
      },
      "3": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 7,
          column: 47
        }
      },
      "4": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 22
          },
          end: {
            line: 3,
            column: 23
          }
        },
        loc: {
          start: {
            line: 3,
            column: 28
          },
          end: {
            line: 3,
            column: 58
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 39
          }
        }, {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 9,
            column: 45
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "94b0b2bf493540091375b87c9776ce988edb1500"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18akhxzr3j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18akhxzr3j();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});
cov_18akhxzr3j().s[0]++;
var getApi = function getApi() {
  var _window$ProcessMaker;
  cov_18akhxzr3j().f[0]++;
  cov_18akhxzr3j().s[1]++;
  return (_window$ProcessMaker = window.ProcessMaker) === null || _window$ProcessMaker === void 0 ? void 0 : _window$ProcessMaker.apiClient;
};
var i18n = (cov_18akhxzr3j().s[2]++, (_window$ProcessMaker2 = window.ProcessMaker) === null || _window$ProcessMaker2 === void 0 ? void 0 : _window$ProcessMaker2.i18n);
var alert = (cov_18akhxzr3j().s[3]++, (_window$ProcessMaker3 = window.ProcessMaker) === null || _window$ProcessMaker3 === void 0 ? void 0 : _window$ProcessMaker3.alert);
var Mustache = (cov_18akhxzr3j().s[4]++, (cov_18akhxzr3j().b[0][0]++, window.Mustache) || (cov_18akhxzr3j().b[0][1]++, {}));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/tasks/preview.js"));
/******/ }
]);