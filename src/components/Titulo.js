import Styles from "../Css/Titulo.module.css"; 

function Titulo(props) {
    return (
        <div className={Styles.titulo}>
            <h1>{props.titulo}</h1>
        </div>
    );
}

export default Titulo;