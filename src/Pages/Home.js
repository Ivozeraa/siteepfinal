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
import { faTrophy, faBook, faWrench, faSchool, faBriefcase, faProjectDiagram, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';
import { FAQ } from "../components/FAQ";
import IMGOBJ from "../components/Imgs/imagemObjetivo.png"

export function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className={Styles.Home}>
            <div data-aos="fade-up" className="imagemPrincipal"></div>
            <Carrossel imagem3={Imagem3} imagem2={Imagem2} imagem1={Imagem1} />

            <div className={Styles.Edital} data-aos="fade-up">
                <div className={Styles.TitulosEdital}>
                    <h2>Acesse o Edital</h2>
                    <p>Confira todas as informações detalhadas sobre como ingressar na nossa instituição. Não perca a oportunidade de fazer parte da EEEP Irmã Ana Zélia da Fonseca!</p>
                </div>
                <a href="https://www.crede20.seduc.ce.gov.br/wp-content/uploads/sites/107/2024/11/Ana-Zelia.pdf" target="_blank" rel="noopener noreferrer" className={Styles.BotaoEdital}>
                   Ver Edital
                </a>
            </div>

            <Titulo titulo="Objetivo" />
                <div data-aos="fade-up" className={Styles.container}>
                    <p>A EEEP Irmã Ana Zélia da Fonseca oferece formação técnica e profissional de alta qualidade, preparando alunos para o mercado de trabalho com um currículo diversificado. A escola desenvolve habilidades práticas, teóricas e competências como ética, cidadania e responsabilidade social, promovendo inclusão e empoderamento. Seu objetivo é formar cidadãos conscientes e preparados para os desafios atuais, contribuindo para uma sociedade mais justa e solidária.</p>

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
