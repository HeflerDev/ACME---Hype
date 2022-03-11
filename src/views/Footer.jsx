import React from 'react';
import { Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
      <Col fluid className="footer-container">
          <ul className="about-list">
            <li className="title"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>

          <ul className="contact-list">
            <li className="title"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>

          <ul className="icon-list">
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>
      </Col>
  )
}
