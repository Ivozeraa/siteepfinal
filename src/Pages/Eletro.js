import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';
import ImgLabHard from '../components/Imgs/LabHardware.jpeg';
import WJ from "../components/Imgs/Frente1.jpeg";
import TT from "../components/Imgs/tobias.jpg"
import PeopleIcon from '../components/Imgs/IconEletro.png'

export function Eletro() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className={Styles.ContainerCurso}>
            <h1 className={Styles.NomeCurso} data-aos="fade-up">
                Curso Técnico em <span style={{color: 'rgb(255, 220, 0)'}}>Eletrotécnica</span>
            </h1>
            <img src={PeopleIcon}/>
            <p className={Styles.SobreCurso} data-aos="fade-up">
                O curso técnico em Eletrotécnica da EEEP Irmã Ana Zélia da Fonseca forma profissionais capacitados para atuar em instalações elétricas, automação industrial e manutenção de sistemas elétricos. Com ênfase em circuitos elétricos, eletrônica, sistemas de potência e programação, o curso oferece aulas práticas em laboratórios, permitindo que os alunos apliquem a teoria em projetos reais. A formação prepara os estudantes para o mercado de trabalho ou para prosseguirem em cursos superiores em áreas como Engenharia Elétrica.
            
            </p>

            <section className={Styles.SectionCurso}>
                <div className={Styles.DisciplinasCurso} data-aos="fade-up">
                    <h1 className={Styles.TituloDisciplina}>Disciplinas do Curso</h1>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(255, 220, 0)'}}>Primeiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Desenho Técnico</li>
                        <li className={Styles.ItemDisciplinas}>Higiene e Segurança no Trabalho</li>
                        <li className={Styles.ItemDisciplinas}>Introdução ao Curso e Ética Profissional</li>
                        <li className={Styles.ItemDisciplinas}>Gestão de Qualidade</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(255, 220, 0)'}}>Segundo Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Instalações Elétricas de Baixa Tensão</li>
                        <li className={Styles.ItemDisciplinas}>Comando Elétricos Industrial</li>
                        <li className={Styles.ItemDisciplinas}>Eletrônica Analógica</li>
                        <li className={Styles.ItemDisciplinas}>Eletrônica Digital</li>
                        <li className={Styles.ItemDisciplinas}>Máquinas Elétricas 1</li>
                        <li className={Styles.ItemDisciplinas}>Controlador Lógico Programável</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(255, 220, 0)'}}>Terceiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Laboratório de Software, Web e Hardware</li>
                        <li className={Styles.ItemDisciplinas}>Profissão e Formação</li>
                    </ul>
                </div>

                <div className={Styles.LabsCurso} data-aos="fade-up">
                    <h1 className={Styles.LabCursoTitulo}>Laboratórios</h1>
                    <div className={Styles.ImgsLabs}>
                        <img src={ImgLabLing} alt="Laboratório de Línguas" data-aos="fade-up" />
                        <img src={ImgLabHard} alt="Laboratório de Hardware" data-aos="fade-up" />
                    </div>
                </div>
            </section>

            <div className={Styles.ProfessoresCurso} data-aos="fade-up">
                <h1 className={Styles.ProfCursoTitulo}>Professores do Curso</h1>
                <div className={Styles.ProfCursoDiv}>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={TT} alt="Professor" />
                        <div className={Styles.InforProf}>
                            <h3 className={Styles.TitleCardProf}>Tobias Tavares</h3>
                            <p className={Styles.SubtitleCardProf}>Coordenador do Curso</p>
                        </div>                        </div>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={WJ} alt="Professor" />
                        <div className={Styles.InforProf}>
                            <h3 className={Styles.TitleCardProf}></h3>
                            <p className={Styles.SubtitleCardProf}>Orientador de Estágio</p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}
