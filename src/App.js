import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from './Components/Landing/Landing'
import Dashboard from './Components/Dashboard/Dashboard'
import FourOFour from "./Components/FourOFour";
import Login from "./Components/Login"
import ProtectedRoute from "./Components/ProtectedRoute";
import './App.css';

const App = () => (
    <Router>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/login' component={Login}/>
            <ProtectedRoute path='/dashboard' component={Dashboard}/>
            <Route exact path='/404' component={FourOFour}/>
    </Router>
);

export default App