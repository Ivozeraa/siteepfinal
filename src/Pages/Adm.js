import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import AdmFoto from "../components/Imgs/admFoto.webp";
import SA from "../components/Imgs/Suiani.jpg"
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
                Curso Técnico em <span style={{color: 'rgb(0, 0, 200)'}}>Administração</span>
            </h1>
            <p className={Styles.SobreCurso} data-aos="fade-up">
                O curso técnico em Administração da EEEP Irmã Ana Zélia da Fonseca prepara os alunos para atuar nas funções administrativas de empresas, abordando áreas como gestão de pessoas, finanças, marketing e logística. Com uma abordagem prática, o curso inclui atividades como projetos de empreendedorismo e controle financeiro, além de participação em feiras e eventos de negócios. A formação oferece uma base sólida para o mercado de trabalho ou para continuidade em uma graduação.
            </p>
            
            <section className={Styles.SectionCurso}>
                <div className={Styles.DisciplinasCurso} data-aos="fade-up">
                    <h1 className={Styles.TituloDisciplina}>Disciplinas do Curso</h1>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(0, 0, 200)'}}>Primeiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Contabilidade Aplicada</li>
                        <li className={Styles.ItemDisciplinas}>Direito Empresarial</li>
                        <li className={Styles.ItemDisciplinas}>Fundamentos de Marketing</li>
                        <li className={Styles.ItemDisciplinas}>Introdução ao Curso Técnico e a Ética Profissional </li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(0, 0, 200)'}}>Segundo Ano:</h2>
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

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(0, 0, 200)'}}>Terceiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Estratégia de Produção</li>
                        <li className={Styles.ItemDisciplinas}>Logística Empresarial</li>
                        <li className={Styles.ItemDisciplinas}>Responsabilidade Socioambiental</li>
                        <li className={Styles.ItemDisciplinas}>Gestão de Vendas</li>

                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas} style={{color: 'rgb(0, 0, 200)'}}>Estágio:</h2>
                    <p className={Styles.PDisciplinas}>No terceiro ano dos cursos técnicos, os alunos devem ter o Estágio, onde colocarão em pratica o que aprenderam nos anos anteriores,e serão inseridos no mercado de trabalho. Ele pode ser organizado tanto pelos orientadores de Estágio, quanto pelos professores do curso.No final dele os Alunos deverão fazer um Trabalho de Conclusão de Curso (TCC) sobre as experiências desafios e aprendizagens.</p>

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
                        <img className={Styles.ImgProfs} src={SA} alt="Professor" />
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
