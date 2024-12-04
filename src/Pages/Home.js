import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagem3 from '../components/Imgs/Biblioteca.jpeg';
import Imagem2 from '../components/Imgs/LabLinguas.jpeg';
import Imagem1 from '../components/Imgs/Frente1.jpeg';
import { Carrossel } from '../components/Carrossel';
import Titulo from '../components/Titulo';
import Styles from "../Css/Home.module.css";
import WT from "../components/Imgs/wergila.png";
import RA from "../components/Imgs/rivanildo.jpeg";
import AM from "../components/Imgs/chietinha.jpg";
import AS from "../components/Imgs/aline.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBook, faWrench, faCrown, faSchool, faBriefcase, faProjectDiagram, faSchoolFlag, faCogs, faTools, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FAQ } from "../components/FAQ";
import IMGOBJ from "../components/Imgs/pessoaObjetivo.png"

export function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={Styles.Home}>
            <div data-aos="fade-up" className="imagemPrincipal"></div>
            <Carrossel imagem3={Imagem3} imagem2={Imagem2} imagem1={Imagem1} />

            <div className={Styles.Edital} data-aos="fade-up">
                <div className={Styles.TitulosEdital}>
                    <h2>Acesse o Edital</h2>
                    <p>Confira todas as informações detalhadas sobre como ingressar na nossa instituição.</p>
                </div>
                <a href="https://www.crede20.seduc.ce.gov.br/wp-content/uploads/sites/107/2024/11/Ana-Zelia.pdf" target="_blank" rel="noopener noreferrer" className={Styles.BotaoEdital}>
                   Ver Edital
                </a>
            </div>

            <div className={Styles.InforHome} data-aos="fade-up">
                <div className={Styles.CardInfor} data-aos="flip-left">
                    <FontAwesomeIcon className={Styles.IconInf} icon={faGraduationCap} />
                    <h3>Cursos Técnicos</h3>
                    <p>Confira os cursos disponíveis em nossa escola.</p>
                    <a href="/">Ver Sobre</a>
                </div>

                <div className={Styles.CardInfor} data-aos="flip-left">
                    <FontAwesomeIcon className={Styles.IconInf} icon={faCrown} />
                    <h3>Ranking Escolar</h3>
                    <p>Consulte o ranking completo de todas as salas de nossa escola</p>
                    <a href="/ranking">Ver Sobre</a>

                </div>

                <div className={Styles.CardInfor} data-aos="flip-left">
                    <FontAwesomeIcon className={Styles.IconInf} icon={faSchoolFlag} />
                    <h3>Resultado Preliminar</h3>
                    <p>Consulte os resultados preliminares de 2025.</p>
                    <a href="/">Ver Sobre</a>
                </div>
            </div>

            <Titulo titulo="Objetivo" />
                <div data-aos="fade-up" className={Styles.container}>
                    <p>A Escola Estadual de Educação Profissional Irmã Ana Zélia da Fonseca oferece formação técnica de qualidade, focada nas demandas do mercado e no desenvolvimento de competências práticas, teóricas e sociais, como ética e cidadania. Promove inclusão social e empoderamento estudantil, formando cidadãos preparados para os desafios contemporâneos e comprometidos com uma sociedade mais justa.</p>

                    <img className={Styles.ImagemObjetivo} src={IMGOBJ} />
                </div>
            <div data-aos="fade-up" className={Styles.Bloco}>
                <h1 className={Styles.TituloMotivo}>Motivos para estudar na EEEP</h1>
                <div className={Styles.motivos}>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faTrophy} />
                        <h3>Melhor escola da CREDE-20</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faBook} />
                        <h3>Profissionais qualificados</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faWrench} />
                        <h3>Cursos técnicos</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faSchool} />
                        <h3>Infraestrutura e recursos de qualidade</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faBriefcase} />
                        <h3>Bolsa estágio</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faProjectDiagram} />
                        <h3>Projetos interdisciplinares</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faTools} />
                        <h3>Preparação para o mercado de trabalho</h3>
                    </div>
                    <div data-aos="flip-left" className={Styles.cardM}>
                        <FontAwesomeIcon className={Styles.IconM} icon={faCogs} />
                        <h3>Aulas práticas em laboratórios</h3>
                    </div>
                </div>
            </div>

            
            <Titulo titulo="Orgão Gestor" />
            <div data-aos="fade-up" className={Styles.gestao}>
                <div data-aos="zoom-in" className={Styles.card}>
                    <div className={Styles.foto}></div>
                    <img src={AM} alt="Anchieta Mariano - Diretor" />
                    <h3>Anchieta Mariano</h3>
                    <p>Diretor</p>
                </div>
                <div data-aos="zoom-in" className={Styles.card}>
                    <div className={Styles.foto}></div>
                    <img src={RA} alt="Rivanildo Alencar - Coordenador" />
                    <h3>Rivanildo Alencar</h3>
                    <p>Coordenador</p>
                </div>
                <div data-aos="zoom-in" className={Styles.card}>
                    <div className={Styles.foto}></div>
                    <img src={WT} alt="Wergila Tavares - Coordenadora" />
                    <h3>Wegila Tavares</h3>
                    <p>Coordenadora</p>
                </div>
                <div data-aos="zoom-in" className={Styles.card}>
                    <div className={Styles.foto}></div>
                    <img src={AS} alt="Aline Santos - Coordenadora" />
                    <h3>Aline Santos</h3>
                    <p>Coordenadora</p>
                </div>

                
            </div>

            <FAQ />
            
        </div>
    );
}
