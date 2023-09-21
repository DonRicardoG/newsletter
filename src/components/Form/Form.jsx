import React from "react";
import style from "./Form.module.css";

const Form = () => {
  return (
    <form action="submit" className={style.formContainer}>
      <label>Email address</label>
      <input
        placeholder="email@company.com"
        type="email"
        id="email"
        name="email"
      />
      <button>Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Form;
