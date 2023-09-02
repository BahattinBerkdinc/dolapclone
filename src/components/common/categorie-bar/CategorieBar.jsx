import React from 'react'
import "./categoriebar.scss";
import categoryData from "../../../data/categorieData.json"
import { Container } from 'react-bootstrap';

const color1 = "#7C5CC5";
const color2 = "#44CBA3";
const color3 = "#E73E61";
const color4 = "#EEC251";
const CategorieBar = () => {

  return (
   <>
    <div className='categorie-bar'>

{
    categoryData.categories.map((item)=>(
        <div className="categorie-bar-main-box">
    <div className="categorie-bar-box" 
    style={{backgroundColor: 
    item.name==="Giyim" ? color1 : item.name==="Ayakkabı" ? color2 : item.name==="Çanta" ? color3 : color4}}>
        <span>{item.name}</span>
    </div>
    <div className="categorie-bar-bottom">
        {
            item.sub_categories.map((item)=>(
                <div>
                <img src={item.imageUrl} alt="" />
                <span>{item.name}</span>
            </div>
            ))
        }
       
    </div>
    </div>
    ))
}

</div>
<Container >
<div className="banner">
    <img src={require("../../../assets/images/dolap_banner.jpeg")} alt="" />
    <div className="banner-text">
        <img src={require("../../../assets/images/trendyolLogo.png")} alt="" />
        <span>GUVENCESIYLE</span>
    </div>
</div>
</Container>
   </>
  )
}

export default CategorieBar
