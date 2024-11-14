import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from '../Css/CarrosselEventos.module.css';

const imagensEventos = [
    { src: '/path/to/event1.jpg', alt: 'Evento 1' },
    { src: '/path/to/event2.jpg', alt: 'Evento 2' },
    { src: '/path/to/event3.jpg', alt: 'Evento 3' },
    { src: '/path/to/event4.jpg', alt: 'Evento 4' },
];

export function CarrosselEventos() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={Styles.carrosselContainer}>
            <Slider {...settings}>
                {imagensEventos.map((imagem, index) => (
                    <div key={index} className={Styles.imagemContainer}>
                        <img
                            src={imagem.src}
                            alt={imagem.alt}
                            className={Styles.imagemCarrossel}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
