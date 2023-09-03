import React, { useEffect, useState } from 'react'
import "./productdetailcomp.scss"
import { useParams } from 'react-router-dom'
import productData from "../../../data/popularProducts.json"
import { Col, Container, Row } from 'react-bootstrap'
import Spacer from '../spacer/Spacer'
import { LiaChevronDownSolid, LiaTruckSolid } from 'react-icons/lia'
import { AiOutlineLock, AiOutlineStar } from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import {FaRegComments} from 'react-icons/fa'
import {MdOutlineFileDownloadDone, MdPayment} from 'react-icons/md'
import { IoPersonAddOutline } from 'react-icons/io5'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import DownloadModal from '../download-model/DownloadModal'
const ProductDetailsComp = () => {

    const [addPerson,setAddPerson] = useState(false)
    const [showModal,setShowModal] = useState(false)

    const {id} = useParams()

    const selectedProd = productData.products.find(product => product.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0)
    })


  return (
    <Container className='product-details'  key={selectedProd.id}>
        <Spacer height={50}/>
        <Row>
            <Col xs={12} md={6}>
                <div className="prod-image">
                    <img src={selectedProd.productImage} alt="" />
                    <div className="prod-image-bottom">
                        <BsTwitter/>
                        <BsFacebook/>
                        <BsInstagram/>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="product-details-right">
                    <div className="prod-info-name">
                        <div className="left">
                            <h2>{selectedProd.productName}</h2>
                            <span>Yeni ve Etiketli</span>
                            <span>Alıcı Öder</span>
                        </div>
                        <div className="right">
                        <LiaChevronDownSolid/>
                        <span>{selectedProd.like} Beğeni</span>
                        </div>
                    </div>
                    <div className="prod-info-price">
                        <div>
                        <span>{selectedProd.productPrice_old}₺</span>
                        <span>{selectedProd.productPrice}₺</span>
                        </div>
                        <button onClick={() => setShowModal(prevShowModal => !prevShowModal)}>SATIN AL</button>
                    </div>
                    <div className="prod-user-info">
                        <div className="left">
                            <div className="user-image">
                                 <img src={selectedProd.userImage} alt="" />
                                <span>Son Fiyat</span>
                            </div>
                            <div className="user-info">
                            <span>{selectedProd.userName}</span>
                            <span>
                                {
                                    [...Array(5)].map((_,i)=>(
                                        <AiOutlineStar style={{color: 1<selectedProd.stars ? "goldenrod" : "lightgrey"}}/>
                                    ))
                                }
                                <span>({selectedProd.rate})</span>
                            </span>
                             </div>
                        </div>
                        <div className="add-person-icon" onClick={()=>setAddPerson(!addPerson)}>
                            {!addPerson ? <IoPersonAddOutline/> :<MdOutlineFileDownloadDone/>}
                        </div>
                    </div>
                    <div className="advantage">
                        <span>Dolap Avantajları</span>

                        <div className="advantage-info">
                            <div className="advantage-box">
                                <div><TiTick/></div>
                                <span>Problemsiz Alışveriş</span>
                            </div>
                            <div className="advantage-box">
                                <div><AiOutlineLock/></div>
                                <span>100% Güvenli Ödeme</span>
                            </div>
                            <div className="advantage-box">
                                <div><FaRegComments/></div>
                                <span>Dolap DEstek Hizmeti</span>
                            </div>
                        </div>
                    </div>
                    <div className="cargo">
                        <LiaTruckSolid/>
                        <span>Alıcı Ödemeli Kargo</span>
                    </div>
                    <div className="payment-options">
                        <MdPayment/>
                        <div>
                        <span>Ödeme Secenekleri</span>
                        <p>Kredi kartı veya banka kartı ile ödeme.
                            Tüm kredi kartlarına 9 taksit imkanı! Bilgi için tıklayın!</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Spacer height={50}/>
        <div className='show-modal-box' style={{display: showModal ? "flex" : "none"}}>
        <DownloadModal />
        </div>
    </Container>
  )
}

export default ProductDetailsComp
