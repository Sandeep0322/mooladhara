import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DraggableTimePicker } from "./DraggableTimePicker"; // Ensure correct path
import Select from "react-select";
import { indianStates } from "./states"; // Ensure correct path
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();
  const [genderSelected, setGenderSelected] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null); // State for selected time
  const [selectedState, setSelectedState] = useState(null);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false); // State for time picker modal

  const handleGenderSelect = (gender) => {
    setGenderSelected(gender === genderSelected ? null : gender);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsTimePickerOpen(false); // Close the time picker modal after selection
  };

  const toggleTimePicker = () => {
    setIsTimePickerOpen(!isTimePickerOpen); // Toggle time picker modal visibility
  };

  // Check if all required fields are filled
  const isFormComplete =
    genderSelected && selectedDate && selectedTime && selectedState;

  const handleSaveAndContinue = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Navigate to Home component
    navigate("/confirmingDetails");
  };
  return (
    <div className="form">
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
        <p className="p">
          Jhon, Know about your love, education, health, career and much more.
        </p>
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-4">Select your gender</div>
            <div className="frame-5">
              <div
                className={`component ${
                  genderSelected === "Male" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelect("Male")}
              >
                <div className="text-wrapper-5">Male</div>
              </div>
              <div
                className={`component ${
                  genderSelected === "Female" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelect("Female")}
              >
                <div className="text-wrapper-5">Female</div>
              </div>
              <div
                className={`component ${
                  genderSelected === "Others" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelect("Others")}
              >
                <div className="text-wrapper-5">Others</div>
              </div>
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-7">
              <div className="text-wrapper-6">Date of Birth</div>
              <p className="text-wrapper-7">
                (Accurate D.O.B is crucial for precise astrological analysis)
              </p>
            </div>
            <div className="frame-wrapper">
              <div className="frame-8">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateSelect}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select date"
                />
                {selectedDate && (
                  <div className="text-wrapper-5 selected-date">
                    {selectedDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="frame-9">
            <div className="frame-7">
              <div className="text-wrapper-6">Time of Birth</div>
              <p className="text-wrapper-7">
                (Accurate Time is crucial for precise astrological analysis)
              </p>
            </div>
            <div className="frame-wrapper">
              <div className="frame-8">
                <div className="time-picker-container">
                  <img
                    className="img-2"
                    alt="Clock"
                    src="time.svg"
                    onClick={toggleTimePicker} // Click handler to toggle time picker modal
                  />
                  <div
                    className="text-wrapper-5"
                    onClick={toggleTimePicker} // Make the text clickable as well
                  >
                    {selectedTime ? selectedTime : "Select time"}
                  </div>
                </div>
                <DraggableTimePicker
                  isOpen={isTimePickerOpen}
                  selectedTime={selectedTime}
                  onSelect={handleTimeSelect}
                  onClose={() => setIsTimePickerOpen(false)}
                />
              </div>
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-6">Select your birth place</div>
            <div className="component-2">
              <Select
                options={indianStates}
                onChange={handleStateSelect}
                placeholder="Search your birth place"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>
        </div>
        {isFormComplete ? (
          <div className={"frame-11 enable"} onClick={handleSaveAndContinue}>
            <div className={`save-continue`}>Save & Continue</div>
            <img className="arrow-left" alt="Arrow left" src="next.svg" />
          </div>
        ) : (
          <div className={"frame-11 disable"}>
            <div className={`save-continue`}>Save & Continue</div>
            <img className="arrow-left" alt="Arrow left" src="next.svg" />
          </div>
        )}
      </div>
    </div>
  );
};
