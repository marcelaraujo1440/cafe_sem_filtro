import React from 'react'
import {Link} from "gatsby"
import logo from '../images/logo-cafe-sem-filtro-transparent.png'
const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-itens">
        <li>
          <Link to="/">Sobre nós</Link>
        </li>
        <li>
          <Link to="/">Valores</Link>
        </li>
        <li className="logo">
          <img src={logo}alt="Logo Café Sem Filtro" />
       
        </li>
        <li>
          <Link to="/">Cardápio</Link>
        </li>
        <li>
          <Link to="/">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar