import React from 'react'
import PropTypes from 'prop-types'

export const ListIcon = ({
  size = '100%',
  color = 'black'
}) => (
<svg width={size} height={size} viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 29.25H30V31.75H12.5V29.25ZM3.96251 30.5L0.737506 33.725L2.50001 35.5L7.50001 30.5L2.50001 25.5L0.725006 27.2625L3.96251 30.5ZM12.5 16.75H30V19.25H12.5V16.75ZM3.96251 18L0.737506 21.225L2.50001 23L7.50001 18L2.50001 13L0.725006 14.7625L3.96251 18ZM12.5 4.25H30V6.75H12.5V4.25ZM3.96251 5.5L0.737506 8.725L2.50001 10.5L7.50001 5.5L2.50001 0.5L0.725006 2.2625L3.96251 5.5Z" fill={color}/>
</svg>
)

ListIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}
