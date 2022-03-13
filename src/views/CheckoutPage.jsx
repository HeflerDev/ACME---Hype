import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { BagIcon } from '../assets/icons'

import { Checkout } from "./components"

export const CheckoutPage = () => {
  const userBag = useSelector(state => state.db.userBag)
  const [bag, setBag] = useState([])

  useEffect(() => {
      for (const property in userBag.bag) {
        setBag([...bag, {[property]: userBag.bag[property]}])
      }
  }, [])


  return (
    <Container>
      <Row className="bag-page">
        <Col className="header" xs={12}>
          <div className="icon">
            <BagIcon color="red" />
          </div>
          <h1>Sacola de Compras</h1>
        </Col>
        <Col xs={12} className="product-list">
          <div>Descrição</div>
          <div>Qntd</div>
          <div>Preço</div>
          <div>Subtotal</div>
        </Col>
        < Checkout name="Hefler" color="c" size="2" quantity="1" price="R$ 200,00" id={200}/>
        <Col className="finish-buy" xs={12}>
          <div className="left-container">
            <input type="text" className="delivery"/>
            <button className="deliverybtn _btn-primary">Calcular Frete</button>
            <div className="text"></div>
            <input type="text" className="send"/>
            <button className="sendbtn _btn-secondary">Enviar</button>
          </div>
          <div className="right-container">
            <div className="subtotal">Subtotal</div>
            <div className="price">R$ 00,00</div>
            <div className="delivery">Frete</div>
            <div className="price">R$ 00,00</div>
            <div className="total">Total</div>
            <div className="price total">R$ 00,00</div>
            <div className="buybtn _btn-primary">Finalizar compra</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
