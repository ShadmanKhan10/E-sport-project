import React from "react";
import Background from "../assets/Background.png";
import Heinz from "../assets/Heinz.png";
import WorldCup from "../assets/WorldCup.png";
import "./Back.css";

export default function Back() {
  return (
    <div>
      <div className="background-containig-div">
        <img src={Background} className="background-img" alt="Background" />
      </div>
      <div className="logo-container">
        <img src={Heinz} className="logo" alt="logo" />
      </div>
      <div className="sport-container">
        <img src={WorldCup} className="sport" alt="worldCup" />
      </div>
    </div>
  );
}
