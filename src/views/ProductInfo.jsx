import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DefaultImage from '../assets/images/default.png'

export const ProductInfo = () => {
  const data = useSelector(state => state.db.data)
  const { name } = useParams()

  return (
    <Container>
    <Row className="product-info">
      <Col xs={12} className="image">
        <Image fluid src={`https://picsum.photos/id/${data[name].id}/300/300`} onError={(e) => e.target.src = DefaultImage}/>
      </Col>
      <Col xs={12} className="title">
        <h1>{data[name].name}</h1>
      </Col>
      <Col className="information-container" xs={12}>
        <div className="stars"></div>
        <div className="evaluations"></div>
        <div className="description"></div>

        <div className="color-container">
          <div className="title"></div>
          <div className="shades"></div>
        </div>

        <div className="size-container">
          <div className="title"></div>
          <div className="size"></div>
        </div>

        <div className="price-container">
          <div className="price"></div>
          <div className="info"></div>
          <div className="icons"></div>
        </div>

        <div className="bag-button">
          <div className="text"></div>
          <div className="icon"></div>
        </div>

        <div className="quantity-container">
          <div className="text"></div>
          <div className="quantity"></div>
        </div>
      </Col>
    </Row>
    <Row className="comment-section">
      <div className="title"></div>
      <div className="comment-container">
        <div className="avatar"></div>
        <div className="name-block">
          <div className="name"></div>
          <div className="rating"></div>
        </div>
        <div className="comment"></div>
      </div>
    </Row>
  </Container>
  )
}
