import React, { useState, useEffect } from 'react';
import '../Css/Cookie.css'; 

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!acceptedCookies) {
      setIsVisible(true); 
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', true); 
    setIsVisible(false); 
  };

  return (
    isVisible && (
      <div className="cookie-consent">
        <p>Este site utiliza cookies para garantir que você tenha a melhor experiência.</p>
        <button onClick={handleAccept}>Aceitar</button>
      </div>
    )
  );
};

export default CookieConsent;
