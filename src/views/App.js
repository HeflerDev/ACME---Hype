import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  Header,
  MobileFooter,
  Products
} from './'

const App = () => {
  useEffect(() => {
    const createDBIfEmpty = () => {
      const data = localStorage.getItem('products')
      if (!data) {
        fetch('/gen')
          .then(res => res.json())
          .then(data => {
            const products = {}
            data.map((item) => {
              const rand = Math.floor(Math.random() * 1000)
              products[item] = {
                id: rand,
                name: item
              }
            })
            localStorage.setItem('products', JSON.stringify(products))
            return products
          })
      }
    }

    createDBIfEmpty()
  }, [])

  return (
      <Router>
         <Header />
         <Products />
         <MobileFooter />
      </Router>
  )
}

export default App
