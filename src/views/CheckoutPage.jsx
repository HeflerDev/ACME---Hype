import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { clear } from '../redux/slices/dbSlice'
import { BagIcon } from '../assets/icons'

import { Checkout } from './components'

export const CheckoutPage = () => {
  const userBag = useSelector(state => state.db.userBag)
  const dispatch = useDispatch()

  const numerify = (str) => {
    switch (str) {
      case 'one': return 1
      case 'two': return 2
      case 'three': return 3
      case 'four': return 4
      case 'five': return 5
    }
  }

  const handleSubmit = () => {
    if (Object.keys(userBag).length !== 0) {
      fetch('/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userBag)
      }).then(() => dispatch(clear()))
    }
  }

  return (
    <Container>
      <Row className="bag-page">
        <Col className="header" xs={12}>
          <div className="icon">
            <BagIcon color="red" />
          </div>
          <h1>Sacola de Compras</h1>
        </Col>
        {
          userBag
            ? (
            <>
            {
              Object.keys(userBag).map(key => (
                <Checkout
                  key={userBag[key].name}
                  name={userBag[key].name}
                  size={numerify(userBag[key].size)}
                  color={userBag[key].color}
                  quantity={userBag[key].quantity}
                  price={userBag[key].price}
                  id={userBag[key].id}
                />
              ))
            }
            </>
              )
            : (
                'No Item to Display'
              )

        }
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
            <div className="buybtn _btn-primary" onClick={handleSubmit}>Finalizar compra</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
