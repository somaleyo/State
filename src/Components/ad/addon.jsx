import './addon.css'
import React, { useState } from 'react';


export default function Addon(props) {
    
 // État initial avec toutes les options désélectionnées (false)
  const [selectedOptions, setSelectedOptions] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  });

  const handleOptionChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option]
    });
  };

  return (
    <>
    <h1>Pick add-ons</h1>
    <h6>Add-ons help enchance your gaming experience</h6>
    <div className="subscription-container">
      <div className="subscription-list">
        <div className={`subscription-option ${selectedOptions.onlineService ? "selected" : ""}`}>
          <label className="option-label">
            <input
              type="checkbox"
              checked={selectedOptions.onlineService}
              onChange={() => handleOptionChange("onlineService")}
              className="option-checkbox"
            />
            <span className="checkbox-custom"></span>
            <div className="option-content">
              <h3 className="option-title">Online service</h3>
              <p className="option-description">Access to multiplayer games</p>
            </div>
          </label>
          <div className="option-price">+$1/mo</div>
        </div>

        <div className={`subscription-option ${selectedOptions.largerStorage ? "selected" : ""}`}>
          <label className="option-label">
            <input
              type="checkbox"
              checked={selectedOptions.largerStorage}
              onChange={() => handleOptionChange("largerStorage")}
              className="option-checkbox"
            />
            <span className="checkbox-custom"></span>
            <div className="option-content">
              <h3 className="option-title">Larger storage</h3>
              <p className="option-description">Extra 1TB of cloud save</p>
            </div>
          </label>
          <div className="option-price">+$2/mo</div>
        </div>

        <div className={`subscription-option ${selectedOptions.customizableProfile ? "selected" : ""}`}>
          <label className="option-label">
            <input
              type="checkbox"
              checked={selectedOptions.customizableProfile}
              onChange={() => handleOptionChange("customizableProfile")}
              className="option-checkbox"
            />
            <span className="checkbox-custom"></span>
            <div className="option-content">
              <h3 className="option-title">Customizable Profile</h3>
              <p className="option-description">Custom theme on your profile</p>
            </div>
          </label>
          <div className="option-price">+$2/mo</div>
        </div>
      </div>
    </div>
    <button className="btn btn-back" onClick={props.back}>
        Go Back
    </button>
    <button className="btn-next btn" onClick={props.next}>
        Next Step
    </button>
    </>
  );
}

