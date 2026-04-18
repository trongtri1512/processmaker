(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["/js/admin/tenant-queues/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "JobDetails",
  props: {
    tenantId: {
      type: String,
      required: true
    },
    jobId: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      job: null,
      loading: true,
      error: null
    };
  },
  mounted: function mounted() {
    this.loadJobDetails();
  },
  methods: {
    loadJobDetails: function loadJobDetails() {
      var _this = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var _yield$ProcessMaker$a, data, _error$response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _this.error = null;
              _context.prev = 2;
              _context.next = 5;
              return ProcessMaker.apiClient.get("/tenant-queues/".concat(_this.tenantId, "/jobs/").concat(_this.jobId));
            case 5:
              _yield$ProcessMaker$a = _context.sent;
              data = _yield$ProcessMaker$a.data;
              _this.job = data;
              _context.next = 14;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.error("Error loading job details:", _context.t0);
              _this.error = ((_error$response = _context.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _context.t0.message || "Failed to load job details";
            case 14:
              _context.prev = 14;
              _this.loading = false;
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 10, 14, 17]]);
      }))();
    },
    getStatusVariant: function getStatusVariant(status) {
      var variants = {
        pending: "warning",
        completed: "success",
        failed: "danger",
        exception: "secondary"
      };
      return variants[status] || "light";
    },
    getStatusText: function getStatusText(status) {
      var texts = {
        pending: "Pending",
        completed: "Completed",
        failed: "Failed",
        exception: "Exception"
      };
      return texts[status] || status;
    },
    formatTimestamp: function formatTimestamp(timestamp) {
      if (!timestamp) return "-";
      return new Date(timestamp * 1000).toLocaleString();
    },
    getJobData: function getJobData() {
      console.log(this.job);
      return JSON.stringify(this.job.payload, null, 2);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TenantJobs",
  props: {
    tenantId: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      tenant: null,
      jobs: [],
      loading: false,
      selectedStatus: "",
      statusOptions: [{
        value: "",
        text: "All Statuses"
      }, {
        value: "pending",
        text: "Pending"
      }, {
        value: "completed",
        text: "Completed"
      }, {
        value: "failed",
        text: "Failed"
      }, {
        value: "exception",
        text: "Exception"
      }],
      tableFields: [{
        key: "id",
        label: "Job ID"
      }, {
        key: "name",
        label: "Name"
      }, {
        key: "queue",
        label: "Queue"
      }, {
        key: "status",
        label: "Status"
      }, {
        key: "pushed",
        label: "Pushed"
      }, {
        key: "completed",
        label: "Completed"
      }, {
        key: "runtime",
        label: "Runtime"
      }, {
        key: "actions",
        label: "Actions"
      }]
    };
  },
  mounted: function mounted() {
    this.loadTenantInfo();
    this.loadTenantJobs();
  },
  methods: {
    loadTenantInfo: function loadTenantInfo() {
      var _this = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var _yield$ProcessMaker$a, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ProcessMaker.apiClient.get("/tenant-queues/tenants");
            case 3:
              _yield$ProcessMaker$a = _context.sent;
              data = _yield$ProcessMaker$a.data;
              _this.tenant = data.find(function (t) {
                return t.id.toString() === _this.tenantId;
              });
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error("Error loading tenant info:", _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    loadTenantJobs: function loadTenantJobs() {
      var _this2 = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var params, _yield$ProcessMaker$a2, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _context2.prev = 1;
              params = _this2.selectedStatus ? {
                status: _this2.selectedStatus
              } : {};
              _context2.next = 5;
              return ProcessMaker.apiClient.get("/tenant-queues/".concat(_this2.tenantId, "/jobs"), {
                params: params
              });
            case 5:
              _yield$ProcessMaker$a2 = _context2.sent;
              data = _yield$ProcessMaker$a2.data;
              _this2.jobs = data.jobs || [];
              _context2.next = 15;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              console.error("Error loading tenant jobs:", _context2.t0);
              _this2.jobs = [];
              _this2.$bvToast.toast("Error loading tenant jobs", {
                title: "Error",
                variant: "danger",
                solid: true
              });
            case 15:
              _context2.prev = 15;
              _this2.loading = false;
              return _context2.finish(15);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 10, 15, 18]]);
      }))();
    },
    onStatusChange: function onStatusChange() {
      this.loadTenantJobs();
    },
    viewJobDetails: function viewJobDetails(job) {
      this.$router.push("/tenant/".concat(this.tenantId, "/jobs/").concat(job.id));
    },
    clearTenantJobs: function clearTenantJobs() {
      var _this3 = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        var confirmed, _yield$ProcessMaker$a3, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.$bvModal.msgBoxConfirm("Are you sure you want to clear all job data for this tenant?", {
                title: "Confirm Action",
                size: "sm",
                buttonSize: "sm",
                okVariant: "danger",
                okTitle: "Yes",
                cancelTitle: "No",
                footerClass: "p-2",
                hideHeaderClose: false,
                centered: true
              });
            case 2:
              confirmed = _context3.sent;
              if (!confirmed) {
                _context3.next = 16;
                break;
              }
              _context3.prev = 4;
              _context3.next = 7;
              return ProcessMaker.apiClient["delete"]("/tenant-queues/".concat(_this3.tenantId, "/clear"));
            case 7:
              _yield$ProcessMaker$a3 = _context3.sent;
              data = _yield$ProcessMaker$a3.data;
              if (data.message) {
                _this3.$bvToast.toast(data.message, {
                  title: "Success",
                  variant: "success",
                  solid: true
                });
                _this3.loadTenantJobs();
              } else {
                _this3.$bvToast.toast("Error clearing tenant data", {
                  title: "Error",
                  variant: "danger",
                  solid: true
                });
              }
              _context3.next = 16;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](4);
              console.error("Error clearing tenant jobs:", _context3.t0);
              _this3.$bvToast.toast("Error clearing tenant data", {
                title: "Error",
                variant: "danger",
                solid: true
              });
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[4, 12]]);
      }))();
    },
    getStatusVariant: function getStatusVariant(status) {
      var variants = {
        pending: "warning",
        completed: "success",
        failed: "danger",
        exception: "secondary"
      };
      return variants[status] || "light";
    },
    getStatusText: function getStatusText(status) {
      var texts = {
        pending: "Pending",
        completed: "Completed",
        failed: "Failed",
        exception: "Exception"
      };
      return texts[status] || status;
    },
    formatTimestamp: function formatTimestamp(timestamp) {
      if (!timestamp) return "-";
      return new Date(timestamp * 1000).toLocaleString();
    },
    /**
     * Format the runtime of a job.
     * @param {number} createdAt - The timestamp of the job creation.
     * @param {number} completedAt - The timestamp of the job completion.
     * @returns {string} The formatted runtime.
     */
    formatRuntime: function formatRuntime(queuedAt, completedAt) {
      if (!queuedAt || !completedAt) return "-";
      var runtime = completedAt - queuedAt;
      return "".concat(runtime.toFixed(2), "s");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TenantQueuesDashboard",
  data: function data() {
    return {
      loading: false,
      overallStats: {
        totalTenants: "-",
        totalJobs: "-",
        totalPending: "-",
        totalCompleted: "-",
        totalFailed: "-",
        totalException: "-"
      },
      tenants: [],
      refreshInterval: null,
      tableFields: [{
        key: "id",
        label: "Tenant ID"
      }, {
        key: "name",
        label: "Name"
      }, {
        key: "domain",
        label: "Domain"
      }, {
        key: "stats",
        label: "Job Statistics"
      }, {
        key: "actions",
        label: "Actions"
      }]
    };
  },
  mounted: function mounted() {
    this.refreshData();
    // Auto-refresh every 30 seconds
    this.refreshInterval = setInterval(this.refreshData, 30000);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return Promise.all([_this.loadOverallStats(), _this.loadTenants()]);
            case 4:
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              console.error("Error refreshing data:", _context.t0);
            case 9:
              _context.prev = 9;
              _this.loading = false;
              return _context.finish(9);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 6, 9, 12]]);
      }))();
    },
    loadOverallStats: function loadOverallStats() {
      var _this2 = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var _yield$ProcessMaker$a, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return ProcessMaker.apiClient.get("/tenant-queues/overall-stats");
            case 3:
              _yield$ProcessMaker$a = _context2.sent;
              data = _yield$ProcessMaker$a.data;
              _this2.overallStats = {
                totalTenants: data.total_tenants,
                totalJobs: data.total_jobs,
                totalPending: data.total_pending,
                totalCompleted: data.total_completed,
                totalFailed: data.total_failed,
                totalException: data.total_exception
              };
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error("Error loading overall stats:", _context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    loadTenants: function loadTenants() {
      var _this3 = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        var _yield$ProcessMaker$a2, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return ProcessMaker.apiClient.get("/tenant-queues/tenants");
            case 3:
              _yield$ProcessMaker$a2 = _context3.sent;
              data = _yield$ProcessMaker$a2.data;
              _this3.tenants = data;
              _context3.next = 12;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error("Error loading tenants:", _context3.t0);
              _this3.tenants = [];
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    viewTenantJobs: function viewTenantJobs(tenant) {
      this.$router.push("/tenant/".concat(tenant.id, "/jobs"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=template&id=b3e2fd26&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=template&id=b3e2fd26& ***!
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
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("b-card", {
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex justify-content-between align-items-center"
        }, [_c("h5", {
          staticClass: "mb-0"
        }, [_vm._v("\n              Job Details\n            ")]), _vm._v(" "), _c("div", [_c("b-button", {
          attrs: {
            variant: "outline-secondary",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.$router.go(-1);
            }
          }
        }, [_c("b-icon", {
          attrs: {
            icon: "arrow-left"
          }
        }), _vm._v("\n                Back\n              ")], 1)], 1)])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "text-center py-4"
  }, [_c("b-spinner", {
    staticClass: "align-middle"
  }), _vm._v(" "), _c("strong", {
    staticClass: "ml-2"
  }, [_vm._v("Loading job details...")])], 1) : _vm.error ? _c("div", {
    staticClass: "text-center py-4"
  }, [_c("b-alert", {
    attrs: {
      variant: "danger",
      show: ""
    }
  }, [_c("h6", [_vm._v("Error Loading Job Details")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.loadJobDetails
    }
  }, [_vm._v("\n              Try Again\n            ")])], 1)], 1) : _vm.job ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("h6", [_vm._v("Job Information")]), _vm._v(" "), _c("dl", {
    staticClass: "row"
  }, [_c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Job ID:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_c("code", [_vm._v(_vm._s(_vm.job.id))])]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Name:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.job.name) + "\n              ")]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Queue:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.job.queue) + "\n              ")]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Status:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_c("b-badge", {
    attrs: {
      variant: _vm.getStatusVariant(_vm.job.status)
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.getStatusText(_vm.job.status)) + "\n                ")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("h6", [_vm._v("Additional Information")]), _vm._v(" "), _c("dl", {
    staticClass: "row"
  }, [_c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Tenant ID:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.job.tenant_id) + "\n              ")]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Attempts:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.job.attempts) + "\n              ")]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Pushed At:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.formatTimestamp(_vm.job.pushed_at)) + "\n              ")]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Queued At:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.formatTimestamp(_vm.job.queued_at)) + "\n              ")]), _vm._v(" "), _c("dt", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                Completed At:\n              ")]), _vm._v(" "), _c("dd", {
    staticClass: "col-sm-8"
  }, [_vm._v("\n                " + _vm._s(_vm.formatTimestamp(_vm.job.completed_at)) + "\n              ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("h6", [_vm._v("Job Data")]), _vm._v(" "), _c("pre", {
    staticClass: "bg-light p-3 border rounded"
  }, [_vm._v(_vm._s(_vm.getJobData()))])])]) : _vm._e()])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=template&id=60f5ff70&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=template&id=60f5ff70& ***!
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
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("b-card", {
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex justify-content-between align-items-center"
        }, [_c("h5", {
          staticClass: "mb-0"
        }, [_vm._v("\n              " + _vm._s(_vm.tenant ? _vm.tenant.name : "Tenant ".concat(_vm.tenantId)) + "\n            ")]), _vm._v(" "), _c("div", [_c("b-button", {
          staticClass: "mr-2",
          attrs: {
            variant: "outline-secondary",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.$router.push("/");
            }
          }
        }, [_c("b-icon", {
          attrs: {
            icon: "arrow-left"
          }
        }), _vm._v("\n                Back to Dashboard\n              ")], 1), _vm._v(" "), _c("b-button", {
          attrs: {
            variant: "outline-danger",
            size: "sm"
          },
          on: {
            click: _vm.clearTenantJobs
          }
        }, [_vm._v("\n                Clear Tenant Data\n              ")])], 1)])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("b-form-group", {
    attrs: {
      label: "Filter by Status:",
      "label-for": "status-filter"
    }
  }, [_c("b-form-select", {
    attrs: {
      id: "status-filter",
      options: _vm.statusOptions
    },
    on: {
      change: _vm.onStatusChange
    },
    model: {
      value: _vm.selectedStatus,
      callback: function callback($$v) {
        _vm.selectedStatus = $$v;
      },
      expression: "selectedStatus"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end align-items-end h-100"
  }, [_c("b-button", {
    attrs: {
      variant: "outline-primary",
      size: "sm",
      disabled: _vm.loading
    },
    on: {
      click: _vm.loadTenantJobs
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "arrow-clockwise",
      animation: "loading ? 'spin' : ''"
    }
  }), _vm._v("\n                Refresh\n              ")], 1)], 1)])]), _vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.jobs,
      fields: _vm.tableFields,
      busy: _vm.loading,
      hover: "",
      striped: "",
      responsive: "",
      "show-empty": "",
      "empty-text": "No jobs found"
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", {
          staticClass: "ml-2"
        }, [_vm._v("Loading...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(id)",
      fn: function fn(data) {
        return [_c("code", [_vm._v(_vm._s(data.item.id))])];
      }
    }, {
      key: "cell(status)",
      fn: function fn(data) {
        return [_c("b-badge", {
          attrs: {
            variant: _vm.getStatusVariant(data.item.status)
          }
        }, [_vm._v("\n              " + _vm._s(_vm.getStatusText(data.item.status)) + "\n            ")])];
      }
    }, {
      key: "cell(pushed)",
      fn: function fn(data) {
        return [_vm._v("\n            " + _vm._s(_vm.formatTimestamp(data.item.pushed_at)) + "\n          ")];
      }
    }, {
      key: "cell(completed)",
      fn: function fn(data) {
        return [_vm._v("\n            " + _vm._s(_vm.formatTimestamp(data.item.completed_at)) + "\n          ")];
      }
    }, {
      key: "cell(runtime)",
      fn: function fn(data) {
        return [_vm._v("\n            " + _vm._s(_vm.formatRuntime(data.item.queued_at, data.item.completed_at)) + "\n          ")];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-button", {
          attrs: {
            variant: "outline-info",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.viewJobDetails(data.item);
            }
          }
        }, [_vm._v("\n              Details\n            ")])];
      }
    }])
  })], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=template&id=78fa7430&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=template&id=78fa7430& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "px-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mb-4"
  }, [_c("b-card", {
    attrs: {
      header: "Overall Statistics"
    }
  }, [_c("div", {
    staticClass: "row",
    attrs: {
      id: "overall-stats"
    }
  }, [_c("div", {
    staticClass: "col-md-2"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h3", {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.overallStats.totalTenants))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Total Tenants")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h3", {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.overallStats.totalJobs))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Total Jobs")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h3", {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.overallStats.totalPending))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h3", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.overallStats.totalCompleted))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Completed")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h3", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.overallStats.totalFailed))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Failed")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h3", {
    staticClass: "text-secondary"
  }, [_vm._v(_vm._s(_vm.overallStats.totalException))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Exceptions")])])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("b-card", {
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex justify-content-between align-items-center"
        }, [_c("b-button", {
          attrs: {
            variant: "outline-primary",
            size: "sm",
            disabled: _vm.loading
          },
          on: {
            click: _vm.refreshData
          }
        }, [_c("b-icon", {
          attrs: {
            icon: "arrow-clockwise",
            animation: _vm.loading ? "spin" : ""
          }
        }), _vm._v("\n              Refresh\n            ")], 1)], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.tenants,
      fields: _vm.tableFields,
      busy: _vm.loading,
      hover: "",
      striped: "",
      responsive: "",
      "show-empty": "",
      "empty-text": "No tenants with job activity found"
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v("Loading...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(stats)",
      fn: function fn(data) {
        return [_c("div", [_c("b-badge", {
          staticClass: "mr-1",
          attrs: {
            variant: "info"
          }
        }, [_vm._v("\n                " + _vm._s(data.item.stats.total) + "\n              ")]), _vm._v(" "), _c("b-badge", {
          staticClass: "mr-1",
          attrs: {
            variant: "warning"
          }
        }, [_vm._v("\n                " + _vm._s(data.item.stats.pending) + "\n              ")]), _vm._v(" "), _c("b-badge", {
          staticClass: "mr-1",
          attrs: {
            variant: "success"
          }
        }, [_vm._v("\n                " + _vm._s(data.item.stats.completed) + "\n              ")]), _vm._v(" "), _c("b-badge", {
          staticClass: "mr-1",
          attrs: {
            variant: "danger"
          }
        }, [_vm._v("\n                " + _vm._s(data.item.stats.failed) + "\n              ")])], 1)];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-button", {
          attrs: {
            variant: "outline-primary",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.viewTenantJobs(data.item);
            }
          }
        }, [_vm._v("\n              View Jobs\n            ")])];
      }
    }])
  })], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/admin/tenant-queues/index.js":
