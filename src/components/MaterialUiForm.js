import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";

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

class MaterialUiForm extends Component {



    render() {
        console.log(this.props)
        return (
            <div>
            <h2>World</h2>
            <form>
                <div>
                    <Field
                        name="firstName"
                        component={renderTextField}
                        label="Project Name"
                    />
                </div>
                <div>
                    <Field
                        name="firstName"
                        component={renderTextField}
                        label="Project Goals"
                    />
                </div>
                <div>
                    <Field
                        name="firstName"
                        component={renderTextField}
                        label="Project links"
                    />
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    a: state
});
MaterialUiForm = connect(mapStateToProps)(MaterialUiForm)

export default reduxForm({
    form: 'MaterialUiForm'
})(MaterialUiForm)



