import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper className="page">
      <section className="error-container">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>Ops! Parece que esta página não existe ou foi removida.</p>
        <Link to="/" className="btn">
          Voltar para o início
        </Link>
      </section>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
 

  .error-container {
    max-width: 600px;
    padding: 2rem;
    border-radius: 10px;
  }

  h1 {
    font-size: 10rem;
    margin-bottom: 1rem;
    color: var(--primary-500);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  p {
    margin-bottom: 2rem;
    color: var(--text-light, #777);
  }

  .btn {
    padding: 0.75rem 1.5rem;
    background: var(--primary-500);
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background 0.3s;
  }

  .btn:hover {
    background: var(--primary-700);
  }
`;
