import {types} from './actions'
import {combineReducers} from "redux-immutable";

const currentUser = (state = {}, {type, payload}) => {
    switch (type) {
        case types.AUTH_USER_END:
            return payload;
        case types.SIGN_OUT_USER_END:
            return {};
        default:
            return state
    }
};
const users = (state = [], {type, payload}) => ( type === types.FETCH_USERS_END ? payload : state);

export default combineReducers({
    currentUser,
    users
})