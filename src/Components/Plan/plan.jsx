import './plan.css'
import arcade from '/src/assets/images/arcade.svg'
import advanced from '/src/assets/images/advenced.svg'
import pro from '/src/assets/images/pro.svg'
export default function Plan(props) {
    return(
        <>
            <h1>Select your plan</h1>
            <h6>You have the option of monthly or yearly billing</h6>

            <div className="billing-container">
                <div className="arcade box">
                    <img src={arcade} alt="" className="icon" />
                </div>
                <div className="advanced box">
                    <img src={advanced} alt="" className="icon" />
                </div>
                <div className="pro box">
                    <img src={pro} alt="" className="icon" />
                </div>
            </div>
        
        </>
    )
}