import React from 'react'
import Header from './src/Layout/Header'
import Footer from './src/Layout/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout