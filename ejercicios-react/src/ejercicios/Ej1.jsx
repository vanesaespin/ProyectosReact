import React from "react";
import { useState, useEffect } from 'react';

/*Crear un componente que contenga un botón. Al pulsar dicho botón se
cambiará el fondo de la pantalla a un color #abb8c3*/

const Ej1 = ({onBotonPulsado}) => {
    const [fondo, setFondo] = useState("white");

    useEffect (()=>{
      document.body.style.backgroundColor=fondo;
      //alert(fondo);
    },[fondo]);


    return (
    <div>
       <button onClick = {()=>{setFondo("#abb8c3")}}>Pulsa para cambiar fondo</button>
    </div>
    )
}

export default Ej1;