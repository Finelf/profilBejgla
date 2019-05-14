import React, {Component, Fragment} from 'react'
import ReactSwipe from 'react-swipe'
import Agreement from "../Agreement"
//import TodoList from '../TodoList/TodoList'

class Dashboard extends Component {
    render() {
        let reactSwipeEl;
        return (
            <Fragment>
                <div>
                    <h1>Dashboard</h1>
                    <ReactSwipe
                        className="carousel"
                        swipeOptions={{continuous: false}}
                        ref={el => (reactSwipeEl = el)}
                    >
                        <div><Agreement /></div>
                        <div>PANE 3</div>
                    </ReactSwipe>
                    <button onClick={() => reactSwipeEl.next()}>Next</button>
                    <button onClick={() => reactSwipeEl.prev()}>Previous</button>

                </div>
            </Fragment>
        );
    }
}


export default Dashboard;