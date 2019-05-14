//export const getUserLoginStatus = state => state.getIn(["general", "isUserLoggedIn"]);
export const getUserLoginStatus = state => state.get("general");