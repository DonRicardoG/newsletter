import React, { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!regexEmail.test(email)) {
      setError("Valid email required");
    } else {
      console.log("hola");
    }
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
      <label>Email address</label>
      <input
        placeholder="email@company.com"
        type="text"
        name="email"
        onChange={handleOnChange}
        value={email}
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Form;
