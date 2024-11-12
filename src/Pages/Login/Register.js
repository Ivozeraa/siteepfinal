import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../Services/firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Styles from './LoginRegister.module.css';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        role: 'student'
      });

      localStorage.setItem('userName', name);

      alert('Registro bem-sucedido!');
      navigate('/index'); 
    } catch (error) {
      setError('Erro ao registrar. Verifique as informações inseridas.');
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName || 'Usuário Google',
        email: user.email,
        role: 'student'
      });

      localStorage.setItem('userName', user.displayName);

      alert('Registro com Google bem-sucedido!');
      navigate('/index');
    } catch (error) {
      setError('Erro ao registrar com Google.');
    }
  };

  return (
    <div className={Styles.loginContainer}>
      <h2>Registro</h2>
      {error && <div className={Styles.errorMessage}>{error}</div>}
      <form onSubmit={handleRegister}>
        <input
        className={Styles.input}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        
        <button type="submit" className={Styles.botaoSub}>Registrar</button>
      </form>
      <button className={Styles.googleLogin} onClick={handleGoogleRegister}>
        Registrar com Google
      </button>
    </div>
  );
};
