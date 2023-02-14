import React from "react";
import foto1 from './foto1.png'
import { useState, useEffect } from 'react';
/*Crear un componente de tipo img que contenga una imagen. Al
posicionar el cursor encima de la imagen cambiaremos la opacidad de
la imagen. Al posicionar el cursor fuera de la imagen restableceremos
el valor a la opacidad. Adicionalmente a través de una etiqueta h2
mostraremos cuando estemos encima o fuera de la imagen el valor de la
opacidad.*/
const Ej2 = ()=> {

    const [opacidad, setOpacidad] = useState("1");

    useEffect (()=>{
      document.querySelector("img").style.opacity=opacidad;
     
    },[opacidad]);
    return (
        <>
            <img src={foto1} alt="foto de react" 
                onMouseEnter={()=>setOpacidad("0.2")} 
                onMouseLeave={()=>setOpacidad("1")}></img>
            <h2>El valor de la opacidad es: {opacidad}</h2>
        </>
    )
}




export default Ej2;