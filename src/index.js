import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App';
import generalReducer from './redux/generalReducer'
import userReducer from './redux/userReducer'
import {combineReducers} from 'redux-immutable'

import * as serviceWorker from './serviceWorker'
import { rootSaga } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    general: generalReducer,
    data: userReducer
});

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();