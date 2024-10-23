import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Carrossel} from './components/Carrossel';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import Imagem3 from './components/Imgs/WhatsApp Image 2024-10-22 at 13.38.15.jpeg';

export function App() {
  return (
    <div className="App">
      <div className="imagemPrincipal">
      </div>
      <Header />
      <Carrossel imagem3={Imagem3} imagem2={Imagem3} />
      
      <main className="Main">
        <Section 
          titulo="Titulo" 
        />
      </main>
      <Footer/>
    </div>
  );
}


