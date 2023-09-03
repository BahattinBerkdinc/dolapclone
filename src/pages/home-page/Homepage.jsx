import React from 'react'
import ProductCard from '../../components/common/product-card/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import popularProducts from "../../data/popularProducts.json"
import Banner from '../../components/banner/Banner'
import Spacer from '../../components/common/spacer/Spacer'
import AboutDolap from '../../components/common/about-dolap/AboutDolap'
import HomeComments from '../../components/common/home-comments/HomeComments'
import BrandsSearched from '../../components/common/brands-searched/BrandsSearched'

const Homepage = () => {
  return (
    <Container>
      <Banner/>
      <Spacer height={200}/>
        <Row>
        {
          popularProducts.products.map((products)=>(
            <Col style={{padding:".5rem"}} xs={6} md={4} lg={3} key={products.id}>
              <ProductCard products={products}/>
            </Col>
          ))
        }
        </Row>
        <Spacer height={50}/>
        <BrandsSearched/>
        <Spacer height={50}/>
        <HomeComments/>
        <Spacer height={50}/>
        <AboutDolap/>
        <Spacer height={50}/>
    </Container>
  )
}

export default Homepage
