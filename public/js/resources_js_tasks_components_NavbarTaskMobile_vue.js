"use strict";
(self["webpackChunk_processmaker_processmaker"] = self["webpackChunk_processmaker_processmaker"] || []).push([["resources_js_tasks_components_NavbarTaskMobile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskDetailsMobile_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskDetailsMobile.vue */ "./resources/js/tasks/components/TaskDetailsMobile.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TaskDetailsMobile: _TaskDetailsMobile_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["task", "userisadmin", "userisprocessmanager"],
  data: function data() {
    return {
      data: this.$cookies.get("tasksListMobile"),
      prevTask: -1,
      nextTask: -1,
      existPrev: false,
      existNext: false,
      isPriority: false
    };
  },
  mounted: function mounted() {
    this.isPriority = this.task.is_priority;
    var indexTask = this.data.indexOf(this.task.id);
    if (indexTask - 1 >= 0) {
      this.existPrev = true;
      this.prevTask = this.data[indexTask - 1];
    }
    if (indexTask + 1 < this.data.length) {
      this.existNext = true;
      this.nextTask = this.data[indexTask + 1];
    }
  },
  methods: {
    returnTasks: function returnTasks() {
      window.location = "/tasks";
    },
    goPrevNext: function goPrevNext(action) {
      if (action === "Next" && this.existNext) {
        window.location = "/tasks/".concat(this.nextTask, "/edit");
      }
      if (action === "Prev" && this.existPrev) {
        window.location = "/tasks/".concat(this.prevTask, "/edit");
      }
    },
    addPriority: function addPriority() {
      var _this = this;
      ProcessMaker.apiClient.put("tasks/".concat(this.task.id, "/setPriority"), {
        is_priority: !this.isPriority
      }).then(function () {
        _this.isPriority = !_this.isPriority;
      });
    },
    handleReloadTask: function handleReloadTask(value) {
      this.$emit("reload-task", value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AvatarImage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AvatarImage.vue */ "./resources/js/components/AvatarImage.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AvatarImage: _components_AvatarImage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["task"],
  data: function data() {
    return {
      selectedUser: []
    };
  },
  computed: {
    disabled: function disabled() {
      return this.selectedUser.length === 0;
    }
  },
  methods: {
    cancelReassign: function cancelReassign() {
      this.selectedUser = [];
    },
    reassignUser: function reassignUser() {
      var _this = this;
      if (this.selectedUser) {
        ProcessMaker.apiClient.put("tasks/".concat(this.task.id), {
          user_id: this.selectedUser.id
        }).then(function (response) {
          _this.selectedUser = [];
          window.location.href = "/tasks";
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AvatarImage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AvatarImage.vue */ "./resources/js/components/AvatarImage.vue");
/* harmony import */ var _ReassignMobileModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReassignMobileModal.vue */ "./resources/js/tasks/components/ReassignMobileModal.vue");
/* harmony import */ var _modules_autosave_draftFileUploadMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/autosave/draftFileUploadMixin */ "./resources/js/modules/autosave/draftFileUploadMixin.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ReassignMobileModal: _ReassignMobileModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AvatarImage: _components_AvatarImage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_modules_autosave_draftFileUploadMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: ["task", "userisadmin", "userisprocessmanager"],
  data: function data() {
    return {
      statusCard: "card-header text-capitalize text-white bg-success"
    };
  },
  computed: {
    dueLabel: function dueLabel() {
      var dueLabels = {
        open: "Due",
        completed: "Completed",
        overdue: "Due"
      };
      return dueLabels[this.task.advanceStatus] || "";
    },
    dateDueAt: function dateDueAt() {
      return this.task.due_at;
    },
    showDueAtDates: function showDueAtDates() {
      return this.task.status !== "CLOSED";
    },
    createdAt: function createdAt() {
      return this.task.created_at;
    },
    completedAt: function completedAt() {
      return this.task.completed_at;
    }
  },
  methods: {
    showRequestModal: function showRequestModal() {
      // Perform initial load of requests from backend
      this.$refs.requestModal.showModal();
    },
    eraseDraft: function eraseDraft() {
      var _this = this;
      this.formDataWatcherActive = false;
      ProcessMaker.apiClient["delete"]("drafts/" + this.task.id).then(function (response) {
        _this.resetRequestFiles(response);
        _this.$emit("reload-task", true);
        _this.closeModal();
      });
    },
    closeModal: function closeModal() {
      $('#detailsTaskModal').modal('hide');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "container"
    }
  }, [_c("div", {
    staticClass: "d-flex bg-primary p-2 justify-content-between",
    attrs: {
      id: "navbarTaskMobile"
    }
  }, [_c("button", {
    staticClass: "dropleft btn btn-primary",
    attrs: {
      type: "buttom"
    },
    on: {
      click: function click($event) {
        return _vm.returnTasks();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  })]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "dropleft btn btn-primary text-capitalize",
    attrs: {
      type: "buttom",
      disabled: !_vm.existPrev
    },
    on: {
      click: function click($event) {
        return _vm.goPrevNext("Prev");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-left mr-1"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Prev")) + "\n      ")]), _vm._v(" "), _c("button", {
    staticClass: "dropleft btn btn-primary text-capitalize",
    attrs: {
      type: "buttom",
      disabled: !_vm.existNext
    },
    on: {
      click: function click($event) {
        return _vm.goPrevNext("Next");
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Next")) + "\n        "), _c("i", {
    staticClass: "fas fa-chevron-right ml-1"
  })])]), _vm._v(" "), _c("div", [_vm._m(0), _vm._v(" "), _c("task-details-mobile", {
    attrs: {
      task: _vm.task,
      userisadmin: _vm.userisadmin,
      userisprocessmanager: _vm.userisprocessmanager
    },
    on: {
      "reload-task": _vm.handleReloadTask
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "navbar-task-details-mobile d-flex justify-content-between align-items-center"
  }, [_c("span", {
    staticClass: "navbar-task-name"
  }, [_vm._v("\n      " + _vm._s(_vm.task.element_name) + "\n    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn",
    staticStyle: {
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.addPriority();
      }
    }
  }, [_c("img", {
    attrs: {
      src: _vm.isPriority ? "/img/priority.svg" : "/img/priority-mobile.svg",
      alt: _vm.$t("Priority")
    }
  })])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "dropleft btn btn-primary",
    attrs: {
      type: "buttom",
      "data-toggle": "modal",
      "data-target": "#detailsTaskModal"
    }
  }, [_c("i", {
    staticClass: "fas fa-info-circle"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=template&id=babbd822&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=template&id=babbd822& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "modal fade",
    attrs: {
      id: "reassignModal",
      tabindex: "-1",
      role: "dialog",
      size: "md",
      "aria-labelledby": "reassignModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "exampleModalLabel"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Reassign To")) + "\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: _vm.cancelReassign
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("select-from-api", {
    attrs: {
      id: "user",
      placeholder: _vm.$t("Select the user to reassign to the task"),
      api: "users",
      multiple: false,
      "show-labels": false,
      searchable: true,
      "store-id": false,
      label: "fullname"
    },
    scopedSlots: _vm._u([{
      key: "tag",
      fn: function fn(props) {
        return [_c("span", {
          staticClass: "multiselect__tag d-flex align-items-center",
          staticStyle: {
            width: "max-content"
          }
        }, [_c("span", {
          staticClass: "option__desc mr-1"
        }, [_c("span", {
          staticClass: "option__title"
        }, [_vm._v("\n                    " + _vm._s(props.option.fullname) + "\n                  ")])]), _vm._v(" "), _c("i", {
          staticClass: "multiselect__tag-icon",
          attrs: {
            "aria-hidden": "true",
            tabindex: "1"
          },
          on: {
            click: function click($event) {
              return props.remove(props.option);
            }
          }
        })])];
      }
    }, {
      key: "option",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "option__desc d-flex align-items-center"
        }, [_c("span", {
          staticClass: "option__title mr-1"
        }, [_vm._v("\n                  " + _vm._s(props.option.fullname) + "\n                ")])])];
      }
    }]),
    model: {
      value: _vm.selectedUser,
      callback: function callback($$v) {
        _vm.selectedUser = $$v;
      },
      expression: "selectedUser"
    }
  }, [_c("template", {
    slot: "noResult"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("No elements found. Consider changing the search query.")) + "\n            ")]), _vm._v(" "), _c("template", {
    slot: "noOptions"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("No Data Available")) + "\n            ")])], 2)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    },
    on: {
      click: _vm.cancelReassign
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Cancel")) + "\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary ml-2",
    attrs: {
      type: "button",
      disabled: _vm.disabled
    },
    on: {
      click: _vm.reassignUser
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Reassign")) + "\n        ")])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=template&id=51ea3385&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=template&id=51ea3385& ***!
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
  return _c("div", [_c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "detailsTaskModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "detailsTaskModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "d-flex modal-header align-items-center py-2",
    staticStyle: {
      "background-color": "#EFF5FF"
    }
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.$t("Details")) + " ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "modal-body",
    staticStyle: {
      padding: "0 !important"
    }
  }, [_c("table", {
    staticClass: "table b-table m-0",
    attrs: {
      "aria-label": "fileDetails",
      role: "table"
    }
  }, [_c("thead", [_c("tr", {
    "class": _vm.statusCard
  }, [_c("th", {
    staticClass: "d-flex align-items-center pl-3 border-0"
  }, [_c("h4", {
    staticStyle: {
      margin: "0",
      padding: "0",
      "line-height": "1"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t(_vm.task.advanceStatus)) + "\n                  ")])]), _vm._v(" "), _c("th", {
    staticClass: "border-0"
  }, [_vm.dateDueAt && _vm.showDueAtDates ? _c("div", [_c("small", [_vm._v(" " + _vm._s(_vm.$t(_vm.dueLabel)) + " " + _vm._s(_vm.moment(_vm.dateDueAt).fromNow()) + "\n                      "), _c("br"), _vm._v("\n                      " + _vm._s(_vm.moment(_vm.dateDueAt).format()) + "\n                    ")])]) : _vm._e()])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "pl-3",
    attrs: {
      "aria-colindex": "1",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(" " + _vm._s(_vm.$t("Name of the Task")) + ": ")])]), _vm._v(" "), _c("td", {
    attrs: {
      "aria-colindex": "2",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-light"
  }, [_vm._v(" " + _vm._s(_vm.task.element_name))])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "pl-3",
    attrs: {
      "aria-colindex": "1",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(" " + _vm._s(_vm.$t("Assigned")) + ": ")])]), _vm._v(" "), _c("td", {
    staticClass: "font-weight-light",
    attrs: {
      "aria-colindex": "2",
      role: "cell"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.moment(_vm.createdAt).format()) + "\n                  "), _c("br"), _vm._v(" "), _c("small", {
    staticClass: "font-weight-light"
  }, [_vm._v(" " + _vm._s(_vm.$t("Assigned")) + " " + _vm._s(_vm.moment(_vm.createdAt).fromNow()))])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "pl-3",
    attrs: {
      "aria-colindex": "1",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(" " + _vm._s(_vm.$t("Request")) + ": ")])]), _vm._v(" "), _c("td", {
    attrs: {
      "aria-colindex": "2",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-light"
  }, [_vm._v(" #" + _vm._s(_vm.task.process_request_id) + " " + _vm._s(_vm.task.process_request.name) + " ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "pl-3",
    attrs: {
      "aria-colindex": "1",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(" " + _vm._s(_vm.$t("Requested By")) + ": ")])]), _vm._v(" "), _c("td", {
    attrs: {
      "aria-colindex": "2",
      role: "cell"
    }
  }, [_vm.task.requestor ? _c("avatar-image", {
    staticClass: "d-inline-flex pull-left align-items-center",
    attrs: {
      size: "25",
      "input-data": _vm.task.requestor,
      "hide-name": "true"
    }
  }) : _c("p", [_vm._v("\n                    " + _vm._s(_vm.$t("Web Entry")) + "\n                  ")])], 1)]), _vm._v(" "), _vm.task.is_self_service === 0 ? _c("tr", [_c("td", {
    staticClass: "pl-3",
    attrs: {
      "aria-colindex": "1",
      role: "cell"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(" " + _vm._s(_vm.$t("Assigned To")) + ": ")])]), _vm._v(" "), _c("td", {
    attrs: {
      "aria-colindex": "2",
      role: "cell"
    }
  }, [_vm.task.user ? _c("avatar-image", {
    staticClass: "d-inline-flex pull-left align-items-center",
    attrs: {
      size: "25",
      "input-data": _vm.task.user,
      "hide-name": "true"
    }
  }) : _vm._e()], 1)]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "p-3"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.eraseDraft();
      }
    }
  }, [_c("img", {
    attrs: {
      src: "/img/smartinbox-images/eraser.svg",
      alt: _vm.$t("No Image")
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Clear Draft")) + "\n            ")])]), _vm._v(" "), _vm.task.definition.allowReassignment || _vm.userisadmin || _vm.userisprocessmanager ? _c("div", {
    staticClass: "p-3"
  }, [_vm.task.advanceStatus === "open" || _vm.task.advanceStatus === "overdue" ? _c("button", {
    staticClass: "btn btn-outline-primary btn-block",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "data-toggle": "modal",
      "data-target": "#reassignModal"
    }
  }, [_c("i", {
    staticClass: "fas fa-user-friends"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Reassign")) + "\n            ")]) : _vm._e()]) : _vm._e()])])])]), _vm._v(" "), _c("reassign-mobile-modal", {
    attrs: {
      task: _vm.task
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/modules/autosave/draftFileUploadMixin.js":
/*!***************************************************************!*\
  !*** ./resources/js/modules/autosave/draftFileUploadMixin.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cov_9txxwduda() {
  var path = "/Users/trongtri/Desktop/processmaker/resources/js/modules/autosave/draftFileUploadMixin.js";
  var hash = "d91ee82724d154319ac381fc6799dba306c7993d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/trongtri/Desktop/processmaker/resources/js/modules/autosave/draftFileUploadMixin.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 53
        }
      },
      "1": {
        start: {
          line: 22,
          column: 27
        },
        end: {
          line: 22,
          column: 61
        }
      },
      "2": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 7
          }
        },
        loc: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 11,
            column: 7
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 32
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 10,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 10,
            column: 47
          }
        }, {
          start: {
            line: 10,
            column: 51
          },
          end: {
            line: 10,
            column: 52
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 55
          }
        }, {
          start: {
            line: 22,
            column: 59
          },
          end: {
            line: 22,
            column: 61
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d91ee82724d154319ac381fc6799dba306c7993d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9txxwduda = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_9txxwduda();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  watch: {
    /**
     * Set a global variable to keep track of the current task.
     * 
     * This is used by the file-upload control for saving files for drafts.
     */
    task: {
      handler: function handler() {
        var _this$task;
        cov_9txxwduda().f[0]++;
        cov_9txxwduda().s[0]++;
        window._current_task_id = (cov_9txxwduda().b[0][0]++, (_this$task = this.task) === null || _this$task === void 0 ? void 0 : _this$task.id) || (cov_9txxwduda().b[0][1]++, 0);
      }
    }
  },
  methods: {
    /**
     * When a draft is deleted, we need to reset the global request files
     * to what they are in the persisted request.
     * 
     * The response from DELETE /drafts returns the list of request files.
     */
    resetRequestFiles: function resetRequestFiles(response) {
      var _ref, _response$data;
      cov_9txxwduda().f[1]++;
      var requestFiles = (cov_9txxwduda().s[1]++, (_ref = (cov_9txxwduda().b[1][0]++, response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.requestFiles)) !== null && _ref !== void 0 ? _ref : (cov_9txxwduda().b[1][1]++, {}));
      cov_9txxwduda().s[2]++;
      _.set(window, 'PM4ConfigOverrides.requestFiles', requestFiles);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.navbar-task-details-mobile[data-v-7f120fa1] {\n  height: 48px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid #CDDDEE;\n  padding: 0 16px;\n}\n.navbar-task-name[data-v-7f120fa1] {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(76, 84, 92, 0.81);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.inline-input {\n  margin-right: 6px;\n}\n.inline-button {\n  background-color: rgb(109, 124, 136);\n  font-weight: 100;\n}\n.input-and-select {\n  width: 212px;\n}\n.multiselect__element span img {\n  border-radius: 50%;\n  height: 20px;\n}\n.multiselect__tags-wrap img {\n  height: 15px;\n  border-radius: 50%;\n}\n.multiselect__tag-icon:after {\n  color: white;\n}\n.multiselect__option--highlight {\n  background: #00bf9c;\n}\n.multiselect__option--selected.multiselect__option--highlight {\n  background: #00bf9c;\n}\n.multiselect__tag {\n  background: #788793;\n}\n.multiselect__tag-icon:after {\n  color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_style_index_0_id_7f120fa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_style_index_0_id_7f120fa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_style_index_0_id_7f120fa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_style_index_0_id_babbd822_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_style_index_0_id_babbd822_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_style_index_0_id_babbd822_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/tasks/components/NavbarTaskMobile.vue":
/*!************************************************************!*\
  !*** ./resources/js/tasks/components/NavbarTaskMobile.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarTaskMobile_vue_vue_type_template_id_7f120fa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true& */ "./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true&");
/* harmony import */ var _NavbarTaskMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarTaskMobile.vue?vue&type=script&lang=js& */ "./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=script&lang=js&");
/* harmony import */ var _NavbarTaskMobile_vue_vue_type_style_index_0_id_7f120fa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css& */ "./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavbarTaskMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavbarTaskMobile_vue_vue_type_template_id_7f120fa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavbarTaskMobile_vue_vue_type_template_id_7f120fa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f120fa1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/tasks/components/NavbarTaskMobile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/tasks/components/ReassignMobileModal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/tasks/components/ReassignMobileModal.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReassignMobileModal_vue_vue_type_template_id_babbd822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReassignMobileModal.vue?vue&type=template&id=babbd822& */ "./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=template&id=babbd822&");
/* harmony import */ var _ReassignMobileModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReassignMobileModal.vue?vue&type=script&lang=js& */ "./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _ReassignMobileModal_vue_vue_type_style_index_0_id_babbd822_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css& */ "./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReassignMobileModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReassignMobileModal_vue_vue_type_template_id_babbd822___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReassignMobileModal_vue_vue_type_template_id_babbd822___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/tasks/components/ReassignMobileModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/tasks/components/TaskDetailsMobile.vue":
/*!*************************************************************!*\
  !*** ./resources/js/tasks/components/TaskDetailsMobile.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskDetailsMobile_vue_vue_type_template_id_51ea3385___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskDetailsMobile.vue?vue&type=template&id=51ea3385& */ "./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=template&id=51ea3385&");
/* harmony import */ var _TaskDetailsMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskDetailsMobile.vue?vue&type=script&lang=js& */ "./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskDetailsMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskDetailsMobile_vue_vue_type_template_id_51ea3385___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskDetailsMobile_vue_vue_type_template_id_51ea3385___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/tasks/components/TaskDetailsMobile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarTaskMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReassignMobileModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetailsMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskDetailsMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetailsMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_template_id_7f120fa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_template_id_7f120fa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_template_id_7f120fa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=template&id=7f120fa1&scoped=true&");


/***/ }),

/***/ "./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=template&id=babbd822&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=template&id=babbd822& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_template_id_babbd822___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_template_id_babbd822___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_template_id_babbd822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReassignMobileModal.vue?vue&type=template&id=babbd822& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=template&id=babbd822&");


/***/ }),

/***/ "./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=template&id=51ea3385&":
/*!********************************************************************************************!*\
  !*** ./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=template&id=51ea3385& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetailsMobile_vue_vue_type_template_id_51ea3385___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetailsMobile_vue_vue_type_template_id_51ea3385___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetailsMobile_vue_vue_type_template_id_51ea3385___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskDetailsMobile.vue?vue&type=template&id=51ea3385& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/TaskDetailsMobile.vue?vue&type=template&id=51ea3385&");


/***/ }),

/***/ "./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarTaskMobile_vue_vue_type_style_index_0_id_7f120fa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/NavbarTaskMobile.vue?vue&type=style&index=0&id=7f120fa1&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReassignMobileModal_vue_vue_type_style_index_0_id_babbd822_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/tasks/components/ReassignMobileModal.vue?vue&type=style&index=0&id=babbd822&lang=css&");


/***/ })

}]);