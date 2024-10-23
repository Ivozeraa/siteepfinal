import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import styles from '../Css/Footer.module.css'; 

export function Footer() {
    return (
        <div className={styles.Footer}>
            <footer>
                <p>© 2024 Irmã Ana Zélia da Fonseca - Todos os direitos reservados.</p>
                <a href="https://www.instagram.com/epirmaanazelia?igsh=eHFxNHl0NnNlNjVh" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} /> 
                </a>
            </footer>
        </div>
    );
}

