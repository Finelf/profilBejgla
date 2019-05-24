import {types} from '../Admin/adminActions'
import {types as userTypes} from '../auth/actions'
import { combineReducers}  from 'redux-immutable'

const isUserLoggedIn = (state = false, {type, payload}) => {
    switch (type) {
        case types.AUTHORIZE_USER_END:
            return true;
        case userTypes.SIGN_OUT_USER_END:
            return false;
        default:
            return state
    }
};
export default combineReducers({
    isUserLoggedIn,
})