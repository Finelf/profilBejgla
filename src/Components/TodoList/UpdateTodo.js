import React from 'react'
import {Field, reduxForm, formValueSelector} from 'redux-form/immutable'
import {update} from './todoActions'
import {connect} from 'react-redux'

let UpdateTodoForm = (props) => {

    const {handleSubmit, update} = props;

    function myHandleSubmit(values) {
        update({
            id: props.id,
            inputValue: values.get('description')
        })
    }

    return (
        <form onSubmit={handleSubmit(myHandleSubmit)} className='todoForm'>
            <div>
                <Field
                    name='description'
                    component='input'
                    label='Popis'
                />
            </div>
        </form>
    )
};


UpdateTodoForm = reduxForm({
    form: 'updateTodo',
})(UpdateTodoForm);

const mapStateToProps = state => {
    return {
        values: formValueSelector('updateTodo')(state, 'updateTodo')
    }
};
const mapDispatchToProps = dispatch => ({
    update: inputValue => dispatch(update(inputValue)),
});
UpdateTodoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTodoForm);

export default UpdateTodoForm