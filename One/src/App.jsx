import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Item({ message, value = 0.0 }) {
  return (
    <div className='item'>
      <div className='item__left'>{message}</div>
      <div className='item__right'>{value}</div>
    </div>
  )
}


function App() {
const[unit,setUnit]=useState(0);
const [netAmount, setNetAmount] = useState(0)
const [currentCharge, setCurrentCharge] = useState(0)
const nullcond = () => {
  if (unit <= 0 ) {
    alert('Enter Valid Units')
    return
  }
  
    setNetAmount(calculate(unit))
  
}
const calculate=(e)=>{
  let subsidy = 250
  let f = 0

  if (e >= 0 && e <= 100) f = 0
  else if (e > 100 && e <= 150) f = e*3.75
  else if (e > 150 && e <= 200) f = 100 + 3.75 * e
  else if (e > 200 && e <= 350) f =e*4
  else if (e> 350 && e <= 400) f = 250 + 4 * e
  else if (e > 400 && e <= 450) f = 4.25*e
  else if (e > 450 && e <= 600) f = 300 + 4.25 * e
  else f = 400 + 5 * e 



  if (f < 250) subsidy = 0

  setCurrentCharge(f)
  return f + 50 - subsidy
}



  return (

    <>
    

        <h1>. . Shan Tech . .</h1>
        <input type='number' placeholder='Enter the Units' id='units' onChange={(e) => setUnit(Number(e.target.value))}></input>
        <br></br>
        <button type="submit" onClick={nullcond}>check</button>
        <br></br>
        <center>
        <table border='1px'>

          <tr>
            <td>Consumed Units</td>
            <td>{unit}</td>
          </tr>
          <tr>
            <td>Total Current Charge Rs:</td>
            <td>{currentCharge}</td>
          </tr>
          <tr>
            <td>Current Charge Rs.</td>
            <td>{currentCharge}</td>
          </tr>
          <tr>
            <td>Fixed Cost Rs.(+)</td>
            <td>{50}</td>
          </tr>
          <tr>
            <td>Subsidy Fixed Cost Rs.(-)s</td>
            <td>{0}</td>
          </tr>

          <tr>
            <td>New Subsidy Rs.(-)</td>
            <td>{250}</td>
          </tr>
          
          <tr>
         
            <td>Net Amount</td>
            <td>{netAmount}</td>
          </tr>


















        </table>
        </center>
      
    </>
  )
}

export default App
