export const types = {
    AUTH_USER_START: 'AUTH_USER_START',
    AUTH_USER_END: 'AUTH_USER_END',
    AUTH_USER_FAIL: 'AUTH_USER_FAIL',

    FETCH_USERS_END: 'FETCH_USERS_END',
    DEFAULT_ACTION: 'DEFAULT_ACTION',
    SIGN_OUT_USER: 'SIGN_OUT_USER',
    SIGN_OUT_USER_END: 'SIGN_OUT_USER_END'
};

export const authUserStart = () => ({
    type: types.AUTH_USER_START
});
export const authUserEnd = (payload) => ({
    type: types.AUTH_USER_END,
    payload: payload
});
export const fetchUsersEnd = (payload) => ({
    type: types.FETCH_USERS_END,
    payload:payload
});
export const signOutUser = () => ({
    type: types.SIGN_OUT_USER
});
export const signOutUserEnd = () => ({
    type: types.SIGN_OUT_USER_END
});