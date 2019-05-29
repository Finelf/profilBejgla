export const getTodos = state => state.getIn(['data', 'todoReducer', 'todosData']);
export const getCurrentUser = state => state.getIn(['data', 'userReducer', 'currentUser']);
export const getListOfUsers = state => state.getIn(['data', 'userReducer', 'users']);

export const getIsLoading = state => state.getIn(['data', 'todoReducer', 'isLoading']);
export const getEditMode = state => state.getIn(['data', 'todoReducer', 'editMode']);
export const getUserAuthStatus = state => state.getIn(['general', 'isUserAuthorized']);

export const getPhoto = (users, doneBy) => {
    const a = users.find(user => doneBy === user.get("uid"));
    return a ? a.get('photoUrl') : undefined
};