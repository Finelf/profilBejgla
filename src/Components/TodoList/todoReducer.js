import {List} from 'immutable'
import {combineReducers} from 'redux-immutable'
import {types} from './todoActions'

const todosData = (state = List(), {type, payload}) => {
    switch (type) {
        case types.CREATE_SUCCESS:
            return state.insert(0, payload);
        case types.GET_ALL_SUCCESS:
            return payload;
        case types.UPDATE_SUCCESS:
            return state.map(item => (
                    item.get('id') === payload.id ?
                        item.set('text', payload.inputValue) : item
                )
            );
        case types.TOGGLE_DONE_SUCCESS:
            return state.map(item => {
                if (item.get('id') !== payload) {
                    return item
                }
                return item.set('completed', !item.get('completed'))
            });
        case types.DELETE_SUCCESS:
            return state.filter((item) => item.get('id') !== payload);
        case types.FILTER_DONE:
            return state.filter((item) => item.get('completed') === true);
        case types.FILTER_UNDONE:
            return state.filter((item) => item.get('completed') === false);
        default:
            return state
    }
};

const isLoading = (state = false, {type}) => ( type === types.TOGGLE_LOADING ? !state : state);
const editID = (state = '', {type, payload}) => {
    if (type === types.TOGGLE_EDITING) {
        return payload === state ? null : payload
    } else {
        return state
    }
};
const createInput = (state = '', {type, payload}) => (type === types.SET_CREATE_INPUT ? payload : state);
const updateInput = (state = '', {type, payload}) => (type === types.SET_UPDATE_INPUT ? payload : state);

export default combineReducers({
    todosData,
    isLoading,
    editID,
    createInput,
    updateInput,
})