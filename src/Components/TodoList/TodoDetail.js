import React from "react";
import {getCurrentUser, getEditMode, getListOfUsers, getTodos} from "../App/generalSelectors";
import {connect} from "react-redux";
import {deleteTodo, toggleDone, toggleEditing} from "./todoActions";
import {pushRoute} from "../App/routes/routesActions";
import UpdateTodoForm from "./UpdateTodo";
import PhotoCheckbox from "../styledComponents/PhotoCheckbox";
import {getPhoto} from "../App/generalSelectors";

const TodoDetail = (props) => {
    const {todos, toggleEditing, editMode, toggleDone, currentUser, users, pushRoute, deleteTodo} = props;
    const idFromParams = props.match.params.todoId;
    const thisTodo = todos.find(todo => idFromParams === todo.get('id'));

    const handleCheckbox = (id, uid, isDone) => {
        toggleDone({id, uid, isDone})
    };

    const editableDescription = () => {
        if (editMode) {
            return (
                <div>
                    <UpdateTodoForm id={thisTodo.get('id')}/>
                    <button onClick={()=> toggleEditing()}>X</button>
                </div>
            )
        } else {
            return <p onClick={() => toggleEditing()}>{thisTodo.get('description')}</p>
        }
    };
    return (
        <div>
            <h2>Todo detail of {idFromParams}</h2>
            <PhotoCheckbox
                checked={thisTodo.get('isDone')}
                onChange={() => handleCheckbox(
                    thisTodo.get('id'),
                    currentUser.get('uid'),
                    thisTodo.get('isDone')
                )}
                photoSelector={getPhoto(users, thisTodo.get('doneBy'))}
            />
            {editableDescription()}
            <ul>
                <li>Vytvořeno: {thisTodo.get('createdDate')}</li>
                <li>Dokončeno: {thisTodo.get('doneDate')}</li>
                <li>Bounty: {thisTodo.get('bounty')}</li>
            </ul>
            <button onClick={() => pushRoute('dashboard')}>Go back</button>
            <button onClick={() => deleteTodo(thisTodo.get('id'))}>Delete</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
    currentUser: getCurrentUser(state),
    users: getListOfUsers(state),
    editMode: getEditMode(state)
});

const mapDispatchToProps = dispatch => ({
    toggleDone: val => dispatch(toggleDone(val)),
    pushRoute: destination => dispatch(pushRoute(destination)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleEditing: () => dispatch(toggleEditing())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);