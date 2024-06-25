import React, { useEffect, useState } from "react";
import "./Form.css";
import "react-datepicker/dist/react-datepicker.css";
import { DraggableTimePicker } from "./DraggableTimePicker"; // Ensure correct path
import Select from "react-select";
import { indianStates } from "./states"; // Ensure correct path
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs from "dayjs";
import CustomDatepicker from "./CustomDatePicker"; // Ensure correct path
import CustomPlaceholder from "./CustomPlaceHolder";

export const Form = () => {
  const navigate = useNavigate();
  const [genderSelected, setGenderSelected] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [showMobileTimePicker, setShowMobileTimePicker] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(null);

  const toggleMobileTimePicker = () => {
    setShowMobileTimePicker(!showMobileTimePicker);
  };

  const handleMobileTimeChange = (newTime) => {
    setSelectedTime(newTime);
    // setShowMobileTimePicker(false); // Hide the mobile time picker after selecting a time
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  const handleGenderSelect = (gender) => {
    setGenderSelected(gender === genderSelected ? null : gender);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state.value);
  };

  // Check if all required fields are filled
  const isFormComplete =
    genderSelected && selectedDate && selectedTime && selectedState;

  const handleSaveAndContinue = () => {
    // Perform login logic here
    // For demo purposes, simulate successful login

    // Save form data to local storage
    const formData = {
      genderSelected,
      selectedState: selectedState,
      selectedDate,
      selectedTime,
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    // Navigate to Home component
    navigate("/confirmingDetails");
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setGenderSelected(parsedData.genderSelected);
      setSelectedDate(parsedData.selectedDate);
      // setSelectedTime(parsedData.selectedTime);
    }
  }, []);

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
            <Box
              sx={{
                minWidth: "127px",
                height: "44px",
                backgroundColor: selectedDate ? "#29911B" : "#111111",
                borderRadius: "7px",
                p: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                cursor: "pointer",
              }}
              onClick={() => setIsDatePickerOpen(true)} // Open the datepicker modal on click
            >
              <img
                src="calendar.svg"
                width="24px"
                height="24px"
                alt="calendar"
              />
              <Typography sx={{ fontSize: "15px", color: "#FFFFFF" }}>
                {selectedDate
                  ? dayjs(selectedDate).format("ddd - DD - MMM - YYYY")
                  : "Select date"}
              </Typography>
            </Box>
          </div>
          <div className="frame-9">
            <div className="frame-7">
              <div className="text-wrapper-6">Time of Birth</div>
              <p className="text-wrapper-7">
                (Accurate Time is crucial for precise astrological analysis)
              </p>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                onChange={handleMobileTimeChange}
                open={showMobileTimePicker}
                onOpen={() => setShowMobileTimePicker(true)}
                onClose={() => setShowMobileTimePicker(false)}
                minutesStep={5} // Set minutesStep to allow selection of minutes
                sx={{
                  display: "none",
                }}
              />

              {/* Custom Box component to trigger mobile time picker */}
              <Box
                sx={{
                  minWidth: "100px",
                  height: "44px",
                  backgroundColor: selectedTime ? "#29911B" : "#111111",
                  borderRadius: "7px",
                  p: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onClick={toggleMobileTimePicker}
              >
                <img src="time.svg" width="24px" height="24px" alt="time" />
                <Typography sx={{ fontSize: "15px", color: "#FFFFFF" }}>
                  {selectedTime
                    ? dayjs(selectedTime).format("hh:mm A") // Format with AM/PM
                    : "Select time"}
                </Typography>
              </Box>
            </LocalizationProvider>
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
                components={{ Placeholder: CustomPlaceholder }}
                styles={{
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                }}
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
      <CustomDatepicker
        open={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
    </div>
  );
};
