module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\nodebird2\\front\\pages\\_app.js";









const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        charSet: "utf8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
}; // export default wrapper.withRedux(NodeBird);

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird)));

/***/ }),

/***/ "./reducers/file.js":
/*!**************************!*\
  !*** ./reducers/file.js ***!
  \**************************/
/*! exports provided: initialState, ADD_FILE_REQUEST, ADD_FILE_SUCCESS, ADD_FILE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FILE_REQUEST", function() { return ADD_FILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FILE_SUCCESS", function() { return ADD_FILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FILE_FAILURE", function() { return ADD_FILE_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  filesToUpload: [],
  addFileLoading: false,
  addFileDone: false,
  addFileError: null
}; // const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: '제로초',
//     },
//     Images: [],
//     Comments: [],
// });

const ADD_FILE_REQUEST = 'ADD_FILE_REQUEST';
const ADD_FILE_SUCCESS = 'ADD_FILE_SUCCESS';
const ADD_FILE_FAILURE = 'ADD_FILE_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case ADD_FILE_REQUEST:
        draft.FileLoading = true;
        draft.FileDone = false;
        draft.FileError = null;
        break;

      case ADD_FILE_SUCCESS:
        draft.addFileLoading = false;
        draft.addFileDone = true;
        draft.filesToUpload.push(...action.data);
        break;

      case ADD_FILE_FAILURE:
        draft.addFileLoading = false;
        draft.addFileError = action.error;
        break;

      default:
        return state;
    }
  });
}); // export default reducer;

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file */ "./reducers/file.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"],
  file: _file__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  hasMorePosts: true
}; // 게시글 생성(using faker) 함수 

const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Commeents: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
})); // 최초 게시글 10개 설정

initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '제로초'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "제로초"
  }
});

const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        // return {
        //     ...state,
        //     addCommentLoading: true,
        //     addCommentDone: false,
        //     addCommentError: null,
        // };
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        // 댓글이 달릴 포스팅 객체 찾기
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        console.log("posts 개수 :", draft.mainPosts.length);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      default:
        return state;
    }
  });
}); // export default reducer;

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, REMOVE_POST_OF_ME, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
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
  logOutError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
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

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
        draft.me = action.data;
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
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.me = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      default:
        // return state;
        break;
    } // switch 문 종료 

  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/file.js":
/*!***********************!*\
  !*** ./sagas/file.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fileSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/file */ "./reducers/file.js");




function addFileAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* addFile(action) {
  try {
    console.log("addFile [saga] check : ", action.data); // const result = yield call(addFile, action.data);
    // console.log("result.data(from server) : ", result.data);
    // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_file__WEBPACK_IMPORTED_MODULE_2__["ADD_FILE_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_file__WEBPACK_IMPORTED_MODULE_2__["ADD_FILE_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddFile() {
  console.log("watchAddFile 실행 check");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_file__WEBPACK_IMPORTED_MODULE_2__["ADD_FILE_REQUEST"], addFile);
}

function* fileSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddFile)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file */ "./sagas/file.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_file__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
// import { all } from 'redux-saga/effects';





