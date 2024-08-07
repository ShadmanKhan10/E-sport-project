import React, { useState } from "react";
import Background from "../assets/Background.png";
import Heinz from "../assets/Heinz.png";
import "./Clicked.css";
import ThankYou from "./ThankYou";

export default function Clicked() {
  const [lastPage, setLastPage] = useState("");

  const handleConfirm = () => {
    setLastPage("thankyou");
  };

  return (
    <div>
      {lastPage !== "thankyou" ? (
        <div>
          <div className="background-containig-div">
            <img src={Background} className="background-img" alt="Background" />
          </div>
          <div className="captured-image-container">
            <div className="heinz-container">
              <img src={Heinz} className="logo" alt="logo" />
            </div>
          </div>
          <div className="buttons-container">
            <button onClick={handleConfirm} className="confirm">
              CONFIRM
            </button>
            <button className="retake">RETAKE</button>
          </div>
        </div>
      ) : (
        <div>
          <ThankYou />
        </div>
      )}
    </div>
  );
}
