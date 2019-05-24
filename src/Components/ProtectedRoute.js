import React from 'react'
import {Route} from 'react-router-dom'
import {getUserLoginStatus} from './App/generalSelector';
import {connect} from 'react-redux';
import {pushRoute} from "./App/routesActions";

const ProtectedRoute = ({component: Component, pushRoute, ...rest}) => {
    const permissionDecision = props => {
        if(rest.isUserLoggedIn) {
            return <Component {...props}/>
        } else {
            pushRoute('login');
            return null
        }
    };

    return (
        <Route {...rest} render={permissionDecision}/>
    )
};

const mapStateToProps = state => {
    return {
        isUserLoggedIn: getUserLoginStatus(state),
    }
};
const mapDispatchToProps = dispatch => ({
    pushRoute: destination => dispatch(pushRoute(destination))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);