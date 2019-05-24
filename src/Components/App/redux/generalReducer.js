import {types} from '../../auth/authActions'
import { combineReducers}  from 'redux-immutable'

const isUserAuthorized = (state = false, {type}) => {
    switch (type) {
        case types.AUTHORIZE_USER_END:
            return true;
        case types.SIGN_OUT_USER_END:
            return false;
        default:
            return state
    }
};
export default combineReducers({
    isUserAuthorized,
})