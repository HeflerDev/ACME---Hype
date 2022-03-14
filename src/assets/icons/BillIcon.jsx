import React from 'react'
import PropTypes from 'prop-types'

export const BillIcon = ({
  size = '100%',
  color = 'black'
}) => (
  <svg width={size} height={size} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.5V13.5H8V12.5H1V1.5H6V4.5H9V5.5H10V3.8L9.85 3.65L6.85 0.65L6.7 0.5H0ZM7 2.2L8.3 3.5H7V2.2ZM2 5.5V6.5H8V5.5H2ZM10.5 6.5V7.5C9.65 7.65 9 8.35 9 9.25C9 10.25 9.75 11 10.75 11H11.25C11.65 11 12 11.35 12 11.75C12 12.15 11.65 12.5 11.25 12.5H9.5V13.5H10.5V14.5H11.5V13.5C12.35 13.35 13 12.65 13 11.75C13 10.75 12.25 10 11.25 10H10.75C10.35 10 10 9.65 10 9.25C10 8.85 10.35 8.5 10.75 8.5H12.5V7.5H11.5V6.5H10.5ZM2 8V9H5.5V8H2ZM6.5 8V9H8V8H6.5ZM2 10V11H5.5V10H2ZM6.5 10V11H8V10H6.5Z" fill={color} />
  </svg>
)

BillIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}
