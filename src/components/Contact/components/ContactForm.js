import React, { Component } from "react";
import Field from "../../Field";
import Button from "../../Button";
import Textarea from "../../Textarea";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    const { name, email, message } = this.state;
    const href = `
      mailto:abderrahimwajdi@gmail.com
      ?subject=You got mail from ${name}
      &body=${message} from ${email}
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

          {/* Email field */}
          <Field
            placeholder="Email"
            onChange={event => this.updateField("email", event.target.value)}
            value={email}
          />

          {/* Message textarea */}
          <Textarea
            placeholder="Message"
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

export default ContactForm;
