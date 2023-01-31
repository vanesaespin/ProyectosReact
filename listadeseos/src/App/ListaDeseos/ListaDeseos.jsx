import React from "react";
//import classnames from "classnames";
import DeseoItem from "../DeseoItem/DeseoItem";

const ListaDeseos = ({deseos}) =>{
    //hook para cuando pulsemos el checkbox
    return (
    <ul className='lista-deseos'>
        {deseos.map(({ texto, cumplido }, i) => 
            <DeseoItem props={{texto:texto, cumplido:cumplido, i:i}}/>
            )}
    </ul>
    );
}
    export default ListaDeseos;