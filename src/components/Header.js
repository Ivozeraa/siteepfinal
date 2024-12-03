import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faUser,
  faBolt,
  faCode,
  faSyringe,
  faEnvelope,
  faCrown,
  faSliders,
  faCog,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 
import { signOut } from "firebase/auth"; 
import { auth } from "../Services/firebase";
import { getCurrentUserRole } from "../Services/AuthService";
import { UserInfoModal } from "./UserInforModal";
import styles from "../Css/Header.css";
import { FaCog } from "react-icons/fa";

export function Header() {
  const [showList, setShowList] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    localStorage.getItem("userPhoto") || "/default-avatar.png"
  );
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const userButtonRef = useRef(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate(); 

  const toggleList = () => {
    setShowList(!showList);
  };

  const closeList = (event) => {
    if (
      listRef.current &&
      !listRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowList(false);
    }
  };

  const handleScroll = () => {
    if (showList) {
      setShowList(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          photoURL: currentUser.photoURL || "/default-avatar.png",
        });

        try {
          const userRole = await getCurrentUserRole();
          setRole(userRole);
        } catch (error) {
          console.error(error);
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const closeUserMenu = (event) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target) &&
      !userButtonRef.current.contains(event.target)
    ) {
      setShowUserMenu(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate("/"); 
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeUserMenu);
    return () => {
      document.removeEventListener("mousedown", closeUserMenu);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeList);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", closeList);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showList]);

  return (
    <div className={styles.Header}>
      <div className="imgPrincipal"> </div>
      <header>
        <img src="/logoEEEP.png" alt="EEEP Logo" />
        <h1>EEEP Irmã Ana Zélia da Fonseca</h1>

        <nav>
          <a href="/" className="option">
            <FontAwesomeIcon icon={faHome} />
          </a>

          <div style={{ position: "relative" }}>
            <button onClick={toggleList} className="option" ref={buttonRef}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </button>

            <ul className={showList ? "showList" : ""} ref={listRef}>
              <li>
                <a href="/Adm">
                  <div className="curso">
                    <p>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </p>
                    <p>Administração</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="/Eletro">
                  <div className="curso">
                    <p>
                      <FontAwesomeIcon icon={faBolt} />
                    </p>
                    <p>Eletrotécnica</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="/Enfer">
                  <div className="curso">
                    <p>
                      <FontAwesomeIcon icon={faSyringe} />
                    </p>
                    <p>Enfermagem</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="/Informatica">
                  <div className="curso">
                    <p>
                      <FontAwesomeIcon icon={faCode} />
                    </p>
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
            <div style={{ position: "relative" }}>
              <div
                className="user-profile"
                ref={userButtonRef}
                onClick={toggleUserMenu}
              >
                <img
                  src={userPhoto}
                  alt={user.name || "Usuário"}
                  className="user-icon"
                />
              </div>

              <ul
                className={showUserMenu ? "showList" : ""}
                ref={userMenuRef}
                style={{ right: "0", top: "50px", position: "absolute" }}
              >
                <li>
                  <a href="/configuracoes"><p>
                  <FontAwesomeIcon icon={faCog} />
                </p>
                <p>Configurações</p></a>
                </li>
                <li>
                  <a
                  onClick={handleLogout}><p>
                  <FontAwesomeIcon icon={faSignOut} />
                </p>
                <p>Logout</p>
                </a>
                </li>
                {role === "admin" || role === "Professor" ? (
                  <li>
                    <a href="/administracao"> <p>
                      <FontAwesomeIcon icon={faSliders} />
                    </p>
                    <p>Dashboard</p></a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : (
            <a href="/login" className="login">
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
