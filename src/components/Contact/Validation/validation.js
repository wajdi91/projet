import React, { Component } from "react";
import Field from "../../Field";
import Button from "../../Button";
import Textarea from "../../Textarea";

class ValidationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      phone: ""
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    const { name, email, message, phone } = this.state;
    const href = `
      mailto:abderrahimwajdi@gmail.com
      ?subject=You got mail from ${name}
      &body=${message} from ${email} from ${phone}
    `;

    return (
      <div className="contact-form row">
        <div className="col s12 m8 offset-m2">
          {/* Name field */}
          <Field
            placeholder="Name"
            onChange={event => this.updateField("name", event.target.value)}
            value={name}
          />
          {/* phone field */}
          <Field
            placeholder="Phone"
            onChange={event => this.updateField("phone", event.target.value)}
            value={phone}
          />

          {/* Email field */}
          <Field
            placeholder="Email"
            onChange={event => this.updateField("email", event.target.value)}
            value={email}
          />

          {/* adress area */}
          <Textarea
            placeholder="Adresse"
            onChange={event => this.updateField("message", event.target.value)}
            value={message}
          />

          {/* Submit button */}
          <Button
            href={href}
            email="abderrahimwajdi@gmail.com"
            formValues={this.state}
          />
        </div>
      </div>
    );
  }
}

export default ValidationForm;
