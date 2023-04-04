import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Dashboard from '../pages/Dashboard'
import Detail from '../pages/Detail'

 const AppRouter = () => {
  return (
    <BrowserRouter>
         <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
export default AppRouter