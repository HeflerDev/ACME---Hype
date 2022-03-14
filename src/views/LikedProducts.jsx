import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Product } from './components'
import { useSelector } from 'react-redux'

export const LikedProducts = () => {
  const data = useSelector(state => state.db.data)

  const checkLike = (key) => {
    if (localStorage.getItem('likes')) {
      const like = JSON.parse(localStorage.getItem('likes'))[key]?.like
      if (like) {
        return true
      }
    }
    return false
  }

  return (

<Container fluid="md">
  <Row className="products-container">
      {
        data &&
        Object.keys(data).map(item => (
          <>
          {
            checkLike(data[item].name) && (
              <Product
                name={data[item].name}
                imageId={data[item].id}
                status={() => checkLike(data[item].name)}
                key={`${data[item].id}${data[item].name}`}
                price={data[item].price}
              />
            )
          }
          </>
        ))
      }
    </Row>
    </Container>
  )
}
