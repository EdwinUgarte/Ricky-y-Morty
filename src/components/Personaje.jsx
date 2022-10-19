import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarPersonaje } from "../functions/funciones";
import './css/personaje.css';

const Personaje = () => {

    const params = useParams();
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
      buscarPersonaje(params.id , setPersonaje);

    }, [])
    

    return ((personaje === null ? 'El personaje no existe' :
    (
        <div className="containerP">
            <h1>{personaje.name}</h1>
            <img src={personaje.image} alt="imagen" />
            <p>Estado actual: {personaje.status}</p>
            <p>Genero: {personaje.gender}</p>
            <p>Especie: {personaje.species}</p>
            <h2>Origen:</h2>
            <p>Planeta: {personaje.origin.name}</p>
            

        </div>
    )));

}

export default Personaje;