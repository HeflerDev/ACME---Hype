import React from 'react'
import PropTypes from 'prop-types'

export const BagIcon = ({
  size = '100%',
  color = 'black'
}) => (
  <svg width={size} height={size} viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6667 10.6667H3.33333C2.41286 10.6667 1.66667 11.4129 1.66667 12.3334V34C1.66667 34.9205 2.41286 35.6667 3.33333 35.6667H26.6667C27.5871 35.6667 28.3333 34.9205 28.3333 34V12.3334C28.3333 11.4129 27.5871 10.6667 26.6667 10.6667Z" stroke={color} strokeWidth="3.16667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.16667 14V8.16668C9.16667 7.40063 9.31755 6.64209 9.6107 5.93436C9.90386 5.22662 10.3335 4.58356 10.8752 4.04189C11.4169 3.50021 12.0599 3.07053 12.7677 2.77738C13.4754 2.48423 14.234 2.33334 15 2.33334C15.766 2.33334 16.5246 2.48423 17.2323 2.77738C17.9401 3.07053 18.5831 3.50021 19.1248 4.04189C19.6665 4.58356 20.0961 5.22662 20.3893 5.93436C20.6825 6.64209 20.8333 7.40063 20.8333 8.16668V14" stroke={color} strokeWidth="3.16667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

BagIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}
