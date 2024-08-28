import { useState } from 'react'
import './App.css'
import Header from './Header'
import WeatherList from '../data/weather-list'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='container'>
        <Header subtitle='subtitle here'></Header>
        <Routes>
          <Route path='/' element={<WeatherList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
