import { useState } from 'react'
import './summary.css'

export default function Summary(props) {
    const { formData, prices } = props;
    const isYearly = formData.billingCycle;
    const selectedPlan = formData.plan;
    
    // Calculer le prix du plan
    const getPlanPrice = () => {
        if (!selectedPlan) return "$0";
        const basePrice = prices[selectedPlan];
        if (isYearly) {
            return `$${basePrice * 10}/yr`;
        }
        return `$${basePrice}/mo`;
    };
    
    // Obtenir le libellé du plan
    const getPlanLabel = () => {
        return selectedPlan ? selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1) : "";
    };
    
    // Fonction pour calculer le prix total des add-ons
    const calculateAddonsTotal = () => {
        let total = 0;
        if (formData.addons.onlineService) total += prices.online;
        if (formData.addons.largerStorage) total += prices.storage;
        if (formData.addons.customizableProfile) total += prices.profile;
        
        if (isYearly) total *= 10;
        return total;
    };
    
    // Fonction pour calculer le prix total global
    const calculateTotal = () => {
        let planPrice = selectedPlan ? prices[selectedPlan] : 0;
        if (isYearly) planPrice *= 10;
        
        return planPrice + calculateAddonsTotal();
    };
    
    // Vérifier si des add-ons sont sélectionnés
    const hasAddons = () => {
        return formData.addons.onlineService || 
               formData.addons.largerStorage || 
               formData.addons.customizableProfile;
    };

    return (
        <>
            <h1>Finishing up</h1>
            <h6 className='summary-h6'>Double-check everything looks OK before confirming</h6>

            <div className='confirmation'>
                <div className='description-holder'>
                    <div className="description">
                        <h3>{getPlanLabel()} ({isYearly ? "Yearly" : "Monthly"})</h3>
                        <h6 className='change' onClick={props.change}>Change</h6>
                    </div>
                    <h3>{getPlanPrice()}</h3>
                </div>
                <hr />
                
                {formData.addons.onlineService && (
                    <div className="addons">
                        <h6>Online service</h6>
                        <h3>{isYearly ? `+$${prices.online * 10}/yr` : `+$${prices.online}/mo`}</h3>
                    </div>
                )}
                
                {formData.addons.largerStorage && (
                    <div className="addons">
                        <h6>Larger storage</h6>
                        <h3>{isYearly ? `+$${prices.storage * 10}/yr` : `+$${prices.storage}/mo`}</h3>
                    </div>
                )}
                
                {formData.addons.customizableProfile && (
                    <div className="addons">
                        <h6>Customizable profile</h6>
                        <h3>{isYearly ? `+$${prices.profile * 10}/yr` : `+$${prices.profile}/mo`}</h3>
                    </div>
                )}
                
                <div className="somme">
                    <h6>Total ({isYearly ? "per year" : "per month"})</h6>
                    <h2>${calculateTotal()}/{isYearly ? "yr" : "mo"}</h2>
                </div>
                
               
            </div>
             <button className="btn btn-back" onClick={props.back}>
                    Go Back
                </button>
                <button className="btn btn-next btn-sum" onClick={props.next}>
                    Next Step
                </button>
        </>
    );
}