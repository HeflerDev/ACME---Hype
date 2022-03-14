import React from 'react'
import { Col } from 'react-bootstrap'

import {
  UserIcon,
  EnabledLikeIcon,
  BagIcon
} from '../../assets/icons'

export const Icons = () => (
  <Col lg={2} className="icon-container">
    <div className="icon">
      <EnabledLikeIcon size="40" color="red"/>
    </div>
    <div className="icon">
      <UserIcon size="40" color="red"/>
    </div>
    <div className="icon">
      <BagIcon size="40" color="red"/>
    </div>
  </Col>
)
