import React from "react";
import Form from "../Form/Form";
import listIcon from "../../assets/images/icon-list.svg";
import desktopImg from "../../assets/images/illustration-sign-up-desktop.svg";
import style from "./MainComponent.module.css";

const Desktop = () => {
  return (
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
        <Form />
      </div>
      <div>
        <img src={desktopImg} alt="desktop Image" />
      </div>
    </div>
  );
};

export default Desktop;
