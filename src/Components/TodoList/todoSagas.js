import {call, put, takeEvery} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import {fromJS} from 'immutable'
import {
    createSuccess,
    toggleLoading,
    toggleEditing,
    updateSuccess,
    incompleteTodo,
    completeTodo,
    getAllSuccess,
    deleteSuccess,
    types
} from './todoActions'
import {
    fetchTodos,
    postTodoAsync,
    updateTodoAsync,
    toggleTodoAsync,
    deleteTodoAsync
} from './todoApi'

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
}

function* toggleDoneTodo({payload}) {
    yield call(toggleTodoAsync, payload);
    if(payload.isDone){
        yield put(incompleteTodo(payload))
    }else {
        yield put(completeTodo(payload))
    }
}

function* deleteTodo({payload}) {
    yield call(deleteTodoAsync, payload);
    yield put(deleteSuccess(payload));
    yield put(push('/dashboard'))
}