import React from "react";
import PropTypes from 'prop-types';
//Podemos acortar:
const Cabecera = ({texto}) => 
    <h1> {texto} </h1>

Cabecera.propTypes = {
    texto: PropTypes.string.isRequired,
}
Cabecera.defaultProps = {
    texto: 'Mi titulo por defecto',
}
export default Cabecera;  