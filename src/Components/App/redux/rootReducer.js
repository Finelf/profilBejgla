import {combineReducers} from 'redux-immutable';
import generalReducer from './generalReducer';
import userReducer from '../../auth/authReducer';
import todoReducer from '../../TodoList/todoReducer';
import {reducer as formReducer} from 'redux-form/lib/immutable';
import {connectRouter} from 'connected-react-router/immutable'

export default (history) => combineReducers({
    router: connectRouter(history),
    general: generalReducer,
    data: combineReducers({
        userReducer,
        todoReducer
    }),
    form: formReducer
});