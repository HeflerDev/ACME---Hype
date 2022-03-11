import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Product } from './components'
import { useSelector } from 'react-redux'

export const Products = () => {
  const data = useSelector(state => state.db.data)

  return (

<Container fluid="md">
  <Row className="products-container">
      {
        data &&
        Object.keys(data).map(item => (
          <Product
            name={data[item].name}
            imageId={data[item].id}
            status={false}
            key={`${data[item].id}${data[item].name}`}
            price={data[item].price}
          />
        ))
      }
    </Row>
    </Container>  )
}
