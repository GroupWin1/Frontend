import { useState } from 'react'
import './App.css'
import Header from './Header'
import WeatherList from '../data/weather-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header subtitle='subtitle here'></Header>
      <WeatherList/>
    </div>
  )
}

export default App
