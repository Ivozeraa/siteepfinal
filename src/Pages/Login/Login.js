import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../Services/firebase'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import Styles from "./LoginRegister.module.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userName = userDoc.data().name;
      
      localStorage.setItem('userName', userName);

      alert('Login bem-sucedido!');
      navigate('/index'); 
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userName = userDoc.exists() ? userDoc.data().name : user.displayName;

      localStorage.setItem('userName', userName);

      alert('Login com Google bem-sucedido!');
      navigate('/index'); 
    } catch (error) {
      setError('Erro ao fazer login com Google.');
    }
  };

  return (
    <div className={Styles.loginContainer}>
      <h2>Login</h2>
      {error && <div className={Styles.errorMessage}>{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          className={Styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <div className={Styles.passwordContainer}>
          <input
            className={Styles.input}
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={Styles.passwordToggle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        
        <button type="submit" className={Styles.botaoSub}>Entrar</button>
      </form>
      <button className={Styles.googleLogin} onClick={handleGoogleLogin}>
        Entrar com Google
      </button>
      <div className={Styles.registerLink}>
        <span>Não tem conta? <a href="/registro">Registre-se</a></span>
      </div>
    </div>
  );
};
