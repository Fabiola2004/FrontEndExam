import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CompraTiquete from './Componets/CompraTiquete';
import Resultados from './Componets/Resultados';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ingreso-datos" element={<CompraTiquete />} />
        <Route path="/mostrar-resultados" element={<Resultados />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
