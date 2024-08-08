import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/farmacia/';

const CompShowFarmacia = () => {
    const { id } = useParams();
    const [farmacia, setFarmacia] = useState({});

    

    const getFarmaciaById = useCallback(async () => {
        try {
            const res = await axios.get(`${URI}${id}`);
            setFarmacia(res.data);
        } catch (error) {
            console.error('Error al obtener la farmacia:', error);
        }
    }, [id]);

    useEffect(() => {
        getFarmaciaById();
    }, [getFarmaciaById]);

    return (
        <div>
            <h2>{farmacia.nombre_farmacia}</h2>
            <p>Direccion de la farmacia:  {farmacia.direccion_farmacia}</p>
            
        </div>
    );
};

export default CompShowFarmacia;