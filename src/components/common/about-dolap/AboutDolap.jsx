import React, { useState } from 'react'
import "./aboutdolap.scss"
import aboutDolap from "../../../data/aboutDolap.json"
import { NavLink } from 'react-bootstrap';


const AboutDolap = () => {

    const [show,setShowMore] = useState(false)


  return (
    <div className='aboutDolap'>
        <h3>{aboutDolap[0].title} <NavLink>Dolap.com</NavLink> </h3>
        {
            aboutDolap[0].paragraph.map((prgrf,index)=>(
                <p key={index}>{prgrf}</p>
            ))
        }

        <div className={`show-infos flex-column ${show ? "d-flex" : "d-none"}`} >
        <h4>{aboutDolap[0].title2}</h4>
        <p>{aboutDolap[0].title2_paragraph[0]}</p>
        <p>{aboutDolap[0].title2_paragraph[1]}</p>

        <h5>{aboutDolap[0].title2_subtitle}</h5>

        {
            aboutDolap[0].title2_subtitle_content.map((subContent,index)=>(
                <div key={index} className="sub-content">
                    <h6>{subContent.title}</h6>
                    <p>{subContent.paragraph.map((prgrf)=>(<p>{prgrf}</p>))}</p>
                </div>
            ))
        }
        </div>

        <div className="show-btn" onClick={()=>setShowMore(!show)}>Show More...</div>
        
    </div>
  )
}

export default AboutDolap
