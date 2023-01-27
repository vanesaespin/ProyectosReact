import React, { useState }  from 'react';
import DeseoItem from './DeseoItem';
import ListaDeseos from './ListaDeseos';
import './App.css';

{/*VERSION DEL EJERCICIO USANDO LA LIBRERIA CLASSNAMES*/}
const deseos = [
    { texto: 'ir a la luna', cumplido: false },
    { texto: 'aprobar este módulo', cumplido: false },
    { texto: 'pagar el gimnasio', cumplido: true },
    { texto: 'aprender React', cumplido: false }  
] 



const App = () =>{

{/*hook para practicar estados*/}
const [count, setCount] = useState(0);
return(
  <div className='app'>
    <h1>My wish list APP </h1>
    <DeseoItem />

    {<ListaDeseos deseos={deseos}/>}
    
    {/* botón */}
    <button type="button" className='deseos-clear' onClick={() => setCount(count + 1)}>
      Archivar deseos cumplidos. Clicks {count}
    </button>
</div>
);
}
export default App;