/*!***************************************************!*\
  !*** ./resources/js/admin/tenant-queues/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./resources/js/admin/tenant-queues/router.js");
function cov_1gow5t0uyr() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/admin/tenant-queues/index.js";
  var hash = "f9f7b7eae9ddde7ccd32a79e95b69a17bc293618";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/admin/tenant-queues/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 6,
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
    hash: "f9f7b7eae9ddde7ccd32a79e95b69a17bc293618"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gow5t0uyr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1gow5t0uyr();

cov_1gow5t0uyr().s[0]++;
new Vue({
  el: "#tenant-queues-dashboard",
  router: _router__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./resources/js/admin/tenant-queues/router.js":
/*!****************************************************!*\
  !*** ./resources/js/admin/tenant-queues/router.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _TenantQueuesDashboard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TenantQueuesDashboard.vue */ "./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue");
/* harmony import */ var _JobDetails_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobDetails.vue */ "./resources/js/admin/tenant-queues/JobDetails.vue");
/* harmony import */ var _TenantJobs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TenantJobs.vue */ "./resources/js/admin/tenant-queues/TenantJobs.vue");
function cov_zkmzhme2f() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/admin/tenant-queues/router.js";
  var hash = "c42675ce7c3d121566bb547f2f8bf8d30ce6247f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/admin/tenant-queues/router.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 19
        }
      },
      "1": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "2": {
        start: {
          line: 36,
          column: 15
        },
        end: {
          line: 40,
          column: 2
        }
      },
      "3": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "4": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "5": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 55
        }
      },
      "6": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 43,
            column: 18
          },
          end: {
            line: 43,
            column: 19
          }
        },
        loc: {
          start: {
            line: 43,
            column: 38
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 43
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 46,
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
        line: 44
      },
      "1": {
        loc: {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 30
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 13
          }
        }, {
          start: {
            line: 44,
            column: 17
          },
          end: {
            line: 44,
            column: 30
          }
        }],
        line: 44
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
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c42675ce7c3d121566bb547f2f8bf8d30ce6247f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zkmzhme2f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_zkmzhme2f();





