import React, {Fragment} from 'react';
import {getTodos} from '../../App/generalSelectors';
import {connect} from 'react-redux'
import Todo from './Todo';

const ToDoList = (props) => {
    return (
        <Fragment>
            <table cellSpacing='0'>
                <tbody>
                {props.todos.map(todo => (
                    <Todo key={todo.get('id')} todo={todo}/>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: getTodos(state)
    }
};

export default connect(mapStateToProps, null)(ToDoList);