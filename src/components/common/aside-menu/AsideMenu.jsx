import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/logo/dolaplogo.svg"
import "./asidemenu.scss"
const AsideMenu = ({showAsideMenu,setShowAsideMenu}) => {

  const handleClick = () => {
    setShowAsideMenu(false)
  }
  

  return (
    <div className="aside-menu" style={{transform: showAsideMenu ? "translateX(0)" : "translateX(-100%)"}}>
      <Link to="/" onClick={handleClick}>
        Ana Sayfa
      </Link>
      <Link to="/nasil-calisir"  onClick={handleClick}>
        Nasıl Çalışır?
      </Link>
      <a href="https://dolap-help.freshdesk.com/support/solutions" target='_blank' rel='noreferrer' onClick={handleClick}>
        Dolap Destek
      </a>
      <Link to="/iletisim" onClick={handleClick}>
        İletişim
      </Link>
      <Link onClick={handleClick}>
        Giriş Yap
      </Link>
      <Link onClick={handleClick}>
      <img src={logo} alt="" />
      </Link>
    </div>
  )
}

export default AsideMenu
