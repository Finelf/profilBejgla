import {call, put, takeEvery} from 'redux-saga/effects'
import {fromJS} from 'immutable'
import {
    authUserEnd,

    types
} from '../redux/actions'

import {
    facebookLogin
} from "../firebase/firebaseApi";

export function* rootSaga() {
    yield takeEvery(types.AUTH_USER_START, authUser);
}

function* authUser() {
    const userInfo = yield call(facebookLogin);
    yield console.log("saga:", userInfo);
    yield put(authUserEnd(fromJS(userInfo)));
    window.aaa.push('/')
}
