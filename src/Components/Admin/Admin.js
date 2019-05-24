import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {authorizeUser} from "./adminActions";
import {getListOfUsers} from "../App/generalSelector";

const Admin = (props) => (
    <Fragment>
        <h1>Administrace</h1>
        {console.log(props.users)}
        <ul>
            {props.users.map(user =>
            <li key={user.get('uid')}>
                <h3>{user.get('firstName')}</h3>
                <button onClick={() => props.authorizeUser(user.get('email'))}>Approve</button>
            </li>)}
        </ul>
    </Fragment>
);

const mapStateToProps = (state) => ({
    users: getListOfUsers(state)
});
const mapDispatchToProps = dispatch => ({
    authorizeUser: val => dispatch(authorizeUser(val))

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);