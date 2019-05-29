import React from 'react'
import {connect} from 'react-redux'
import {getIsLoading, getTodos} from '../App/generalSelectors'

import IconLoop from '@material-ui/icons/Loop'
import Todo from "./Todo";
import AddButton from "./AddButton";
//import Footer from './Components/Footer'
import './App.css'

const TodoList = (props) => {
    return (
        <div>
            {props.isLoading ? (<IconLoop className='animate'/>) : null}
            {props.todos.map(todo => (
                <Todo key={todo.get('id')} todo={todo}/>
            ))}
            <AddButton/>
            {/*<Footer/>*/}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: getIsLoading(state),
        todos: getTodos(state),
    }
};

export default connect(mapStateToProps, null)(TodoList);