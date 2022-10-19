import React, { useEffect, useState } from "react";
import './css/inicio.css';

import { todosPersonajes } from "../functions/funciones";
import { Link } from "react-router-dom";




const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, [])

  return (
    <div className="container" >
      {(personajes != null) ?
        personajes.map(personaje => (
          <Link to={`/personaje/${personaje.id}`}>
            <div key={personaje.id} className='personaje'>
              <img src={personaje.image} alt="" />
              <div class='nombre'>{personaje.name}</div>
            </div>
          </Link>
        ))
        : 'No hay personajes'}


    </div>
  );

}

export default Inicio;
