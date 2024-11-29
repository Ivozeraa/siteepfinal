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
            <Titulo titulo="Objetivo" />
                <div data-aos="fade-up" className={Styles.container}>
                    <p>A Escola Estadual de Educação Profissional Irmã Ana Zélia da Fonseca tem como objetivo oferecer uma formação técnica e profissional de alta qualidade, preparando seus alunos para as exigências do mercado de trabalho contemporâneo. Com um currículo diversificado, alinhado às necessidades do setor, a escola busca desenvolver não apenas habilidades práticas e teóricas, mas também fortalecer competências essenciais para a vida profissional, como a ética, a cidadania e a responsabilidade social. Além disso, a instituição se compromete a promover a inclusão social e o empoderamento de seus estudantes, visando a construção de uma sociedade mais justa, equitativa e solidária. Ao investir no potencial dos alunos, a escola contribui para que eles se tornem cidadãos conscientes e preparados para os desafios da atualidade.</p>

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
