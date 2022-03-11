import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import {
  Header,
  MobileFooter,
  Products,
  Footer,
  ProductInfo
} from './'

import AcmeCatalog from '../assets/images/acme-catalog.png'

const catalogStyle = {
  backgroundImage: `linear-gradient(to bottom,rgba(250, 250, 150, 0.5), rgba(250, 250, 150, 0.5)), url(${AcmeCatalog})`,
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
              const price = rand.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
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
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductInfo />} />
              </Routes>
             <MobileFooter />
             <Footer />
            </section>
          )
        }
      </Router>
  )
}

export default App
