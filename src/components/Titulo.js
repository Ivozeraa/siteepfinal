import Styles from "../Css/Titulo.module.css"; 

export function Titulo(props){

    return(
        <>
            <h1 className={Styles.Titulo}>{props.titulo}</h1>
        </>
    );
}