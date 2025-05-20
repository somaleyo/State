import React, { useState } from 'react'
import './plan.css'
import arcade from '/src/assets/images/arcade.svg'
import advanced from '/src/assets/images/advenced.svg'
import pro from '/src/assets/images/pro.svg'

export default function Plan(props) {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggleChange = () => {
        setIsYearly(!isYearly);
    };

    const handleMonthlyClick = () => {
        setIsYearly(false);
    };

    const handleYearlyClick = () => {
        setIsYearly(true);
    };

    return(
        <>
            <h1>Select your plan</h1>
            <h6>You have the option of monthly or yearly billing</h6>

            <div className="billing-container">
                <div className="arcade box">
                    <img src={arcade} alt="" className="icon" />
                    <h5>Arcade</h5>
                    <p className='pricing'>${props.prix} </p>
                </div>
                <div className="advanced box">
                    <img src={advanced} alt="" className="icon" />
                    <h5>Advanced</h5>
                    <p className='pricing'>${props.prix} </p>
                </div>
                <div className="pro box">
                    <img src={pro} alt="" className="icon" />
                    <h5>Pro</h5>
                    <p className='pricing'>${props.prix} </p>
                </div>
            </div>
            <div className="toggle-container-wrapper">
                <div className="toggle-container">
                    <div 
                        className={`toggle-option ${isYearly ? "inactive" : "active"}`}
                        onClick={handleMonthlyClick}
                    >
                        Monthly
                    </div>

                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            className="toggle-checkbox"
                            checked={isYearly}
                            onChange={handleToggleChange}
                        />
                        <span className="toggle-slider">
                            <span 
                                className={`toggle-slider-button ${isYearly ? "yearly" : "monthly"}`}
                            />
                            <div className="cursor-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                    <path d="M13.75 6.75L19.25 12L13.75 17.25" />
                                    <path d="M19 12H4.75" />
                                </svg>
                            </div>
                        </span>
                    </label>

                    <div 
                        className={`toggle-option ${isYearly ? "active" : "inactive"}`}
                        onClick={handleYearlyClick}
                    >
                        Yearly
                    </div>
                </div>
            </div>
            <button className="btn btn-back">
                Go Back
            </button>
            <button className="btn btn-next">
                Next Step
            </button>
        </>
    )
}