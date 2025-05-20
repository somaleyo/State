import './info.css'
export default function Info(props) {
    return(
        <>
            <h1>Personal info</h1>
            <h6>Please provide your name, email address and phone number.</h6>

            <div className="informations">
                <h5>Your name is:</h5>
                <input type="text" placeholder='Ving-six' />
                <h5>Your email is:</h5>
                <input type="text" placeholder='Ving-six@email.com' />
                <h5>Your phone number is:</h5>
                <input type="text" placeholder='ex +3204034885' />
            </div>
        </>
    )
}