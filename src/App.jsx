import { useState } from 'react'
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
const changeClick =()=>{
  setIssummary(false)
  setIsplan(true)
}
const Monthly = {
  arcade:9,
  advanced:12,
  pro:15,
  online:1,
  storage:2,
  profile:2,
}

const [formData, setFormData] = useState({
  plan: null, // 'arcade', 'advanced', ou 'pro'
  billingCycle: false, // false pour mensuel, true pour annuel
  addons: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  }
});
  return (
    <>
    <div className="container">
      <div className="leftside">
        
        <div className="steps">
           <span className={isinfo? 'active numero':'numero'}>1</span>
           <div className="text">
           <p>STEP 1</p>
           <h3>YOUR INFO</h3>
           </div>
        </div>
        <div className="steps">
           <span className={isplan? 'active numero':'numero'}>2</span>
           <div className="text">
           <p>STEP 2</p>
           <h3>SELECT PLAN</h3>
           </div>
        </div>
        <div className="steps">
           <span className={isaddon? 'active numero':'numero'}>3</span>
           <div className="text">
           <p>STEP 3</p>
           <h3>ADD-ONS</h3>
           </div>
        </div>
        <div className="steps">
           <span className={issummary? 'active numero':'numero'}>4</span>
           <div className="text">
           <p>STEP 4</p>
           <h3>SUMMARY</h3>
           </div>
        </div>
       
      </div>
      <div className="rightside">
        {isinfo ? <Info event={infoNextClick}/>:''}
        {isplan ? <Plan back={planBackClick} next={planNextClick} arcade={Monthly.arcade} advanced={Monthly.advanced} pro={Monthly.pro} formData={formData}
    setFormData={setFormData}/>:''}
        {isaddon? <Addon back={addonBackClick} next={addonNextClick} formData={formData}
      setFormData={setFormData}
        isYearly={formData.billingCycle}
      prices={Monthly} />:''}
        {issummary ? <Summary back={summaryBackClick} next={summaryNextClick} formData={formData}
      setFormData={setFormData}
      prices={Monthly} change={changeClick}/>:''}
        {ismerci ? <Merci/>:''}
        
      </div>

    </div>
   
    </>
  )
}

export default App
