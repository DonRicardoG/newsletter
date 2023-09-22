import React, { useState } from "react";
import Form from "../Form/Form";
import Thanks from "../Thanks/Thanks";
import listIcon from "../../assets/images/icon-list.svg";
import desktopImg from "../../assets/images/illustration-sign-up-desktop.svg";
import mobilImg from "../../assets/images/illustration-sign-up-mobile.svg";
import style from "./MainComponent.module.css";

const Desktop = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  console.log(window.innerWidth);

  return success === true ? (
    <Thanks setSuccess={setSuccess} email={email} setEmail={setEmail} />
  ) : (
    <div className={style.mainContainer}>
      <div className={style.mainContent}>
        <h1> Stay updated! </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={listIcon} alt="list icon" />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src={listIcon} alt="list icon" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={listIcon} alt="list icon" />
            <p>And much more!</p>
          </li>
        </ul>
        <Form setSuccess={setSuccess} email={email} setEmail={setEmail} />
      </div>
      <div className={style.mainImg}></div>
    </div>
  );
};

export default Desktop;
