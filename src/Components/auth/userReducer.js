import {types} from './actions'

export default (state = {}, {type, payload}) => {
    switch (type) {
        case types.AUTH_USER_END:
            return payload;
        case types.AUTH_USER_FAIL:
            return !payload;
        default:
            return state
    }
};