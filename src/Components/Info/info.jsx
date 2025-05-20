import React, { useState } from 'react';
import './info.css';

export default function Info(props) {
    // États pour stocker les valeurs des champs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Fonctions pour mettre à jour les états lorsque les champs changent
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    return(
        <>
            <h1>Personal info</h1>
            <h6>Please provide your name, email address and phone number.</h6>

            <div className="informations">
                <h5>Your name is: {name}</h5>
                <input 
                    type="text" 
                    placeholder='Ving-six' 
                    value={name}
                    onChange={handleNameChange}
                />
                
                <h5>Your email is: {email}</h5>
                <input 
                    type="text" 
                    placeholder='Ving-six@email.com' 
                    value={email}
                    onChange={handleEmailChange}
                />
                
                <h5>Your phone number is: {phone}</h5>
                <input 
                    type="text" 
                    placeholder='ex +3204034885' 
                    value={phone}
                    onChange={handlePhoneChange}
                />
            </div>
            <button className="btn btn-next" onClick={props.event}>
                Next Step
            </button>
        </>
    );
}