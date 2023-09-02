import React from 'react'
import "./footer.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import appleBtn from "../../../assets/images/btn-apple.webp"
import googleBtn from "../../../assets/images/btn-google.webp"
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <Container>
            <Row>
                <div className='d-flex justify-content-center gap-4'>
                <NavLink>
                    <img src={appleBtn} alt="" />
                </NavLink>
                <NavLink>
                    <img src={googleBtn} alt="" />
                </NavLink>
                </div>
                <Col className='mt-5'>
                        <h2>Kategoriler</h2>
                    <div>
                    <Col>
                        <Link>Kol Çantası</Link>
                        <Link>Mont</Link>
                        <Link>Kazak</Link>
                        <Link>Çüzme</Link>
                        <Link>Bot</Link>
                    </Col>
                    <Col>
                        <Link>Hamile</Link>
                        <Link>Bebek</Link>
                        <Link>Erkek Çocuk</Link>
                        <Link>Kız Çocuk</Link>
                        <Link>Tesettür</Link>
                    </Col>
                    </div>
                </Col>
                <Col className='mt-5'>
                        <h2>Popüler Aramalar</h2>
                    <div>
                    <Col>
                        <Link>Zara</Link>
                        <Link>Mango</Link>
                        <Link>Nike</Link>
                        <Link>H&M</Link>
                        <Link>Ipekyol</Link>
                    </Col>
                    <Col>
                        <Link>Louis Vouitton</Link>
                        <Link>Michael Kors</Link>
                        <Link>Gucci</Link>
                        <Link> Channel</Link>
                        <Link>Prada</Link>
                    </Col>
                    </div>
                </Col>
                <Col className='mt-5'>
                        <h2>Dolap Hakkında</h2>
                    <Col>
                        <Link>Kullanıcı Sözleşmesi</Link>
                        <Link>İletişim</Link>
                        <Link>Destek</Link>
                        <Link>Satıcı Soruları</Link>
                        <Link>Alıcı Soruları</Link>
                        <Link>Kişisel Verilerin Korunması</Link>
                        <Link>Dahili İletişim Sistemi</Link>
                    </Col>
                </Col>
            </Row>
            <div className='social'>
                <NavLink>
                <BsTwitter/>
                </NavLink>
                <NavLink>
                <BsFacebook/>
                </NavLink>
                <NavLink>
                <BsInstagram/>
                </NavLink>
            </div>
        </Container>
    </div>
  )
}

export default Footer
