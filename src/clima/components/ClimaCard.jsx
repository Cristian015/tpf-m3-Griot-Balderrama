import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import { ClimaContext } from '../context';


export const ClimaCard = ({ id, nombre, latitud, longitud, activo, temperatura, velViento }) => {

  const { climaList, setClima } = useContext( ClimaContext );

  const deleteClima = () => {
    console.log("eliminando tarj ",id);
    setClima(
      climaList.map( cli => {
        if( cli.id === id){
          return {...cli, activo: false }
        } else {
          return cli
        }
      })
     );
  }
  
  return (
    <div className="col animate__animated animate__fadeIn">
       <div className="card">

        <div className="row no-gutters">
            <div className="col-4">
                <img 
                   src="https://picsum.photos/id/180/600/400"
                   className="card-img"
                   alt="img"
                />
            </div>
                
                <div className="col-8">
                    <h5 className="card-title">Ubicacion #{ id }</h5>
                    <p className="card-text">nombre: { nombre }</p>
                    <p className="card-text">latitud: { latitud }</p>
                    <p className="card-text">longitud: { longitud }</p>
                    
                    <p className="card-text">temperatura: { temperatura } °C</p>
                    <p className="card-text">vel. viento: { velViento } Km/h</p>

                    <div className="palette-actions">
                      <div className="del" onClick={deleteClima}>
                        <FaRegTrashAlt className="delete"></FaRegTrashAlt>
                      </div>
                      <Link className='btn-see-more' to={`/clima/${ id }`}>
                      Mas...
                    </Link>
                    </div>

                    
                </div>
            
        </div>
       </div>
    </div>
  )
}
