import React from 'react'
import { NavLink } from 'react-bootstrap'
import logo from "../../../assets/logo/dolaplogo.svg"
import "./asidemenu.scss"
const AsideMenu = ({showAsideMenu}) => {
  return (
    <div className="aside-menu" style={{transform: showAsideMenu ? "translateX(0)" : "translateX(-100%)"}}>
      <NavLink>
        Ana Sayfa
      </NavLink>
      <NavLink>
        Nasil Çalışır?
      </NavLink>
      <NavLink>
        Dolap Destek
      </NavLink>
      <NavLink>
        İletişim
      </NavLink>
      <NavLink>
        Markalar
      </NavLink>
      <NavLink>
        Giriş Yap
      </NavLink>
      <NavLink>
      <img src={logo} alt="" />
      </NavLink>
    </div>
  )
}

export default AsideMenu
