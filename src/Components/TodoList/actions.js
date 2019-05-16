export const types = {
    SET_CREATE_INPUT: "CREATE_INPUT",
    CREATE: "CREATE",
    CREATE_SUCCESS: "CREATE_SUCCESS",

    TOGGLE_LOADING: "TOGGLE_LOADING",
    GET_ALL_BEGIN: "GET_ALL_BEGIN",
    GET_ALL_SUCCESS: "GET_ALL_SUCCESS",
    GET_COMPLETE: "GET_COMPLETE",
    GET_INCOMPLETE: "GET_INCOMPLETE",

    TOGGLE_EDITING: "TOGGLE_EDITING",
    SET_UPDATE_INPUT:"UPDATE_INPUT",
    UPDATE: "UPDATE",
    UPDATE_SUCCESS: "UPDATE_SUCCESS",
    TOGGLE_DONE: "TOGGLE_DONE",
    TOGGLE_DONE_SUCCESS: "TOGGLE_DONE_SUCCESS",

    FILTER_UNDONE: "FILTER_UNDONE",

    DELETE: "DELETE",
    DELETE_SUCCESS: "DELETE_SUCCESS"
};

export const setCreateInput = (payload) => ({
    type: types.SET_CREATE_INPUT,
    payload: payload

});
export const create = (payload) => ({
    type: types.CREATE,
    payload: payload
});
export const createSuccess = (payload) =>({
    type: types.CREATE_SUCCESS,
    payload: payload
});

export const toggleLoading = () => ({
    type: types.TOGGLE_LOADING,
});
export const getAllBegin = () => ({
    type: types.GET_ALL_BEGIN
});
export const getAllSuccess = (payload) => ({
    type: types.GET_ALL_SUCCESS,
    payload: payload
});

export const toggleEditing = (id) => ({
    type: types.TOGGLE_EDITING,
    payload: id
});
export const setUpdateInput = (payload) => ({
    type: types.SET_UPDATE_INPUT,
    payload: payload
});
export const update = (payload) => ({
    type: types.UPDATE,
    payload: payload
});
export const updateSuccess = (payload) => ({
    type: types.UPDATE_SUCCESS,
    payload: payload
});
export const toggleDone = (payload) => ({
    type: types.TOGGLE_DONE,
    payload: payload
});
export const toggleDoneSuccess = (id) => ({
    type: types.TOGGLE_DONE_SUCCESS,
    payload: id
});


export const deleteTodo = (id) => ({
    type: types.DELETE,
    payload: id
});
export const deleteSuccess = (id) =>  ({
    type: types.DELETE_SUCCESS,
    payload: id
});
export const filterUndone = () => ({
    type: types.FILTER_UNDONE
});