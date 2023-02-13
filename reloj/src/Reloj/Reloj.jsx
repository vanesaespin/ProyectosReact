import React from "react";
import Contador from "./Contador";
import { useEffect } from "react";
import { useState } from "react";


/*COMPONENTE RELOJ QUE SE ACTUALIZA CADA SEGUNDO SIN BOTÓN*/

const Reloj = () => {

    const [now, setNow] = React.useState(new Date().toLocaleTimeString());

    useEffect (()=>{
        const intervalo = setInterval (() => setNow(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval (intervalo);
    },[]);

    return (
        <div className="container">
            <span className="clock"> {now} </span>
            <br />          
        </div> 
    )

}


/*COMPONENTE RELOJ CON BOTON Y UN CONTADOR*/
// const Reloj = () => {

//     const [now, setNow] = React.useState(new Date().toLocaleTimeString());

//     useEffect (()=>{
//         const tick = () => setNow(new Date().toLocaleTimeString()); 
//         const intervalo = setInterval (tick, 1000);
//         return () => clearInterval (intervalo);
//     },[]);

    

//     return (
//         <div className="container">
//             <span className="clock"> {now} </span>
//             <br />          
//             <Contador intervalo={0}/>
//         </div> 
//     )

// }


/*COMPONENTE RELOJ CON BOTON Y UN CONTADOR*/
const Reloj = () => {

    const [now, setNow] = useState(new Date().toLocaleTimeString());

    return (
        <div className="container">
            <span className="clock"> {now} </span>
            <br />
            <button className="boton"
                onClick={()=>setNow(new Date().toLocaleTimeString())}> Dame la hora </button>
        <Contador/>
        </div>       
    )
}

export default Reloj;