import React from 'react';
import './App.css';
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'


export function App() {
  return (
    <>
    <BrowserRouter >
      <Router />
    </BrowserRouter>
    </>
  );
}