cov_zkmzhme2f().s[0]++;
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]);
var routes = (cov_zkmzhme2f().s[1]++, [{
  path: "/",
  name: "dashboard",
  component: _TenantQueuesDashboard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  meta: {
    title: "Jobs Dashboard"
  }
}, {
  path: "/tenant/:tenantId/jobs",
  name: "tenant-jobs",
  component: _TenantJobs_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  props: true,
  meta: {
    title: "Jobs"
  }
}, {
  path: "/tenant/:tenantId/jobs/:jobId",
  name: "job-details",
  component: _JobDetails_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: true,
  meta: {
    title: "Job Details"
  }
}, {
  path: "*",
  redirect: "/"
}]);
var router = (cov_zkmzhme2f().s[2]++, new vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  mode: "hash",
  base: "/admin/tenant-queues/",
  routes: routes
}));

// Update page title based on route meta
cov_zkmzhme2f().s[3]++;
router.beforeEach(function (to, from, next) {
  cov_zkmzhme2f().f[0]++;
  cov_zkmzhme2f().s[4]++;
  if ((cov_zkmzhme2f().b[1][0]++, to.meta) && (cov_zkmzhme2f().b[1][1]++, to.meta.title)) {
    cov_zkmzhme2f().b[0][0]++;
    cov_zkmzhme2f().s[5]++;
    document.title = "".concat(to.meta.title, " - ProcessMaker");
  } else {
    cov_zkmzhme2f().b[0][1]++;
  }
  cov_zkmzhme2f().s[6]++;
  next();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./resources/js/admin/tenant-queues/JobDetails.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/tenant-queues/JobDetails.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JobDetails_vue_vue_type_template_id_b3e2fd26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobDetails.vue?vue&type=template&id=b3e2fd26& */ "./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=template&id=b3e2fd26&");
/* harmony import */ var _JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobDetails.vue?vue&type=script&lang=js& */ "./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobDetails_vue_vue_type_template_id_b3e2fd26___WEBPACK_IMPORTED_MODULE_0__.render,
  _JobDetails_vue_vue_type_template_id_b3e2fd26___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/tenant-queues/JobDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/tenant-queues/TenantJobs.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/tenant-queues/TenantJobs.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TenantJobs_vue_vue_type_template_id_60f5ff70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TenantJobs.vue?vue&type=template&id=60f5ff70& */ "./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=template&id=60f5ff70&");
