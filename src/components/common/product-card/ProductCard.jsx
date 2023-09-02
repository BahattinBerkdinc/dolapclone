import React from 'react'
import "./productcard.scss"
import {IoPersonAddOutline} from "react-icons/io5";
import {LiaChevronDownSolid} from "react-icons/lia";
import {BiComment} from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai";
const ProductCard = ({products}) => {

    const {userImage, userName, rate,stars, productImage, productName, productPrice, productPrice_old, like, comment} = products

  return (
    <div className=" card  product-card mt-5  h-80">
        <div className="card-top">
            <div className="card-top-left">
                <div className="profile-image">
                    <img src={userImage} alt="" />
                </div>
                <div className="left-content">
                    <span>{userName}</span>
                    <div className="stars">
                        {
                            [...Array(5)].map((_, i) => {
                                return <AiOutlineStar key={i} style={i<stars ? {color:"goldenrod"}:{color:"lightgrey"}} />
                            })
                        }
                        <span>({rate})</span>
                    </div>
                </div>
            </div>
            <div className="card-top-right">
                <IoPersonAddOutline/>
            </div>
        </div>
        <div className="card-mid">
            <img src={productImage} alt="" />
            <div className="prod-tag">Yeni & <br /> Etiketli</div>
        </div>
        <div className="card-bottom">
            <div className="card-bottom-top">
                <div className="prod-info">
                    <span>{productName}</span>
                    <span>urun bilgisi</span>
                </div>
                <div className="prod-price">
                    <span>{productPrice_old}</span>
                    <span>{productPrice}</span>
                </div>
            </div>
            <div className="card-bottom-bottom">
                <div className="left">
                    <LiaChevronDownSolid/>
                    <span>{like} begeni</span>
                </div>
                <div className="line"></div>
                <div className="right">
                    <BiComment/>
                    <span>{comment} Yorum</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
