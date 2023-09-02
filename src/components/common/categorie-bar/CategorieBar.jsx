import React, { useState } from 'react'
import "./categoriebar.scss";
import categoryData from "../../../data/categorieData.json"
import {FiChevronsDown} from 'react-icons/fi'
import { Container } from 'react-bootstrap';
import Banner from '../../banner/Banner';

const color1 = "#7C5CC5";
const color2 = "#44CBA3";
const color3 = "#E73E61";
const color4 = "#EEC251";

const color1_light= "#7c5cc57a";
const color2_light= "#44cba281";
const color3_light= "#FAC2CD";
const color4_light= "#FFC942";
const CategorieBar = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [showCategorie, setShowCategorie] = useState(false);
  return (
  
    <div className='categorie-bar'>
            <div className="categorie-bar-box gap-2 categories-btn" 
            style={{backgroundColor: "#292929"}}
            onClick={()=> setShowCategorie(!showCategorie)}
            >
                <span>KATEGORILER</span> <FiChevronsDown/>
            </div>
      {categoryData.categories.map((item) => (
        
        <div
          className="categorie-bar-main-box"
          key={item.name}
          onMouseEnter={() => setHoveredCategory(item.name)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
            
          <div
            className={`categorie-bar-box ${!showCategorie ? "show" : "hide"}`}
            style={{
                backgroundColor:
                  hoveredCategory === item.name
                    ? (item.name === "Giyim" && color1_light) ||
                      (item.name === "Ayakkabı" && color2_light) ||
                      (item.name === "Çanta" && color3_light) ||
                      color4_light
                    : (item.name === "Giyim" && color1) ||
                      (item.name === "Ayakkabı" && color2) ||
                      (item.name === "Çanta" && color3) ||
                      color4,
                     
              }}
          >
            <span>{item.name}</span>
          </div>
          <div className="categorie-bar-bottom">
            {item.sub_categories.map((subItem) => (
              <div key={subItem.name}>
                <img src={subItem.imageUrl} alt="" />
                <span>{subItem.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
   
  
  )
}

export default CategorieBar
