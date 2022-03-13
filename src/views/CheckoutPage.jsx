import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { BagIcon } from '../assets/icons'

export const CheckoutPage = () => {
  return (
    <Container>
      <Row className="bag-page">
        <Col className="header" xs={12}>
          <div className="icon">
            <BagIcon />
          </div>
          <h1>Sacola de Compras</h1>
        </Col>
        <Col xs={12} className="product-list">
          <div>Descrição</div>
          <div>Qntd</div>
          <div>Preço</div>
          <div>Subtotal</div>
        </Col>
        <Col className="finish-buy">
          <div className="left-container">
            <input type="text" className="delivery"/>
            <button className="deliverybtn"></button>
            <div className="text"></div>
            <input type="text" className="send"/>
            <button className="sendbtn"></button>
          </div>
          <div className="right-container">
            <div className="subtotal"></div>
            <div className="price"></div>
            <div className="delivery"></div>
            <div className="price"></div>
            <div className="total"></div>
            <div className="price"></div>
            <div className="buybtn"></div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
