import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getUserLoginStatus} from './App/generalSelector'
import {pushRoute} from "./App/routesActions";

class Landing extends PureComponent {
    render() {
        const {isUserLoggedIn, pushRoute} = this.props;
        return (
            <div>
                Vítej :)
                {/*{isUserLoggedIn ? pushRoute('dashboard') : pushRoute('login')}*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: getUserLoginStatus(state)
    }
};
const mapDispatchToProps = dispatch => ({
    pushRoute: destination => dispatch(pushRoute(destination))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);