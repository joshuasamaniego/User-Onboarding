import React from "react";

export default function Form(props) {
  const { values, change, submit, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a User</h2>
        <button disabled={disabled}>Submit New User</button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General information</h4>
        <label>
          Name:
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>
        <label>
          Password:
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="text"
          />
        </label>
      </div>
      <div className="form-group checkbox">
        <h4>Terms Of Service</h4>
        <label>
          Check box to agree to terms of service:
          <input
            type="checkbox"
            name="termsOfService"
            // let the checkbox be checked if the value inside state resolves to true!
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}

