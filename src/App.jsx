import { useState } from 'react'
import bg from '/src/assets/images/sidebar.svg'
import './App.css'

function App() {
 
  return (
    <>
    <div className="container">
      <div className="leftside">
        <img src={bg} className='bg' alt="" />
        <div className="steps">
           <span className='numero'>1</span>
           <div className="text">
           <p>STEP 1</p>
           <h3>YOUR INFO</h3>
           </div>
        </div>
        <div className="steps">
           <span className='numero'>1</span>
           <div className="text">
           <p>STEP 1</p>
           <h3>YOUR INFO</h3>
           </div>
        </div>
        <div className="steps">
           <span className='numero'>1</span>
           <div className="text">
           <p>STEP 1</p>
           <h3>YOUR INFO</h3>
           </div>
        </div>
        <div className="steps">
           <span className='numero'>1</span>
           <div className="text">
           <p>STEP 1</p>
           <h3>YOUR INFO</h3>
           </div>
        </div>
       
      </div>
      <div className="rightside">

      </div>
    </div>
   
    </>
  )
}

export default App
