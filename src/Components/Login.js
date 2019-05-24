
import React from 'react';
import {authUserStart} from './auth/actions';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
 
const Login = (props) => (
    <div>
        <h2 onClick={props.authUser}>Přihlaš se</h2>
    </div>
);

const mapDispatchToProps = dispatch => ({
    authUser: () => dispatch(authUserStart())
});

export default withRouter(connect(null, mapDispatchToProps)(Login));