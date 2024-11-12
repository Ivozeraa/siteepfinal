import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import Styles from '../Css/Footer.module.css'; 

export function Footer() {
    return (
        <div className={Styles.Footer}>
            <footer>
                <p>© 2024 Irmã Ana Zélia da Fonseca - Todos os direitos reservados.</p>
                <div className={Styles.Redes}>
                    <a href="https://www.instagram.com/epirmaanazelia?igsh=eHFxNHl0NnNlNjVh" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href='https://www.facebook.com/people/EEEP-Irm%C3%A3-Ana-Zelia-da-Fonseca/100067499587093/?sk=about'>
                    <FontAwesomeIcon icon={faFacebook} /> 
                        
                    </a>

                    <a href='#gogle'>
                    <FontAwesomeIcon icon={faGoogle} /> 
                        
                    </a>
                </div>
                
            </footer>
        </div>
    );
}

