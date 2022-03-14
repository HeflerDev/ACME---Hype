import React, { useEffect } from 'react'
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Big from 'big.js'

import {
  Header,
  MobileFooter,
  Products,
  Footer,
  ProductInfo,
  CheckoutPage,
  LikedProducts
} from './'
import { useSelector, useDispatch } from 'react-redux'
import { stash } from '../redux/slices/dbSlice'

import AcmeCatalog from '../assets/images/acme-catalog.png'
const { faker } = require('@faker-js/faker')

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
            const description = faker.lorem.sentence(Math.floor(Math.random() * (40 - 20) + 20))
            const formula = 10 + item.split(' ').length * ((500 - description.length) / (3 - item.split(' ').length))
            const price = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2
            }).format(formula)
            products[item] = {
              id: rand,
              name: item,
              price,
              like: false,
              color: 'default',
              size: null,
              quantity: 1,
              description
            }
          })
          return products
        })
        .then((products) => {
          localStorage.setItem('products', JSON.stringify(products))
          dispatch(stash(products))
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
            <>
            <section className="page-container _fullpage" style={catalogStyle}>
             <Header />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:name" element={<ProductInfo />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/likes" element={<LikedProducts />} />
                <Route
                  path="*"
                  element={<Navigate replace to="/" />}
                />
              </Routes>
            </section>
               <MobileFooter />
               <Footer />
</>
          )
        }
      </HashRouter>
  )
}

export default App
