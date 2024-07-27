import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './CompShowFarmacos.css'; 

const CompShowFarmacos = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Cargar todos los fármacos al inicio si es necesario
        getAllFarmacos();
    }, []);

    const getAllFarmacos = async () => {
        const URI = 'http://localhost:8000/farmaco/todos';
        try {
            const res = await axios.get(URI);
            setResults(res.data);
        } catch (error) {
            console.error('Error al obtener todos los fármacos:', error);
        }
    };

    return (
        <div className='container'>
            <SearchBar setResults={setResults} />
            <div className='row'>
                <div className='col'>
                    <table className='table table-striped table-hover'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre del Fármaco</th>
                                <th>Nombre de la Farmacia</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.length > 0 ? (
                                results.map((farmaco) => (
                                    <tr key={farmaco.id_farmaco}>
                                        <td>{farmaco.nombre_farmaco}</td>
                                        <td>{farmaco.farmacia?.nombre_farmacia}</td>
                                        <td>{farmaco.precio_farmaco}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No se encontraron resultados.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowFarmacos;