import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'
import FourOFour from "../FourOFour";
import Login from "../Login"
import ProtectedRoute from "../ProtectedRoute";
import './App.css';
import TodoList from "../TodoList/TodoList";

const App = () => (
    <Router>
            <Route exact path='/' component={TodoList}/>
            <Route exact path='/login' component={Login}/>
            <ProtectedRoute path='/dashboard' component={Dashboard}/>
            <ProtectedRoute path='/dashboard' component={Dashboard}/>
            <Route exact path='/404' component={FourOFour}/>
    </Router>
);

export default App