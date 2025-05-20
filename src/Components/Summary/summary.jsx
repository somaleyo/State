import { useState } from 'react'
import './summary.css'

export default function Summary(props) {
    return(

        <>
            <h1>Finishing up</h1>
            <h6>Doule-check everything looks OK before comfirming</h6>

            <div className='confirmation'>
                <div>
                    <div className="description">
                         <h3>{props.plan} </h3>
                         <h6 className='change'>Change</h6>
                    </div>
                    <h3>{props.pricing}</h3>
                </div>
                <hr />
                <div className="addons">
                    <h6>{props.addon} </h6>
                    <h3>{props.prix} </h3>
                </div>
                <div className="somme">
                    <h6>Total {props.temps}</h6>
                    <h2>{props.total} </h2>
                </div>
                <button className="btn btn-back">
                    Go Back
                </button>
                <button className="btn btn-next">
                    Next Step</button>                

            </div>
        </>
    )
}