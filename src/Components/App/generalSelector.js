export const getUserLoginStatus = state => state.getIn(['general', 'isUserLoggedIn']);
export const getListOfUsers = state => state.getIn(['data', 'userReducer', 'users']);