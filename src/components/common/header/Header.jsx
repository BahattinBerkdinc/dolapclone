import React from 'react'
import { Container, Form, NavLink } from 'react-bootstrap'
import logo from "../../../assets/logo/dolaplogo.svg"
import "./header.scss"
import CategorieBar from '../categorie-bar/CategorieBar'
const Header = () => {
  return (
    <header id="header">
        <Container>
            <div className="header-content">
            <NavLink className='logo'>
                <img src={logo} alt="dolap_logo" />
            </NavLink>
            <Form>
                <Form.Control type="text" placeholder="Ürün @üye, #etiket ara" />
            </Form>
            <div className="login">
                <NavLink to="/login">Giriş Yap</NavLink>
            </div>
            </div>
        </Container>
        <CategorieBar/>
    </header>
  )
}

export default Header
