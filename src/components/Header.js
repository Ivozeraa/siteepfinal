import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faUser, faBolt, faCode, faSyringe, faEnvelope, faCrown } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../Services/firebase'; 
import { UserInfoModal } from './UserInforModal'; 
import styles from "../Css/Header.css"; 

export function Header() {
    const [showList, setShowList] = useState(false);
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false); // Controle do modal
    const [userPhoto, setUserPhoto] = useState("/default-avatar.png"); // Foto padrão

    const listRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleList = () => {
        setShowList(!showList);
    };

    const closeList = (event) => {
        if (listRef.current && !listRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setShowList(false);
        }
    };

    const handleScroll = () => {
        if (showList) {
            setShowList(false);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser({
                    name: currentUser.displayName,
                    photoURL: currentUser.photoURL || "/default-avatar.png", 
                });
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', closeList);
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousedown', closeList);
            document.removeEventListener('scroll', handleScroll);
        };
    }, [showList]);

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

                    <div style={{ position: 'relative' }}>
                        <button onClick={toggleList} className="option" ref={buttonRef}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </button>
                        
                        <ul className={showList ? 'showList' : ''} ref={listRef}>
                            <li>
                                <a href="/Adm">
                                    <div className='curso'>
                                        <p><FontAwesomeIcon icon={faEnvelope}/></p>
                                        <p>Administração</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Eletro">
                                    <div className='curso'>
                                        <p><FontAwesomeIcon icon={faBolt} /></p>
                                        <p>Eletrotécnica</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Enfer">
                                    <div className='curso'>
                                        <p><FontAwesomeIcon icon={faSyringe} /></p>
                                        <p>Enfermagem</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Informatica">
                                    <div className='curso'>
                                        <p><FontAwesomeIcon icon={faCode} /></p>
                                        <p>Informática</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a href="/ranking" className="option"> 
                        <FontAwesomeIcon icon={faCrown} />
                    </a>
                    
                    {user ? (
                        <div className="user-profile">
                            <img 
                                src={userPhoto} 
                                alt={user.name || "Usuário"} 
                                className="user-icon" 
                                onClick={() => setShowModal(true)} // Abre o modal
                            />
                        </div>
                    ) : (
                        <a href="/login" className='login'>
                            <FontAwesomeIcon icon={faUser} />
                            <p>Login</p>
                        </a>
                    )}
                </nav>
            </header>

            {showModal && (
                <UserInfoModal 
                    onClose={() => setShowModal(false)} 
                    setUserPhoto={setUserPhoto} 
                />
            )}
        </div>
    );
}
