import React from "react"
import Layout from "./components/Layout"
import { Link } from "gatsby"
import "./assets/css/main.css"
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


const Landing = () => {
  return (
    <Layout>



      <main className='page'>
          <section className='about-page'>
            <article>
            <h1>Bem-vindo ao</h1>
            <h2 className="playfair-title">Café Sem Filtro</h2>
            <h5 className="cal-sans-regular">
              Café Sem Filtro é uma cafeteria artesanal com a proposta de ser saudável, original e acolhedora. 
              Aqui, o café vai além da bebida, é uma experiência sensorial e afetiva. 
              Trabalhamos com grãos selecionados de pequenos produtores, cultivados de forma sustentável e preparados com métodos especiais como prensa francesa, siphon e cold brew.
            </h5>
              
            </article>
            <StaticImage src="../pages/assets/images/sobre.png" alt='uma pessoa colocando sal'
            className='about-img'
            placeholder='blurred'/>
            <article>

            </article>
          </section>
        </main>


<main className='page'>
          <section id="valores"className='valores-page'>
            <article>
            <h1 id="valores" className="title">­Valores</h1>

              <Wrapper>
              <article>
    <StaticImage src='../pages/assets/images/french.png' alt='food'
      width={200}
      placeholder='tracedSVG'
      layout='constrained'
      className='example-img'
    />
    <h4>Métodos de Preparação Exclusivos</h4>
    <p> Oferecemos uma variedade de métodos de preparo, como prensa francesa, siphon e cold brew, permitindo que os clientes experimentem diferentes sabores e aromas.</p>
  </article>
  <article>
    <StaticImage src='../pages/assets/images/coffee-beans.png' alt='food'
      width={200}
      placeholder='tracedSVG'
      layout='constrained'
      className='example-img'
    />
    <h4>Grãos Selecionados e Sustentáveis</h4>
    <p>Trabalhamos com fornecedores locais que utilizam práticas de cultivo sustentável, garantindo que os grãos sejam de alta qualidade e provenientes de comércio justo.</p>
  </article>
  <article>
    <StaticImage src='../pages/assets/images/coffee.png' alt='food'
      width={200}
      placeholder='tracedSVG'
      layout='constrained'
      className='example-img'
    />
    <h4>Experiências Interativas</h4>
    <p className="cal-sans-regular">Promovemos workshops de barista e degustações de café semanalmente, onde os clientes podem aprender sobre a arte do café e experimentar a preparação de suas próprias bebidas, tornando a visita mais envolvente e educativa.</p>
  </article>
</Wrapper>
      <h1 className="playfair-title">Experiências Interativas no Café Sem Filtro: Como Funciona?</h1>
      <h5 className="cal-sans-regular">Aqui no Café Sem Filtro, você não só toma um café incrível, você também aprende a prepará-lo!
      <br/>
      <br/>
      Toda semana, promovemos workshops de barista e degustações especiais, onde nossos especialistas te ensinam técnicas de preparo, segredos do café artesanal e te convidam a experimentar sabores únicos.
      <br/>
      <br/>
      Não precisa ser um expert, basta trazer a vontade de aprender e aproveitar.
        Venha viver essa experiência com a gente! ☕</h5>
      
      </article>
    </section>
  </main>



  <main className="page">
  <h1 id="cardapio" className="title">Cardápio</h1>
  <section className="cardapio-page">
    <article>
      <h3>CAFÉ QUENTE</h3>
      <div className="cardapio">
        <ul className="cardapio-itens">
          <li className="card">
          <StaticImage src='../pages/assets/images/aurora_da_serra.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Aurora da Serra</h4>
              <p>Preparado na prensa francesa com grãos 100% arábica cultivados de forma sustentável nas montanhas do sul de Minas. </p>
              <h5>R$ 9,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/coffee-cup.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Café do Barista</h4>
              <p>Espresso duplo tirado com precisão em máquina italiana, feito com blend especial da casa. Cada xícara é uma aula sobre pressão, tempo e equilíbrio.</p>
              <h5>R$ 14,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/syphon.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Encanto do Siphon</h4>
              <p> Extraído pelo método japonês de siphon, este café revela um perfil limpo e aromático, com notas florais e final doce. Uma experiência visual e sensorial.</p>
              <h5>R$ 14,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/v60_coffee.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Luar do Cerrado</h4>
              <p>Filtrado no V60 com grãos do cerrado mineiro, este café apresenta acidez cítrica equilibrada e leveza. Perfeito para quem aprecia delicadeza nos sabores.</p>
              <h5>R$ 10 ,00</h5>
            </div>
          </li>
        </ul>
        <StaticImage src="../pages/assets/images/cafe_barista.png"
        width={1200}
        height={300}
        placeholder='tracedSVG'
        layout='constrained'
        className='example-img'
        />
      </div>
    </article>


    <article>
      <h3>CAFÉ GELADO</h3>
      <div className="cardapio">
        <ul className="cardapio-itens">
          <li className="card">
          <StaticImage src='../pages/assets/images/iced-coffee.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Cold Brew</h4>
              <p>Extraído a frio por 18 horas com grãos de alta origem e acidez suave.</p>
              <h5>R$ 11,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/coffee-orange.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Breeze de Café com Laranja</h4>
              <p>Espresso artesanal servido com suco fresco de laranja e pedras de gelo. Refrescante, cítrico e inusitado</p>
              <h5>R$ 14,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/latte_gelado.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Latte Gelado Artesanal</h4>
              <p>Espresso orgânico com leite integral vaporizado e resfriado, servido sobre gelo com um toque de baunilha natural</p>
              <h5>R$ 13,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/espuma.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Espuma de Gelo</h4>
              <p>Café filtrado servido gelado com espuma aerada feita à mão e um leve toque de canela.</p>
              <h5>R$ 10,00</h5>
            </div>
          </li>
          
        </ul>
        <StaticImage src="../pages/assets/images/img_cold_brew.png"
        width={1200}
        placeholder='tracedSVG'
        layout='constrained'
        className='example-img'
        />
      </div>
    </article>


    <article>
      <h3>SALGADOS</h3>
      <div className="cardapio">
        <ul className="cardapio-itens">
          <li className="card">
          <StaticImage src='../pages/assets/images/croissant.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Croissant de Queijo da Serra</h4>
              <p>Massa folhada leve e feita com farinha integral, recheada com queijo artesanal de pequenos produtores da região serrana </p>
              <h5>R$ 9,50</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/pao-de-queijo.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Pão de Queijo</h4>
              <p>Receita tradicional mineira com polvilho artesanal e queijo curado de fazendas locais. Casquinha crocante por fora e interior macio. Vai bem com qualquer café da casa!</p>
              <h5>R$ 7,00</h5>
            </div>
          </li>
          
        </ul>
        <StaticImage src="../pages/assets/images/pao_de_queijo.png"
        width={1200}
        height={300}
        placeholder='tracedSVG'
        layout='constrained'
        className='example-img'
        />
      </div>
    </article>


    <article>
      <h3>SOBREMESAS</h3>
      <div className="cardapio">
        <ul className="cardapio-itens">
          <li className="card">
          <StaticImage src='../pages/assets/images/cake.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4> Bolo de Cacau</h4>
              <p>Bolo úmido de cacau 70% orgânico, adoçado com açúcar mascavo e finalizado com castanhas-do-pará crocantes. Sem lactose. </p>
              <h5>R$ 9,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/tiramisu.png' alt='food'
          placeholder='tracedSVG'
          layout='constrained'
          className='example-img'
          />
            <div className="card-content">
              <h4>Tiramisù do Cerrado</h4>
              <p> Releitura brasileira da clássica sobremesa italiana: camadas de biscoito artesanal embebido em espresso da casa, creme leve e toque de pequi confitado..</p>
              <h5>R$ 14,00</h5>
            </div>
          </li>
          
        </ul>
        <StaticImage src="../pages/assets/images/tiramisu_2.png"
        width={1200}
        height={300}
        placeholder='tracedSVG'
        layout='constrained'
        className='example-img'
        />
      </div>
    </article>
  </section>
</main>



<main className="page">
  <section id="contato" className="contato-page">
      <h1 className="title">Contato</h1>
      <h2 className="text-contato">Peça pelo Whatsapp!</h2>
      <h4 className="title">Fale com a gente agora!</h4>
      <div className="img-contato">
        <a href="https://web.whatsapp.com/">
        <StaticImage src='../pages/assets/images/whatsapp.png' alt='food'
            placeholder='tracedSVG'
            layout='constrained'
            className='img-contato'
            />
        </a>
      </div> 
  </section>
</main>

        


    </Layout>
  )
}


export default Landing
//pesquisar dps pq usou o wrapper, para a aprensentação
const Wrapper = styled.section`
  width: 100%;
  max-width: 990px;
  
  padding: 0rem;
  display: grid;
  gap: 6rem;
  grid-template-columns: repeat(3, 1fr); 
  text-align: center;
  

  article {
    
    border: 12px solid #C78252;
    background: rgb(101, 104, 103);
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    width: 100%;
    max-width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: box-shadow 0.3s ease;
  }

  .example-img {
    border-radius: 1rem;
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 1rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    padding: 1rem;

    article {
      height: auto;
      max-width: 90%;
    }

    .example-img {
      max-width: 150px;
    }
  }

  @media (max-width: 480px) {
    article {
      padding: 1rem;
      border-width: 8px;
    }

    .example-img {
      max-width: 120px;
    }
  }
`

