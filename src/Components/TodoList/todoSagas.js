import {call, put, takeEvery} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import {fromJS} from 'immutable'
import {
    createSuccess,
    toggleLoading,
    toggleEditing,
    setUpdateInput,
    updateSuccess,
    getAllSuccess,
    toggleDoneSuccess,
    deleteSuccess,
    types,
} from './actions'
import {
    fetchTodos,
    postTodoAsync,
    updateTodoAsync,
    incompleteTodoAsync,
    completeTodoAsync,
    deleteTodoAsync
} from './api'

export function* todoSaga() {
    yield call(getAllTodos);

    yield takeEvery(types.CREATE, postTodo);
    yield takeEvery(types.GET_ALL_BEGIN, getAllTodos);
    yield takeEvery(types.UPDATE, updateTodo);
    yield takeEvery(types.TOGGLE_DONE, toggleDoneTodo);
    yield takeEvery(types.DELETE, deleteTodo);
}

function* postTodo({payload}) {
    const response = yield call(postTodoAsync, payload);
    yield put(createSuccess(fromJS(response)));
    yield put(push('/dashboard'))
}

function* getAllTodos() {
    yield put(toggleLoading());
    const data = yield call(fetchTodos);
    yield put(getAllSuccess(fromJS(data)));
    yield put(toggleLoading());
}

function* updateTodo({payload}) {
    let {id, inputValue} = payload;
    yield call(updateTodoAsync, inputValue, id);
    yield put(updateSuccess({inputValue, id}));
    yield put(toggleEditing(''));
    yield put(setUpdateInput(''));
}

function* toggleDoneTodo({payload}) {
    if (payload.completed === true) {
        yield call(incompleteTodoAsync, payload.id)
    } else {
        yield call(completeTodoAsync, payload.id)
    }
    yield put(toggleDoneSuccess(payload.id));
}

function* deleteTodo({payload}) {
    yield call(deleteTodoAsync, payload);
    yield put(deleteSuccess(payload));
}