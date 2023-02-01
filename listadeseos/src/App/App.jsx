import React from 'react';
import DeseoInput from './DeseoInput';
import ListaDeseos from './ListaDeseos';
import BotonArchivar from './BotonArchivar';
import './App.css';
import Cabecera from './Cabecera';

const deseos = [
    { texto: 'ir a la luna', cumplido: false },
    { texto: 'aprobar este módulo', cumplido: false },
    { texto: 'pagar el gimnasio', cumplido: true },
    { texto: 'aprender React', cumplido: false }  
] 



const App = () =>{


  
  // const [mdeseos, setDeseos] = useState(deseos);
  // const [inputValue, setInputValue] = useState('');

  // const nuevoDeseo = (texto) => {
  //   setDeseos([...mdeseos, { texto, cumplido: false }]);
  // }

  return (
  
  <div className='app'>
  <Cabecera texto="Mi lista de deseos"/>

  {/* <DeseoInput cambio={valor=>setInputValue(valor)} deseos={deseos} />*/ }
  <DeseoInput deseos={deseos} />

  <ListaDeseos deseos={deseos}/>
  
  {/* botón */}
  <BotonArchivar />
</div>
)
}
  
export default App;
