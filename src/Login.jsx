import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Navigate to Home component
    navigate("/form");
  };

  return (
    <div className="login">
      <div className="overlap-group">
        <div className="div">
          <img className="discover-th" alt="Discover th" src="logo.svg" />
        </div>
        <img className="line" alt="Line" src="line-1.svg" />
        <div className="frame-2">
          <p className="text-wrapper">Let’s start by Signing in.</p>
          <div className="frame-3">
            <div className="component-2" onClick={handleLogin}>
              <img className="image-2" alt="Image" src="google-icon.svg" />
              <p className="continue-with-GOOGLE">
                <span className="span">Continue with </span>
                <span className="text-wrapper-2">GOOGLE</span>
              </p>
            </div>
            <div className="component-2" onClick={handleLogin}>
              <img className="image-2" alt="Image" src="facebook-icon.svg" />
              <p className="continue-with-GOOGLE">
                <span className="span">Continue with </span>
                <span className="text-wrapper-2">Facebook</span>
              </p>
            </div>
            <div className="component-2" onClick={handleLogin}>
              <img className="image-3" alt="Image" src="mobile-icon.svg" />
              <p className="continue-with-GOOGLE">
                <span className="span">Continue with </span>
                <span className="text-wrapper-2">Mobile Number</span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-4">
          <img className="element" alt="Element" src="logo.svg" />
          <div className="frame-5">
            <div className="text-wrapper-3">The house Of Luck</div>
            <div className="text-wrapper-4">AstroGPT</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">BETA</div>
          </div>
        </div>
        <div className="frame-6">
          <div className="text-wrapper-6">Disclaimer</div>
          <div className="text-wrapper-6">Privacy Policy</div>
          <div className="text-wrapper-6">Terms of use</div>
          <div className="text-wrapper-6">FAQ’s</div>
        </div>
      </div>
    </div>
  );
};
