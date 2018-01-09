import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    
    renderField(field) {
        return (
            <div className="form-group">
                <label htmlFor="title">{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    name="title" 
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <div className="wrapper">
                <form>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field 
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    // console.log(values) -> { title: 'example', categories: 'example_cat', content: ' '}
    const errors = {};

    //Validate the inputs from 'values'

    
    //If errors is empty, the form is fine to submit
    //If errors has *any* props, redux form assumed form is invalid
    return errors;

}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew);