import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { grab, giveBack } from '../redux/slices/dbSlice'

import DefaultImage from '../assets/images/default.png'
import {
  StarIcon,
  StarIconEmpty,
  BagIcon,
  EnabledLikeIcon,
  DisabledLikeIcon,
  CardIcon,
  BillIcon
} from '../assets/icons'

export const ProductInfo = () => {
  const data = useSelector(state => state.db.data)
  const userBag = useSelector(state => state.db.userBag)
  const dispatch = useDispatch()
  const { name } = useParams()
  const [product, setProduct] = useState({ ...data[name] })

  console.log(product)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('likes'))) {
      const like = JSON.parse(localStorage.getItem('likes'))[product.name]?.like
      if (like) {
        setProduct({ ...product, like: true })
      } else {
        setProduct({ ...product, like: false })
      }
    }
  }, [])

  document.querySelectorAll('.shade').forEach(elem => {
    elem.addEventListener('click', ({ target }) => {
      document.querySelector('.activecolor').classList.remove('activecolor')
      elem.classList.add('activecolor')
      setProduct({ ...product, color: target.id })
    })
  })

  document.querySelectorAll('.size').forEach(elem => {
    elem.addEventListener('click', ({ target }) => {
      const sizeElem = document.querySelector('.activesize')
      if (sizeElem) {
        sizeElem.classList.remove('activesize')
        elem.classList.add('activesize')
      } else {
        elem.classList.add('activesize')
      }
      setProduct({ ...product, size: target.id })
    })
  })

  const validateSubmission = () => {
    if (!product.size) return false
    return {}
  }

  const validateBag = () => {
    if (userBag[data[name].name]) {
      return true
    }
    return false
  }

  const handleCounter = (operation) => {
    if (operation === '+') {
      setProduct({ ...product, quantity: product.quantity + 1 })
    }

    if (operation === '-' && product.quantity !== 1) {
      setProduct({ ...product, quantity: product.quantity - 1 })
    }
  }

  const handleBuy = () => {
    const submission = validateSubmission()
    if (submission) {
      dispatch(grab(
        {
          name: product.name,
          id: product.id,
          price: product.price,
          like: product.like,
          color: product.color,
          size: product.size,
          quantity: product.quantity
        }
      ))
    }
  }

  const handleLike = () => {
    if (product.like) {
      setProduct({ ...product, like: false })
    } else {
      setProduct({ ...product, like: true })
    }

    const likes = JSON.parse(localStorage.getItem('likes'))

    localStorage.setItem('likes', JSON.stringify(
      {
        ...likes,
        [product.name]: {
          name: product.name,
          like: !product.like
        }
      }
    ))
  }

  const handleRemove = () => {
    dispatch(giveBack(data[name].name))
  }

  return (
    <Container>
    <Row className="product-info">
      <Col xs={12} className="image">
        <Image fluid src={`https://picsum.photos/id/${data[name].id}/300/300`} onError={(e) => e.target.src = DefaultImage}/>
        <div className="icon" onClick={handleLike}>
          {
            product.like
              ? (
              <EnabledLikeIcon />
                )
              : (
              <DisabledLikeIcon />
                )
          }
        </div>
      </Col>
      <Col xs={12} className="title">
        <h1>{data[name].name}</h1>
      </Col>
      <Col className="information-container" xs={12}>
        <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIconEmpty />
          <StarIconEmpty />
        </div>
        <div className="evaluations">
          (2 avaliações)
        </div>

        <div className="description">
          {product.description}
        </div>

        <div className="color-container">
          <div className="title">Cor:</div>
          <div id="c" className="shade c"></div>
          <div id="m" className="shade m"></div>
          <div id="y" className="shade y"></div>
          <div id="k" className="shade k"></div>
          <div id="default" className="shade null activecolor"></div>
        </div>

        <div className="size-container">
          <div className="title">Tamanho</div>
          <div id="one" className="size">1</div>
          <div id="two" className="size">2</div>
          <div id="three" className="size">3</div>
          <div id="four" className="size">4</div>
          <div id="five" className="size">5</div>
        </div>

        <div className="price-container">
          <div className="price">{data[name].price}</div>
          <div className="info">EM ATÉ <b>6X</b> SEM JUROS</div>
          <div className="icons">
            <div className="icon">
              <CardIcon />
            </div>
            <div className="icon">
              <BillIcon />
            </div>
          </div>
        </div>

        <div className="bag-button" onClick={() => validateBag() ? handleRemove() : handleBuy()}>
          <div className="text">{validateBag() ? 'Retirar da Sacola' : 'Colocar na Sacola'}</div>
          <div className="icon">
            <BagIcon color="red" />
          </div>
        </div>

        <div className="quantity-container">
          <Link to="/checkout" className="text">IR PARA A SACOLA</Link>
          <div className="quantity">
            <div
              onClick={() => handleCounter('-')}
              className={product.quantity === 1 ? 'disable' : ''}
              >-</div>
            <div id="quantity-number">{product.quantity && product.quantity}</div>
            <div onClick={() => handleCounter('+')}>+</div>
          </div>
        </div>
      </Col>
    </Row>
    <Row className="comment-section">
      <div className="title">PRINCIPAIS AVALIAÇÕES</div>
        <div className="comment-container">
          <div className="avatar"></div>
          <div className="name-block">
            <div className="name">Papa-Léguas</div>
            <div className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <div className="comment">Bip-Bip &gt;</div>
          </div>

        <div className="comment-container">
          <div className="avatar"></div>
          <div className="name-block">
            <div className="name">Wile E. Coyote</div>
            <div className="rating">
              <StarIcon />
              <StarIconEmpty />
              <StarIconEmpty />
              <StarIconEmpty />
              <StarIconEmpty />
            </div>
          </div>
          <div className="comment">
            Comprarei novamente. Recomendo!
          </div>
        </div>
    </Row>
  </Container>
  )
}
