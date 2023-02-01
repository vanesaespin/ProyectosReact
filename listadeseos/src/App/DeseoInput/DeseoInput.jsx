
import { useState } from "react";
import React from 'react';


//HAY QUE IR MANDADO HOOKS PARA ARRIBA
const DeseoInput = ({deseos}) =>{
    
    const [mdeseos, setDeseos]=useState(deseos);
     const handleDeseo = ()=>{
       
         //setDeseos (mdeseos.push({texto:"hola", cumplido: false }));
         setDeseos([...deseos, {texto: "blue", cumplido:false} ]
          );
          alert(JSON.stringify(mdeseos));
     }
   
   
    // if (e.key==='Enter'){
    //     alert(e.target.value);
    //     //setDeseos(mdeseos.push({texto:e.target.value, cumplido:false}));
    //     setDeseos( [...mdeseos, { texto:"hola", cumplido: false }]);
    // }

    return (
        <fieldset className='deseo-input'>
            <legend className='deseo-input__label'>New wish: </legend>
            <input id="mi_input" className='deseo-input__field' placeholder='Enter your wish here'
                onKeyUp={handleDeseo}
              // onKeyUp={setDeseos ([...deseos, {texto:"hola", cumplido: false }])}
               />
        </fieldset>
    );
}


export default DeseoInput;