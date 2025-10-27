// import { useState } from 'react'
// import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container">
          <Home />
        </div>} />
      </Routes>
    </Router>
  )
}

export default App
