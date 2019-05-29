import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    toggleDone,
} from './todoActions';

import PhotoCheckbox from '../styledComponents/PhotoCheckbox'
import {getCurrentUser, getListOfUsers} from "../App/generalSelectors";
import {pushRoute} from '../App/routes/routesActions'
import {getPhoto} from "../App/generalSelectors";

const Todo = (props) => {
    const {todo, currentUser, users, pushRoute, toggleDone} = props;
    const handleCheckbox = (id, uid, isDone) => {
        toggleDone({id, uid, isDone})
    };

    return (
        <div>
            <PhotoCheckbox
                checked={todo.get('isDone')}
                onChange={() => {
                    handleCheckbox(
                        todo.get('id'),
                        currentUser.get('uid'),
                        todo.get('isDone')
                    )
                }}
                photoSelector={getPhoto(users, todo.get('doneBy'))}
            />
            <div onClick={() => pushRoute(`detail/${todo.get('id')}`)}>
                <h4>{todo.get('description')}</h4>
                <p>Bounty {todo.get('bounty')} {(todo.get('bounty') === "1" ? 'point' : 'points')}</p>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: getCurrentUser(state),
    users: getListOfUsers(state)
});
const mapDispatchToProps = dispatch => ({
    toggleDone: val => dispatch(toggleDone(val)),
    pushRoute: todoId => dispatch(pushRoute(todoId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
