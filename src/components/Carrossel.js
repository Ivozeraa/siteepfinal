import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../Css/Carrossel.module.css';

export function Carrossel(props) {
  const settings = {
    autoplay: true,  
    infinite: true,  
    speed: 500,      
    slidesToShow: 1,  
    slidesToScroll: 1,
    arrows: true,     
    draggable: false,
  };

  return (
    <div className={Styles.carrosselContainer}>
      <Slider {...settings}>
        <div >
          <img src={props.imagem1} alt="" />
        </div>
        <div>
          <img src={props.imagem2} alt="Descrição da Imagem 2" />
        </div>
        <div>
          <img src={props.imagem3} alt="Descrição da Imagem 3" />
        </div>
      </Slider>
      <h1 className={Styles.titulo}>Bem-vindo ao site da <br/> <span>EEEP Irmã Ana Zélia da Fonseca</span></h1>
    </div>
  );
}
