import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'
import AddTodo from '../TodoList/Components/AddTodo/AddTodoForm'
import FourOFour from "../FourOFour";
import Login from "../Login"
import Landing from '../Landing'
import ProtectedRoute from "../ProtectedRoute";
import './App.css';
import TodoList from "../TodoList/TodoList";

const App = () => (
    <Fragment>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/login' component={Login}/>
            <ProtectedRoute path='/dashboard' component={Dashboard}/>
            <ProtectedRoute path='/addtodo' component={AddTodo}/>
            <Route exact path='/404' component={FourOFour}/>
    </Fragment>
);

export default App