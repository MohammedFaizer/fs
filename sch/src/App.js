
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
const[user,setUser]=useState("Home"); 
const[slot1,setslot1]=useState(5);
const[slot2,setslot2]=useState(5);
const[slot3,setslot3]=useState(5);
const[slot4,setslot4]=useState(5);

if(user ==='Student')
{
  return (
    <>
    <button type='submit' onClick={()=>setUser('Home') } id='home_btn'>Home</button>
    <br></br>
    <h1 style={{marginLeft:'50px'}}>{user} Page</h1>
    <form>
    <input type='text' placeholder='Enter Your RollNumber'></input>
    <input type='text' placeholder='Enter Your Name'></input>
    <input type='text' placeholder='Enter Your Team Number'></input>
    <br/>
    <select >
    <option>None</option>
    <option value='{slot1}'>Slot-1(8:00  - 9:00){slot1}</option>
    <option value='{slot2}'>Slot-2(9:00  - 10:00)</option>
    <option value='{slot3}'>Slot-3(10:00 - 11:00)</option>
    <option value='{slot4}'>Slot-4(11:00 - 12:00)</option>
    </select>
    </form>

    <button type='submit' onClick={()=>setslot1(slot1-1) } id='book-btn'>Book</button>
<text style={{color:'white'}}>{slot1}</text>
   </>
  )}

  else if(user==="Faculty"){
  return(
    <>
    <button type='submit' onClick={()=>setUser('Home')} id='home_btn'>Home</button>
    <br></br>
  <h1 style={{marginLeft:'50px'}}>{user} Page</h1>
  </>
  )
}



if(user==='Home')
{
  return (
    <>
<center>
<h1>Mini Project Scheduler</h1>
    <button type='submit' id='btn_st' onClick={() => setUser("Student")}>Student</button>
         <button type="submit" id='btn_fa' onClick={() => setUser("Faculty")}>Faculty</button>
         </center>
         
        

     </>
 
  );
  }
}

export default App;
