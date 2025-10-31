// import { useState } from 'react'
// import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import './pages/Page.css'
import Home from './pages/home.tsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<div className="app-container">
          <Home />
        </div>} />
      </Routes>
    </Router>
  )
}

export default App