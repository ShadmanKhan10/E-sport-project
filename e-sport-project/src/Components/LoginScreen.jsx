import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Background from "../assets/Background.png";
import Heinz from "../assets/Heinz.png";
import CaptureButton from "../assets/CaptureButton.png";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [page, setPage] = useState("loginScreen");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef(null);

  const handleButtonClick = () => {
    setPage("clickPage");
    console.log(page);
  };
  const handleCaptureClick = () => {
    setIsCameraOpen(true);
    console.log("Camera Opened");
  };
  return (
    <div>
      {page !== "clickPage" ? (
        <div>
          <div className="background-containig-div">
            <img src={Background} className="background-img" alt="Background" />
          </div>
          <div className="logo-container-login">
            <img src={Heinz} className="logo" alt="logo" />
          </div>
          <div className="form-container">
            <h1 className="label-text">ENTER YOUR EMAIL</h1>
            {/* <input type="text" className="input-field" /> */}
          </div>
          <div className="input-div">
            <input type="text" className="input-field" />
          </div>
          <div className="button-div">
            <button onClick={handleButtonClick} className="button">
              START
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="background-containig-div">
            <img src={Background} className="background-img" alt="Background" />
          </div>
          <div className="preview-container">
            {isCameraOpen && (
              <Webcam
                audio={false}
                ref={webcamRef}
                className="webcam-preview"
              />
            )}
          </div>
          <div className="capture-btn-container" onClick={handleCaptureClick}>
            <img src={CaptureButton} className="capture" alt="capture" />
          </div>
        </div>
      )}
    </div>
  );
}
