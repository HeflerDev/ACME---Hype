import React, { useEffect } from 'react'
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import {
  Header,
  MobileFooter,
  Products,
  Footer,
  ProductInfo
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
            const price = rand.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            products[item] = {
              id: rand,
              name: item,
              price
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
