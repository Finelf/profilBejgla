import React from 'react';
import {connect} from 'react-redux'
import {getTodos} from "../selectors";
import {
    toggleDone,
    deleteTodo,
    getAllBegin,
    filterUndone,
} from "../actions";

const Footer = props => {
    const deleteComplete = () => {
        props.todos.forEach(item => {
            if (item.get("completed") === true) {
                props.deleteTodo(item.get("id"))
            }
        })
    };
    return (
        <div className='footer'>
            <div onClick={props.fetchAll}>All</div>
            <div onClick={props.filterUndone}>Incomplete</div>
            <div onClick={() => deleteComplete()}>Delete complete</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: getTodos(state)
    }
};
const mapDispatchToProps = dispatch => ({
    toggleDone: id => dispatch(toggleDone(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    fetchAll: () => dispatch(getAllBegin()),
    filterUndone: () => dispatch(filterUndone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);