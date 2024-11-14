import Styles from "../Css/Titulo.module.css"; 

function Titulo(props) {
    return (
        <div className={Styles.Titulo}>
            <h1 className={Styles.H1Titulo}>{props.titulo}</h1>
        </div>
    );
}

export default Titulo;