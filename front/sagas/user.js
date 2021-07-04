// import { all } from 'redux-saga/effects';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from '../reducers/user';

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn');
        // const result = yield call(logInAPI);
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
            // data: { ...action.data, nickname: "hyun" },
            data: action.data,

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
    return axios.post('/api/login', data);
}

function* logOut(action) {
    try {
        console.log('saga logout');
        // const result = yield call(logInAPI);
        yield delay(2000);
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
    ]);
}
