import React from 'react'
import PropTypes from 'prop-types'

export const FacebookIcon = ({
  size = '100%',
  color = 'black'
}) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.1297 0C4.07225 0 0 4.07225 0 9.1297V40.8703C0 45.9278 4.07225 50 9.1297 50H26.3328V30.4531H21.1641V23.4156H26.3328V17.4032C26.3328 12.6794 29.3868 8.3422 36.4219 8.3422C39.2703 8.3422 41.3766 8.61565 41.3766 8.61565L41.2109 15.1876C41.2109 15.1876 39.0628 15.1673 36.7188 15.1673C34.1818 15.1673 33.775 16.3361 33.775 18.2766V23.4157H41.4125L41.0797 30.4532H33.775V50.0001H40.8703C45.9277 50.0001 50 45.9279 50 40.8704V9.12975C50 4.0723 45.9277 5e-05 40.8703 5e-05H9.12965L9.1297 0Z" fill={color}/>
  </svg>
)

FacebookIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}
