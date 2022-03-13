import React from 'react';
import { Col, Image } from 'react-bootstrap';

export const Checkout = () => (
    <Col xs={12} className="checkout-product">
      <div className="image">
        <Image src="#"/>
      </div>
      <div className="checkout-info">
        <div className="name"></div>
        <div className="description"></div>
        <div className="color"></div>
        <div className="size"></div>
      </div>
      <div className="quantity"></div>
      <div className="price"></div>
      <div className="total"></div>
      <div className="closebtn"></div>
    </Col>
)
