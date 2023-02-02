import React,{useState} from 'react';
import DeseoInput from './DeseoInput';
import ListaDeseos from './ListaDeseos';
import BotonArchivar from './BotonArchivar';
import Cabecera from './Cabecera';
import './App.css';

const deseosIniciales = [
    { texto: 'ir a la luna', cumplido: false },
    { texto: 'aprobar este módulo', cumplido: false },
    { texto: 'pagar el gimnasio', cumplido: true },
    { texto: 'aprender React', cumplido: false }  
] 

const App = () =>{
  const [deseos, setDeseos] = useState(deseosIniciales);
   
  return (
  <div className='app'>
    <Cabecera texto="Mi lista de deseos"/>
    
    {/*<DeseoInput onNuevoDeseo={deseo => setDeseos([deseo, ...deseos ])} /> */}
 
    <DeseoInput />
    <ListaDeseos deseos={deseos}/>
  
    {/* <BotonArchivar onArchivadoClick={()=>setDeseos(deseos.filter(deseo=>!deseo.cumplido))}/>  */}

    {<BotonArchivar/> }
  </div>
  )
}
  
export default App;
