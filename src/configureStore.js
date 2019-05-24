import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {routerMiddleware} from 'connected-react-router/immutable'
import rootReducer from './rootReducer'

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
    ),
);

export default function configureStore(preloadedState) {
    return  createStore(
        rootReducer(history),
        preloadedState,
        enhancer
    );
}


