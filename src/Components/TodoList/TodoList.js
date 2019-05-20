import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getIsLoading} from "./selectors"

import TodoView from './Components/TodoView'
import Footer from "./Components/Footer"
import IconLoop from '@material-ui/icons/Loop'
import './App.css'

class TodoList extends Component {
    render() {
        return (
            <div>
                <div className='paper'>
                    {this.props.isLoading ? (<IconLoop className='animate'/>) : null}
                    <TodoView/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoading: getIsLoading(state),
    }
};

export default connect(mapStateToProps, null)(TodoList);