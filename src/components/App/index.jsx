import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../../pages/Home'
import Credits from '../../pages/Credits'
import './style.css'

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route component = { <Home /> } path = '/home' exact />
        <Route component = { <Credits /> } path = '/creditos' />
      </Routes>
    </BrowserRouter>
  )
}

export default App