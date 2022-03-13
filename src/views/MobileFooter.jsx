import React from 'react'
import { Col } from 'react-bootstrap'
import { UserIcon, BagIcon, EnabledLikeIcon, HouseIcon, ListIcon } from '../assets/icons'

export const MobileFooter = () => {
  return (
    <Col className="footer-icons">
      <div className="home icon">
        <HouseIcon />
      </div>
      <div className="categories icon">
          <ListIcon />
      </div>
      <div className="favorites icon">
        <EnabledLikeIcon color="black"/>
      </div>
      <div className="bag icon">
        <BagIcon />
      </div>
      <div className="user icon">
        <UserIcon />
      </div>
    </Col>
  )
}
