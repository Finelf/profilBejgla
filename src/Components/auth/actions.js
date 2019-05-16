export const types = {
    AUTH_USER_START: 'AUTH_USER_START',
    AUTH_USER_END: 'AUTH_USER_END',
    AUTH_USER_FAIL: 'AUTH_USER_FAIL',

    DEFAULT_ACTION: 'DEFAULT_ACTION'
};

export const authUserStart = () => ({
    type: types.AUTH_USER_START
});
export const authUserEnd = (payload) => ({
    type: types.AUTH_USER_END,
    payload: payload
});