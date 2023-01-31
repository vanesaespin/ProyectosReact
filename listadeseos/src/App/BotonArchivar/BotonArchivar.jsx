//import React from "react"
import React, {useState} from "react"


//VERSIÓN SIN HOOKS
// const BotonArchivar = () => {
//     const handleClick = () => {alert ('has pinchado');}
//     return (
//         <button type="button" className='deseos-clear' onClick={handleClick}>
//             Archivar deseos cumplidos. 
//         </button>
//     );
// }
 

//VERSIÓN CON HOOKS para contar clics
const BotonArchivar = () => 
{
    //hook para practicar estados
        const [count, setCount] = useState(0);
        return (
            <button type="button" className='deseos-clear' onClick={() => setCount(count + 1)}>
                Archivar deseos cumplidos. Clicks {count}
            </button>
        );
}


export default BotonArchivar;