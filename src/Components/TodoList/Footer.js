import React from 'react';
import {connect} from 'react-redux'
import {getTodos} from '../App/generalSelectors';
import {
    toggleDone,
    deleteTodo,
    getAllBegin,
    filterUndone,
} from './todoActions';

const Footer = props => {
    return (
        <div className='footer'>
            <div onClick={props.fetchAll}>All</div>
            <div onClick={props.filterUndone}>Incomplete</div>
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