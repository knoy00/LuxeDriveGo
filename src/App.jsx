import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  )
}

export default App
