import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Header from './Components/Header'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Sign-in' element={<Signin/>}/>
        <Route path='/Sign-up' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
