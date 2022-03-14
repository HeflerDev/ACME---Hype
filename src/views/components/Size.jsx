import React from 'react';
import PropTypes from 'prop-types'

export const Size = ({ size }) => (
  <div className="size-container">
    <div className="smsize">{ size }</div>
  </div>
)

Size.propTypes = {
  size: PropTypes.number.isRequired
}
