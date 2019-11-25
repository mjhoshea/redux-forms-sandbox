import React from 'react'
import {Field, reduxForm} from "redux-form";
import TextField from '@material-ui/core/TextField'
import {connect} from "react-redux";



const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const MaterialUiForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                 <Field
                     name="firstName"
                     componet={renderTextField}
                     lable={'First Name'}
                    />
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'MaterialUiForm',
})(MaterialUiForm)