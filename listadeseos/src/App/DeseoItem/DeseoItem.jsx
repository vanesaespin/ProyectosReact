import React, { useEffect, useState } from "react";
import classNames from "classnames";

/*Añadimos la ultima funcionalidad: modificar colores segun la antigüedad con el hook de efecto */
const DeseoItem = ({texto, cumplido, id, onCumplidoChange}) =>{

        const [edad, setEdad] = useState(0); //edad: segundos que lleva sin completarse

        useEffect (()=> {
            let intervalo;
            if (cumplido){
                setEdad(0)
            }
            else{
                intervalo = setInterval (()=>{ 
                    if (cumplido) {clearInterval (intervalo);}
                    else {setEdad (c=>c+1);} //mejor poner esto que age + 1
                    },1000);
                }  
            return () => clearInterval (intervalo);
        },[cumplido]);
        
        return (
        <li className={classNames(
            'lista-deseos__item',{ 
                'lista-deseos__item--cumplido': cumplido,
                'lista-deseos__item--warning' : edad >= 10 && edad <20,
                'lista-deseos__item--danger' : edad >= 20,
            }
        )}>
            <input id={id} type="checkbox" checked={cumplido} 
                 onChange={e => onCumplidoChange(e.target.checked)} />          
            <label htmlFor={id}>{texto}</label>
        </li>
        );
  
    }

// const DeseoItem = ({texto, cumplido, onCumplidoChange, id}) =>{
  
//     return (
//         <li className={classNames(
//             'lista-deseos__item',
//             { 'lista-deseos__item--cumplido': cumplido}
//         )}>
//             <input id={id} type="checkbox" 
//                     checked={cumplido} 
//                     onChange={e => onCumplidoChange(e.target.checked)} />
            
//             <label htmlFor={id}>{texto}</label>
//         </li>
//     );
// }
export default DeseoItem;