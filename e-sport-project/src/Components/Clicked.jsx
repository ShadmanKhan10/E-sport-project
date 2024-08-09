import React, { useState, useRef } from "react";
import Background from "../assets/Background.png";
import Heinz from "../assets/Heinz.png";
import "./Clicked.css";
import ThankYou from "./ThankYou";
import Webcam from "react-webcam";
import CaptureButton from "../assets/CaptureButton.png";
import Frame from "../assets/Frame.png";

export default function Clicked({ capturedImage, email }) {
  const [lastPage, setLastPage] = useState("");
  const [toggle, setToggle] = useState(false);
  const webcamRef = useRef(null);

  const handleConfirm = () => {
    setLastPage("thankyou");
  };
  const handleRetake = () => {
    setLastPage("clickPage");
    setToggle(true);
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSrc(imageSrc);
    console.log(imageSrc);
    setPage("clicked");
  };

  return (
    <div>
      {lastPage !== "thankyou" && !toggle && (
        <div>
          <div className="background-containig-div">
            <img src={Background} className="background-img" alt="Background" />
          </div>
          <div className="captured-image-container">
            <div className="heinz-container">
              <img src={Heinz} className="logo" alt="logo" />
            </div>
          </div>
          <div className="captured-img-container-div">
            {" "}
            <img
              src={capturedImage}
              alt="captured-img"
              className="captured-image-click"
            />
          </div>
          <div className="buttons-container">
            <button onClick={handleConfirm} className="confirm">
              CONFIRM
            </button>
            <button onClick={handleRetake} className="retake">
              RETAKE
            </button>
          </div>
        </div>
      )}
      {lastPage === "thankyou" && (
        <div>
          <ThankYou email={email} />
        </div>
      )}
      {lastPage === "clickPage" && toggle && (
        <div>
          <div>
            <div className="background-containig-div">
              <img
                src={Background}
                className="background-img"
                alt="Background"
              />
            </div>
            <div className="preview-container">
              {/* <div className="frame-div">
                <img src={Frame} className="frame" alt="frame" />
              </div> */}

              <Webcam
                audio={false}
                ref={webcamRef}
                className="webcam-preview"
              />
            </div>
            <div className="capture-btn-container" onClick={handleCapture}>
              <img src={CaptureButton} className="capture" alt="capture" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
