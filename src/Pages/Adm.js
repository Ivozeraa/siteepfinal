import Styles from '../Css/Pages/Cursos.module.css';
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';
import ImgLabHard from '../components/Imgs/LabHardware.jpeg';
import WJ from "../components/Imgs/artworks-vNUW982wb0nAMhW7-Vk4qfA-t1080x1080.jpg";

export function Adm() {
    return (
        <div className={Styles.ContainerCurso}>
            <h1 className={Styles.NomeCurso}>
                Curso Técnico em <span>Administração</span>
            </h1>
            <p className={Styles.SobreCurso}>
            O curso técnico em Administração da EEEP Irmã Ana Zélia da Fonseca prepara os alunos para atuar nas funções administrativas de empresas, abordando áreas como gestão de pessoas, finanças, marketing e logística. Com uma abordagem prática, o curso inclui atividades como projetos de empreendedorismo e controle financeiro, além de participação em feiras e eventos de negócios. A formação oferece uma base sólida para o mercado de trabalho ou para continuidade em uma graduação.</p>
            
            
            <section className={Styles.SectionCurso}>
                
                <div className={Styles.DisciplinasCurso}>
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
