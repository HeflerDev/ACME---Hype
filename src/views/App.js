import React, { useEffect } from 'react'
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Big from 'big.js'
const { faker } = require('@faker-js/faker');

import {
  Header,
  MobileFooter,
  Products,
  Footer,
  ProductInfo,
  CheckoutPage
} from './'
import { useSelector, useDispatch } from 'react-redux'
import { stash } from '../redux/slices/dbSlice'

import AcmeCatalog from '../assets/images/acme-catalog.png'

const catalogStyle = {
  backgroundImage: `linear-gradient(to bottom,rgba(250, 250, 150, 0.5), rgba(250, 250, 150, 0.5)), url(${AcmeCatalog})`,
  backgorundSize: '100%'
}

const App = () => {
  const db = useSelector(state => state.db.data)
  const dispatch = useDispatch()

  useEffect(() => {
    const createDBIfEmpty = () => {
      fetch('/gen')
        .then(res => res.json())
        .then(data => {
          const products = {}
          data.map((item) => {
            const rand = Math.floor(Math.random() * 1000)
            const description = faker.lorem.sentence(Math.floor(Math.random() * (50 - 20) + 20))
            const formula = 10 + 2 * ((500 - description.length) / (3 - 2))
            const big = new Big(formula).toFixed(2)
            const price = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2
            }).format(big)
            console.log(price, big, description.length, item.length, formula)
            products[item] = {
              id: rand,
              name: item,
              price,
              like: false,
              color: "default",
              size: null,
              quantity: 1,
              description
            }
          })
          localStorage.setItem('products', JSON.stringify(products))
          dispatch(products)
        })
    }

    const data = localStorage.getItem('products')

    if (data) {
      dispatch(stash(JSON.parse(localStorage.getItem('products'))))
    } else {
      createDBIfEmpty()
    }
  }, [])

  return (
      <HashRouter>
        {
          db && (
            <section className="page-container" style={catalogStyle}>
             <Header />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:name" element={<ProductInfo />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route
                  path="*"
                  element={<Navigate replace to="/" />}
                />
              </Routes>
             <MobileFooter />
             <Footer />
            </section>
          )
        }
      </HashRouter>
  )
}

export default App
