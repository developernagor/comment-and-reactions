import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-88px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
