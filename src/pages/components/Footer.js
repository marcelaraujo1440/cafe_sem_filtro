import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { AnchorLink } from "gatsby-plugin-anchor-links";


const Footer = () => {
  return (
    <footer>
        
        <div className='collum-3'>
            <div className='image-container'>
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
            </div>
            <div className='slogan'>
                <p className="raleway">
                    Mais que café, uma pausa com propósito.
                </p>
            </div>
        </div>
        <div className='collum-3'>
            <div className='cardapio-link'>
                  <AnchorLink  to="#cardapio"  className="raleway">Veja o Cardápio</AnchorLink>
            </div>
            <div className='slogan'>
                <p className="raleway">
                    Grãos escolhidos com cuidado. Cada xícara, uma história.
                </p>
            </div>
        </div>
        <div className='collum-3'>
            <div className='informacoes'>
                <p className="raleway">
                    Localização: Rua dos Grãos de Café - CEP 12345-678
                </p>
                <p className="raleway">
                    Horário de funcionamento: 06:00 -  19:00 de Seg a Sáb.
                </p>
                <p className="raleway">
                    Telefone: (11) 99140-7988 - Whatsapp
                </p>

               
            
            </div>
        </div>
        
      

    </footer>
  )
}

export default Footer
