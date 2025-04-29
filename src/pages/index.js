import React from "react"
import Layout from "./components/Layout"
import "./assets/css/main.css"
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet";


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


const Landing = () => {
  return (
    <Layout>
      
      <Helmet>
          <html lang="pt-BR"/>
          <title>Café Sem Filtro</title>
      </Helmet>
     
      <main id="main" className='page'>
           {/* Sobre nós */}
      <section className="about-page">
        <article>
          <h1>Bem-vindo ao</h1>
          <h2 className="playfair-title">Café Sem Filtro</h2>
          <h3 className="open-sans">
            Café Sem Filtro é uma cafeteria artesanal com a proposta de ser saudável, original e acolhedora. Aqui, o café vai além da bebida, é uma experiência sensorial e afetiva.
            Trabalhamos com grãos selecionados de pequenos produtores, cultivados de forma sustentável e preparados com métodos especiais como prensa francesa, siphon e cold brew.
          </h3>
        </article>
        <StaticImage src="../pages/assets/images/sobre.png" alt="Grãos de café e folhas verdes" className="about-img" quality={80} placeholder="blurred" />
      </section>
      {/* Nossos valores */}
      <section id="valores"className='valores-page' >
          <article>
            <h1 className="title">Nossos valores</h1>
              <Wrapper>
              <article>
    <StaticImage src='../pages/assets/images/french.png' alt='Prensa francesa'
      width={200}
      placeholder='blurred'
      layout='constrained'
      className='example-img'
    />
    <h3 className="merriweather">Métodos de Preparação Exclusivos</h3>
    <p className="open-sans"> Oferecemos uma variedade de métodos de preparo, como prensa francesa, siphon e cold brew, permitindo que os clientes experimentem diferentes sabores e aromas.</p>
  </article>
  <article>
    <StaticImage src='../pages/assets/images/coffee-beans.png' alt='Grãos de café'
      width={200}
      placeholder='blurred'
      layout='constrained'
      className='example-img'
    />
    <h3 className="merriweather">Grãos Selecionados e Sustentáveis</h3>
    <p className="open-sans">Trabalhamos com fornecedores locais que utilizam práticas de cultivo sustentável, garantindo que os grãos sejam de alta qualidade e provenientes de comércio justo.</p>
  </article>
  <article>
    <StaticImage src='../pages/assets/images/coffee.png' alt='Xícara de café'
      width={200}
      placeholder='blurred'
      layout='constrained'
      className='example-img'
    />
    <h3 className="merriweather">Experiências Interativas</h3>
    <p className="open-sans">Promovemos workshops de barista e degustações de café semanalmente, onde os clientes podem aprender sobre a arte do café e experimentar a preparação de suas próprias bebidas, tornando a visita mais envolvente e educativa.</p>
  </article>
</Wrapper>
      <h2 className="playfair-title">Experiências Interativas no Café Sem Filtro: Como Funciona?</h2>
      <h3 className="open-sans">Aqui no <b>Café Sem Filtro</b>, você não só toma um café incrível, você também aprende a prepará-lo!
      <br/>
      
      No Café Sem Filtro, toda <b>quarta-feira</b> e <b>sábado</b>, às <b>16h</b>, promovemos <b>workshops</b> de barista e sessões de <b>degustação</b>.
      Você aprende técnicas de preparo, conhece diferentes métodos de <b>extração</b> e ainda experimenta cafés <b>especiais</b> selecionados por nossos especialistas.
      <b> Venha</b> e participe, descubra o mundo do café de um jeito <b>prático</b> e <b>delicioso!</b> ☕✨
     </h3>
      
      </article>
    </section>

   {/* Cardápio */}
  <h1 id="cardapio" className="title">Cardápio</h1>
  <section className="cardapio-page">
    <article>
    <h3>CAFÉ QUENTE</h3>
  <div className="cardapio">
    <ul className="cardapio-itens" aria-label="Lista de cafés quentes">
      <li className="card">
        <StaticImage src='../pages/assets/images/aurora_da_serra.png' alt='Prensa francesa'
          placeholder='blurred'
          layout='constrained'
          className='example-img'
          loading="lazy"
        />
        <div className="card-content">
          <h4>Aurora da Serra</h4>
          <p className="raleway">Preparado na prensa francesa com grãos 100% arábica cultivados de forma sustentável nas montanhas do sul de Minas.</p>
          <h5 className="roboto">R$ 9,00</h5>
        </div>
      </li>
          <li className="card" >
          <StaticImage src='../pages/assets/images/cafe_do_barista.png' alt='Xícara de espresso duplo'
          placeholder='blurred'
          layout='constrained'
          className='example-img'
          loading="lazy"
          />
            <div className="card-content">
              <h4>Café do Barista</h4>
              <p className="raleway">Espresso duplo tirado com precisão em máquina italiana, feito com blend especial da casa. Cada xícara é uma aula sobre pressão, tempo e equilíbrio.</p>
              <h5 className="roboto">R$ 14,00</h5>
            </div>
          </li>
          <li className="card" >
          <StaticImage src='../pages/assets/images/syphon.png' alt='Filtro Siphon'
          placeholder='blurred'
          layout='constrained'
          className='example-img'
          loading="lazy"
          />
            <div className="card-content">
              <h4>Encanto do Siphon</h4>
              <p className="raleway"> Extraído pelo método japonês de siphon, este café revela um perfil limpo e aromático, com notas florais e final doce. Uma experiência visual e sensorial.</p>
              <h5 className="roboto">R$ 14,00</h5>
            </div>
          </li>
          <li className="card" >
          <StaticImage src='../pages/assets/images/v60_coffee.png' alt='Filtro v60'
          placeholder='blurred'
          layout='constrained'
          className='example-img'
          loading="lazy"
          />
            <div className="card-content">
              <h4>Luar do Cerrado</h4>
              <p className="raleway">Filtrado no V60 com grãos do cerrado mineiro, este café apresenta acidez cítrica equilibrada e leveza. Perfeito para quem aprecia delicadeza nos sabores.</p>
              <h5 className="roboto">R$ 10 ,00</h5>
            </div>
          </li>
        </ul>
        <StaticImage src="../pages/assets/images/cafe_barista.png" alt="Xícara de espresso duplo sendo feito escrito Café do Barista ao lado"

     
        placeholder='blurred'
        layout='constrained'
        className='example-img'
        loading="lazy"
        />
      </div>
    </article>

    <article>
      <h3>CAFÉ GELADO</h3>
      <div className="cardapio">
        <ul className="cardapio-itens" aria-label="Lista de cafés gelados">
          <li className="card" >
          <StaticImage src='../pages/assets/images/iced-coffee.png' alt='Copo com café e gelo'
          placeholder='blurred'
          layout='constrained'
          loading="lazy"
          className='example-img'
          />
            <div className="card-content">
              <h4>Cold Brew</h4>
              <p className="raleway">Extraído a frio por 18 horas com grãos de alta origem e acidez suave.</p>
              <h5 className="roboto">R$ 11,00</h5>
            </div>
          </li>
          <li className="card" >
          <StaticImage src='../pages/assets/images/coffee-orange.png' alt='Xícara de espresso com um copo de suco de laranja ao lado'
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content">
              <h4>Breeze de Café com Laranja</h4>
              <p className="raleway">Espresso artesanal servido com suco fresco de laranja e pedras de gelo. Refrescante, cítrico e inusitado</p>
              <h5 className="roboto">R$ 14,00</h5>
            </div>
          </li>
          <li className="card" >
          <StaticImage src='../pages/assets/images/latte_gelado.png' alt='Xícara de café latte gelado'
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content">
              <h4>Latte Gelado Artesanal</h4>
              <p className="raleway">Espresso orgânico com leite integral vaporizado e resfriado, servido sobre gelo com um toque de baunilha natural</p>
              <h5 className="roboto">R$ 13,00</h5>
            </div>
          </li>
          <li className="card" >
          <StaticImage src='../pages/assets/images/espuma.png' alt='Xícara de cafe com uma espuma em cima'
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content" >
              <h4>Espuma de Gelo</h4>
              <p className="raleway">Café filtrado servido gelado com espuma aerada feita à mão e um leve toque de canela.</p>
              <h5 className="roboto">R$ 10,00</h5>
            </div>
          </li>
          
        </ul>
        <StaticImage src="../pages/assets/images/img_cold_brew.png" alt="Copo com café e gelo escrito Cold Brew ao lado"
        
        placeholder='blurred'
        layout='constrained'
         loading="lazy"
        className='example-img'
        />
      </div>
    </article>

    <article>
      <h3>SALGADOS</h3>
      <div className="cardapio">
        <ul className="cardapio-itens" aria-label="Lista de salgados">
          <li className="card" >
          <StaticImage src='../pages/assets/images/croissant.png' alt='Croissant'
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content">
              <h4>Croissant de Queijo da Serra</h4>
              <p className="raleway">Massa folhada leve e feita com farinha integral, recheada com queijo artesanal de pequenos produtores da região serrana </p>
              <h5 className="roboto">R$ 9,50</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/pao-de-queijo.png' alt='Pão de queijo'
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content" >
              <h4>Pão de Queijo</h4>
              <p className="raleway">Receita tradicional mineira com polvilho artesanal e queijo curado de fazendas locais. Casquinha crocante por fora e interior macio. Vai bem com qualquer café da casa!</p>
              <h5 className="roboto">R$ 7,00</h5>
            </div>
          </li>
          
        </ul>
        <StaticImage src="../pages/assets/images/pao_de_queijo.png" alt="Pão de queijo escrito Pão de queijo ao lado "
     
        placeholder='blurred'
        layout='constrained'
         loading="lazy"
        className='example-img'
        />
      </div>
    </article>


    <article>
      <h3>SOBREMESAS</h3>
      <div className="cardapio">
        <ul className="cardapio-itens" aria-label="Lista de sobremesas">
          <li className="card" >
          <StaticImage src='../pages/assets/images/cake.png' alt='Bolo de cacau'
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content" >
              <h4> Bolo de Cacau</h4>
              <p className="raleway">Bolo úmido de cacau 70% orgânico, adoçado com açúcar mascavo e finalizado com castanhas-do-pará crocantes. Sem lactose. </p>
              <h5 className="roboto">R$ 9,00</h5>
            </div>
          </li>
          <li className="card">
          <StaticImage src='../pages/assets/images/tiramisu.png' alt='Tiramisù '
          placeholder='blurred'
          layout='constrained'
           loading="lazy"
          className='example-img'
          />
            <div className="card-content" >
              <h4>Tiramisù do Cerrado</h4>
              <p className="raleway"> Releitura brasileira da clássica sobremesa italiana: camadas de biscoito artesanal embebido em espresso da casa, creme leve e toque de pequi confitado..</p>
              <h5 className="roboto">R$ 14,00</h5>
            </div>
          </li>
          
        </ul>
        <StaticImage src="../pages/assets/images/tiramisu_2.png" alt="Um prato com Tiramisù escrito Tiramisù ao lado"
       
        placeholder='blurred'
        layout='constrained'
         loading="lazy"
        className='example-img'
        />
      </div>
    </article>
  </section>

  {/* Contato */}
  <section id="contato" className="contato-page">
          <h1 className="title">Contato</h1>
          <h2 className="text-contato open-sans">Peça pelo Whatsapp!</h2>
          <h3 className="text-contato raleway">Fale com a gente agora!</h3>
          <div className="img-contato">
            <a href="https://web.whatsapp.com/">
              <StaticImage src="../pages/assets/images/whatsapp.png" alt="Logo do Whatsapp"  loading="lazy" placeholder="blurred" layout="constrained" className="img-contato" />
            </a>
          </div>
   </section>
  </main>
  </Layout>
  )
}


export default Landing


