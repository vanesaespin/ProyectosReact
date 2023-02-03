import React from "react";
import classNames from "classnames";

const DeseoItem = ({texto, cumplido, onCumplidoChange, id}) =>{
  
    return (
        <li className={classNames(
            'lista-deseos__item',
            { 'lista-deseos__item--cumplido': cumplido}
        )}>
            <input id={id} type="checkbox" 
                    checked={cumplido} 
                    onChange={e => onCumplidoChange(e.target.checked)} />
            
            <label htmlFor={id}>{texto}</label>
        </li>
    );
}
export default DeseoItem;