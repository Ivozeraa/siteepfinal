import Imagem3 from '../components/Imgs/Biblioteca.jpeg';
import Imagem2 from '../components/Imgs/LabLinguas.jpeg';
import Imagem1 from '../components/Imgs/Frente1.jpeg';
import { Carrossel } from '../components/Carrossel';
import Titulo from '../components/Titulo';
import Styles from "../Css/Home.module.css"
import WT from "../components/Imgs/OIP.jpg"
import RA from "../components/Imgs/R.jpg"
import AM from "../components/Imgs/OIP (1).jpg"
import AS from "../components/Imgs/R (1).jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
export function Home(){
    return(
        <>
            <div className={Styles.Home}>
                <div className="imagemPrincipal"></div>
                <Carrossel imagem3={Imagem3} imagem2={Imagem2} imagem1={Imagem1}/>
                <Titulo titulo="Objetivo"/>
                <div className={Styles.container}>
                    <p>A Escola Profissionalizante Irmã Ana Zélia da Fonseca tem como objetivo oferecer formação técnica e profissional de qualidade, preparando os alunos para o mercado de trabalho. Através de um currículo diversificado e voltado para as demandas do setor, a escola busca desenvolver habilidades práticas e teóricas, além de promover valores como ética, cidadania e responsabilidade social. A instituição também visa fomentar a inclusão social e o empoderamento dos estudantes, contribuindo para a construção de uma sociedade mais justa e equitativa. </p>
                </div>

                <Titulo titulo="Motivos de Ingressão"/>
                <div className={Styles.motivos}>
                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                    <div className={Styles.cardM}>
                        <h2></h2>
                    </div>

                </div>

                <Titulo titulo="Orgão Gestor"/>
                <div className={Styles.gestao}>
                        <div className={Styles.card}>
                            <div className={Styles.foto}></div>
                            <img src={AM} alt='Anchieta Mariano - Diretor'/>
                            <h3>Anchieta Mariano</h3>
                            <p>Diretor</p>
                        </div>

                        <div className={Styles.card}>
                            <div className={Styles.foto}></div>
                            <img src={RA} alt='Rivanildo Alencar - Coordenador'/>
                            <h3>Rivanildo Alencar</h3>
                            <p>Coordenador</p>
                        </div>

                        <div className={Styles.card}>
                            <div className={Styles.foto}></div>
                            <img src={WT} alt='Wergila Tavares - Coordenadora'/>
                            <h3>Wegila Tavares</h3>
                            <p>Coordenadora</p>
                        </div>

                        <div className={Styles.card}>
                            <div className={Styles.foto}></div>
                            <img src={AS} alt='Aline Santos - Coordenadora'/>
                            <h3>Aline Santos</h3>
                            <p>Coordenadora</p>
                        </div>
                </div>

                

                
            </div>
        </>
    )
}
