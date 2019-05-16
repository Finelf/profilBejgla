import React, {Component, Fragment} from 'react';
import {setCreateInput, create} from "../actions";
import {getCreateInputValue} from "../selectors";
import {connect} from "react-redux";

class InputCom extends Component {
    handleChange = (e) => {
        e.preventDefault();
        this.props.setCreateInput(e.target.value)
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create(this.props.input);
    };
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           onChange={this.handleChange}
                           name='form'
                           value={this.props.input}
                           placeholder='Přidej Úkol'
                           required
                    />
                </form>
            </Fragment>
        );
    }
}const mapStateToProps = state => {
    return {
        input: getCreateInputValue(state)
    }
};
const mapDispatchToProps = dispatch => ({
    create: inputValue => dispatch(create(inputValue)),
    setCreateInput: val => dispatch(setCreateInput(val)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputCom);