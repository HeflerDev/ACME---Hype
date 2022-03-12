import React, {useState} from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
  const { name } = useParams()

  return (
    <Container>
    <Row className="product-info">
      <Col xs={12} className="image">
        <Image fluid src={`https://picsum.photos/id/${data[name].id}/300/300`} onError={(e) => e.target.src = DefaultImage}/>
        <div className="icon">
          <DisabledLikeIcon />
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nam unde accusamus iure quaerat minima dicta aliquam optio vel corporis praesentium fugit ad cum sint at alias modi, cumque voluptatem.
        </div>

        <div className="color-container">
          <div className="title">Cor:</div>
          <div className="shade c"></div>
          <div className="shade m"></div>
          <div className="shade y"></div>
          <div className="shade k"></div>
          <div className="shade null"></div>
        </div>

        <div className="size-container">
          <div className="title">Tamanho</div>
          <div className="size">1</div>
          <div className="size">2</div>
          <div className="size">3</div>
          <div className="size">4</div>
          <div className="size">5</div>
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

        <div className="bag-button">
          <div className="text">COLOCAR NA SACOLA</div>
          <div className="icon">
            <BagIcon color="red" />
          </div>
        </div>

        <div className="quantity-container">
          <Link to="/bag" className="text">IR PARA A SACOLA</Link>
          <div className="quantity">
            <div>-</div>
            <div>1</div>
            <div>+</div>
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
