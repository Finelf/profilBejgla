import React, {Fragment} from 'react'
import ReactSwipe from 'react-swipe'
import Agreement from './Agreement'
import TodoList from './TodoList/TodoList'
import {signOutUser} from "./auth/authActions";
import {connect} from "react-redux";

const Dashboard = () => {
    let reactSwipeEl;
    return (
        <Fragment>
            <h1>Dashboard</h1>
            {/*<button onClick={() => props.signOut()}>Log me out!</button>*/}
            <ReactSwipe
                className='carousel'
                swipeOptions={{
                    continuous: false,
                    startSlide: 1,

                }}
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
};

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutUser())
});
export default connect(null, mapDispatchToProps)(Dashboard);