import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>The Spicy Meal...</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt laudantium quia necessitatibus dolore, maiores, eaque ducimus doloremque alias similique id dolor repellendus magni, beatae incidunt iusto voluptate modi quod.</p>
            <div className="footer-social-icons">
                <img src={assets.insta_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>8769402944</li>
                <li>contact@spicy.com</li>
            </ul>
        </div> 
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © spicy.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
