import './addon.css'
import React, { useState } from 'react';


export default function Addon(props) {
    

   const selectedOptions = props.formData.addons;
    const isYearly = props.formData.billingCycle;

    const handleOptionChange = (option) => {
        // Mettre à jour l'état global
        props.setFormData({
            ...props.formData,
            addons: {
                ...props.formData.addons,
                [option]: !props.formData.addons[option]
            }
        });
    };
       const getAddonPrice = (addonName) => {
        const basePrice = props.prices[addonName]; // Le prix mensuel
        if (isYearly) {
            return `+$${basePrice * 10}/yr`;
        }
        return `+$${basePrice}/mo`;
    };
  return (
    <>
    <h1>Pick add-ons</h1>
            <h6>Add-ons help enhance your gaming experience</h6>
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
                        <div className="option-price">{getAddonPrice("online")}</div>
                    </div>
                    
                    {/* Appliquez la même logique pour les autres options */}
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
                        <div className="option-price">{getAddonPrice("storage")}</div>
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
                                <h3 className="option-title">Customizable profile</h3>
                                <p className="option-description">Custom theme on your Profile</p>
                            </div>
                        </label>
                        <div className="option-price">{getAddonPrice("profile")}</div>
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

