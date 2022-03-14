import React from 'react'
import { Col, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { Shade, Size } from './'

export const Checkout = ({
  name,
  color,
  size,
  quantity,
  price,
  id
}) => (
    <Col xs={12} className="checkout-product">
      <div className="image">
        <Image fluid src={`https://picsum.photos/id/${id}/300/300`}/>
      </div>
      <div className="checkout-info">
        <div className="name">
          <div className="name">{name}</div>
        </div>
        <div className="color">
          <div className="label">Cor:</div>
          <Shade shade={color} />
        </div>
        <div className="size">
          <div className="label">Tamanho:</div>
          <Size size={size} />
        </div>
      </div>
      <div className="pricelabel">Price:</div>
      <div className="quantitylabel">Quantity</div>
      <div className="totallabel">Total</div>
      <div className="price">{price}</div>
      <div className="quantity">{quantity}</div>
      <div className="total">599</div>
      <div className="closebtn"></div>
    </Col>
)

Checkout.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
