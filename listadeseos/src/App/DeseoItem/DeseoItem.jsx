import React from "react";
import classNames from "classnames";
import { useState } from "react";

//Con hook de estado para el checked
const DeseoItem = ({props}) =>{
    const [marcado, setMarcado]=useState(props.cumplido);
    const handleOnClick = () => {
        setMarcado(!marcado);
      };
    return (
        <li key={`deseo${props.i}`} className={classNames(
            'lista-deseos__item',
            { 'lista-deseos__item--cumplido': marcado}
        )}>
            <input id={`deseo${props.i}`} type="checkbox" 
                    checked={marcado} 
                    onClick={handleOnClick} />
            
            <label htmlFor={`deseo${props.i}`}>{props.texto}</label>
        </li>
   
    );
}
export default DeseoItem;