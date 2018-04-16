import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addToMessages } from "../actions";

import swal from "sweetalert";

class FormContact extends Component {
  showDisable = () => {
    swal("The subscription will start soon!", {
      buttons: false,
      timer: 1500
    });
  };
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" className="form-control" {...field.input} disabled />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea
          type="text"
          className="form-control"
          {...field.input}
          disabled
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit = values => {
    swal("The subscription will start soon!", {
      buttons: false,
      timer: 1500
    });
    setTimeout(
      () =>
        this.props.addToMessages(values, () => this.props.history.push("/")),
      500
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Your name" name="name" component={this.renderField} />
        <Field label="Your e-mail" name="email" component={this.renderField} />
        <Field
          label="Your message"
          name="message"
          component={this.renderTextArea}
        />
        <button
          type="submit"
          className="btn-newsletter text-uppercase disabled"
          onClick={this.showDisable}
        >
          Contact us
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email.";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address.";
  }
  if (!values.name || values.name.length < 3) {
    errors.name = "Please enter your name.";
  }
  if (!values.message || values.message.length < 5) {
    errors.message = "Please enter a message.";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "ContactForm"
})(connect(null, { addToMessages })(FormContact));
