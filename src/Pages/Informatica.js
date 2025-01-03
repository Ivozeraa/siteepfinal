import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';
import ImgLabHard from '../components/Imgs/LabHardware.jpeg';
import WJ from "../components/Imgs/walter.png";
import LV from "../components/Imgs/lineker.png";
import { color } from 'framer-motion';

export function Informatica() {
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
                Curso Técnico em <span style={{color: 'purple'}}>Informática</span>
            </h1>
            <p className={Styles.SobreCurso} data-aos="fade-up">
                O curso técnico de Informática da EEEP Irmã Ana Zélia da Fonseca oferece uma formação sólida e prática em tecnologia e desenvolvimento de sistemas ao longo de três anos. Os alunos aprendem lógica de programação, desenvolvimento de aplicativos e sites, redes de computadores e segurança digital. O curso foca na aplicação prática, com laboratórios que simulam situações reais, além de contar com uma infraestrutura moderna e professores qualificados. Também incentiva a participação em feiras e eventos tecnológicos, proporcionando aos estudantes uma imersão no mercado de trabalho e oportunidades de estágio.
            </p>

            <section className={Styles.SectionCurso}>
                <div className={Styles.DisciplinasCurso} data-aos="fade-up">
                    <h1 className={Styles.TituloDisciplina}>Disciplinas do Curso</h1>

                    <h2 className={Styles.SubtituloDisciplinas } style={{color: 'purple'}}>Primeiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>HTML e CSS</li>
                        <li className={Styles.ItemDisciplinas}>Lógica de Programação</li>
                        <li className={Styles.ItemDisciplinas}>Arquitetura e Manutenção de Computadores</li>
                        <li className={Styles.ItemDisciplinas}>Planejamento de Carreira</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'purple'}}>Segundo Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Gerenciamento de Conteúdo</li>
                        <li className={Styles.ItemDisciplinas}>Design Gráfico</li>
                        <li className={Styles.ItemDisciplinas}>Redes de Computadores</li>
                        <li className={Styles.ItemDisciplinas}>Programação Web</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'purple'}}>Terceiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Laboratório de Software, Web e Hardware</li>
                        <li className={Styles.ItemDisciplinas}>Profissão e Formação</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'purple'}}>Estágio:</h2>
                    <p className={Styles.PDisciplinas}>No terceiro ano dos cursos técnicos, os alunos devem ter o Estágio, onde colocarão em pratica o que aprenderam nos anos anteriores,e serão inseridos no mercado de trabalho. Ele pode ser organizado tanto pelos orientadores de Estágio, quanto pelos professores do curso.No final dele os Alunos deverão fazer um Trabalho de Conclusão de Curso (TCC) sobre as experiências desafios e aprendizagens.</p>
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
                        <img className={Styles.ImgProfs} src={WJ} alt="Professor" />
                        <div className={Styles.InforProf}>
                            <h3 className={Styles.TitleCardProf}>Walter Jr.</h3>
                            <p className={Styles.SubtitleCardProf}>Coordenador do Curso</p>
                        </div>
                    </div>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={LV} alt="Professor" />
                        <div className={Styles.InforProf}>
                            <h3 className={Styles.TitleCardProf}>Lineker Vidal</h3>
                            <p className={Styles.SubtitleCardProf}>Orientador de Estágio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
