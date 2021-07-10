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
  textAlign: "center"
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
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
      style: dropzone_style,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", _objectSpread({}, getInputProps()), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), isDragActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: "Drop the files here ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: "Drag 'n' drop some files here, or click to select files"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZV91cGxvYWQuanMiXSwibmFtZXMiOlsiaDFfc3R5bGUiLCJ0ZXh0QWxpZ24iLCJkcm9wem9uZV9zdHlsZSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3JkZXJJbWFnZSIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZmlsZV91cGxvYWQiLCJvbkRyb3AiLCJ1c2VDYWxsYmFjayIsImFjY2VwdGVkRmlsZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNiQyxXQUFTLEVBQUM7QUFERyxDQUFqQjtBQUlBLElBQU1DLGNBQWMsR0FBRztBQUNuQkMsWUFBVSxFQUFFLE9BRE87QUFFbkJDLGNBQVksRUFBRSxLQUZLO0FBR25CQyxRQUFNLEVBQUUsNkJBSFc7QUFJbkJDLGFBQVcsRUFBRSxNQUpNO0FBS25CQyxVQUFRLEVBQUUsT0FMUztBQU1uQkMsWUFBVSxFQUFFLE1BTk87QUFPbkJDLGFBQVcsRUFBRTtBQVBNLENBQXZCOztBQVdBLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFVBQUFDLGFBQWEsRUFBSTtBQUN4QztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FDSSxtQkFESixFQUN5QkYsYUFEekI7QUFHSCxHQUx5QixFQUt2QixFQUx1QixDQUExQjs7QUFNQSxxQkFBc0RHLGtFQUFXLENBQUM7QUFBRUwsVUFBTSxFQUFOQTtBQUFGLEdBQUQsQ0FBakU7QUFBQSxNQUFRTSxZQUFSLGdCQUFRQSxZQUFSO0FBQUEsTUFBc0JDLGFBQXRCLGdCQUFzQkEsYUFBdEI7QUFBQSxNQUFxQ0MsWUFBckMsZ0JBQXFDQSxZQUFyQzs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUksV0FBSyxFQUFFbkIsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksNEdBQVNpQixZQUFZLEVBQXJCO0FBQXlCLFdBQUssRUFBRWYsY0FBaEM7QUFBQSw4QkFDSSxnR0FBV2dCLGFBQWEsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBR1FDLFlBQVksZ0JBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFFUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFhSDs7R0F0QlFULFc7VUFPaURNLDBEOzs7QUFpQjNDTiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlX3VwbG9hZC4yNGIzMjIyNjlkY2RlNjA4OGU2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSdcclxuXHJcbmNvbnN0IGgxX3N0eWxlID0ge1xyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbn1cclxuXHJcbmNvbnN0IGRyb3B6b25lX3N0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgYm9yZGVyOiBcIjJweCBkYXNoZWQgcmdiKDAsIDEzNSwgMjQ3KVwiLFxyXG4gICAgYm9yZGVySW1hZ2U6IFwibm9uZVwiLFxyXG4gICAgbWF4V2lkdGg6IFwiNTAwcHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaWxlX3VwbG9hZCgpIHtcclxuICAgIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKGFjY2VwdGVkRmlsZXMgPT4ge1xyXG4gICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBmaWxlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcImFjY2VwdGVkRmlsZWRzIDogXCIsIGFjY2VwdGVkRmlsZXNcclxuICAgICAgICApO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7IG9uRHJvcCB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXtoMV9zdHlsZX0+RmlsZSBBdHRhY2ggRGVtbzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfSBzdHlsZT17ZHJvcHpvbmVfc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnQWN0aXZlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHJvcCB0aGUgZmlsZXMgaGVyZSAuLi48L3A+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHJhZyAnbicgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbGVfdXBsb2FkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=