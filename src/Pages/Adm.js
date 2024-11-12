import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import WJ from "../components/Imgs/Frente1.jpeg";
import AdmFoto from "../components/Imgs/admFoto.webp";
import MA from "../components/Imgs/marcos.jpg"

export function Adm() {
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
                Curso Técnico em <span>Administração</span>
            </h1>
            <p className={Styles.SobreCurso} data-aos="fade-up">
                O curso técnico em Administração da EEEP Irmã Ana Zélia da Fonseca prepara os alunos para atuar nas funções administrativas de empresas, abordando áreas como gestão de pessoas, finanças, marketing e logística. Com uma abordagem prática, o curso inclui atividades como projetos de empreendedorismo e controle financeiro, além de participação em feiras e eventos de negócios. A formação oferece uma base sólida para o mercado de trabalho ou para continuidade em uma graduação.
            </p>
            
            <section className={Styles.SectionCurso}>
                <div className={Styles.DisciplinasCurso} data-aos="fade-up">
                    <h1 className={Styles.TituloDisciplina}>Disciplinas do Curso</h1>

                    <h2 className={Styles.SubtituloDisciplinas}>Primeiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Contabilidade Aplicada</li>
                        <li className={Styles.ItemDisciplinas}>Direito Empresarial</li>
                        <li className={Styles.ItemDisciplinas}>Fundamentos de Marketing</li>
                        <li className={Styles.ItemDisciplinas}>Introdução ao Curso Técnico e a Ética Profissional </li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas}>Segundo Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Administração de Recursos Humanos</li>
                        <li className={Styles.ItemDisciplinas}>Contabilidade de Custos</li>
                        <li className={Styles.ItemDisciplinas}>Economia e Mercado</li>
                        <li className={Styles.ItemDisciplinas}>Teoria Geral da Administração</li>
                        <li className={Styles.ItemDisciplinas}>Trade Marketing</li>
                        <li className={Styles.ItemDisciplinas}>Gestão da Qualidade</li>
                        <li className={Styles.ItemDisciplinas}>Gestão de Departamento Pessoal</li>
                        <li className={Styles.ItemDisciplinas}>Gestão de Projetos</li>
                        <li className={Styles.ItemDisciplinas}>Gestão Organizacional</li>
                        <li className={Styles.ItemDisciplinas}>Técnicas e Atividades Financeiras</li>


                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas}>Terceiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Laboratório de Software, Web e Hardware</li>
                        <li className={Styles.ItemDisciplinas}>Profissão e Formação</li>
                    </ul>
                </div>
                <div className={Styles.IlustracaoCurso} data-aos="fade-up">
                    <img src={AdmFoto}/>
                </div>
            </section>

            <div className={Styles.ProfessoresCurso} data-aos="fade-up">
                <h1 className={Styles.ProfCursoTitulo}>Professores do Curso</h1>
                <div className={Styles.ProfCursoDiv}>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={MA} alt="Professor" />
                            <div className={Styles.InforProf}>
                                <h3 className={Styles.TitleCardProf}>Marcos Antônio</h3>
                                <p className={Styles.SubtitleCardProf}>Coordenador do Curso</p>
                            </div>                    
                        </div>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={WJ} alt="Professor" />
                        <div className={Styles.InforProf}>
                            <h3 className={Styles.TitleCardProf}>Suiani Amaro</h3>
                            <p className={Styles.SubtitleCardProf}>Orientadora de Estágio</p>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    );
}
