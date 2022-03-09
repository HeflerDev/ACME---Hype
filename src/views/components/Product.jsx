import React from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const Product = ({ name, image, status }) => (
  <Col className="product-container">
    <img src={image} alt="" className="img"/>
    <p className="product">{name}</p>
    <i className="like">{status}</i>
  </Col>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}
