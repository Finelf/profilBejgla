import React from 'react'
import {Field, reduxForm, formValueSelector} from 'redux-form/immutable'
import {connect} from 'react-redux'
import {renderSwitch} from "./styledFormParts";
import validate from './validate'
import {create} from "../../actions";


let AddTodoForm = props => {
    function myHandleSubmit(values){
        props.create({
            created: Date.now(),
            ...values.toJS()
        })
    }
    const {handleSubmit, pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit(myHandleSubmit)} className='todoForm'>
            <div>
                <Field
                    name="description"
                    component='input'
                    label="Popis"
                />
            </div>
            <div>
                <Field
                    className='dropDown'
                    name="taskType"
                    component='select'
                    label="Druh úkolu"
                >
                    <option value=""/>
                    <option value={'Kočičí záchod'}>Kočičí záchod</option>
                    <option value={'Úklid kuchyně'}>Úklid kuchyně</option>
                    <option value={'Úklid koupelny'}>Úklid koupelny</option>
                    <option value={'Úklid záchodu'}>Úklid záchodu</option>
                    <option value={'Úklid obyváku'}>Úklid obyváku</option>
                    <option value={'Úklid balkonu'}>Úklid balkonu</option>
                    <option value={'Příprava odpadu'}>Příprava odpadu</option>
                    <option value={'Vynesení koše'}>Vynesení koše</option>
                    <option value={'Vynesení recykl.'}>Vynesení recykl</option>
                    <option value={'Vytření podlahy'}>Vytření podlahy</option>
                    <option value={'Umytí kožky'}>Umytí kožky</option>
                    <option value={'Jiné'}>Jiné</option>
                </Field>
                {/*values.get("takType") &&
                <Field
                    name="otherTask"
                    component={renderTextField}
                    label="Jiný úkol"
                />
                */}
            </div>
            <div>
                <Field
                    className='dropDown'
                    name="place"
                    component='select'
                    label="Místo"
                >
                    <option value=""/>
                    <option value={'Chodba'}>Chodba</option>
                    <option value={'Koupena'}>Koupena</option>
                    <option value={'Obyvák'}>Obyvák</option>
                    <option value={'Kuchyň'}>Kuchyň</option>
                    <option value={'Chodba'}>Chodba</option>
                    <option value={'Záchod'}>Záchod</option>
                    <option value={'Balkon'}>Balkon</option>
                    <option value={'Bejgl byt'}>Bejgl Byt</option>
                </Field>
            </div>
            <div className='halfInForm'>
                <Field
                    className='dropDown'
                    name="bounty"
                    component='select'
                    label="Bounty"
                >
                    <option value=""/>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                </Field>
                <Field name="isDone" component={renderSwitch} label="Je úkol hotový?"/>
            </div>
            <div/>
            <div className='halfInForm'>
                <button type="button" disabled={submitting}>
                    Go back
                </button>
                <button type="submit" disabled={pristine || submitting}>
                    Odeslat
                </button>
            </div>
        </form>
    )
};


AddTodoForm = reduxForm({
    form: 'addTodo',
    validate,
})(AddTodoForm);

const mapStateToProps = state => {
    return {
        values: formValueSelector('addTodo')(state, 'addTodo')
    }
};
const mapDispatchToProps = dispatch => ({
    create: inputValue => dispatch(create(inputValue)),
});
AddTodoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm);

export default AddTodoForm