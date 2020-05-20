import React from "react"
import "../styles/layout.scss"
import '../images/logo.png'

const header = () => (
    <div className="header ">
<button className="hamburger">
  <span className="hamburger__box">
    <span className="hamburger__inner"></span>
  </span>
</button>
<div className="navigation">
<a className="brand" href="#"><img className="logo" src="logo.png"></img></a>
  <ul className="navigation__list">
    <li className="navigation__item"><a className="nav-link about" href="#about-me" >o mnie</a></li>
    <li className="navigation__item"><a className="nav-link offer" href="#offer">oferta</a></li>
    <li className="navigation__item"><a className="nav-link help" href="#help">formy pomocy</a></li>
    <li className="navigation__item"><a className="nav-link price-list" href="#price-list">cennik</a></li>
    <li className="navigation__item"><a className="nav-link contact" href="#contact">kontakt</a></li>
  </ul>
</div>
</div>
  )
  
  export default header