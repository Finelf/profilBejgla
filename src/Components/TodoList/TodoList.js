import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getIsLoading} from './selectors'
import {pushRoute} from '../App/routesActions';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TodoView from './Components/TodoView'
import Footer from './Components/Footer'
import IconLoop from '@material-ui/icons/Loop'
import './App.css'

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.isLoading ? (<IconLoop className='animate'/>) : null}
                <TodoView/>
                <Footer/>
                <Fab color='primary' aria-label='Add' className='fab'>
                    <AddIcon onClick={() => {this.props.pushRoute('addtodo')}}/>
                </Fab>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: getIsLoading(state),
    }
};
const mapDispatchToProps = dispatch => ({
    pushRoute: destination => dispatch(pushRoute(destination))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);