import React from 'react';
import classnames from 'classnames';
import './App.css';

{/*VERSION DEL EJERCICIO USANDO LA LIBRERIA CLASSNAMES*/}
const deseos = [
    { texto: 'ir a la luna', cumplido: false },
    { texto: 'aprobar este módulo', cumplido: false },
    { texto: 'pagar el gimnasio', cumplido: true },
    { texto: 'aprender React', cumplido: false },
    
] 

const App = () => 
  <div className='app'>
    <h1>My wish list APP </h1>
    <fieldset className='deseo-input'>
        <legend className='deseo-input__label'>New wish: </legend>
        <input className='deseo-input__field' placeholder='Enter your wish here' />
    </fieldset>
    <ul className='lista-deseos'>
        {deseos.map(({ texto, cumplido }, i) => (
            <li key={texto} className={classnames(
                'lista-deseos__item',
                 { 'lista-deseos__item--cumplido': cumplido}
            )}>
                <input id={`deseo${i}`} type="checkbox" checked={cumplido} />
                <label htmlFor={`deseo${i}`}>{texto}</label>
            </li>
        ))}
    </ul>
    {/* botón */}
    <button type="button" className='deseos-clear'>Archivar deseos cumplidos</button>
</div>;

export default App;
