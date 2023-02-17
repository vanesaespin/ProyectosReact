import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import getMoviedb from "../helpers/getMoviedb";


const SelectorPelicula = ({ setIdSeleccionado }) => {
  // estados.
  const [nombrePelis, setNombrePelis] = useState( []);

  // efectos
  useEffect(() => {
    traerPeliculas();
  }, []);

  // lógica de funciones
  const traerPeliculas = () => {
    getMoviedb()
      .then((peliculas) => setNombrePelis(peliculas))
      .catch((error) => console.error(error));
  };

 

  return (
    <Form.Select onChange={(e) => setIdSeleccionado(e.target.value!=0?e.target.value:false)}>

      <option value="0">Seleccione una película</option>
      {nombrePelis.map((peli) => (
        <option value={peli.id} key={peli.id}>
          {peli.title}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectorPelicula;
