import { useState } from 'react'
import bg from '/src/assets/images/sidebar.svg'
import './App.css'
import Info from './Components/Info/info'
import Plan from './Components/Plan/plan'
import Addon from './Components/ad/addon'
import Summary from './Components/Summary/summary'
import Merci from './Components/Thanks/merci'

function App() {
 const [isinfo,setIsinfo]= useState(true)
 const [isplan,setIsplan]= useState(false)
 const [isaddon,setIsaddon]= useState(false)
 const [issummary,setIssummary]= useState(false)
 const [ismerci,setIsmerci]= useState(false)
 const infoNextClick = ()=>{
  setIsinfo(false)
  setIsplan(true)
 }
 const planBackClick = ()=>{
  setIsinfo(true)
  setIsplan(false)
 }
 const planNextClick = ()=>{
  setIsplan(false)
  setIsaddon(true)
 }
 const addonBackClick = () =>{
  setIsaddon(false)
  setIsplan(true)
 }
 const addonNextClick =()=>{
  setIsaddon(false)
  setIssummary(true)
}
const summaryBackClick =()=>{
  setIssummary(false)
  setIsaddon(true)
} 
const summaryNextClick =()=>{
  setIssummary(false)
  setIsmerci(true)
}

  return (
    <>
    <div className="container">
      <div className="leftside">
        <img src={bg} className='bg-img' alt="" />
        <div className="steps">
           <span className='numero'>1</span>
           <div className="text">
           <p>STEP 1</p>
           <h3>YOUR INFO</h3>
           </div>
        </div>
        <div className="steps">
           <span className='numero'>2</span>
           <div className="text">
           <p>STEP 2</p>
           <h3>SELECT PLAN</h3>
           </div>
        </div>
        <div className="steps">
           <span className='numero'>3</span>
           <div className="text">
           <p>STEP 3</p>
           <h3>ADD-ONS</h3>
           </div>
        </div>
        <div className="steps">
           <span className='numero'>4</span>
           <div className="text">
           <p>STEP 4</p>
           <h3>SUMMARY</h3>
           </div>
        </div>
       
      </div>
      <div className="rightside">
        {isinfo ? <Info event={infoNextClick}/>:''}
        {isplan ? <Plan back={planBackClick} next={planNextClick}/>:''}
        {isaddon? <Addon back={addonBackClick} next={addonNextClick} />:''}
        {issummary ? <Summary back={summaryBackClick} next={summaryNextClick} />:''}
        {ismerci ? <Merci/>:''}
        
      </div>

    </div>
   
    </>
  )
}

export default App
