import {put, takeEvery, fork, call} from 'redux-saga/effects'
import {push} from "connected-react-router";
import {fromJS} from "immutable";
import {
    authorizeUserAsync,
    facebookLogin,
    fetchAllUsersAsync,
    isUserAuthorizedAsync,
    signOutUserAsync
} from "./authApi";
import {
    authorizeUserEnd,
    authUserEnd,
    fetchUsersEnd,
    signOutUserEnd,
    types
} from "./authActions";

export function* authSaga() {
    yield fork(checkAuthStatus);
    yield fork(fetchUsers);

    yield takeEvery(types.AUTH_USER_START, authUser);
    yield takeEvery(types.AUTHORIZE_USER, authorizeUser);
    yield takeEvery(types.SIGN_OUT_USER, signOutUserSaga)
}


function* checkAuthStatus() {
    const isUserAuthorized = yield call(isUserAuthorizedAsync);
    if (isUserAuthorized) {
        yield put(authorizeUserEnd());
        yield put(push('/dashboard'))
    } else {
        yield put(push('/404'))
    }
}

function* authUser() {
    const userInfo = yield call(facebookLogin);
    yield put(authUserEnd(fromJS(userInfo)));
    yield call(checkAuthStatus);
}

function* authorizeUser(email) {
    yield call(authorizeUserAsync, email)
}

function* fetchUsers() {
    const users = yield call(fetchAllUsersAsync);
    yield put(fetchUsersEnd(fromJS(users)))
}

function* signOutUserSaga() {
    yield call(signOutUserAsync);
    yield put(signOutUserEnd());
    yield put(push('/'))
}