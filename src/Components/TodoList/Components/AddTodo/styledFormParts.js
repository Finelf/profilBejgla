import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";

export const renderSwitch = ({label, input, ...custom}) => (
<FormGroup>
    <FormControlLabel
        control={
            <Switch
                value="checkedB"
                color="primary"
                {...input}
                {...custom}
            />
        }
        label={label}
        labelPlacement="top"
    />
</FormGroup>
);