function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate();
    console.log("saga action.data : ", action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data.text // 입력폼에 입력한 데이터가 여기까지 넘어옴

      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  console.log("action.data from saga : ", action.data);

  try {
    // const result = yield call(addCommentAPI, action.data);
    console.log("saga comment action.data : ", action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.log("댓글 에러 : ", err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostsAPI(data) {
  return axios.get('/api/posts', data);
}

function* loadPosts(action) {
  console.log("loadPosts excute check at saga");

  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["generateDummyPost"])(10)
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
// import { all } from 'redux-saga/effects';




function logInAPI(data) {
  console.log("로그인 data from saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn'); // const result = yield call(logInAPI);
    // yield delay(2000);

    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    console.log("result.data(from server) : ", result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      // data: action.data,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout', data);
}

function* logOut(action) {
  try {
    console.log('saga logout');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  console.log("saga signUpAPI 실행 확인 data :", data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    // yield delay(1000);
    // console.log("action.data(회원 가입 정보) from saga : ", action.data);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log("response for 회원 가입 at saga : ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchLogOut() {
  console.log("saga watch 실행 check");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchLogIn() {
  console.log("saga watch 실행 check");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





;


const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9maWxlLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9maWxlLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwiZmlsZXNUb1VwbG9hZCIsImFkZEZpbGVMb2FkaW5nIiwiYWRkRmlsZURvbmUiLCJhZGRGaWxlRXJyb3IiLCJBRERfRklMRV9SRVFVRVNUIiwiQUREX0ZJTEVfU1VDQ0VTUyIsIkFERF9GSUxFX0ZBSUxVUkUiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJGaWxlTG9hZGluZyIsIkZpbGVEb25lIiwiRmlsZUVycm9yIiwicHVzaCIsImRhdGEiLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImZpbGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiaGFzTW9yZVBvc3RzIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZWVudHMiLCJzZW50ZW5jZSIsImNvbmNhdCIsImR1bW15UG9zdCIsIkNvbW1lbnRzIiwiZHVtbXlDb21tZW50IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwidW5zaGlmdCIsImZpbmQiLCJ2IiwicG9zdElkIiwiZmlsdGVyIiwibGVuZ3RoIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJhZGRGaWxlQVBJIiwiYXhpb3MiLCJhZGRGaWxlIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaEFkZEZpbGUiLCJ0YWtlTGF0ZXN0IiwiZmlsZVNhZ2EiLCJhbGwiLCJmb3JrIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJkZWxheSIsInRleHQiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsImxvZ0luQVBJIiwibG9nSW4iLCJyZXN1bHQiLCJjYWxsIiwibG9nT3V0QVBJIiwibG9nT3V0IiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsInNpZ25VcEFQSSIsInNpZ25VcCIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hTaWduVXAiLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hGb2xsb3ciLCJ3YXRjaExvZ091dCIsIndhdGNoTG9nSW4iLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDaEMsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFB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c0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcclxuXHJcblxyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGY4XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7XHJcblxyXG5cclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZpbGVzVG9VcGxvYWQ6IFtdLFxyXG4gICAgYWRkRmlsZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkRmlsZURvbmU6IGZhbHNlLFxyXG4gICAgYWRkRmlsZUVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICBpZDogZGF0YS5pZCxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0ZJTEVfUkVRVUVTVCA9ICdBRERfRklMRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9GSUxFX1NVQ0NFU1MgPSAnQUREX0ZJTEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfRklMRV9GQUlMVVJFID0gJ0FERF9GSUxFX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9GSUxFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5GaWxlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5GaWxlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuRmlsZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9GSUxFX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRGaWxlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkRmlsZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZmlsZXNUb1VwbG9hZC5wdXNoKC4uLmFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9GSUxFX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRGaWxlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkRmlsZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgZmlsZSBmcm9tIFwiLi9maWxlXCI7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG4gICAgZmlsZSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcblxyXG59O1xyXG5cclxuLy8g6rKM7Iuc6riAIOyDneyEsSh1c2luZyBmYWtlcikg7ZWo7IiYIFxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgIH1dLFxyXG4gICAgQ29tbWVlbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpO1xyXG5cclxuLy8g7LWc7LSIIOqyjOyLnOq4gCAxMOqwnCDshKTsoJVcclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QoMTApXHJcbilcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDogZGF0YSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIC8vIOuMk+q4gOydtCDri6zrprQg7Y+s7Iqk7YyFIOqwneyytCDssL7quLBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdHMg6rCc7IiYIDpcIiAsIGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6ICd0ZXJlMScgfSwgeyBuaWNrbmFtZTogJ3RlcmUyJyB9LCB7IG5pY2tuYW1lOiAndGVyZTMnIH1dLFxyXG4gICAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogJ2h5dW4xJyB9LCB7IG5pY2tuYW1lOiAnaHl1bjInIH0sIHsgbmlja25hbWU6ICdoeXVuMycgfV0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiTE9HX0lOX1JFUVVFU1RcIjpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nSW5Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfSU5fU1VDQ0VTU1wiOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxPR19JTl9GQUlMVVJFXCI6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTE9HX09VVF9SRVFVRVNUXCI6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfT1VUX1NVQ0NFU1NcIjpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfT1VUX0ZBSUxVUkVcIjpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgLy8gc3dpdGNoIOusuCDsooXro4wgXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBBRERfRklMRV9SRVFVRVNULFxyXG4gICAgQUREX0ZJTEVfU1VDQ0VTUyxcclxuICAgIEFERF9GSUxFX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvZmlsZSc7XHJcblxyXG5mdW5jdGlvbiBhZGRGaWxlQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkRmlsZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRGaWxlIFtzYWdhXSBjaGVjayA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRGaWxlLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHQuZGF0YShmcm9tIHNlcnZlcikgOiBcIiwgcmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfRklMRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfRklMRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkRmlsZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwid2F0Y2hBZGRGaWxlIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0ZJTEVfUkVRVUVTVCwgYWRkRmlsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBmaWxlU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZEZpbGUpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBmaWxlU2FnYSBmcm9tICcuL2ZpbGUnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhmaWxlU2FnYSksXHJcbiAgICBdKTtcclxufVxyXG4iLCIvLyBpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QsXHJcbiAgICBcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FnYSBhY3Rpb24uZGF0YSA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YS50ZXh0LCAvLyDsnoXroKXtj7zsl5Ag7J6F66Cl7ZWcIOuNsOydtO2EsOqwgCDsl6zquLDquYzsp4Ag64SY7Ja07Ji0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YSBmcm9tIHNhZ2EgOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhZ2EgY29tbWVudCBhY3Rpb24uZGF0YSA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsl5Drn6wgOiBcIiwgZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZFBvc3RzIGV4Y3V0ZSBjaGVjayBhdCBzYWdhXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG5cclxuICAgIF0pO1xyXG59XHJcbiIsIi8vIGltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSxcclxuICAgIEZPTExPV19SRVFVRVNULFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1NcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IGRhdGEgZnJvbSBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgbG9nSW4nKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJKTtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgyMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQuZGF0YShmcm9tIHNlcnZlcikgOiBcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ291dCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvdycpO1xyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2Egc2lnblVwQVBJIOyLpO2WiSDtmZXsnbggZGF0YSA6XCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YSjtmozsm5Ag6rCA7J6FIOygleuztCkgZnJvbSBzYWdhIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgZm9yIO2ajOybkCDqsIDsnoUgYXQgc2FnYSA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2FnYSB3YXRjaCDsi6TtlokgY2hlY2tcIik7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2FnYSB3YXRjaCDsi6TtlokgY2hlY2tcIik7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcblxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJzs7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICAgIFxyXG4gICAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=