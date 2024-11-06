import React from 'react';
import './App.css';
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



export function App() {
  return (
    <>
    <BrowserRouter >
      <Router />
    </BrowserRouter>
    </>
  );
}


