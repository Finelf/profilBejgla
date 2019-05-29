import {fork} from 'redux-saga/effects';
import {authSaga} from '../auth/authSagas'
import {todoSaga} from '../TodoList/todoSagas'
import {routesSaga} from './routes/routesSagas';

export function* rootSaga() {
    yield fork(authSaga);
    yield fork(todoSaga);
    yield fork(routesSaga);
}

