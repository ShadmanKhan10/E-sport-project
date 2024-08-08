import React from "react";
import Background from "../assets/Background.png";
import Heinz from "../assets/Heinz.png";
import Thanks from "../assets/Thanks.png";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div>
      <div className="background-containig-div">
        <img src={Background} className="background-img" alt="Background" />
      </div>
      <div className="thankyou-logo-container">
        <img src={Heinz} className="logo-thanks" alt="logo" />
      </div>
      <div className="thankyou-container">
        <img src={Thanks} className="img-thanks" alt="thankyou" />
      </div>
      <div className="first-text-div">
        <h1 className="first-text">A COPY HAS BEEN SENT TO</h1>
      </div>
      <div className="second-text-div">
        <h1 className="second-text">XX@GMAIL.COM</h1>
      </div>
    </div>
  );
}
