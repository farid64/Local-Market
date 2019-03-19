import React from "react";
import { Field, reduxForm } from "redux-form";

let CustomerUpdateForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Birth Day</label>
        <Field name="birthday" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

CustomerUpdateForm = reduxForm({
  // a unique name for the form
  form: "customer_update"
})(CustomerUpdateForm);

export default CustomerUpdateForm;
