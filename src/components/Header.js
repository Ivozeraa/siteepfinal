import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faUser, faBolt, faCode, faSyringe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from "../Css/Header.css"; 

export function Header() {
    const [showList, setShowList] = useState(false); 
    
const toggleList = () => {
        setShowList(!showList); 
    };

    return (
        <div className={styles.Header}>
            <div className='imgPrincipal'> </div>
            <header>

                <img src="/logoEEEP.png" alt="EEEP Logo" />
                <h1>EEEP Irmã Ana Zélia da Fonseca</h1>
                
                <nav>

                    <a href="#" className="option"> 
                        <FontAwesomeIcon icon={faHome} />
                    </a>

                    <div style={{ position: 'relative' }}  >
                        <a onClick={toggleList} className="option"> 
                            <FontAwesomeIcon icon={faGraduationCap}  />
                        </a>

                        <ul className={showList ? 'showList' : ''}>
                            <li><a href="#">Administração<FontAwesomeIcon icon={faEnvelope} /></a></li>
                            <li><a href="#">Eletrotecnica<FontAwesomeIcon icon={faBolt} /></a></li>
                            <li><a href="#">Enfermagem<FontAwesomeIcon icon={faSyringe} /></a></li>
                            <li><a href="#">Informática<FontAwesomeIcon icon={faCode} /></a></li>
                        </ul>

                    </div>
                    <a href="#" className='login'>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Login</p>
                    </a>

                </nav>
            </header>
        </div>
    );
}

