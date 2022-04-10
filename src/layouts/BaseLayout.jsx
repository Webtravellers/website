import React from 'react'
import { Outlet } from 'react-router'
import TopNavbar from '../components/navbars/TopNavbar'
const BaseLayout = () => {
  return (
    <div>
        <TopNavbar />
        <Outlet />        
        {/* ToDo: Footer componenti buraya eklenmeli */}
    </div>
  )
}

export default BaseLayout