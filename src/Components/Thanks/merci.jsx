import './merci.css'
import check from '/src/assets/images/thankyou.svg'
export default function Merci(props) {
    return(
        <>
        <div className="merci-container">
            <img src={check} className='merci' alt="" />
            <h1>Thank you!</h1>
            <h6>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to contact our support at support@lommgaming.com</h6>
        </div>
           
        </>
    )
}