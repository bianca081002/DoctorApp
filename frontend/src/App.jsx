import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyApointements from './pages/MyAppointements'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className = 'mx-4 sm:mx-[10%]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctor/:speciality' element={<Doctor/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyApointements />} />
        <Route path='/appointment/:doctorId' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App