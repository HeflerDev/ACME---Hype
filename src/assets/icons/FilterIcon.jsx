import React from 'react'
import PropTypes from 'prop-types'

export const ListIcon = ({
  size = '100%',
  color = 'black'
}) => (
  <svg width={size} height={size} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5C13.1421 5 16.5 4.10457 16.5 3C16.5 1.89543 13.1421 1 9 1C4.85786 1 1.5 1.89543 1.5 3C1.5 4.10457 4.85786 5 9 5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.5 3C1.5 5.23 4.72583 9.674 6.38 11.805C6.9868 12.5769 7.32743 13.5959 7.33333 14.657V20L10.6667 18V14.657C10.6667 13.596 11.0175 12.582 11.62 11.805C13.275 9.674 16.5 5.231 16.5 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

ListIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}
