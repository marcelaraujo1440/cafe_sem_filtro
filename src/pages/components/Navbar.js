import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

import "../assets/css/navbar.css";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <div className="left-links">
            <AnchorLink to="#sobre" className="nav-link" onClick={() => setShow(false)}>
              Sobre nós
            </AnchorLink>
            <AnchorLink to="#valores" className="nav-link" onClick={() => setShow(false)}>
              Valores
            </AnchorLink>
          </div>

          <div className="right-links">
            <AnchorLink to="#cardapio" className="nav-link" onClick={() => setShow(false)}>
              Cardápio
            </AnchorLink>
            <AnchorLink to="#contato" className="nav-link" onClick={() => setShow(false)}>
              Contato
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
