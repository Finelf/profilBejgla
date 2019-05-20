import {combineReducers} from "redux-immutable";
import generalReducer from "./Components/App/generalReducer";
import userReducer from "./Components/auth/userReducer";
import todoReducer from "./Components/TodoList/todoReducer";
import {reducer as formReducer} from "redux-form/lib/immutable";
import { connectRouter } from 'connected-react-router/immutable'

export default (history) => combineReducers({
    router: connectRouter(history),
    general: generalReducer,
    data: combineReducers({
        user:userReducer,
        todoReducer
    }),
    form: formReducer
});