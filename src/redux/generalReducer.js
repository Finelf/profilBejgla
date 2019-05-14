import {types} from './actions'

export default (state = false, {type, payload}) => {
    switch (type) {
        case types.AUTH_USER_END:
            return true;
        default:
            return state
    }
};