import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon
} from "../assets/icons"

export const Footer = () => {
  return (
      <Col fluid className="footer-container">
          <ul className="about-list">
            <li className="title">quem somos</li>
            <li className="item">Dúvidas Frequentes</li>
            <li className="item">Trabalhe Conosco</li>
          </ul>

          <ul className="contact-list">
            <li className="title">contato</li>
            <li className="item">
              acme@acme.com
            </li>
            <li className="item">
              (00) 5555 0123
            </li>
            <li className="item">
              (00) 95555 0123
            </li>
          </ul>

          <ul className="icon-list">
            <li className="item">
              <InstagramIcon />
            </li>
            <li className="item">
              <FacebookIcon />
            </li>
            <li className="item">
              <YoutubeIcon />
            </li>
            <li className="item">
              <TwitterIcon />
            </li>
          </ul>
      </Col>
  )
}
