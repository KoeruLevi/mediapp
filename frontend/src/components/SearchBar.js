import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'; // Asegúrate de crear este archivo CSS

const SearchBar = ({ setResults }) => {
    const [nombre, setNombre] = useState('');
    const [principioActivo, setPrincipioActivo] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        const URI = 'http://localhost:8000/farmaco/buscar';
        try {
            const res = await axios.get(URI, {
                params: { nombre, principioActivo }
            });
            setResults(res.data);
        } catch (error) {
            console.error('Error al buscar fármacos:', error);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Buscar por nombre de fármaco"
                className="form-control"
            />
            <input
                type="text"
                value={principioActivo}
                onChange={(e) => setPrincipioActivo(e.target.value)}
                placeholder="Buscar por principio activo"
                className="form-control"
            />
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    );
};

export default SearchBar;