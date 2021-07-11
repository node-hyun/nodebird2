// import { all } from 'redux-saga/effects';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS
} from '../reducers/user';

function logInAPI(data) {
    console.log("로그인 data from saga : ", data);
    return axios.post('/user/login', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn');
        // const result = yield call(logInAPI);
        // yield delay(2000);
        const result = yield call(logInAPI, action.data);
        console.log("result.data(from server) : ", result.data);

        yield put({
            type: LOG_IN_SUCCESS,
            // data: action.data,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI(data) {
    return axios.post('/user/logout', data);
}

function* logOut(action) {
    try {
        console.log('saga logout');
        const result = yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI() {
    return axios.post('/api/follow');
}
function* follow(action) {
    try {
        // const result = yield call(followAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}
function* unfollow(action) {
    try {
        // const result = yield call(unfollowAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}
function signUpAPI(data) {
    console.log("saga signUpAPI 실행 확인 data :", data);
    return axios.post('/user', data);
}
function* signUp(action) {
    try {
        // yield delay(1000);
        // console.log("action.data(회원 가입 정보) from saga : ", action.data);
        const result = yield call(signUpAPI, action.data);
        console.log("response for 회원 가입 at saga : ", result);

        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function loadUserAPI() {
    return axios.get('/user');
}
function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchLogOut() {
    console.log("saga watch 실행 check");
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchLogIn() {
    console.log("saga watch 실행 check");
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchSignUp),
        fork(watchLoadUser),

    ]);
}
