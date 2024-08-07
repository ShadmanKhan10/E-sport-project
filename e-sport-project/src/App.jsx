import React, { useState } from "react";
import "./App.css";
import Back from "./Components/Back";
import LoginScreen from "./Components/LoginScreen";

function App() {
  const [screen, setScreen] = useState(false);
  const handleScreenClick = () => {
    setScreen(true);
  };
  return (
    <>
      {!screen ? (
        <div onClick={handleScreenClick}>
          <Back />
        </div>
      ) : (
        <div>
          <LoginScreen />
        </div>
      )}
    </>
  );
}

export default App;
