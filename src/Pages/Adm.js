import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import WJ from "../components/Imgs/Frente1.jpeg";

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
                        <li className={Styles.ItemDisciplinas}>Estratégias de Marketing</li>
                        <li className={Styles.ItemDisciplinas}>ARH</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas}>Segundo Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Gerenciamento de Conteúdo</li>
                        <li className={Styles.ItemDisciplinas}>Design Gráfico</li>
                        <li className={Styles.ItemDisciplinas}>Redes de Computadores</li>
                        <li className={Styles.ItemDisciplinas}>Programação Web</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas}>Terceiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Laboratório de Software, Web e Hardware</li>
                        <li className={Styles.ItemDisciplinas}>Profissão e Formação</li>
                    </ul>
                </div>
            </section>

            <div className={Styles.ProfessoresCurso} data-aos="fade-up">
                <h1 className={Styles.ProfCursoTitulo}>Professores do Curso</h1>
                <div className={Styles.ProfCursoDiv}>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={WJ} alt="Professor" />
                        <h3 className={Styles.TitleCardProf}>Marcos Antônio</h3>
                    </div>
                    <div className={Styles.CardProf} data-aos="fade-up">
                        <img className={Styles.ImgProfs} src={WJ} alt="Professor" />
                        <h3 className={Styles.TitleCardProf}>Professor</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
