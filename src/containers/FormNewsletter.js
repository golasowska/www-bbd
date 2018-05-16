import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addToNewsletterList } from "../actions";

import swal from "sweetalert";

class FormNewsletter extends Component {
  showDisable = () => {
    swal("The newsletter will start soon!", {
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
        <input type="text" className="form-control" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit = values => {
    swal("The newsletter will start soon!", {
      buttons: false,
      timer: 1500
    });
    setTimeout(
      () =>
        this.props.addToNewsletterList(values, () =>
          this.props.history.push("/")
        ),
      500
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Your e-mail" name="email" component={this.renderField} />

        <button
          type="submit"
          className="btn-newsletter text-uppercase"
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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address.";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "NewsletterForm"
})(connect(null, { addToNewsletterList })(FormNewsletter));
