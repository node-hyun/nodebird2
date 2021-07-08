webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  // isLoggedIn: false,
  // signUpData: {},
  // loginData: {},
  me: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    // saga에서 넘어온 data
    nickname: 'terecal',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '부기초'
    }, {
      nickname: 'Chanho Lee'
    }, {
      nickname: 'neue zeal'
    }],
    Followers: [{
      nickname: '부기초'
    }, {
      nickname: 'Chanho Lee'
    }, {
      nickname: 'neue zeal'
    }]
  });
};

var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "LOG_IN":
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 me: action.data,
//             };
//         case "LOG_OUT":
//             return {
//                 ...state,
//                 isLoggedIn: false,
//             };
//         default:
//             return state;
//     }
// };

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        return _objectSpread(_objectSpread({}, state), {}, {
          logInLoading: true,
          logInError: null,
          logInDone: false
        });

      case LOG_IN_SUCCESS:
        return _objectSpread(_objectSpread({}, state), {}, {
          logInLoading: false,
          logInDone: true,
          me: dummyUser(action.data)
        });

      case LOG_IN_FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          logInLoading: false,
          logInError: action.data
        });

      case LOG_OUT_REQUEST:
        return _objectSpread(_objectSpread({}, state), {}, {
          logOutLoading: true,
          logouterror: null,
          logOutDone: false
        });

      case LOG_OUT_SUCCESS:
        return _objectSpread(_objectSpread({}, state), {}, {
          logOutLoading: false,
          logOutDone: true,
          me: null
        });

      case LOG_OUT_FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          logOutLoading: false,
          logouterror: action.error
        });

      case ADD_POST_TO_ME:
        return _objectSpread(_objectSpread({}, state), {}, {
          me: _objectSpread(_objectSpread({}, state.me), {}, {
            Posts: [{
              id: action.data
            }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
          })
        });

      case REMOVE_POST_OF_ME:
        return _objectSpread(_objectSpread({}, state), {}, {
          me: _objectSpread(_objectSpread({}, state.me), {}, {
            Posts: state.me.Posts.filter(function (v) {
              return v.id !== action.data;
            })
          })
        });

      default:
        return state;
    }
  });
}); // const reducer = (state = initialState, action) => {
//     switch (action.type) {
//     }
// };
// export default reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwibG9nb3V0ZXJyb3IiLCJlcnJvciIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBQyxJQUFFLEVBQUUsSUFKb0I7QUFLeEJDLGNBQVksRUFBRSxLQUxVO0FBS0g7QUFDckJDLFdBQVMsRUFBRSxLQU5hO0FBT3hCQyxZQUFVLEVBQUUsSUFQWTtBQVN4QkMsZUFBYSxFQUFFLEtBVFM7QUFTRjtBQUN0QkMsWUFBVSxFQUFFLEtBVlk7QUFXeEJDLGFBQVcsRUFBRTtBQVhXLENBQXJCOztBQWNQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQ7QUFBQSx5Q0FDWEEsSUFEVztBQUNMO0FBQ1RDLFlBQVEsRUFBRSxTQUZJO0FBR2RDLE1BQUUsRUFBRSxDQUhVO0FBSWRDLFNBQUssRUFBRSxDQUFDO0FBQUVELFFBQUUsRUFBRTtBQUFOLEtBQUQsQ0FKTztBQUtkRSxjQUFVLEVBQUUsQ0FBQztBQUFF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Yy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiMDdhZmMwNWJiZTdhODIzMjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIC8vIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgLy8gc2lnblVwRGF0YToge30sXHJcbiAgICAvLyBsb2dpbkRhdGE6IHt9LFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSwgLy8gc2FnYeyXkOyEnCDrhJjslrTsmKggZGF0YVxyXG4gICAgbmlja25hbWU6ICd0ZXJlY2FsJyxcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxuICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgICAgIGNhc2UgXCJMT0dfSU5cIjpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuXHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgY2FzZSBcIkxPR19PVVRcIjpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dvdXRlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBsb2dPdXREb25lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0ZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==