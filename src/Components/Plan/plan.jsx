import React, { useState } from 'react'
import './plan.css'
import arcade from '/src/assets/images/arcade.svg'
import advanced from '/src/assets/images/advenced.svg'
import pro from '/src/assets/images/pro.svg'

export default function Plan(props) {
    const [isYearly, setIsYearly] = useState(false);
    // État pour suivre le plan sélectionné: null, 'arcade', 'advanced', ou 'pro'
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleToggleChange = () => {
        setIsYearly(!isYearly);
    };

    const handleMonthlyClick = () => {
        setIsYearly(false);
    };

    const handleYearlyClick = () => {
        setIsYearly(true);
    };

    // Fonction pour gérer la sélection d'un plan
    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    // Calculer les prix en fonction du billing cycle (mensuel ou annuel)
    const getPriceDisplay = (monthlyPrice) => {
        if (isYearly) {
            const yearlyPrice = monthlyPrice * 10; 
            return `$${yearlyPrice}/yr`;
        }
        return `$${monthlyPrice}/mo`;
    };


    return(
        <>
            <h1>Select your plan</h1>
            <h6>You have the option of monthly or yearly billing</h6>

            <div className="billing-container">
                <div 
                    className={`arcade box ${selectedPlan === 'arcade' ? 'selected' : ''}`}
                    onClick={() => handlePlanSelection('arcade')}
                >
                    <img src={arcade} alt="" className="icon" />
                    <h5>Arcade</h5>
                    <p className='pricing'>{getPriceDisplay(props.arcade)}</p>
                    {isYearly }
                </div>
                <div 
                    className={`advanced box ${selectedPlan === 'advanced' ? 'selected' : ''}`}
                    onClick={() => handlePlanSelection('advanced')}
                >
                    <img src={advanced} alt="" className="icon" />
                    <h5>Advanced</h5>
                    <p className='pricing'>{getPriceDisplay(props.advanced)}</p>
                    {isYearly}
                </div>
                <div 
                    className={`pro box ${selectedPlan === 'pro' ? 'selected' : ''}`}
                    onClick={() => handlePlanSelection('pro')}
                >
                    <img src={pro} alt="" className="icon" />
                    <h5>Pro</h5>
                    <p className='pricing'>{getPriceDisplay(props.pro)}</p>
                    {isYearly }
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
            <button className="btn btn-back" onClick={props.back}>
                Go Back
            </button>
            <button className="btn btn-next" onClick={props.next}>           
                Next Step
            </button>
        </>
    )
}
