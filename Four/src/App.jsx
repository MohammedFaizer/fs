import { useState } from 'react'
import cit from'./citiy.json'
import './App.css'
import green from './assets/greenpin.png'
import red from './assets/pin.png'
import calendar from './assets/calendar.png'
function App() {
 const autocomplete=(cit)=>{
  alert.log(cit);
 }
  const[show,setshow]=useState(false);
  const [pickup,setPickup]=useState('');
  const[drop,setDrop]=useState('');
  //const sugession=cit.filter(cit()=>cit.);
  return (
   <>
<h1>Go Taxi</h1>
<img src={green}></img>
    <input type= 'text' placeholder='pickup' onChange={(e)=>setPickup(e.target.value)} onFocus={()=>setshow(true)} ></input>
    <br></br>
    <img src={red}></img>
    <input type= 'text' placeholder='drop' onChange={(e)=>setDrop(e.target.value)} ></input>
    <br></br>
    <img src={calendar}></img>
    <input type='datetime-local' id='cl' ></input>

  
    <br></br>
   
    <select >
   <option value="Suv">Suv</option>
   <option value="HatchBack">Hatchback</option>
   <option value="Sedan">Sedan</option>
    </select>
<br></br>
    <button type='submit' >Book Ride</button>
  
   {show && (
    <ul>
        {
            sugession.map(sugession=>
                {
                    <li key={sugession}/>
                })
        }
    </ul>
   )}
    </> 
      )
    }
    
    export default App
