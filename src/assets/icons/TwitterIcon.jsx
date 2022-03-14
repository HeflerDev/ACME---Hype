import React from 'react'
import PropTypes from 'prop-types'

export const TwitterIcon = ({
  size = '100%',
  color = 'black'
}) => (
  <svg width={size} height={size} viewBox="2 0 49 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7063 41.0022C34.575 41.0022 44.8969 25.3678 44.8969 11.8334C44.8969 11.3959 44.8969 10.9522 44.8781 10.5147C46.8877 9.05993 48.6221 7.25889 50 5.19592C48.1229 6.02357 46.1336 6.56906 44.0969 6.81467C46.2423 5.53228 47.8491 3.51457 48.6187 1.13654C46.6031 2.33068 44.3969 3.16896 42.0969 3.61467C40.5506 1.96787 38.5044 0.876909 36.2753 0.510783C34.0461 0.144657 31.7585 0.523796 29.7667 1.58947C27.7749 2.65514 26.19 4.34788 25.2577 6.40548C24.3253 8.46308 24.0974 10.7707 24.6094 12.9709C20.5304 12.7664 16.5401 11.7068 12.897 9.86074C9.25397 8.01472 6.03964 5.42355 3.4625 2.25529C2.15419 4.51493 1.75492 7.18779 2.34577 9.73112C2.93662 12.2745 4.4733 14.4976 6.64375 15.949C5.01731 15.8938 3.42663 15.457 2 14.674V14.8147C2.0028 17.1818 2.82284 19.4754 4.32148 21.3077C5.82013 23.14 7.90546 24.3986 10.225 24.8709C9.34457 25.1135 8.43509 25.2344 7.52188 25.2303C6.87807 25.2322 6.23556 25.1726 5.60313 25.0522C6.25871 27.0898 7.53523 28.8714 9.2539 30.1474C10.9726 31.4234 13.0473 32.1298 15.1875 32.1678C11.5517 35.0234 7.06063 36.5722 2.4375 36.5647C1.62288 36.5681 0.808822 36.5211 0 36.424C4.69223 39.4155 10.1416 41.0039 15.7063 41.0022Z" fill={color}/>
  </svg>
)

TwitterIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}
