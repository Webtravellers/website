import React from 'react'
import { Outlet } from 'react-router'
import TopNavbar from '../components/navbars/TopNavbar'
import MainFooter from '../components/footers/MainFooter'
const BaseLayout = () => {
  return (
    <div className='d-flex flex-column min-vh-100' >
      <TopNavbar />
      <Outlet />
      <MainFooter />
    </div>
  )
}

export default BaseLayout