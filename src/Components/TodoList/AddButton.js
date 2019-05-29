/* SOON TO BE DELETED */
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import React from "react";
import {pushRoute} from "../App/routes/routesActions";
import {connect} from "react-redux";

const AddButton = (props) => {
    return (
        <Fab color='primary' aria-label='Add' className='fab'>
            <AddIcon onClick={() => {
                props.pushRoute('addtodo')
            }}/>
        </Fab>
    )
};
const mapDispatchToProps = dispatch => ({
    pushRoute: destination => dispatch(pushRoute(destination))
});

export default connect(null, mapDispatchToProps)(AddButton);