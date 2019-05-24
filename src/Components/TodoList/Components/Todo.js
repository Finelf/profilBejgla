import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getEditID, getUpdateInputValue} from '../../App/generalSelectors';
import {
    setUpdateInput,
    update,
    toggleDone,
    deleteTodo,
} from '../todoActions';

import Checkbox from '@material-ui/core/Checkbox/index'

class Todo extends Component {
    handleChange = (e) => {
        e.preventDefault();
        this.props.setUpdateInput(e.target.value)
    };
    handleSubmit = (id, inputValue) => {
        this.props.update({id, inputValue});
    };
    handleCheckbox = (id, completed) => {
        this.props.toggleDone({id, completed})
    };
    render() {
        const {todo, editID, inputValue} = this.props;
        return (
            <tr>
                <td>
                    <Checkbox
                        checked={todo.get('completed')}
                        onChange={() => this.handleCheckbox(todo.get('id'), todo.get('completed'))}
                        color='default'
                        value='toggle done'/>
                </td>
                <td className='text'>
                    {(editID === todo.get('id')) ?
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.handleSubmit(todo.get('id'), inputValue);
                        }}>
                            <input type='text'
                                   onChange={this.handleChange}
                                   name='form'
                                   value={inputValue}
                                   placeholder={todo.get('text')}
                                   required
                            />
                        </form> :
                        <span
                            style={{textDecoration: todo.get('completed') ? 'line-through' : 'none'}}>{todo.get('text')}</span>
                    }
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editID: getEditID(state),
        inputValue: getUpdateInputValue(state)
    }
};
const mapDispatchToProps = dispatch => ({
    setUpdateInput: val => dispatch(setUpdateInput(val)),
    update: id => dispatch(update(id)),
    toggleDone: val => dispatch(toggleDone(val)),
    deleteTodo: id => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);