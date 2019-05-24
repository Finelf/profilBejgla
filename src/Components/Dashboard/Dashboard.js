import React, {Component, Fragment} from 'react'
import ReactSwipe from 'react-swipe'
import Agreement from '../Agreement'
import TodoList from '../TodoList/TodoList'
import {getUserLoginStatus} from "../App/generalSelector";
import {signOutUser} from "../auth/actions";
import {connect} from "react-redux";

class Dashboard extends Component {
    render() {
        let reactSwipeEl;
        return (
            <Fragment>
                <h1>Dashboard</h1>
                <button onClick={() => this.props.signOut()}>Log me out!</button>
                <ReactSwipe
                    className='carousel'
                    swipeOptions={{continuous: false}}
                    ref={el => (reactSwipeEl = el)}
                >
                    <div><Agreement/></div>
                    <div><TodoList/></div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: getUserLoginStatus(state),
    }
};
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);