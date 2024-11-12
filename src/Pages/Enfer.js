import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from '../Css/Pages/Cursos.module.css';
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';
import ImgLabHard from '../components/Imgs/LabHardware.jpeg';
import WJ from "../components/Imgs/Frente1.jpeg";

export function Enfer() {
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
                Curso Técnico em <span>Enfermagem</span>
            </h1>
            <p className={Styles.SobreCurso} data-aos="fade-up">
                O curso técnico de Enfermagem da EEEP Irmã Ana Zélia da Fonseca oferece uma formação sólida e prática aos estudantes interessados em saúde. Durante os três anos de curso, os alunos aprendem conteúdos que vão desde os cuidados básicos até a assistência em áreas hospitalares mais complexas. O curso prepara os alunos para o mercado de trabalho com conhecimento teórico e prática em ambientes de estágio.
                O curso também foca no desenvolvimento de habilidades técnicas, como administração de medicamentos, primeiros socorros e suporte a pacientes, e promove a ética profissional e o trabalho em equipe.
            </p>
            
            <section className={Styles.SectionCurso}>
                <div className={Styles.DisciplinasCurso} data-aos="fade-up">
                    <h1 className={Styles.TituloDisciplina}>Disciplinas do Curso</h1>

                    <h2 className={Styles.SubtituloDisciplinas}>Primeiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Anatomia e Fisiologia</li>
                        <li className={Styles.ItemDisciplinas}>Ética e Legislação em Enfermagem</li>
                        <li className={Styles.ItemDisciplinas}>Primeiros Socorros</li>
                        <li className={Styles.ItemDisciplinas}>Noções de Farmacologia</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas}>Segundo Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Enfermagem em Saúde Pública</li>
                        <li className={Styles.ItemDisciplinas}>Enfermagem Obstétrica</li>
                        <li className={Styles.ItemDisciplinas}>Enfermagem Pediátrica</li>
                        <li className={Styles.ItemDisciplinas}>Técnicas de Enfermagem</li>
                    </ul>

                    <h2 className={Styles.SubtituloDisciplinas}>Terceiro Ano:</h2>
                    <ul className={Styles.ListaDisciplinas}>
                        <li className={Styles.ItemDisciplinas}>Enfermagem em Terapia Intensiva</li>
                        <li className={Styles.ItemDisciplinas}>Gestão em Enfermagem</li>
                    </ul>
                </div>

                <div className={Styles.LabsCurso} data-aos="fade-up">
                    <h1 className={Styles.LabCursoTitulo}>Laboratórios</h1>
                    <div className={Styles.ImgsLabs}>
                        <img src={ImgLabLing} alt="Laboratório de Línguas" />
                        <img src={ImgLabHard} alt="Laboratório de Hardware" />
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
