import {call, put, takeEvery, fork} from 'redux-saga/effects'
import {todoSaga} from "../Components/TodoList/todoSagas";
import {fromJS} from 'immutable'
import {
    authUserEnd,

    types
} from '../redux/actions'

import {
    facebookLogin
} from "../firebase/firebaseApi";

export function* rootSaga() {
    yield fork(todoSaga);

    yield takeEvery(types.AUTH_USER_START, authUser);
}

function* authUser() {
    const userInfo = yield call(facebookLogin);
    yield console.log("saga:", userInfo);
    yield put(authUserEnd(fromJS(userInfo)));
    window.aaa.push('/')
}
