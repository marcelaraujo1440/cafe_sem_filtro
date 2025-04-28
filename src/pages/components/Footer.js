import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Footer = () => {
  return (
    <footer>
        
        <div className='collum-3'>
            <div className='image-container'>
            <img src={logo} alt='Logo café sem filtro'/>
            </div>
            <div className='slogan'>
                <p>
                    Mais que café, uma pausa com propósito.
                </p>
            </div>
        </div>
        <div className='collum-3'>
            <div className='cardapio-link'>
                  <AnchorLink to="#cardapio">Veja o Cardápio</AnchorLink>
            </div>
            <div className='slogan'>
                <p>
                    Grãos escolhidos com cuidado. Cada xícara, uma história.
                </p>
            </div>
        </div>
        <div className='collum-3'>
            <div className='informacoes'>
                <p>
                    Localização: Rua dos Grãos de Café - CEP 12345-678
                </p>
                <p>
                    Horário de funcionamento: 06:00 -  19:00 de Seg a Sáb.
                </p>
                <p>
                    Telefone: (11) 99140-7988 - Whatsapp
                </p>

               
            
            </div>
        </div>
        
      

    </footer>
  )
}

export default Footer
