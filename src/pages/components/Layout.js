import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
//no caso do css nao precisa dizer o que esta importando, apenas colocar o caminho completo
import "./layout.css"

const Layout = ({children}) => {
    //cria o layout padrao de todas as paginas
  return (
    /* OU se usa apenas <> ... </>*/
    <React.Fragment>
      <Navbar/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout