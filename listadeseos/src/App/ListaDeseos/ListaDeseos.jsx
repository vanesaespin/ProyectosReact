import React from "react";
//import classnames from "classnames";
import DeseoItem from './DeseoItem';

const ListaDeseos = ({deseos, onDeseosChange}) =>{
    //hook para cuando pulsemos el checkbox
    return (
    <ul className='lista-deseos'>
        {deseos.map(({ texto, cumplido }, i) => 
            <DeseoItem texto={texto} cumplido={cumplido} 
                onCumplidoChange={valor => {
                    const deseosModificados = [...deseos];
                    deseosModificados[i].cumplido=valor;
                    onDeseosChange(deseosModificados)}
                 } 
                 id = {`deseo${i}`}
                 key = {texto}
            />
        )}
    </ul>
    );
}
    export default ListaDeseos;