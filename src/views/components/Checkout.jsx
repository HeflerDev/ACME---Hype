import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
          <div className="label">Name:</div>
          <div className="name">{name}</div>
        </div>
        <div className="color">
          <div className="label"></div>
          <div className="shade"></div>
        </div>
        <div className="size">
          <div className="label"></div>
          <div className="size"></div>
        </div>
      </div>
      <div className="quantity"></div>
      <div className="price"></div>
      <div className="total"></div>
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
