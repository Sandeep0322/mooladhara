import React, { useState } from "react";
import "./Package.css";

export const Pacakage = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // Initial state is open

  const handleClose = () => {
    setIsOpen(false); // Set state to close the package
    onClose(); // Call parent's onClose function to handle any additional logic
  };

  if (!isOpen) {
    return null; // If not open, don't render the component
  }
  return (
    <div className="pacakage">
      <div className="overlap">
        <div className="rectangle-2" />
        <div className="frame-20">
          <img
            className="cancel"
            onClick={handleClose}
            alt="Cancel"
            src="close.svg"
          />
          <div className="frame-21">
            <div className="frame-22">
              <div className="text-wrapper-31">USD</div>
            </div>
            <div className="text-wrapper-32">Dollar</div>
            <img className="arrow-down" alt="Arrow down" src="down.svg" />
          </div>
          <div className="text-wrapper-33">Select Package</div>
          <div className="frame-23">
            <div className="text-wrapper-34">Question credits</div>
            <div className="text-wrapper-35">$10</div>
            <div className="frame-24">
              <img className="zap" alt="Zap" src="boost.svg" />
              <div className="text-wrapper-36">1</div>
            </div>
          </div>
          <div className="frame-25">
            <div className="text-wrapper-37">Question credits</div>
            <div className="text-wrapper-38">$2 per question</div>
            <div className="text-wrapper-35">$30</div>
            <div className="frame-26">
              <img className="zap" alt="Zap" src="boost.svg" />
              <div className="text-wrapper-39">15</div>
            </div>
            <div className="frame-27">
              <img className="single-fire" alt="Single fire" src="fire.svg" />
              <div className="text-wrapper-40">Save $8</div>
            </div>
          </div>
          <div className="frame-28">
            <div className="text-wrapper-34">Question credits</div>
            <div className="text-wrapper-35">$20</div>
            <div className="frame-24">
              <img className="zap" alt="Zap" src="boost.svg" />
              <div className="text-wrapper-4">7</div>
            </div>
            <div className="frame-29">
              <img className="single-fire" alt="Single fire" src="fire.svg" />
              <div className="text-wrapper-40">Save $7.2</div>
            </div>
            <div className="text-wrapper-38">$2.8 per question</div>
          </div>
          <div className="frame-30">
            <div className="text-wrapper-37">Question credits</div>
            <div className="text-wrapper-35">$40</div>
            <div className="frame-31">
              <img className="zap" alt="Zap" src="boost.svg" />
              <div className="text-wrapper-36">40</div>
            </div>
            <div className="frame-32">
              <img className="single-fire" alt="Single fire" src="fire.svg" />
              <div className="text-wrapper-40">Save $9</div>
            </div>
            <div className="text-wrapper-38">$1 per question</div>
          </div>
        </div>
      </div>
    </div>
  );
};
