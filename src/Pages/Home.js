import Imagem3 from '../components/Imgs/Biblioteca.jpeg';
import Imagem2 from '../components/Imgs/LabLinguas.jpeg';
import Imagem1 from '../components/Imgs/Frente1.jpeg';
import { Carrossel } from '../components/Carrossel';
import Titulo from '../components/Titulo';
import Styles from "../Css/Home.module.css"
 
export function Home(){
    return(
        <>
            <div className={Styles.Home}>
                <div className="imagemPrincipal"></div>
                <Carrossel imagem3={Imagem3} imagem2={Imagem2} imagem1={Imagem1}/>
                <Titulo titulo="Objetivo"/>
                <div className={Styles.container}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                </div>
            </div>
        </>
    )
}
