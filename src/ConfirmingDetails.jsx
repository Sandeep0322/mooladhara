import React from "react";
import "./ConfirmingDetails.css";
import { useNavigate } from "react-router-dom";

export const ConfirmingDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Navigate to Home component
    navigate("/form");
  };

  const handleContinue = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Navigate to Home component
    navigate("/birthChart");
  };
  return (
    <div className="confirming-details">
      <div className="overlap-group">
        <div className="div">
          <img className="element" alt="Element" src="logo.svg" />
          <div className="frame-2">
            <div className="text-wrapper">The house Of Luck</div>
            <div className="text-wrapper-2">AstroGPT</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">BETA</div>
          </div>
        </div>
        <div className="frame-3" onClick={handleContinue}>
          <div className="text-wrapper-4">Continue</div>
          <img className="arrow-left" alt="Arrow left" src="next.svg" />
        </div>
        <div className="frame-4" onClick={handleBack}>
          <img className="arrow-left" alt="Arrow left" src="back.svg" />
          <div className="text-wrapper-5">Back</div>
        </div>
        <div className="frame-5">
          <p className="jhon-please-verify">
            Jhon, <br />
            Please verify your details
          </p>
          <div className="frame-6">
            <div className="frame-7">
              <div className="text-wrapper-6">Date</div>
              <div className="text-wrapper-7">Thu Jun 15 2000.</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-6">Time</div>
              <div className="text-wrapper-7">12:30:00 PM</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-6">Weekday</div>
              <div className="text-wrapper-7">Thursday</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-6">Birth location</div>
              <div className="text-wrapper-7">Chennai, Tamil Nadu, India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
