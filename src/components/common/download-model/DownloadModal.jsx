import React, { useState } from 'react'
import "./downloadmodal.scss"
import { GrClose } from 'react-icons/gr'
const DownloadModal = () => {

  const [showModal,setShowModal] = useState(true)

  return (
    <div className='download-modal' style={{display: showModal ? "flex" : "none"}}>
     <a href="https://play.google.com/store/apps/details?id=com.dolap.android&referrer=adjust_reftag%3DcvRa2XnnD6U97%26utm_source%3DOrganic-Website%26utm_campaign%3Dmweb_acq_popup_purchase_1" target='_blank' rel='noreferrer'>
     <img src="https://cdn.dolap.com/web/images/purchase/purchase.png" alt="" />
     </a>
     <GrClose onClick={()=>setShowModal(false)}/>
    </div>
  )
}

export default DownloadModal
