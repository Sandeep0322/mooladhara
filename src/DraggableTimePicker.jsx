import React, { useState } from "react";
import "./DraggableTimePicker.css";

export const DraggableTimePicker = ({
  isOpen,
  selectedTime,
  onSelect,
  onClose,
}) => {
  const [time, setTime] = useState(selectedTime || "00:00");

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSave = () => {
    onSelect(time);
    onClose();
  };

  return (
    <div className={`time-picker-modal ${isOpen ? "open" : ""}`}>
      <div className="time-picker">
        <div className="time-display">
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="time-input"
          />
        </div>
        <div className="time-actions">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
