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
                        item.set('description', payload.inputValue) : item
                )
            );
        case types.COMPLETE_TODO:
            return state.map(item => {
                if (item.get('id') !== payload.id) {
                    return item
                } else {
                    return item.set('isDone', true).set('doneBy', payload.uid).set('doneDate', Date.now())
                }
            });
        case types.INCOMPLETE_TODO:
            return state.map(item => {
                if (item.get('id') !== payload.id) {
                    return item
                } else {
                    return item.set('isDone', false).set('doneBy', null)
                }
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

const isLoading = (state = false, {type}) => (type === types.TOGGLE_LOADING ? !state : state);
const editMode = (state = false, {type}) => (type === types.TOGGLE_EDITING ? !state : state);


export default combineReducers({
    todosData,
    isLoading,
    editMode,
})