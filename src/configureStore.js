import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {routerMiddleware} from 'connected-react-router/immutable'
import rootReducer from './rootReducer'

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return  createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware,
            ),
        ),
    );
}


