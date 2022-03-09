import React from 'react'
import { Col } from 'react-bootstrap'
import { UserIcon } from '../assets/icons'

export const MobileFooter = () => {
  return (
    <Col className="footer-icons">
      <div className="home icon"></div>
      <div className="categoryes icon"></div>
      <div className="favorites icon"></div>
      <div className="user icon">
        <UserIcon />
      </div>
    </Col>
  )
}
