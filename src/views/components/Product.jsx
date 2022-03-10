import React from 'react'
import { Col, Image} from 'react-bootstrap'
import PropTypes from 'prop-types'
import DefaultImage from '../../assets/images/default.png'

export const Product = ({ name, imageId, status }) => (
  <Col xs={5} className="product-container">
    <div className="image">
      <Image fluid src={`https://picsum.photos/id/${imageId}/150/150`} onError={(e) => e.target.src = DefaultImage}/>
    </div>
    <p className="product">{name}</p>
    <i className="like">{status}</i>
  </Col>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imageId: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired
}
