import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './Components/App/App';
import generalReducer from './Components/App/generalReducer'
import userReducer from './Components/auth/userReducer'
import {combineReducers} from 'redux-immutable'

import {rootSaga} from './Components/App/rootSagas';
import todoReducer from "./Components/TodoList/todoReducer";

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    general: generalReducer,
    data: combineReducers({
        user:userReducer,
        todoReducer
    })
});

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
