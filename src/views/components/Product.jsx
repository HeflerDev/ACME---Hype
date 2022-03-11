import React from 'react'
import { Col, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'
import DefaultImage from '../../assets/images/default.png'
import {
  EnabledLikeIcon,
  DisabledLikeIcon
} from '../../assets/icons'

export const Product = ({ name, imageId, status, price }) => (
  <Col xs={6} sm={4} className="product-container">
    <div className="image">
      {
        status
          ? (
        <div className="icon">
          <EnabledLikeIcon />
        </div>)
          : (
        <div className="icon">
          <DisabledLikeIcon />
        </div>)
      }
      <Image fluid src={`https://picsum.photos/id/${imageId}/300/300`} onError={(e) => e.target.src = DefaultImage}/>
    </div>
    <div className="product">
  <p>{name}</p>
  <p>{price}</p>
    </div>  </Col>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imageId: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired
}
