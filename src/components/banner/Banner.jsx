import React from 'react'
import "./banner.scss"
import { Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <Container >
        <div className="banner">
             <img src={require("../../assets/images/dolap_banner.jpeg")} alt="" />
             <div className="banner-text">
               <img src={require("../../assets/images/trendyolLogo.png")} alt="" />
              <span>GUVENCESIYLE</span>
             </div>
        </div>
    </Container>
  )
}

export default Banner
