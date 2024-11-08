import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../Css/Carrossel.module.css';
import { useSpring, animated } from '@react-spring/web';

export function Carrossel(props) {
  const settings = {
    autoplay: true,   // Habilitar autoplay
    infinite: true,   // Habilitar loop infinito
    speed: 500,       // Velocidade de transição
    slidesToShow: 1,  // Número de slides a mostrar
    slidesToScroll: 1,// Número de slides a rolar
    arrows: true,     // Mostrar botões de próxima/anterior
    draggable: false,
  };

  // Efeito de fade-in para o título
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Duracao do efeito (1 segundo)
  });

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

      <animated.h1 className={Styles.titulo} style={fadeIn}>
        Bem-vindo ao site da <br/> <span>EEEP Irmã Ana Zélia da Fonseca</span>
      </animated.h1>
      
      <animated.p className={Styles.desc} style={fadeIn}>
        <strong>Transformando vidas por meio da educação e da formação profissional.</strong>
      </animated.p>
    </div>
  );
}
