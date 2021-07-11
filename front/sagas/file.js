import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import {
    ADD_FILE_REQUEST,
    ADD_FILE_SUCCESS,
    ADD_FILE_FAILURE,
} from '../reducers/file';

function addFileAPI(data) {
    return axios.post('/user/login', data);
}

function* addFile(action) {
    try {
        console.log("addFile [saga] check : ", action.data);
        // const result = yield call(addFile, action.data);
        // console.log("result.data(from server) : ", result.data);
        // yield delay(1000);

        yield put({
            type: ADD_FILE_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_FILE_FAILURE,
            error: err.response.data,
        });
    }
}



function* watchAddFile() {
    console.log("watchAddFile 실행 check");
    yield takeLatest(ADD_FILE_REQUEST, addFile);
}

export default function* fileSaga() {
    yield all([
        fork(watchAddFile),
    ]);
}
