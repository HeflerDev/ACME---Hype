import React from 'react'
import { Col } from 'react-bootstrap'
import { FilterIcon } from '../../assets/icons'


export const SearchBar = () => (
      <Col xs={12}>
        <form className="search-bar">
          <input className="field" placeholder="Estou procurando por..." />
          <div className="filter">
            <FilterIcon />
          </div>
        </form>
      </Col>
)
