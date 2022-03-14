import React from 'react'
import {
  Col,
  Row
} from 'react-bootstrap'

import {
  SearchBar,
  Icons
} from './components'

export const Header = () => {
  return (
      <Row className="header-container">
         <Col xs={12} sm={5} md={6} lg={3} className="heading-container">
            <h1 className="heading">acme</h1>
            <h2 className="heading small">a company that makes everything</h2>
         </Col>
         <SearchBar/>
         <Icons />
        <nav className="navbar-container">
          <div className="item">popular</div>
          <div className="item separator">|</div>
          <div className="item">utilidades</div>
          <div className="item separator">|</div>
          <div className="item big"><span>para planos infalíveis</span></div>
          <div className="item separator">|</div>
          <div className="item">outros</div>
        </nav>
      </Row>
  )
}
