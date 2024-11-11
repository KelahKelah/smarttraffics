import { useState } from 'react'
import { Users, Cloudfare } from '../src/assets'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrap'>
      <img className='userTrafficImage' src={Users} alt='user traffic' />
      <h1>Your Traffic rate in a day is </h1>
      <h1> 569</h1>
      <button>Click here for more</button>

      <p>Powered by</p>
      <img className='cloudfareLogo'  src={Cloudfare} alt='logo' /> 
    </div>
  )
}

export default App
