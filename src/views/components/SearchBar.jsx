import React from 'react'
import { Col } from 'react-bootstrap'
import { FilterIcon } from '../../assets/icons'


export const SearchBar = () => (
      <Col xs={12} sm={7} md={6} lg={7}>
        <form className="search-bar">
        <div className="input-container">
          <h2 className="heading small">a company that makes everything</h2>
          <input className="field" placeholder="Estou procurando por..." />
        </div>
        <div className="filter">
            <FilterIcon />
          </div>
        </form>
      </Col>
)
