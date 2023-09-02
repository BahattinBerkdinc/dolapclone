import React from 'react'
import "./productcard.scss"
import {IoPersonAddOutline} from "react-icons/io5";
import {LiaChevronDownSolid} from "react-icons/lia";
import {BiComment} from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai";
const ProductCard = () => {
  return (
    <div className="product-card">
        <div className="card-top">
            <div className="card-top-left">
                <div className="profile-image">
                    <img src="" alt="" />
                </div>
                <div className="left-content">
                    <span>kullanici adi</span>
                    <div className="stars">
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <span>(95)</span>
                    </div>
                </div>
            </div>
            <div className="card-top-right">
                <IoPersonAddOutline/>
            </div>
        </div>
        <div className="card-mid">
            <img src="https://cdn.dolap.com/web/images/none.png" alt="" />
            <div className="prod-tag">Yeni & <br /> Etiketli</div>
        </div>
        <div className="card-bottom">
            <div className="card-bottom-top">
                <div className="prod-info">
                    <span>Ürün Adı</span>
                    <span>urun bilgisi</span>
                </div>
                <div className="prod-price">
                    <span>400 TL</span>
                    <span>300 TL</span>
                </div>
            </div>
            <div className="card-bottom-bottom">
                <div className="left">
                    <LiaChevronDownSolid/>
                    <span>48 begeni</span>
                </div>
                <div className="line"></div>
                <div className="right">
                    <BiComment/>
                    <span>0 Yorum</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
