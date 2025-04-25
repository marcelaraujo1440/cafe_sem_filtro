import * as React from "react"
import Layout from "./components/Layout"

export default function Home() {
  return<Layout>
  <main className="hero-section">
    <div className="hero-text">
      <div className="welcome-button">
        Bem-vindo ao
      </div>
      <h1>Café Sem Filtro</h1>
      <p>
        Café Sem Filtro é uma cafeteria artesanal com a proposta de ser saudável,
        original e acolhedora. Aqui, o café vai além da bebida – é uma experiência
        sensorial e afetiva. Trabalhamos com grãos selecionados de pequenos produtores,
        cultivados de forma sustentável e preparados com métodos especiais como prensa francesa,
        siphon e cold brew.
      </p>
    </div>
    <div className="hero-image">
      <img src="" alt="Grãos de café e pó de café" />
    </div>
  </main>
</Layout>
}
