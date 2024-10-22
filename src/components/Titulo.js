import styles from "./components-css/Titulo.css"; 

function Titulo(props) {
    return (
        <div className="Titulo">
            <h1>{props.titulo}</h1>
        </div>
    );
}

export default Titulo;