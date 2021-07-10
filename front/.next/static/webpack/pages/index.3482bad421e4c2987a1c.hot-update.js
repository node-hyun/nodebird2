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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  me: null,
  signUpData: {},
  loginData: {},
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '제로초',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: 'tere1'
    }, {
      nickname: 'tere2'
    }, {
      nickname: 'tere3'
    }],
    Followers: [{
      nickname: 'hyun1'
    }, {
      nickname: 'hyun2'
    }, {
      nickname: 'hyun3'
    }]
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        // return {
        //     ...state,
        //     logInLoading: true,
        // };
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case "LOG_IN_SUCCESS":
        // return {
        //     ...state,
        //     logInLoading: false,
        //     logInDone: true,
        //     me: dummyUser(action.data)
        // };
        draft.logInDone = true;
        draft.logInLoading = false;
        draft.me = dummyUser(action.data);
        break;

      case "LOG_IN_FAILURE":
        // return {
        //     ...state,
        //     logInLoading: false,
        //     logInDone: false,
        // };
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case "LOG_OUT_REQUEST":
        // return {
        //     ...state,
        //     logOutLoading: true,
        // };
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = false;
        break;

      case "LOG_OUT_SUCCESS":
        // return {
        //     ...state,
        //     logOutLoading: false,
        //     logOutDone: true,
        //     me: null,
        // };
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case "LOG_OUT_FAILURE":
        // return {
        //     ...state,
        //     logOutLoading: false,
        //     logOutDone: false,
        // };
        draft.logOutLoading = false, draft.logOutDone = false;

      case ADD_POST_TO_ME:
        // return {
        //     ...state,
        //     me: {
        //         ...state.me,
        //         Posts: [{ id: action.data }, ...state.me.Posts],
        //     },
        // };
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        // return {
        //     ...state,
        //     me: {
        //         ...state.me,
        //         Posts: state.me.Posts.filter((v) => v.id !== action.data),
        //     }
        // }
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      default:
        // return state;
        break;
    } // switch 문 종료 

  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLElBQUUsRUFBRSxJQURvQjtBQUV4QkMsWUFBVSxFQUFFLEVBRlk7QUFHeEJDLFdBQVMsRUFBRSxFQUhhO0FBSXhCQyxjQUFZLEVBQUUsS0FKVTtBQUlIO0FBQ3JCQyxXQUFTLEVBQUUsS0FMYTtBQU14QkMsWUFBVSxFQUFFLElBTlk7QUFPeEJDLGVBQWEsRUFBRSxLQVBTO0FBT0Y7QUFDdEJDLFlBQVUsRUFBRSxLQVJZO0FBU3hCQyxhQUFXLEVBQUU7QUFUVyxDQUFyQjtBQVlBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFl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QUFLLENBQUM1QixFQUFOLENBQVNxQixLQUFULENBQWVXLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNiLEVBQUYsS0FBU00sTUFBTSxDQUFDUixJQUF2QjtBQUFBLFNBQXRCLENBQWpCO0FBQ0E7O0FBQ0o7QUFDSTtBQUNBO0FBaEZSLEtBRDZCLENBa0YxQjs7QUFDTixHQW5GYSxDQUFkO0FBb0ZILENBckZEOztBQXVGZU0sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ4MmJhZDQyMWU0YzI5ODdhMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ3RlcmUxJyB9LCB7IG5pY2tuYW1lOiAndGVyZTInIH0sIHsgbmlja25hbWU6ICd0ZXJlMycgfV0sXHJcbiAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAnaHl1bjEnIH0sIHsgbmlja25hbWU6ICdoeXVuMicgfSwgeyBuaWNrbmFtZTogJ2h5dW4zJyB9XSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfSU5fUkVRVUVTVFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dJbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxPR19JTl9TVUNDRVNTXCI6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfSU5fRkFJTFVSRVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxPR19PVVRfUkVRVUVTVFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dPdXRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTE9HX09VVF9TVUNDRVNTXCI6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTE9HX09VVF9GQUlMVVJFXCI6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWU6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gIC8vIHN3aXRjaCDrrLgg7KKF66OMIFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9