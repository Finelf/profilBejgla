import { put, takeLatest} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import {types} from './routesActions'

export function* routesSaga() {
    yield takeLatest(types.PUSH_ROUTE, pushRoute);

}
function* pushRoute ({payload}) {
    yield put(push(`/${payload}`))
}
