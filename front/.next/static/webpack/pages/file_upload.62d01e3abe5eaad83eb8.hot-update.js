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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\nodebird2\\front\\pages\\file_upload.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var h1_style = {
  textAlign: "center",
  font: "20px Arial sans-serif",
  fontWeight: 300,
  textRendering: "optimizeLegibility"
};
var dropzone_style = {
  background: "white",
  borderRadius: "5px",
  border: "2px dashed rgb(0, 135, 247)",
  borderImage: "none",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto"
};

function file_upload() {
  _s();

  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (acceptedFiles) {
    // Do something with the files
    console.log("acceptedFileds : ", acceptedFiles);
  }, []);

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      style: h1_style,
      children: "File Attach Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
      style: dropzone_style,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", _objectSpread({}, getInputProps()), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), isDragActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: "Drop the files here ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: "Drag 'n' drop some files here, or click to select files"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(file_upload, "yd//yJtVY5DqPYzQY0xGsdgoRlk=", false, function () {
  return [react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"]];
});

/* harmony default export */ __webpack_exports__["default"] = (file_upload);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZV91cGxvYWQuanMiXSwibmFtZXMiOlsiaDFfc3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb250IiwiZm9udFdlaWdodCIsInRleHRSZW5kZXJpbmciLCJkcm9wem9uZV9zdHlsZSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3JkZXJJbWFnZSIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZmlsZV91cGxvYWQiLCJvbkRyb3AiLCJ1c2VDYWxsYmFjayIsImFjY2VwdGVkRmlsZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNiQyxXQUFTLEVBQUMsUUFERztBQUViQyxNQUFJLEVBQUUsdUJBRk87QUFHYkMsWUFBVSxFQUFFLEdBSEM7QUFJYkMsZUFBYSxFQUFFO0FBSkYsQ0FBakI7QUFPQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFlBQVUsRUFBRSxPQURPO0FBRW5CQyxjQUFZLEVBQUUsS0FGSztBQUduQkMsUUFBTSxFQUFFLDZCQUhXO0FBSW5CQyxhQUFXLEVBQUUsTUFKTTtBQUtuQkMsVUFBUSxFQUFFLE9BTFM7QUFNbkJDLFlBQVUsRUFBRSxNQU5PO0FBT25CQyxhQUFXLEVBQUU7QUFQTSxDQUF2Qjs7QUFXQSxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxVQUFBQyxhQUFhLEVBQUk7QUFDeEM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQ0ksbUJBREosRUFDeUJGLGFBRHpCO0FBR0gsR0FMeUIsRUFLdkIsRUFMdUIsQ0FBMUI7O0FBTUEscUJBQXNERyxrRUFBVyxDQUFDO0FBQUVMLFVBQU0sRUFBTkE7QUFBRixHQUFELENBQWpFO0FBQUEsTUFBUU0sWUFBUixnQkFBUUEsWUFBUjtBQUFBLE1BQXNCQyxhQUF0QixnQkFBc0JBLGFBQXRCO0FBQUEsTUFBcUNDLFlBQXJDLGdCQUFxQ0EsWUFBckM7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFJLFdBQUssRUFBRXRCLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDRHQUFTb0IsWUFBWSxFQUFyQjtBQUF5QixXQUFLLEVBQUVmLGNBQWhDO0FBQUEsOEJBQ0ksZ0dBQVdnQixhQUFhLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUdRQyxZQUFZLGdCQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFEsZ0JBRVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBYUg7O0dBdEJRVCxXO1VBT2lETSwwRDs7O0FBaUIzQ04sMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmlsZV91cGxvYWQuNjJkMDFlM2FiZTVlYWFkODNlYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnXHJcblxyXG5jb25zdCBoMV9zdHlsZSA9IHtcclxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgZm9udDogXCIyMHB4IEFyaWFsIHNhbnMtc2VyaWZcIixcclxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcclxuICAgIHRleHRSZW5kZXJpbmc6IFwib3B0aW1pemVMZWdpYmlsaXR5XCJcclxufVxyXG5cclxuY29uc3QgZHJvcHpvbmVfc3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICBib3JkZXI6IFwiMnB4IGRhc2hlZCByZ2IoMCwgMTM1LCAyNDcpXCIsXHJcbiAgICBib3JkZXJJbWFnZTogXCJub25lXCIsXHJcbiAgICBtYXhXaWR0aDogXCI1MDBweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCJcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbGVfdXBsb2FkKCkge1xyXG4gICAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soYWNjZXB0ZWRGaWxlcyA9PiB7XHJcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGZpbGVzXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIFwiYWNjZXB0ZWRGaWxlZHMgOiBcIiwgYWNjZXB0ZWRGaWxlc1xyXG4gICAgICAgICk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHsgb25Ecm9wIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e2gxX3N0eWxlfT5GaWxlIEF0dGFjaCBEZW1vPC9oMT5cclxuICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9IHN0eWxlPXtkcm9wem9uZV9zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0RyYWdBY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ecm9wIHRoZSBmaWxlcyBoZXJlIC4uLjwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmFnICduJyBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsZV91cGxvYWRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==