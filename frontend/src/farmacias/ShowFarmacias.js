import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/farmacia/'

const CompShowFarmacias = () => {
    const [farmacia, setFarmacia] = useState([])
    useEffect( ()=>{
        getFarmacias()
    },[])

    /* procedimiento para mostrar todas las farmacias */

    const getFarmacias = async () => {
        const res = await axios.get(URI)
        setFarmacia(res.data)
    }


    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre de la farmacia</th>
                                <th>Direccion de la farmacia</th>
                            </tr>

                        </thead>
                        <tbody>
                            {farmacia.map ((farmacia) => (
                                <tr key= {farmacia.id_farmacia}>
                                    <td>{ farmacia.nombre_farmacia }</td>
                                    <td>{ farmacia.direccion_farmacia }</td>
                                    <td>
                                        <Link to={`/farmacia/${farmacia.id_farmacia}`} className='btn btn-info'>Mostrar farmacia</Link>
                                    </td>
                                </tr>

                            )) }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default CompShowFarmacias