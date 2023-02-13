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
    
    <DeseoInput onNuevoDeseo={deseo => setDeseos([...deseos, deseo ])} />

    <ListaDeseos deseos={deseos} onDeseosChange={setDeseos}/>
  
    <BotonArchivar onArchivadoClick={()=>setDeseos(deseos.filter(deseo=>!deseo.cumplido))}/> 

  </div>
  )
}
  
export default App;
