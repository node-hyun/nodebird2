webpackHotUpdate_N_E("pages/file_upload",{

/***/ "./pages/file_upload.js":
/*!******************************!*\
  !*** ./pages/file_upload.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\nodebird2\\front\\pages\\file_upload.js",
    _templateObject,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var getColor = function getColor(props) {
  if (props.isDragAccept) {
    return '#00e676';
  }

  if (props.isDragReject) {
    return '#ff1744';
  }

  if (props.isDragActive) {
    return '#2196f3';
  }

  return '#eeeeee';
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: ", ";\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border .24s ease-in-out;\n"])), function (props) {
  return getColor(props);
});
_c = Container;

function file_upload() {
  _s();

  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (acceptedFiles) {// Do something with the files
  }, []);

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"])({
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Container, _objectSpread(_objectSpread({}, getRootProps({
    isDragActive: isDragActive,
    isDragAccept: isDragAccept,
    isDragReject: isDragReject
  })), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", _objectSpread({}, getInputProps()), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
      children: "Drag 'n' drop some files here, or click to select files"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_s(file_upload, "fY0UaN4ooiQoqjcUyOb3S5BZb78=", false, function () {
  return [react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"]];
});

/* harmony default export */ __webpack_exports__["default"] = (file_upload);

var _c;

$RefreshReg$(_c, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZV91cGxvYWQuanMiXSwibmFtZXMiOlsiZ2V0Q29sb3IiLCJwcm9wcyIsImlzRHJhZ0FjY2VwdCIsImlzRHJhZ1JlamVjdCIsImlzRHJhZ0FjdGl2ZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImZpbGVfdXBsb2FkIiwib25Ecm9wIiwidXNlQ2FsbGJhY2siLCJhY2NlcHRlZEZpbGVzIiwidXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFJQSxLQUFLLENBQUNDLFlBQVYsRUFBd0I7QUFDcEIsV0FBTyxTQUFQO0FBQ0g7O0FBQ0QsTUFBSUQsS0FBSyxDQUFDRSxZQUFWLEVBQXdCO0FBQ3BCLFdBQU8sU0FBUDtBQUNIOztBQUNELE1BQUlGLEtBQUssQ0FBQ0csWUFBVixFQUF3QjtBQUNwQixXQUFPLFNBQVA7QUFDSDs7QUFDRCxTQUFPLFNBQVA7QUFDSCxDQVhEOztBQWFBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBViw2YkFRRyxVQUFBTixLQUFLO0FBQUEsU0FBSUQsUUFBUSxDQUFDQyxLQUFELENBQVo7QUFBQSxDQVJSLENBQWY7S0FBTUksUzs7QUFnQk4sU0FBU0csV0FBVCxHQUF1QjtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsVUFBQUMsYUFBYSxFQUFJLENBQ3hDO0FBQ0gsR0FGeUIsRUFFdkIsRUFGdUIsQ0FBMUI7O0FBR0EscUJBTUlDLGtFQUFXLENBQUM7QUFBRUgsVUFBTSxFQUFOQTtBQUFGLEdBQUQsQ0FOZjtBQUFBLE1BQ0lJLFlBREosZ0JBQ0lBLFlBREo7QUFBQSxNQUVJQyxhQUZKLGdCQUVJQSxhQUZKO0FBQUEsTUFHSVYsWUFISixnQkFHSUEsWUFISjtBQUFBLE1BSUlGLFlBSkosZ0JBSUlBLFlBSko7QUFBQSxNQUtJQyxZQUxKLGdCQUtJQSxZQUxKOztBQVFBLHNCQUNJLHFFQUFDLFNBQUQsa0NBQWVVLFlBQVksQ0FBQztBQUFFVCxnQkFBWSxFQUFaQSxZQUFGO0FBQWdCRixnQkFBWSxFQUFaQSxZQUFoQjtBQUE4QkMsZ0JBQVksRUFBWkE7QUFBOUIsR0FBRCxDQUEzQjtBQUFBLDRCQUNJLGdHQUFXVyxhQUFhLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FsQlFOLFc7VUFVREksMEQ7OztBQVVPSiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlX3VwbG9hZC4wYjEyZTc1YTAyMTMxM2MxNDVkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xyXG5cclxuY29uc3QgZ2V0Q29sb3IgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5pc0RyYWdBY2NlcHQpIHtcclxuICAgICAgICByZXR1cm4gJyMwMGU2NzYnO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BzLmlzRHJhZ1JlamVjdCkge1xyXG4gICAgICAgIHJldHVybiAnI2ZmMTc0NCc7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuaXNEcmFnQWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuICcjMjE5NmYzJztcclxuICAgIH1cclxuICAgIHJldHVybiAnI2VlZWVlZSc7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0Q29sb3IocHJvcHMpfTtcclxuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGNvbG9yOiAjYmRiZGJkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIC4yNHMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBmaWxlX3VwbG9hZCgpIHtcclxuICAgIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKGFjY2VwdGVkRmlsZXMgPT4ge1xyXG4gICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBmaWxlc1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZ2V0Um9vdFByb3BzLFxyXG4gICAgICAgIGdldElucHV0UHJvcHMsXHJcbiAgICAgICAgaXNEcmFnQWN0aXZlLFxyXG4gICAgICAgIGlzRHJhZ0FjY2VwdCxcclxuICAgICAgICBpc0RyYWdSZWplY3QgXHJcbiAgICB9ID0gdXNlRHJvcHpvbmUoeyBvbkRyb3AgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgey4uLmdldFJvb3RQcm9wcyh7IGlzRHJhZ0FjdGl2ZSwgaXNEcmFnQWNjZXB0LCBpc0RyYWdSZWplY3QgfSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsZV91cGxvYWRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==