export const getEditID = state => state.getIn(["data", "todoReducer", "editID"]);
export const getTodos = state => state.getIn(["data", "todoReducer", "todosData"]);
export const getIsLoading = state => state.getIn(["data", "todoReducer", "isLoading"]);
export const getCreateInputValue = state => state.getIn(["data", "todoReducer", "createInput"]);
export const getUpdateInputValue = state => state.getIn(["data", "todoReducer", "updateInput"]);

export const getCurrentUser = state => state.getIn(["data, user"]);