import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Product } from './components'

export const Products = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('products')))
  }, [])

  return (
      <Row className="products-container">
        {
          data &&
          Object.keys(data).map(item => (
            <Product name={data[item].name} imageId={data[item].id} status={false} key={`${data[item].id}${data[item].name}`}/>
          ))
        }
      </Row>
  )
}
