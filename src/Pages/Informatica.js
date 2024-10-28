import Styles from '../Css/Pages/Cursos.module.css'

export function Informatica(){
    return(
        <>
        <div className={Styles.ContainerCurso}>
            <h1 className={Styles.NomeCurso}>
                Curso Técnico em <span>Informatica</span>
            </h1>
            <p className={Styles.SobreCurso}>


            </p>
            <div className={Styles.DisciplinasCurso}>
                <h1 className={Styles.TituloDisciplina}>
                    Disciplinas do Curso
                </h1>

                <h2 className={Styles.SubtituloDisciplinas}>
                    Primerio Ano:
                </h2>
                    
                <ul>
                    <li>HTML e CSS</li>
                    <li>Lógica de Programação</li>
                    <li>Arquitetura e Manutenção de Computadores</li>
                    <li>Planejamento de Carreira</li>
                </ul>

                <h2 className={Styles.SubtituloDisciplinas}>
                    Segundo Ano:
                </h2>
                    
                <ul>
                    <li>Gerencimento de Conteúdo</li>
                    <li>Design Gráfico</li>
                    <li>Redes de Computadores</li>
                    <li>Programação Web</li>
                </ul>

                <h2 className={Styles.SubtituloDisciplinas}>
                    Terceiro Ano:
                </h2>
                    
                <ul>
                    <li>Laboratório de Software, Web e Hardware</li>
                    <li>Profissão e Formação</li>
                </ul>

                <div className={Styles.LabsCurso}>
                    <h1 className={Styles.LabCursoTitulo}>
                        Laboratórios
                    </h1>

                    <div className={Styles.ImgsLabs}>

                    </div>
                </div>
            </div>

            
        </div>


            
        </>
    )
}