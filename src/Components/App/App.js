import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Admin from '../Admin'
import Dashboard from '../Dashboard'
import AddTodo from '../TodoList/AddTodo/AddTodoForm'
import TodoDetail from "../TodoList/TodoDetail";
import FourOFour from '../FourOFour';
import Login from '../Login'
import Landing from '../Landing'
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';

const App = () => (
    <Fragment>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
        <ProtectedRoute exact path='/addtodo' component={AddTodo}/>
        <ProtectedRoute path='/detail/:todoId' component={TodoDetail}/>
        <ProtectedRoute exact path='/admin' component={Admin}/>
        <Route exact path='/404' component={FourOFour}/>
    </Fragment>
);

export default App