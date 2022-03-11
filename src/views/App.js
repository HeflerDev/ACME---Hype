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

import AcmeCatalog from '../assets/images/acme-catalog.png'

const catalogStyle = {
  backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0.80), rgba(255, 255, 255, 0.40) ), url(${AcmeCatalog})`,
  backgorundSize: '100%'
}

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
              const price = rand.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})
              products[item] = {
                id: rand,
                name: item,
                price
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
        {
          localStorage.getItem('products') && (
            <section className="page-container" style={catalogStyle}>
             <Header />
             <Products />
             <MobileFooter />
            </section>
          )
        }
      </Router>
  )
}

export default App
