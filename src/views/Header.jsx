import React from 'react'
import {
  Col,
  Row
} from 'react-bootstrap'

import {
  SearchBar
} from './components'

export const Header = () => {
  return (
      <Row>
         <Col xs={12} className="heading-container">
            <h1 className="heading">ACME</h1>
            <h2 className="heading small">a company that makes everything</h2>
         </Col>
         <SearchBar/>
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
