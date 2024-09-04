import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import SignupForm from './components/SignupForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHomepage from './components/UserHomepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<UserHomepage />} />
        <Route path='/signup'element={<SignupForm />} />
      </Routes>
    </Router>

  )
}

export default App
