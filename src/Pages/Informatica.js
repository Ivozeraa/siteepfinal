import Styles from '../Css/Pages/Cursos.module.css';
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';
import ImgLabHard from '../components/Imgs/LabHardware.jpeg';
import WJ from "../components/Imgs/artworks-vNUW982wb0nAMhW7-Vk4qfA-t1080x1080.jpg";

export function Informatica() {
    return (
        <div className={Styles.ContainerCurso}>
            <h1 className={Styles.NomeCurso}>
                Curso Técnico em <span>Informática</span>
            </h1>
            <p className={Styles.SobreCurso}>
            O curso técnico de Informática da EEEP Irmã Ana Zélia da Fonseca oferece uma formação sólida e prática aos estudantes interessados em tecnologia e desenvolvimento de sistemas. Durante os três anos de curso, os alunos aprendem conteúdos que vão desde a lógica de programação até o desenvolvimento de aplicativos e sites, além de conhecimentos sobre redes de computadores e segurança digital. As disciplinas visam preparar os estudantes para o mercado de trabalho, proporcionando uma visão abrangente sobre as principais áreas da informática.

Além da teoria, o curso é fortemente focado em práticas laboratoriais, onde os alunos podem aplicar o que aprenderam em situações reais e projetos. Com uma infraestrutura moderna e professores qualificados, a escola incentiva os alunos a desenvolverem habilidades técnicas e a explorarem o raciocínio lógico, essencial para a resolução de problemas. O curso também incentiva a participação em feiras e eventos tecnológicos, promovendo uma imersão no ambiente profissional e abrindo portas para estágios e oportunidades na área.            </p>
            
            
            <section className={Styles.SectionCurso}>
                
                <div className={Styles.DisciplinasCurso}>
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

                <div className={Styles.LabsCurso}>
                    <h1 className={Styles.LabCursoTitulo}>Laboratórios</h1>
                    <div className={Styles.ImgsLabs}>
                        <img src={ImgLabLing} alt="Laboratório de Línguas" />
                        <img src={ImgLabHard} alt="Laboratório de Hardware" />
                    </div>
                </div>
            </section>

            <div className={Styles.ProfessoresCurso}>
                
                <h1 className={Styles.ProfCursoTitulo}>Professores do Curso</h1>
                <div className={Styles.ProfCursoDiv}>
                    <div className={Styles.CardProf}>
                        <img className={Styles.ImgProfs} src={WJ} />
                        <h3 className={Styles.CPCardProf}> Professor</h3>

                    </div>

                    <div className={Styles.CardProf}>
                        <img className={Styles.ImgProfs} src={WJ} />
                        <h3 className={Styles.CPCardProf}> Professor</h3>

                    </div>
                </div>
                

            </div>
            

           
        </div>
    );
}
