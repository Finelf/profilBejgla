import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getUserLoginStatus} from "../selectors/generalSelector";
import {connect} from "react-redux";

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            rest.isUserLoggedIn ?
                <Component {...props}/> :
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )}
        />
    )
};

const mapStateToProps = state => {
    return {
        isUserLoggedIn: getUserLoginStatus(state),

    }
};

export default connect(mapStateToProps, null)(ProtectedRoute);