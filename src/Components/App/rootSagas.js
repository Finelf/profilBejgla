import {call, put, takeEvery, fork} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import { push } from 'connected-react-router'
import {todoSaga} from "../TodoList/todoSagas";
import {fromJS} from 'immutable'
import {
    authUserEnd,

    types
} from '../auth/actions'

import {
    facebookLogin
} from "../auth/firebaseAuth";

export function* rootSaga() {
    yield fork(todoSaga);

    yield takeEvery(types.AUTH_USER_START, authUser);
}

function* authUser() {
    const userInfo = yield call(facebookLogin);
    yield console.log("saga:", userInfo);
    yield put(authUserEnd(fromJS(userInfo)));
    yield put (push('/dashboard'))
}
