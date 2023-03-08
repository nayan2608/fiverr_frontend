
import React from 'react'
import './Footer.scss'

import TwitterImg from './../../images/twitter.png'
import FacebookImg from './../../images/facebook.png'
import LinkedinImg from './../../images/linkedin.png'
import PinterestImg from './../../images/pinterest.png'
import InstagramImg from './../../images/instagram.png'
import LanguageImg from './../../images/language.png'
import CoinImg from './../../images/coin.png'
import HumanImg from './../../images/accessibility.png'

const Footer = () => {
  return (
    <div className="footer">
         <div className="container">
              <div className="top">
                   <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                   </div>
                   <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                   </div>
                   <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                   </div>
                   <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                   </div>
                   <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                   </div>
              </div>
              <hr /> 
              <div className="bottom">
                   <div className="left">
                        <h2>fiverr</h2>
                        <span>© Fiverr International Ltd. 2023</span>
                   </div>
                   <div className="right">
                        <div className="social">
                             <img src={TwitterImg} alt="" />
                             <img src={FacebookImg} alt="" />
                             <img src={LinkedinImg} alt="" />
                             <img src={PinterestImg} alt="" />
                             <img src={InstagramImg} alt="" />
                        </div>
                        <div className="link">
                             <img src={LanguageImg} alt="" />
                             <span>English</span>
                        </div>
                        <div className="link">
                             <img src={CoinImg} alt="" />
                             <span>USD</span>
                        </div>
                        <img src={HumanImg} alt="" />
                   </div>
              </div>
         </div>
    </div>
  )
}

export default Footer;