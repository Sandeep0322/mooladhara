import React, { useEffect, useState } from "react";
import "./ConfirmingDetails.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const ConfirmingDetails = () => {
  const navigate = useNavigate();
  const [genderSelected, setGenderSelected] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Utility functions to get date, time, and weekday separately
      const getDate = dayjs(parsedData.selectedDate).format("MMM DD YYYY");
      const getTime = dayjs(parsedData.selectedTime).format("hh:mm:ss A");
      const getWeekday = dayjs(parsedData.selectedDate).format("dddd");
      setGenderSelected(parsedData.genderSelected);
      setSelectedState(parsedData.selectedState);
      setSelectedDate(getDate);
      setSelectedDay(getWeekday);
      setSelectedTime(getTime);
    }
  }, []);

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
              <div className="text-wrapper-7">{selectedDate}</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-6">Time</div>
              <div className="text-wrapper-7">{selectedTime}</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-6">Weekday</div>
              <div className="text-wrapper-7">{selectedDay}</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-6">Birth location</div>
              <div className="text-wrapper-7">{selectedState}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
