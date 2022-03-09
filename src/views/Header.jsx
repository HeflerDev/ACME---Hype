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
         <Col xs={12}>
            <h1>ACME</h1>
            <h2>A COMPANY THAT MAKES EVERYTHING</h2>
         </Col>
         <SearchBar/>
        <nav className="navbar-container">
          <div className="item">POPULAR</div>
          <div className="item">UTILIDADES</div>
          <div className="item">PARA PLANOS INFALÍVEIS</div>
          <div className="item">OUTROS </div>
        </nav>
      </Row>
  )
}
