import Styles from "../Css/Pages/Ranking.module.css"
import Titulo from "../components/Titulo"

export function Ranking() {
    return (
        <div className={Styles.Ranking}>
            <Titulo titulo="Ranking Escolar" />

            <table className={Styles.Table}>
                <thead className={Styles.Thead}>
                    <tr>
                        <th>Curso</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody className={Styles.Tbody}>
                    <tr className={Styles.Tr}>
                        <td className={Styles.Td}>Administração</td>
                        <td className={Styles.Td}></td>
                    </tr>
                    <tr className={Styles.Tr}>
                        <td className={Styles.Td}>Enfermagem</td>
                        <td className={Styles.Td}></td>
                    </tr>
                    <tr className={Styles.Tr}>
                        <td className={Styles.Td}>Eletro</td>
                        <td className={Styles.Td}></td>
                    </tr>
                    <tr className={Styles.Tr}>
                        <td className={Styles.Td}>Informática</td>
                        <td className={Styles.Td}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
