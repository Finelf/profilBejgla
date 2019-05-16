import React, {Component, Fragment} from 'react';
import {getTodos} from "../selectors";
import {connect} from 'react-redux'
import Todo from "./Todo";

class ToDoList extends Component {
    render() {
        return (
            <Fragment>
                <table cellSpacing="0">
                    <tbody>
                    {this.props.todos.map(todo => (
                        <Todo key={todo.get("id")} todo={todo}/>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos: getTodos(state)
    }
};

export default connect(mapStateToProps, null)(ToDoList);