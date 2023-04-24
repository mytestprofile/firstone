import React from 'react';
import {Link} from "react-scroll";
import style from './Nav.module.css'

export const Nav  = () => {
 return (
  <nav className={style.navBar}>
      <Link activeClass="active" to="main"  smooth={true} offset={-100}duration={500}>
          Main
      </Link>
      <Link activeClass="active" to="about"  smooth={true} offset={0} duration={500}>
          About
      </Link>
      <Link activeClass="active" to="carousel"  smooth={true} offset={0} duration={500}>
          Carousel
      </Link>
      <Link activeClass="active" to="contact"  smooth={true} offset={0} duration={500}>
          Contact
      </Link>
  </nav>
 );
};