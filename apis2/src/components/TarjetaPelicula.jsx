import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const TarjetaPelicula = ({ peliSeleccionada }) => {
  // --- estados ---
  const [peli, setPeli] = useState({});

  // --- efectos ---
  useEffect(() => {
    console.log ("El id seleccionado es: "+peliSeleccionada);
    if (peliSeleccionada)
      TraerInfoPelicula();
  }, [peliSeleccionada]);

  // --- funcion para cargar la peli con id: peliSeleccionada---
  const TraerInfoPelicula = async () => {
    try{ 
      const apikey = "8930572ca461d9b58d8f05f72d6f419a";
      const url = `https://api.themoviedb.org/3/movie/${peliSeleccionada}?&language=es-es&api_key=${apikey}`;
      const respuesta = await fetch(url);
      if (respuesta.status===200){
        const json = await respuesta.json();
        setPeli(json);
      }
      else throw new Error ("Algo ha ido mal");
    }
    catch (error){
      console.log("error: "+error);
      peliSeleccionada=false;
    } 
  }

  return (
    peliSeleccionada && //Así, si peliSeleccionada es false, no pintará nada
      <Card className="text-center mb-4" border="secondary" style={{ width: "25rem" }}>
        <Card.Img className="mx-auto mt-3" variant="top"
          src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}
          alt={peli.title}
          style={{ width: "60%",}}
        />
        <Card.Body className="mx-3">
          <Card.Title>{peli.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {peli.tagline}
          </Card.Subtitle>
          {peli.overview}
        </Card.Body>
      </Card>
    
  );
};

export default TarjetaPelicula;
