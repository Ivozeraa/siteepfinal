import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';
import ImgLabHard from '../components/Imgs/LabHardware.jpeg';
import WJ from "../components/Imgs/Frente1.jpeg";

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
                Curso Técnico em <span>Eletrotécnica</span>
            </h1>
            <p className={Styles.SobreCurso} data-aos="fade-up">
                O curso técnico em Eletrotécnica da EEEP Irmã Ana Zélia da Fonseca forma profissionais qualificados para atuarem nas áreas de instalações elétricas, automação industrial e manutenção de sistemas elétricos. Ao longo do curso, os alunos aprendem sobre circuitos elétricos, eletrônica, sistemas de potência e programação de dispositivos automatizados. A formação também abrange o desenvolvimento de projetos elétricos residenciais e industriais, capacitando os alunos para trabalharem com eficiência e segurança em ambientes que exigem alta precisão técnica.
                <br />
                Com aulas práticas em laboratórios equipados, o curso permite que os estudantes apliquem a teoria na montagem e manutenção de circuitos e equipamentos elétricos, além de experimentarem a simulação de problemas reais. Projetos práticos e parcerias com empresas do setor são incentivados para que os alunos possam entender as demandas do mercado e desenvolver habilidades de resolução de problemas e trabalho em equipe. Essa formação robusta e prática prepara os técnicos em Eletrotécnica para ingressarem diretamente no mercado de trabalho ou prosseguirem em cursos superiores na área de Engenharia Elétrica ou afins.
            </p>

            <section className={Styles.SectionCurso}>
                <div className={Styles.DisciplinasCurso} data-aos="fade-up">
                    <h1 className={Styles.TituloDisciplina}>Disciplinas do Curso</h1>

                    <h2 className={Styles.SubtituloDisciplinas}>Primeiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>HTML e CSS</li>
                        <li className={Styles.ItemDisciplinas}>Lógica de Programação</li>
                        <li className={Styles.ItemDisciplinas}>Arquitetura e Manutenção de Computadores</li>
                        <li className={Styles.ItemDisciplinas}>Planejamento de Carreira</li>
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
                        <h3 className={Styles.TitleCardProf}>Professor</h3>
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
