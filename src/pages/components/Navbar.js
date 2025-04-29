import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';

import "../assets/css/navbar.css";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <button className="nav-btn" onClick={() => setShow(!show)}>
          <FiAlignJustify />
        </button>
        <Link to="/" className="logo">
        <StaticImage 
               src="../assets/images/logo.png" 
               alt='Logo do Café Sem Filtro'
               placeholder='blurred'
               layout="fixed"
               width={180}
               height={100}
               quality={100}
               objectFit="contain"
             />
        </Link>
      </div>

      <div className={show ? "nav-links show-links" : "nav-links"}>
        <div className="left-links">
          <AnchorLink to="#sobre" className="nav-link raleway" onClick={() => setShow(false)}>
            Sobre nós
          </AnchorLink>
          <AnchorLink to="#valores" className="nav-link raleway" onClick={() => setShow(false)}>
            Nossos Valores
          </AnchorLink>
        </div>

        <div className="right-links">
          <AnchorLink to="#cardapio" className="nav-link raleway" onClick={() => setShow(false)}>
            Cardápio
          </AnchorLink>
          <AnchorLink to="#contato" className="nav-link raleway" onClick={() => setShow(false)}>
            Contato
          </AnchorLink>
        </div>
      </div>
    </div>
  </nav>
  );
  
};
export default Navbar