/* harmony import */ var _TenantJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TenantJobs.vue?vue&type=script&lang=js& */ "./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TenantJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TenantJobs_vue_vue_type_template_id_60f5ff70___WEBPACK_IMPORTED_MODULE_0__.render,
  _TenantJobs_vue_vue_type_template_id_60f5ff70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/tenant-queues/TenantJobs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue":
/*!********************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TenantQueuesDashboard_vue_vue_type_template_id_78fa7430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TenantQueuesDashboard.vue?vue&type=template&id=78fa7430& */ "./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=template&id=78fa7430&");
/* harmony import */ var _TenantQueuesDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TenantQueuesDashboard.vue?vue&type=script&lang=js& */ "./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TenantQueuesDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TenantQueuesDashboard_vue_vue_type_template_id_78fa7430___WEBPACK_IMPORTED_MODULE_0__.render,
  _TenantQueuesDashboard_vue_vue_type_template_id_78fa7430___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/tenant-queues/TenantQueuesDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TenantJobs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantQueuesDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TenantQueuesDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantQueuesDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=template&id=b3e2fd26&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=template&id=b3e2fd26& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_b3e2fd26___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_b3e2fd26___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_b3e2fd26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JobDetails.vue?vue&type=template&id=b3e2fd26& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/JobDetails.vue?vue&type=template&id=b3e2fd26&");


/***/ }),

/***/ "./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=template&id=60f5ff70&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=template&id=60f5ff70& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantJobs_vue_vue_type_template_id_60f5ff70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantJobs_vue_vue_type_template_id_60f5ff70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantJobs_vue_vue_type_template_id_60f5ff70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TenantJobs.vue?vue&type=template&id=60f5ff70& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantJobs.vue?vue&type=template&id=60f5ff70&");


/***/ }),

/***/ "./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=template&id=78fa7430&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=template&id=78fa7430& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantQueuesDashboard_vue_vue_type_template_id_78fa7430___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantQueuesDashboard_vue_vue_type_template_id_78fa7430___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantQueuesDashboard_vue_vue_type_template_id_78fa7430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TenantQueuesDashboard.vue?vue&type=template&id=78fa7430& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/tenant-queues/TenantQueuesDashboard.vue?vue&type=template&id=78fa7430&");


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vue-vendor"], () => (__webpack_exec__("./resources/js/admin/tenant-queues/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);