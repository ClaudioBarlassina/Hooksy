import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../../public/logo.png'
import frase from '../../public/nombreEmpre.png'
import { useEffect } from 'react'
 import AOS from "aos";import "aos/dist/aos.css"

const Navbar = () => {
   useEffect(()=> {
      AOS.init({duration:3000})
      }, [])

  return (
    <nav className="nav-general" data-aos="zoom-out">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="" />
        <img className="frase" src={frase} alt="" />
      </div>

      <ul>
        <li>
          <a href="#projects" className="enlasesprimarios">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#Beneficios" className="enlasesprimarios">
            Beneficios
          </a>
        </li>
        <li>
          <a href="#contact" className="enlasesprimarios">
            Contacto
          </a>
        </li>
      </ul>
      <RxHamburgerMenu className="icono-hamburger"></RxHamburgerMenu>
    </nav>
  )
}

export default Navbar
