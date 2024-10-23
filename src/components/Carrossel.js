import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Carrossel.css';

export function Carrossel(props) {
  const settings = {
    autoplay: true,   // Habilitar autoplay
    infinite: true,   // Habilitar loop infinito
    speed: 500,       // Velocidade de transição
    slidesToShow: 1,  // Número de slides a mostrar
    slidesToScroll: 1,// Número de slides a rolar
    arrows: false,     // Mostrar botões de próxima/anterior
  };

  return (
    <div className="carrossel-container">
      <Slider {...settings}>
        <div>
          <img src={props.imagem1} alt="" />
          <p>Legenda da Imagem 1</p>
        </div>
        <div>
          <img src={props.imagem2} alt="Descrição da Imagem 2" />
          <h1 className='tituloImg1'>Teste</h1>
          <p>Legenda da Imagem 2</p>
        </div>
        <div>
          <img src={props.imagem3} alt="Descrição da Imagem 3" />
          <p>Legenda da Imagem 3</p>
        </div>
      </Slider>
      <h1 className='titulo'>Bem-vindo ao site <br></br>da EEEP Irmã Ana Zélia da Fonseca</h1>
    </div>
  );
}
