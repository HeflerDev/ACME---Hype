import React from 'react'
import { Col } from 'react-bootstrap'
import { UserIcon, BagIcon, EnabledLikeIcon, HouseIcon, ListIcon } from '../assets/icons'
import { Link } from 'react-router-dom'

export const MobileFooter = () => {
  return (
    <Col className="footer-icons">
      <Link to="/" className="home icon">
        <HouseIcon />
      </Link>
      <Link to="/categories" className="categories icon">
          <ListIcon />
      </Link>
      <Link to="/likes" className="favorites icon">
        <EnabledLikeIcon color="black"/>
      </Link>
      <Link to="/checkout" className="bag icon">
        <BagIcon />
      </Link>
      <Link to="/user" className="user icon">
        <UserIcon />
      </Link>
    </Col>
  )
}
