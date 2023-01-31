
import { useState } from "react";
import React from 'react';


const DeseoInput = ({deseos}) =>{
    const [mdeseos, setDeseos]=useState({deseos});
    const nuevoDeseo = (e) =>{
        if (e.key==='Enter'){
            alert(e.target.value);
            setDeseos(mdeseos.push({texto:e.target.value, cumplido:false}));
        }
    }

    return (
        <fieldset className='deseo-input'>
            <legend className='deseo-input__label'>New wish: </legend>
            <input className='deseo-input__field' placeholder='Enter your wish here'
                onKeyUp={setDeseos(mdeseos.push({texto:e.target.value, cumplido:false}))} />
        </fieldset>
    );
}


export default DeseoInput;