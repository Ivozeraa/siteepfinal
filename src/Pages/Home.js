import Imagem3 from '../components/Imgs/Biblioteca.jpeg';
import Imagem2 from '../components/Imgs/LabLinguas.jpeg';
import Imagem1 from '../components/Imgs/Frente1.jpeg';
import { Carrossel } from '../components/Carrossel';
import { Titulo } from '../components/Titulo';
 
export function Home(){
    return(
        <>
            <div className="App">
                <div className="imagemPrincipal"></div>
                <Carrossel imagem3={Imagem3} imagem2={Imagem2} imagem1={Imagem1}/>
                <Titulo titulo="Objetivo"/>
                <section className="Section">
                    <p>lorem ipsum</p>
                </section>
            </div>
        </>
    )
}
