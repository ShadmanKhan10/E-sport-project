import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Background from "../assets/Background.png";
import Heinz from "../assets/Heinz.png";
import CaptureButton from "../assets/CaptureButton.png";
import "./LoginScreen.css";
import Clicked from "./Clicked.jsx";
import Frame from "../assets/Frame.png";

export default function LoginScreen() {
  const [page, setPage] = useState("loginScreen");
  const [email, setEmail] = useState("");
  const [src, setSrc] = useState();
  const webcamRef = useRef(null);

  const handleButtonClick = () => {
    setPage("clickPage");
    console.log(page);
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSrc(imageSrc);
    console.log(imageSrc);
    setPage("clicked");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      {page === "loginScreen" && (
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
            <input
              type="text"
              value={email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="button-div">
            <button onClick={handleButtonClick} className="button">
              START
            </button>
          </div>
        </div>
      )}
      {page === "clickPage" && (
        <div>
          <div className="background-containig-div">
            <img src={Background} className="background-img" alt="Background" />
          </div>

          <div className="preview-container">
            <Webcam
              mirrored={true}
              audio={false}
              ref={webcamRef}
              className="webcam-preview"
            />
            <div className="frame-div">
              <img src={Frame} className="frame" alt="frame" />
            </div>
          </div>
          <div className="capture-btn-container" onClick={handleCapture}>
            <img src={CaptureButton} className="capture" alt="capture" />
          </div>
        </div>
      )}
      {page === "clicked" && (
        <div>
          <Clicked email={email} capturedImage={src} />
        </div>
      )}
    </div>
  );
}
