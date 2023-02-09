import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Contador = () => {
    const [conta, setConta]=useState(0);
    useEffect (() => {
        const intervalo = setInterval ( ()=> setConta (c=>c+1), 1000)            
        return () => clearInterval (intervalo);
    
    }, []);

    return <p>{conta}</p>;
}

/*VERSION DONDE EL USEEFFECT DEPENDE DEL CONTADOR CONTA*/
// const Contador = () => {
//     const [conta, setConta]=useState(0);
//     useEffect (() => {
//         const intervalo = setInterval ( ()=> setConta (conta+1), 1000)            
//         return () => clearInterval (intervalo);
    
//     }, [conta]);

//     return <p>{conta}</p>;
// }

export default Contador;