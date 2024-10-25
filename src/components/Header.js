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

                    <a href="/" className="option"> 
                        <FontAwesomeIcon icon={faHome} />
                    </a>

                    <div style={{ position: 'relative' }}  >
                        <button onClick={toggleList} className={"option"}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </button>

                        {/* Tabela de Cursos*/}
                        <ul className={showList ? 'showList' : ''}>
                            <li>
                                <a href="/Adm">
                                    <div className='curso'>
                                        <p>Administração </p>
                                        <p><FontAwesomeIcon icon={faEnvelope}/></p>
                                    </div>
                                    </a>
                            </li>

                            <li>
                                <a href="/Eletro">
                                    <div className='curso'>
                                        <p >Eletrotecnica</p>
                                        <p><FontAwesomeIcon icon={faBolt} /></p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/Enfer">
                                    <div className='curso'>
                                        <p>Enfermagem</p>
                                        <p><FontAwesomeIcon icon={faSyringe} /></p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/Informatica">
                                    <div className='curso'>
                                        <p>Informática</p>
                                        <p><FontAwesomeIcon icon={faCode} /></p>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <a href="/login" className='login'>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Login</p>
                    </a>

                </nav>
            </header>
        </div>
    );
}


