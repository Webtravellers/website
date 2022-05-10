import React from 'react'
import { Outlet } from 'react-router'
import TopNavbar from '../components/navbars/TopNavbar'
import Footer from '../components/footer/Footer'

const BaseLayout = () => {
  return (
    <div>
        <TopNavbar />
        <Outlet />        
        <Footer />
    </div>
  )
}

export default BaseLayout