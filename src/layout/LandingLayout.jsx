import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'



function LandingLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        
    </>
  )
}

export default LandingLayout
