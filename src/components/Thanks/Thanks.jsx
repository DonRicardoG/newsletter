import React from "react";
import iconSuccess from "../../assets/images/icon-success.svg";
import style from "./Thanks.module.css";

const Thanks = (props) => {
  const { setSuccess, email, setEmail } = props;
  const handleOnClick = () => {
    setSuccess(false);
    setEmail("");
  };
  return (
    <div className={style.thanksContainer}>
      <img src={iconSuccess} alt="success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button onClick={handleOnClick}>Dismiss message</button>
    </div>
  );
};

export default Thanks;
