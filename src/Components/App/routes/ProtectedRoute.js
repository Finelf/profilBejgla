import React from 'react'
import {Route} from 'react-router-dom'
import {getUserAuthStatus} from '../generalSelectors';
import {connect} from 'react-redux';
import {pushRoute} from "./routesActions";

const ProtectedRoute = ({component: Component, pushRoute, ...rest}) => {
    const permissionDecision = props => {
        if(rest.isUserAuthorized) {
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
        isUserAuthorized: getUserAuthStatus(state),
    }
};
const mapDispatchToProps = dispatch => ({
    pushRoute: destination => dispatch(pushRoute(destination))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);