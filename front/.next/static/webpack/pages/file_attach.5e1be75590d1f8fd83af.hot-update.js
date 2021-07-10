webpackHotUpdate_N_E("pages/file_attach",{

/***/ "./pages/file_attach.js":
/*!******************************!*\
  !*** ./pages/file_attach.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout2 */ "./components/AppLayout2.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\nodebird2\\front\\pages\\file_attach.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var h1_style = {
  textAlign: "center",
  fontWeight: 900
};
var dropzone_style = {
  background: "white",
  borderRadius: "5px",
  border: "2px dashed rgb(0, 135, 247)",
  borderImage: "none",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto"
};

function file_attach() {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "\uD30C\uC77C \uCCA8\uBD80 prototype "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_AppLayout2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        style: h1_style,
        children: "File Attach Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
        style: dropzone_style,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", _objectSpread({}, getInputProps()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), isDragActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: "Drop the files here ..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          children: "Drag 'n' drop some files here, or click to select files"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(file_attach, "yd//yJtVY5DqPYzQY0xGsdgoRlk=", false, function () {
  return [react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"]];
});

/* harmony default export */ __webpack_exports__["default"] = (file_attach);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZV9hdHRhY2guanMiXSwibmFtZXMiOlsiaDFfc3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZHJvcHpvbmVfc3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYm9yZGVySW1hZ2UiLCJtYXhXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZpbGVfYXR0YWNoIiwib25Ecm9wIiwidXNlQ2FsbGJhY2siLCJhY2NlcHRlZEZpbGVzIiwiY29uc29sZSIsImxvZyIsInVzZURyb3B6b25lIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRHJhZ0FjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLFdBQVMsRUFBQyxRQURHO0FBRWJDLFlBQVUsRUFBRTtBQUZDLENBQWpCO0FBS0EsSUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxZQUFVLEVBQUUsT0FETztBQUVuQkMsY0FBWSxFQUFFLEtBRks7QUFHbkJDLFFBQU0sRUFBRSw2QkFIVztBQUluQkMsYUFBVyxFQUFFLE1BSk07QUFLbkJDLFVBQVEsRUFBRSxPQUxTO0FBTW5CQyxZQUFVLEVBQUUsTUFOTztBQU9uQkMsYUFBVyxFQUFFO0FBUE0sQ0FBdkI7O0FBV0EsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsVUFBQUMsYUFBYSxFQUFJO0FBQ3hDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUNJLG1CQURKLEVBQ3lCRixhQUR6QjtBQUdILEdBTHlCLEVBS3ZCLEVBTHVCLENBQTFCOztBQU1BLHFCQUFzREcsa0VBQVcsQ0FBQztBQUFFTCxVQUFNLEVBQU5BO0FBQUYsR0FBRCxDQUFqRTtBQUFBLE1BQVFNLFlBQVIsZ0JBQVFBLFlBQVI7QUFBQSxNQUFzQkMsYUFBdEIsZ0JBQXNCQSxhQUF0QjtBQUFBLE1BQXFDQyxZQUFyQyxnQkFBcUNBLFlBQXJDOztBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLDhEQUFEO0FBQUEsOEJBQ0k7QUFBSSxhQUFLLEVBQUVwQixRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw0R0FBU2tCLFlBQVksRUFBckI7QUFBeUIsYUFBSyxFQUFFZixjQUFoQztBQUFBLGdDQUNJLGdHQUFXZ0IsYUFBYSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBR1FDLFlBQVksZ0JBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFEsZ0JBRVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQSxrQkFESjtBQW1CSDs7R0E1QlFULFc7VUFPaURNLDBEOzs7QUF1QjNDTiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlX2F0dGFjaC41ZTFiZTc1NTkwZDFmOGZkODNhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0MiBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXQyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGgxX3N0eWxlID0ge1xyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICBmb250V2VpZ2h0OiA5MDAsXHJcbn1cclxuXHJcbmNvbnN0IGRyb3B6b25lX3N0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgYm9yZGVyOiBcIjJweCBkYXNoZWQgcmdiKDAsIDEzNSwgMjQ3KVwiLFxyXG4gICAgYm9yZGVySW1hZ2U6IFwibm9uZVwiLFxyXG4gICAgbWF4V2lkdGg6IFwiNzAwcHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaWxlX2F0dGFjaCgpIHtcclxuICAgIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKGFjY2VwdGVkRmlsZXMgPT4ge1xyXG4gICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBmaWxlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcImFjY2VwdGVkRmlsZWRzIDogXCIsIGFjY2VwdGVkRmlsZXNcclxuICAgICAgICApO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7IG9uRHJvcCB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+7YyM7J28IOyyqOu2gCBwcm90b3R5cGUgPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0Mj5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17aDFfc3R5bGV9PkZpbGUgQXR0YWNoIERlbW88L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9IHN0eWxlPXtkcm9wem9uZV9zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdBY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHJvcCB0aGUgZmlsZXMgaGVyZSAuLi48L3A+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0Mj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbGVfYXR0YWNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9