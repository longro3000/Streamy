import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({touched, error}) {
        if (touched && error) {
            return <div>{error}</div>
        }
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div>
                <div><label>{label}</label></div>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        );
    }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name='title' component={this.renderInput} label="Enter Title"/>
            <Field name='description' component={this.renderInput} label="Enter Description"/>
            <button>Submit</button>
          </form>
      );
    }
}

const validate = (formValues) => {
        const errors = {};

        if (!formValues.title) {
            errors.title = 'You must enter a title';        
        }

        if (!formValues.description) {
            errors.description = 'You must enter a description';        
        }

        return errors;
}

export default reduxForm({
    form: 'streamForm', 
    validate
})(StreamForm);