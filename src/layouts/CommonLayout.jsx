import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/common/header/Header.jsx"
import Footer from '../components/common/footer/Footer.jsx'
import Spacer  from "../components/common/spacer/Spacer.jsx"
const CommonLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Spacer/> 
    <Footer/>
    </>
  )
}

export default CommonLayout
