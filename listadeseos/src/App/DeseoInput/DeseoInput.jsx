import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DeseoInput = ({onNuevoDeseo}) =>{
    const [nuevoDeseoTexto,setNuevoDeseoTexto]=useState('');

    return (<fieldset className='deseo-input'>
        <legend className='deseo-input__label'>New wish: </legend>
        <input className='deseo-input__field' placeholder='Enter your wish here' 
            value={nuevoDeseoTexto} onChange={e=>setNuevoDeseoTexto(e.target.value)}
            onKeyUp={e =>
                {if (e.key === 'Enter' && nuevoDeseoTexto.length) {
                        onNuevoDeseo({texto:nuevoDeseoTexto, cumplido:false })
                        setNuevoDeseoTexto('');//limpiamos el input
                }
            }}
        />
    </fieldset>);
}

DeseoInput.propTypes = {
    onNuevoDeseo: PropTypes.func,
}
DeseoInput.defaultProp = {
    onNuevoDeseo: ()=>{},
}
export default DeseoInput;