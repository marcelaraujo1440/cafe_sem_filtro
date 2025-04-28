import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../assets/images/logo.png"
import "../assets/css/main.css" 

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* Imagem de fundo */}
      <div className="background-image"></div>

      {/* Conteúdo principal */}
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
