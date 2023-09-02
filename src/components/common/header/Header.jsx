import React, { useState } from 'react'
import { Container, Form, NavLink } from 'react-bootstrap'
import logo from "../../../assets/logo/dolaplogo.svg"
import { BsSearch } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import "./header.scss"
import CategorieBar from '../categorie-bar/CategorieBar'
import AsideMenu from '../aside-menu/AsideMenu'
const Header = () => {

    const [searchClick,setSearchClick] = useState(false);
    const [showAsideMenu,setShowAsideMenu] = useState(false);



  return (
    <header id="header">
        <Container>
            <div className="header-content">
            <NavLink className='menu-bar'>
                <GiHamburgerMenu onClick={()=>setShowAsideMenu(!showAsideMenu)}/>
            </NavLink>
            <NavLink className={`logo ${searchClick ? "d-none" : "d-flex"}` }>
                <img src={logo} alt="dolap_logo" />
            </NavLink>
            <Form>
                <div className={`search-input-box ${searchClick ? "stretch" : ""}` } onClick={()=>setSearchClick(!searchClick)}>
                <Form.Control className={`${searchClick ? "d-flex" : "d-none"}` } type="text" placeholder="Ürün @üye, #etiket ara" />
                <BsSearch/>
                </div>
            </Form>
            <div className="login">
                <NavLink to="/login">Giriş Yap</NavLink>
            </div>
            </div>
        </Container>
        <CategorieBar/>
        <AsideMenu showAsideMenu={showAsideMenu}/>
    </header>
  )
}

export default Header
