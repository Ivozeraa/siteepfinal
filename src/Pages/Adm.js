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
            O curso técnico em Administração da EEEP Irmã Ana Zélia da Fonseca prepara os estudantes para lidar com as principais funções administrativas em empresas e organizações. Durante o curso, os alunos desenvolvem habilidades em áreas como gestão de pessoas, finanças, marketing e logística, aprendendo a planejar e executar processos essenciais para o funcionamento de um negócio. Essa formação técnica oferece uma base sólida para que os estudantes possam entrar no mercado de trabalho diretamente ao final do curso ou prosseguir em uma graduação.

Com uma abordagem prática, o curso conta com atividades que simulam situações reais no ambiente administrativo, como projetos de empreendedorismo e exercícios de controle financeiro. A escola também incentiva a participação em feiras e eventos de negócios, permitindo que os alunos desenvolvam habilidades de liderança e comunicação, essenciais para o sucesso na área. Dessa forma, o curso técnico em Administração capacita os estudantes a assumirem responsabilidades na gestão de empresas, seja em microempreendimentos, grandes corporações ou no setor público.</p>
            
            
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
