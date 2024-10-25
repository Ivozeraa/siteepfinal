import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../Css/Carrossel.module.css';

export function Carrossel(props) {
  const settings = {
    autoplay: true,   // Habilitar autoplay
    infinite: true,   // Habilitar loop infinito
    speed: 500,       // Velocidade de transição
    slidesToShow: 1,  // Número de slides a mostrar
    slidesToScroll: 1,// Número de slides a rolar
    arrows: true,     // Mostrar botões de próxima/anterior
  };

  return (
    <div className={Styles.carrosselContainer}>
      <Slider {...settings}>
        <div>
          <img src={props.imagem1} alt="" />
        </div>
        <div>
          <img src={props.imagem2} alt="Descrição da Imagem 2" />
        </div>
        <div>
          <img src={props.imagem3} alt="Descrição da Imagem 3" />
        </div>
      </Slider>
      <h1 className={Styles.titulo}>Bem-vindo ao site <span>EEEP Irmã Ana Zélia da Fonseca</span></h1>
    </div>
  );
}
