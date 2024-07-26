import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de crear este archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a MediPrecio</h1>
      <p className="home-subtitle">Tu sitio de confianza para comparar precios de medicamentos.</p>
      <Link to="/buscar" className="btn btn-primary home-button">Buscar Fármacos</Link>
    </div>
  );
};

export default Home;