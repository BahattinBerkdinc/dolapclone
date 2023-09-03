import React from 'react'
import "./banner.scss"
import { Container } from 'react-bootstrap'
import appleBtn from "../../assets/images/btn-apple.webp"
import googleBtn from "../../assets/images/btn-google.webp"

const Banner = () => {
  return (
    <Container >
        <div className="banner">
             <img src="https://cdn.dolap.com/web/images/img-1v9.jpg" alt="" />
             
             <div className='link-btns d-flex justify-content-center gap-4'>
                <a href='https://apps.apple.com/app/id1127881507?mt=8"' target='_blank' rel='noreferrer'>
                    <img src={appleBtn} alt="" />
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.dolap.android&referrer=adjust_reftag%3DcZuCp38lTvik8%26utm_source%3DOrganic-Website%26utm_campaign%3DHomepage%26utm_content%3DHeader%2BIcon' target='_blank' rel='noreferrer'>
                    <img src={googleBtn} alt="" />
                </a>
                </div>
        </div>
    </Container>
  )
}

export default Banner
