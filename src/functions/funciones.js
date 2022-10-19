import axios from "axios"

const endPoint = 'https://rickandmortyapi.com/api/character'

const todosPersonajes = async(state) => {
    const peticion = await axios.get(endPoint)
    state(peticion.data.results)
 
}

const buscarPersonaje = async(id, state) => {
     const peticion = await axios.get(`${endPoint}/${id}`);
     state(peticion.data);
}

export {
    todosPersonajes,
    endPoint,
    buscarPersonaje
}