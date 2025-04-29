import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../assets/images/logo.png"
import "../assets/css/main.css" 

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* imagem de fundo */}
      <div className="background-image"></div>
      {/* conteudo principal */}
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
