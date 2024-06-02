import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/about' element={About}></Route>
        <Route path='/Sign-in' element={Signin}></Route>
        <Route path='/Sign-up' element={Signup}></Route>
        <Route path='/profile' element={Profile}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}
