import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Usuarios = ()=> {
  const [usuarios, setUsuarios]=useState ([]);

  useEffect(() => {
    fetchDatos();
  }, []);

  const fetchDatos = async () => {
    try{
      const url = "https://jsonplaceholder.typicode.com/users";
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      //console.log(JSON.stringify(json));
      setUsuarios(json);
    }
    catch (error){
      console.log("error: "+error);
    } 
  }

  return (
    <ul>
      {usuarios.map(({username,email,id},i) =>
        <li id = {`usuario${i}`} key = {username}> 
            <Link to={`Posts/${id}`}>{username} - {email}</Link>
        </li>
)}
    </ul>
  )
}

export default Usuarios;