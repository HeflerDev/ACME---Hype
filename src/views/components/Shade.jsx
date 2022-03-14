import React from 'react'
import PropTypes from 'prop-types'

export const Shade = ({ shade }) => (
  <div className="color-container">
    <div id={shade} className={`smshade ${shade}`}></div>
  </div>
)

Shade.propTypes = {
  shade: PropTypes.string.isRequired
}
