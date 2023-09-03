import React, { useState } from 'react'
import { Container, Form, NavLink } from 'react-bootstrap'
import logo from "../../../assets/logo/dolaplogo.svg"
import { BsSearch } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import "./header.scss"
import CategorieBar from '../categorie-bar/CategorieBar'
import AsideMenu from '../aside-menu/AsideMenu'
import { Link } from 'react-router-dom'



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
            <Link to="/" className={`logo ${searchClick ? "none" : "flex"}` }>
                <img src={logo} alt="dolap_logo" />
            </Link>
            <Form>
                <div className={`search-input-box ${searchClick ? "stretch" : ""}` }>
                <Form.Control className={`${searchClick ? "flex" : "none"}` } type="text" placeholder="Ürün @üye, #etiket ara" />
                <BsSearch  onClick={()=>setSearchClick(!searchClick)}/>
                </div>
            </Form>
            <div className="login">
                <NavLink to="/login">Giriş Yap</NavLink>
            </div>
            </div>
        </Container>
        <CategorieBar/>
        <AsideMenu showAsideMenu={showAsideMenu} setShowAsideMenu={setShowAsideMenu}/>
    </header>
  )
}

export default Header
