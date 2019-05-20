import {types} from '../auth/actions'
import { combineReducers}  from 'redux-immutable'

const isUserLoggedIn = (state = false, {type}) => ( type === types.AUTH_USER_END ? true : state);

export default combineReducers({
    isUserLoggedIn,

})