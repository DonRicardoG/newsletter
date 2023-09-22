import React, { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const [error, setError] = useState("");
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const { setSuccess, email, setEmail } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!regexEmail.test(email)) {
      setError("Valid email required");
    } else {
      setSuccess(true);
    }

    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form
      action="submit"
      className={style.formContainer}
      onSubmit={handleSubmit}
    >
      <label className={style.formLabel}>
        <h5>Email address</h5>
        {error === "Valid email required" ? (
          <h5 className={style.error}>{error}</h5>
        ) : (
          ""
        )}
      </label>
      <input
        placeholder="email@company.com"
        type="text"
        name="email"
        onChange={handleOnChange}
        value={email}
        className={error === "Valid email required" && style.inputError}
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Form;
