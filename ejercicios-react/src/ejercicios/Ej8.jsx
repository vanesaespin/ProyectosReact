import React, { useState } from 'react';
import { useEffect } from 'react';

const Ej8 = ()=> {
  const [usuarios, setUsuarios]=useState ([]);

  useEffect(() => {
    fetchDatos();
  }, []);

  const fetchDatos = async () => {
    try{
      const url = "https://jsonplaceholder.typicode.com/users";
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      console.log(JSON.stringify(json));
      setUsuarios(json);
    }
    catch (error){
      console.log("error: "+error);
    } 
  }

  return (
    <ul>
      {usuarios.map(({username,email},i) =>
         <li id = {`usuario${i}`} key = {username}> {username} - {email}</li>
      )}
    </ul>
  )
}

export default Ej8;