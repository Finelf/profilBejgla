import {call, put, takeEvery, fork} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {push} from 'connected-react-router'
import {todoSaga} from '../TodoList/todoSagas';
import {routesSaga} from './routesSagas';
import {fromJS} from 'immutable'
import {
    authorizeUserEnd,
    types as adminTypes
} from '../Admin/adminActions'
import {
    authUserEnd,
    fetchUsersEnd,
    signOutUserEnd,
    types as authTypes
} from '../auth/actions'

import {
    facebookLogin,
    fetchAllUsers,
    isUserAuthorizedAsync
} from '../auth/firebaseAuth';
import {
    authorizeUserAsync,
} from "../Admin/api";
import {
    signOutUserAsync
} from "../auth/firebaseAuth";

export function* rootSaga() {
    yield fork(checkAuthStatus);

    //yield fork(todoSaga);
    yield fork(routesSaga);
    yield fork(fetchUsers);

    yield takeEvery(authTypes.AUTH_USER_START, authUser);
    yield takeEvery(adminTypes.AUTHORIZE_USER, authorizeUser);
    yield takeEvery(authTypes.SIGN_OUT_USER, signOutUserSaga)
}

function* fetchUsers() {
    const users = yield call(fetchAllUsers);
    yield put(fetchUsersEnd(fromJS(users)))
}

function* authUser() {
    const userInfo = yield call(facebookLogin);
    yield console.log('rootSaga:', userInfo);
    yield put(authUserEnd(fromJS(userInfo)));
    yield call(checkAuthStatus);
}

function* authorizeUser(email) {
    yield call(authorizeUserAsync, email)
}

function* checkAuthStatus() {
    console.log("runs");
    const isUserAuthorized = yield call(isUserAuthorizedAsync);
    console.log("isAuthorized?", isUserAuthorized);
    if (isUserAuthorized) {
        console.log("authorized");
        yield put(authorizeUserEnd());
        yield put(push('/dashboard'))
    } else {
        console.log("unauthorized");
        yield put(push('/404'))
    }
}

function* signOutUserSaga() {
    console.log("begin outting");
    yield call(signOutUserAsync);
    yield put(signOutUserEnd());
    yield put(push('/'))
}