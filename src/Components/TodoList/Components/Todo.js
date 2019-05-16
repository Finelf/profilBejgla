import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getEditID, getUpdateInputValue} from "../selectors";
import {
    setUpdateInput,
    toggleEditing,
    update,
    toggleDone,
    deleteTodo,
} from "../actions";

import IconEdit from '@material-ui/icons/Edit';
import IconClear from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox/index'

class Todo extends Component {
    handleChange = (e) => {
        e.preventDefault();
        this.props.setUpdateInput(e.target.value)
    };
    handleEdit = (id) => {
        this.props.toggleEditing(id)
    };
    handleSubmit = (id, inputValue) => {
        this.props.update({id, inputValue});
    };
    handleCheckbox = (id, completed) => {
        this.props.toggleDone({id, completed})
    };
    handleDelete = id => {
        this.props.deleteTodo(id)
    };

    render() {
        const {todo, editID, inputValue} = this.props;
        return (
            <tr>
                <td width="10%">
                    <Checkbox
                        checked={todo.get("completed")}
                        onChange={() => this.handleCheckbox(todo.get("id"), todo.get("completed"))}
                        color='default'
                        value="toggle done"/>
                </td>
                <td className='text'>
                    {(editID === todo.get("id")) ?
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.handleSubmit(todo.get("id"), inputValue);
                        }}>
                            <input type="text"
                                   onChange={this.handleChange}
                                   name='form'
                                   value={inputValue}
                                   placeholder={todo.get("text")}
                                   required
                            />
                        </form> :
                        <span
                            style={{textDecoration: todo.get("completed") ? 'line-through' : 'none'}}>{todo.get("text")}</span>
                    }
                </td>
                <td width="15%">
                    <IconEdit className='icon' onClick={() => this.handleEdit(todo.get("id"))}/>
                    <IconClear className='icon' onClick={() => this.handleDelete(todo.get("id"))}/>
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
    toggleEditing: id => dispatch(toggleEditing(id)),
    setUpdateInput: val => dispatch(setUpdateInput(val)),
    update: id => dispatch(update(id)),
    toggleDone: val => dispatch(toggleDone(val)),
    deleteTodo: id => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);