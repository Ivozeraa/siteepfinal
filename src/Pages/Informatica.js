import Styles from '../Css/Pages/Cursos.module.css'
import ImgLabLing from '../components/Imgs/LabLinguas.jpeg';

export function Informatica(props){
    return(
        <>
        <div className={Styles.ContainerCurso}>
            <h1 className={Styles.NomeCurso}>
                Curso Técnico em <span>Informatica</span>
            </h1>
            <p className={Styles.SobreCurso}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={Styles.DisciplinasCurso}>
                <h1 className={Styles.TituloDisciplina}>
                    Disciplinas do Curso
                </h1>

                <h2 className={Styles.SubtituloDisciplinas}>
                    Primerio Ano:
                </h2>
                    
                <ul className={Styles.ListaDisciplinas}>
                    <li className={Styles.ItemDisciplinas}>HTML e CSS</li>
                    <li className={Styles.ItemDisciplinas}>Lógica de Programação</li>
                    <li className={Styles.ItemDisciplinas}>Arquitetura e Manutenção de Computadores</li>
                    <li className={Styles.ItemDisciplinas}>Planejamento de Carreira</li>
                </ul>

                <h2 className={Styles.SubtituloDisciplinas}>
                    Segundo Ano:
                </h2>
                    
                <ul className={Styles.ListaDisciplinas}>
                    <li className={Styles.ItemDisciplinas}>Gerencimento de Conteúdo</li>
                    <li className={Styles.ItemDisciplinas}>Design Gráfico</li>
                    <li className={Styles.ItemDisciplinas}>Redes de Computadores</li>
                    <li className={Styles.ItemDisciplinas}>Programação Web</li>
                </ul>

                <h2 className={Styles.SubtituloDisciplinas}>
                    Terceiro Ano:
                </h2>
                    
                <ul className={Styles.ListaDisciplinas}>
                    <li className={Styles.ItemDisciplinas}>Laboratório de Software, Web e Hardware</li>
                    <li className={Styles.ItemDisciplinas}>Profissão e Formação</li>
                </ul>

                <div className={Styles.LabsCurso}>
                    <h1 className={Styles.LabCursoTitulo}>
                        Laboratórios
                    </h1>

                    <div className={Styles.ImgsLabs}>
                        <img src={props.ImagemLabLing}></img>
                    </div>
                </div>
            </div>

            
        </div>


            
        </>
    )
}